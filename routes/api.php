<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\DirectiveController;
use App\Http\Controllers\ManifestoController;
use App\Http\Controllers\PediaToolController;
use App\Http\Controllers\AIQuestionController;
use App\Http\Controllers\AIPediaToolController;

use App\Http\Controllers\AboutContentController;
use App\Http\Controllers\JobApplicationController;
use App\Http\Controllers\ManifestoContentController;
use App\Http\Controllers\AIPediaToolCategoryController;





Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['web']], function () {
    Route::post('/job-applications', [JobApplicationController::class, 'store']);
    Route::get('/get-articles', [PostController::class, 'getArticles']);
    Route::get('/get-jobs', [JobController::class, 'getJobs']);
    Route::get('/get-services', [ServiceController::class, 'getServices']);
    Route::get('/get-sections', [SectionController::class, 'getSections']);
    Route::get('/get-directives', [DirectiveController::class, 'getDirectives']);
    Route::get('/get-teams', [TeamController::class, 'getTeams']);
    Route::get('/get-about', [AboutController::class, 'getAbout']);
    Route::get('/get-about-contents', [AboutContentController::class, 'getAboutContent']);
    Route::get('/get-manifesto', [ManifestoController::class, 'getManifesto']);
    Route::get('/get-manifesto-contents', [ManifestoContentController::class, 'getManifestoContent']);
    Route::get('/get-ai-questions', [AIQuestionController::class, 'getQuestions']);

    // for AI Pedia Tools
    Route::get('/get-ai-pedia-tools', [PediaToolController::class, 'getAIPediaTools']);
    Route::get('/get-tools-by-category', [PediaToolController::class, 'getAIPediaToolsCategory']);
    // Route::get('/ai-pedia-tools/search', [PediaToolController::class, 'searchForAIPediaTools']); //! do get request to /ai-pedia-tools/search?keyword=example from the front-end
    // Route::get('/get-ai-pedia-tools-categories', [AIPediaToolCategoryController::class, 'getAIPediaToolsCategories']);



    Route::get('/get-holy-data', [DataController::class, 'getData']);


    Route::get('/csrf-token', function () {
        return response()->json([
            'csrfToken' => csrf_token(),
        ]);
    });

    Route::get('/stream/{filename}', function ($filename) {
        $path = public_path('/videos/' . $filename.'m3u8' );
        if (!file_exists($path)) {
            abort(404);
        }

        $file = file_get_contents($path);
        return response($file, 200)->header('Content-Type', 'application/x-mpegURL');
    });
});
