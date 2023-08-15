<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ParenttController;
use App\Http\Controllers\CommunicationController;
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

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('child_progress',[ParenttController::class, 'getChildProgress'] );
Route::post('parent_send_message',[ParenttController::class, 'sendMessage'] );
Route::post('get_parent_messages',[ParenttController::class, 'getMessage'] );
Route::resource('parents', ParenttController::class);
Route::post('get_attendance',[ParenttController::class, 'getAttendance'] );
Route::post('get_quizzes_notification',[ParenttController::class, 'getQuizzes'] );
Route::post('get_assignments_notification',[ParenttController::class, 'getAssignments'] );
Route::post('get_teacher_info',[ParenttController::class, 'getTeacherInfo'] );
Route::resource('communications', CommunicationController::class);

Route::post('assignments/add-or-update/{id?}', [PostController::class, 'addOrUpdateAssignment']);
Route::post('add-or-update-quiz/{id?}', [PostController::class, 'addOrUpdateQuiz']);
Route::post('add-or-update-lectures/{id?}',[PostController::class,'addOrUpdateLectures']);
Route::post('add-or-update-communication/{id?}',[PostController::class,'addOrUpdateCommunication']);
Route::post('add-or-update-attendance/{id?}',[PostController::class,'addOrUpdateAttendance']);
Route::post('add-or-update-collaboration/{id?}',[PostController::class,'addOrUpdateCollaboration']);
Route::post('add-or-update-material/{id?}',[PostController::class,'addOrUpdateMaterial']);
Route::post('add-or-update-project/{id?}',[PostController::class,'addOrUpdateProject']);
Route::post('messages' , [ChatController::class , "message"]);

Route::get('/courses_available', [StudentController::class, "getCoursesInformation"]);
Route::post('/student_enrollment', [StudentController::class, "enrollCourse"]);
Route::get('/blogs_games', [StudentController::class, "getBlogAndCollaborations"]);
Route::post('/create_blog', [StudentController::class, "createBlog"]);
Route::get('/get_assignments/{user_id}', [StudentController::class, "getAssignmentsAndCorrected"]);
Route::get('/get_assignments', [StudentController::class, "getAssignmentsAndCorrected"]);
Route::get('/get_quizzes/{user_id}', [StudentController::class, "getQuizzesAndCorrected"]);
Route::get('/get_quizzes', [StudentController::class, "getQuizzesAndCorrected"]);
Route::get('/calendly', [StudentController::class, "getTeacherCalendly"]);


