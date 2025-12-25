// Comprehensive library recommendations used by companies in production
export const companyLibraryRecommendations = {
  "express-nodejs": {
    title: "Express.js + Node.js - Backend Production Stack",
    companies: ["Uber", "PayPal", "Walmart", "Netflix"],
    essentialLibraries: [
      {
        category: "Core Framework",
        libraries: [
          {
            name: "express",
            version: "5.x",
            setup: "npm install express",
            link: "https://expressjs.com",
          },
          {
            name: "typescript",
            version: "5.x",
            setup: "npm install -D typescript @types/node @types/express",
            link: "https://www.typescriptlang.org",
          },
        ],
      },
      {
        category: "Database & ORM",
        libraries: [
          {
            name: "prisma",
            version: "5.x",
            setup: "npm install @prisma/client && npx prisma init",
            recommendation: "Best for type-safe SQL + MongoDB",
            link: "https://www.prisma.io",
          },
          {
            name: "mongoose",
            version: "8.x",
            setup: "npm install mongoose",
            recommendation: "For MongoDB-only projects",
            link: "https://mongoosejs.com",
          },
          {
            name: "drizzle-orm",
            version: "0.29",
            setup: "npm install drizzle-orm drizzle-kit",
            recommendation: "Lightweight SQL ORM",
            link: "https://orm.drizzle.team",
          },
          {
            name: "redis",
            version: "latest",
            setup: "npm install redis",
            recommendation: "Caching and sessions",
            link: "https://redis.io",
          },
        ],
      },
      {
        category: "Authentication & Security",
        libraries: [
          {
            name: "jsonwebtoken",
            version: "9.x",
            setup: "npm install jsonwebtoken",
            recommendation: "JWT token management",
            link: "https://github.com/auth0/node-jsonwebtoken",
          },
          {
            name: "bcryptjs",
            version: "2.4",
            setup: "npm install bcryptjs",
            recommendation: "Password hashing - MUST USE",
            link: "https://github.com/dcodeIO/bcrypt.js",
          },
          {
            name: "passport",
            version: "0.7",
            setup: "npm install passport passport-local",
            recommendation: "OAuth + multi-strategy auth",
            link: "http://www.passportjs.org",
          },
          {
            name: "helmet",
            version: "7.x",
            setup: "npm install helmet",
            recommendation: "Security headers - ADD TO EVERY APP",
            link: "https://helmetjs.github.io",
          },
        ],
      },
      {
        category: "Input Validation & Parsing",
        libraries: [
          {
            name: "zod",
            version: "3.22",
            setup: "npm install zod",
            recommendation: "TypeScript-first validation - RECOMMENDED",
            link: "https://zod.dev",
          },
          {
            name: "joi",
            version: "17.x",
            setup: "npm install joi",
            recommendation: "Enterprise-grade validation",
            link: "https://joi.dev",
          },
          {
            name: "express-validator",
            version: "7.x",
            setup: "npm install express-validator",
            recommendation: "Express middleware validation",
            link: "https://express-validator.github.io",
          },
        ],
      },
      {
        category: "API & HTTP",
        libraries: [
          {
            name: "cors",
            version: "2.8",
            setup: "npm install cors",
            recommendation: "CORS middleware - ESSENTIAL",
            link: "https://github.com/expressjs/cors",
          },
          {
            name: "express-rate-limit",
            version: "7.x",
            setup: "npm install express-rate-limit",
            recommendation: "Rate limiting - SECURITY",
            link: "https://github.com/nfriedly/express-rate-limit",
          },
          {
            name: "compression",
            version: "1.7",
            setup: "npm install compression",
            recommendation: "Gzip compression - PERFORMANCE",
            link: "https://github.com/expressjs/compression",
          },
          {
            name: "morgan",
            version: "1.10",
            setup: "npm install morgan",
            recommendation: "HTTP logging",
            link: "https://github.com/expressjs/morgan",
          },
        ],
      },
      {
        category: "Real-Time Communication",
        libraries: [
          {
            name: "socket.io",
            version: "4.7",
            setup: "npm install socket.io",
            recommendation: "WebSocket fallback included",
            link: "https://socket.io",
          },
          {
            name: "ws",
            version: "8.x",
            setup: "npm install ws",
            recommendation: "Pure WebSocket (lightweight)",
            link: "https://github.com/websockets/ws",
          },
        ],
      },
      {
        category: "Testing",
        libraries: [
          {
            name: "jest",
            version: "29.x",
            setup: "npm install -D jest @types/jest",
            recommendation: "Unit testing",
            link: "https://jestjs.io",
          },
          {
            name: "vitest",
            version: "1.x",
            setup: "npm install -D vitest",
            recommendation: "Fast unit testing",
            link: "https://vitest.dev",
          },
          {
            name: "supertest",
            version: "6.x",
            setup: "npm install -D supertest",
            recommendation: "HTTP assertion library - PAIR WITH JEST",
            link: "https://github.com/visionmedia/supertest",
          },
          {
            name: "playwright",
            version: "1.40",
            setup: "npm install -D @playwright/test",
            recommendation: "E2E testing",
            link: "https://playwright.dev",
          },
        ],
      },
      {
        category: "Environment & Config",
        libraries: [
          {
            name: "dotenv",
            version: "16.x",
            setup: "npm install dotenv",
            recommendation: "Environment variables - ESSENTIAL",
            link: "https://github.com/motdotla/dotenv",
          },
          {
            name: "joi",
            version: "17.x",
            setup: "npm install joi",
            recommendation: "Config validation",
            link: "https://joi.dev",
          },
        ],
      },
      {
        category: "Monitoring & Logging",
        libraries: [
          {
            name: "sentry/node",
            version: "7.x",
            setup: "npm install @sentry/node",
            recommendation: "Error tracking - PRODUCTION ESSENTIAL",
            link: "https://sentry.io",
          },
          {
            name: "winston",
            version: "3.x",
            setup: "npm install winston",
            recommendation: "Structured logging",
            link: "https://github.com/winstonjs/winston",
          },
          {
            name: "pino",
            version: "8.x",
            setup: "npm install pino",
            recommendation: "Fast JSON logging",
            link: "https://getpino.io",
          },
        ],
      },
      {
        category: "Utilities",
        libraries: [
          {
            name: "lodash-es",
            version: "4.x",
            setup: "npm install lodash-es",
            recommendation: "Utility functions (tree-shakeable)",
            link: "https://lodash.com",
          },
          {
            name: "dayjs",
            version: "1.11",
            setup: "npm install dayjs",
            recommendation: "Date manipulation (2KB vs 67KB moment)",
            link: "https://day.js.org",
          },
          {
            name: "uuid",
            version: "9.x",
            setup: "npm install uuid",
            recommendation: "UUID generation",
            link: "https://github.com/uuidjs/uuid",
          },
        ],
      },
    ],
  },

  "react-frontend": {
    title: "React - Frontend Production Stack",
    companies: ["Netflix", "Airbnb", "Facebook", "Instagram"],
    essentialLibraries: [
      {
        category: "Core Library",
        libraries: [
          {
            name: "react",
            version: "18.x",
            setup: "npm install react react-dom",
            link: "https://react.dev",
          },
          {
            name: "typescript",
            version: "5.x",
            setup: "npm install -D typescript @types/react @types/react-dom",
            link: "https://www.typescriptlang.org",
          },
        ],
      },
      {
        category: "Routing",
        libraries: [
          {
            name: "react-router-dom",
            version: "6.20",
            setup: "npm install react-router-dom",
            recommendation: "Client-side routing - INDUSTRY STANDARD",
            link: "https://reactrouter.com",
          },
          {
            name: "next-router",
            version: "via-next",
            setup: "Built into Next.js",
            recommendation: "File-based routing in Next.js",
            link: "https://nextjs.org",
          },
        ],
      },
      {
        category: "State Management - Client",
        libraries: [
          {
            name: "zustand",
            version: "4.4",
            setup: "npm install zustand",
            recommendation: "RECOMMENDED - 2.2KB, simple API",
            link: "https://github.com/pmndrs/zustand",
          },
          {
            name: "redux-toolkit",
            version: "1.9",
            setup: "npm install @reduxjs/toolkit react-redux",
            recommendation: "Enterprise apps, predictable",
            link: "https://redux-toolkit.js.org",
          },
          {
            name: "jotai",
            version: "2.5",
            setup: "npm install jotai",
            recommendation: "Atom-based, React hooks friendly",
            link: "https://jotai.org",
          },
          {
            name: "recoil",
            version: "0.7",
            setup: "npm install recoil",
            recommendation: "Facebook's library (less maintained)",
            link: "https://recoiljs.org",
          },
        ],
      },
      {
        category: "State Management - Server",
        libraries: [
          {
            name: "@tanstack/react-query",
            version: "5.x",
            setup: "npm install @tanstack/react-query",
            recommendation: "Server state, caching, sync - ESSENTIAL",
            link: "https://tanstack.com/query",
          },
          {
            name: "swr",
            version: "2.2",
            setup: "npm install swr",
            recommendation: "Vercel's library, lightweight",
            link: "https://swr.vercel.app",
          },
        ],
      },
      {
        category: "Forms",
        libraries: [
          {
            name: "react-hook-form",
            version: "7.48",
            setup: "npm install react-hook-form",
            recommendation: "BEST CHOICE - minimal re-renders, 9.2KB",
            link: "https://react-hook-form.com",
          },
          {
            name: "formik",
            version: "2.4",
            setup: "npm install formik yup",
            recommendation: "Complex forms, enterprise",
            link: "https://formik.org",
          },
        ],
      },
      {
        category: "Form Validation",
        libraries: [
          {
            name: "zod",
            version: "3.22",
            setup: "npm install zod",
            recommendation: "TypeScript-first - PAIR WITH REACT-HOOK-FORM",
            link: "https://zod.dev",
          },
          {
            name: "yup",
            version: "1.3",
            setup: "npm install yup",
            recommendation: "Schema validation (deprecated for Zod)",
            link: "https://github.com/jquense/yup",
          },
        ],
      },
      {
        category: "HTTP Client",
        libraries: [
          {
            name: "axios",
            version: "1.6",
            setup: "npm install axios",
            recommendation: "Most popular - explicit requests",
            link: "https://axios-http.com",
          },
          {
            name: "fetch",
            version: "native",
            setup: "Use native fetch API",
            recommendation: "Modern browser API",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/fetch",
          },
          {
            name: "ky",
            version: "1.1",
            setup: "npm install ky",
            recommendation: "Modern fetch wrapper",
            link: "https://github.com/sindresorhus/ky",
          },
        ],
      },
      {
        category: "Styling - CSS Framework",
        libraries: [
          {
            name: "tailwindcss",
            version: "3.3",
            setup: "npm install -D tailwindcss postcss autoprefixer",
            recommendation: "RECOMMENDED - rapid UI, utility-first",
            link: "https://tailwindcss.com",
          },
          {
            name: "tailwindui",
            version: "components",
            setup: "Premium paid components",
            recommendation: "Pre-built components",
            link: "https://tailwindui.com",
          },
          {
            name: "daisyui",
            version: "4.x",
            setup: "npm install -D daisyui",
            recommendation: "Free Tailwind components",
            link: "https://daisyui.com",
          },
        ],
      },
      {
        category: "Styling - CSS-in-JS",
        libraries: [
          {
            name: "styled-components",
            version: "6.1",
            setup: "npm install styled-components",
            recommendation: "CSS-in-JS with dynamic styling",
            link: "https://styled-components.com",
          },
          {
            name: "emotion",
            version: "11.x",
            setup: "npm install @emotion/react @emotion/styled",
            recommendation: "Lightweight CSS-in-JS",
            link: "https://emotion.sh",
          },
        ],
      },
      {
        category: "Component Libraries",
        libraries: [
          {
            name: "shadcn/ui",
            version: "latest",
            setup: "npx shadcn-ui@latest init",
            recommendation: "Copy-paste components + Tailwind",
            link: "https://ui.shadcn.com",
          },
          {
            name: "@mui/material",
            version: "5.14",
            setup: "npm install @mui/material @emotion/react @emotion/styled",
            recommendation: "Enterprise components (Google Design System)",
            link: "https://mui.com",
          },
          {
            name: "@chakra-ui/react",
            version: "2.8",
            setup:
              "npm install @chakra-ui/react @emotion/react @emotion/styled",
            recommendation: "Accessible components",
            link: "https://chakra-ui.com",
          },
          {
            name: "storybook",
            version: "7.x",
            setup: "npm install -D storybook",
            recommendation: "Component development environment",
            link: "https://storybook.js.org",
          },
        ],
      },
      {
        category: "Testing",
        libraries: [
          {
            name: "vitest",
            version: "1.x",
            setup: "npm install -D vitest",
            recommendation: "Fast unit testing",
            link: "https://vitest.dev",
          },
          {
            name: "@testing-library/react",
            version: "14.x",
            setup:
              "npm install -D @testing-library/react @testing-library/jest-dom",
            recommendation: "User-centric testing - PAIR WITH VITEST",
            link: "https://testing-library.com",
          },
          {
            name: "jest",
            version: "29.x",
            setup: "npm install -D jest @babel/preset-react",
            recommendation: "Zero-config testing",
            link: "https://jestjs.io",
          },
          {
            name: "playwright",
            version: "1.40",
            setup: "npm install -D @playwright/test",
            recommendation: "E2E testing - cross-browser",
            link: "https://playwright.dev",
          },
          {
            name: "cypress",
            version: "13.x",
            setup: "npm install -D cypress",
            recommendation: "Developer-friendly E2E",
            link: "https://cypress.io",
          },
        ],
      },
      {
        category: "Build Tools",
        libraries: [
          {
            name: "vite",
            version: "5.x",
            setup: "npm create vite@latest -- --template react",
            recommendation: "RECOMMENDED - lightning fast",
            link: "https://vitejs.dev",
          },
          {
            name: "webpack",
            version: "5.x",
            setup: "Complex setup",
            recommendation: "Enterprise builds, customizable",
            link: "https://webpack.js.org",
          },
          {
            name: "esbuild",
            version: "0.19",
            setup: "Via Vite",
            recommendation: "Fast bundler (used by Vite)",
            link: "https://esbuild.github.io",
          },
        ],
      },
      {
        category: "Utilities",
        libraries: [
          {
            name: "clsx",
            version: "2.0",
            setup: "npm install clsx",
            recommendation: "Conditional classNames - small & fast",
            link: "https://github.com/lukeed/clsx",
          },
          {
            name: "classnames",
            version: "2.3",
            setup: "npm install classnames",
            recommendation: "className utilities",
            link: "https://github.com/JedWatson/classnames",
          },
          {
            name: "lodash-es",
            version: "4.x",
            setup: "npm install lodash-es",
            recommendation: "Utility functions (tree-shakeable)",
            link: "https://lodash.com",
          },
          {
            name: "dayjs",
            version: "1.11",
            setup: "npm install dayjs",
            recommendation: "Date manipulation",
            link: "https://day.js.org",
          },
        ],
      },
    ],
  },

  "nextjs-fullstack": {
    title: "Next.js - Full-Stack Production Stack",
    companies: ["Vercel", "TikTok", "Hulu", "Nike"],
    essentialLibraries: [
      {
        category: "Core Framework",
        libraries: [
          {
            name: "next.js",
            version: "14+",
            setup: "npx create-next-app@latest",
            recommendation: "App Router (NOT Pages Router)",
            link: "https://nextjs.org",
          },
          {
            name: "react",
            version: "18.x",
            setup: "npm install react react-dom",
            link: "https://react.dev",
          },
          {
            name: "typescript",
            version: "5.x",
            setup: "npx create-next-app@latest --typescript",
            recommendation: "Type safety - ESSENTIAL",
            link: "https://www.typescriptlang.org",
          },
        ],
      },
      {
        category: "Authentication",
        libraries: [
          {
            name: "next-auth",
            version: "4.24",
            setup: "npm install next-auth",
            recommendation: "OFFICIAL Next.js auth solution",
            link: "https://next-auth.js.org",
          },
          {
            name: "iron-session",
            version: "8.4",
            setup: "npm install iron-session",
            recommendation: "Lightweight encrypted sessions",
            link: "https://github.com/vvo/iron-session",
          },
          {
            name: "@supabase/supabase-js",
            version: "2.x",
            setup: "npm install @supabase/supabase-js",
            recommendation: "Alternative: Firebase replacement",
            link: "https://supabase.com",
          },
        ],
      },
      {
        category: "Database & ORM",
        libraries: [
          {
            name: "@prisma/client",
            version: "5.x",
            setup: "npm install @prisma/client && npx prisma init",
            recommendation: "VERCEL RECOMMENDED - type-safe SQL",
            link: "https://www.prisma.io",
          },
          {
            name: "drizzle-orm",
            version: "0.29",
            setup: "npm install drizzle-orm drizzle-kit",
            recommendation: "Lightweight SQL ORM",
            link: "https://orm.drizzle.team",
          },
          {
            name: "mongoose",
            version: "8.x",
            setup: "npm install mongoose",
            recommendation: "MongoDB ODM",
            link: "https://mongoosejs.com",
          },
        ],
      },
      {
        category: "Forms & Validation",
        libraries: [
          {
            name: "react-hook-form",
            version: "7.48",
            setup: "npm install react-hook-form",
            recommendation: "Form handling",
            link: "https://react-hook-form.com",
          },
          {
            name: "zod",
            version: "3.22",
            setup: "npm install zod",
            recommendation:
              "Input + Server Action validation - PAIR WITH REACT-HOOK-FORM",
            link: "https://zod.dev",
          },
          {
            name: "next-safe-action",
            version: "7.x",
            setup: "npm install next-safe-action",
            recommendation: "Type-safe Server Actions with Zod",
            link: "https://next-safe-action.js.org",
          },
        ],
      },
      {
        category: "State Management",
        libraries: [
          {
            name: "zustand",
            version: "4.4",
            setup: "npm install zustand",
            recommendation: "Client state - light & simple",
            link: "https://github.com/pmndrs/zustand",
          },
          {
            name: "@tanstack/react-query",
            version: "5.x",
            setup: "npm install @tanstack/react-query",
            recommendation: "Server state, caching, sync",
            link: "https://tanstack.com/query",
          },
        ],
      },
      {
        category: "Styling",
        libraries: [
          {
            name: "tailwindcss",
            version: "3.3",
            setup: "npx create-next-app@latest --tailwind",
            recommendation: "STANDARD for Next.js",
            link: "https://tailwindcss.com",
          },
          {
            name: "shadcn/ui",
            version: "latest",
            setup: "npx shadcn-ui@latest init",
            recommendation: "Pre-built Tailwind components - RECOMMENDED",
            link: "https://ui.shadcn.com",
          },
        ],
      },
      {
        category: "HTTP Client",
        libraries: [
          {
            name: "axios",
            version: "1.6",
            setup: "npm install axios",
            recommendation: "Client-side requests",
            link: "https://axios-http.com",
          },
          {
            name: "fetch",
            version: "native",
            setup: "Native API",
            recommendation: "Server Actions use fetch",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/fetch",
          },
        ],
      },
      {
        category: "Internationalization",
        libraries: [
          {
            name: "next-intl",
            version: "2.21",
            setup: "npm install next-intl",
            recommendation: "i18n for Next.js",
            link: "https://next-intl-docs.vercel.app",
          },
        ],
      },
      {
        category: "Testing",
        libraries: [
          {
            name: "vitest",
            version: "1.x",
            setup: "npm install -D vitest",
            recommendation: "Unit testing",
            link: "https://vitest.dev",
          },
          {
            name: "@testing-library/react",
            version: "14.x",
            setup: "npm install -D @testing-library/react",
            recommendation: "Component testing",
            link: "https://testing-library.com",
          },
          {
            name: "@playwright/test",
            version: "1.40",
            setup: "npm install -D @playwright/test",
            recommendation: "E2E testing - MOST POWERFUL",
            link: "https://playwright.dev",
          },
        ],
      },
      {
        category: "Monitoring & Logging",
        libraries: [
          {
            name: "@sentry/nextjs",
            version: "7.x",
            setup: "npm install @sentry/nextjs",
            recommendation: "Error tracking",
            link: "https://sentry.io",
          },
          {
            name: "vercel/analytics",
            version: "latest",
            setup: "npm install @vercel/analytics",
            recommendation: "If using Vercel",
            link: "https://vercel.com/analytics",
          },
        ],
      },
    ],
  },
};

export default companyLibraryRecommendations;
