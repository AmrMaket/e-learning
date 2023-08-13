<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_quizzes', function (Blueprint $table) {
            $table->id();
            $table->integer('grade');
            $table->string('feedback');
            $table->timestamp('submitted_at')->useCurrent();
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('quiz_id');
            // $table->foreign('quiz_id')->references('id')->on('quizzes')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_quizzes');
    }
};
