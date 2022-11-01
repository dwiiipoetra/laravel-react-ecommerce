<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[ProductsController::class, 'index']);
Route::post('/products',[ProductsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.products');
Route::get('/products',[ProductsController::class, 'show'])->middleware(['auth', 'verified'])->name('show.products');
Route::get('/products/edit',[ProductsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.products');
Route::post('/products/update',[ProductsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.products');
Route::post('/products/delete',[ProductsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.products');

Route::post('/add-to-carts',[CartController::class, 'store'])->middleware(['auth', 'verified'])->name('add.carts');
Route::get('/carts',[CartController::class, 'show'])->middleware(['auth', 'verified'])->name('show.carts');
Route::post('/carts/delete',[CartController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.carts');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
