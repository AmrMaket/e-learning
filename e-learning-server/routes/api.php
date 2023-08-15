<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

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



Route::post('assignments/add-or-update/{id?}', [PostController::class, 'addOrUpdateAssignment']);
Route::post('add-or-update-quiz/{id?}', [PostController::class, 'addOrUpdateQuiz']);
Route::post('add-or-update-lectures/{id?}',[PostController::class,'addOrUpdateLectures']);
Route::post('add-or-update-communication/{id?}',[PostController::class,'addOrUpdateCommunication']);
Route::post('add-or-update-attendance/{id?}',[PostController::class,'addOrUpdateAttendance']);
Route::post('add-or-update-collaboration/{id?}',[PostController::class,'addOrUpdateCollaboration']);
Route::post('add-or-update-material/{id?}',[PostController::class,'addOrUpdateMaterial']);
Route::post('add-or-update-project/{id?}',[PostController::class,'addOrUpdateProject']);
