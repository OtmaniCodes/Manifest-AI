<?php

namespace App\Http\Controllers;

use App\Models\AIPediaTool;
use Illuminate\Http\Request;
use App\Models\AIPediaToolCategory;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AIPediaToolController extends VoyagerBaseController
{
    public function getAIPediaTools()
    {
        // $AIPediaTools = AIPediaTool::with('catigories')->get();
        $AIPediaTools = AIPediaTool::all();
        // $AIPediaCollections=AIPediaTool::all();
        // $AIPediaTools = AIPediaTool::orderBy('id', 'desc')->where('ai_collection','=',0)
        //     ->paginate(20);
        // $AIPediaCollections=AIPediaTool::where('ai_collection','=',1)->get();
        $AIPediaToolsCategories = AIPediaToolCategory::all();
        return response()->json([
            'AIPediaTools' => $AIPediaTools,
            // 'AIPediaCollections'=>$AIPediaCollections,
            'AIPediaToolsCategories' => $AIPediaToolsCategories
        ]);
    }


    public function searchForAIPediaTools(Request $request)
    {
        $keyword = $request->input('keyword');
        $searchResuls = AIPediaTool::where('name', 'like', '%' . $keyword . '%')
            ->orWhere('description', 'like', '%' . $keyword . '%')
            ->paginate();
        return response()->json(['search_results' => $searchResuls]);
    }
}
