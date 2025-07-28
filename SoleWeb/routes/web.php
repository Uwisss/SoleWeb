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
// Test route for LandTours
Route::get('/test-land-tours', function () {
    return Inertia::render('Tours/LandTours');
});

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
    
    Route::get('/group-tours', function () {
        return Inertia::render('Tours/GroupTours');
    })->name('tours.group');
    
    Route::get('/day-tours', function () {
        return Inertia::render('Tours/DayTours');
    })->name('tours.day');
    
    Route::get('/corporate', function () {
        return Inertia::render('Tours/CorporateTravel');
    })->name('tours.corporate');
});

// Documentation routes
Route::prefix('documentation')->group(function () {
    Route::get('/visa-processing', function () {
        return Inertia::render('Documentation/VisaProcessing');
    })->name('documentation.visa-processing');
    
    Route::get('/travel-insurance', function () {
        return Inertia::render('Documentation/TravelInsurance');
    })->name('documentation.travel-insurance');
    
    Route::get('/passport-assistance', function () {
        return Inertia::render('Documentation/PassportAssistance');
    })->name('documentation.passport-assistance');
});

// Booking routes
Route::prefix('booking')->group(function () {
    Route::get('/flights', function () {
        return Inertia::render('Booking/FlightBooking');
    })->name('booking.flights');
    
    Route::get('/hotels', function () {
        return Inertia::render('Booking/HotelReservations');
    })->name('booking.hotels');
    
    Route::get('/transportation', function () {
        return Inertia::render('Booking/TransportationServices');
    })->name('booking.transportation');
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
    
    Route::get('/2go', function () {
        return Inertia::render('Cruises/TwoGO');
    })->name('cruises.2go');
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

// Agreement routes
Route::prefix('agreements')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Agreements/Index');
    })->name('agreements');

    Route::get('/terms', function () {
        return Inertia::render('Agreements/Terms');
    })->name('agreements.terms');

    Route::get('/refund', function () {
        return Inertia::render('Agreements/Refund');
    })->name('agreements.refund');

    Route::get('/booking', function () {
        return Inertia::render('Agreements/Booking');
    })->name('agreements.booking');
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
