<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;
            
    protected $fillable = [
        'what_we_do',
        'our_vision',
        'contact_us',
        
        'video_title', 
        'aboutus_title', 
        'our_services_title', 
        'the_directives_title', 
        'team_title', 
        'articles_title', 
        'job_offers_title', 
        'contact_us_title',

        'logo_home',
        'logo_menu',
        'facebook',
        'linkedin',
        'tiktok',
        'instagram',
        'twitter',
        'slogan1',
        'slogan2',
        'services_description',
        'about_description',
        'directives_description',
        'team_description',
        'slogan3',
        'articles_description',
        'jobs_description',
        'contact_description',
        'contact_adresse',
        'contact_email',
        'contact_number',
        'slogan4',
    ];
}
