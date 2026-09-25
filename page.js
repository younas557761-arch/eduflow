"use client";
import {useState} from "react";import {useRouter} from "next/navigation";import {createClient} from "@/lib/supabase";import StaffForm from "@/components/staff/StaffForm";
export default function NewStaff(){const [busy,setBusy]=useState(false),router=useRouter();async function save(form){setBusy(true);const {error}=await createClient().from("staff").insert(form);setBusy(false);if(error)alert(error.message);else router.push("/dashboard/staff")}return <><h1 className="mb-6 text-3xl font-bold">Add staff</h1><div className="card p-6"><StaffForm onSubmit={save} busy={busy}/></div></>}
