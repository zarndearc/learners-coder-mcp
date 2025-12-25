# 🚀 Learner's Coder MCP - Enterprise Edition

Your **production-grade, company-tested MCP agent** for web development guidance with **React, Express, and Next.js** expertise!

---

## ✨ What This Agent Does

This MCP agent provides **company-grade technology recommendations** for developers building:

- 🌐 **React** Single-Page Applications (Netflix, Airbnb, Facebook)
- 🚀 **Next.js** Full-Stack Applications (Vercel, TikTok, Hulu, Nike)
- 🔧 **Express.js** REST APIs (Uber, PayPal, Walmart, Netflix)

With **150+ libraries**, **company usage examples**, **copy-paste setup commands**, and **production best practices**.

---

## 🎯 Key Features

### 1. **Field-Specific Expertise**

- **Express.js Backend** → TypeScript, Prisma, JWT, Redis, Docker
- **React Frontend** → React Router, Zustand, React Query, TailwindCSS
- **Next.js Full-Stack** → App Router, NextAuth, Server Actions, Vercel

### 2. **Company-Tested Recommendations**

Every recommendation includes:

- ✅ Which companies use it (Uber, Netflix, Vercel, Airbnb, etc.)
- ✅ Exact version numbers
- ✅ Copy-paste setup commands
- ✅ Official documentation links
- ✅ Bundle sizes and performance metrics

### 3. **Smart Intent Recognition**

Understands queries like:

- `"Build Express REST API"` → Full backend stack
- `"React component library"` → React + TailwindCSS + shadcn/ui
- `"Next.js with database"` → Full-stack setup with Prisma
- `"Add authentication"` → NextAuth/Passport/JWT options
- `"Database choice"` → Prisma vs Drizzle vs Mongoose

### 4. **Production-Ready Stacks**

Get complete tech stacks for:

- Enterprise REST APIs
- Modern React SPAs
- Full-stack Next.js apps
- Microservices architecture
- Real-time collaborative apps

---

## 📚 Documentation

Read these files for complete guidance:

1. **[UPGRADE_SUMMARY.md](UPGRADE_SUMMARY.md)** - What's new and what you can do now
2. **[COMPANY_STACKS.md](COMPANY_STACKS.md)** - Quick reference for all stacks
3. **[EXAMPLE_QUERIES.md](EXAMPLE_QUERIES.md)** - Real-world example API calls
4. **[CAPABILITIES.md](CAPABILITIES.md)** - Full feature overview

---

## 🚀 Quick Start

### 1. Start the Server

```bash
npm start
# or for development with auto-reload:
npm run dev
```

Server runs on `http://localhost:3000`

### 2. Make Your First Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "I want to build a Next.js application with authentication and database"
  }'
```

### 3. Get Production-Grade Response

Response includes:

- ✅ Complete tech stack (Express/React/Next.js)
- ✅ Company usage examples
- ✅ All required libraries with versions
- ✅ Copy-paste setup commands
- ✅ Best practices and security tips
- ✅ Testing and deployment strategies

---

## 💻 API Endpoints

### POST /mcp

Main endpoint for getting recommendations.

**Request:**

```json
{
  "message": "Your question or requirement here"
}
```

**Response:**

```json
{
  "intent": "nextjs-fullstack",
  "companyGradeTechStack": { ... },
  "recommendedLibraries": { ... },
  "setupCommands": [ ... ],
  "security": [ ... ],
  "performance": { ... },
  "scalability": { ... }
}
```

### GET /health

Health check endpoint to verify the server is running.

---

## 📊 Technology Stacks Included

### **Express.js + PostgreSQL + Prisma**

- Runtime: Node.js 20 LTS
- Language: TypeScript
- Auth: JWT + bcryptjs
- Validation: Zod or Joi
- Testing: Jest + Supertest
- Monitoring: Sentry
- Used by: Uber, PayPal, Netflix

### **React + Vite + TailwindCSS**

- Framework: React 18.x
- Routing: React Router v6
- State: Zustand (client) + React Query (server)
- Forms: React Hook Form + Zod
- Build: Vite
- Testing: Vitest + Testing Library + Playwright
- Used by: Netflix, Airbnb, Facebook

### **Next.js 14+ App Router**

- Frontend: React 18.x + TailwindCSS + shadcn/ui
- Backend: Route Handlers + Server Actions
- Database: PostgreSQL + Prisma
- Auth: NextAuth.js v5
- Deployment: Vercel
- Used by: Vercel, TikTok, Hulu, Nike

---

## 📦 Project Structure

```
learners-coder-mcp/
├── src/
│   ├── server.js                 # Main Express server
│   ├── config/
│   │   └── identity.js           # Agent identity
│   ├── handlers/
│   │   ├── concepts.js           # Learning concepts
│   │   ├── intent.js             # Intent recognition
│   │   ├── questions.js          # Clarifying questions
│   │   ├── tools.js              # Tool recommendations
│   │   ├── performance.js        # Performance optimization
│   │   └── enterprise.js         # Company-grade stacks
│   ├── knowledge/
│   │   ├── liberaries.js         # 150+ library database
│   │   └── companyLibraries.js   # Company-specific libs
│   └── policies/
│       └── teaching.js           # Teaching policy
├── package.json                  # Dependencies
├── UPGRADE_SUMMARY.md            # What's new
├── COMPANY_STACKS.md             # Tech stack reference
├── EXAMPLE_QUERIES.md            # Real examples
├── CAPABILITIES.md               # Feature overview
└── README.md                     # This file
```

---

## 🎓 Example Queries

### Query 1: Express Backend

```bash
curl -X POST http://localhost:3000/mcp \
  -d '{"message": "Build production Express REST API"}'
```

Gets: Full backend stack with all libraries, setup, and best practices

### Query 2: React App

```bash
curl -X POST http://localhost:3000/mcp \
  -d '{"message": "Building a React SPA with forms"}'
```

Gets: React stack with routing, state, forms, and testing

### Query 3: Next.js Full-Stack

```bash
curl -X POST http://localhost:3000/mcp \
  -d '{"message": "Create Next.js app with database"}'
```

Gets: Full-stack setup with auth, database, and deployment

### Query 4: Library Comparison

```bash
curl -X POST http://localhost:3000/mcp \
  -d '{"message": "Zustand vs Redux - which is better?"}'
```

Gets: Head-to-head comparison with recommendations

### Query 5: Authentication

```bash
curl -X POST http://localhost:3000/mcp \
  -d '{"message": "How to add auth to Next.js"}'
```

Gets: NextAuth.js setup guide with OAuth options

---

## 🏢 Company-Tested Libraries

### **Express.js Essentials** (150+ libraries)

- Core: Express, TypeScript
- Database: Prisma, Mongoose, Drizzle ORM
- Auth: JWT, Passport, bcryptjs
- Validation: Zod, Joi, express-validator
- Security: Helmet, CORS, Rate limiting
- Testing: Jest, Supertest, Vitest, Playwright
- Monitoring: Sentry, Winston, Pino

### **React Essentials** (80+ libraries)

- Core: React 18.x
- Routing: React Router v6
- State: Zustand, Redux Toolkit, Jotai
- Server Data: React Query (TanStack Query)
- Forms: React Hook Form, Formik
- Styling: TailwindCSS, Styled Components
- Components: shadcn/ui, Material-UI, Chakra UI
- Testing: Vitest, Jest, Testing Library, Playwright, Cypress

### **Next.js Essentials** (70+ libraries)

- Framework: Next.js 14+ App Router
- Auth: NextAuth.js, Iron Session
- Database: Prisma, Drizzle ORM, Mongoose
- State: Zustand, React Query
- Forms: React Hook Form + Zod
- Styling: TailwindCSS + shadcn/ui
- Testing: Vitest, Playwright
- Deployment: Vercel (recommended)

---

## ✅ What You Get

- **150+ Libraries** with company usage and setup
- **8+ Tech Stack Templates** ready to use
- **Copy-Paste Commands** for quick setup
- **Security Recommendations** for production
- **Performance Tips** for optimization
- **Testing Strategies** for quality
- **Deployment Guides** for launch
- **Best Practices** from industry leaders

---

## 🎯 Who Benefits

✅ **Express.js Developers** - Get backend best practices  
✅ **React Developers** - Get frontend standards  
✅ **Next.js Developers** - Get full-stack guidance  
✅ **Startups** - Get production-ready stacks  
✅ **Enterprises** - Get company-proven solutions  
✅ **Teams** - Get consistent recommendations  
✅ **Learners** - Get structured education

---

## 🔒 Security First

Every recommendation includes:

- Helmet for HTTP security headers
- CORS configuration
- Rate limiting setup
- Password hashing with bcryptjs
- JWT implementation
- Input validation strategies
- SQL injection prevention
- CSRF protection

---

## ⚡ Performance Focused

Recommendations include:

- Code splitting strategies
- Caching layers (Redis)
- Database optimization (indexing)
- Image optimization
- Bundle size awareness
- Lazy loading patterns
- Compression setup

---

## 📈 Scalability Path

Guidance for scaling from:

- **MVP** → Quick setup with Next.js
- **Growth** → Add caching and optimization
- **Scale** → Microservices, Docker, Kubernetes
- **Enterprise** → Complex architectures, monitoring

---

## 🚀 Get Started Now

### Option 1: Direct Query

```bash
npm start
curl -X POST http://localhost:3000/mcp \
  -d '{"message": "Build a modern web app"}'
```

### Option 2: Read Examples

Check [EXAMPLE_QUERIES.md](EXAMPLE_QUERIES.md) for 6+ real examples

### Option 3: Check Health

```bash
curl http://localhost:3000/health
```

---

## 📖 Documentation

- [UPGRADE_SUMMARY.md](UPGRADE_SUMMARY.md) - Complete upgrade guide
- [COMPANY_STACKS.md](COMPANY_STACKS.md) - Stack comparison table
- [EXAMPLE_QUERIES.md](EXAMPLE_QUERIES.md) - 6+ real examples
- [CAPABILITIES.md](CAPABILITIES.md) - Feature overview

---

## 🎉 Ready to Go!

Your MCP agent is now **powerful**, **production-ready**, and **company-tested**!

It provides guidance for:

- ✅ Express.js backend development
- ✅ React frontend development
- ✅ Next.js full-stack development
- ✅ Production deployments
- ✅ Security best practices
- ✅ Performance optimization
- ✅ Testing strategies

**Start building amazing things!** 🚀

---

## � Payment Gateway Integration

Now with **complete support for Indian payment gateways**!

### Supported Payment Gateways

| Gateway       | Market Share | Best For                      | Setup     |
| ------------- | ------------ | ----------------------------- | --------- |
| **Razorpay**  | 35%          | E-commerce, SaaS, Marketplace | Easy      |
| **PayU**      | 20%          | E-commerce with EMI           | Easy      |
| **Cashfree**  | 15%          | Startups with payouts         | Easy      |
| **Instamojo** | 8%           | Creators & Freelancers        | Very Easy |
| **Stripe**    | Global       | International payments        | Medium    |

### Getting Started with Payments

```bash
# Install Razorpay (most popular)
npm install razorpay

# Get API credentials from https://dashboard.razorpay.com

# Quick example
import Razorpay from 'razorpay';
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
const order = await razorpay.orders.create({
  amount: 50000, // ₹500
  currency: 'INR',
});
```

📖 **Complete Guides**:

- [PAYMENT_GATEWAYS.md](PAYMENT_GATEWAYS.md) - Full payment gateway documentation
- [QUICK_START_PAYMENTS.md](QUICK_START_PAYMENTS.md) - Quick reference
- [PAYMENT_INFRASTRUCTURE_EXAMPLES.md](PAYMENT_INFRASTRUCTURE_EXAMPLES.md) - Real examples

---

## 🖥️ Infrastructure Management

Now with **complete Proxmox VE support**!

### Proxmox Virtual Environment

Automate your infrastructure with Proxmox:

```bash
# Install Node.js client
npm install proxmox-ve

# List all nodes in your cluster
import axios from 'axios';

const proxmox = axios.create({
  baseURL: 'https://proxmox-host:8006/api2/json',
});

const nodes = await proxmox.get('/nodes', {
  headers: { 'Authorization': 'PVEAPIToken=token' }
});
```

**Features**:

- ✅ Virtual Machines (KVM)
- ✅ Containers (LXC)
- ✅ Clustering & HA
- ✅ Backup & Restore
- ✅ RESTful API
- ✅ Complete Node.js support

📖 **Complete Guides**:

- [PAYMENT_GATEWAYS.md#-infrastructure-with-proxmox](PAYMENT_GATEWAYS.md) - Full infrastructure guide
- [PAYMENT_INFRASTRUCTURE_EXAMPLES.md](PAYMENT_INFRASTRUCTURE_EXAMPLES.md) - VM provisioning examples

---

## 🚀 Combined: Payments + Infrastructure

Build a complete SaaS with **payment processing + automatic VM provisioning**:

```javascript
// When customer pays via Razorpay
app.post("/webhooks/razorpay", async (req, res) => {
  if (verifyWebhookSignature(req.body)) {
    // Create VM automatically
    const vm = await proxmox.post("/nodes/pve/qemu", {
      vmid: customerId,
      name: `customer-${customerId}`,
      memory: 2048,
      cores: 2,
    });

    // Send credentials to customer
    await sendEmail(customer.email, { vmId: vm.id });
  }
});
```

📖 **Complete Example**: [PAYMENT_INFRASTRUCTURE_EXAMPLES.md#combined-architecture](PAYMENT_INFRASTRUCTURE_EXAMPLES.md)

---

## 📚 Documentation

| Document                                                                 | Purpose                 | Best For                     |
| ------------------------------------------------------------------------ | ----------------------- | ---------------------------- |
| [QUICK_START_PAYMENTS.md](QUICK_START_PAYMENTS.md)                       | Payment quick start     | Getting started (5 min)      |
| [PAYMENT_GATEWAYS.md](PAYMENT_GATEWAYS.md)                               | Complete reference      | Deep dive learning (30 min)  |
| [PAYMENT_INFRASTRUCTURE_EXAMPLES.md](PAYMENT_INFRASTRUCTURE_EXAMPLES.md) | Real examples           | Learning by example (30 min) |
| [EXAMPLE_QUERIES.md](EXAMPLE_QUERIES.md)                                 | Example questions       | Learning agent usage         |
| [COMPANY_STACKS.md](COMPANY_STACKS.md)                                   | Company recommendations | Enterprise choices           |

---

## 📞 Support

See documentation files for:

- Setup instructions
- Example queries
- Tech stack options
- Best practices
- Company recommendations
- Payment gateway integration
- Infrastructure setup
- Combined payment + infrastructure examples

---

**Created:** December 2025  
**Version:** Enterprise Edition (Enhanced)  
**Status:** Production Ready ✅

**New Features in v2.0**:

- ✅ 5 payment gateways (Indian-focused)
- ✅ Proxmox infrastructure support
- ✅ 100+ official documentation links
- ✅ 15+ real-world examples
- ✅ Complete security guidelines
