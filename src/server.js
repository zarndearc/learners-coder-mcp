import express from "express";
import cors from "cors";
import { identity } from "./config/identity.js";
import { analyzeIntent } from "./handlers/intent.js";
import { generateClarifyingQuestions } from "./handlers/questions.js";
import { getConceptBreakdown } from "./handlers/concepts.js";
import { enforceTeachingPolicy } from "./policies/teaching.js";
import { stableLibraries } from "./knowledge/liberaries.js";
import {
  getRecommendedTools,
  getTechStackRecommendation,
} from "./handlers/tools.js";
import {
  getPerformanceOptimizations,
  getSecurityBestPractices,
  getScalabilityTips,
} from "./handlers/performance.js";
import {
  getCompanyGradeTechStack,
  getProductionRecommendations,
  getLibraryComparison,
} from "./handlers/enterprise.js";
import {
  paymentGatewaysIndia,
  infrastructureLibraries,
  getPaymentGatewayRecommendations,
  getProxmoxIntegrationGuide,
  getIndianPaymentIntegrationExample,
} from "./handlers/payments.js";

const app = express();

// CORS middleware - must be before routes
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// JSON parsing middleware
app.use(express.json());

// In-memory document store for MCP search/fetch operations
const documentStore = new Map();

// Initialize document store with knowledge base
function initializeDocumentStore() {
  // Add learning resources
  documentStore.set("learn-expressjs", {
    id: "learn-expressjs",
    title: "Express.js Development Guide",
    text: "Comprehensive guide for building Express.js applications with best practices, middleware patterns, and production deployment strategies.",
    url: "https://learners-coder-mcp.local/docs/expressjs",
    metadata: { type: "learning", category: "backend" },
  });

  documentStore.set("learn-react", {
    id: "learn-react",
    title: "React SPA Development",
    text: "Best practices for building Single Page Applications with React, including component architecture, state management, and performance optimization.",
    url: "https://learners-coder-mcp.local/docs/react",
    metadata: { type: "learning", category: "frontend" },
  });

  documentStore.set("learn-nextjs", {
    id: "learn-nextjs",
    title: "Next.js Full-Stack Development",
    text: "Guide to building full-stack applications with Next.js, including server-side rendering, API routes, and deployment strategies.",
    url: "https://learners-coder-mcp.local/docs/nextjs",
    metadata: { type: "learning", category: "fullstack" },
  });

  documentStore.set("payments-razorpay", {
    id: "payments-razorpay",
    title: "Razorpay Payment Integration",
    text: "Complete guide for integrating Razorpay payment gateway in Node.js applications. Includes webhook handling, subscription management, and compliance requirements for Indian businesses.",
    url: "https://learners-coder-mcp.local/docs/payments/razorpay",
    metadata: { type: "payments", category: "india", gateway: "razorpay" },
  });

  documentStore.set("payments-payu", {
    id: "payments-payu",
    title: "PayU Payment Gateway Integration",
    text: "Integration guide for PayU payment gateway. Covers setup, transaction handling, and integration with Express.js applications for Indian e-commerce platforms.",
    url: "https://learners-coder-mcp.local/docs/payments/payu",
    metadata: { type: "payments", category: "india", gateway: "payu" },
  });

  documentStore.set("infrastructure-proxmox", {
    id: "infrastructure-proxmox",
    title: "Proxmox Infrastructure Management",
    text: "Guide to using Proxmox for virtualization and infrastructure management. Covers VM creation, clustering, API integration, and Node.js automation.",
    url: "https://learners-coder-mcp.local/docs/infrastructure/proxmox",
    metadata: { type: "infrastructure", category: "virtualization" },
  });

  documentStore.set("production-recommendations", {
    id: "production-recommendations",
    title: "Production Deployment Best Practices",
    text: "Comprehensive guide for deploying web applications to production. Includes security hardening, performance optimization, monitoring, and disaster recovery strategies.",
    url: "https://learners-coder-mcp.local/docs/production",
    metadata: { type: "production", category: "deployment" },
  });
}

// Initialize on startup
initializeDocumentStore();

// ============ CORS OPTIONS HANDLERS ============
// Handle OPTIONS requests for all MCP endpoints
app.options("/sse/", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-cache");
  res.end();
});

app.options("/sse/tools/search", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-cache");
  res.end();
});

app.options("/sse/tools/fetch", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-cache");
  res.end();
});

// Root endpoint for service health and info
app.get("/", (req, res) => {
  res.json({
    service: "Learner's Coder MCP",
    version: "2.0.0",
    status: "operational",
    description:
      "MCP server for web development guidance - compatible with ChatGPT connectors and deep research",
    endpoints: {
      root: "GET /",
      health: "GET /health",
      sse: "GET /sse/ - MCP SSE endpoint (use for ChatGPT)",
      mcp: "POST /mcp - Legacy MCP endpoint",
    },
    capabilities: [
      "Express.js stack guidance",
      "React SPA development",
      "Next.js full-stack apps",
      "Production recommendations",
      "Enterprise architecture",
      "Payment gateway integration",
      "Infrastructure guidance",
    ],
  });
});

// MCP SSE Endpoint (Required for ChatGPT Connectors)
// This endpoint must be accessible at /sse/ and handle MCP protocol
app.get("/sse/", (req, res) => {
  // Set SSE headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Send a simple handshake/ready message
  res.write(`:ready\n\n`);

  // Keep connection alive
  const keepAliveInterval = setInterval(() => {
    res.write(`:ping\n\n`);
  }, 30000);

  req.on("close", () => {
    clearInterval(keepAliveInterval);
  });
});

// MCP Tool Handler - Search Tool (Required)
// This implements the "search" tool for ChatGPT MCP integration
app.post("/sse/tools/search", (req, res) => {
  // Set SSE headers for MCP protocol
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { query } = req.body;

  let results = [];

  if (query) {
    // Search documents in the store
    const queryLower = query.toLowerCase();

    documentStore.forEach((doc) => {
      if (
        doc.title.toLowerCase().includes(queryLower) ||
        doc.text.toLowerCase().includes(queryLower) ||
        Object.values(doc.metadata).some((val) =>
          String(val).toLowerCase().includes(queryLower)
        )
      ) {
        results.push({
          id: doc.id,
          title: doc.title,
          url: doc.url,
        });
      }
    });
  }

  // MCP protocol requires content array with text type, sent as SSE event
  const responseData = {
    content: [
      {
        type: "text",
        text: JSON.stringify({ results }),
      },
    ],
  };

  res.write(`data: ${JSON.stringify(responseData)}\n\n`);
  res.end();
});

// MCP Tool Handler - Fetch Tool (Required)
// This implements the "fetch" tool for ChatGPT MCP integration
app.post("/sse/tools/fetch", (req, res) => {
  // Set SSE headers for MCP protocol
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { id } = req.body;

  let doc = {
    id: id || "unknown",
    title: "Not Found",
    text: "Document not found",
    url: "#",
    metadata: {},
  };

  if (id && documentStore.has(id)) {
    doc = documentStore.get(id);
  }

  // MCP protocol requires content array with text type, sent as SSE event
  const responseData = {
    content: [
      {
        type: "text",
        text: JSON.stringify(doc),
      },
    ],
  };

  res.write(`data: ${JSON.stringify(responseData)}\n\n`);
  res.end();
});

// Legacy MCP POST endpoint
app.post("/mcp", (req, res) => {
  const userMessage = req.body?.message || "";

  // Set SSE headers for streaming response
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const policy = enforceTeachingPolicy(userMessage);
  if (policy.blocked) {
    const event = JSON.stringify({
      identity,
      response: policy.message,
    });
    res.write(`data: ${event}\n\n`);
    res.end();
    return;
  }

  const intent = analyzeIntent(userMessage);
  const tools = getRecommendedTools(intent);
  const techStack = getTechStackRecommendation(intent);
  const performance = getPerformanceOptimizations(intent);
  const security = getSecurityBestPractices();
  const scalability = getScalabilityTips();
  const companyStack = getCompanyGradeTechStack(intent);
  const productionRecs = getProductionRecommendations(intent);
  const libComparison = getLibraryComparison();

  // Payment and Infrastructure recommendations
  let paymentRecommendations = null;
  let infrastructureRecommendations = null;

  if (
    intent.includes("payment") ||
    intent.includes("razorpay") ||
    intent.includes("payu")
  ) {
    paymentRecommendations = {
      availableGateways: paymentGatewaysIndia,
      recommendations: getPaymentGatewayRecommendations(userMessage),
      integrationExample: getIndianPaymentIntegrationExample(),
    };
  }

  if (
    intent.includes("proxmox") ||
    intent.includes("infrastructure") ||
    intent.includes("virtualization")
  ) {
    infrastructureRecommendations = {
      proxmoxVE: infrastructureLibraries.proxmox,
      integrationGuide: getProxmoxIntegrationGuide(),
    };
  }

  const responseData = {
    identity,
    intent,
    learningStrategy: "concept-first",
    questions: generateClarifyingQuestions(intent),
    concepts: getConceptBreakdown(intent),
    recommendedLibraries: stableLibraries,
    recommendedTools: tools,
    techStack,
    companyGradeTechStack: companyStack,
    productionRecommendations: productionRecs,
    libraryComparisons: libComparison,
    performance,
    security,
    scalability,
    paymentGatewayOptions: paymentRecommendations,
    infrastructureOptions: infrastructureRecommendations,
    note: "You are expected to assemble the final solution. I provide guidance, patterns, and examples only.",
  };

  // Send as SSE event
  const event = JSON.stringify(responseData);
  res.write(`data: ${event}\n\n`);
  res.end();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "Learner's Coder MCP - Enterprise Edition",
    capabilities: [
      "Express.js stack guidance",
      "React SPA development",
      "Next.js full-stack apps",
      "Production recommendations",
      "Enterprise architecture",
      "Company-grade recommendations",
      "Indian Payment Gateways (Razorpay, PayU, Cashfree, Instamojo)",
      "Proxmox Virtualization & Infrastructure",
      "Payment Gateway Integration",
      "Infrastructure as Code",
    ],
    paymentGateways: [
      "Razorpay - https://razorpay.com",
      "PayU - https://payu.in",
      "Cashfree - https://www.cashfree.com",
      "Instamojo - https://www.instamojo.com",
    ],
    infrastructureSupport: [
      "Proxmox VE - https://www.proxmox.com",
      "KVM Virtual Machines - https://pve.proxmox.com/wiki",
      "LXC Containers - https://pve.proxmox.com/wiki",
      "Clustering & HA - https://pve.proxmox.com/wiki/Cluster_Manager",
    ],
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `🚀 Learner's Coder MCP - Enterprise Edition running on port ${PORT}`
  );
  console.log(`📚 Endpoints:`);
  console.log(`   POST /mcp - Main MCP endpoint`);
  console.log(`   GET /health - Health check`);
});
