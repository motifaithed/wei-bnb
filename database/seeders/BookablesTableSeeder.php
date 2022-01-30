<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use app\Models\Bookable;

class BookablesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
         \App\Models\Bookable::factory(100)->create();
        //  Bookable::factory(100)->create();
    }
}
