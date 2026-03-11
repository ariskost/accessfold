#!/bin/bash

echo "🚀 Starting Accessibility Fold Setup..."

# 1. Backend
echo "\n📦 Installing Backend (Laravel)..."
cd backend
composer install
if [ ! -f .env ]; then
    cp .env.example .env
    php artisan key:generate
    echo "⚠️ .env created. Please configure DB_PORT (usually 8889 for MAMP) and DB_PASSWORD."
fi
# Attempt migration (might fail if MAMP is off)
php artisan migrate:fresh --seed || echo "⚠️ Database migration failed. Is MAMP running?"
cd ..

# 2. Widget
echo "\n📦 Installing Widget..."
cd widget
npm install
npm run build
cd ..

# 3. Dashboard
echo "\n📦 Installing Dashboard..."
cd dashboard
npm install
cd ..

# 4. Website
echo "\n📦 Installing Website..."
cd www
npm install
cd ..

echo "\n✅ Setup Scripts Completed!"
echo "👉 Please ensure MAMP is running and 'accessibility_fold' database exists."
echo "👉 Run 'php artisan migrate:fresh --seed' in /backend to finalize DB."
