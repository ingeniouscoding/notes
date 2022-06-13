<?php

use App\Http\Controllers\Notes\NoteController;
use App\Http\Controllers\User\CheckEmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return [
        'name'  => $request->user()->name,
        'email' => $request->user()->email,
    ];
})->name('get-user');

Route::get('/exists', [CheckEmailController::class, 'show'])->name('check-email');

Route::prefix('notes')->group(function () {
    Route::get('/',          [NoteController::class, 'index'])->name('notes.index');
    Route::post('/',         [NoteController::class, 'store'])->name('notes.store');
    Route::get('/{note}',    [NoteController::class, 'show'])->name('notes.show');
    Route::patch('/{note}',  [NoteController::class, 'update'])->name('notes.update');
    Route::delete('/{note}', [NoteController::class, 'destroy'])->name('notes.destroy');
});
