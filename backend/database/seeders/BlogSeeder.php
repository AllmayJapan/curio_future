<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
	    DB::table('blogs')->insert([
		    [
			    'title' => 'First Blog Post',
			    'content' => 'This is the content of the first blog post.',
			    'timestamp' => now(),
			    'category_id' => 1,
		    ],
		    [
			    'title' => 'Second Blog Post',
			    'content' => 'This is the content of the second blog post.',
			    'timestamp' => now(),
			    'category_id' => 2,
		    ],
		    [
			    'title' => 'Third Blog Post',
			    'content' => 'This is the content of the third blog post.',
			    'timestamp' => now(),
			    'category_id' => 3,
		    ],
	    ]);
    }
}
