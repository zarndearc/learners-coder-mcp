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
app.use(cors());
app.use(express.json());

app.post("/mcp", (req, res) => {
  const userMessage = req.body?.message || "";

  const policy = enforceTeachingPolicy(userMessage);
  if (policy.blocked) {
    return res.json({
      identity,
      response: policy.message,
    });
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

  res.json({
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
  });
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
