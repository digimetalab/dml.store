# DML Store 🚀

<div align="center">

**AI-Powered Online Store Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

*Build, manage, and grow your digital business with intelligent AI automation.*

[Getting Started](#-getting-started) •
[Features](#-key-features) •
[Tech Stack](#-tech-stack) •
[Documentation](#-documentation)

</div>

***

## ✨ Key Features

### 🧠 AI-Powered Commerce

| Feature | Description |
|---------|-------------|
| **AI Product Assistant** | Intelligent chatbot for product recommendations |
| **Smart Search** | AI-powered product search and discovery |
| **Dynamic Pricing** | Budget-based build recommendations |
| **WhatsApp Integration** | Seamless order through WhatsApp |

### 🛍️ E-Commerce Core

* Complete product catalog with categories
* Real-time inventory management
* Beautiful, responsive landing page
* Modern dark-themed UI with neon accents

### ⚡ Developer Experience

* Type-safe database with Drizzle ORM
* Server-side rendering with Next.js App Router
* Fully typed with TypeScript
* Hot reload development server

***

## 🧩 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Database** | PostgreSQL with [Drizzle ORM](https://orm.drizzle.team/) |
| **AI SDK** | [Vercel AI SDK](https://sdk.vercel.ai/) |
| **LLM Provider** | [OpenRouter](https://openrouter.ai/) (DeepSeek, GPT-4, Claude, etc.) |
| **Validation** | [Zod](https://zod.dev/) |
| **Icons** | [Lucide Icons](https://lucide.dev/) |

***

## 🚀 Getting Started

### Prerequisites

* **Node.js 20+** - [Download](https://nodejs.org/)
* **PostgreSQL** - Local or cloud instance (Supabase, Neon, etc.)
* **OpenRouter API Key** - Get at [openrouter.ai](https://openrouter.ai/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/digimetalab/dml.store.git
   cd dml.store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**

   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your credentials:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/dml_store
   OPENROUTER_API_KEY=sk-or-v1-your-api-key
   WHATSAPP_NUMBER=628123456789
   ```

4. **Initialize database**
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open the app**

   Navigate to <http://localhost:3000>

***

## 📁 Project Structure

```
dml.store/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/chat/        # AI Chat API endpoint
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Landing page
│   ├── components/          # React components
│   │   ├── ChatbotWidget.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── db/                  # Database layer
│   │   ├── schema.ts        # Drizzle schema
│   │   ├── seed.ts          # Initial data
│   │   └── index.ts         # DB connection
│   └── lib/                 # Utilities
├── public/                  # Static assets
├── drizzle.config.ts        # Drizzle configuration
└── package.json
```

***

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema to database |
| `npm run db:seed` | Seed database with sample data |
| `npm run db:studio` | Open Drizzle Studio |

***

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `OPENROUTER_API_KEY` | ✅ | OpenRouter API key for AI features |
| `WHATSAPP_NUMBER` | ⚪ | WhatsApp number for orders (optional) |

***

## 🗺️ Roadmap

* \[x] Landing page with modern UI
* \[x] AI-powered chatbot assistant
* \[x] Product catalog with categories
* \[x] WhatsApp order integration
* \[ ] User authentication
* \[ ] Shopping cart & checkout
* \[ ] Admin dashboard
* \[ ] Multi-language support
* \[ ] Payment gateway integration

***

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

***

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

***

<div align="center">

**DML Store** is proudly built by **[Digimetalab](https://digimetalab.my.id)**

*AI Automation Agency | Bali, Indonesia*

</div>
