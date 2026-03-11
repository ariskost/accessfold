# Startup & Setup Guide

This guide will help you get the entire Accessibility Fold stack running on your Mac with MAMP.

## 1. Prerequisites
*   **MAMP** installed and **Running** (Apache & MySQL).
*   **Node.js 20+** (Required for Nuxt 4).
*   **npm** installed.
*   **Composer** installed.

## 2. Database Setup (MAMP)
1.  Open **MAMP** and start the servers.
2.  Open **phpMyAdmin** (usually `http://localhost:8888/phpMyAdmin`).
3.  Create a new empty database named: `accessibility_fold`
    *   Collation: `utf8mb4_unicode_ci`

## 3. Backend Setup (Laravel)
The backend is located in `/backend`.

```bash
cd backend
# 1. Install PHP dependencies
composer install

# 2. Setup Configuration
cp .env.example .env
# Edit .env to match your MAMP settings:
# DB_PORT=8889  (Default MAMP)
# DB_PASSWORD=root (Default MAMP)

# 3. Generate App Key
php artisan key:generate

# 4. Run Migrations & Seed Data
# (Make sure MAMP MySQL is running first!)
php artisan migrate:fresh --seed
```
*   **Admin User**: `demo@accessibilityfold.com`
*   **Password**: `password`

## 4. Frontend Setup
We have three separate frontend applications.

### Widget (The Accessibility Tool)
```bash
cd widget
npm install
npm run build
# To see the demo:
npm run dev
```

### Dashboard (User Admin Panel)
```bash
cd dashboard
npm install
npm run dev
# Opens at http://localhost:3000
```

### Public Website (Marketing)
```bash
cd www
npm install
npm run dev
# Opens at http://localhost:5173 (usually)
```

## 5. Troubleshooting
### MAMP Connection Refused
If `php artisan migrate` fails with "Connection refused":
1.  Check if MAMP MySQL is running.
2.  Check the port in MAMP Preferences (is it 8889 or 3306?). Update `.env` accordingly.
3.  If using `localhost` fails, try `127.0.0.1` in `DB_HOST`.

### Dashboard `npm install` Issues
If you see `Cannot find native binding` (oxc-parser):
1.  Run `npm install --no-optional` in the dashboard folder.
2.  Or try deleting `node_modules` and `package-lock.json` and running `npm install` again.
3.  Ensure you are using Node 20+.

