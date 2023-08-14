<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentQuizz extends Model
{
    use HasFactory;

    protected $fillable = [
        'grade',
        'feedback',
        'submited_at',
    ];

    public function quizz () {
        return $this->belongsTo(quizz::class, 'quizz_id');
    }
}
