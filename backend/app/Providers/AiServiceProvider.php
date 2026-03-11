<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Ai\MockAiService;
use App\Contracts\Ai\AltTextGenerator;
use App\Contracts\Ai\ContentSimplifier;
use App\Contracts\Ai\PdfRemediator;
use App\Contracts\Ai\AuditSuggester;

class AiServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Bind all interfaces to the Mock implementation for now
        // In production, you would bind to OpenAI/Anthropic services based on config
        $this->app->singleton(AltTextGenerator::class, MockAiService::class);
        $this->app->singleton(ContentSimplifier::class, MockAiService::class);
        $this->app->singleton(PdfRemediator::class, MockAiService::class);
        $this->app->singleton(AuditSuggester::class, MockAiService::class);
    }

    public function boot(): void
    {
        //
    }
}
