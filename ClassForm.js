"use client";
import { useState } from "react";
export default function ClassForm({onSubmit,busy=false}) {
  const [form,setForm]=useState({name:"",section:"A",capacity:30,room_number:""});
  return <form onSubmit={e=>{e.preventDefault();onSubmit(form)}} className="grid gap-4 md:grid-cols-2">
    {Object.keys(form).map(k=><label key={k} className="text-sm text-slate-300">{k.replaceAll("_"," ")}
      <input name={k} value={form[k]} onChange={e=>setForm({...form,[k]:k==="capacity"?Number(e.target.value):e.target.value})} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"/></label>)}
    <button disabled={busy} className="btn-primary md:col-span-2">{busy?"Saving...":"Save class"}</button>
  </form>;
}
