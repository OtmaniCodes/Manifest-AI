<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManifestoContent extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 
        'body', 
        'image', 
    ];
}
