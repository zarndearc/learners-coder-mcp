export function generateClarifyingQuestions(intent) {
  if (intent === "mern-project") {
    return [
      "Will data be user-specific or shared?",
      "Do you need authentication from day one?",
      "Should records be permanently deleted or soft-deleted?",
      "Do you expect this to scale beyond a single user?",
    ];
  }

  return [];
}
