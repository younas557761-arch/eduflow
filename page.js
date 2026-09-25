import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold">EduFlow</div>
        <div className="flex gap-3">
          <Link href="/login" className="rounded-lg border border-slate-700 px-4 py-2">Login</Link>
          <Link href="/signup" className="btn-primary">Start Free</Link>
        </div>
      </nav>
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-4 text-cyan-400">School management, simplified</p>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Run your school with EduFlow.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Students, teachers, staff, classes and school operations in one secure platform.
        </p>
        <div className="mt-10"><Link href="/signup" className="btn-primary inline-block">Create your school</Link></div>
      </section>
    </main>
  );
}
