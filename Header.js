"use client";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";

export default function Header() {
  const router = useRouter();
  return <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur">
    <div className="font-semibold">School Management</div>
    <button onClick={async()=>{await signOut(); router.push("/login");}} className="rounded-lg border border-slate-700 px-3 py-2 text-sm">Logout</button>
  </header>;
}
