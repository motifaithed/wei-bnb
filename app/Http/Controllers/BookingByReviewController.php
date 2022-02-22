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
        $booking = Booking::findByReviewKey($reviewKey);
        return $booking ? new BookableByReviewShowResource($booking) : abort(404); 
    }
}
