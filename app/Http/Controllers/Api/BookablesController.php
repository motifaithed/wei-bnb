<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookablesIndexResource;
use App\Http\Resources\BookablesShowResource;
use Illuminate\Http\Request;
use App\Models\Bookable;

class BookablesController extends Controller
{
    //
    public function index(){

        // return Bookable::all();
        return  BookablesIndexResource::collection(
           Bookable::all()
        );

    }

    public function show($id){

        // return Bookable::findOrFail($id);
        return new BookablesShowResource(Bookable::findOrFail($id));

    }

}
