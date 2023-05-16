<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\VerifyCsrfToken;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\JobApplicationController;
use TCG\Voyager\Http\Middleware\VoyagerAdminMiddleware;

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

Route::get('/', function () {
    return view('welcome');
});
    



Route::group(['prefix' => 'admin'], function () { 
    Voyager::routes();
});


