<?php

namespace App\Models;

use App\Models\PediaTool;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PediaCategory extends Model
{
    use HasFactory;
    protected $table = 'pedia_categories';

    protected $fillable = [
        'name',
    ];

    public function tools()
    {
        return $this->hasMany(PediaTool::class,'category_id');
    }
}
