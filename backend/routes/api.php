<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/tests', [\App\Http\Controllers\TestController::class, 'store']);
Route::get('/tests/{id}', [\App\Http\Controllers\TestController::class, 'show']);
Route::put('/tests/{id}', [\App\Http\Controllers\TestController::class, 'update']);
