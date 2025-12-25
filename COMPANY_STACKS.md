# 🏢 Company-Grade Tech Stacks - Quick Reference

Your MCP agent now provides **production-grade, company-tested recommendations** for React, Express, and Next.js development!

---

## 📊 Quick Stack Comparison

### 1. **Express.js REST API** (Uber, PayPal, Walmart, Netflix)

```
Backend:        Express.js + TypeScript
Database:       PostgreSQL + Prisma ORM
Auth:           JWT + bcryptjs
Validation:     Zod or Joi
Caching:        Redis
Testing:        Jest + Supertest
Monitoring:     Sentry or DataDog
Deployment:     Docker + Kubernetes
```

**Setup:**

```bash
npm install express typescript dotenv cors helmet
npm install @prisma/client jsonwebtoken bcryptjs zod
npm install -D jest supertest @types/express @types/node
npx prisma init
```

---

### 2. **React SPA** (Netflix, Airbnb, Facebook)

```
Framework:      React 18.x
Routing:        React Router v6
State (Client): Zustand or Redux Toolkit
State (Server): TanStack Query (React Query)
Forms:          React Hook Form + Zod
Styling:        TailwindCSS + shadcn/ui
Build:          Vite
Testing:        Vitest + Testing Library
E2E:            Playwright or Cypress
Deployment:     Vercel, Netlify, or AWS S3 + CloudFront
```

**Setup:**

```bash
npm create vite@latest -- --template react
npm install typescript react-router-dom axios
npm install zustand @tanstack/react-query
npm install react-hook-form zod
npm install -D tailwindcss postcss autoprefixer vitest
npm install shadcn-ui
```

---

### 3. **Next.js Full-Stack** (Vercel, TikTok, Hulu, Nike)

```
Framework:      Next.js 14+ with App Router
Frontend:       React 18.x + TailwindCSS + shadcn/ui
Backend:        Next.js Route Handlers + Server Actions
Database:       PostgreSQL + Prisma
Auth:           NextAuth.js v5
Data:           TanStack Query + Server Components
Forms:          React Hook Form + Zod
Testing:        Vitest + Playwright
Deployment:     Vercel (recommended) or Node.js host
```

**Setup:**

```bash
npx create-next-app@latest --typescript --tailwind
npm install next-auth @next-auth/prisma-adapter
npm install @prisma/client prisma
npm install zustand @tanstack/react-query
npm install react-hook-form zod
npm install -D vitest @testing-library/react playwright
npx prisma init
```

---

## 📚 Essential Libraries by Field

### **Express.js Developers**

| Purpose        | Library            | Version | Company Usage           |
| -------------- | ------------------ | ------- | ----------------------- |
| Framework      | express            | 5.x     | All                     |
| Language       | TypeScript         | 5.x     | Airbnb, Google          |
| ORM            | Prisma             | 5.x     | Vercel, GitHub, Shopify |
| Validation     | zod                | 3.22    | Vercel, Stripe          |
| Auth           | jsonwebtoken       | 9.x     | Auth0, Okta             |
| Hashing        | bcryptjs           | 2.4     | All secure apps         |
| Security       | helmet             | 7.x     | All production          |
| Rate Limit     | express-rate-limit | 7.x     | All APIs                |
| Logging        | morgan             | 1.x     | All production          |
| Database Cache | redis              | latest  | Netflix, Uber           |

### **React Developers**

| Purpose       | Library               | Version | Company Usage     |
| ------------- | --------------------- | ------- | ----------------- |
| UI Framework  | react                 | 18.x    | Facebook, Netflix |
| Routing       | react-router-dom      | 6.20    | Netflix, Airbnb   |
| Client State  | zustand               | 4.4     | Vercel            |
| Server State  | @tanstack/react-query | 5.x     | Stripe, Vercel    |
| Forms         | react-hook-form       | 7.48    | Stripe, Shopify   |
| Validation    | zod                   | 3.22    | Modern apps       |
| CSS Framework | tailwindcss           | 3.3     | Netflix, Vercel   |
| Components    | shadcn/ui             | latest  | Modern teams      |
| HTTP Client   | axios                 | 1.6     | Most apps         |
| Build Tool    | vite                  | 5.x     | Modern apps       |

### **Next.js Developers**

| Purpose    | Library               | Version | Company Usage        |
| ---------- | --------------------- | ------- | -------------------- |
| Framework  | next.js               | 14+     | Vercel, TikTok       |
| Language   | typescript            | 5.x     | All modern apps      |
| Auth       | next-auth             | 4.24    | Hundreds of startups |
| ORM        | prisma                | 5.x     | Vercel recommended   |
| State      | zustand               | 4.4     | Modern teams         |
| Data Fetch | @tanstack/react-query | 5.x     | Data-heavy apps      |
| Forms      | react-hook-form       | 7.48    | Modern apps          |
| CSS        | tailwindcss           | 3.3     | Most Next.js apps    |
| Components | shadcn/ui             | latest  | Modern Next.js       |
| Testing    | vitest                | 1.x     | Fast testing         |
| E2E        | playwright            | 1.40    | Cross-browser        |

---

## 🎯 Production Recommendations

### **For Express Backend Developers**

✅ Use **TypeScript** - eliminates entire classes of bugs  
✅ Use **Prisma** - type-safe database access  
✅ Use **Zod** - runtime type safety for APIs  
✅ Use **Redis** - caching layer for performance  
✅ Use **Socket.io** - if you need real-time features  
✅ Use **Jest + Supertest** - comprehensive testing  
✅ Use **Helmet** - security headers by default  
✅ Use **Express Rate Limit** - prevent abuse

### **For React Frontend Developers**

✅ Use **TypeScript** - component type safety  
✅ Use **React Router v6** - modern routing  
✅ Use **TanStack Query** - server state management  
✅ Use **Zustand** - simple client state  
✅ Use **React Hook Form** - minimal form overhead  
✅ Use **TailwindCSS** - rapid UI development  
✅ Use **shadcn/ui** - pre-built components  
✅ Use **Vitest + Testing Library** - fast testing

### **For Next.js Full-Stack Developers**

✅ Use **App Router** (not Pages Router)  
✅ Use **Server Components** by default  
✅ Use **NextAuth.js** for authentication  
✅ Use **Prisma** for database  
✅ Use **TailwindCSS + shadcn/ui** for UI  
✅ Use **React Query** for client data  
✅ Use **Vercel** for deployment  
✅ Use **Server Actions** for mutations

---

## 📈 Library Comparisons

### **State Management**

| Library           | Bundle | Best For     | Complexity | Company  |
| ----------------- | ------ | ------------ | ---------- | -------- |
| **Zustand**       | 2.2KB  | Modern apps  | Low        | Vercel   |
| **Redux Toolkit** | 35KB   | Enterprise   | High       | Facebook |
| **Jotai**         | 2.8KB  | Atoms-based  | Medium     | Startups |
| **Context API**   | 0KB    | Simple state | Low        | All      |

**Recommendation**: Use **Zustand** for new projects - it's 15x smaller than Redux with simpler API.

### **Form Libraries**

| Library             | Bundle | Re-renders | Best For      |
| ------------------- | ------ | ---------- | ------------- |
| **React Hook Form** | 9.2KB  | Minimal    | Modern forms  |
| **Formik**          | 37KB   | More       | Complex forms |

**Recommendation**: Use **React Hook Form** + **Zod** - better performance, modern API.

### **ORMs**

| Library      | Type | Databases     | Best For          | Bundle |
| ------------ | ---- | ------------- | ----------------- | ------ |
| **Prisma**   | ORM  | SQL + MongoDB | Type safety       | 35KB   |
| **Drizzle**  | ORM  | SQL only      | Lightweight       | 15KB   |
| **Mongoose** | ODM  | MongoDB       | Schema validation | 85KB   |

**Recommendation**: Use **Prisma** for new projects - it's the industry standard.

---

## 🚀 Real-World Examples

### **Building with Express.js (Like Uber/PayPal)**

```bash
# Create server
npm init -y
npm install express typescript cors helmet express-rate-limit

# Add database
npm install @prisma/client prisma
npx prisma init

# Add auth
npm install jsonwebtoken bcryptjs

# Add validation
npm install zod

# Testing
npm install -D jest supertest @types/jest
```

### **Building React SPA (Like Netflix/Airbnb)**

```bash
# Create app
npm create vite@latest -- --template react

# Add routing & state
npm install react-router-dom zustand @tanstack/react-query axios

# Add forms
npm install react-hook-form zod

# Styling
npm install -D tailwindcss postcss autoprefixer
npm install shadcn-ui

# Testing
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### **Building Next.js Full-Stack (Like Vercel/TikTok)**

```bash
# Create app
npx create-next-app@latest --typescript --tailwind

# Add auth & database
npm install next-auth @next-auth/prisma-adapter @prisma/client prisma
npx prisma init

# Add state & forms
npm install zustand @tanstack/react-query react-hook-form zod

# Add components
npm install shadcn-ui

# Testing
npm install -D vitest @testing-library/react playwright
```

---

## 🔗 Key Documentation Links

- **Express**: https://expressjs.com
- **React**: https://react.dev
- **Next.js**: https://nextjs.org
- **TypeScript**: https://www.typescriptlang.org
- **Prisma**: https://www.prisma.io
- **TailwindCSS**: https://tailwindcss.com
- **React Query**: https://tanstack.com/query
- **NextAuth.js**: https://next-auth.js.org

---

## 💡 Tips for Success

1. **Always use TypeScript** - catches errors at compile time
2. **Validate all inputs** - use Zod or Joi
3. **Use an ORM** - prevents SQL injection and type errors
4. **Cache aggressively** - use Redis for hot data
5. **Test thoroughly** - Jest + Vitest for unit, Playwright for E2E
6. **Monitor in production** - use Sentry or DataDog
7. **Document your APIs** - use Swagger/OpenAPI
8. **Secure by default** - Helmet, CORS, Rate limiting

---

**Your MCP agent now provides production-grade guidance matching what companies actually use!** 🎉
