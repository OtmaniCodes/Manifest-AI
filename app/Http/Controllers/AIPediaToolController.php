<?php

namespace App\Http\Controllers;

use App\Models\AIPediaTool;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AIPediaToolController extends VoyagerBaseController
{
    public function getAIPediaTools()
    {
        $AIPediaTools = AIPediaTool::orderBy('id', 'desc')->where('ai_collection','=',0)
            ->paginate(20);
        $AIPediaCollections=AIPediaTool::where('ai_collection','=',1)->get();
        return response()->json([
            'AIPediaTools' => $AIPediaTools,
            'AIPediaCollections'=>$AIPediaCollections
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
