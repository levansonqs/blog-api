<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
        'star' => $faker->numberBetween(0,100),
    ];
});

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'alias' => $faker->slug,
        'content' => $faker->paragraph,
        'image' => $faker->imageUrl(),
        'cat_id' => $faker->numberBetween(1,10),
        'user_id' => $faker->numberBetween(1,10),
        'view' => $faker->numberBetween(1,100),
        'like' => $faker->numberBetween(1,100),
    ];
});

$factory->define(App\Cat::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'alias' => $faker->slug,
    ];
});

$factory->define(App\Tag::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'alias' => $faker->slug,
    ];
});

$factory->define(App\Follow::class, function (Faker $faker) {
    return [
        'follower' => $faker->numberBetween(1,10),
        'followed' => $faker->numberBetween(1,10),
    ];
});

$factory->define(App\PostTag::class, function (Faker $faker) {
    return [
        'post_id' => $faker->numberBetween(1,100),
        'tag_id' => $faker->numberBetween(1,10),
    ];
});
