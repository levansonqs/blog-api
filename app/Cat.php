<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Cat extends Model
{
    use Sluggable;

    public function sluggable()
    {
        return [
            'alias' => [
                'source' => 'title'
            ]
        ];
    }
    //use Sluggable;
    protected $guarded = [];

    public function posts() {
        $this->hasMany(Post::class, 'cat_id');
    }


}
