<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DomainController;
use App\Http\Controllers\WidgetController;
use App\Http\Controllers\AuditController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public Widget Routes (CORS enabled)
Route::group(['prefix' => 'widget', 'middleware' => 'throttle:60,1'], function () {
    Route::get('/config', [WidgetController::class, 'config']);
    Route::post('/log', [WidgetController::class, 'logUsage']);
});

// OAuth Routes
Route::get('/auth/{provider}/redirect', [\App\Http\Controllers\SocialiteController::class, 'redirect'])->name('socialite.redirect');
Route::get('/auth/{provider}/callback', [\App\Http\Controllers\SocialiteController::class, 'callback'])->name('socialite.callback');

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Protected Dashboard Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('domains', DomainController::class);
    Route::put('domains/{domain}/settings', [DomainController::class, 'updateSettings']);

    Route::get('domains/{domain}/audits', [AuditController::class, 'index']);
    Route::post('domains/{domain}/audits', [AuditController::class, 'store']);

    // AI Routes
    Route::post('ai/alt-text', [\App\Http\Controllers\AiController::class, 'generateAltText']);
    Route::post('ai/simplify', [\App\Http\Controllers\AiController::class, 'simplifyContent']);
    Route::post('ai/fix', [\App\Http\Controllers\AiController::class, 'suggestFix']);
});
