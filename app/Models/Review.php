<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['id','content','rating'];

    public function bookable(){
        $this->belongsTo(Bookable::class);
    }

    public function booking(){
        $this->belongsTo(Booking::class);
    }
    /* THIS APPLIES FOR MODEL WITH UUID as Unique Index instead of Int */
    //tell laravel you are not using incrementing int key
    public function getIncrementing()
    {
        return false;
    }

    //tell laravel you will be using string keys
    public function getKeyType()
    {
        return 'string';
    }
}
