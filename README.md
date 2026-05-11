# 📱 Panduan Portofolio Minimalis & Elegan

Selamat datang! Ini adalah panduan lengkap untuk menggunakan dan mengkustomisasi website portofolio Anda.

## 🎨 Desain & Filosofi

Website ini dibangun dengan filosofi **Modern Minimalism** yang menekankan:
- **Kesederhanaan**: Tidak ada ornamen yang tidak perlu
- **Fokus pada Konten**: Setiap elemen memiliki tujuan
- **Animasi yang Bermakna**: Gerakan yang guide user, bukan sekadar hiasan
- **Profesionalisme**: Design yang timeless dan sophisticated

### Palet Warna
- **Background**: Off-white (#FAFAF8) - hangat dan nyaman untuk mata
- **Text**: Charcoal (#1A1A1A) - kontras tinggi untuk readability
- **Accent**: Slate Blue (#4F46E5) - untuk CTA dan highlights
- **Borders**: Light Gray (#E5E5E5) - subtle dan clean

### Typography
- **Headings**: Playfair Display (serif) - elegan dan distinctive
- **Body**: Inter (sans-serif) - modern dan highly readable

---

## 🚀 Cara Memulai

### 1. Mengubah Informasi Dasar

#### Ubah Nama di Navigation
File: `client/src/components/Navigation.tsx`

```tsx
<button
  onClick={() => scrollToSection('hero')}
  className="text-xl md:text-2xl font-bold text-foreground hover-underline"
>
  Nama Anda Di Sini  // ← Ubah ini
</button>
```

#### Ubah Judul & Deskripsi Hero
File: `client/src/components/HeroSection.tsx`

```tsx
<h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
  Halo, Saya
  <span className="block text-primary">Profesi Anda Di Sini</span>  // ← Ubah ini
</h1>

<p className="text-lg text-foreground/70 leading-relaxed max-w-md">
  Deskripsi singkat tentang Anda...  // ← Ubah ini
</p>
```

#### Ubah Informasi About
File: `client/src/components/AboutSection.tsx`

```tsx
<p className="text-lg text-foreground/70 leading-relaxed">
  Tuliskan tentang Anda di sini...  // ← Ubah ini
</p>

<p className="text-base text-foreground/60 leading-relaxed">
  Paragraf kedua tentang filosofi atau pengalaman Anda...  // ← Ubah ini
</p>
```

#### Ubah Statistik
Masih di file yang sama, cari bagian "Stats Section":

```tsx
<div className="text-center">
  <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>  // ← Ubah angka
  <p className="text-sm text-foreground/60 mt-2">Proyek Selesai</p>  // ← Ubah label
</div>
```

#### Ubah Email & Social Links
File: `client/src/components/ContactSection.tsx`

```tsx
const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:email-anda@example.com',  // ← Ubah email
    color: 'text-foreground/60 hover:text-primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/username-anda',  // ← Ubah link
    color: 'text-foreground/60 hover:text-primary',
  },
  // ... dst
];
```

---

## 🖼️ Menambahkan Karya Portofolio

### Cara Menambahkan Project Baru

File: `client/src/components/PortfolioSection.tsx`

Cari array `portfolioItems` dan tambahkan object baru:

```tsx
const portfolioItems: PortfolioItem[] = [
  // ... existing items ...
  
  {
    id: '7',                                    // ID unik (gunakan nomor berikutnya)
    title: 'Judul Project Anda',               // Judul project
    description: 'Deskripsi singkat project', // Deskripsi (1-2 kalimat)
    category: 'Kategori',                      // Kategori (Web Design, Mobile, dll)
    image: 'https://url-gambar.com/image.jpg', // URL gambar (lihat panduan di bawah)
    link: 'https://link-ke-project.com',      // Link ke project (opsional)
    fullWidth: false,                          // true untuk item yang lebih besar
  },
];
```

### Struktur Data Lengkap

| Field | Tipe | Deskripsi | Contoh |
|-------|------|-----------|--------|
| `id` | string | ID unik untuk setiap item | `'7'` |
| `title` | string | Judul project | `'E-Commerce Platform'` |
| `description` | string | Deskripsi singkat | `'Platform e-commerce dengan UI minimalis'` |
| `category` | string | Kategori project | `'Web Design'` |
| `image` | string | URL gambar | `'https://...'` |
| `link` | string (opsional) | Link ke project | `'https://...'` |
| `fullWidth` | boolean (opsional) | Apakah item full-width | `true` atau `false` |

### Contoh Lengkap

```tsx
{
  id: '7',
  title: 'Aplikasi Manajemen Task',
  description: 'Aplikasi web untuk manajemen task dengan fitur kolaborasi real-time',
  category: 'Web Development',
  image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
  link: 'https://task-app-demo.com',
  fullWidth: true,  // Ini akan membuat item lebih besar
},
```

---

## 🖼️ Menambahkan Gambar

### Opsi 1: Menggunakan URL dari Internet (Recommended)

Anda bisa menggunakan gambar dari:

1. **Unsplash** (Free, high quality)
   - Kunjungi: https://unsplash.com
   - Cari gambar yang sesuai
   - Copy URL gambar
   - Contoh: `https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=crop`

2. **Pexels** (Free, high quality)
   - Kunjungi: https://www.pexels.com
   - Cari dan copy URL gambar

3. **Dari Website Anda Sendiri**
   - Upload gambar ke server Anda
   - Copy URL lengkap

### Opsi 2: Upload Gambar Sendiri (Untuk Gambar Custom)

Jika Anda ingin upload gambar custom:

1. Gunakan command:
   ```bash
   manus-upload-file path/to/image.png
   ```

2. Copy URL yang dikembalikan

3. Paste ke field `image` di portfolio item

### Tips Memilih Gambar

- **Ukuran**: Minimal 800x600px untuk kualitas terbaik
- **Format**: JPG atau PNG
- **Konsistensi**: Gunakan gambar dengan style yang konsisten
- **Aspect Ratio**: Gunakan 4:3 atau 16:9 untuk hasil terbaik

---

## 🎯 Mengubah Warna & Style

### Mengubah Warna Accent (Biru)

File: `client/src/index.css`

Cari bagian `:root` dan ubah nilai `--primary`:

```css
:root {
  --primary: #4F46E5; /* Ubah ke warna yang Anda inginkan */
  /* ... */
}
```

Warna yang direkomendasikan:
- **Purple**: `#7C3AED`
- **Green**: `#059669`
- **Red**: `#DC2626`
- **Orange**: `#EA580C`
- **Teal**: `#0D9488`

### Mengubah Font

File: `client/index.html`

Cari bagian Google Fonts dan ubah:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Ganti dengan font pilihan Anda dari Google Fonts.

### Mengubah Spacing & Border Radius

File: `client/src/index.css`

Cari bagian `:root` dan ubah:

```css
--radius: 0.375rem; /* Ubah untuk mengubah rounded corners */
```

---

## 📱 Struktur File

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.tsx      ← Navigation bar
│   │   │   ├── HeroSection.tsx     ← Hero section
│   │   │   ├── AboutSection.tsx    ← About & skills
│   │   │   ├── PortfolioSection.tsx ← Portfolio items (EDIT INI UNTUK MENAMBAH KARYA)
│   │   │   ├── ContactSection.tsx  ← Contact form
│   │   │   └── Footer.tsx          ← Footer
│   │   ├── pages/
│   │   │   └── Home.tsx            ← Main page
│   │   ├── index.css               ← Global styles & colors
│   │   └── App.tsx
│   ├── index.html                  ← HTML utama
│   └── public/
├── package.json
└── PANDUAN_PORTOFOLIO.md          ← File ini
```

---

## 🎨 Animasi yang Tersedia

Website ini memiliki beberapa animasi built-in:

### Entrance Animations
- **fadeInUp**: Fade in dengan slide up (untuk sections)
- **slideInLeft**: Slide dari kiri (untuk hero content)
- **slideInRight**: Slide dari kanan (untuk hero decorative)

### Hover Effects
- **hover-lift**: Scale up + shadow (untuk cards)
- **hover-underline**: Underline animation (untuk links)

### Scroll Animations
- Semua sections fade in saat scroll ke view
- Portfolio items stagger fade in satu per satu

Animasi ini sudah built-in dan akan berjalan otomatis. Anda tidak perlu mengubah apa pun kecuali ingin memodifikasi durasi atau delay.

---

## 🔧 Customization Lanjutan

### Mengubah Durasi Animasi

File: `client/src/index.css`

Cari `@keyframes` dan ubah durasi:

```css
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;  /* Ubah 0.6s ke durasi yang diinginkan */
}
```

### Menambahkan Section Baru

1. Buat file baru di `client/src/components/` (contoh: `NewSection.tsx`)
2. Buat component dengan struktur yang sama
3. Import di `client/src/pages/Home.tsx`
4. Tambahkan ke JSX

### Mengubah Layout

Semua layout menggunakan Tailwind CSS classes. Anda bisa mengubah:
- `grid-cols-1 md:grid-cols-2` → ubah jumlah kolom
- `gap-6` → ubah spacing
- `py-24 md:py-32` → ubah padding vertikal

---

## 🚀 Deployment

Website ini siap untuk di-deploy ke berbagai platform:

### Opsi 1: Menggunakan Manus (Recommended)
Website sudah di-host di Manus. Klik tombol "Publish" di UI untuk deploy.

### Opsi 2: Self-Hosting
```bash
# Build untuk production
pnpm run build

# Preview hasil build
pnpm run preview
```

---

## ❓ FAQ

**Q: Bagaimana cara menambahkan lebih banyak skills?**
A: Edit array `skills` di `AboutSection.tsx`

**Q: Bisa ganti warna background?**
A: Ya, ubah `--background` di `client/src/index.css`

**Q: Bagaimana cara menambahkan dark mode?**
A: Uncomment `switchable` di `App.tsx` dan buat `.dark` styles di `index.css`

**Q: Bisa tambah section baru?**
A: Ya, buat component baru dan import di `Home.tsx`

**Q: Animasi terlalu cepat/lambat?**
A: Ubah durasi di `index.css` di bagian `@keyframes`

---

## 💡 Tips & Best Practices

1. **Konsistensi**: Gunakan warna, font, dan spacing yang konsisten
2. **Performance**: Gunakan gambar yang sudah dioptimasi (< 1MB)
3. **Mobile First**: Selalu test di mobile sebelum deploy
4. **Accessibility**: Pastikan text memiliki kontras yang cukup
5. **SEO**: Update title dan meta description di `index.html`

---

## 📞 Butuh Bantuan?

Jika ada yang tidak jelas, silakan:
1. Baca kembali panduan ini
2. Check file yang disebutkan
3. Lihat contoh yang sudah ada di code

Good luck dengan portofolio Anda! 🎉
