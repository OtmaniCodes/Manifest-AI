<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobApplication;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Events\BreadDataAdded;
use Illuminate\Support\Facades\Validator;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class JobApplicationController  extends VoyagerBaseController
{
    // public function __construct()
    // {
    //     // Specify the middleware you want to apply
    //     // $this->middleware('admin')->except('store');
    //     // $this->middleware('web');
    // }
    
    public function store(Request $request)
    {
        // $request->validate([
        //     '_token' => 'required|same:' . csrf_token(),
        //     // Add other validation rules for your request data
        // ]);

        // dd($request->input());
        // This should be the slug for the JobApplications BREAD
        $slug = 'job-applications'; 

        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        // Validate fields with ajax
        $val = $this->validateBread($request->all(), $dataType->addRows)->validate();
 
        // We'll use insertUpdateData to add the new record.
        // This will handle validation, file uploads if necessary, and also save the record
        $data = $this->insertUpdateData($request, $slug, $dataType->addRows, new $dataType->model_name());

        event(new BreadDataAdded($dataType, $data));

        // As this is an API endpoint, we'll always return a JSON response
        return response()->json(['success' => true, 'data' => $data]);
    }

    

}
