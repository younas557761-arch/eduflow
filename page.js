"use client";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Signup() {
  const [form,setForm]=useState({school:"",email:"",password:""});
  const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
  async function submit(e){
    e.preventDefault(); setBusy(true); setError("");
    const supabase=createClient();
    const {error}=await supabase.auth.signUp({email:form.email,password:form.password,options:{data:{school_name:form.school}}});
    if(error)setError(error.message); else window.location.href="/login?registered=1";
    setBusy(false);
  }
  return <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6"><form onSubmit={submit} className="card w-full max-w-md p-7">
    <h1 className="text-2xl font-bold">Create your school</h1><p className="mt-2 text-slate-400">Start your EduFlow account.</p>
    {["school","email","password"].map(k=><input key={k} required value={form[k]} type={k==="password"?"password":k} onChange={e=>setForm({...form,[k]:e.target.value})} placeholder={k.replace("_"," ")} className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-3"/>)}
    {error&&<p className="mt-3 text-sm text-red-400">{error}</p>}<button disabled={busy} className="btn-primary mt-5 w-full">{busy?"Creating...":"Create account"}</button>
    <p className="mt-5 text-center text-sm text-slate-400">Already registered? <Link href="/login" className="text-cyan-400">Login</Link></p>
  </form></main>;
}
