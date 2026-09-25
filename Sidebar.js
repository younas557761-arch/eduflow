"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/auth";

const items = [
  ["Dashboard","/dashboard"],["Students","/dashboard/students"],["Teachers","/dashboard/teachers"],
  ["Staff","/dashboard/staff"],["Classes","/dashboard/classes"]
];

export default function Sidebar() {
  const path = usePathname();
  return <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-950 p-4 md:block">
    <div className="mb-8 px-3 text-2xl font-bold">EduFlow</div>
    <nav className="space-y-1">{items.map(([label,href]) =>
      <Link key={href} href={href} className={`block rounded-lg px-3 py-2 ${path===href?"bg-slate-800 text-cyan-400":"text-slate-300 hover:bg-slate-800"}`}>{label}</Link>
    )}</nav>
    <button onClick={signOut} className="mt-8 w-full rounded-lg border border-slate-700 px-3 py-2 text-left text-slate-300">Sign out</button>
  </aside>;
}
