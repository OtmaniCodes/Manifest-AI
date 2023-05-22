<?php

namespace App\Http\Controllers;

use App\Models\Directive;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class DirectiveController extends VoyagerBaseController
{
    public function getDirectives(Request $request)
    {
        $directives=Directive::all();
        return response()->json(['directives' => $directives]);

    }
}
