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
    public function addOrUpdateMaterial(Request $request, $id = "add") {
        if ($id == "add") {
            $material = new Material;
        } else {
            $material = Material::find($id);
        }
    
        $material->title = $request->title ? $request->title : $material->title;
        $material->uploaded_files = $request->uploaded_files ? $request->uploaded_files : $material->uploaded_files;
        $material->course_id = $request->course_id ? $request->course_id : $material->course_id;
        $material->save();
    
        return response()->json(["message" => "Material added/updated successfully", "material" => $material]);
    }
}
