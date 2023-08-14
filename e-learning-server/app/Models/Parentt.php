<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parentt extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'child_id',
    ];

    // protected $hidden = [
    //     'password',
    //     'remember_token',
    // ];

    // protected $casts = [
    //     'password' => 'hashed',
    // ];

    

}
