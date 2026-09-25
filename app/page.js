"use client";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
  async function submit(e){
    e.preventDefault();setBusy(true);setError("");
    const {error}=await createClient().auth.signInWithPassword({email,password});
    if(error)setError(error.message); else window.location.href="/dashboard";
    setBusy(false);
  }
  return <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6"><form onSubmit={submit} className="card w-full max-w-md p-7">
    <h1 className="text-2xl font-bold">Welcome back</h1>
    <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="mt-5 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-3"/>
    <input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-3"/>
    {error&&<p className="mt-3 text-sm text-red-400">{error}</p>}<button disabled={busy} className="btn-primary mt-5 w-full">{busy?"Signing in...":"Login"}</button>
    <div className="mt-5 flex justify-between text-sm"><Link href="/signup" className="text-cyan-400">Create account</Link><Link href="/forgot-password" className="text-slate-400">Forgot password?</Link></div>
  </form></main>;
}
