<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnrolledStudent extends Model
{
    use HasFactory;
    
    public function enrolledStudents()
    {
        return $this->hasMany(EnrolledStudent::class);
    }
}
