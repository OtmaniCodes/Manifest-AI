<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AboutController extends VoyagerBaseController
{
    public function getAbout(Request $request)
    {
        $about=About::all();
        return response()->json(['about' => $about]);

    }
}
