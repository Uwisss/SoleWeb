<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Test route
Route::get('/test-admin', function () {
    return 'Test admin route works!';
});

// Public routes
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Tours routes
Route::prefix('tours')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Tours/Index');
    })->name('tours');

    Route::get('/domestic', function () {
        return Inertia::render('Tours/DomesticTours');
    })->name('tours.domestic');

    Route::get('/international', function () {
        return Inertia::render('Tours/InternationalTours');
    })->name('tours.international');
});

// Cruises routes
Route::prefix('cruises')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Cruises/Index');
    })->name('cruises');

    Route::get('/caribbean', function () {
        return Inertia::render('Cruises/Caribbean');
    })->name('cruises.caribbean');

    Route::get('/asian', function () {
        return Inertia::render('Cruises/Asian');
    })->name('cruises.asian');
});

// Visa routes
Route::prefix('visa')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Visa/Index');
    })->name('visa');

    Route::get('/requirements', function () {
        return Inertia::render('Visa/VisaRequirements');
    })->name('visa.requirements');

    Route::get('/application', function () {
        return Inertia::render('Visa/VisaApplication');
    })->name('visa.application');
});

// Simple payment route
Route::get('/payment', function () {
    return Inertia::render('Payment', [
        'package' => (object)[
            'title' => 'Test Package',
            'price' => '299.99',
            'currency' => 'PHP'
        ]
    ]);
});

// Admin routes
Route::prefix('admin')->group(function () {
    // Admin login page
    Route::get('/login', function () {
        return Inertia::render('Admin/Login');
    })->name('admin.login');

    // Admin dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    // Redirect root admin to login
    Route::get('/', function () {
        return redirect('/admin/login');
    });
});

// Fallback route for client-side routing - should be the last route
Route::fallback(function () {
    // Check if the request is for admin routes
    if (request()->is('admin*')) {
        return Inertia::render('Admin/Login');
    }
    
    return Inertia::render('Home');
})->where('any', '.*');
