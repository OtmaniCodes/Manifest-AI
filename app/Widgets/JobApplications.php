<?php

namespace App\Widgets;

use Illuminate\Support\Str;
use App\Models\JobApplication;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;
use Illuminate\Support\Facades\Auth;

class JobApplications extends BaseDimmer
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = JobApplication::count();
        $string='Job-Application';
        if($count>1){
            $string=$string.'s';
        }
        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-mail',
            'title'  => "{$count} {$string}",
            'text'   =>'You have '.$count.' '.$string.' in your database. Click on button below to view all '.Str::lower($string).'.',
            'button' => [
                'text' => "View all ".Str::lower($string),
                'link' => route('voyager.job-applications.index'),
            ],
            'image' => voyager_asset('images/widget-backgrounds/01.jpg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', JobApplication::first());
    }
}
