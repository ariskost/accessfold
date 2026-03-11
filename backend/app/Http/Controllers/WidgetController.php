<?php

namespace App\Http\Controllers;

use App\Models\Domain;
use Illuminate\Http\Request;

class WidgetController extends Controller
{
    // Public endpoint for the widget to load configuration
    public function config(Request $request)
    {
        $url = $request->query('url');

        // Simple domain matching, in production use stricter matching
        $host = parse_url($url, PHP_URL_HOST) ?? $url;

        $domain = Domain::where('name', $host)->where('is_active', true)->first();

        if (!$domain) {
            return response()->json(['error' => 'Domain not authorized'], 403);
        }

        return response()->json([
            'settings' => $domain->widgetSetting,
            'features' => $domain->widgetSetting->features_config,
        ]);
    }

    // Public endpoint to log feature usage
    public function logUsage(Request $request)
    {
        $request->validate([
            'domain_id' => 'required|exists:domains,id',
            'feature_slug' => 'required|string',
            'action' => 'required|string',
        ]);

        // Rate limiting logic would go here

        $domain = Domain::find($request->domain_id);

        $domain->usageLogs()->create([
            'feature_slug' => $request->feature_slug,
            'action' => $request->action,
            'user_agent' => $request->userAgent(),
            // Hash IP for privacy
            'session_hash' => hash('sha256', $request->ip() . date('Y-m-d')),
        ]);

        return response()->json(['status' => 'logged']);
    }
}
