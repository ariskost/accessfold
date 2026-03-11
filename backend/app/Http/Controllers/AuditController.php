<?php

namespace App\Http\Controllers;

use App\Models\Domain;
use App\Models\Audit;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    public function index(Domain $domain)
    {
        $this->authorize('view', $domain);
        return $domain->audits()->latest()->take(10)->get();
    }

    public function store(Request $request, Domain $domain)
    {
        $this->authorize('update', $domain);

        // In a real app, this would dispatch a Job to run Puppeteer/Axe-core
        // Here we simulate a completed audit for the demo

        $audit = $domain->audits()->create([
            'status' => 'completed',
            'score' => rand(60, 100),
            'issues_count' => rand(0, 15),
            'raw_results' => ['mock_issue' => 'Contrast too low on h1'],
        ]);

        return response()->json($audit, 201);
    }
}
