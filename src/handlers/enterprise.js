// Production-grade tech stack recommendations for companies
export function getCompanyGradeTechStack(intent) {
  return {
    // ============ EXPRESS.JS PRODUCTION STACK ============
    "express-rest-api": {
      name: "Enterprise REST API with Express",
      description: "Production-grade API used by major companies",
      usedBy: ["Uber", "PayPal", "Walmart", "Netflix"],
      stack: {
        runtime: "Node.js 20 LTS",
        language: "TypeScript",
        framework: "Express.js 5.x",
        database: {
          primary: "PostgreSQL",
          orm: "Prisma",
          cache: "Redis",
        },
        authentication: {
          strategy: "JWT + Refresh Tokens",
          library: "jsonwebtoken + bcryptjs",
          sessions: "Redis or Memcached",
        },
        validation: {
          input: "Zod or Joi",
          schema: "JSON Schema",
        },
        middleware: [
          { name: "helmet", purpose: "Security headers" },
          { name: "cors", purpose: "Cross-origin requests" },
          { name: "express-rate-limit", purpose: "Rate limiting" },
          { name: "morgan", purpose: "HTTP logging" },
          { name: "compression", purpose: "Gzip compression" },
          { name: "express-validator", purpose: "Input validation" },
        ],
        testing: {
          unit: "Jest or Vitest",
          integration: "Supertest",
          e2e: "Playwright",
        },
        deployment: "Docker + Kubernetes or AWS ECS",
        monitoring: "Sentry, DataDog, or New Relic",
      },
      setupCommands: [
        "npm init -y",
        "npm install express typescript dotenv cors helmet express-rate-limit morgan compression",
        "npm install @prisma/client",
        "npm install jsonwebtoken bcryptjs zod",
        "npm install -D jest supertest nodemon ts-node @types/node @types/express",
        "npx prisma init",
      ],
    },

    // ============ REACT SPA STACK ============
    "react-spa": {
      name: "Production React SPA",
      description: "Enterprise-grade React application",
      usedBy: ["Netflix", "Airbnb", "Facebook", "Instagram"],
      stack: {
        runtime: "Browser + Node.js for build",
        language: "TypeScript",
        framework: "React 18.x",
        routing: "React Router v6",
        stateManagement: {
          client: "Zustand or Redux Toolkit",
          server: "TanStack Query (React Query)",
        },
        forms: {
          primary: "React Hook Form",
          validation: "Zod",
          alternative: "Formik + Yup",
        },
        styling: {
          primary: "TailwindCSS",
          components: "shadcn/ui or Chakra UI",
          alternative: "Styled Components or Emotion",
        },
        httpClient: "Axios with interceptors",
        build: "Vite",
        testing: {
          unit: "Vitest",
          component: "@testing-library/react",
          e2e: "Playwright or Cypress",
        },
        performance: [
          "Code splitting with React.lazy",
          "Image optimization with next/image alternative",
          "Virtualization for long lists (react-window)",
          "Memoization (React.memo, useMemo, useCallback)",
        ],
        deployment: "Vercel, Netlify, or AWS S3 + CloudFront",
        monitoring: "Sentry, LogRocket, or New Relic",
      },
      setupCommands: [
        "npm create vite@latest -- --template react",
        "npm install typescript react-router-dom axios",
        "npm install zustand @tanstack/react-query",
        "npm install react-hook-form zod",
        "npm install -D tailwindcss postcss autoprefixer",
        "npm install shadcn-ui",
        "npm install -D vitest @testing-library/react @testing-library/jest-dom",
      ],
    },

    // ============ NEXT.JS FULL-STACK STACK ============
    "nextjs-fullstack": {
      name: "Production Next.js Full-Stack",
      description: "Modern full-stack with Next.js 14+ App Router",
      usedBy: ["Vercel", "TikTok", "Hulu", "Nike"],
      stack: {
        runtime: "Node.js 20 LTS",
        language: "TypeScript",
        framework: "Next.js 14+ with App Router",
        frontend: {
          ui: "React 18.x",
          routing: "Next.js App Router (built-in)",
          stateManagement: "Zustand or Context API",
          forms: "React Hook Form + Zod",
          styling: "TailwindCSS + shadcn/ui",
          serverComponents: "Enabled by default",
        },
        backend: {
          api: "Next.js Route Handlers (API Routes)",
          serverActions: "Next.js Server Actions",
          validation: "Zod (end-to-end type safety)",
          database: {
            primary: "PostgreSQL",
            orm: "Prisma or Drizzle ORM",
            cache: "Redis",
          },
          authentication: {
            primary: "NextAuth.js v5",
            alternative: "Iron Session for lightweight",
            oauth: "Google, GitHub, Microsoft",
          },
        },
        middleware: "Next.js Middleware (edge computing)",
        caching: {
          serverCache: "React Cache",
          clientCache: "TanStack Query",
          cdnCache: "Vercel Edge Network",
        },
        dataFetching: {
          serverFunctions: "Next.js Server Functions",
          clientFetch: "React Query or SWR",
          realtime: "Socket.io or Supabase Realtime",
        },
        testing: {
          unit: "Vitest",
          component: "@testing-library/react",
          e2e: "Playwright",
          api: "Supertest",
        },
        performance: [
          "Automatic code splitting",
          "Server-side rendering (SSR)",
          "Static Site Generation (SSG)",
          "Incremental Static Regeneration (ISR)",
          "Image optimization (next/image)",
          "Font optimization (next/font)",
          "Script optimization (next/script)",
        ],
        deployment: "Vercel (recommended) or any Node.js host",
        monitoring: "Sentry, Vercel Analytics, or DataDog",
      },
      setupCommands: [
        "npx create-next-app@latest --typescript --tailwind",
        "npm install next-auth @next-auth/prisma-adapter",
        "npm install @prisma/client prisma",
        "npm install zustand @tanstack/react-query",
        "npm install react-hook-form zod",
        "npm install shadcn-ui",
        "npm install -D vitest @testing-library/react playwright",
        "npx prisma init",
      ],
    },

    // ============ MERN STACK (LEGACY/TRADITIONAL) ============
    "mern-stack": {
      name: "MERN Stack (MongoDB + Express + React + Node)",
      description: "Traditional full-stack JavaScript",
      usedBy: ["Startups", "MEAN/MEVN alternatives"],
      frontend: {
        framework: "React 18.x",
        routing: "React Router v6",
        stateManagement: "Redux Toolkit or Zustand",
        dataFetching: "Axios + React Query",
        styling: "TailwindCSS or Material-UI",
        forms: "React Hook Form + Yup",
      },
      backend: {
        runtime: "Node.js",
        framework: "Express.js",
        language: "JavaScript or TypeScript",
        database: "MongoDB",
        odm: "Mongoose",
        auth: "JWT + bcryptjs",
        validation: "Joi or express-validator",
      },
      testing: {
        frontend: "Jest + React Testing Library",
        backend: "Jest + Supertest",
        e2e: "Cypress",
      },
      deployment: "Heroku, AWS, or DigitalOcean",
    },

    // ============ MICROSERVICES ARCHITECTURE ============
    microservices: {
      name: "Microservices Architecture",
      description: "Enterprise-scale distributed system",
      usedBy: ["Netflix", "Amazon", "Uber", "Spotify"],
      architecture: {
        services: "Multiple independent services",
        communication: "REST API, gRPC, or Message Queue",
        serviceDiscovery: "Kubernetes Service Discovery",
        apiGateway: "Kong, AWS API Gateway, or NGINX",
        loadBalancing: "Kubernetes, NGINX, or HAProxy",
        monitoring: "Prometheus + Grafana",
        logging: "ELK Stack or DataDog",
        tracing: "Jaeger or Lightstep",
      },
      stack: {
        individual_services: {
          backend: "Express.js, Fastify, or NestJS",
          language: "Node.js with TypeScript",
          database: "PostgreSQL or MongoDB (per service)",
          caching: "Redis",
          messaging: "RabbitMQ or Kafka",
        },
        deployment: "Docker + Kubernetes",
        orchestration: "Kubernetes",
      },
    },

    // ============ ENTERPRISE DATA-HEAVY APP ============
    "enterprise-dataapp": {
      name: "Enterprise Data-Heavy Application",
      description: "Complex business logic with heavy data processing",
      usedBy: ["Google, Microsoft, Finance companies"],
      stack: {
        frontend: "Next.js or React",
        backend: "Express.js + TypeScript",
        database: "PostgreSQL with complex schemas",
        orm: "Prisma or TypeORM",
        caching: "Redis + Server-side caching",
        search: "Elasticsearch or PostgreSQL full-text search",
        realtime: "WebSocket or Socket.io for live updates",
        backgroundJobs: "Bull (Redis-based) or BullMQ",
        dataWarehouse: "BigQuery, Snowflake, or Redshift",
        analytics: "PostHog or Segment",
        testing: "Jest + Supertest + Playwright",
        security: "Helmet, CORS, Rate limiting, WAF",
      },
    },

    // ============ REAL-TIME COLLABORATIVE APP ============
    "realtime-collab": {
      name: "Real-time Collaborative Application",
      description: "Like Figma, Notion, Google Docs",
      usedBy: ["Figma", "Notion", "Google", "Stripe"],
      stack: {
        frontend: "React or Next.js",
        realtimeComm: "Socket.io, WebSocket, or Yjs",
        stateSync: "Yjs or Automerge for CRDT",
        backend: "Express.js or Node.js",
        database: "PostgreSQL for persistence",
        messageQueue: "Redis Pub/Sub or RabbitMQ",
        cache: "Redis for active sessions",
        conflictResolution: "CRDT (Conflict-free Replicated Data Type)",
        testing: "Jest + Cypress for real-time scenarios",
      },
    },
  };
}

export function getProductionRecommendations(field) {
  return {
    "express-developer": {
      title: "Express.js Expert Stack",
      experience: "2-5+ years with backend",
      recommendations: [
        "Use TypeScript for type safety",
        "Prisma for databases - eliminates SQL errors",
        "Zod for runtime validation",
        "Redis for caching and sessions",
        "Socket.io for real-time features",
        "Vitest + Supertest for testing",
        "Docker for consistent deployment",
        "Sentry for error tracking",
      ],
    },
    "react-developer": {
      title: "React Expert Stack",
      experience: "2-5+ years with frontend",
      recommendations: [
        "TypeScript for component safety",
        "React Router v6 for routing",
        "TanStack Query for server state",
        "Zustand for client state",
        "React Hook Form for forms",
        "TailwindCSS + shadcn/ui for UI",
        "Vitest + Testing Library",
        "Playwright for E2E tests",
      ],
    },
    "nextjs-developer": {
      title: "Next.js Full-Stack Stack",
      experience: "2-5+ years with full-stack",
      recommendations: [
        "Use App Router (not Pages Router)",
        "Server Components by default",
        "Prisma for database access",
        "NextAuth.js for authentication",
        "React Query for client data",
        "TailwindCSS + shadcn/ui",
        "Environment variables via .env.local",
        "Vercel for deployment",
      ],
    },
  };
}

export function getLibraryComparison() {
  return {
    stateManagement: {
      "Redux Toolkit": {
        bestFor: "Large enterprise apps",
        complexity: "High",
        bundle: "35KB",
        companies: ["Facebook"],
      },
      Zustand: {
        bestFor: "Modern React apps",
        complexity: "Low",
        bundle: "2.2KB",
        companies: ["Vercel"],
      },
      Jotai: {
        bestFor: "Atom-based state",
        complexity: "Medium",
        bundle: "2.8KB",
        companies: ["Startups"],
      },
      "React Context": {
        bestFor: "Simple state sharing",
        complexity: "Low",
        bundle: "0KB",
        companies: ["All React apps"],
      },
    },
    forms: {
      "React Hook Form": {
        bestFor: "Modern forms",
        bundle: "9.2KB",
        reRenders: "Minimal",
        companies: ["Stripe"],
      },
      Formik: {
        bestFor: "Complex forms",
        bundle: "37KB",
        reRenders: "More",
        companies: ["Enterprise"],
      },
    },
    orm: {
      Prisma: {
        bestFor: "Type-safe modern development",
        databases: "PostgreSQL, MySQL, SQLite, MongoDB",
        bundle: "35KB",
        companies: ["Vercel", "GitHub", "Shopify"],
      },
      "Drizzle ORM": {
        bestFor: "Lightweight SQL apps",
        databases: "PostgreSQL, MySQL, SQLite",
        bundle: "15KB",
        companies: ["Modern startups"],
      },
      Mongoose: {
        bestFor: "MongoDB development",
        databases: "MongoDB only",
        bundle: "85KB",
        companies: ["Uber", "Spotify"],
      },
    },
  };
}
