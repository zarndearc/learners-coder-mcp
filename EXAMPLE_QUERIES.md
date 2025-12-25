# 🎓 Example Queries & Responses

Test your upgraded MCP agent with these real-world examples!

---

## Example 1: Express.js REST API

### Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "I want to build a production-grade REST API using Express.js with TypeScript"
  }'
```

### Key Parts of Response

```json
{
  "intent": "express-rest-api",
  "companyGradeTechStack": {
    "name": "Enterprise REST API with Express",
    "usedBy": ["Uber", "PayPal", "Walmart", "Netflix"],
    "stack": {
      "runtime": "Node.js 20 LTS",
      "language": "TypeScript",
      "framework": "Express.js 5.x",
      "database": {
        "primary": "PostgreSQL",
        "orm": "Prisma",
        "cache": "Redis"
      },
      "authentication": {
        "strategy": "JWT + Refresh Tokens",
        "library": "jsonwebtoken + bcryptjs"
      },
      "validation": {
        "input": "Zod or Joi",
        "schema": "JSON Schema"
      },
      "middleware": [
        { "name": "helmet", "purpose": "Security headers" },
        { "name": "cors", "purpose": "Cross-origin requests" },
        { "name": "express-rate-limit", "purpose": "Rate limiting" },
        { "name": "morgan", "purpose": "HTTP logging" },
        { "name": "compression", "purpose": "Gzip compression" }
      ],
      "testing": {
        "unit": "Jest or Vitest",
        "integration": "Supertest",
        "e2e": "Playwright"
      },
      "deployment": "Docker + Kubernetes or AWS ECS",
      "monitoring": "Sentry, DataDog, or New Relic"
    },
    "setupCommands": [
      "npm init -y",
      "npm install express typescript dotenv cors helmet express-rate-limit morgan compression",
      "npm install @prisma/client",
      "npm install jsonwebtoken bcryptjs zod",
      "npm install -D jest supertest nodemon ts-node @types/node @types/express",
      "npx prisma init"
    ]
  },
  "recommendedLibraries": {
    "expressBackend": [
      {
        "name": "express",
        "version": "^5.0.0",
        "usedBy": ["Uber", "PayPal", "Walmart", "Netflix"],
        "documentation": "https://expressjs.com",
        "setup": "npm install express"
      },
      {
        "name": "prisma",
        "version": "^5.0.0",
        "usedBy": ["Shopify", "GitHub", "Coinbase", "Figma"],
        "documentation": "https://www.prisma.io",
        "setup": "npm install @prisma/client && npx prisma init"
      },
      {
        "name": "zod",
        "version": "^3.22.0",
        "usedBy": ["Vercel", "Stripe", "Supabase"],
        "documentation": "https://zod.dev",
        "setup": "npm install zod"
      }
      // ... more libraries
    ]
  }
}
```

**What to Do Next:**

1. Run the setup commands
2. Create `.env` with `DATABASE_URL`
3. Design your Prisma schema
4. Create routes with Zod validation
5. Add middleware (helmet, cors, rate-limit)
6. Add tests with Jest + Supertest

---

## Example 2: React SPA

### Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "I'm building a React single-page application with forms and real-time data"
  }'
```

### Key Parts of Response

```json
{
  "intent": "react-spa",
  "companyGradeTechStack": {
    "name": "Production React SPA",
    "usedBy": ["Netflix", "Airbnb", "Facebook", "Instagram"],
    "stack": {
      "runtime": "Browser + Node.js for build",
      "language": "TypeScript",
      "framework": "React 18.x",
      "routing": "React Router v6",
      "stateManagement": {
        "client": "Zustand or Redux Toolkit",
        "server": "TanStack Query (React Query)"
      },
      "forms": {
        "primary": "React Hook Form",
        "validation": "Zod",
        "alternative": "Formik + Yup"
      },
      "styling": {
        "primary": "TailwindCSS",
        "components": "shadcn/ui or Chakra UI",
        "alternative": "Styled Components or Emotion"
      },
      "httpClient": "Axios with interceptors",
      "build": "Vite",
      "testing": {
        "unit": "Vitest",
        "component": "@testing-library/react",
        "e2e": "Playwright or Cypress"
      }
    },
    "setupCommands": [
      "npm create vite@latest -- --template react",
      "npm install typescript react-router-dom axios",
      "npm install zustand @tanstack/react-query",
      "npm install react-hook-form zod",
      "npm install -D tailwindcss postcss autoprefixer",
      "npm install shadcn-ui",
      "npm install -D vitest @testing-library/react @testing-library/jest-dom"
    ]
  },
  "libraryComparisons": {
    "stateManagement": {
      "Zustand": {
        "bestFor": "Modern React apps",
        "complexity": "Low",
        "bundle": "2.2KB",
        "companies": ["Vercel"]
      },
      "Redux Toolkit": {
        "bestFor": "Large enterprise apps",
        "complexity": "High",
        "bundle": "35KB",
        "companies": ["Facebook"]
      }
    },
    "forms": {
      "React Hook Form": {
        "bestFor": "Modern forms",
        "bundle": "9.2KB",
        "reRenders": "Minimal",
        "companies": ["Stripe"]
      },
      "Formik": {
        "bestFor": "Complex forms",
        "bundle": "37KB",
        "reRenders": "More",
        "companies": ["Enterprise"]
      }
    }
  }
}
```

**What to Do Next:**

1. Create Vite project
2. Set up React Router for navigation
3. Install Zustand for client state
4. Set up React Query for server state
5. Use React Hook Form for forms with Zod validation
6. Style with TailwindCSS + shadcn/ui components
7. Write tests with Vitest + Testing Library

---

## Example 3: Next.js Full-Stack

### Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Build a Next.js application with authentication and database"
  }'
```

### Key Parts of Response

```json
{
  "intent": "nextjs-fullstack",
  "companyGradeTechStack": {
    "name": "Production Next.js Full-Stack",
    "usedBy": ["Vercel", "TikTok", "Hulu", "Nike"],
    "stack": {
      "runtime": "Node.js 20 LTS",
      "language": "TypeScript",
      "framework": "Next.js 14+ with App Router",
      "frontend": {
        "ui": "React 18.x",
        "routing": "Next.js App Router (built-in)",
        "stateManagement": "Zustand or Context API",
        "forms": "React Hook Form + Zod",
        "styling": "TailwindCSS + shadcn/ui",
        "serverComponents": "Enabled by default"
      },
      "backend": {
        "api": "Next.js Route Handlers (API Routes)",
        "serverActions": "Next.js Server Actions",
        "validation": "Zod (end-to-end type safety)",
        "database": {
          "primary": "PostgreSQL",
          "orm": "Prisma or Drizzle ORM",
          "cache": "Redis"
        },
        "authentication": {
          "primary": "NextAuth.js v5",
          "alternative": "Iron Session for lightweight",
          "oauth": "Google, GitHub, Microsoft"
        }
      },
      "middleware": "Next.js Middleware (edge computing)",
      "dataFetching": {
        "serverFunctions": "Next.js Server Functions",
        "clientFetch": "React Query or SWR",
        "realtime": "Socket.io or Supabase Realtime"
      },
      "testing": {
        "unit": "Vitest",
        "component": "@testing-library/react",
        "e2e": "Playwright",
        "api": "Supertest"
      },
      "deployment": "Vercel (recommended) or any Node.js host"
    },
    "setupCommands": [
      "npx create-next-app@latest --typescript --tailwind",
      "npm install next-auth @next-auth/prisma-adapter",
      "npm install @prisma/client prisma",
      "npm install zustand @tanstack/react-query",
      "npm install react-hook-form zod",
      "npm install shadcn-ui",
      "npm install -D vitest @testing-library/react playwright",
      "npx prisma init"
    ]
  }
}
```

**What to Do Next:**

1. Create Next.js 14+ app with TypeScript
2. Set up Prisma with PostgreSQL
3. Configure NextAuth.js for authentication
4. Create API Route Handlers for endpoints
5. Use Server Actions for mutations
6. Set up TailwindCSS + shadcn/ui
7. Use React Query for client data
8. Deploy to Vercel

---

## Example 4: Library Comparison

### Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Should I use Redux Toolkit or Zustand for state management?"
  }'
```

### Response

```json
{
  "intent": "general-coding",
  "libraryComparisons": {
    "stateManagement": {
      "Zustand": {
        "bestFor": "Modern React apps",
        "complexity": "Low",
        "bundle": "2.2KB",
        "companies": ["Vercel"],
        "pros": [
          "Tiny bundle size",
          "Simple API",
          "Minimal boilerplate",
          "Great TypeScript support",
          "Less learning curve"
        ]
      },
      "Redux Toolkit": {
        "bestFor": "Large enterprise apps",
        "complexity": "High",
        "bundle": "35KB",
        "companies": ["Facebook"],
        "pros": [
          "Predictable",
          "Excellent DevTools",
          "Large ecosystem",
          "Time-travel debugging",
          "Great for complex state"
        ]
      }
    }
  },
  "recommendation": "Use Zustand for new projects - it's 15x smaller with simpler API. Use Redux Toolkit only for large enterprise apps with complex state requirements."
}
```

---

## Example 5: Database ORM Choice

### Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Prisma vs Drizzle ORM - which should I use?"
  }'
```

### Response Includes

```json
{
  "libraryComparisons": {
    "orm": {
      "Prisma": {
        "bestFor": "Type-safe modern development",
        "databases": "PostgreSQL, MySQL, SQLite, MongoDB",
        "bundle": "35KB",
        "companies": ["Vercel", "GitHub", "Shopify"],
        "pros": [
          "Excellent migrations",
          "Great DevTools",
          "Type-safe by default",
          "Best documentation",
          "Industry standard"
        ]
      },
      "Drizzle ORM": {
        "bestFor": "Lightweight SQL apps",
        "databases": "PostgreSQL, MySQL, SQLite",
        "bundle": "15KB",
        "companies": ["Modern startups"],
        "pros": [
          "Smaller bundle",
          "More control",
          "Simpler API",
          "Great for SQL-first dev",
          "Fast queries"
        ]
      },
      "Mongoose": {
        "bestFor": "MongoDB development",
        "databases": "MongoDB only",
        "bundle": "85KB",
        "companies": ["Uber", "Spotify"],
        "pros": [
          "Schema validation",
          "Middleware support",
          "Popular with MongoDB"
        ]
      }
    }
  },
  "recommendation": "Use Prisma for most projects - it's the industry standard. Use Drizzle if you want a lightweight SQL ORM."
}
```

---

## Example 6: Authentication Setup

### Query

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How do I add authentication to my Next.js app?"
  }'
```

### Response Includes

```json
{
  "intent": "authentication",
  "companyGradeTechStack": {
    "authentication": {
      "primary": "NextAuth.js v5",
      "setup": "npm install next-auth @next-auth/prisma-adapter",
      "features": [
        "OAuth (Google, GitHub, Microsoft)",
        "Email/Password authentication",
        "JWT sessions",
        "Type-safe by default",
        "Database persistence"
      ],
      "bestFor": "Next.js applications"
    }
  },
  "security": [
    "Never store plain passwords",
    "Use secure HTTP-only cookies for tokens",
    "Implement refresh token rotation",
    "Add CSRF protection",
    "Validate and sanitize all inputs"
  ]
}
```

---

## Testing These Queries

Run the server first:

```bash
npm start
```

Then copy any of the curl commands above into your terminal to test!

Each query will return comprehensive, production-ready recommendations with:

- ✅ Exact version numbers
- ✅ Company usage examples
- ✅ Setup commands (copy-paste ready)
- ✅ Official documentation links
- ✅ Best practices
- ✅ Security considerations
- ✅ Performance tips

Your developers will love the specific, actionable guidance! 🚀
