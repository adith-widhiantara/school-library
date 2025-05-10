# **Sistem Manajemen Buku** (Laravel)

Sistem **Manajemen Buku** ini dibangun menggunakan **Laravel**. Sistem ini memungkinkan Admin untuk mengelola buku,
penulis buku, serta pengguna. Pengguna dengan level Non-Admin hanya dapat melihat buku.

## **Fitur**

* **Manajemen Pengguna** (Hanya Admin):

    * Admin dapat menambah, mengedit, dan menghapus pengguna.
    * Admin dapat menetapkan role pengguna (Admin atau Non-Admin).

* **Manajemen Buku**:

    * Admin dapat menambah, membaca, mengedit, dan menghapus buku.
    * Admin dapat mengaitkan buku dengan penulis (Book Creator).

* **Manajemen Book Creator** (Hanya Admin):

    * Admin dapat menambah, mengedit, dan menghapus book creator (penulis buku).

* **Autentikasi**:

    * Fitur login, logout, dan reset password.
    * Admin dan Non-Admin memiliki hak akses yang berbeda.

## **Persyaratan Sistem (Requirements)**

Agar aplikasi ini berjalan dengan baik, pastikan lingkungan pengembangan kamu memenuhi persyaratan berikut:

### **PHP Version**:

* Pastikan menggunakan **PHP 8.2** atau lebih tinggi.

### **Library yang Digunakan**:

1. **bensampo/laravel-enum**: Untuk memudahkan penggunaan enum di Laravel.
2. **inertiajs/inertia-laravel**: Untuk mengintegrasikan Inertia.js dengan Laravel (menggunakan server-side rendering
   dengan Vue.js).
3. **laravel/framework**: Laravel framework versi 12.x.
4. **laravel/sanctum**: Untuk autentikasi berbasis token di aplikasi.
5. **laravel/tinker**: Untuk memberikan kemampuan REPL (Read Eval Print Loop) di Laravel.
6. **tightenco/ziggy**: Untuk membuat rute Laravel bisa digunakan di JavaScript.

### **Pengaturan Email (MAIL_MAILER)**

Pada file `.env`, pengaturan untuk MAIL_MAILER harus disesuaikan dengan provider mailer yang digunakan.

Pastikan mengganti nilai `MAIL_USERNAME`, `MAIL_PASSWORD`, dan pengaturan lainnya sesuai dengan kredensial provider
email yang dipilih. Setelah itu, Laravel dapat mengirimkan email untuk reset password.

## **Panduan Instalasi**

### 1. **Clone Repository**

```bash
git clone https://github.com/adith-widhiantara/school-library.git
cd school-library
```

### 2. **Install Dependencies**

Jalankan perintah ini untuk menginstal dependensi PHP:

```bash
composer install
```

### 3. **Atur Lingkungan**

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Generate key aplikasi:

```bash
php artisan key:generate
```

### 4. **Setel Database**

1. Buat database untuk proyek ini (misalnya, `book_management_system`).
2. Konfigurasi file `.env` dengan pengaturan database yang benar:

```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=book_management_system
DB_USERNAME=root
DB_PASSWORD=
```

### 5. **Jalankan Migrasi**

Migrasikan tabel-tabel ke dalam database:

```bash
php artisan migrate
```

### 6. **Install Laravel Breeze untuk Autentikasi**

Jalankan perintah berikut untuk menginstal **Laravel Breeze** (ini akan mengatur rute dan tampilan autentikasi):

```bash
composer require laravel/breeze --dev
php artisan breeze:install
npm install
npm run dev
```

### 7. **Seed Database (Opsional)**

Untuk mengisi database dengan data awal (pengguna, penulis buku, dan buku), jalankan:

```bash
php artisan db:seed
```

### 8. **Jalankan Aplikasi**

Mulai server pengembangan Laravel:

```bash
php artisan serve
```

Akses aplikasi di browser melalui `http://127.0.0.1:8000`.

## **Penggunaan**

### **Autentikasi**

* **Admin** dapat masuk dengan kredensial default atau membuat pengguna admin melalui seeder database.
* **Pengguna Non-Admin** juga dapat masuk dan melihat buku, tetapi tidak dapat memodifikasi data.

### **Kontrol Akses**

* **Admin** dapat membuat, mengedit, dan menghapus pengguna, buku, dan penulis.
* **Non-Admin** hanya dapat **melihat** buku (daftar dan detail), tetapi tidak dapat menambah, mengedit, atau menghapus
  buku atau penulis.

### **Rute yang Tersedia**

* **Rute Auth**:

    * `/login` - Halaman login
    * `/register` - Halaman registrasi
    * `/forgot-password` - Halaman reset password
    * `/reset-password` - Halaman reset password

* **Rute Buku**:

    * `/books` - Daftar buku (dapat diakses oleh Admin dan Non-Admin)
    * `/books/{book}` - Lihat detail buku
    * `/books/create` - Tambah buku baru (Hanya Admin)
    * `/books/{book}/edit` - Edit buku (Hanya Admin)

* **Rute Pengguna** (Hanya Admin):

    * `/users` - Kelola pengguna
    * `/users/{user}` - Lihat detail pengguna
    * `/users/{user}/edit` - Edit pengguna

* **Rute Book Creators** (Hanya Admin):

    * `/book-creators` - Kelola penulis buku
    * `/book-creators/{creator}` - Lihat detail penulis
    * `/book-creators/{creator}/edit` - Edit penulis buku

## **Struktur File**

* `app/Models/` - Berisi model Eloquent untuk `User`, `Book`, dan `BookCreator`.
* `app/Http/Controllers/` - Controller untuk menangani logika pengguna, buku, dan book creators.
* `resources/views/` - Tampilan Blade untuk autentikasi dan data.
* `database/migrations/` - File migrasi untuk tabel-tabel database.
