export function normalizeSearch(value = "") {
  return value.trim().replace(/[%_]/g, "");
}

export function required(value) {
  return typeof value === "string" && value.trim().length > 0;
}
