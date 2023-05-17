<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class PostController extends VoyagerBaseController
{
    
    public function getArticles(Request $request)
    {
        $articles=Voyager::model('Post')::all();
        return response()->json(['articles' => $articles]);

    }
}
