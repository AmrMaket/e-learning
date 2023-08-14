<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ParenttController extends Controller
{
    public function index()
    {
        $parent = Parentt::all();
        return response()->json($parent);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'role_id' => 'required|numeric',
            'child_id' => 'required|numeric',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $parent = Parentt::create($request->all());
        return response()->json($parent, 200);
    }

    public function show(Parentt $parent)
    {
        return response()->json($parent, 200);
    }

    public function edit(Parentt $parent)
    {
        //
    }

    public function update(Request $request, Parentt $parent)
    {
        $validator = Validator::make( $request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'role_id' => 'required|numeric',
            'child_id' => 'required|numeric',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $parent = Parentt::create($request->all());
        return response()->json($parent, 200);
    }

    public function destroy(Parentt $parent)
    {
        $parent->delete();
        return response()->json('',200);
    }
}
