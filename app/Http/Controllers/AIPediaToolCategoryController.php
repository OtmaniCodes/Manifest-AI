<?php

namespace App\Http\Controllers;

use App\Models\AIPediaToolCategory;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AIPediaToolCategoryController extends VoyagerBaseController
{
    public function getAIPediaToolsCategories()
    {
        $AIPediaToolsCategories = AIPediaToolCategory::all();
        return response()->json(['AIPediaToolsCategories' => $AIPediaToolsCategories]);
    }
}
