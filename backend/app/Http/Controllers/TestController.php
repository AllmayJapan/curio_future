<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
class TestController extends Controller
{
	public function store(Request $request)
	{
		$request->validate(['message' => 'required|string']);

		$test = Test::create([
			'message' => $request->message,
		]);

		return response()->json(['success' => true, 'data' => $test], 201);
	}
}
