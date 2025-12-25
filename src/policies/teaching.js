export function enforceTeachingPolicy(userMessage) {
  const text = String(userMessage ?? "").toLowerCase();

  // Default: teach with concepts + small snippets.
  // This keeps the agent focused on explaining patterns instead of dumping full project code.
  const policy = {
    blocked: false,
    mode: "concept-snippets",
    message:
      "I’ll provide concepts, architecture guidance, and small code snippets (not full apps) so you can build it yourself.",
  };

  // Explicitly asking for entire implementations/codebases.
  const wantsFullImplementation =
    text.includes("full code") ||
    text.includes("complete project") ||
    text.includes("entire project") ||
    text.includes("whole code") ||
    text.includes("full source") ||
    text.includes("complete app") ||
    text.includes("generate the entire") ||
    text.includes("give me all the code");

  if (wantsFullImplementation) {
    return {
      ...policy,
      // Don't hard-block the whole response; just enforce concept-only output.
      mode: "concept-snippets",
      message:
        "I won’t provide complete implementations. I’ll give you the concepts, architecture, and a few focused snippets for each part.",
    };
  }

  return policy;
}
