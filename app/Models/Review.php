<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

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
