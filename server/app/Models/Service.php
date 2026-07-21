<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
      protected $fillable = [
        'nom', 
        'slug',
        'prix', 
        'description',
        'photoService',
        'is_featured',
        'is_deal_of_day'

      ];

      protected $casts = [
        'prix' => 'decimal:2',
        'is_featured'   => 'boolean',
        'is_deal_of_day'   => 'boolean'
      ];



      public function getPrixAfficheAttribute()
    {
        return  $this->prix;
    }
    

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($produit) {
            $produit->slug = Str::slug($produit->nom);
        });
    }

     public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

}