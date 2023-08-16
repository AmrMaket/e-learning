<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;
use App\Models\Quiz;
use App\Models\Lectures;
use App\Models\Communication;
use App\Models\Attendance;
use App\Models\Collaboration;
use App\Models\Material;
use App\Models\Project;

class PostController extends Controller
{
    function addOrUpdateAssignment(Request $request,$id = "add"){
        if($id == "add"){
            $assignment  = new Assignment;
        }else{
            $assignment = Assignment::find($id);
        }

 
        $assignment->name = $request->name ? $request->name : $assignment->name;
        $assignment->description = $request->description ? $request->description : $assignment->description;
        $assignment->due_date = $request->due_date ? $request->due_date : $assignment->due_date;
        $assignment->posted_at = $request->posted_at ? $request->posted_at : $assignment->posted_at;
        $assignment->course_id = $request->course_id ? $request->course_id : $assignment->course_id;
        $assignment->save();

        return response()->json(["message" => "Assignment added/updated successfully", "assignment" => $assignment]);

    }
    function addOrUpdateQuiz(Request $request, $id = "add") {
        if ($id == "add") {
            $quiz = new Quiz;
        } else {
            $quiz = Quiz::find($id);
        }
    
        $quiz->name = $request->name ? $request->name : $quiz->name;
        $quiz->due_date = $request->due_date ? $request->due_date : $quiz->due_date;
        $quiz->grade_overall = $request->grade_overall ? $request->grade_overall : $quiz->grade_overall;
        $quiz->course_id = $request->course_id ? $request->course_id : $quiz->course_id;
        $quiz->save();
    
        return response()->json(["message" => "Quiz added/updated successfully", "quiz" => $quiz]);
    }

    function addOrUpdateProject(Request $request, $id = "add") {
        if ($id == "add") {
            $project = new Project;
        } else {
            $project = Project::find($id);
        }
    
        $project->project_title = $request->project_title ? $request->project_title : $project->project_title;
        $project->project_des = $request->project_des ? $request->project_des : $project->project_des;
        $project->student_name = $request->student_name ? $request->student_name : $project->student_name;
        $project->course_id = $request->course_id ? $request->course_id : $project->course_id;
        $project->student_id = $request->student_id ? $request->student_id : $project->student_id;
        $project->save();
    
        return response()->json(["message" => "Project added/updated successfully", "project" => $project]);
    }

    function addOrUpdateLectures(Request $request, $id = "add") {
        if ($id == "add") {
            $lecture = new Lectures;
        } else {
            $lecture = Lecture::find($id);
        }
    
        $lecture->google_link = $request->google_link ? $request->google_link : $lecture->google_link;
        $lecture->time = $request->time ? $request->time : $lecture->time;
        $lecture->save();
    
        return response()->json(["message" => "Lecture added/updated successfully", "lecture" => $lecture]);
    }
    
    function addOrUpdateCommunication(Request $request, $id = "add") {
        if ($id == "add") {
            $communication = new Communication;
        } else {
            $communication = Communication::find($id);
        }
    
        $communication->message = $request->message ? $request->message : $communication->message;
        $communication->sender_id = $request->sender_id ? $request->sender_id : $communication->sender_id;
        $communication->recipient_id = $request->recipient_id ? $request->recipient_id : $communication->recipient_id;
        $communication->save();
    
        return response()->json(["message" => "Communication added/updated successfully", "communication" => $communication]);
  
    }
    function addOrUpdateAttendance(Request $request, $id = "add") {
        if ($id == "add") {
            $attendance = new Attendance;
        } else {
            $attendance = Attendance::find($id);
        }
    
        $attendance->present = $request->present ? $request->present : $attendance->present;
        $attendance->student_id = $request->student_id ? $request->student_id : $attendance->student_id;
        $attendance->course_id = $request->course_id ? $request->course_id : $attendance->course_id;
        $attendance->save();
    
        return response()->json(["message" => "Attendance added/updated successfully", "attendance" => $attendance]);
  
    }
    public function addOrUpdateCollaboration(Request $request, $id = "add") {
        if ($id == "add") {
            $collaboration = new Collaboration;
        } else {
            $collaboration = Collaboration::find($id);
        }
    
        $collaboration->name = $request->name ? $request->name : $collaboration->name;
        $collaboration->link = $request->link ? $request->link : $collaboration->link;
        $collaboration->type = $request->type ? $request->type : $collaboration->type;
        $collaboration->course_id = $request->course_id ? $request->course_id : $collaboration->course_id;
        $collaboration->save();
    
        return response()->json(["message" => "Collaboration added/updated successfully", "collaboration" => $collaboration]);
    }
    
    public function postMaterial(Request $request)
    {
    $destinationPath = "public/materials/";

    if ($request->hasFile('uploaded_files')) {
        $file = $request->file('uploaded_files');
        $timestamp = now()->format('Ymd_His');
        $fileExtension = $file->getClientOriginalExtension();
        $fileName = $timestamp . '_' . uniqid() . '.' . $fileExtension;
        
        $path = $file->storeAs($destinationPath, $fileName);

        $newMaterial = new Material;
        $newMaterial->title=$request->title;
        $newMaterial->uploaded_files=$request->uploaded_files;
        $newMaterial->course_id=$request->course_id;        
        $newMaterial->save();

        return response()->json(['message' => 'Material created successfully']);
    }

    return response()->json(['message' => 'File not found or upload failed'], 400);
    }

    public function recordAttendance(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'student_id' => 'required|exists:users,id',
            'status' => 'required|boolean',
        ]);

        $course = Course::findOrFail($request->course_id);
        $student = User::findOrFail($request->student_id);

        $attendance = new Attendance([
            'course_id' => $course->id,
            'student_id' => $student->id,
            'status' => $request->status,
        ]);
        $attendance->save();

        return response()->json([
            'message' => 'Attendance recorded successfully',
            'attendance' => $attendance
        ], 201);
    }

}

