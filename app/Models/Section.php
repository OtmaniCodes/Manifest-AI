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
        'logo_home',
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
