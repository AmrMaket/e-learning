<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ParenttController;
use App\Http\Controllers\CommunicationController;

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
Route::post('child_progress',[ParenttController::class, 'getChildProgress'] );
Route::post('parent_send_message',[ParenttController::class, 'sendMessage'] );
Route::post('get_parent_messages',[ParenttController::class, 'getMessage'] );
Route::resource('parents', ParenttController::class);
Route::post('get_attendance',[ParenttController::class, 'getAttendance'] );
Route::post('get_quizzes_notification',[ParenttController::class, 'getQuizzes'] );
Route::post('get_assignments_notification',[ParenttController::class, 'getAssignments'] );
Route::post('get_teacher_info',[ParenttController::class, 'getTeacherInfo'] );

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
