export function analyzeIntent(userMessage) {
  const lower = userMessage.toLowerCase();

  // Framework-specific intents
  if (lower.includes("next.js") || lower.includes("nextjs"))
    return "nextjs-fullstack";
  if (lower.includes("react") && !lower.includes("native")) return "react-spa";
  if (lower.includes("vue")) return "vue-project";
  if (lower.includes("svelte")) return "svelte-project";

  // Express-specific
  if (lower.includes("express") || lower.includes("rest api"))
    return "express-rest-api";
  if (lower.includes("fastify")) return "fastify-api";

  // Full-stack intents
  if (lower.includes("mern")) return "mern-stack";
  if (lower.includes("full-stack") || lower.includes("fullstack"))
    return "nextjs-fullstack";

  // Database intents
  if (lower.includes("prisma")) return "prisma-setup";
  if (lower.includes("mongodb") || lower.includes("mongoose"))
    return "mongodb-setup";
  if (lower.includes("postgresql") || lower.includes("postgres"))
    return "postgresql-setup";
  if (lower.includes("drizzle")) return "drizzle-orm-setup";

  // API intents
  if (lower.includes("api") && !lower.includes("api routes"))
    return "express-rest-api";
  if (lower.includes("graphql")) return "graphql-api";
  if (
    lower.includes("websocket") ||
    lower.includes("real-time") ||
    lower.includes("realtime")
  )
    return "realtime-collab";
  if (lower.includes("socket")) return "realtime-collab";

  // Auth intents
  if (lower.includes("authentication") || lower.includes("auth"))
    return "authentication";
  if (lower.includes("jwt")) return "authentication";
  if (lower.includes("next-auth") || lower.includes("nextauth"))
    return "nextauth-setup";

  // Testing intents
  if (lower.includes("test")) return "testing-setup";
  if (lower.includes("e2e") || lower.includes("end-to-end"))
    return "e2e-testing";
  if (lower.includes("jest")) return "jest-testing";
  if (lower.includes("vitest")) return "vitest-testing";

  // Deployment intents
  if (lower.includes("deploy") || lower.includes("production"))
    return "deployment";
  if (lower.includes("docker")) return "docker-setup";
  if (lower.includes("kubernetes") || lower.includes("k8s"))
    return "kubernetes-setup";
  if (lower.includes("microservices") || lower.includes("micro"))
    return "microservices";

  // Styling intents
  if (lower.includes("tailwind") || lower.includes("css")) return "styling";
  if (lower.includes("shadcn") || lower.includes("component"))
    return "component-library";

  // Form intents
  if (lower.includes("form") && lower.includes("hook"))
    return "react-hook-form-setup";
  if (lower.includes("form")) return "form-handling";

  // Performance intents
  if (lower.includes("performance") || lower.includes("optimize"))
    return "performance-optimization";
  if (lower.includes("cache")) return "caching-strategy";

  // Data intents
  if (
    lower.includes("data") &&
    (lower.includes("large") || lower.includes("big"))
  )
    return "enterprise-dataapp";
  if (lower.includes("data fetching") || lower.includes("server state"))
    return "react-query-setup";

  // Company/Enterprise
  if (lower.includes("enterprise") || lower.includes("scale"))
    return "enterprise-dataapp";
  if (lower.includes("startup") && lower.includes("stack"))
    return "nextjs-fullstack";

  // Specific tech stacks
  if (lower.includes("company") && lower.includes("stack"))
    return "enterprise-dataapp";
  if (lower.includes("production") || lower.includes("production-grade"))
    return "enterprise-dataapp";

  // Payment Gateway intents (India)
  if (lower.includes("razorpay")) return "razorpay-integration";
  if (lower.includes("payu")) return "payu-integration";
  if (lower.includes("cashfree")) return "cashfree-integration";
  if (lower.includes("instamojo")) return "instamojo-integration";
  if (lower.includes("payment") && lower.includes("india"))
    return "indian-payment-gateway";
  if (
    lower.includes("payment gateway") ||
    lower.includes("payment integration")
  )
    return "payment-gateway-setup";
  if (lower.includes("subscription") && lower.includes("payment"))
    return "subscription-payments";
  if (lower.includes("invoice") && lower.includes("payment"))
    return "invoice-payment";

  // Infrastructure intents
  if (lower.includes("proxmox")) return "proxmox-setup";
  if (lower.includes("virtual machine") || lower.includes("vm management"))
    return "proxmox-vm";
  if (lower.includes("container") && lower.includes("proxmox"))
    return "proxmox-container";
  if (lower.includes("proxmox") && lower.includes("api")) return "proxmox-api";
  if (lower.includes("virtualization") || lower.includes("infrastructure"))
    return "infrastructure-setup";
  if (lower.includes("backup") && lower.includes("proxmox"))
    return "proxmox-backup";
  if (lower.includes("cluster") && lower.includes("proxmox"))
    return "proxmox-clustering";

  return "general-coding";
}
