# Sistem Cerna Interaktif

Aplikasi pembelajaran biologi untuk siswa SMA kelas XI tentang sistem pencernaan manusia. Sistem terdiri dari frontend Next.js dan backend NestJS dengan PostgreSQL sebagai penyimpanan data kuis dan progres belajar.

## Fitur

- Materi interaktif tentang organ, proses pencernaan, enzim, dan penyerapan nutrisi.
- Visualisasi animasi proses pencernaan dan gerak peristaltik.
- Laboratorium virtual untuk simulasi uji zat makanan.
- Kuis pilihan ganda dengan umpan balik jawaban dan pembahasan.
- Pencatatan sesi, hasil kuis, dan riwayat pengerjaan.

Materi, animasi, dan laboratorium disediakan oleh frontend. Kuis dan penyimpanan progres memerlukan backend serta database PostgreSQL.

## Teknologi

- Node.js dan npm
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS
- Backend: NestJS 12, TypeScript
- Database dan ORM: PostgreSQL, Prisma

## Prasyarat

Pasang perangkat berikut sebelum menjalankan aplikasi:

1. **Node.js 24.x** (disarankan) dan npm. Node.js mencakup npm.
2. **PostgreSQL** lokal atau server PostgreSQL yang dapat diakses dari komputer Anda.
3. Git, jika mengambil source dari GitHub.

Tidak diperlukan instalasi global untuk Next.js, NestJS, atau Prisma; paket proyek dipasang dari file lock dengan `npm ci`.

## Instalasi

### 1. Ambil source code

```bash
git clone <URL-REPOSITORY>
cd "SISTEM CERNA INTERAKTIF"
```

Jika folder hasil clone memiliki nama berbeda, masuklah ke folder proyek tersebut. Pastikan folder `backend` dan `frontend` ada di dalam root proyek.

### 2. Pasang dependency

Jalankan perintah berikut masing-masing dari root proyek:

```bash
cd backend
npm ci
cd ../frontend
npm ci
cd ..
```

### 3. Siapkan database PostgreSQL

Buat database kosong, misalnya `sistem_cerna`. Pastikan PostgreSQL sedang berjalan dan Anda memiliki nama pengguna serta kata sandi database.

Buat file `backend/.env` secara lokal dengan konfigurasi berikut. Ganti `YOUR_PASSWORD` sesuai konfigurasi PostgreSQL Anda; jangan commit file `.env` atau membagikan kata sandinya.

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/sistem_cerna?schema=public"
PORT=3001
FRONTEND_URL="http://localhost:3000"
```

Jika nama pengguna, port, atau database Anda berbeda, sesuaikan URL koneksinya. `DATABASE_URL` wajib untuk backend. `PORT` dan `FRONTEND_URL` memiliki nilai default seperti di atas.

Frontend secara default mengakses `http://localhost:3001/api`. Untuk menggunakan URL API lain, buat `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL="http://localhost:3001/api"
```

Variabel yang diawali `NEXT_PUBLIC_` dikirim ke browser. Jangan menaruh kata sandi atau rahasia server di dalamnya.

### 4. Siapkan schema dan data awal

Setelah dependency, konfigurasi database, dan Prisma Client siap, jalankan dari folder `backend`:

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

`db push` menerapkan model dari `backend/prisma/schema.prisma` ke database. Seed mengisi 25 soal kuis awal.

**Perhatian:** seed menghapus jawaban, sesi, pilihan, dan soal yang sudah ada sebelum mengisi data awal. Jangan jalankan seed pada database yang berisi data penting.

## Menjalankan aplikasi

Jalankan backend dan frontend di dua terminal terpisah dari root proyek.

Terminal 1, backend:

```bash
cd backend
npm run start:dev
```

API berjalan di `http://localhost:3001`, dengan prefix endpoint `/api`.

Terminal 2, frontend:

```bash
cd frontend
npm run dev
```

Buka `http://localhost:3000` di browser. Untuk menghentikan server development, tekan `Ctrl+C` pada terminal masing-masing.

## Pemeriksaan dan build

Jalankan perintah dari folder terkait:

```bash
# Frontend: lint dan production build
cd frontend
npm run lint
npm run build

# Backend: test dan build
cd ../backend
npm test
npm run build
```

## Endpoint API

Semua endpoint backend menggunakan prefix `/api`.

| Method | Endpoint | Kegunaan |
| --- | --- | --- |
| `GET` | `/api/quiz/questions` | Mengambil daftar soal dan pilihan jawaban |
| `POST` | `/api/quiz/submit` | Memeriksa jawaban dan mengembalikan pembahasan |
| `POST` | `/api/quiz/complete` | Menyimpan hasil akhir sesi kuis |
| `POST` | `/api/progress/session` | Membuat sesi belajar/kuis |
| `GET` | `/api/progress/session/:id` | Mengambil detail sesi |
| `GET` | `/api/progress/history` | Mengambil hingga 20 hasil sesi terbaru |

## Struktur folder

```text
backend/
  prisma/       Schema database dan data seed
  src/          API NestJS, kuis, dan progres
frontend/
  src/app/      Halaman aplikasi Next.js
  src/data/     Materi dan data simulasi
  src/lib/      Klien API dan utilitas
```

## Status dan catatan saat ini

Build frontend telah berhasil dijalankan pada workspace ini. Backend saat ini **belum berhasil dibuild**, sehingga fitur yang memakai API belum dapat dijalankan end-to-end. Build yang diperiksa melaporkan kegagalan resolusi banyak import relatif TypeScript dan Prisma Client tidak mengekspor `PrismaClient` pada instalasi saat ini. Versi di `backend/package.json` juga tidak selaras: `prisma` berada pada versi `8.0.0-rc.30`, sedangkan `@prisma/client` pada `7.10.1`.

Selesaikan kompatibilitas konfigurasi modul TypeScript dan samakan versi Prisma CLI dengan Prisma Client sebelum menjalankan perintah generate, seed, atau backend. Konfigurasi seed juga merujuk ke `ts-node` dan `tsconfig-paths`, yang saat ini belum tercantum sebagai dependency backend. Setelah masalah tersebut diperbaiki, ulangi build backend dan langkah setup database di atas.

## Troubleshooting

- **Koneksi database gagal:** pastikan PostgreSQL hidup, database sudah dibuat, dan `DATABASE_URL` benar.
- **Frontend tidak dapat memuat kuis:** pastikan backend berjalan, database sudah berisi soal, dan `NEXT_PUBLIC_API_URL` menunjuk ke API yang benar.
- **Port sudah digunakan:** ubah `PORT` untuk backend atau jalankan Next.js dengan port lain, misalnya `npm run dev -- --port 3002`. Sesuaikan `FRONTEND_URL` jika port frontend berubah.
- **CORS menolak request:** nilai origin frontend harus sesuai dengan alamat frontend. Backend mengizinkan `FRONTEND_URL` dan `http://localhost:3000`.
