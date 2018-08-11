<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cat extends Model
{
    //
    protected $guarded = [];

    public function posts() {
        $this->hasMany(Post::class, 'cat_id');
    }
}
