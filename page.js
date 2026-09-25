"use client";
import { useEffect,useState } from "react";
import { useParams,useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import StudentForm from "@/components/students/StudentForm";
export default function EditStudent(){const {id}=useParams(),router=useRouter();const [data,setData]=useState(null),[busy,setBusy]=useState(false);useEffect(()=>{createClient().from("students").select("*").eq("id",id).single().then(({data})=>setData(data))},[id]);if(!data)return <p>Loading...</p>;async function save(form){setBusy(true);const {error}=await createClient().from("students").update(form).eq("id",id);setBusy(false);if(error)alert(error.message);else router.push(`/dashboard/students/${id}`)}return <><h1 className="mb-6 text-3xl font-bold">Edit student</h1><div className="card p-6"><StudentForm initial={data} onSubmit={save} busy={busy}/></div></>}
