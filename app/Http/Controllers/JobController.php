<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class JobController extends VoyagerBaseController
{

    public function getJobs(Request $request)
    {
        $jobs=Job::all();
        return response()->json(['jobs' => $jobs]);

    }


    // public function store(Request $request)
    // {
    //     // dd('hia');
    //     // $slug = $this->getSlug($request);

    //     // $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

    //     // // Check permission
    //     // $this->authorize('add', app($dataType->model_name));

    //     // // Validate fields with ajax
    //     // $val = $this->validateBread($request->all(), $dataType->addRows)->validate();
    

    //     $requestData = $request->all(); 
    //     $requirements = explode(',', $requestData['requirements']);  
    //     $requestData['requirements'] = $requirements;  
    //     $responsibilities = explode(',', $requestData['responsibilities']); 
    //     $requestData['responsibilities'] = $responsibilities;  
    //     // dd($requestData);

    //     $request->replace($requestData); 
    //     return parent::store($request);

    //     // $data = $this->insertUpdateData($request, $slug, $dataType->addRows, new $dataType->model_name());

    //     // event(new BreadDataAdded($dataType, $data));
    //     // if (!$request->has('_tagging')) {
    //     //     if (auth()->user()->can('browse', $data)) {
    //     //         $redirect = redirect()->route("voyager.{$dataType->slug}.index");
    //     //     } else {
    //     //         $redirect = redirect()->back();
    //     //     }

    //     //     return $redirect->with([
    //     //         'message'    => __('voyager::generic.successfully_added_new')." {$dataType->getTranslatedAttribute('display_name_singular')}",
    //     //         'alert-type' => 'success',
    //     //     ]);
    //     // } else {
    //     //     return response()->json(['success' => true, 'data' => $data]);
    //     // }
    // }
}

