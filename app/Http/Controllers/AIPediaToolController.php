<?php

namespace App\Http\Controllers;

use App\Models\AIPediaTool;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AIPediaToolController extends VoyagerBaseController
{
    public function getAIPediaTools()
    {
        try {
            $AIPediaTools = AIPediaTool::select()
                ->orderBy('id', 'desc')
                ->paginate(20);
            return response()->json(['AIPediaTools' => $AIPediaTools]);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Error fetching the AI Pedia Tools from server'], 500);
        }
    }


    public function searchForAIPediaTools(Request $request)
    {
        $keyword = $request->input('keyword');

        $searchResuls = AIPediaTool::where('name', 'like', '%' . $keyword . '%')
            ->orWhere('description', 'like', '%' . $keyword . '%')
            ->get();

        return response()->json(['search_results' => $searchResuls]);
    }
}
