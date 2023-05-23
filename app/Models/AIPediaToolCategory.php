<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AIPediaToolCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function ai_pedia_tools()
    {
        return $this->hasMany(AIPediaTool::class);
    }
}
