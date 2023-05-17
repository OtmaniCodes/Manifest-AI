<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'location',
        'icon',
        'date',
        'description',
        'requirements',
        'responsibilities',
    ];

    // protected $casts = [
    //     'requirements' => 'array',
    //     'responsibilities' => 'array',
    // ];

}
