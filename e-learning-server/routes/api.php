<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;

use App\Http\Controllers\API\AuthController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/courses_available', [StudentController::class, "getCoursesInformation"]);
Route::post('/student_enrollment', [StudentController::class, "enrollCourse"]);
Route::get('/blogs_games', [StudentController::class, "getBlogAndCollaborations"]);
Route::post('/create_blog', [StudentController::class, "createBlog"]);
Route::get('/get_assignments/{user_id}', [StudentController::class, "getAssignmentsAndCorrected"]);
Route::get('/get_assignments', [StudentController::class, "getAssignmentsAndCorrected"]);
Route::get('/get_quizzes/{user_id}', [StudentController::class, "getQuizzesAndCorrected"]);
Route::get('/get_quizzes', [StudentController::class, "getQuizzesAndCorrected"]);
Route::get('/calendly', [StudentController::class, "getTeacherCalendly"]);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

