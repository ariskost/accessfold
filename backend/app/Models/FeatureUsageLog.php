<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeatureUsageLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'domain_id',
        'feature_slug',
        'action',
        'session_hash',
        'user_agent',
    ];

    public function domain()
    {
        return $this->belongsTo(Domain::class);
    }
}
