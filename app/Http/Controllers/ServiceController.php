<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class ServiceController  extends VoyagerBaseController
{
    public function getServices(Request $request)
    {
        $services=Service::all();
        return response()->json(['success' => true, 'services' => $services]);

    }

}
