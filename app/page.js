import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
        EduFlow SaaS Platform 2026
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl max-w-3xl">
        Next-Generation School Management System
      </h1>
      <p className="mt-6 text-lg text-slate-400 max-w-xl">
        Manage students, teachers, staff, classes, fees, and attendance seamlessly.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/signup" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
          Register School
        </Link>
        <Link href="/login" className="px-6 py-3 rounded-xl bg-[#1e293b] border border-[#334155] text-slate-300 font-semibold hover:bg-[#334155] transition">
          Sign In
        </Link>
      </div>
    </main>
  );
}
