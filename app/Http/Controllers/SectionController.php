<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class SectionController extends VoyagerBaseController
{
    public function getSections(Request $request)
    {
        $sections=Section::all();
        return response()->json(['sections' => $sections]);

    }
}
