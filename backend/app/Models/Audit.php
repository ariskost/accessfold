<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{
    use HasFactory;

    protected $fillable = [
        'domain_id',
        'score',
        'issues_count',
        'report_pdf_url',
        'raw_results',
        'status',
    ];

    protected $casts = [
        'raw_results' => 'array',
    ];

    public function domain()
    {
        return $this->belongsTo(Domain::class);
    }
}
