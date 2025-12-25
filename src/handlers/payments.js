// Payment Gateways & Infrastructure Support
export const paymentGatewaysIndia = {
  razorpay: {
    name: "Razorpay",
    type: "Payment Gateway",
    country: "India",
    features: [
      "Payments",
      "Subscriptions",
      "Invoicing",
      "Loans",
      "Smart Collect",
    ],
    nodePackage: "razorpay",
    npm: "npm install razorpay",
    website: "https://razorpay.com",
    documentation: "https://razorpay.com/docs",
    apiDocs: "https://razorpay.com/docs/api",
    dashboard: "https://dashboard.razorpay.com",
    businessModels: ["SaaS", "E-commerce", "Marketplace", "Fintech"],
    setupGuide: "https://razorpay.com/docs/payment-gateway/web-integration/",
    exampleCode: {
      javascript:
        "https://github.com/razorpay/razorpay-node/blob/master/examples",
      react: "https://razorpay.com/docs/payment-gateway/web-integration/",
    },
  },
  payu: {
    name: "PayU",
    type: "Payment Gateway",
    country: "India",
    features: [
      "Payments",
      "Subscriptions",
      "EMI",
      "Payment Links",
      "Virtual Accounts",
    ],
    nodePackage: "payu-nodejs",
    npm: "npm install payu-nodejs",
    website: "https://payu.in",
    documentation: "https://developer.payu.in/docs",
    apiDocs: "https://developer.payu.in/docs/reference",
    dashboard: "https://app.payu.in",
    businessModels: ["E-commerce", "Marketplace", "FinTech"],
    setupGuide: "https://developer.payu.in/docs/integration/payment-gateway/",
    integrationGuide:
      "https://developer.payu.in/docs/integration/payment-gateway/",
  },
  cashfree: {
    name: "Cashfree Payments",
    type: "Payment Gateway",
    country: "India",
    features: [
      "Payments",
      "Payouts",
      "Subscriptions",
      "Invoicing",
      "Payment Links",
    ],
    nodePackage: "cashfree-sdk",
    npm: "npm install cashfree-sdk",
    website: "https://www.cashfree.com",
    documentation: "https://docs.cashfree.com",
    apiDocs: "https://docs.cashfree.com/reference/payments-api",
    dashboard: "https://merchant.cashfree.com",
    businessModels: ["E-commerce", "Saas", "Marketplace", "Fintech"],
    setupGuide: "https://docs.cashfree.com/docs/payments/guide/",
  },
  instamojo: {
    name: "Instamojo",
    type: "Payment Gateway",
    country: "India",
    features: ["Payments", "Invoicing", "Payment Links", "Store Creation"],
    nodePackage: "instamojo-wrapper",
    npm: "npm install instamojo-wrapper",
    website: "https://www.instamojo.com",
    documentation: "https://docs.instamojo.com",
    apiDocs: "https://docs.instamojo.com/reference/getting-started",
    dashboard: "https://www.instamojo.com/dashboard",
    businessModels: ["Freelancers", "Small Business", "E-commerce"],
    setupGuide: "https://docs.instamojo.com/docs/integration",
  },
  iyzipay: {
    name: "iyzico (Iyzipay)",
    type: "Payment Gateway",
    country: "Global (Turkey-based)",
    features: ["Payments", "Subscriptions", "Marketplace", "Wallets"],
    nodePackage: "iyzipay",
    npm: "npm install iyzipay",
    website: "https://www.iyzipay.com",
    documentation: "https://dev.iyzipay.com",
    apiDocs: "https://dev.iyzipay.com/api",
    dashboard: "https://merchant.iyzipay.com",
    businessModels: ["Marketplace", "E-commerce", "SaaS"],
  },
  stripe: {
    name: "Stripe",
    type: "Payment Gateway",
    country: "Global",
    features: ["Payments", "Subscriptions", "Connect", "Billing"],
    nodePackage: "stripe",
    npm: "npm install stripe",
    website: "https://stripe.com",
    documentation: "https://stripe.com/docs",
    apiDocs: "https://stripe.com/docs/api",
    dashboard: "https://dashboard.stripe.com",
    businessModels: ["All"],
  },
};

export const infrastructureLibraries = {
  proxmox: {
    name: "Proxmox Virtual Environment",
    type: "Infrastructure & Virtualization",
    description: "Open-source virtualization platform for servers",
    website: "https://www.proxmox.com",
    documentation: "https://pve.proxmox.com/wiki",
    apiDocs: "https://pve.proxmox.com/pve-docs/api-viewer/",
    apiReference: "https://pve.proxmox.com/wiki/Proxmox_VE_API",
    sourceCode: "https://github.com/proxmox/proxmox",
    gitLab: "https://git.proxmox.com/proxmox/proxmox",
    forum: "https://forum.proxmox.com",
    nodes: [
      {
        name: "Proxmox Client Library (Node.js)",
        npm: "proxmox-ve",
        setup: "npm install proxmox-ve",
        documentation: "https://www.npmjs.com/package/proxmox-ve",
        github: "https://github.com/proxmox-community/node-proxmox",
      },
      {
        name: "Proxmox API Client",
        npm: "proxmox-ve-api",
        setup: "npm install proxmox-ve-api",
        documentation: "https://www.npmjs.com/package/proxmox-ve-api",
      },
      {
        name: "Axios Proxmox Wrapper",
        npm: "axios",
        setup: "npm install axios",
        documentation: "https://axios-http.com",
        note: "Use with Proxmox API directly",
        tutorialLink:
          "https://pve.proxmox.com/wiki/Proxmox_VE_API#Authentication",
      },
    ],
    features: [
      "Virtual Machines",
      "Containers (LXC)",
      "Storage Management",
      "Networking",
      "Clustering",
      "High Availability",
    ],
    apiEndpoints: [
      {
        path: "/api/version",
        method: "GET",
        description: "Get Proxmox version",
        docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
      },
      {
        path: "/nodes",
        method: "GET",
        description: "List nodes",
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
      {
        path: "/nodes/{node}/storage",
        method: "GET",
        description: "List storage",
        docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
      },
    ],
    setupGuide: "https://pve.proxmox.com/wiki/Installation",
    adminGuide: "https://pve.proxmox.com/wiki/Admin_Guide",
    clusterGuide: "https://pve.proxmox.com/wiki/Cluster_Manager",
    backupGuide: "https://pve.proxmox.com/wiki/Backup_and_Restore",
    networkingGuide: "https://pve.proxmox.com/wiki/Network_Configuration",
  },
};

export function getPaymentGatewayRecommendations(businessType) {
  return {
    ecommerce: {
      primary: ["Razorpay", "Cashfree"],
      secondary: ["PayU", "Stripe"],
      reason:
        "Full-featured payment processing with subscriptions and marketplace support",
    },
    saas: {
      primary: ["Razorpay", "Stripe"],
      secondary: ["Cashfree"],
      reason: "Subscription management and recurring billing",
    },
    marketplace: {
      primary: ["Razorpay", "Cashfree"],
      secondary: ["Stripe"],
      reason: "Payout support and commission management",
    },
    fintech: {
      primary: ["Razorpay", "Cashfree"],
      secondary: ["PayU"],
      reason:
        "Advanced features like virtual accounts, loans, and smart routing",
    },
    freelance: {
      primary: ["Instamojo", "Razorpay"],
      secondary: ["PayU"],
      reason: "Simple setup for creators and freelancers",
    },
  };
}

export function getProxmoxIntegrationGuide() {
  return {
    authentication: {
      title: "Proxmox API Authentication",
      methods: [
        {
          type: "Token Authentication (Recommended)",
          docs: "https://pve.proxmox.com/pve-docs/api-viewer/",
          example:
            "curl -X GET 'https://server:8006/api2/json/version' -H 'Authorization: PVEAPIToken=user@realm!tokenid=token'",
        },
        {
          type: "Password Authentication",
          docs: "https://pve.proxmox.com/wiki/Proxmox_VE_API#Authentication_using_token",
          example:
            "curl -d 'username=root@pam&password=password' POST /api2/json/access/ticket",
        },
      ],
      guideLink: "https://pve.proxmox.com/wiki/Proxmox_VE_API#Authentication",
    },
    commonTasks: {
      createVM: "https://pve.proxmox.com/pve-docs/api-viewer/",
      createContainer: "https://pve.proxmox.com/pve-docs/api-viewer/",
      manageBackups: "https://pve.proxmox.com/wiki/Backup_and_Restore",
      clustering: "https://pve.proxmox.com/wiki/Cluster_Manager",
      monitoring: "https://pve.proxmox.com/wiki/Admin_Guide#pvemon",
    },
    resources: {
      officialDocs: "https://pve.proxmox.com/wiki",
      apiViewer: "https://pve.proxmox.com/pve-docs/api-viewer/",
      forum: "https://forum.proxmox.com",
      github: "https://github.com/proxmox",
      gitLab: "https://git.proxmox.com/proxmox",
    },
  };
}

export function getIndianPaymentIntegrationExample() {
  return {
    razorpaySetup: {
      npm: "npm install razorpay express cors dotenv",
      docs: "https://razorpay.com/docs",
      code: `
// .env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

// server.js
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
app.post('/create-order', async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // in paise
    currency: 'INR',
    receipt: 'receipt#1',
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
});
`,
      dashboard: "https://dashboard.razorpay.com",
      apiDocs: "https://razorpay.com/docs/api",
      testCards: "https://razorpay.com/docs/payments/payments/test-data/",
    },
    payuSetup: {
      npm: "npm install payu-nodejs express cors dotenv",
      docs: "https://developer.payu.in/docs",
      dashboard: "https://app.payu.in",
      apiDocs: "https://developer.payu.in/docs/reference",
    },
    cashfreeSetup: {
      npm: "npm install cashfree-sdk express cors dotenv",
      docs: "https://docs.cashfree.com",
      dashboard: "https://merchant.cashfree.com",
      apiReference: "https://docs.cashfree.com/reference/payments-api",
    },
  };
}
