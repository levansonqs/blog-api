<?php

namespace App\Http\Controllers;

use App\Cat;
use Illuminate\Http\Request;

class CateController extends Controller
{
    protected $cate;

    public function __construct(Cat $cat)
    {
        $this->cate = $cat;
    }

    //
    public function index(){
        return response()->json($this->cate->all());
    }
    public function store(Request $request){
        return response()->json($this->cate->create($request->all()));
    }
}
