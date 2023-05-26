<?php

namespace App\Models;

use App\Models\PediaCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PediaTool extends Model
{
    use HasFactory;
    // protected $table = 'pedia_tools';

    protected $fillable = [
        'name',
        'image',
        'tool_link',
        'version_state',
        'status',
        'description',
        'is_popular',
        'manifest_collection',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(PediaCategory::class);
    }
}
