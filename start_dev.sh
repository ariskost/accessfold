#!/bin/bash
# Start all 3 local development servers

echo "Killing existing servers on ports 8000, 3000, 5173..."
lsof -ti:8000,3000,5173 | xargs kill -9 2>/dev/null

echo "Starting Backend (Laravel) on port 8000..."
cd backend
php artisan serve --port=8000 &
BACKEND_PID=$!
cd ..

echo "Starting Dashboard (Nuxt) on port 3000..."
cd dashboard
npm run dev &
DASHBOARD_PID=$!
cd ..

echo "Starting Marketing Site (Vite) on port 5173..."
cd www
npm run dev &
VITE_PID=$!
cd ..

echo "All services started! Press Ctrl+C to stop them all."
echo "Marketing (Vite): http://localhost:5173"
echo "Dashboard (Nuxt): http://localhost:3000"
echo "Backend API (Laravel): http://localhost:8000"

# Wait for all background processes
wait $BACKEND_PID $DASHBOARD_PID $VITE_PID
