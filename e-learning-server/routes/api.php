<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ParenttController;

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
Route::get('child_quiz_grades',[ParenttController::class, 'getQuizGrades'] );

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
