# Development Environment Setup

## 🖥 Current Environment (Local)
*   **OS**: macOS (Macbook Pro)
*   **Stack Manager**: MAMP (Mac, Apache, MySQL, PHP)
*   **Server**: Apache
*   **Database**: MySQL
*   **Languages**: PHP 8.2+, Node.js 20+

## 📂 Project Paths & URLs
| Service | Local Path | Local URL (MAMP Default) |
| :--- | :--- | :--- |
| **Backend API** | `/backend` | `http://localhost:8888/api` |
| **Dashboard** | `/dashboard` | `http://localhost:3000` |
| **Widget** | `/widget` | `http://localhost:5173` (Dev) |
| **Website** | `/www` | `http://localhost:5174` (Dev) |

> **Note**: MAMP usually serves from `/Applications/MAMP/htdocs`. You may need to symlink the `backend/public` folder or configure a Virtual Host.

## 🗄 Database Configuration
*   **Host**: `127.0.0.1` (or `localhost` via socket)
*   **Port**: `8889` (MAMP Default) or `3306`
*   **Username**: `root`
*   **Password**: `root`
*   **Database Name**: `accessibility_fold`

### Connection String (.env)
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=8889
DB_DATABASE=accessibility_fold
DB_USERNAME=root
DB_PASSWORD=root
```

## 🔄 Portability Guide (Switching Environments)

### Moving to Windows (XAMPP)
1.  **Install XAMPP**: Ensure PHP 8.2+ and MySQL are selected.
2.  **Database**: Export SQL from MAMP (`phpMyAdmin`) and import to XAMPP.
3.  **Config**: Update `.env` file in `backend`:
    *   `DB_PORT=3306`
    *   `DB_PASSWORD=` (usually empty on XAMPP)
4.  **Serving**:
    *   Backend: `php artisan serve` (easiest) or configure Apache VHost.
    *   Frontend: `npm run dev` (remains the same).

### Docker (Recommended for Team)
To avoid OS-specific issues entirely, we can add a `docker-compose.yml` that spins up:
*   `nginx` (Web Server)
*   `mysql` (Database)
*   `php:fpm` (Backend)
*   `node` (Frontend/Dashboard)
This creates a consistent environment regardless of the host OS.
