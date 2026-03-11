#!/bin/bash
# ===================================================
# AccessFold — Daily Deployment Script
# Usage: ~/accessfold.unionfold.com/deploy.sh
# ===================================================
set -e
echo "🚀 Deploying AccessFold..."
cd ~/accessfold.unionfold.com

# Pull latest code
echo ""
echo "📥 Pulling latest code..."
git pull origin main

# ── BACKEND (Laravel) ──
echo ""
echo "🔧 Updating Backend..."
cd ~/accessfold.unionfold.com/backend
composer update --no-dev --optimize-autoloader --no-interaction
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
chmod -R 775 storage bootstrap/cache 2>/dev/null
echo "  ✅ Backend updated"

# ── WIDGET CDN ──
echo ""
echo "📦 Updating Widget CDN..."
cd ~/accessfold.unionfold.com/widget
npm install
npm run build
mkdir -p cdn
cp dist/accessibility-fold.umd.js cdn/
cp dist/accessibility-fold.es.js cdn/
cp dist/accessibility-fold.css cdn/ 2>/dev/null
echo "  ✅ Widget CDN updated"

# ── MARKETING WEBSITE ──
echo ""
echo "🌐 Updating Website..."
cd ~/accessfold.unionfold.com/www
npm install
npm run build
mkdir -p ~/accessfold.unionfold.com/public_html
rm -rf ~/accessfold.unionfold.com/public_html/*
cp -r dist/* ~/accessfold.unionfold.com/public_html/
echo "  ✅ Website updated"

# ── DASHBOARD (Nuxt SSR) ──
echo ""
echo "📊 Updating Dashboard..."
cd ~/accessfold.unionfold.com/dashboard
npm install
npm run build
if pm2 describe accessfold-dashboard > /dev/null 2>&1; then
    pm2 restart accessfold-dashboard
    echo "  ✅ Dashboard restarted"
else
    pm2 start .output/server/index.mjs --name "accessfold-dashboard" -- --port 3002
    pm2 save
    echo "  ✅ Dashboard started on port 3002"
fi

echo ""
echo "============================================"
echo "✅ Deployment complete!"
echo ""
echo "  Website:   https://accessfold.unionfold.com/"
echo "  API:       https://accessfold.unionfold.com/api/widget/config"
echo "  Widget:    https://accessfold.unionfold.com/widget/cdn/accessibility-fold.umd.js"
echo "  Dashboard: https://accessfold.unionfold.com/dashboard/"
echo "============================================"
