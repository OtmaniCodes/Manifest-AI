<?php

use App\Models\AIPediaTool;
use App\Models\AIPediaToolCategory;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\VerifyCsrfToken;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\VideoStreamController;
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
    return redirect('/admin');
});
    
Route::get('/a',function(){
    $tool = AIPediaTool::find(1);
    // $cat=AIPediaToolCategory::find(1);
    // dd($cat->ai_pedia_tools());
    // dd($tool);
    dd($tool->catigories());
})
;

Route::group(['prefix' => 'admin'], function () { 
    Voyager::routes();
});


