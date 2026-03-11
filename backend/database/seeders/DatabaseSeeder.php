<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Domain;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str; // Import Str

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Admin User
        $user = User::create([
            'name' => 'Demo User',
            'email' => 'demo@accessibilityfold.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // 2. Create Domain
        $domain = Domain::create([
            'user_id' => $user->id,
            'url' => 'https://demo.accessibilityfold.com',
            'name' => 'demo.accessibilityfold.com',
            'is_active' => true,
            'is_verified' => true,
            'verified_at' => now(),
            'verification_token' => Str::random(32),
        ]);

        // 3. Create Widget Settings
        $domain->widgetSetting()->create([
            'position' => 'bottom-right',
            'trigger_color' => '#4f46e5',
            'features_config' => [
                'text_resizing' => true,
                'high_contrast' => true,
                'dyslexia_font' => true,
            ],
        ]);

        $this->command->info('Database seeded with Demo User (demo@accessibilityfold.com / password)');
    }
}
