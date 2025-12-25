// Web Development Tools and Best Practices Handler
function normalizeIntentForTools(intent) {
  const key = String(intent ?? "");

  const aliases = {
    // Align intent recognition output with this handler's keys
    "nextjs-fullstack": "nextjs-project",
    "react-spa": "react-project",
    "express-rest-api": "api-design",
    "mern-stack": "mern-project",
    "nextauth-setup": "authentication",
    "prisma-setup": "database-design",
    "mongodb-setup": "database-design",
    "postgresql-setup": "database-design",
    "drizzle-orm-setup": "database-design",
    "jest-testing": "testing-setup",
    "vitest-testing": "testing-setup",
    "docker-setup": "deployment",
    "kubernetes-setup": "deployment",

    // Payments
    "razorpay-integration": "payment-gateway-setup",
    "payu-integration": "payment-gateway-setup",
    "cashfree-integration": "payment-gateway-setup",
    "instamojo-integration": "payment-gateway-setup",
    "subscription-payments": "payment-gateway-setup",
    "invoice-payment": "payment-gateway-setup",

    // Infrastructure
    "proxmox-vm": "proxmox-setup",
    "proxmox-container": "proxmox-setup",
    "proxmox-backup": "proxmox-setup",
    "proxmox-clustering": "proxmox-setup",
    "infrastructure-setup": "proxmox-setup",
  };

  return aliases[key] ?? key;
}

export function getRecommendedTools(intent) {
  const normalizedIntent = normalizeIntentForTools(intent);
  const toolsets = {
    "nextjs-project": {
      category: "Full-Stack React Framework",
      tools: [
        {
          name: "Next.js",
          purpose: "Server-side rendering, static generation, API routes",
          commands: ["npx create-next-app@latest", "npm run dev"],
        },
        {
          name: "TailwindCSS",
          purpose: "Rapid UI styling",
          setup: "npm install -D tailwindcss postcss autoprefixer",
        },
        {
          name: "TypeScript",
          purpose: "Type safety",
          setup: "npx create-next-app@latest --typescript",
        },
        {
          name: "Prisma",
          purpose: "Database ORM",
          setup: "npm install @prisma/client && npx prisma init",
        },
      ],
      bestPractices: [
        "Use App Router for modern structure",
        "Leverage Server Components for data fetching",
        "Implement API routes for backend logic",
        "Use Middleware for authentication",
      ],
    },
    "react-project": {
      category: "React SPA",
      tools: [
        {
          name: "Vite",
          purpose: "Lightning-fast build tool",
          commands: ["npm create vite@latest -- --template react"],
        },
        {
          name: "React Router",
          purpose: "Client-side routing",
          setup: "npm install react-router-dom",
        },
        {
          name: "TanStack Query",
          purpose: "Data fetching and caching",
          setup: "npm install @tanstack/react-query",
        },
        {
          name: "Zustand",
          purpose: "Lightweight state management",
          setup: "npm install zustand",
        },
      ],
      bestPractices: [
        "Keep components small and focused",
        "Use custom hooks for logic reuse",
        "Implement code splitting with React.lazy",
        "Handle loading and error states properly",
      ],
    },
    "api-design": {
      category: "RESTful API Design",
      tools: [
        {
          name: "Express.js",
          purpose: "HTTP server framework",
          setup: "npm install express",
        },
        {
          name: "Zod",
          purpose: "Request validation",
          setup: "npm install zod",
        },
        {
          name: "Prisma",
          purpose: "Database access",
          setup: "npm install @prisma/client",
        },
        {
          name: "jsonwebtoken",
          purpose: "JWT authentication",
          setup: "npm install jsonwebtoken",
        },
      ],
      bestPractices: [
        "Use consistent HTTP status codes",
        "Implement request validation",
        "Version your API endpoints",
        "Add rate limiting for protection",
        "Document with OpenAPI/Swagger",
      ],
    },
    authentication: {
      category: "Authentication & Authorization",
      tools: [
        {
          name: "jsonwebtoken",
          purpose: "JWT token management",
          setup: "npm install jsonwebtoken",
        },
        {
          name: "bcryptjs",
          purpose: "Password hashing",
          setup: "npm install bcryptjs",
        },
        {
          name: "passport",
          purpose: "Flexible authentication middleware",
          setup: "npm install passport passport-local",
        },
        {
          name: "next-auth",
          purpose: "Authentication for Next.js",
          setup: "npm install next-auth",
        },
      ],
      bestPractices: [
        "Never store plain passwords",
        "Use secure HTTP-only cookies for tokens",
        "Implement refresh token rotation",
        "Add CSRF protection",
        "Validate and sanitize all inputs",
      ],
    },
    "testing-setup": {
      category: "Unit Testing",
      tools: [
        {
          name: "Vitest",
          purpose: "Fast unit testing framework",
          setup: "npm install -D vitest",
        },
        {
          name: "Jest",
          purpose: "Feature-rich testing platform",
          setup: "npm install -D jest @babel/preset-env",
        },
        {
          name: "@testing-library/react",
          purpose: "React component testing",
          setup: "npm install -D @testing-library/react",
        },
      ],
      bestPractices: [
        "Test user behavior, not implementation",
        "Aim for 80%+ code coverage",
        "Use descriptive test names",
        "Keep tests isolated and independent",
      ],
    },
    "e2e-testing": {
      category: "End-to-End Testing",
      tools: [
        {
          name: "Playwright",
          purpose: "Cross-browser automation",
          setup: "npm install -D @playwright/test",
        },
        {
          name: "Cypress",
          purpose: "Developer-friendly E2E testing",
          setup: "npm install -D cypress",
        },
      ],
      bestPractices: [
        "Test critical user journeys",
        "Use page objects for maintainability",
        "Avoid testing implementation details",
        "Run tests in CI/CD pipeline",
      ],
    },
    deployment: {
      category: "Production Deployment",
      platforms: [
        {
          name: "Vercel",
          bestFor: "Next.js, React, SSG projects",
          features: [
            "Automatic deployments",
            "Edge functions",
            "Preview deployments",
          ],
        },
        {
          name: "Netlify",
          bestFor: "Static sites, JAMstack projects",
          features: [
            "Continuous deployment",
            "Serverless functions",
            "Edge handlers",
          ],
        },
        {
          name: "Heroku",
          bestFor: "Full-stack apps with databases",
          features: [
            "Easy deployment",
            "Add-ons marketplace",
            "Scaling options",
          ],
        },
        {
          name: "AWS",
          bestFor: "Enterprise applications",
          features: ["EC2, Lambda, RDS", "Full control", "Advanced features"],
        },
        {
          name: "Docker + Any Server",
          bestFor: "Complete control",
          features: ["Containerization", "Portable deployments"],
        },
      ],
      bestPractices: [
        "Use environment variables for secrets",
        "Implement health checks",
        "Set up monitoring and logging",
        "Use databases with backups",
        "Implement CI/CD pipelines",
      ],
    },
    "database-design": {
      category: "Database Selection & Design",
      options: [
        {
          name: "PostgreSQL",
          type: "Relational",
          bestFor: "Complex queries, relationships, ACID guarantees",
          with: "Prisma ORM",
        },
        {
          name: "MongoDB",
          type: "NoSQL (Document)",
          bestFor: "Flexible schemas, real-time data",
          with: "Mongoose ODM",
        },
        {
          name: "MySQL",
          type: "Relational",
          bestFor: "Web applications, good performance",
          with: "Prisma ORM",
        },
        {
          name: "Redis",
          type: "In-Memory Cache",
          bestFor: "Caching, sessions, real-time features",
          with: "node-redis",
        },
      ],
      bestPractices: [
        "Normalize data appropriately",
        "Index frequently queried columns",
        "Use transactions for data consistency",
        "Plan for backups and recovery",
        "Monitor performance regularly",
      ],
    },
    "mern-project": {
      category: "MERN Stack",
      tools: [
        {
          name: "Vite + React",
          purpose: "Modern React SPA frontend",
          commands: ["npm create vite@latest -- --template react"],
        },
        {
          name: "Express.js",
          purpose: "Backend REST API",
          setup: "npm install express",
        },
        {
          name: "MongoDB + Mongoose",
          purpose: "Document database + ODM",
          setup: "npm install mongoose",
        },
        {
          name: "jsonwebtoken",
          purpose: "JWT authentication",
          setup: "npm install jsonwebtoken",
        },
      ],
      bestPractices: [
        "Separate frontend and backend packages (or use a monorepo)",
        "Validate requests at the API boundary (Zod/Joi)",
        "Use environment variables for secrets",
        "Implement refresh tokens and rate limiting",
      ],
    },
  };

  return toolsets[normalizedIntent] || toolsets["api-design"];
}

export function getTechStackRecommendation(intent) {
  const normalizedIntent = normalizeIntentForTools(intent);
  const stacks = {
    "nextjs-project": {
      description: "Next.js full-stack starter (App Router)",
      frontend: "Next.js + React + TailwindCSS",
      backend: "Next.js API Routes",
      database: "PostgreSQL (Prisma ORM)",
      auth: "NextAuth.js or JWT",
      deployment: "Vercel",
    },
    "react-project": {
      description: "React SPA starter with modern tooling",
      frontend: "React + Vite + TailwindCSS",
      routing: "React Router",
      serverState: "TanStack Query",
      clientState: "Zustand",
      deployment: "Vercel or Netlify",
    },
    "api-design": {
      description: "Express REST API starter",
      backend: "Express.js",
      validation: "Zod",
      database: "PostgreSQL (Prisma) or MongoDB (Mongoose)",
      auth: "JWT",
      deployment: "Docker + Any Cloud",
    },
    "mern-project": {
      description: "MERN full-stack starter",
      frontend: "React + Vite",
      backend: "Express.js",
      database: "MongoDB (Mongoose)",
      auth: "JWT + bcryptjs",
      deployment: "Heroku or AWS",
    },
    "full-stack-project": {
      frontend: "React/Vue + Vite",
      backend: "Express.js or Fastify",
      database: "PostgreSQL (Prisma)",
      auth: "JWT with refresh tokens",
      testing: "Vitest + Playwright",
      deployment: "Docker + Cloud Platform",
    },
    "payment-gateway-setup": {
      category: "Payment Processing Integration",
      description: "Integrate payment gateways for e-commerce and SaaS",
      tools: [
        {
          name: "Razorpay",
          purpose: "India's most popular payment gateway",
          npm: "npm install razorpay",
          website: "https://razorpay.com",
          docs: "https://razorpay.com/docs",
          dashboard: "https://dashboard.razorpay.com",
          features: ["Payments", "Subscriptions", "Invoicing", "Loans"],
        },
        {
          name: "PayU",
          purpose: "Payment gateway with EMI options",
          npm: "npm install payu-nodejs",
          website: "https://payu.in",
          docs: "https://developer.payu.in/docs",
          dashboard: "https://app.payu.in",
        },
        {
          name: "Cashfree",
          purpose: "Payment gateway with payouts",
          npm: "npm install cashfree-sdk",
          website: "https://www.cashfree.com",
          docs: "https://docs.cashfree.com",
          dashboard: "https://merchant.cashfree.com",
        },
      ],
      securityBestPractices: [
        "Never expose API keys on frontend",
        "Use environment variables for credentials",
        "Verify webhook signatures",
        "Use HTTPS only",
        "Implement idempotency for payment requests",
      ],
    },
    "indian-payment-gateway": {
      category: "Indian Payment Solutions",
      description: "Payment gateway recommendations for India",
      topChoices: [
        {
          name: "Razorpay",
          market_share: "35%",
          pros: ["Most popular", "Great API", "Good support"],
          cons: ["Slightly higher fees"],
          website: "https://razorpay.com",
          docs: "https://razorpay.com/docs",
        },
        {
          name: "PayU",
          market_share: "20%",
          pros: ["EMI options", "Established", "Cost-effective"],
          cons: ["Older UI", "Support varies"],
          website: "https://payu.in",
          docs: "https://developer.payu.in/docs",
        },
        {
          name: "Cashfree",
          market_share: "15%",
          pros: ["Great payouts", "Good API", "Startup friendly"],
          cons: ["Smaller team"],
          website: "https://www.cashfree.com",
          docs: "https://docs.cashfree.com",
        },
      ],
    },
    "proxmox-setup": {
      category: "Infrastructure & Virtualization",
      description: "Proxmox VE - Open-source virtualization platform",
      tools: [
        {
          name: "Proxmox VE",
          purpose: "Virtualization platform for VMs and containers",
          website: "https://www.proxmox.com",
          docs: "https://pve.proxmox.com/wiki",
          apiDocs: "https://pve.proxmox.com/pve-docs/api-viewer/",
          installation: "https://pve.proxmox.com/wiki/Installation",
        },
        {
          name: "Proxmox Node.js Client",
          purpose: "Manage Proxmox via Node.js",
          npm: "npm install proxmox-ve",
          website: "https://www.npmjs.com/package/proxmox-ve",
          github: "https://github.com/proxmox-community/node-proxmox",
        },
        {
          name: "Axios",
          purpose: "HTTP client for direct API calls",
          npm: "npm install axios",
          docs: "https://axios-http.com",
          tutorialLink:
            "https://pve.proxmox.com/wiki/Proxmox_VE_API#Authentication",
        },
      ],
      features: [
        "Virtual Machine (KVM)",
        "Containers (LXC)",
        "Storage Management",
        "Clustering",
        "High Availability",
        "Backup & Restore",
      ],
      resources: {
        officialDocs: "https://pve.proxmox.com/wiki",
        apiViewer: "https://pve.proxmox.com/pve-docs/api-viewer/",
        adminGuide: "https://pve.proxmox.com/wiki/Admin_Guide",
        clusterGuide: "https://pve.proxmox.com/wiki/Cluster_Manager",
        backupGuide: "https://pve.proxmox.com/wiki/Backup_and_Restore",
      },
    },
    "proxmox-api": {
      category: "Proxmox API Integration",
      description: "Develop applications with Proxmox API",
      authentication: {
        method1: "API Token Authentication (Recommended)",
        docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
        method2: "Password Authentication",
      },
      commonEndpoints: [
        {
          path: "/api/version",
          method: "GET",
          description: "Get Proxmox version",
          docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
        },
        {
          path: "/nodes",
          method: "GET",
          description: "List all nodes",
          docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
        },
        {
          path: "/nodes/{node}/qemu",
          method: "GET",
          description: "List virtual machines",
          docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
        },
        {
          path: "/nodes/{node}/lxc",
          method: "GET",
          description: "List containers",
          docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
        },
      ],
      setupLibraries: [
        {
          name: "proxmox-ve",
          npm: "npm install proxmox-ve",
          github: "https://github.com/proxmox-community/node-proxmox",
        },
        {
          name: "axios",
          npm: "npm install axios",
          docs: "https://axios-http.com",
        },
      ],
    },
  };

  return stacks[normalizedIntent] || stacks["full-stack-project"];
}
