<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;


    public $timestamps = false;

    protected $fillable = [
        'name',
        'due_date',
        'grade_overall',
        'course_id',
    ];



    public function course()
    {
        return $this->belongsTo(Course::class);
    }

}
