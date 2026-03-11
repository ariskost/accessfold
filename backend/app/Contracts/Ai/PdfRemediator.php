<?php

namespace App\Contracts\Ai;

interface PdfRemediator
{
    /**
     * Analyze a PDF and return a list of accessibility issues or a remediated version.
     * 
     * @param string $pdfUrl
     * @return array Contains 'issues' and potentially a 'remediated_url'
     */
    public function remediate(string $pdfUrl): array;
}
