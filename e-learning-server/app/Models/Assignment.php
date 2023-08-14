<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'due_date',
        'name',
        'description',
    ];

    public function course () {
        return $this->belongsTo(course::class, 'course_id');
    }
}
