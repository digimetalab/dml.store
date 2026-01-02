# DML Store 🚀
AI-Powered Online Store Platform

**DML Store** is an advanced **AI-powered online store web application** designed to help users build, manage, and grow digital businesses using intelligent automation and AI agents.

> Built by **[Digimetalab](https://digimetalab.my.id)** – AI Automation Agency

---

## ✨ Key Features

### 🧠 AI-Powered Commerce
- **AI Product Description Generator**: Create compelling copy in seconds.
- **AI Recommendations**: Smart product suggestions for customers.
- **AI Customer Support**: 24/7 intelligent chat agents.
- **Sales Insights**: Data-driven predictions and analysis.

### 🛍️ Online Store Core
- Physical & Digital Product Management
- Complete Orders & Checkout System
- CRM-Ready Customer Management
- Coupons & Promotions Engine

### ⚙️ Automation & AI Agents
- **Marketing Automation**: Email, WhatsApp, and Social Media integration.
- **Content Generation**: Landing pages, ads, and social posts.
- **Workflow Automation**: Ready for n8n integration.

### 📊 Analytics & Insights
- Real-time Sales & Revenue Dashboard
- AI-Generated Business Insights
- Customer Behavior Analysis
- Funnel Conversion Tracking

### 🔐 Scalable & Secure
- Multi-tenant capable architecture
- Role-based Access Control (RBAC)
- API-First Design

---

## 🧩 Tech Stack

This project is built with the latest modern web technologies:

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animation** | Framer Motion |
| **Database ORM** | [Drizzle ORM](https://orm.drizzle.team/) |
| **Database** | PostgreSQL |
| **AI Integration** | [Vercel AI SDK](https://sdk.vercel.ai/) |
| **LLM Provider** | OpenRouter (Support for OpenAI, Anthropic, Gemini, etc.) |
| **Validation** | Zod |

---

## 🏗️ Architecture Overview

```mermaid
graph TD
    User -->|Browser| Frontend[Next.js Web App]
    Frontend -->|API Routes| API[Next.js API Layer]
    API -->|AI SDK| LLM[LLM Providers]
    API -->|Drizzle ORM| DB[(PostgreSQL)]
    API -->|Async Tasks| Automation[n8n / Background Jobs]
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 20+ installed
- PostgreSQL database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/digimetalab/dml.store.git
   cd dml.store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory and add your credentials:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/dml_store
   OPENROUTER_API_KEY=your_api_key
   ```

4. **Initialize Database**
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Project Status

🚧 **Active Development (MVP Stage)**

**Planned Roadmap:**
- [ ] AI Store Builder
- [ ] AI Agent Marketplace
- [ ] Plugin & Extension System
- [ ] Enterprise-grade custom deployment

---

## 🤝 Contributing

Contributions are welcome! Please feel free to verify the roadmap or submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🌐 About

**DML Store** is proudly built by **Digimetalab**.
*Empowering businesses with AI.*
