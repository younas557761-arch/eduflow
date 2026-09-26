export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      type="text"
      className="w-full md:w-72 bg-[#1e293b] border border-[#334155] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
