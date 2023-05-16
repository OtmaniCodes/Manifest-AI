<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class JobController extends VoyagerBaseController
{

    public function getJobs(Request $request)
    {
        $jobs=Job::all();
        return response()->json(['success' => true, 'jobs' => $jobs]);

    }
}

