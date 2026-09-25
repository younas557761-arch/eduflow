"use client";
import { useState } from "react";

export default function StudentForm({ initial = {}, onSubmit, busy = false }) {
  const [form,setForm] = useState({first_name:"",last_name:"",admission_no:"",date_of_birth:"",gender:"",class_id:"",guardian_name:"",guardian_phone:"",...initial});
  const change = e => setForm({...form,[e.target.name]:e.target.value});
  return <form onSubmit={e=>{e.preventDefault();onSubmit(form)}} className="grid gap-4 md:grid-cols-2">
    {["first_name","last_name","admission_no","date_of_birth","gender","class_id","guardian_name","guardian_phone"].map(name =>
      <label key={name} className="text-sm text-slate-300">{name.replaceAll("_"," ").replace(/\b\w/g,m=>m.toUpperCase())}
        <input name={name} value={form[name] ?? ""} onChange={change} type={name==="date_of_birth"?"date":"text"} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"/>
      </label>)}
    <button disabled={busy} className="btn-primary md:col-span-2">{busy?"Saving...":"Save student"}</button>
  </form>;
}
