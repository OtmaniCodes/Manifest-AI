<?php

namespace App\Http\Controllers;

use App\Models\Manifesto;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class ManifestoController extends VoyagerBaseController
{
    public function getManifesto(Request $request)
    {
        $manifesto=Manifesto::all();
        return response()->json(['manifesto' => $manifesto]);

    }
}