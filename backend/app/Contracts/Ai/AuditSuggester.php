<?php

namespace App\Contracts\Ai;

interface AuditSuggester
{
    /**
     * Suggest a code fix for a specific accessibility violation.
     * 
     * @param string $violationCode e.g. 'color-contrast'
     * @param string $htmlSnippet The problematic HTML
     * @return string The suggested HTML fix
     */
    public function suggestFix(string $violationCode, string $htmlSnippet): string;
}
