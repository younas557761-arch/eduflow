export function rowsToCsv(rows) {
  if (!rows?.length) return "";
  const columns = Object.keys(rows[0]);
  const escape = (v) => `"${String(v ?? "").replaceAll('"', '""')}"`;
  return [columns.map(escape).join(","), ...rows.map(r => columns.map(c => escape(r[c])).join(","))].join("\n");
}
