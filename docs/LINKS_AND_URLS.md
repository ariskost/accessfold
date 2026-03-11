# Πώς να δεις κάθε link στο project (Backend, Frontend, Widget)

## Σύντομη σύνοψη

| Μέρος        | Πώς το τρέχεις        | URL που ανοίγει        |
|-------------|------------------------|-------------------------|
| **Backend** | MAMP ή `php artisan serve` | Δείτε παρακάτω          |
| **Dashboard** | `npm run dev` (στο `dashboard/`) | **http://localhost:3000** |
| **Widget**  | `npm run dev` (στο `widget/`)    | **http://localhost:5173** |
| **Website (www)** | `npm run dev` (στο `www/`) | **http://localhost:5173** ή **5174** (αν το 5173 είναι πιασμένο) |

---

## 1. Backend (Laravel API)

### Επιλογή Α: Με `php artisan serve` (πιο απλό για development)

```bash
cd backend
php artisan serve
```

- **Base URL:** **http://localhost:8000**
- **API base:** **http://localhost:8000/api**

Παραδείγματα endpoints:
- `http://localhost:8000/api/widget/config` – ρυθμίσεις widget
- `http://localhost:8000/api/login` – σύνδεση
- `http://localhost:8000/api/domains` – domains (με auth)

Το **Dashboard** είναι ήδη ρυθμισμένο να στέλνει τα API requests στο `http://127.0.0.1:8000` (proxy στο `nuxt.config.ts`).

### Επιλογή Β: Με MAMP (Apache)

- Βάλε το backend να σερβίρεται από το MAMP (π.χ. symlink του `backend/public` στο htdocs).
- **URL:** **http://localhost:8888** (ή το port που έχεις στο MAMP).
- **API base:** **http://localhost:8888/api**

Σε αυτή την περίπτωση χρειάζεται να αλλάξεις το proxy στο `dashboard/nuxt.config.ts` ώστε να δείχνει στο port του MAMP (π.χ. 8888).

---

## 2. Frontend – Dashboard (Nuxt)

```bash
cd dashboard
npm install   # μία φορά
npm run dev
```

- **Link:** **http://localhost:3000**
- Εδώ είναι το admin panel (login, domains, ρυθμίσεις, AI tools κ.λπ.).
- Τα API calls πάνε αυτόματα στο backend μέσω proxy (`/api/**` → `http://127.0.0.1:8000/api/**`) όταν το backend τρέχει με `php artisan serve`.

---

## 3. Widget (εργαλείο accessibility)

```bash
cd widget
npm install   # μία φορά
npm run dev
```

- **Link:** **http://localhost:5173** (Vite ανοίγει αυτόματα το `index.html`).
- Εδώ βλέπεις το **demo** του widget σε σελίδα δοκιμής.
- Στο production το widget φορτώνεται ως script σε άλλη ιστοσελίδα (embed).

Για **build** (για να το χρησιμοποιήσεις σε άλλο site):

```bash
npm run build
```

Τα αρχεία βγαίνουν στο `widget/dist/` (π.χ. `accessibility-fold.umd.js`, `accessibility-fold.es.js`).

---

## 4. Frontend – Website (marketing site, www)

```bash
cd www
npm install   # μία φορά
npm run dev
```

- **Link:** **http://localhost:5173** αν τρέχει μόνο το www, αλλιώς **http://localhost:5174** αν το 5173 το έχει πιασει το widget (ή αντίστροφα).
- Ο server του Vite γράφει στο terminal το ακριβές URL (π.χ. `Local: http://localhost:5174`).

---

## Σειρά εκκίνησης (π.χ. για πλήρη εργασία)

1. **Backend:** `cd backend && php artisan serve` → **http://localhost:8000**
2. **Dashboard:** `cd dashboard && npm run dev` → **http://localhost:3000**
3. **Widget demo:** `cd widget && npm run dev` → **http://localhost:5173**
4. **Website:** `cd www && npm run dev` → **http://localhost:5173** ή **5174**

Όταν αλλάζεις port (π.χ. MAMP), ενημερώνεις το `dashboard/nuxt.config.ts` (proxy) και το `backend/.env` (APP_URL, DB_*).
