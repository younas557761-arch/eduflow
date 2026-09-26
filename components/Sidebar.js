import Link from 'next/link';

export default function Sidebar() {
  const menu = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Students', href: '/dashboard/students' },
    { label: 'Teachers', href: '/dashboard/teachers' },
    { label: 'Staff', href: '/dashboard/staff' },
    { label: 'Classes', href: '/dashboard/classes' },
  ];

  return (
    <aside className="w-64 bg-[#1e293b] border-r border-[#334155] min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8">
          EduFlow
        </div>
        <nav className="space-y-2">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="block px-4 py-2.5 rounded-lg text-slate-300 hover:bg-[#334155] hover:text-white transition">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-xs text-slate-500 border-t border-[#334155] pt-4">
        eduflowpk © 2026
      </div>
    </aside>
  );
}
