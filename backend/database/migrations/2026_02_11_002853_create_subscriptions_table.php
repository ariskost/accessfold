<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->string('plan_name'); // 'free', 'pro', 'enterprise'
            $table->enum('status', ['active', 'past_due', 'cancelled'])->default('active');

            $table->timestamp('trial_ends_at')->nullable();
            $table->timestamp('ends_at')->nullable();

            // Payment provider (Stripe)
            $table->string('stripe_customer_id')->nullable();
            $table->string('stripe_subscription_id')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};
