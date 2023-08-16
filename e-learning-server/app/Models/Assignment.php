<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;

    public $timestamps = false; // Disable automatic timestamps

    protected $fillable = [
        'name',
        'description',
        'due_date',
        'posted_at',
        'course_id',
        // Add other columns here
    ];

    // Define a relationship to the Course model (if applicable)
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
