# Netflix Clone (React + Vite)

Bu loyiha Netflix-ish stilda foydalanuvchi interfeysi va film/seriallar ko'rinishini yaratish uchun yaratilgan mini React ilovasi. Vite build qurilmasi, Tailwind CSS uslubi va React Router yordamida ishlaydi.

## Loyiha haqida
- React 19 va Vite yordamida yaratilgan frontend ilova
- Netflixga o'xshash kartalar, banner, kategoriya bo'limlari va responsiv dizayn
- Tailwind CSS orqali zamonaviy styling
- React Router bilan sahifalar navigatsiyasi

## Texnologiyalar
- React
- Vite
- Tailwind CSS
- React Router DOM

## Ishga tushirish uchun qo'llanma

1. Loyihani klon qiling:
   ```bash
   git clone <repo-URL>
   cd netflix-clon-react
   ```

2. Bog'liqliklarni o'rnating:
   ```bash
   npm install
   ```

3. Dev serverni ishga tushiring:
   ```bash
   npm run dev
   ```

4. Brauzerda quyidagi manzilni oching:
   ```text
   http://localhost:5173
   ```

> Agar Vite standart portdan boshqa port ishlatayotgan bo'lsa, terminaldagi ko'rsatilgan URLdan foydalaning.

## Build qilish

Production build yaratish uchun:
```bash
npm run build
```

Build natijasi `dist/` papkasida paydo bo'ladi.

## Preview qilish

Yaratilgan production buildni ko'rish uchun:
```bash
npm run preview
```

## Eslatma
Loyiha faqat frontend qismini o'z ichiga oladi; backend yoki autentifikatsiya funksiyasi mavjud emas. Agar keyinchalik funksionallik qo'shilsangiz, README ham yangilanishi kerak.
