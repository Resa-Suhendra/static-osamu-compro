# Compro CME Engineering – Fullstack Bun/React/Hono

## Struktur Proyek

- `frontend/` – React + Vite, dijalankan dengan Bun
- `backend/` – Bun runtime + Hono + Prisma (MySQL)

### Frontend (React + Vite + Bun)

- **Stack**:
  - React (functional components)
  - React Router (`BrowserRouter`)
  - Vite
  - Bun sebagai package manager & dev server (`bunx vite`)
- **Struktur utama**:
  - `frontend/src/main.tsx` – entry React, bungkus `App` dengan `BrowserRouter`
  - `frontend/src/App.tsx` – definisi routing
  - `frontend/src/components/Header.tsx` – navigasi utama
  - `frontend/src/components/Footer.tsx` – footer global
  - `frontend/src/components/Layout.tsx` – layout dasar dengan `<Header />`, `<Footer />`, dan `<Outlet />`
  - `frontend/src/pages/AboutPage.tsx` – halaman "Tentang" yang dikonversi dari `tentang.html`
  - `frontend/src/styles.css` – styling awal; bisa disesuaikan/diadaptasi dari `assets/css/style.css`

**Menjalankan frontend:**

```bash
cd frontend
bun install          # install dependencies dari package.json
bunx vite            # mode dev di http://localhost:5173
```

### Backend (Bun + Hono + Prisma)

- **Stack**:
  - Bun runtime
  - Hono sebagai HTTP framework (ringan, cocok untuk Edge/Bun)
  - Prisma ORM (MySQL)
  - Zod untuk validation schema
- **Struktur direktori**:
  - `backend/src/index.ts` – bootstrap Hono + CORS + routing dan adaptasi ke Bun (`export default { fetch, port }`)
  - `backend/src/routes/` – routing level HTTP:
    - `users.ts`
    - `contactMessages.ts`
  - `backend/src/controllers/` – logika HTTP (mengambil body, validasi, respon JSON):
    - `usersController.ts`
    - `contactMessagesController.ts`
  - `backend/src/services/` – akses database / bisnis:
    - `usersService.ts`
    - `contactMessagesService.ts`
  - `backend/src/prisma/client.ts` – singleton PrismaClient
  - `backend/src/utils/validation.ts` – skema Zod untuk `User` & `ContactMessage`
  - `backend/src/utils/response.ts` – helper standar response JSON `{ success, data }` / `{ success, error }`
  - `backend/prisma/schema.prisma` – definisi model Prisma
  - `backend/prisma/seed.ts` – seed data awal

**Contoh endpoint:**

- `GET /health` – health check sederhana
- `GET /api/users` – list user
- `POST /api/users` – buat user baru
- `GET /api/contact-messages` – list pesan kontak
- `POST /api/contact-messages` – buat pesan kontak baru

Semua endpoint mengembalikan JSON standar:

```json
{ "success": true, "data": { ... } }
{ "success": false, "error": { "code": "...", "message": "...", "details": { ... } } }
```

### Database (MySQL + Prisma)

`backend/prisma/schema.prisma`:

- **Model `User`**:
  - `id` Int, primary key, auto-increment
  - `name` String
  - `email` String (unik)
  - `createdAt` DateTime (default `now()`)
  - `updatedAt` DateTime (`@updatedAt`)
  - relasi ke `ContactMessage[]`
- **Model `ContactMessage`**:
  - `id` Int, primary key, auto-increment
  - `name` String
  - `email` String
  - `subject` String
  - `message` String
  - `createdAt` DateTime (default `now()`)
  - relasi opsional ke `User` (`userId?`)

Set environment variable database di `backend/.env`:

```bash
DATABASE_URL="mysql://user:password@localhost:3306/compro_db"
```

### Prisma – Perintah Migrasi & Seed

Jalankan dari folder `backend/`:

```bash
# Inisialisasi Prisma (sudah dikonfigurasi ke MySQL & folder prisma/)
bunx prisma init

# Generate client & apply migrasi awal
bunx prisma migrate dev --name init

# Jalankan seed
bunx prisma db seed
```

Pastikan di `backend/package.json` sudah ada script:

```json
{
  "scripts": {
    "dev": "bun run src/index.ts",
    "start": "bun run src/index.ts",
    "seed": "bun run prisma/seed.ts"
  }
}
```

### Menjalankan Backend

```bash
cd backend
bun install                       # install dependency backend
DATABASE_URL="..." bun run src/index.ts
```

Backend default berjalan di `http://localhost:4000`.

### Alasan Memilih Hono

- **Ringan dan sangat cepat**, cocok untuk Bun/Edge runtime.
- API sederhana berbasis class `Hono`, mudah dipisah ke `routes/controllers/services`.
- Mendukung middleware seperti CORS dan integrasi Prisma tanpa konfigurasi berat.
