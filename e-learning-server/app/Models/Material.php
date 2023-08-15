<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'uploaded_files',
        'course_id'
    ];


    public function course () {
        return $this->belongsTo(Course::class, 'course_id');
    }
}
