import express from "express";
import cors from "cors";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import * as z from "zod/v4";
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

// ============ MCP SERVER (ChatGPT Connectors) ============
// ChatGPT expects a real MCP server over SSE at the configured server_url.
// The MCP SSE transport uses:
// - GET  /sse/          to establish the SSE stream (Content-Type: text/event-stream)
// - POST /sse/messages  to receive JSON-RPC messages (application/json)

function createMcpServer() {
  const server = new McpServer(
    {
      name: "learners-coder-mcp",
      version: "2.0.0",
    },
    {
      capabilities: {
        logging: {},
      },
    }
  );

  // Required by OpenAI MCP guide for deep research/connectors.
  server.registerTool(
    "search",
    {
      description:
        "Search the Learner's Coder knowledge base and return a list of relevant results.",
      inputSchema: {
        query: z.string().describe("Search query"),
      },
    },
    async ({ query }) => {
      const queryLower = String(query ?? "").toLowerCase();

      const results = [];
      if (queryLower) {
        documentStore.forEach((doc) => {
          const metadataValues = doc.metadata
            ? Object.values(doc.metadata)
            : [];
          const matchesMetadata = metadataValues.some((val) =>
            String(val).toLowerCase().includes(queryLower)
          );

          if (
            doc.title.toLowerCase().includes(queryLower) ||
            doc.text.toLowerCase().includes(queryLower) ||
            matchesMetadata
          ) {
            results.push({
              id: doc.id,
              title: doc.title,
              url: doc.url,
            });
          }
        });
      }

      return {
        content: [
          {
            type: "text",
            // Per OpenAI MCP guide: return ONE text content item whose text is a JSON-encoded string.
            text: JSON.stringify({ results }),
          },
        ],
      };
    }
  );

  server.registerTool(
    "fetch",
    {
      description:
        "Fetch the full contents of a knowledge base document by its id.",
      inputSchema: {
        id: z.string().describe("Document id"),
      },
    },
    async ({ id }) => {
      const docId = String(id ?? "");
      const doc = documentStore.get(docId);

      const payload = doc ?? {
        id: docId,
        title: "Not Found",
        text: "Document not found",
        url: "#",
        metadata: {},
      };

      return {
        content: [
          {
            type: "text",
            // Per OpenAI MCP guide: JSON-encoded string of the document object.
            text: JSON.stringify(payload),
          },
        ],
      };
    }
  );

  return server;
}

const mcpServer = createMcpServer();
const mcpTransports = new Map();

function attachSseRoute(path) {
  app.get(path, async (req, res) => {
    try {
      const transport = new SSEServerTransport("/sse/messages", res);
      mcpTransports.set(transport.sessionId, transport);

      transport.onclose = () => {
        mcpTransports.delete(transport.sessionId);
      };

      await mcpServer.connect(transport);
    } catch (error) {
      console.error("Error establishing MCP SSE stream:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error establishing SSE stream" });
      }
    }
  });
}

// Support both /sse and /sse/ to avoid hosting redirects changing behavior.
attachSseRoute("/sse");
attachSseRoute("/sse/");

app.post("/sse/messages", async (req, res) => {
  const sessionId = req.query.sessionId;
  if (!sessionId) {
    res.status(400).send("Missing sessionId parameter");
    return;
  }

  const transport = mcpTransports.get(String(sessionId));
  if (!transport) {
    res.status(404).send("Session not found");
    return;
  }

  try {
    await transport.handlePostMessage(req, res, req.body);
  } catch (error) {
    console.error("Error handling MCP message:", error);
    if (!res.headersSent) {
      res.status(500).send("Error handling MCP message");
    }
  }
});

// Optional: basic OPTIONS handling (some hosts/proxies issue preflights).
app.options(["/sse", "/sse/", "/sse/messages"], (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(204).end();
});

// Root endpoint for service health and info
app.get("/", (req, res) => {
  // If a client is trying to connect via MCP SSE but provided the base URL,
  // treat / as an alias for the SSE endpoint.
  const accept = String(req.headers?.accept ?? "");
  if (accept.includes("text/event-stream")) {
    // Reuse the same MCP SSE transport behavior.
    // (We intentionally do not redirect, because some clients don't follow redirects for SSE.)
    attachSseRoute("/");
    // Express will re-run the route handler chain; easiest is to just delegate directly.
    // Create a transport and connect immediately.
    (async () => {
      try {
        const transport = new SSEServerTransport("/sse/messages", res);
        mcpTransports.set(transport.sessionId, transport);

        transport.onclose = () => {
          mcpTransports.delete(transport.sessionId);
        };

        await mcpServer.connect(transport);
      } catch (error) {
        console.error("Error establishing MCP SSE stream (via /):", error);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error establishing SSE stream" });
        }
      }
    })();
    return;
  }

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
      messages: "POST /sse/messages - MCP message endpoint (JSON-RPC)",
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

// Note: MCP tools are served via JSON-RPC over /sse/messages, not custom REST endpoints.

// Legacy MCP POST endpoint
app.post("/mcp", (req, res) => {
  const userMessage = req.body?.message || "";

  const policy = enforceTeachingPolicy(userMessage);

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

  const messageLower = String(userMessage ?? "").toLowerCase();

  if (
    messageLower.includes("payment") ||
    messageLower.includes("payment gateway") ||
    messageLower.includes("razorpay") ||
    messageLower.includes("payu") ||
    messageLower.includes("cashfree") ||
    messageLower.includes("instamojo")
  ) {
    paymentRecommendations = {
      availableGateways: paymentGatewaysIndia,
      recommendations: getPaymentGatewayRecommendations(userMessage),
      integrationExample: getIndianPaymentIntegrationExample(),
    };
  }

  if (
    messageLower.includes("proxmox") ||
    messageLower.includes("virtual machine") ||
    messageLower.includes("vm") ||
    messageLower.includes("virtualization") ||
    messageLower.includes("infrastructure")
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
    teachingMode: policy.mode,
    teachingNote: policy.message,
    questions: generateClarifyingQuestions(intent),
    concepts: getConceptBreakdown(intent, userMessage),
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

  // Default teaching behavior: return ONLY concept explanations + small snippets.
  // This avoids dumping full project code or large integration examples.
  if (policy.mode === "concept-snippets") {
    res.status(200).json({
      identity,
      intent,
      teachingMode: policy.mode,
      teachingNote: policy.message,
      questions: generateClarifyingQuestions(intent),
      concepts: getConceptBreakdown(intent, userMessage),
    });
    return;
  }

  // If the user asks for full implementations, we still respond but enforce concept-snippet output.
  // Also sanitize any large embedded code blocks (exampleCode/code fields).
  if (policy.mode === "concept-snippets") {
    const truncateCodeBlock = (value, maxLines = 18) => {
      if (typeof value !== "string") return value;
      const lines = value.split(/\r?\n/);
      if (lines.length <= maxLines) return value;
      return `${lines
        .slice(0, maxLines)
        .join("\n")}\n// ... truncated (concept snippet only)`;
    };

    if (
      responseData.paymentGatewayOptions?.integrationExample?.razorpaySetup
        ?.code
    ) {
      responseData.paymentGatewayOptions.integrationExample.razorpaySetup.code =
        truncateCodeBlock(
          responseData.paymentGatewayOptions.integrationExample.razorpaySetup
            .code
        );
    }
    if (
      responseData.infrastructureOptions?.integrationGuide?.authentication
        ?.methods
    ) {
      responseData.infrastructureOptions.integrationGuide.authentication.methods =
        responseData.infrastructureOptions.integrationGuide.authentication.methods.map(
          (m) => ({
            ...m,
            example: truncateCodeBlock(m.example, 6),
          })
        );
    }
  }

  res.status(200).json(responseData);
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
  console.log(`   GET  /sse/ - MCP SSE endpoint (ChatGPT Connectors)`);
  console.log(`   POST /sse/messages - MCP message endpoint (JSON-RPC)`);
  console.log(`   POST /mcp - Legacy endpoint`);
  console.log(`   GET /health - Health check`);
});
