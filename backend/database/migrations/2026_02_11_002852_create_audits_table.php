<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('audits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('domain_id')->constrained()->cascadeOnDelete();

            $table->integer('score')->default(0); // 0-100
            $table->integer('issues_count')->default(0);
            $table->string('report_pdf_url')->nullable();

            // JSON blob of raw issues (e.g. from Axe-core)
            $table->json('raw_results')->nullable();

            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audits');
    }
};
