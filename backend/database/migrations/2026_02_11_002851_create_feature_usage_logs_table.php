<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('feature_usage_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('domain_id')->constrained()->cascadeOnDelete();

            $table->string('feature_slug'); // e.g. 'increase-font', 'high-contrast'
            $table->string('action'); // 'enable', 'disable'

            // Anonymized user tracking (optional)
            $table->string('session_hash')->nullable();
            $table->string('user_agent')->nullable();

            $table->timestamps();

            // Optimize for analytics queries
            $table->index(['domain_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('feature_usage_logs');
    }
};
