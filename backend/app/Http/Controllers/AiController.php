<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\Ai\AltTextGenerator;
use App\Contracts\Ai\ContentSimplifier;
use App\Contracts\Ai\AuditSuggester;

class AiController extends Controller
{
    public function generateAltText(Request $request, AltTextGenerator $generator)
    {
        $request->validate(['image_url' => 'required|url']);

        $altText = $generator->generateAltText($request->image_url);

        return response()->json(['alt_text' => $altText]);
    }

    public function simplifyContent(Request $request, ContentSimplifier $simplifier)
    {
        $request->validate(['text' => 'required|string']);

        $simplified = $simplifier->simplify($request->text);

        return response()->json(['simplified_text' => $simplified]);
    }

    public function suggestFix(Request $request, AuditSuggester $suggester)
    {
        $request->validate([
            'violation' => 'required|string',
            'snippet' => 'required|string'
        ]);

        $fix = $suggester->suggestFix($request->violation, $request->snippet);

        return response()->json(['suggested_fix' => $fix]);
    }
}
