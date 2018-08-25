<?php

namespace App\Http\Controllers;

use App\Post;
use App\PostTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class PostController extends Controller
{
    protected $post;
    protected $postTag;

    public function __construct(Post $post, PostTag $postTag)
    {
        $this->post = $post;
        $this->postTag = $postTag;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $data = $request->all();
        $data['user_id']=$user->id;
        $data['cat_id']=$request->cat_id['id'];
        $data['status']=$request->status['id'];
        $data['type']=$request->type['id'];
        $tags=$request->tag_id;
//        dd($data['cat_id']);
        //
        DB::beginTransaction();

        try {
//            dd($data);
            $post = $this->post->create($data);

            for($i = 0; $i<count($tags);$i++){
                $tags[$i]['post_id']=$post->id;
                $tags[$i]['tag_id']=$tags[$i]['id'];
                unset ($tags[$i]['id']);
                unset ($tags[$i]['value']);
                unset ($tags[$i]['label']);
            }

            DB::table('post_tags')->insert($tags);

            DB::commit();
            // all good
            return response()->json('success');
        } catch (\Exception $e) {
            dd($e);
            DB::rollback();
            return response()->json($e,404);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
