export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

export function splitTokens(value?: string): string[] {
  return (value || "")
    .split(/\s+/)
    .map((token) => normalize(token))
    .filter(Boolean);
}
