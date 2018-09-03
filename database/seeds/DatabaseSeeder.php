<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
//        factory(App\Cat::class, 10)->create();
//        factory(App\Tag::class, 10)->create();
//        factory(App\PostTag::class, 100)->create();
//        factory(App\Follow::class, 10)->create();
        factory(App\User::class, 1)->create();
//        factory(App\Post::class,100)->create();
    }
}
