# Payment Gateways & Infrastructure Integration Guide

## 🇮🇳 Indian Payment Gateways

This guide covers modern payment gateway integrations for Indian businesses and enterprises.

### Quick Comparison

| Gateway       | Market Share | Best For              | Setup Difficulty |
| ------------- | ------------ | --------------------- | ---------------- |
| **Razorpay**  | 35%          | All businesses        | Easy             |
| **PayU**      | 20%          | E-commerce, EMI       | Easy             |
| **Cashfree**  | 15%          | Startups, Payouts     | Easy             |
| **Instamojo** | 8%           | Freelancers, Creators | Very Easy        |
| **Stripe**    | Global       | International         | Medium           |

---

## 1. Razorpay

### Key Information

- **Website**: https://razorpay.com
- **Documentation**: https://razorpay.com/docs
- **API Reference**: https://razorpay.com/docs/api
- **Dashboard**: https://dashboard.razorpay.com
- **Support**: https://razorpay.com/support

### Features

✅ Payments  
✅ Subscriptions  
✅ Invoicing  
✅ Payouts (RazorpayX)  
✅ Virtual Accounts  
✅ Loans

### Installation

```bash
npm install razorpay axios express
```

### Quick Setup

```javascript
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create an order
const order = await razorpay.orders.create({
  amount: 50000, // ₹500 in paise
  currency: "INR",
  receipt: "receipt#1",
  description: "Purchase Shoes",
});
```

### Testing

- **Test Cards**: https://razorpay.com/docs/payments/payments/test-data/
- **Test Account**: https://dashboard.razorpay.com

### Resources

- **Integration Guide**: https://razorpay.com/docs/payment-gateway/quickstart/
- **Webhook Documentation**: https://razorpay.com/docs/webhooks/
- **GitHub**: https://github.com/razorpay/razorpay-node

---

## 2. PayU

### Key Information

- **Website**: https://payu.in
- **Developer Portal**: https://developer.payu.in
- **API Reference**: https://developer.payu.in/docs/reference
- **Dashboard**: https://app.payu.in
- **Support**: https://support.payu.in

### Features

✅ Payments  
✅ EMI Options  
✅ Subscriptions  
✅ Payment Links  
✅ Virtual Accounts

### Installation

```bash
npm install payu-nodejs express axios
```

### Quick Setup

```javascript
const PayUConfig = {
  merchantKey: process.env.PAYU_MERCHANT_KEY,
  merchantSalt: process.env.PAYU_MERCHANT_SALT,
  testMode: false,
};

// Generate payment form
const paymentOptions = {
  amount: "500",
  firstname: "John",
  email: "john@example.com",
  productinfo: "Shoes",
  phone: "9999999999",
};
```

### Testing

- **Test Integration**: https://developer.payu.in/docs/test-integration
- **Test Credentials**: Available in sandbox dashboard

### Resources

- **Integration Guide**: https://developer.payu.in/docs/integration/payment-gateway/
- **Webhook Documentation**: https://developer.payu.in/docs/webhooks
- **API Documentation**: https://developer.payu.in/docs/reference

---

## 3. Cashfree

### Key Information

- **Website**: https://www.cashfree.com
- **Documentation**: https://docs.cashfree.com
- **API Reference**: https://docs.cashfree.com/reference/payments-api
- **Dashboard**: https://merchant.cashfree.com
- **Support**: https://support.cashfree.com

### Features

✅ Payments  
✅ Payouts  
✅ Subscriptions  
✅ Smart Routing  
✅ Payment Links  
✅ Analytics

### Installation

```bash
npm install cashfree-sdk axios express
```

### Quick Setup

```javascript
import { Cashfree } from "cashfree-sdk";

const cashfree = new Cashfree({
  merchantId: process.env.CASHFREE_MERCHANT_ID,
  secretKey: process.env.CASHFREE_SECRET_KEY,
});

// Create order
const order = await cashfree.orders.create({
  order_amount: 500,
  order_currency: "INR",
  order_id: "order_1234",
  customer_details: {
    customer_name: "John Doe",
    customer_email: "john@example.com",
    customer_phone: "9999999999",
  },
});
```

### Testing

- **Testing Guide**: https://docs.cashfree.com/docs/testing
- **Test Data**: Available in sandbox

### Resources

- **Quick Start**: https://docs.cashfree.com/docs/payments/quickstart
- **Integration Guide**: https://docs.cashfree.com/docs/payments/integration-guide
- **Webhook Documentation**: https://docs.cashfree.com/docs/webhooks

---

## 4. Instamojo

### Key Information

- **Website**: https://www.instamojo.com
- **Documentation**: https://docs.instamojo.com
- **API Reference**: https://docs.instamojo.com/docs/payments
- **Dashboard**: https://dashboard.instamojo.com

### Features

✅ Payments  
✅ Invoicing  
✅ Payment Links  
✅ Marketplace  
✅ Payouts

### Installation

```bash
npm install instamojo-wrapper axios express
```

### Resources

- **Getting Started**: https://docs.instamojo.com/docs/getting-started
- **API Documentation**: https://docs.instamojo.com/docs/payments
- **Webhooks**: https://docs.instamojo.com/docs/webhooks

---

## 5. Stripe (Global Payments)

### Key Information

- **Website**: https://stripe.com
- **Documentation**: https://stripe.com/docs
- **API Reference**: https://stripe.com/docs/api
- **Dashboard**: https://dashboard.stripe.com

### Features (Global)

✅ Payments  
✅ Subscriptions  
✅ Billing  
✅ Connect (Marketplace)  
✅ Fraud Detection (Radar)

### Installation

```bash
npm install stripe axios express
```

### Resources

- **Setup Guide**: https://stripe.com/docs/payments/quickstart
- **Testing**: https://stripe.com/docs/testing
- **Integration**: https://stripe.com/docs/payments/integration-builder

---

## Environment Setup

Create `.env` file with credentials:

```env
# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# PayU
PAYU_MERCHANT_KEY=your_merchant_key
PAYU_MERCHANT_SALT=your_merchant_salt

# Cashfree
CASHFREE_MERCHANT_ID=your_merchant_id
CASHFREE_SECRET_KEY=your_secret_key

# Instamojo
INSTAMOJO_API_KEY=your_api_key
INSTAMOJO_AUTH_TOKEN=your_auth_token

# Stripe
STRIPE_API_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

## Security Best Practices

1. ✅ **Never expose API keys** in frontend code
2. ✅ **Use environment variables** for all credentials
3. ✅ **Verify webhook signatures** server-side
4. ✅ **Use HTTPS** for all payment endpoints
5. ✅ **Implement idempotent** requests
6. ✅ **Handle retries** with exponential backoff
7. ✅ **Log transactions** securely
8. ✅ **Rotate API keys** periodically
9. ✅ **Comply with PCI DSS** standards
10. ✅ **Validate all inputs** server-side

---

## Webhook Handling

### Razorpay

- **Docs**: https://razorpay.com/docs/webhooks/
- **Signature Verification**: https://razorpay.com/docs/webhooks/verify/

### PayU

- **Docs**: https://developer.payu.in/docs/webhooks

### Cashfree

- **Docs**: https://docs.cashfree.com/docs/webhooks

### Instamojo

- **Docs**: https://docs.instamojo.com/docs/webhooks

---

# 🖥️ Infrastructure with Proxmox

## Proxmox Virtual Environment

### Key Information

- **Website**: https://www.proxmox.com
- **Documentation**: https://pve.proxmox.com/wiki
- **API Viewer**: https://pve.proxmox.com/pve-docs/api-viewer/
- **Forum**: https://forum.proxmox.com
- **Community**: https://github.com/proxmox

### What is Proxmox?

Proxmox Virtual Environment is a complete, open-source platform for enterprise virtualization. It combines:

- **KVM Hypervisor** for virtual machines
- **LXC/LXD** for lightweight containers
- **Enterprise Features**: Clustering, HA, Storage management

### Installation

- **Guide**: https://pve.proxmox.com/wiki/Installation
- **System Requirements**: https://pve.proxmox.com/wiki/Installation#System_Requirements
- **Network Configuration**: https://pve.proxmox.com/wiki/Network_Configuration

### Node.js Integration

#### Installation

```bash
npm install proxmox-ve axios express dotenv
```

#### Basic Setup

```javascript
import axios from "axios";

const proxmoxAPI = axios.create({
  baseURL: "https://your-proxmox-host:8006/api2/json",
  httpsAgent: { rejectUnauthorized: false }, // Only for testing!
});

// Get API token from Proxmox
const token = "user@realm!token-name=token-value";

// List all nodes
const response = await proxmoxAPI.get("/nodes", {
  headers: { Authorization: `PVEAPIToken=${token}` },
});

console.log(response.data.data);
```

### Common API Endpoints

| Task            | Endpoint                                   | Method | Docs                                                    |
| --------------- | ------------------------------------------ | ------ | ------------------------------------------------------- |
| Get Version     | `/api/version`                             | GET    | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| List Nodes      | `/nodes`                                   | GET    | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| List VMs        | `/nodes/{node}/qemu`                       | GET    | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| List Containers | `/nodes/{node}/lxc`                        | GET    | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| Get VM Status   | `/nodes/{node}/qemu/{vmid}/status/current` | GET    | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| Start VM        | `/nodes/{node}/qemu/{vmid}/status/start`   | POST   | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| Stop VM         | `/nodes/{node}/qemu/{vmid}/status/stop`    | POST   | [Link](https://pve.proxmox.com/pve-docs/api-viewer/)    |
| Create Backup   | `/nodes/{node}/qemu/{vmid}/status/backup`  | POST   | [Link](https://pve.proxmox.com/wiki/Backup_and_Restore) |

### Documentation Resources

**Core Documentation**

- **Admin Guide**: https://pve.proxmox.com/wiki/Admin_Guide
- **API Documentation**: https://pve.proxmox.com/pve-docs/api-viewer/

**Advanced Topics**

- **Clustering**: https://pve.proxmox.com/wiki/Cluster_Manager
- **High Availability**: https://pve.proxmox.com/wiki/High_Availability
- **Backup & Restore**: https://pve.proxmox.com/wiki/Backup_and_Restore
- **Storage**: https://pve.proxmox.com/wiki/Storage
- **Networking**: https://pve.proxmox.com/wiki/Network_Configuration
- **Ceph Integration**: https://pve.proxmox.com/wiki/Ceph

### Authentication Methods

#### 1. API Token (Recommended)

```bash
# Create token in Proxmox Web UI:
# Datacenter → Permissions → API Tokens
# Store safely in environment variables
```

#### 2. Password Authentication

```javascript
// Get ticket first
const ticketResponse = await proxmoxAPI.post("/access/ticket", {
  username: "root@pam",
  password: process.env.PROXMOX_PASSWORD,
});

const ticket = ticketResponse.data.data.ticket;
```

### Node.js Packages

| Package        | NPM                      | Purpose                                                                  |
| -------------- | ------------------------ | ------------------------------------------------------------------------ |
| **proxmox-ve** | `npm install proxmox-ve` | [Proxmox API Wrapper](https://github.com/proxmox-community/node-proxmox) |
| **axios**      | `npm install axios`      | HTTP client for direct API calls                                         |
| **express**    | `npm install express`    | Build management dashboard                                               |
| **dotenv**     | `npm install dotenv`     | Environment variable management                                          |

### Learning Path

1. **Start**: Installation & Web UI - https://pve.proxmox.com/wiki/Installation
2. **Learn**: Admin Guide - https://pve.proxmox.com/wiki/Admin_Guide
3. **Create**: First VM/Container - https://pve.proxmox.com/wiki/Qemu
4. **Backup**: Setup Backups - https://pve.proxmox.com/wiki/Backup_and_Restore
5. **Scale**: Clustering - https://pve.proxmox.com/wiki/Cluster_Manager
6. **Automate**: Use API - https://pve.proxmox.com/pve-docs/api-viewer/

---

## Combining Payments + Infrastructure

### Architecture Example

```
┌─────────────────────┐
│   Payment Gateway   │ (Razorpay/PayU/etc)
│   (SaaS)            │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  Your App Server    │ (Express.js)
│  (Running on        │
│   Proxmox VM)       │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│  Proxmox Host       │
│  - VMs              │
│  - Containers       │
│  - Load Balancer    │
└─────────────────────┘
```

### Stack Recommendation

**Development**

- Payment: Razorpay (Test Mode)
- Infrastructure: Proxmox VE (Local)
- Database: PostgreSQL (Container)
- Caching: Redis (Container)

**Production**

- Payment: Razorpay + Stripe (Backup)
- Infrastructure: Proxmox Cluster (3+ nodes)
- Database: PostgreSQL (Replicated)
- Caching: Redis (Cluster)
- CDN: Cloudflare or AWS CloudFront
- Monitoring: Prometheus + Grafana

---

## Useful Links

### Payment Gateway Resources

- Razorpay: https://razorpay.com/docs
- PayU: https://developer.payu.in/docs
- Cashfree: https://docs.cashfree.com
- Instamojo: https://docs.instamojo.com
- Stripe: https://stripe.com/docs

### Infrastructure Resources

- Proxmox Wiki: https://pve.proxmox.com/wiki
- Proxmox API: https://pve.proxmox.com/pve-docs/api-viewer/
- Proxmox Forum: https://forum.proxmox.com
- GitHub: https://github.com/proxmox

### Security & Compliance

- PCI DSS Standards: https://www.pcisecuritystandards.org
- OWASP Payment Integration: https://owasp.org/www-community/attacks

---

**Last Updated**: 2024  
**Version**: 1.0
