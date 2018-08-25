<?php

namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    //
    protected $tag;

    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    public function index(){
        return response()->json($this->tag->all());
    }

    public function store(Request $request){
        return response()->json($this->tag->create($request->all()));
    }
}
