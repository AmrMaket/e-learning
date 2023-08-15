<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Communication;
use Illuminate\Support\Facades\Validator;

class CommunicationController extends Controller
{
    public function index()
    {
        $messages = Communication::all();
        return response()->json($messages);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:255',
            'sender_id' => 'required|numeric|exists:users,id',
            'recipient_id' => 'required|numeric|exists:users,id',
        ]);

        $p = $request->recipient_id;

        $communication = new Communication; 
        $communication->message = $request->message;
        $communication->sender_id = $request->sender_id;
        $communication->recipient_id = $request->recipient_id;
        $communication->save();

        return response()->json([
            'status' => 'Success',
            'data' => $communication
        ]);
    }





    //     $validator = Validator::make( $request->all(), [
    //         'message' => 'required|string|max:255',
    //         'sender_id' => 'required|numeric|exists:users,id',
    //         'recipient_id' => 'required|numeric|exists:users,id',
    //     ]);

    //     if ( $validator->fails() ) {
    //         return response()->json($validator->errors(), 200);
    //     }
        

    //     echo($request->get('sender_id'));
    //     $communication = Communication::create($request->all());
    //     return response()->json($message, 200);
    // }

    public function update(Request $request, Communication $communication)
    {
        $validator = Validator::make( $request->all(), [
            'message' => 'required|string|max:255',
            'sender_id' => 'required|numeric|exists:users,id',
            'recipient_id' => 'required|numeric|exists:users,id',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 200);
        }
        
        
        $communication->update($request->all());
        return response()->json($communication, 200);
    }

}
