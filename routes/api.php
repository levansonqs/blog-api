<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/register', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');

Route::get('cate', 'CateController@index');
Route::post('cate', 'CateController@store');
Route::get('tag', 'TagController@index');
Route::post('tag', 'TagController@store');
Route::get('posts', 'PostController@index');


Route::group(['middleware' => 'jwt.auth'], function(){
    Route::post('post', 'PostController@store');
});
Route::group(['middleware' => 'jwt.refresh'], function(){
    Route::get('auth/refresh', 'AuthController@refresh');
});
