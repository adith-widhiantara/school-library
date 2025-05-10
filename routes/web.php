<?php

use App\Enums\UserType;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookCreatorController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth', 'role:'.UserType::ADMIN])->group(function () {
    Route::resource('users', UserController::class);
    Route::resource('book-creators', BookCreatorController::class);
    Route::resource('books', BookController::class)->except(['index', 'show']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('books', [BookController::class, 'index'])->name('books.index');
    Route::get('books/{book}', [BookController::class, 'show'])->name('books.show');
});
