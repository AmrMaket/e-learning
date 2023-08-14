<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\BlogPost;
use App\Models\Collaboration;
use App\Models\EnrolledStudent;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;


class StudentController extends Controller
{
    public function getCoursesInformation()
    {
        $user = Auth::user();
        $courses = Course::with('enrolledStudents')->get();
        foreach ($courses as $course) {
            $remainingCapacity = $course->capacity - $course->enrolledStudents->count();
            $coursesInfo[] = [
                'name' => $course->name,
                'capacity' => $course->capacity,
                'remaining_capacity' => $remainingCapacity,
            ];
        }
        return response()->json([
            'status' => 'success',
            'courses' => $coursesInfo
        ]);
    }

    public function enrollCourse(Request $request)
    {

        // $student_id = Auth::id();
        $student_id = $request->user_id;
        $course_id = $request->course_id;
        $course = Course::find($course_id);
        if (!$course) {
            return response()->json(['message' => 'course does not exist']);
        }

        $existingEnrollement = EnrolledStudent::where('user_id', $student_id)->where('course_id', $course_id)->first();
        if ($existingEnrollement) {
            return response()->json(['message' => 'you already enrolled in this course']);
        }

        $enroll = new EnrolledStudent();
        $enroll->user_id = $student_id;
        $enroll->course_id = $course->id;
        $enroll->final_grade = 0;
        $enroll->finished_at = Carbon::now();
        $enroll->save();
        return response()->json(['message' => $enroll]);
    }

    public function getBlogAndCollaborations()
    {
        $user = Auth::user();
        $blogPosts = BlogPost::with('student')->get();
        foreach ($blogPosts as $blogPost) {
            $blogInfo[] = [
                'title' => $blogPost->title,
                'content' => $blogPost->content,
                'student_name' => $blogPost->student->name,
            ];
        }
        $collaborations = Collaboration::where('type', 'game')->get();
        foreach ($collaborations as $collaboration) {
            $gameCollaborationsInfo[] = [
                'name' => $collaboration->name,
                'link' => $collaboration->link,
            ];
        }

        return response()->json([
            'status' => 'success',
            'blog_posts' => $blogInfo,
            'game_collaborations' => $gameCollaborationsInfo,
        ]);
    }

    public function createBlog(Request $request)
    {
        // $student_id = Auth::id();
        $student_id = $request->user_id;
        $blog = new BlogPost();
        $blog->student_id = $student_id;
        $blog->title = $request->title ? $request->title : $blog->title;
        $blog->content = $request->content ? $request->content : $blog->content;
        $blog->save();
        
        return response()->json(['blog' => $blog]);
    }
} 
