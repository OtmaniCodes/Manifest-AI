<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Team;
use App\Models\About;
use App\Models\Section;
use App\Models\Service;
use App\Models\Directive;
use App\Models\Manifesto;
use App\Models\AIQuestion;
use App\Models\AIPediaTool;
use App\Models\AboutContent;
use Illuminate\Http\Request;
use App\Models\ManifestoContent;
use TCG\Voyager\Facades\Voyager;
use App\Models\AIPediaToolCategory;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class DataController extends VoyagerBaseController
{
    public function getData()
    {
        $manifestoContent = ManifestoContent::all();
        $about = About::all()->first();
        $aboutContents = AboutContent::all();
        // $AIPediaToolsCategories = AIPediaToolCategory::all();
        // $AIPediaTools = AIPediaTool::all();
        $AiQuestions = AIQuestion::all();
        $directives = Directive::all();
        $jobs = Job::all();
        $manifesto = Manifesto::all();
        $manifestoContent = ManifestoContent::all();
        $articles = Voyager::model('Post')::all();
        $sections = Section::all();
        $services = Service::all();
        $teams = Team::all();
        return response()->json([
            'manifestoContent' => $manifestoContent,
            'aboutContents' => $aboutContents,
            'about' => $about,
            // 'AIPediaToolsCategories' => $AIPediaToolsCategories,
            // 'AIPediaTools' => $AIPediaTools,
            'AiQuestions' => $AiQuestions,
            'directives' => $directives,
            'jobs' => $jobs,
            'manifesto' => $manifesto,
            'manifestoContent' => $manifestoContent,
            'articles' => $articles,
            'sections' => $sections,
            'services' => $services,
            'teams' => $teams












        ]);
    }
}
