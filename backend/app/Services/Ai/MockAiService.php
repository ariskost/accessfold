<?php

namespace App\Services\Ai;

use App\Contracts\Ai\AltTextGenerator;
use App\Contracts\Ai\ContentSimplifier;
use App\Contracts\Ai\PdfRemediator;
use App\Contracts\Ai\AuditSuggester;

class MockAiService implements AltTextGenerator, ContentSimplifier, PdfRemediator, AuditSuggester
{
    public function generateAltText(string $imageUrl, array $context = []): string
    {
        // Simulate processing time
        sleep(1);
        return "An AI-generated description of the image at " . basename($imageUrl);
    }

    public function simplify(string $text, string $targetLevel = 'simple'): string
    {
        return "[Simplified] " . substr($text, 0, 50) . "... (AI simplified this content)";
    }

    public function remediate(string $pdfUrl): array
    {
        return [
            'status' => 'processed',
            'issues_found' => 3,
            'summary' => 'Fixed missing tags and reading order.',
            'remediated_url' => $pdfUrl . '.accessible.pdf'
        ];
    }

    public function suggestFix(string $violationCode, string $htmlSnippet): string
    {
        if ($violationCode === 'color-contrast') {
            return str_replace('color: #ccc', 'color: #000', $htmlSnippet);
        }
        return "<!-- AI Fix for $violationCode -->\n" . $htmlSnippet;
    }
}
