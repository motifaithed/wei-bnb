<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
    }
}
