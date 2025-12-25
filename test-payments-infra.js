#!/usr/bin/env node

/**
 * MCP Agent - Payment & Infrastructure Test Queries
 *
 * This file demonstrates how to query the MCP agent
 * for payment gateway and infrastructure recommendations
 */

import axios from "axios";

const API_URL = "http://localhost:3000/mcp";

// Test queries for different scenarios
const testQueries = [
  {
    category: "E-Commerce Payment Gateway",
    query:
      "I am building an e-commerce website with React and Express. I need to integrate a payment gateway for Indian customers. What should I use?",
    expectedResponse: "Payment gateway recommendations",
  },
  {
    category: "SaaS Subscription Payments",
    query:
      "I am building a SaaS product with Node.js. I need subscription and recurring payment support. Which payment gateway should I use?",
    expectedResponse: "Subscription payment options",
  },
  {
    category: "Marketplace with Payouts",
    query:
      "I am building a marketplace where sellers need to get paid. What payment gateway supports payouts?",
    expectedResponse: "Marketplace payment solutions",
  },
  {
    category: "Razorpay Integration",
    query: "How do I integrate Razorpay into my Express.js application?",
    expectedResponse: "Razorpay integration details",
  },
  {
    category: "PayU Setup",
    query:
      "Set up PayU payment gateway for my e-commerce site. Provide npm package and setup guide.",
    expectedResponse: "PayU setup information",
  },
  {
    category: "Cashfree Integration",
    query:
      "I want to use Cashfree for payments and payouts. What is the npm package?",
    expectedResponse: "Cashfree package information",
  },
  {
    category: "Payment Gateway Comparison",
    query:
      "Compare Razorpay, PayU, and Cashfree. Which is best for my startup?",
    expectedResponse: "Payment gateway comparison",
  },
  {
    category: "Proxmox Setup",
    query:
      "I want to set up a Proxmox cluster for my application. I have 3 servers. How do I manage them with Node.js?",
    expectedResponse: "Proxmox cluster management",
  },
  {
    category: "Proxmox VM Creation",
    query:
      "I want to automatically create virtual machines in Proxmox when customers sign up. How do I do this with Node.js?",
    expectedResponse: "Automatic VM provisioning",
  },
  {
    category: "Proxmox API Integration",
    query:
      "How do I integrate Proxmox API with Node.js? I need to manage VMs and containers.",
    expectedResponse: "Proxmox API integration details",
  },
  {
    category: "Proxmox Backup",
    query:
      "Set up automatic backups for customer VMs in Proxmox using Node.js.",
    expectedResponse: "Proxmox backup automation",
  },
  {
    category: "Combined Payment + Infrastructure",
    query:
      "I am building a SaaS where users pay via Razorpay and automatically get a Proxmox VM provisioned. How do I integrate both?",
    expectedResponse: "Payment and infrastructure integration",
  },
  {
    category: "Indian Payment Gateway Best Practice",
    query:
      "What are the best practices for integrating Indian payment gateways? Security, compliance, webhook handling?",
    expectedResponse: "Payment gateway best practices",
  },
  {
    category: "Proxmox High Availability",
    query: "How do I set up Proxmox with high availability and clustering?",
    expectedResponse: "Proxmox HA configuration",
  },
  {
    category: "Freelancer Platform Payments",
    query:
      "I am building a freelancer platform. What is the simplest payment gateway to integrate?",
    expectedResponse: "Freelancer-friendly payment solution",
  },
];

/**
 * Send query to MCP agent
 */
async function queryMCP(message) {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

/**
 * Run test queries
 */
async function runTests() {
  console.log("=".repeat(80));
  console.log("MCP Agent - Payment Gateway & Infrastructure Tests");
  console.log("=".repeat(80));
  console.log();

  for (const test of testQueries) {
    console.log(`📝 Test: ${test.category}`);
    console.log("-".repeat(80));
    console.log(`Query: ${test.query}`);
    console.log();

    const response = await queryMCP(test.query);

    if (response) {
      console.log("✅ Response received:");
      console.log("  - Intent:", response.intent);
      console.log(
        "  - Payment Gateway Options:",
        response.paymentGatewayOptions ? "✅ Available" : "❌ Not applicable"
      );
      console.log(
        "  - Infrastructure Options:",
        response.infrastructureOptions ? "✅ Available" : "❌ Not applicable"
      );
      console.log("  - Tech Stack:", response.techStack?.description || "N/A");
      console.log(
        "  - Recommended Tools:",
        response.recommendedTools?.length || 0,
        "tools"
      );
    } else {
      console.log("❌ No response");
    }

    console.log();
    console.log("=".repeat(80));
    console.log();

    // Add delay between requests
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log("✅ All tests completed!");
}

/**
 * Test specific payment gateway data
 */
async function testPaymentData() {
  console.log("Testing Payment Gateway Data Access");
  console.log("=".repeat(80));

  const response = await queryMCP("I need to integrate Razorpay");

  if (response?.paymentGatewayOptions?.availableGateways) {
    const gateways = response.paymentGatewayOptions.availableGateways;
    console.log("\n✅ Available Payment Gateways:");
    Object.entries(gateways).forEach(([key, gateway]) => {
      console.log(`\n  ${gateway.name}`);
      console.log(`    - NPM Package: ${gateway.npm}`);
      console.log(`    - Website: ${gateway.website}`);
      console.log(`    - Docs: ${gateway.documentation}`);
      console.log(`    - Dashboard: ${gateway.dashboard}`);
      console.log(`    - Features: ${gateway.features?.join(", ")}`);
    });
  }
}

/**
 * Test specific infrastructure data
 */
async function testInfrastructureData() {
  console.log("\nTesting Infrastructure Data Access");
  console.log("=".repeat(80));

  const response = await queryMCP("I want to set up Proxmox infrastructure");

  if (response?.infrastructureOptions?.proxmoxVE) {
    const proxmox = response.infrastructureOptions.proxmoxVE;
    console.log("\n✅ Proxmox VE Available:");
    console.log(`  - Name: ${proxmox.name}`);
    console.log(`  - Website: ${proxmox.website}`);
    console.log(`  - Documentation: ${proxmox.documentation}`);
    console.log(`  - API Docs: ${proxmox.apiDocs}`);
    console.log(`  - Features: ${proxmox.features?.join(", ")}`);
    console.log(
      `  - Node.js Packages: ${proxmox.nodePackages?.length || 0} available`
    );
    console.log(
      `  - API Endpoints: ${proxmox.apiEndpoints?.length || 0} endpoints`
    );
  }
}

/**
 * Main execution
 */
async function main() {
  // Check if server is running
  try {
    const health = await axios.get("http://localhost:3000/health");
    console.log("✅ MCP Server is running");
    console.log(`Server: ${health.data.service}`);
    console.log(
      `Capabilities: ${health.data.capabilities?.length || 0} available`
    );
    console.log();

    // Run tests based on command line argument
    const arg = process.argv[2];
    if (arg === "test") {
      await runTests();
    } else if (arg === "payment") {
      await testPaymentData();
    } else if (arg === "infrastructure") {
      await testInfrastructureData();
    } else {
      console.log("Usage:");
      console.log(
        "  npm run test:payment           # Run payment gateway tests"
      );
      console.log(
        "  npm run test:infrastructure    # Run infrastructure tests"
      );
      console.log("  npm run test:all               # Run all tests");
      console.log("\nQuick test:");
      await testPaymentData();
      await testInfrastructureData();
    }
  } catch (error) {
    console.error("❌ Cannot connect to MCP Server at http://localhost:3000");
    console.error("Please start the server first with: npm start");
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { queryMCP, testPaymentData, testInfrastructureData };
