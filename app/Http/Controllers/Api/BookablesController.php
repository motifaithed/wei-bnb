<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bookable;

class BookablesController extends Controller
{
    //
    public function index(){

        return Bookable::all();

    }

    public function show($id){

        return Bookable::findOrFail($id);
        
    }

}
