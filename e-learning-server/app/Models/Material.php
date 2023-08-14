<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'Uploaded_file',
    ];

    public function course () {
        return $this->belongsTo(course::class, 'course_id');
    }
}
