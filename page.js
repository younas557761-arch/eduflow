"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase";
export default function ForgotPassword(){
 const [email,setEmail]=useState(""); const [msg,setMsg]=useState("");
 async function submit(e){e.preventDefault();const {error}=await createClient().auth.resetPasswordForEmail(email,{redirectTo:`${location.origin}/reset-password`});setMsg(error?error.message:"Password reset email requested. Check your inbox.");}
 return <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6"><form onSubmit={submit} className="card w-full max-w-md p-7"><h1 className="text-2xl font-bold">Reset password</h1><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="mt-5 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-3"/><button className="btn-primary mt-4 w-full">Send reset link</button>{msg&&<p className="mt-4 text-sm text-slate-300">{msg}</p>}</form></main>;
}
