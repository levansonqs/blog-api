<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //
    use Sluggable;

    public function sluggable()
    {
        return [
            'alias' => [
                'source' => 'title'
            ]
        ];
    }


    protected $guarded = [];

    public function post(){
        $this->belongsToMany(Post::class,'post_tag');
    }
}
