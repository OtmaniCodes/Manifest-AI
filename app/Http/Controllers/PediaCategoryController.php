<?php

namespace App\Http\Controllers;

use App\Models\PediaCategory;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class PediaCategoryController extends VoyagerBaseController
{
    public function getAIPediaToolsCategories()
    {
        $AIPediaToolsCategories = PediaCategory::withCount('tools')->get();
        return response()->json(['data' => $AIPediaToolsCategories]);
    }
}
