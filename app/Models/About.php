<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'body',
        'image',
        'ethical_title',
        'ethical',
        'ethical_image',
        'sustainable_title',
        'sustainable',
        'sustainable_image',
        'collaborative_title',
        'collaborative',
        'collaborative_image',
        'research_title',
        'research',
        'research_image',
    ];
}
