<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
	public function index()
	{
		$blogs = Blog::all();

		return response()->json($blogs);
	}

	public function show($id)
	{
		$blog = Blog::find($id);

		if (!$blog) {
			return response()->json(['error' => '記事が見つかりません。'], 404);
		}

		return response()->json($blog);
	}
}
