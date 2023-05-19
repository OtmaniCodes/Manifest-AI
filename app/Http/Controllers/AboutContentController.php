<?php

namespace App\Http\Controllers;

use App\Models\AboutContent;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AboutContentController extends VoyagerBaseController
{
    public function getAboutContent(Request $request)
    {
        $aboutContents=AboutContent::all();
        return response()->json(['aboutContents' => $aboutContents]);

    }
}
