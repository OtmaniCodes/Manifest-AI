<?php

namespace App\Models;

use App\Models\AIPediaToolCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
        'ai_collection',
        // 'a_i_pedia_tool_category_id'
    ];


    public function categories()
    {
        return $this->hasOne(AIPediaToolCategory::class,'a_i_pedia_tool_category_id');
    }
}
