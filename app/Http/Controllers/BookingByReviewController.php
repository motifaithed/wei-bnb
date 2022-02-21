<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookableByReviewShowResource;
use Illuminate\Http\Request;
use App\Models\Booking;

class BookingByReviewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($reviewKey,Request $request)
    {
        //
        return abort(500);
        return new BookableByReviewShowResource(Booking::findByReviewKey($reviewKey)) ?? abort(404); 
    }
}
