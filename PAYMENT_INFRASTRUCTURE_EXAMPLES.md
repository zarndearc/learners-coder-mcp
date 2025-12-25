# Payment Gateway & Infrastructure Integration Examples

## Payment Gateway Example Queries

### 1. E-Commerce Payment Gateway Setup

**User Query:**

```
I'm building an e-commerce website with React and Express.
I need to integrate a payment gateway for Indian customers.
What should I use?
```

**Agent Response:**

```
For e-commerce in India, I recommend:

1. **Primary Choice: Razorpay**
   - Market Share: 35% (Most popular)
   - Features: Full-featured, great for high volume
   - Setup: npm install razorpay
   - Docs: https://razorpay.com/docs
   - Dashboard: https://dashboard.razorpay.com

2. **Alternative: Cashfree**
   - Good payout support
   - Startup-friendly
   - Docs: https://docs.cashfree.com

Setup Code:
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

Resources:
- Full Guide: https://razorpay.com/docs/payment-gateway/quickstart/
- Test Cards: https://razorpay.com/docs/payments/payments/test-data/
```

---

### 2. SaaS Subscription Payment Integration

**User Query:**

```
I'm building a SaaS product with Node.js.
I need subscription/recurring payment support.
Which payment gateway should I use?
```

**Agent Response:**

```
For SaaS with recurring billing:

1. **Best Option: Razorpay**
   - Subscription Management: ✓
   - Automatic Renewals: ✓
   - Customer Portal: ✓
   - Docs: https://razorpay.com/docs/subscriptions/

2. **Alternative: Stripe**
   - Most powerful for billing
   - Global support
   - Docs: https://stripe.com/docs/billing/

Installation:
npm install razorpay express

Setup:
const subscription = await razorpay.subscriptions.create({
  plan_id: 'plan_123',
  customer_notify: 1,
  quantity: 1,
  total_count: 12,
  addons_items: [
    {
      item: {
        name: 'Extra Users',
        quantity: 5,
        amount: 10000
      }
    }
  ]
});

Resources:
- Subscription Guide: https://razorpay.com/docs/subscriptions/
- Pricing Plans: https://razorpay.com/docs/subscriptions/manage-plans/
```

---

### 3. Marketplace Payment Gateway with Payouts

**User Query:**

```
I'm building a marketplace where sellers need to get paid.
What payment gateway supports payouts?
```

**Agent Response:**

```
For Marketplace with Seller Payouts:

1. **Best Option: Razorpay**
   - RazorpayX for payouts
   - Commission management
   - Seller settlements
   - Docs: https://razorpay.com/docs/razorpayx/

2. **Alternative: Cashfree**
   - Strong payout engine
   - Multi-level payouts
   - Docs: https://docs.cashfree.com/docs/payouts/

Architecture:
Customer Payment → Razorpay → Your Escrow → Seller Payout

Implementation:
// Customer pays
const order = await razorpay.orders.create({ amount, currency });

// Seller gets paid (after commission deduction)
const payout = await razorpay.payouts.create({
  account_number: 'seller_account',
  amount: settledAmount,
  currency: 'INR'
});

Resources:
- Razorpay Payouts: https://razorpay.com/docs/razorpayx/payouts/
- Commission Structure: https://razorpay.com/docs/razorpayx/smart-routing/
```

---

### 4. Freelancer Payment Collection

**User Query:**

```
I'm building a platform for freelancers to get paid for their work.
I want something simple to set up.
```

**Agent Response:**

```
For Freelancer Platforms (Simple Setup):

1. **Best Option: Instamojo**
   - Super simple setup
   - Creator-friendly
   - Good for freelancers
   - Docs: https://docs.instamojo.com

2. **Alternative: Razorpay**
   - More features
   - Better for scaling
   - Docs: https://razorpay.com/docs

Quick Setup:
npm install instamojo-wrapper

const Instamojo = require('instamojo-wrapper');
const api = new Instamojo(
  process.env.INSTAMOJO_API_KEY,
  process.env.INSTAMOJO_AUTH_TOKEN
);

api.paymentRequestCreate({
  purpose: 'Freelance Project',
  amount: '5000',
  buyer_name: 'Client Name',
  email: 'client@example.com'
}, (error, response) => {
  if (!error) console.log(response.payment_url);
});

Resources:
- Getting Started: https://docs.instamojo.com/docs/getting-started
- API Docs: https://docs.instamojo.com/docs/payments
```

---

## Infrastructure Examples

### 1. Proxmox Cluster Setup

**User Query:**

```
I want to set up a Proxmox cluster for my application.
I have 3 servers. How do I manage them with Node.js?
```

**Agent Response:**

```
Proxmox Cluster Setup Guide

1. **Physical Setup**
   - Install Proxmox on all 3 servers
   - Guide: https://pve.proxmox.com/wiki/Installation

2. **Create Cluster**
   - Guide: https://pve.proxmox.com/wiki/Cluster_Manager
   - Create cluster on first node
   - Join other nodes

3. **Node.js Management**

Installation:
npm install proxmox-ve axios express

Code:
import axios from 'axios';

const proxmox = axios.create({
  baseURL: 'https://proxmox-host:8006/api2/json',
  httpsAgent: { rejectUnauthorized: false }
});

// List all nodes in cluster
const nodes = await proxmox.get('/nodes', {
  headers: { 'Authorization': 'PVEAPIToken=user@realm!token-name=token' }
});

console.log('Nodes:', nodes.data.data);

Resources:
- Cluster Guide: https://pve.proxmox.com/wiki/Cluster_Manager
- High Availability: https://pve.proxmox.com/wiki/High_Availability
- API Reference: https://pve.proxmox.com/pve-docs/api-viewer/
```

---

### 2. Automatic VM Provisioning with Node.js

**User Query:**

```
I want to automatically create virtual machines in Proxmox
when customers sign up. How do I do this with Node.js?
```

**Agent Response:**

```
Automated VM Provisioning Architecture

1. **Setup Proxmox API Token**
   - Web UI: Datacenter → Permissions → API Tokens
   - Save to .env file

2. **Node.js Implementation**

Installation:
npm install proxmox-ve axios express

Code:
import axios from 'axios';

const proxmox = axios.create({
  baseURL: 'https://proxmox:8006/api2/json',
  httpsAgent: { rejectUnauthorized: false }
});

async function createVM(vmId, customerName) {
  const token = process.env.PROXMOX_TOKEN;

  const vmConfig = {
    vmid: vmId,
    name: \`customer-\${customerName}\`,
    memory: 2048,
    cores: 2,
    sockets: 1,
    osimage: 'local:vm-ubuntu-20.04-x64',
    net0: 'virtio,bridge=vmbr0'
  };

  const response = await proxmox.post(
    \`/nodes/pve/qemu\`,
    vmConfig,
    { headers: { 'Authorization': \`PVEAPIToken=\${token}\` } }
  );

  return response.data;
}

// When customer signs up
app.post('/api/signup', async (req, res) => {
  const customer = req.body;

  // Create VM
  const vm = await createVM(customer.id, customer.name);

  // Save to database
  await db.customers.create({
    name: customer.name,
    vmId: customer.id,
    proxmoxVmId: vm.data
  });

  res.json({ success: true, vmId: customer.id });
});

Resources:
- API Reference: https://pve.proxmox.com/pve-docs/api-viewer/
- QEMU/VM Creation: https://pve.proxmox.com/pve-docs/api-viewer/#/nodes/{node}/qemu
```

---

### 3. Proxmox Backup Automation

**User Query:**

```
I need to automatically backup customer VMs in Proxmox.
How do I set this up?
```

**Agent Response:**

```
Automated Proxmox Backup Setup

1. **Using Proxmox Web UI**
   - GUI: Go to Datacenter → Backup
   - Create backup schedule
   - Guide: https://pve.proxmox.com/wiki/Backup_and_Restore

2. **Using Node.js API**

Code:
async function createBackup(nodeId, vmId) {
  const response = await proxmox.post(
    \`/nodes/\${nodeId}/qemu/\${vmId}/status/backup\`,
    {
      'backup-id': \`backup-\${Date.now()}\`,
      storage: 'backups'
    },
    { headers: { 'Authorization': \`PVEAPIToken=\${token}\` } }
  );

  return response.data;
}

// Schedule daily backups
setInterval(async () => {
  const vms = await getCustomerVMs();

  for (const vm of vms) {
    await createBackup('node1', vm.vmid);
    console.log(\`Backup created for VM \${vm.vmid}\`);
  }
}, 24 * 60 * 60 * 1000); // Daily

Resources:
- Backup Guide: https://pve.proxmox.com/wiki/Backup_and_Restore
- API: https://pve.proxmox.com/pve-docs/api-viewer/
```

---

## Combined Architecture: Payments + Infrastructure

### Complete SaaS Platform Example

**Scenario:**

```
Building a SaaS where:
- Users pay via Razorpay
- Get automatic VM provisioning on Proxmox
- Run their applications
```

**Architecture Flow:**

```
1. User Signup (Landing Page)
   ↓
2. Payment via Razorpay
   ↓
3. Payment Verification (Webhook)
   ↓
4. Proxmox VM Creation
   ↓
5. DNS Configuration
   ↓
6. Send Credentials to User
   ↓
7. User Can Access Their VM
```

**Implementation:**

```javascript
// 1. Setup
npm install razorpay axios express dotenv

// 2. Create Order
app.post('/api/signup', async (req, res) => {
  const { email, plan } = req.body;

  // Create Razorpay order
  const order = await razorpay.orders.create({
    amount: getPlanPrice(plan) * 100,
    currency: 'INR',
    receipt: email
  });

  res.json({ orderId: order.id });
});

// 3. Verify Payment
app.post('/api/verify-payment', async (req, res) => {
  const { orderId, paymentId, signature } = req.body;

  // Verify signature
  const isValid = verifySignature(orderId, paymentId, signature);

  if (isValid) {
    // 4. Create Proxmox VM
    const vm = await createVM(orderId, email);

    // 5. Save to database
    await db.subscriptions.create({
      email,
      plan,
      vmId: vm.id,
      status: 'active'
    });

    // 6. Send credentials
    await sendEmail(email, {
      vmId: vm.id,
      ipAddress: vm.ip,
      password: vm.password
    });

    res.json({ success: true });
  }
});

// 7. Webhook Handler (Razorpay)
app.post('/webhooks/razorpay', async (req, res) => {
  const { event, payload } = req.body;

  if (event === 'payment.authorized') {
    const payment = payload.payment;

    // Webhook verification
    if (verifyWebhookSignature(req.body)) {
      // Create VM if not already created
      const subscription = await db.subscriptions.findOne({
        paymentId: payment.id
      });

      if (!subscription.vmId) {
        const vm = await createVM(payment.receipt);
        await db.subscriptions.updateOne(
          { paymentId: payment.id },
          { vmId: vm.id }
        );
      }
    }
  }

  res.json({ success: true });
});
```

**Resources:**

- Razorpay Webhooks: https://razorpay.com/docs/webhooks/
- Proxmox API: https://pve.proxmox.com/pve-docs/api-viewer/
- Complete Guide: PAYMENT_GATEWAYS.md

---

## Quick Reference Links

### Indian Payment Gateways

- **Razorpay**: https://razorpay.com → https://dashboard.razorpay.com
- **PayU**: https://payu.in → https://app.payu.in
- **Cashfree**: https://www.cashfree.com → https://merchant.cashfree.com
- **Instamojo**: https://www.instamojo.com → https://dashboard.instamojo.com

### Infrastructure

- **Proxmox Home**: https://www.proxmox.com
- **Proxmox Wiki**: https://pve.proxmox.com/wiki
- **Proxmox API**: https://pve.proxmox.com/pve-docs/api-viewer/
- **Proxmox Forum**: https://forum.proxmox.com

### Node.js Packages

- **Razorpay SDK**: https://www.npmjs.com/package/razorpay
- **Proxmox Node.js**: https://www.npmjs.com/package/proxmox-ve
- **Axios**: https://www.npmjs.com/package/axios

---

## Testing Credentials

### Razorpay Test Mode

- **Test Cards**: https://razorpay.com/docs/payments/payments/test-data/
- **Dashboard**: https://dashboard.razorpay.com (Switch to Test Mode)
- **Card**: 4111111111111111
- **OTP**: 123456

### PayU Test Mode

- **Test Credentials**: https://developer.payu.in/docs/test-integration
- **Dashboard**: https://app.payu.in (Sandbox mode)

### Proxmox Local Testing

- **Install Locally**: https://pve.proxmox.com/wiki/Installation
- **Or Use Demo**: https://demo.proxmox.com (Username: root, Password: cognition)

---

**Last Updated**: 2024
**For Latest Docs**: Visit official websites of each service
