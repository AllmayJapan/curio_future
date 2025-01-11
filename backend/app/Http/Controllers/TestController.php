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

	public function show($id)
	{
		$test = Test::find($id);

		if (!$test) {
			return response()->json(['error' => 'Data not found'], 404);
		}

		return response()->json(['success' => true, 'data' => $test], 200);
	}

	public function update(Request $request, $id)
	{
		$request->validate(['message' => 'required|string']);

		$test = Test::find($id);

		if (!$test) {
			return response()->json(['error' => 'Data not found'], 404);
		}

		$test->update([
			'message' => $request->message,
		]);

		return response()->json(['success' => true, 'data' => $test], 200);
	}
}
