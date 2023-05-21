<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ManifestoContent;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class ManifestoContentController extends VoyagerBaseController
{
    public function getManifestoContent(Request $request)
    {
        $manifestoContent=ManifestoContent::all();
        return response()->json(['manifestoContent' => $manifestoContent]);

    }
}
