export function getConceptBreakdown(intent) {
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
