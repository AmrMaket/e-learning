<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public function enrolledStudents()
    {
        return $this->hasMany(EnrolledStudent::class);
    }
    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }
    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }
}
