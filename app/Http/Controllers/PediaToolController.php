<?php

namespace App\Http\Controllers;

use App\Models\PediaTool;
use Illuminate\Http\Request;

class PediaToolController extends Controller
{
    public function getAIPediaTools()
    {
        $tools = PediaTool::with('category')->get();

        // Perform any additional operations or logic
        // ...

        // Return the response
        return response()->json($tools);
    }
}
