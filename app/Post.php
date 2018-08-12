<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //

    protected $guarded = [];

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
