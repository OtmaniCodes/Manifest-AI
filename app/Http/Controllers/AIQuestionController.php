<?php

namespace App\Http\Controllers;

use App\Models\AIQuestion;
use Illuminate\Http\Request;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class AIQuestionController extends VoyagerBaseController
{
    public function getQuestions(Request $request)
    {
        $AiQuestions=AIQuestion::all();
        return response()->json(['AiQuestions' => $AiQuestions]);

    }
}
