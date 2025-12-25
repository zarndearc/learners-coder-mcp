# MCP Agent - Payment Gateways & Infrastructure Support

Complete documentation for the enhanced MCP Learner's Coder with Indian Payment Gateway integration and Proxmox infrastructure support.

## 🎯 What's New

This enhanced version includes:

### ✅ Indian Payment Gateways

- **Razorpay** - 35% market share, most popular
- **PayU** - EMI support, established player
- **Cashfree** - Strong payouts, startup-friendly
- **Instamojo** - Simple setup for creators
- **Stripe** - Global payments

### ✅ Infrastructure Management

- **Proxmox VE** - Complete virtualization platform
- **KVM Virtual Machines** - Full hypervisor support
- **LXC Containers** - Lightweight containerization
- **Clustering** - High availability setup
- **Backup & Restore** - Automated backup solutions

### ✅ Complete Integration

- Payment gateway selection based on business type
- Automatic VM provisioning with payments
- Webhook handling for payment events
- Node.js API integration for all services

---

## 📚 Documentation Files

### 1. **PAYMENT_GATEWAYS.md**

Comprehensive guide for all payment solutions

- Individual gateway documentation
- Features comparison
- Environment setup
- Security best practices
- Webhook handling
- Testing credentials

### 2. **PAYMENT_INFRASTRUCTURE_EXAMPLES.md**

Real-world implementation examples

- E-commerce payment integration
- SaaS subscription setup
- Marketplace with payouts
- Freelancer platforms
- Proxmox cluster management
- Automated VM provisioning
- Backup automation
- Complete SaaS platform example

### 3. **QUICK_START_PAYMENTS.md** (This File)

Quick reference for common tasks

---

## 🚀 Quick Start

### 1. Payment Gateway Setup (Razorpay Example)

```bash
# Installation
npm install razorpay axios express dotenv
```

```javascript
// .env
RAZORPAY_KEY_ID = your_key_id;
RAZORPAY_KEY_SECRET = your_key_secret;

// server.js
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
app.post("/create-order", async (req, res) => {
  const order = await razorpay.orders.create({
    amount: req.body.amount * 100, // in paise
    currency: "INR",
    receipt: "receipt#1",
  });
  res.json(order);
});

// Verify payment
app.post("/verify-payment", async (req, res) => {
  const { orderId, paymentId, signature } = req.body;

  const crypto = require("crypto");
  const body = orderId + "|" + paymentId;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === signature) {
    res.json({ success: true });
  }
});
```

**Links:**

- Official Docs: https://razorpay.com/docs
- Setup Guide: https://razorpay.com/docs/payment-gateway/quickstart/
- API Reference: https://razorpay.com/docs/api
- Dashboard: https://dashboard.razorpay.com

---

### 2. Proxmox Infrastructure Setup

```bash
# Installation
npm install proxmox-ve axios express dotenv
```

```javascript
// .env
PROXMOX_HOST=your-proxmox-host:8006
PROXMOX_TOKEN=user@realm!token-name=token-value

// server.js
import axios from 'axios';

const proxmox = axios.create({
  baseURL: process.env.PROXMOX_HOST + '/api2/json',
  httpsAgent: { rejectUnauthorized: false } // Only for dev!
});

// List all nodes
app.get('/api/nodes', async (req, res) => {
  const nodes = await proxmox.get('/nodes', {
    headers: { 'Authorization': `PVEAPIToken=${process.env.PROXMOX_TOKEN}` }
  });
  res.json(nodes.data.data);
});

// Create VM
app.post('/api/create-vm', async (req, res) => {
  const vm = await proxmox.post('/nodes/pve/qemu', {
    vmid: req.body.vmid,
    name: req.body.name,
    memory: 2048,
    cores: 2,
  }, {
    headers: { 'Authorization': `PVEAPIToken=${process.env.PROXMOX_TOKEN}` }
  });
  res.json(vm.data);
});

// Get VM status
app.get('/api/vm/:vmid/status', async (req, res) => {
  const status = await proxmox.get(`/nodes/pve/qemu/${req.params.vmid}/status/current`, {
    headers: { 'Authorization': `PVEAPIToken=${process.env.PROXMOX_TOKEN}` }
  });
  res.json(status.data.data);
});
```

**Links:**

- Official Wiki: https://pve.proxmox.com/wiki
- API Viewer: https://pve.proxmox.com/pve-docs/api-viewer/
- Installation: https://pve.proxmox.com/wiki/Installation
- Admin Guide: https://pve.proxmox.com/wiki/Admin_Guide

---

### 3. Combined: Payment → Auto-Provision VM

```javascript
// When customer completes payment
app.post("/webhooks/razorpay", async (req, res) => {
  const { event, payload } = req.body;

  if (event === "payment.authorized") {
    const payment = payload.payment;
    const customerId = payment.receipt;

    // Create VM for customer
    const vm = await proxmox.post(
      "/nodes/pve/qemu",
      {
        vmid: parseInt(customerId),
        name: `customer-${customerId}`,
        memory: 2048,
        cores: 2,
      },
      {
        headers: { Authorization: `PVEAPIToken=${process.env.PROXMOX_TOKEN}` },
      }
    );

    // Store in database
    await db.subscriptions.create({
      customerId,
      vmId: vm.data.data,
      status: "active",
      startDate: new Date(),
    });

    // Send credentials to customer
    await sendEmail(payment.email, {
      vmId: vm.data.data,
      ipAddress: getVMIP(vm.data.data),
      password: generatePassword(),
    });
  }

  res.json({ success: true });
});
```

---

## 🔍 Payment Gateway Comparison

| Feature          | Razorpay       | PayU | Cashfree | Instamojo | Stripe |
| ---------------- | -------------- | ---- | -------- | --------- | ------ |
| Payments         | ✅             | ✅   | ✅       | ✅        | ✅     |
| Subscriptions    | ✅             | ✅   | ✅       | ✅        | ✅     |
| Payouts          | ✅ (RazorpayX) | ✅   | ✅       | ✅        | ✅     |
| EMI              | ✅             | ✅   | ✅       | ✅        | ❌     |
| Global           | Limited        | No   | No       | No        | ✅     |
| Setup Difficulty | Easy           | Easy | Easy     | Very Easy | Medium |
| Market Share     | 35%            | 20%  | 15%      | 8%        | Global |

---

## 📋 API Reference

### Razorpay

| Method | Endpoint               | Purpose                 |
| ------ | ---------------------- | ----------------------- |
| POST   | `/orders`              | Create payment order    |
| GET    | `/orders/:id`          | Get order details       |
| POST   | `/orders/:id/payments` | List payments for order |
| POST   | `/subscriptions`       | Create subscription     |
| GET    | `/subscriptions/:id`   | Get subscription status |

**Full API**: https://razorpay.com/docs/api

### Proxmox

| Method | Endpoint                                   | Purpose            |
| ------ | ------------------------------------------ | ------------------ |
| GET    | `/nodes`                                   | List cluster nodes |
| GET    | `/nodes/{node}/qemu`                       | List VMs           |
| POST   | `/nodes/{node}/qemu`                       | Create VM          |
| GET    | `/nodes/{node}/qemu/{vmid}/status/current` | Get VM status      |
| POST   | `/nodes/{node}/qemu/{vmid}/status/start`   | Start VM           |
| POST   | `/nodes/{node}/qemu/{vmid}/status/stop`    | Stop VM            |
| POST   | `/nodes/{node}/qemu/{vmid}/status/backup`  | Backup VM          |

**Full API**: https://pve.proxmox.com/pve-docs/api-viewer/

---

## 🔐 Security Best Practices

### Payment Gateway Security

- ✅ Never expose API keys in frontend
- ✅ Use environment variables for all credentials
- ✅ Verify webhook signatures on backend
- ✅ Use HTTPS for all payment endpoints
- ✅ Implement idempotent requests
- ✅ Handle retries with exponential backoff
- ✅ Log transactions securely
- ✅ Rotate API keys periodically
- ✅ Comply with PCI DSS standards
- ✅ Validate all inputs server-side

### Proxmox Security

- ✅ Use API tokens instead of passwords
- ✅ Restrict token permissions (read-only for monitoring)
- ✅ Use HTTPS/TLS for all connections
- ✅ Keep Proxmox updated
- ✅ Regular backups
- ✅ Monitor access logs
- ✅ Use strong SSH keys
- ✅ Network isolation for management interface

**PCI DSS Standards**: https://www.pcisecuritystandards.org

---

## 📞 Support & Resources

### Official Links

**Razorpay**

- Website: https://razorpay.com
- Docs: https://razorpay.com/docs
- API Docs: https://razorpay.com/docs/api
- Dashboard: https://dashboard.razorpay.com
- Support: https://razorpay.com/support

**PayU**

- Website: https://payu.in
- Docs: https://developer.payu.in/docs
- API Docs: https://developer.payu.in/docs/reference
- Dashboard: https://app.payu.in

**Cashfree**

- Website: https://www.cashfree.com
- Docs: https://docs.cashfree.com
- API Docs: https://docs.cashfree.com/reference
- Dashboard: https://merchant.cashfree.com

**Instamojo**

- Website: https://www.instamojo.com
- Docs: https://docs.instamojo.com
- Dashboard: https://dashboard.instamojo.com

**Stripe**

- Website: https://stripe.com
- Docs: https://stripe.com/docs
- API Docs: https://stripe.com/docs/api
- Dashboard: https://dashboard.stripe.com

**Proxmox**

- Website: https://www.proxmox.com
- Wiki: https://pve.proxmox.com/wiki
- API Docs: https://pve.proxmox.com/pve-docs/api-viewer/
- Forum: https://forum.proxmox.com
- GitHub: https://github.com/proxmox

---

## 🧪 Testing

### Test Credentials

**Razorpay**

- Test Mode Cards: https://razorpay.com/docs/payments/payments/test-data/
- Card: 4111111111111111
- OTP: 123456

**PayU**

- Test Setup: https://developer.payu.in/docs/test-integration

**Cashfree**

- Test Mode: https://docs.cashfree.com/docs/payments/testing

**Proxmox**

- Demo: https://demo.proxmox.com
- Username: root
- Password: cognition

---

## 🎓 Learning Path

### For Payment Gateways

1. Choose gateway (Start with Razorpay)
2. Create test account
3. Generate API credentials
4. Implement order creation
5. Implement payment verification
6. Add webhook handling
7. Deploy to production

### For Proxmox Infrastructure

1. Install Proxmox locally or on hardware
2. Access Web UI
3. Create first VM
4. Set up networking
5. Configure storage
6. Learn clustering
7. Automate with API

### For Combined System

1. Build payment collection (Razorpay)
2. Set up Proxmox cluster
3. Create VM provisioning script
4. Integrate webhook handlers
5. Test end-to-end
6. Deploy to production

---

## 📞 Integration Support

All documentation files include:

- ✅ Official documentation links
- ✅ API reference links
- ✅ Dashboard/console links
- ✅ GitHub repository links
- ✅ Setup guide links
- ✅ Example code
- ✅ Testing credentials
- ✅ Security best practices

For implementation help:

1. Check PAYMENT_GATEWAYS.md for detailed guides
2. Check PAYMENT_INFRASTRUCTURE_EXAMPLES.md for real examples
3. Visit official documentation links
4. Ask the MCP agent for specific use cases

---

## 🗂️ File Structure

```
src/
  handlers/
    payments.js          # Payment gateway & Proxmox data
    intent.js            # Intent recognition (includes payment/infrastructure)
    tools.js             # Tool recommendations (includes payment/proxmox tools)

docs/
  PAYMENT_GATEWAYS.md   # Complete payment gateway guide
  PAYMENT_INFRASTRUCTURE_EXAMPLES.md  # Real-world examples
```

---

## ✨ Features

- **150+ Libraries** in knowledge base
- **25+ Intent Types** including payment & infrastructure
- **8+ Tech Stacks** with company-grade recommendations
- **5 Payment Gateways** with full documentation
- **Proxmox Infrastructure** complete with API endpoints
- **Helper Functions** for recommendations
- **Real-world Examples** for payment & infrastructure
- **All Links Included** to official documentation

---

## 🚀 Next Steps

1. **For Payments**: Read PAYMENT_GATEWAYS.md
2. **For Infrastructure**: Read Proxmox section in PAYMENT_GATEWAYS.md
3. **For Examples**: See PAYMENT_INFRASTRUCTURE_EXAMPLES.md
4. **For Implementation**: Visit official documentation links
5. **For Help**: Ask the MCP agent your specific use case

---

**Version**: 2.0  
**Last Updated**: 2024  
**Maintained By**: Learner's Coder MCP Team

---

## 📱 Quick Links Summary

### Payment Gateways (India)

- Razorpay: https://razorpay.com/docs
- PayU: https://developer.payu.in/docs
- Cashfree: https://docs.cashfree.com
- Instamojo: https://docs.instamojo.com

### Infrastructure

- Proxmox: https://pve.proxmox.com/wiki
- Proxmox API: https://pve.proxmox.com/pve-docs/api-viewer/

### Node.js Packages

- Razorpay: https://www.npmjs.com/package/razorpay
- Proxmox: https://www.npmjs.com/package/proxmox-ve
- Axios: https://www.npmjs.com/package/axios
