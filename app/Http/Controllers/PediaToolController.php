<?php

namespace App\Http\Controllers;

use App\Models\PediaTool;
use Illuminate\Http\Request;
use App\Models\PediaCategory;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class PediaToolController extends VoyagerBaseController
{
    public function getAIPediaTools()
    {
        $catigories = PediaCategory::with('tools')->get();
        $manifest_collections = PediaTool::where('is_manifest_collection', 1)
                 ->orderBy('created_at', 'desc')
                ->with('category')
                ->get();
        $tools = PediaTool::orderBy('created_at', 'desc')->with('category')
                 ->take(6)
                 ->get();
        return response()->json([
            'catigories'=>$catigories,
            'tools'=>$tools,
            'manifest_collections'=>$manifest_collections
        ]);
    }
    public function getAIPediaToolsByCategory(Request $request)
    {
        $name = $request->query('name');

        // Query the category by name
        // $category = PediaCategory::where('name', $name)->with('tools')->paginate(2);
        $tools = PediaCategory::where('name', $name)
        ->with('tools')
        ->firstOrFail()
        ->tools()
        ->with('category')
        ->paginate(6);
        
        if ($tools) {
            return response()->json($tools);
        } else {
            return response()->json(['error' => 'tools not found'], 404);
        }
    }

    public function getAIPediaToolsByQuery(Request $request)
    {
        $query = $request->input('name');
        // dd($query);

        // Perform the search operation using a relevant model or query
        $tools = PediaTool::where('name', 'like', '%' . $query . '%')
        ->with('category')
        ->paginate(6);

        if ($tools) {
            return response()->json($tools);
        } else {
            return response()->json(['error' => 'tools not found'], 404);
        }
    }
}
