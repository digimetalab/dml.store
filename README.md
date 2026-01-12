<p align="center">
  <img src="public/hero-bg.png" alt="DML Store Banner" width="100%" />
</p>

<h1 align="center">DML Store 🚀</h1>

<p align="center">
  <strong>AI-Powered Online Store Platform</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white" alt="TailwindCSS" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" /></a>
</p>

<p align="center">
  <em>Build, manage, and grow your digital business with intelligent AI automation.</em>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-contributing">Contributing</a>
</p>

***

## 📖 Overview

**DML Store** is a modern, AI-powered e-commerce platform built with the latest web technologies. It features an intelligent chatbot assistant that helps customers find products, make recommendations, and complete orders through WhatsApp integration.

### Why DML Store?

* 🤖 **AI-First Approach** - Built-in AI assistant powered by OpenRouter (supports GPT-4, Claude, DeepSeek, etc.)
* ⚡ **Modern Stack** - Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4
* 🎨 **Beautiful UI** - Dark-themed design with neon accents and smooth animations
* 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
* 🔒 **Type-Safe** - End-to-end type safety with TypeScript and Drizzle ORM

***

## ✨ Features

### 🧠 AI-Powered Commerce

| Feature | Description |
|---------|-------------|
| **AI Product Assistant** | Intelligent chatbot for product recommendations and customer support |
| **Smart Product Search** | AI-powered search with natural language understanding |
| **Budget Recommendations** | Automated build suggestions based on customer budget |
| **WhatsApp Integration** | One-click order through WhatsApp with pre-filled messages |

### 🛍️ E-Commerce Essentials

* **Product Catalog** - Complete product management with categories, pricing, and badges
* **Category Navigation** - GPU, CPU, RAM, Storage, Motherboard, PSU, Case, Monitor, Peripherals
* **Deal Highlights** - Featured products, sales, and hot deals section
* **Inventory Tracking** - Real-time stock availability

### 🎨 User Interface

* **Hero Section** - Stunning landing page with animated elements
* **Product Cards** - Beautiful product displays with hover effects
* **Trust Signals** - Customer testimonials and trust indicators
* **Responsive Design** - Mobile-first approach with desktop enhancements

***

## 🧩 Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | 16.1.1 |
| **UI Library** | [React](https://react.dev/) | 19.2.3 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | 12.x |
| **Database** | PostgreSQL + [Drizzle ORM](https://orm.drizzle.team/) | 0.45.x |
| **AI SDK** | [Vercel AI SDK](https://sdk.vercel.ai/) | 5.x |
| **LLM Provider** | [OpenRouter](https://openrouter.ai/) | - |
| **Validation** | [Zod](https://zod.dev/) | 4.x |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.562.x |

***

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:

* **Node.js 20+** - [Download here](https://nodejs.org/)
* **PostgreSQL** - Local installation or cloud service (Supabase, Neon, Railway)
* **OpenRouter API Key** - [Get your key](https://openrouter.ai/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/digimetalab/dml.store.git
cd dml.store

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env

# 4. Update .env with your credentials
# DATABASE_URL=postgresql://user:password@localhost:5432/dml_store
# OPENROUTER_API_KEY=sk-or-v1-your-api-key
# WHATSAPP_NUMBER=628123456789

# 5. Initialize database
npm run db:push
npm run db:seed

# 6. Start development server
npm run dev
```

Open <http://localhost:3000> to see your store!

***

## 📁 Project Structure

```
dml.store/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/           # AI Chat API endpoint
│   │   │       └── route.ts    # Chat handler with AI tools
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   │
│   ├── components/             # React Components
│   │   ├── chat/
│   │   │   └── ProductCard.tsx # Product card for chat
│   │   ├── CategoryHighlights.tsx
│   │   ├── ChatbotWidget.tsx   # AI Chatbot widget
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PCBuilderCTA.tsx
│   │   ├── Testimonials.tsx
│   │   └── TrustSignals.tsx
│   │
│   ├── db/                     # Database Layer
│   │   ├── index.ts            # Database connection
│   │   ├── schema.ts           # Drizzle schema (products, categories)
│   │   └── seed.ts             # Sample data seeder
│   │
│   └── lib/
│       └── utils.ts            # Utility functions (cn, etc.)
│
├── public/                     # Static assets
├── .env.example                # Environment template
├── drizzle.config.ts           # Drizzle configuration
├── next.config.ts              # Next.js configuration
├── package.json
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

***

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run db:push` | Push Drizzle schema to database |
| `npm run db:seed` | Seed database with sample products |
| `npm run db:studio` | Open Drizzle Studio for database management |

***

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Required | Description |
|----------|:--------:|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `OPENROUTER_API_KEY` | ✅ | API key from [OpenRouter](https://openrouter.ai/) |
| `WHATSAPP_NUMBER` | ⚪ | WhatsApp number for orders (without `+`) |

### Database Schema

The application uses two main tables:

**Products**

* `id` - Primary key
* `name` - Product name
* `category` - Product category (GPU, CPU, RAM, etc.)
* `description` - Product description
* `price` - Price in IDR
* `originalPrice` - Original price (for discounts)
* `imageUrl` - Product image URL
* `badge` - Product badge (SALE, HOT, NEW, BUNDLE)
* `specs` - JSON specifications
* `inStock` - Stock availability
* `createdAt` - Creation timestamp

**Categories**

* `id` - Primary key
* `name` - Category name
* `slug` - URL-friendly slug
* `description` - Category description
* `iconUrl` - Category icon URL

***

## 🗺️ Roadmap

### Completed ✅

* \[x] Modern landing page with dark theme
* \[x] AI-powered chatbot assistant
* \[x] Product catalog with categories
* \[x] WhatsApp order integration
* \[x] Responsive design
* \[x] Database seeding with sample data

### In Progress 🚧

* \[ ] User authentication (NextAuth.js)
* \[ ] Shopping cart functionality
* \[ ] Admin dashboard

### Planned 📋

* \[ ] Checkout & payment gateway
* \[ ] Order management system
* \[ ] Multi-language support (i18n)
* \[ ] Email notifications
* \[ ] Analytics dashboard
* \[ ] Product reviews & ratings

***

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

* Follow the existing code style and conventions
* Write meaningful commit messages
* Add tests for new features when applicable
* Update documentation as needed

***

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

***

## 🙏 Acknowledgments

* [Vercel](https://vercel.com) for the amazing Next.js framework
* [OpenRouter](https://openrouter.ai) for AI model access
* [Drizzle Team](https://orm.drizzle.team) for the excellent ORM
* [Lucide](https://lucide.dev) for beautiful icons

***

<p align="center">
  <strong>DML Store</strong> is proudly built by <a href="https://digimetalab.my.id"><strong>Digimetalab</strong></a>
  <br />
  <em>AI Automation Agency • Bali, Indonesia</em>
</p>

<p align="center">
  <a href="https://digimetalab.my.id">Website</a> •
  <a href="https://github.com/digimetalab">GitHub</a>
</p>
