<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AIPediaTool extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'screenshot',
        'tool_link',
        'version_state',
        'description',
        'is_popular',
    ];


    public function ai_pedia_tool_category()
    {
        return $this->belongsTo(AIPediaToolCategory::class);
    }
}
