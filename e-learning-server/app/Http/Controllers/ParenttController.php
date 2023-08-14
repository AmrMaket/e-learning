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

    // public function getQuizGrades()
    // {
    //     try{// $user = Auth::user();
    //     $user_id = 2;
    //     $childId = User::select('child_id')
    //     ->where('id', '=', $user_id)
    //     ->get();
    //     $childId = json_decode($childId, true)[0]['child_id'];

    //     $childName = User::select('name')
    //     // ->where('id', '=', $user->id)
    //     ->where('id', '=', $childId)
    //     ->get();
    //     $childName = json_decode($childName, true)[0]['name'];

    //     $results = DB::table('student_quizzes')
    //     ->join('quizzes', 'student_quizzes.quiz_id', '=', 'quizzes.id')
    //     ->where('student_quizzes.student_id', $childId)
    //     ->select('student_quizzes.grade', 'quizzes.name')
    //     ->get();

    //     return response()->json([
    //         'status' => 'success',
    //         'child' => $childName,
    //         'results' => $results,
    //     ]);
    // } catch (\Exception $e) {
    //     Log::error($e->getMessage());
    
    //     return response()->json([
    //         'status' => 'error',
    //         'message' => 'An error occurred',
    //     ], 500);
    // }
    // }
    public function getQuizGrades()
        {
            try{// $user = Auth::user();
            $parentId = 2;
            
            $results = DB::table('users')
            -> join('student_quizzes', 'users.child_id', '=', 'student_quizzes.student_id')
            -> join('quizzes', 'student_quizzes.quiz_id', '=', 'quizzes.id')
            -> join('courses', 'quizzes.course_id', '=', 'courses.id')
            -> where('users.id', $parentId)
            -> select('courses.name', 'student_quizzes.grade', 'quizzes.grade_overall')
            ->get();
    
            return response()->json([
                'status' => 'success',
                'results' => $results,
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
