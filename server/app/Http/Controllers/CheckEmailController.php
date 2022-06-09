<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CheckEmailController extends Controller
{
    public function show(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            ]);
        } catch (\Exception $e) {
            return Response::json([
                'error' => $e->getMessage()
            ]);
        }

        return Response::json([
            'isUnique' => true,
        ]);
    }
}
