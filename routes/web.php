<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\Admin\ItemController;
use App\Http\Controllers\Admin\CategoryController;

// Public routes
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/catalog', [CatalogController::class, 'index'])->name('catalog.index');
Route::get('/catalog/{item}', [CatalogController::class, 'show'])->name('catalog.show');

// Admin routes
Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return inertia('Admin/Dashboard');
    })->name('dashboard');

    Route::resource('items', ItemController::class);
    Route::resource('categories', CategoryController::class);
});

require __DIR__ . '/auth.php';