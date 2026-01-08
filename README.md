# 🌴 Travel Website Template

Template website travel modern dengan **single-file configuration** untuk memudahkan manajemen konten. Dibangun dengan Bun + Vite + React 19 untuk performa maksimal.

![Preview](https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800&auto=format&fit=crop)

## 🎯 Tujuan Template

Template ini dibuat untuk:
- ✅ **Manajemen konten mudah** - Semua konten di satu file `site-config.js`
- ✅ **Performa cepat** - Bun + Vite untuk development & build super cepat
- ✅ **Siap pakai** - Tinggal ganti konten, langsung deploy
- ✅ **AI-friendly** - Mudah dimodifikasi oleh AI agent

## ⚡ Tech Stack

| Tool | Version | Fungsi |
|------|---------|--------|
| **Bun** | Latest | Runtime & package manager |
| **Vite** | 7.x | Bundler super cepat |
| **React** | 19.x | UI Framework |
| **Tailwind CSS** | 3.4 | Styling |
| **React Router** | 7.x | Routing |

## � Quick Start

```bash
# Clone repository
git clone https://github.com/PutraSaskara/templete-web-trevel-third.git

# Masuk directory
cd templete-web-trevel-third

# Install dependencies (dengan Bun)
bun install

# Jalankan dev server
bun run dev
```

> � **Alternatif npm:** `npm install` dan `npm run dev`

## 📁 Struktur Project

```
src/
├── data/
│   └── site-config.js  ⭐ EDIT FILE INI UNTUK GANTI KONTEN
├── components/
├── pages/
├── layouts/
├── hooks/
└── utils/
```

## ⚙️ Cara Customisasi

Edit `src/data/site-config.js`:

### 1. Ganti Identitas

```javascript
global: {
  siteName: "NamaTravelAnda",
  logo: { url: "/logo.png" },
  whatsapp: "628xxxxxxxxx",
}
```

### 2. Ganti Warna Theme

```javascript
theme: {
  colors: {
    primary: "#1a5632",    // Warna utama
    secondary: "#d4a574",  // Warna aksen
    background: "#0a0a0a", // Background
  }
}
```

### 3. Tambah/Edit Tour

```javascript
tours: [
  {
    id: "1",
    slug: "nama-tour",
    title: "Nama Tour",
    price: "Rp 2,000,000",
    image: "https://...",
    description: "...",
    highlights: ["..."],
  }
]
```

### 4. Tambah/Edit Artikel Blog

```javascript
articles: [
  {
    id: "1",
    slug: "judul-artikel",
    title: "Judul Artikel",
    excerpt: "...",
    content: "<p>HTML content</p>",
  }
]
```

## 📄 Halaman Tersedia

| Route | Halaman |
|-------|---------|
| `/` | Homepage |
| `/about` | Tentang Kami |
| `/contact` | Kontak + WhatsApp Form |
| `/packages` | Daftar Tour |
| `/packages/:slug` | Detail Tour |
| `/blog` | Blog |
| `/blog/:slug` | Detail Artikel |

## � Integrasi WhatsApp

Form akan redirect ke WhatsApp dengan pesan otomatis:
- Booking tour → Detail tour + harga
- Form kontak → Nama, email, pesan

## � SEO Ready

- React 19 native meta tags
- Open Graph untuk social media
- Dynamic title per halaman
- Canonical URLs

## 📦 Build Production

```bash
# Build
bun run build

# Preview hasil build
bun run preview
```

Output di folder `dist/` siap deploy ke Vercel, Netlify, dll.

## 📜 License

copyright © 2026 Putra Saskara. All rights reserved.

---

**Made by [Putra Saskara](https://github.com/PutraSaskara)**
