<?php

namespace App\Http\Controllers;

use App\Models\Domain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DomainController extends Controller
{
    public function index()
    {
        return Auth::user()->domains()->with('widgetSetting')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'url' => 'required|url|unique:domains,url',
        ]);

        $domain = Auth::user()->domains()->create([
            'url' => $request->url,
            'name' => parse_url($request->url, PHP_URL_HOST),
        ]);

        // Create default settings
        $domain->widgetSetting()->create();

        return response()->json($domain, 201);
    }

    public function show(Domain $domain)
    {
        $this->authorize('view', $domain);
        return $domain->load(['widgetSetting', 'audits', 'usageLogs']);
    }

    public function update(Request $request, Domain $domain)
    {
        $this->authorize('update', $domain);

        $domain->update($request->only(['name', 'is_active']));

        return response()->json($domain);
    }

    public function updateSettings(Request $request, Domain $domain)
    {
        $this->authorize('update', $domain);

        $validated = $request->validate([
            'position' => 'in:bottom-left,bottom-right,top-left,top-right',
            'trigger_color' => 'string',
            'features_config' => 'array',
        ]);

        $domain->widgetSetting()->update($validated);

        return response()->json($domain->widgetSetting);
    }

    public function destroy(Domain $domain)
    {
        $this->authorize('delete', $domain);
        $domain->delete();
        return response()->noContent();
    }
}
