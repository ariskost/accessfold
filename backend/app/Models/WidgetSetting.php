<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WidgetSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'domain_id',
        'position',
        'trigger_color',
        'trigger_icon',
        'language',
        'features_config',
        'show_powered_by',
        'custom_logo_url',
    ];

    protected $casts = [
        'features_config' => 'array',
        'show_powered_by' => 'boolean',
    ];

    public function domain()
    {
        return $this->belongsTo(Domain::class);
    }
}
