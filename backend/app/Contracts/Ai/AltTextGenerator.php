<?php

namespace App\Contracts\Ai;

interface AltTextGenerator
{
    /**
     * Generate alt text for an image URL.
     * 
     * @param string $imageUrl
     * @param array $context optional context like surrounding text
     * @return string
     */
    public function generateAltText(string $imageUrl, array $context = []): string;
}
