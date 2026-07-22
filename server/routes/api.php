<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BlogController;


Route::get('/', function () {
    return response()->json([
        'message' => 'Bienvenue sur l\'API Reparation voiture',
        'version' => '1.0.0',
        'status' => 'online',
        'endpoints' => [
            'services' => '/api/services',
            'services_featured' => '/api/services/featured',
            'services_deals' => '/api/services/deals-of-day',
            'blog' => '/api/blog/posts',
            'blog_featured' => '/api/blog/posts/featured',
            'auth_register' => '/api/register (POST)',
            'auth_login' => '/api/login (POST)',
           
        ],
        'documentation' => 'Voir les routes disponibles avec: php artisan route:list',
    ]);
});



// Routes publiques
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/deals-of-day', [ServiceController::class, 'dealsOfDay']);
Route::get('/services/featured', [ServiceController::class, 'featured']);
Route::get('/services/{slug}', [ServiceController::class, 'show']);
Route::get('/services/{slug}/related', [ServiceController::class, 'related']);

Route::get('/blog/posts', [BlogController::class, 'index']);
Route::get('/blog/posts/featured', [BlogController::class, 'featured']);
Route::get('/blog/posts/latest', [BlogController::class, 'latest']);
Route::get('/blog/posts/{slug}', [BlogController::class, 'show']);




// Routes d'authentification
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::get('/login', function () {
    return response()->json([
        'message' => 'Non authentifié. Veuillez vous connecter.',
        'error' => 'Unauthenticated'
    ], 401);
})->name('login');

// Routes protégées (authentification requise)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'me']);

});

// Routes admin (à protéger avec middleware admin)// CRUD 
Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('/services', [ProductController::class, 'store']);
    Route::put('/services/{id}', [ProductController::class, 'update']);// modifier
    Route::delete('/services/{id}', [ProductController::class, 'destroy']);// supp

    Route::post('/blog/posts', [BlogController::class, 'store']);
    Route::put('/blog/posts/{id}', [BlogController::class, 'update']);// modifier
    Route::delete('/blog/posts/{id}', [BlogController::class, 'destroy']);// supp


  

});