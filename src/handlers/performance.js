// Performance & Best Practices Handler
export function getPerformanceOptimizations(intent) {
  return {
    frontend: {
      bundling: [
        {
          technique: "Code Splitting",
          tool: "Vite or Webpack",
          benefit: "Load only necessary JavaScript per route",
          implementation: "Use React.lazy() for route-based splitting",
        },
        {
          technique: "Tree Shaking",
          tool: "Vite (automatic)",
          benefit: "Remove unused code from bundles",
          implementation: "Use ES6 modules, avoid side effects",
        },
        {
          technique: "Image Optimization",
          tool: "Next.js Image or sharp",
          benefit: "Reduce image file sizes by 80%+",
          implementation: "Use WebP, responsive images, lazy loading",
        },
      ],
      runtime: [
        {
          technique: "Lazy Load Images",
          tool: "Native loading='lazy' or Intersection Observer",
          benefit: "Faster initial page load",
          implementation: "<img loading='lazy' src='...' />",
        },
        {
          technique: "Defer Non-Critical JS",
          tool: "defer attribute in script tags",
          benefit: "Page becomes interactive faster",
          implementation: "<script defer src='...'></script>",
        },
        {
          technique: "Virtualization",
          tool: "react-window or react-virtual",
          benefit: "Render only visible list items",
          implementation: "Perfect for long lists with 1000+ items",
        },
      ],
      caching: [
        {
          technique: "Browser Caching",
          tool: "Cache-Control headers",
          benefit: "Reduce server requests",
          implementation: "Set appropriate cache headers",
        },
        {
          technique: "SWR/Stale-While-Revalidate",
          tool: "TanStack Query or SWR",
          benefit: "Instant response from cache, background refresh",
          implementation: "Use staleTime and cacheTime options",
        },
      ],
    },
    backend: {
      databases: [
        {
          technique: "Database Indexing",
          benefit: "Query speed improvement of 100x+",
          implementation: "Index on frequently queried columns",
        },
        {
          technique: "Connection Pooling",
          tool: "PgBouncer or built-in ORM pools",
          benefit: "Efficient database connection management",
          implementation: "Reuse connections instead of creating new ones",
        },
        {
          technique: "Query Optimization",
          tool: "EXPLAIN ANALYZE",
          benefit: "Identify slow queries",
          implementation: "Use pagination, select only needed fields",
        },
      ],
      caching: [
        {
          technique: "Redis Caching",
          tool: "redis package",
          benefit: "Sub-millisecond response times",
          implementation: "Cache frequent queries, session data",
        },
        {
          technique: "HTTP Caching",
          tool: "Cache-Control headers",
          benefit: "Reduce database hits",
          implementation: "Cache GET requests appropriately",
        },
      ],
      scaling: [
        {
          technique: "Load Balancing",
          tool: "Nginx or cloud LB",
          benefit: "Distribute traffic across servers",
          implementation: "Deploy multiple instances behind LB",
        },
        {
          technique: "Database Read Replicas",
          benefit: "Distribute read traffic",
          implementation: "Point read-only queries to replicas",
        },
      ],
    },
    general: {
      monitoring: [
        {
          tool: "Sentry",
          purpose: "Error tracking and monitoring",
          setup: "npm install @sentry/node",
        },
        {
          tool: "DataDog",
          purpose: "Comprehensive application monitoring",
          setup: "Enterprise-grade monitoring",
        },
        {
          tool: "Lighthouse",
          purpose: "Web performance audits",
          use: "Browser DevTools built-in",
        },
      ],
    },
  };
}

export function getSecurityBestPractices() {
  return {
    frontend: [
      "Never store secrets in frontend code",
      "Sanitize user input to prevent XSS",
      "Use Content Security Policy (CSP) headers",
      "Validate all user input before sending to API",
      "Use HTTPS only in production",
    ],
    backend: [
      "Use environment variables for all secrets",
      "Validate and sanitize all inputs (Zod/Joi)",
      "Implement rate limiting on sensitive endpoints",
      "Use HTTPS only in production",
      "Implement CORS properly (whitelist origins)",
      "Hash passwords with bcrypt, never store plain",
      "Use JWT with short expiration times",
      "Implement refresh token rotation",
      "Add CSRF protection for state-changing requests",
      "Use SQL parameterized queries to prevent SQL injection",
      "Implement input length limits",
      "Log security events for auditing",
    ],
    database: [
      "Create regular backups",
      "Use strong passwords (minimum 32 characters)",
      "Run only in private networks (VPC/security groups)",
      "Enable encryption at rest and in transit",
      "Apply principle of least privilege to accounts",
      "Monitor and audit database access",
    ],
  };
}

export function getScalabilityTips() {
  return {
    immediate: [
      "Add database indexes on frequently queried columns",
      "Implement caching layer (Redis)",
      "Use CDN for static assets",
      "Enable gzip compression",
      "Implement connection pooling",
    ],
    short_term: [
      "Set up load balancing (Nginx/HAProxy)",
      "Implement API rate limiting",
      "Use database read replicas",
      "Add background job processing (Bull/RabbitMQ)",
      "Implement health checks and auto-scaling",
    ],
    long_term: [
      "Consider microservices architecture",
      "Implement message queues (RabbitMQ/Kafka)",
      "Use event-driven architecture",
      "Containerize with Docker and Kubernetes",
      "Implement distributed caching (Memcached/Redis Cluster)",
    ],
  };
}
