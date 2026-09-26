export default function Header({ title }) {
  return (
    <header className="h-16 border-b border-[#334155] bg-[#1e293b]/50 backdrop-blur px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
        A
      </div>
    </header>
  );
}
