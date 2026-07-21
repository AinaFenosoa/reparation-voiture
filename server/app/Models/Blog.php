<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    protected $fillable = [
        'titre',
        'slug',
        'extrait',
        'contenu',
        'imageBlog',
        'datePublication',
        'is_featured'
    ];

    protected $casts = [
         'datePublication' => 'date',
         'is_featured' => 'boolean',
    ];


    protected static function boot(){
        parent::boot();
        static::creating(function($blog){
            $blog->slug= Str::slug($blog->titre);
        });
    }



     public function getDateFormateeAttribute()
    {
        return $this->datePublication->format('M d, Y');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}
