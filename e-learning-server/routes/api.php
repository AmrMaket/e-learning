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
Route::get('child_progress',[ParenttController::class, 'getChildProgress'] );
Route::post('send_message',[ParenttController::class, 'sendMessage'] );
Route::get('get_message',[ParenttController::class, 'getMessage'] );
Route::resource('communications', CommunicationController::class);
Route::get('get_attendance',[ParenttController::class, 'getAttendance'] );
Route::get('get_quizzes_notification',[ParenttController::class, 'getQuizzes'] );
Route::get('get_assignments_notification',[ParenttController::class, 'getAssignments'] );
Route::get('get_teacher_info',[ParenttController::class, 'getTeacherInfo'] );

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
