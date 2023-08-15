<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Communication extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'message',
        'sender_id',
        'recipient_id'
    ];
}