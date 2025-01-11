<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
	    DB::table('blog_categories')->insert([
		    ['category_name' => 'Tech'],
		    ['category_name' => 'Lifestyle'],
		    ['category_name' => 'Travel']
	    ]);
    }
}
