"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {createClient} from "@/lib/supabase";
import SearchBar from "@/components/SearchBar";
import DataTable from "@/components/DataTable";
export default function Teachers(){const [rows,setRows]=useState([]),[q,setQ]=useState("");async function load(){let x=createClient().from("teachers").select("*").order("created_at",{ascending:false});if(q)x=x.or(`first_name.ilike.%${q}%,last_name.ilike.%${q}%,employee_no.ilike.%${q}%`);const {data}=await x;setRows(data||[])}useEffect(()=>{load()},[q]);async function del(id){if(confirm("Delete this teacher?")){await createClient().from("teachers").delete().eq("id",id);load()}}return <><div className="flex justify-between"><h1 className="text-3xl font-bold">Teachers</h1><Link href="/dashboard/teachers/new" className="btn-primary">Add teacher</Link></div><div className="my-5 max-w-md"><SearchBar value={q} onChange={setQ}/></div><DataTable columns={[{key:"employee_no",label:"Employee"},{key:"first_name",label:"First name"},{key:"last_name",label:"Last name"},{key:"specialization",label:"Specialization"}]} rows={rows} actions={r=><button onClick={()=>del(r.id)} className="text-red-400">Delete</button>}/></>}
