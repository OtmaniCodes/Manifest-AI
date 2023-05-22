<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class TeamController extends VoyagerBaseController
{
    public function getTeams(Request $request)
    {
        $teams=Team::all();
        return response()->json(['teams' => $teams]);

    }
}
