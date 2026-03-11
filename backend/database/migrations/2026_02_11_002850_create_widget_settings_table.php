<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('widget_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('domain_id')->constrained()->cascadeOnDelete();

            // Positioning & Appearance
            $table->enum('position', ['bottom-left', 'bottom-right', 'top-left', 'top-right'])->default('bottom-right');
            $table->string('trigger_color')->default('#4f46e5'); // Hex
            $table->string('trigger_icon')->default('accessibility'); // standard icon name
            $table->string('language')->default('en');

            // Features Config (JSON)
            // Example: {"text_resizing": true, "high_contrast": true, "screen_reader": false}
            $table->json('features_config')->nullable();

            // Branding (White-label)
            $table->boolean('show_powered_by')->default(true);
            $table->string('custom_logo_url')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('widget_settings');
    }
};
