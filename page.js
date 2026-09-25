"use client";
import Link from "next/link";
import { useEffect,useState } from "react";
import { createClient } from "@/lib/supabase";
import SearchBar from "@/components/SearchBar";
import DataTable from "@/components/DataTable";
export default function Students(){
 const [rows,setRows]=useState([]),[q,setQ]=useState("");
 async function load(){let query=createClient().from("students").select("*").order("created_at",{ascending:false});if(q)query=query.or(`first_name.ilike.%${q}%,last_name.ilike.%${q}%,admission_no.ilike.%${q}%`);const {data,error}=await query;if(!error)setRows(data||[]);}
 useEffect(()=>{load()},[q]);
 async function del(id){if(!confirm("Delete this student?"))return;await createClient().from("students").delete().eq("id",id);load();}
 return <><div className="flex flex-wrap items-center justify-between gap-3"><div><h1 className="text-3xl font-bold">Students</h1><p className="text-slate-400">Manage enrolled students.</p></div><Link href="/dashboard/students/new" className="btn-primary">Add student</Link></div><div className="my-5 max-w-md"><SearchBar value={q} onChange={setQ} placeholder="Search students..."/></div><DataTable columns={[{key:"admission_no",label:"Admission"},{key:"first_name",label:"First name"},{key:"last_name",label:"Last name"},{key:"guardian_name",label:"Guardian"}]} rows={rows} actions={r=><div className="flex gap-3"><Link className="text-cyan-400" href={`/dashboard/students/${r.id}`}>View</Link><button className="text-red-400" onClick={()=>del(r.id)}>Delete</button></div>}/></>;
}
