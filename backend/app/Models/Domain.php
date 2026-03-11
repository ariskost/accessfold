<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Domain extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'url',
        'name',
        'is_active',
        'is_verified',
        'verification_token',
        'verified_at',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_verified' => 'boolean',
        'verified_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($domain) {
            if (!$domain->verification_token) {
                $domain->verification_token = Str::random(32);
            }
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function widgetSetting()
    {
        return $this->hasOne(WidgetSetting::class);
    }

    public function audits()
    {
        return $this->hasMany(Audit::class);
    }

    public function usageLogs()
    {
        return $this->hasMany(FeatureUsageLog::class);
    }
}
