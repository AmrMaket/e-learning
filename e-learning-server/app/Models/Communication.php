<?php

namespace App\Models;



use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Communication extends Model
{
    use HasFactory;


    public $timestamps = false;

    protected $fillable = [
        'message',
        'sender_id',
        'recipient_id'
    ];

    
    protected $fillable = ['message', 'sender_id', 'recipient_id'];
    
    // public function sender()
    // {
    //     return $this->belongsTo(User::class, 'sender_id');
    // }

    // public function recipient()
    // {
    //     return $this->belongsTo(User::class, 'recipient_id');
    // }

}