<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Communication extends Model
{
    use HasFactory;

    public function sender()
    {
        return $this->belongsTo(Communication::class, 'sender_id');
    }

    public function recipient()
    {
        return $this->belongsTo(Communication::class, 'recipient_id');
    }

}
