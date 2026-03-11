<?php

namespace App\Contracts\Ai;

interface ContentSimplifier
{
    /**
     * Simplify text to a specific readability level (e.g., formatting for dyslexia or cognitive disabilities).
     * 
     * @param string $text
     * @param string $targetLevel e.g. 'simple', 'summary'
     * @return string
     */
    public function simplify(string $text, string $targetLevel = 'simple'): string;
}
