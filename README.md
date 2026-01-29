# Prawira Outdoor - Rental System

![Hero Section](https://picsum.photos/seed/camping/1200/400.jpg)

**Prawira Outdoor** adalah sistem persewaan alat camping modern yang dirancang untuk mempermudah pecinta alam dalam memesan perlengkapan petualangan mereka secara online. Dibangun dengan fokus pada kecepatan, desain yang menarik, dan kemudahan penggunaan bagi pelanggan maupun administrator.

## 🚀 Fitur Utama

- **Katalog Produk Dinamis**: Penjelajahan alat camping dengan filter kategori dan pencarian real-time.
- **Sistem Keranjang**: Pengelolaan item sewa yang mudah sebelum melakukan pesanan.
- **Integrasi WhatsApp**: Kirim detail pesanan langsung ke admin melalui WhatsApp untuk konfirmasi cepat.
- **Dashboard Admin**: Manajemen inventori (CRUD produk & kategori) yang aman dan intuitif.
- **Desain Modern**: Antarmuka responsif dengan animasi halus menggunakan Tailwind CSS dan Framer Motion.
- **SEO Optimized**: Struktur HTML semantik dan metadata yang dioptimalkan.

## 🛠️ Tech Stack

- **Backend**: [Laravel 12+](https://laravel.com)
- **Frontend**: [React](https://reactjs.org) via [Inertia.js](https://inertiajs.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Database**: MySQL / SQLite

## ⚙️ Instalasi & Setup

### Prasyarat
- PHP 8.2+
- Composer
- Node.js & NPM

### Langkah-langkah
1. **Clone Repository**
   ```bash
   git clone https://github.com/username/prawira-outdoor.git
   cd prawira-outdoor
   ```

2. **Instal Dependensi**
   ```bash
   composer install
   npm install
   ```

3. **Konfigurasi Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   *Atur koneksi database di file `.env`.*

4. **Migrasi Database & Seeding**
   ```bash
   php artisan migrate --seed
   ```

5. **Jalankan Aplikasi**
   Gunakan perintah berikut untuk menjalankan server sekaligus compiler aset:
   ```bash
   composer dev
   ```
   *Atau jalankan secara terpisah:*
   - `php artisan serve`
   - `npm run dev`

## 📂 Struktur Folder Utama

- `app/` - Logika inti backend (Controller, Model, Middleware).
- `resources/js/Pages/` - Halaman frontend (React components).
- `resources/js/Components/` - Komponen UI yang dapat digunakan kembali.
- `routes/` - Definisi rute web dan API.
- `public/` - Aset statis (logo, favicon, image).

---

© 2026 Prawira Outdoor. Developed with ❤️ for Outdoor Enthusiasts.
