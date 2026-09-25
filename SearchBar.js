export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 outline-none focus:border-cyan-500" />;
}
