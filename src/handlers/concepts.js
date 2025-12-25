export function getConceptBreakdown(intent, userMessage = "") {
  const messageLower = String(userMessage ?? "").toLowerCase();
  if (intent === "express-rest-api") {
    return [
      {
        title: "Route → Controller → Service split",
        explanation:
          "Keep HTTP concerns (req/res) out of business logic. Controllers translate HTTP to service calls.",
        example: "Controller validates input, service does the work.",
        codeExample: `// controller
export async function createUser(req, res) {
  const input = createUserSchema.parse(req.body);
  const user = await userService.createUser(input);
  return res.status(201).json(user);
}`,
      },
      {
        title: "Request validation at the boundary (Zod)",
        explanation:
          "Validate and coerce inputs at the API boundary so downstream code can trust types/shapes.",
        example: "Fail fast with a 400 and a clear error.",
        codeExample: `import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});`,
      },
      {
        title: "Auth middleware pattern",
        explanation:
          "Protect routes by verifying a token once, then attaching the user context to the request.",
        example: "Auth middleware → protected handler.",
        codeExample: `export function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Missing token" });
  req.user = verifyJwt(token);
  next();
}`,
      },
    ];
  }

  if (intent === "react-spa") {
    return [
      {
        title: "Component + hook separation",
        explanation:
          "Put fetching/state logic in hooks; keep components focused on UI and rendering.",
        example: "UI reads from a hook; hook owns side effects.",
        codeExample: `function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then(r => r.json()),
  });
}`,
      },
      {
        title: "Form validation (React Hook Form + Zod)",
        explanation:
          "Use schema-driven validation so rules live in one place and stay consistent.",
        example: "Schema → resolver → typed form data.",
        codeExample: `const schema = z.object({ email: z.string().email() });
const form = useForm({ resolver: zodResolver(schema) });`,
      },
    ];
  }

  if (intent === "nextjs-fullstack") {
    return [
      {
        title: "Route Handler (API) concept",
        explanation:
          "Use Route Handlers for server-only logic like DB calls and validation.",
        example: "POST /api/resource validates, writes, returns JSON.",
        codeExample: `// app/api/users/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  const input = schema.parse(body);
  const user = await db.user.create({ data: input });
  return Response.json(user, { status: 201 });
}`,
      },
      {
        title: "Server Actions concept",
        explanation:
          "Server Actions move mutations closer to the UI without exposing extra endpoints.",
        example: "Form → action → DB write.",
        codeExample: `"use server";

export async function createUserAction(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  await db.user.create({ data: { email } });
}`,
      },
    ];
  }

  if (
    messageLower.includes("payment") ||
    messageLower.includes("payment gateway") ||
    messageLower.includes("razorpay") ||
    messageLower.includes("payu") ||
    messageLower.includes("cashfree") ||
    messageLower.includes("instamojo")
  ) {
    return [
      {
        title: "Payment order creation (server-side)",
        explanation:
          "Create payment intents/orders on the server only. Never expose secret keys to the browser.",
        example:
          "Client requests an order → server creates it → client completes checkout.",
        codeExample: `// server-only: create an order
app.post("/payments/order", async (req, res) => {
  const amount = Number(req.body.amount);
  const order = await gateway.createOrder({ amount, currency: "INR" });
  res.json({ orderId: order.id });
});`,
      },
      {
        title: "Webhook verification concept",
        explanation:
          "Treat webhooks as the source of truth. Verify signatures and make handlers idempotent.",
        example: "verify signature → check event → update DB.",
        codeExample: `app.post("/payments/webhook", rawBody, (req, res) => {
  verifySignature(req);
  handleEventIdempotently(req.body);
  res.sendStatus(200);
});`,
      },
    ];
  }

  if (
    messageLower.includes("proxmox") ||
    messageLower.includes("virtual machine") ||
    messageLower.includes("vm") ||
    messageLower.includes("virtualization") ||
    messageLower.includes("infrastructure")
  ) {
    return [
      {
        title: "API token auth concept",
        explanation:
          "Use Proxmox API tokens for automation. Keep tokens server-side and rotate regularly.",
        example: "Token header → call node list endpoint.",
        codeExample:
          `const headers = { Authorization: ` +
          "`PVEAPIToken=${process.env.PVE_TOKEN}`" +
          ` };
const nodes = await fetch("https://pve:8006/api2/json/nodes", { headers });`,
      },
      {
        title: "Provisioning workflow concept",
        explanation:
          "Provision resources asynchronously: create → poll task → persist result.",
        example: "Create VM returns task id; worker polls until done.",
        codeExample: `// enqueue provisioning job
await queue.add("provision", { userId, vmSpec });

// worker polls Proxmox task status until completion`,
      },
    ];
  }

  if (intent === "mern-project") {
    return [
      {
        title: "Database Design",
        explanation:
          "Design schemas before writing queries. Decide ownership, relationships, and indexing strategy.",
        example:
          "Think in terms of document shape, not tables. Decide what belongs together.",
      },
      {
        title: "Database Connection Pattern",
        explanation:
          "Connections should be initialized once and reused across the app.",
        example:
          "Export a single connection function and call it during app startup.",
      },
      {
        title: "Backend Architecture",
        explanation:
          "Separate routes, controllers, services, and models to keep logic maintainable.",
        example: "Controllers handle HTTP, services handle business logic.",
      },
      {
        title: "Authentication Flow",
        explanation:
          "Authentication should be stateless and handled via tokens.",
        example: "Login → verify → generate token → protect routes.",
      },
      {
        title: "CRUD Patterns",
        explanation:
          "CRUD should be predictable, validated, and authorization-aware.",
        example: "Never trust client input directly in database queries.",
      },
      {
        title: "React Structure",
        explanation: "Separate UI components from data-fetching logic.",
        example: "Side effects belong in hooks, not render logic.",
      },
    ];
  }

  return [];
}
