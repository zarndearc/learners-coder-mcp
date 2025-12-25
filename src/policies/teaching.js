export function enforceTeachingPolicy(intent) {
  if (intent.includes("full code") || intent.includes("complete project")) {
    return {
      blocked: true,
      message:
        "I won’t provide complete implementations. I’ll help you understand concepts, architecture, and patterns so you can build it yourself.",
    };
  }

  return { blocked: false };
}
