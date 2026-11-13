/**
 * Utility functions for text formatting, HTML stripping, and sanitization
 */

export function stripHtml(input?: string): string {
  if (!input) return "";
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F2FF}\u{2B50}\u{231A}-\u{23F3}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncateText(text: string, maxLength: number = 220): string {
  if (!text) return "";
  const cleaned = stripHtml(text);
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.slice(0, maxLength).trim() + "…";
}
