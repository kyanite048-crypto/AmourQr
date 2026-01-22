# AmourQR 🍽️📱

AmourQR is a modern QR-based digital menu platform built to help restaurants present their menus beautifully and manage them easily.

This project is a rebranded and customized version of the Menufic open-source project, tailored for real-world restaurant use and deployment.

---

## 🚀 Features

- QR Code digital menus
- Restaurant dashboard
- Menu, categories, and item management
- Banner & image upload (ImageKit)
- Google Authentication
- Neon Postgres database
- Fully deployable on Vercel (free tier)
- Mobile-first design

---

## 🛠️ Tech Stack

- Next.js
- NextAuth (Google OAuth)
- Prisma ORM
- Neon Postgres
- ImageKit
- Mantine UI
- tRPC

---

## 🌍 Live Demo

https://amour-qr-azure.vercel.app

---

## ⚙️ Environment Variables

Create a `.env` file based on `.env.example`.

Required variables:

- DATABASE_URL
- NEXTAUTH_SECRET
- NEXTAUTH_URL
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- IMAGEKIT_PUBLIC_KEY
- IMAGEKIT_PRIVATE_KEY
- NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
- IMAGEKIT_BASE_FOLDER

---

## 🧪 Local Development

```bash
git clone https://github.com/kyanite048-crypto/AmourQr.git
cd AmourQr
npm install
npm run dev

👨‍💻 Developer

Built and customized by @lu1zsec https://www.instagram.com/lu1zsec/