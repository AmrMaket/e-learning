<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class ParenttController extends Controller
{
    public function index()
    {
        $parent = Parentt::all();
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

        $parent = Parentt::create($request->all());
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

    public function getQuizGrades()
    {
        try{
        // $parentId = Auth::user();
        $parentId = 2;
        
        $results = DB::table('users')
        -> join('student_quizzes', 'users.child_id', '=', 'student_quizzes.student_id')
        -> join('quizzes', 'student_quizzes.quiz_id', '=', 'quizzes.id')
        -> join('courses', 'quizzes.course_id', '=', 'courses.id')
        -> where('users.id', $parentId)
        ->select(
            'courses.name as course_name', 
            'student_quizzes.grade as student_grade', 
            'quizzes.grade_overall as quiz_grade_overall'
        )
        ->get();

        $averagedResults = [];
        $groupedResults = collect($results)->groupBy('course_name');
    
        foreach ($groupedResults as $courseName => $group) {
            $totalStudentGrade = $group->sum('student_grade');
            $numQuizzes = $group->count();
            $averageStudentGrade = $numQuizzes > 0 ? $totalStudentGrade / $numQuizzes : 0;

            $averagedResults[] = [
                'course_name' => $courseName,
                'avg_quiz_grade' => $averageStudentGrade,
                'quiz_grade_overall' => $group->first()->quiz_grade_overall,
            ];
        }

        return response()->json([
            'status' => 'success',
            'results' => $averagedResults,
        ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred',
            ], 500);
        }
    }
}
