<?php

namespace App\Models;

use TCG\Voyager\Models\Post as VoyagerPost;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends VoyagerPost 
{
    use HasFactory;
    protected $table='services';
    protected $fillable = [
        'author_id',
        'category_id',
        'title',
        'seo_title',
        'excerpt',
        'body',
        'image',
        'slug',
        'meta_description',
        'meta_keywords',
        'status',
        'featured',
    ];
}
