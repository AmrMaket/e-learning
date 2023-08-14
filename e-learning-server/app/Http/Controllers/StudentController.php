<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;


class StudentController extends Controller
{
    public function getCoursesInformation()
    {
        $user = Auth::user();
        $courses = Course::with('enrolledStudents')->get();
        $coursesInfo = [];
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
}
