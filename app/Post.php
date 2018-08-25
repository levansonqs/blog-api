<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
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
    //

    protected $fillable = [
        'user_id','title','alias','content','image','status','cat_id',
        'view','like','type'
    ];

    public function cat() {
        $this->belongsTo(Cat::class);
    }

    public function tag() {
        $this->belongsToMany(Tag::class,'post_tag');
    }

    public function user(){
        $this->belongsTo(User::class);
    }
}
