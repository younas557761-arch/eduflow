"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import StudentForm from "@/components/students/StudentForm";
export default function NewStudent(){const [busy,setBusy]=useState(false),router=useRouter();async function save(form){setBusy(true);const {error}=await createClient().from("students").insert(form);setBusy(false);if(error)alert(error.message);else router.push("/dashboard/students");}return <><h1 className="mb-6 text-3xl font-bold">Add student</h1><div className="card p-6"><StudentForm onSubmit={save} busy={busy}/></div></>}
