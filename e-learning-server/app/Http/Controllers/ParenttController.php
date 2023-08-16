<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Parentt;
use Illuminate\Http\Request;
use App\Models\Communication;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CommunicationController;

class ParenttController extends Controller
{
    public function index()
    {
        $parent = User::where('role_id', 3)->get();
        return response()->json($parent);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'role_id' => 'required|numeric',
            'child_id' => 'required|numeric',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $parent = User::create($request->all());
        return response()->json($parent, 200);
    }

    public function show(Parentt $parent)
    {
        return response()->json($parent, 200);
    }

    public function edit(Parentt $parent)
    {
        //
    }

    public function update(Request $request, Parentt $parent)
    {
        $validator = Validator::make( $request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'role_id' => 'required|numeric',
            'child_id' => 'required|numeric',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $parent = Parentt::create($request->all());
        return response()->json($parent, 200);
    }

    public function destroy(Parentt $parent)
    {
        $parent->delete();
        return response()->json('',200);
    }

    public function getChildProgress()
    {
        try{
        $parentId = Auth::id();
        // $parentId = 2;
        // $parentId = $request->get('parent_id');

        $coursesResults = DB::table('users')
        -> join('enrolled_students', 'users.child_id', '=', 'enrolled_students.user_id')
        -> join('courses', 'enrolled_students.course_id', '=', 'courses.id')
        -> where('users.id', $parentId)
        -> select(
            'courses.name as enrolled_course' 
        )
        -> get();
        
        $quizResults = DB::table('users')
        -> join('student_quizzes', 'users.child_id', '=', 'student_quizzes.student_id')
        -> join('quizzes', 'student_quizzes.quiz_id', '=', 'quizzes.id')
        -> join('courses', 'quizzes.course_id', '=', 'courses.id')
        -> where('users.id', $parentId)
        ->select(
            'courses.name as course_name', 
            'student_quizzes.grade as quiz_grade', 
            'quizzes.grade_overall as quiz_grade_overall',
        )
        ->get();

        $averagedQuizResults = [];
        $groupedQuizResults = collect($quizResults)->groupBy('course_name');

        foreach ($groupedQuizResults as $courseName => $group) {
            $totalStudentGrade = $group->sum('quiz_grade');
            $totalQuizGradeOverall = $group->sum('quiz_grade_overall');
            $numQuizzes = $group->count();
            
            $averageStudentGrade = $numQuizzes > 0 ? ($totalStudentGrade / $totalQuizGradeOverall) * 100 : 0;

            $averagedQuizResults[] = [
                'course_name' => $courseName,
                'avg_quiz_grade' => round($averageStudentGrade, 2),
                'quiz_grade_overall' => 100,
            ];
        }

        $assignmentResults = DB::table('users')
        -> join('student_assignments', 'users.child_id', '=', 'student_assignments.student_id')
        -> join('assignments', 'student_assignments.assignment_id', '=', 'assignments.id')
        -> join('courses', 'assignments.course_id', '=', 'courses.id')
        -> where('users.id', $parentId)
        ->select(
            'courses.name as course_name', 
            'student_assignments.grade as assignment_grade',
        )
        ->get();

        $averagedAssignmentResults = [];
        $groupedAssignmentResults = collect($assignmentResults)->groupBy('course_name');
    
        foreach ($groupedAssignmentResults as $courseName => $group) {
            $totalStudentGrade = $group->sum('assignment_grade');
            $numAssignments = $group->count();
            $averageStudentGrade = $numAssignments > 0 ? $totalStudentGrade / $numAssignments : 0;

            $averagedAssignmentResults[] = [
                'course_name' => $courseName,
                'avg_assignment_grade' => $averageStudentGrade,
            ];
        }

        $mergedResults = [];

        $coursesResults = json_decode($coursesResults, true);

        foreach ($coursesResults as $courseResult) {
            $courseName = $courseResult['enrolled_course'];
            $mergedResults[$courseName]['course_name'] = $courseName;
            $mergedResults[$courseName]['avg_assignment_grade'] = null;
            $mergedResults[$courseName]['avg_quiz_grade'] = null;
            $mergedResults[$courseName]['quiz_grade_overall'] = null;

            foreach ($averagedAssignmentResults as $result) {
                if ($result['course_name'] === $courseName && isset($result['avg_assignment_grade'])) {
                    $mergedResults[$courseName]['avg_assignment_grade'] = $result['avg_assignment_grade'];
                    break;
                }
            }

            foreach ($averagedQuizResults as $result) {
                if ($result['course_name'] === $courseName && isset($result['avg_quiz_grade']) && isset($result['quiz_grade_overall'])) {
                    $mergedResults[$courseName]['avg_quiz_grade'] = $result['avg_quiz_grade'];
                    $mergedResults[$courseName]['quiz_grade_overall'] = $result['quiz_grade_overall'];
                    break;
                }
            }
        }

        $finalResults = array_values($mergedResults);

        return response()->json([
            'status' => 'success',
            'results' => $finalResults,
        ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred',
            ], 500);
        }
    }

    public function sendMessage(Request $request) {
        try {
            $parentId = Auth::id();
            $teacherId = $request->input('teacher_id');
            $message = $request->input('message');
            $data = [
                'message' => $message,
                'sender_id' => $parentId,
                'recipient_id' => $teacherId,
            ];
    
            DB::table('communications')->insert($data);
    
            return response()->json(['message' => 'Communication saved successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while sending the message']);
        }
    }

    public function getMessage(Request $request) {

        // $parentId = Auth::user();
        // $parentId = 2;
        $parentId = $request->get('parent_id');
        $messages = Communication::where('recipient_id', $parentId)->get();
        return response()->json([
            'messages' => $messages,
        ]);
    }

    public function getAttendance(Request $request) {

        // $parentId = Auth::user();
        // $parentId = 2;
        $parentId = $request->get('parent_id');
        try{
        $attendanceResults = DB::table('users')
        -> join('attendances', 'users.child_id', '=', 'attendances.student_id')
        -> join('lectures', 'attendances._id', '=', 'lectures.id')
        -> join('courses', 'lectures.course_id', '=', 'courses.id')
        -> where('users.id', $parentId)
        -> select(
            'courses.name as course_name',
            'lectures.time as lecture_time',
            'attendances.present as presence',
        )
        -> get();

        return response()->json([
            'status' => 'success',
            'results' => $attendanceResults,
        ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred',
            ], 500);
        }
    }

    public function getQuizzes() {

        $parentId = Auth::id();
        try{
        $quizNotifyResults = DB::table('users')
        -> join('student_quizzes', 'users.child_id', '=', 'student_quizzes.student_id')
        -> join('quizzes', 'student_quizzes.quiz_id', '=', 'quizzes.id')
        -> where('users.id', $parentId)
        -> select(
            'quizzes.name as quiz_name',
            'quizzes.due_date as due_date',
        )
        -> get();

        return response()->json([
            'status' => 'success',
            'results' => $quizNotifyResults,
        ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred',
            ], 500);
        }
    }

    public function getAssignments() {

        $parentId = Auth::id();
        try{
        $assignmentNotifyResults = DB::table('users')
        -> join('student_assignments', 'users.child_id', '=', 'student_assignments.student_id')
        -> join('assignments', 'student_assignments.assignment_id', '=', 'assignments.id')
        -> where('users.id', $parentId)
        -> select(
            'assignments.name as assignment_name',
            'assignments.due_date as due_date',
        )
        -> get();

        return response()->json([
            'status' => 'success',
            'results' => $assignmentNotifyResults,
        ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred',
            ], 500);
        }
    }

    public function getTeacherInfo() {

        $parentId = Auth::id();
        $childId = User::where('id', $parentId)->pluck('child_id')->first();

        try{
            $teachersResults = DB::table('enrolled_students')
            -> join('courses', 'enrolled_students.course_id', '=', 'courses.id')
            -> join('users', 'courses.teacher_id', '=', 'users.id')
            -> where('enrolled_students.user_id', $childId)
            -> select(
                'users.name as teacher_name',
                'courses.calendly as calendly',
            )
            -> get();
    
            return response()->json([
                'status' => 'success',
                'results' => $teachersResults,
            ], 200, [], JSON_UNESCAPED_SLASHES);
            } catch (\Exception $e) {
                Log::error($e->getMessage());
            
                return response()->json([
                    'status' => 'error',
                    'message' => 'An error occurred',
                ], 500);
            }
    }
}
