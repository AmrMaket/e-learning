<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{
    use HasFactory;

    protected $fillable = [
        'google_link',
        'Time',
    ];

    public function course () {
        return $this->belongsTo(course::class, 'course_id');
    }
}
