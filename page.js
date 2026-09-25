import Link from "next/link";
import { createClient } from "@/lib/supabase";
export default async function StudentPage({params}){
 const {data,error}=await createClient().from("students").select("*").eq("id",params.id).single();
 if(error||!data)return <p>Student not found.</p>;
 return <div><div className="flex justify-between"><div><h1 className="text-3xl font-bold">{data.first_name} {data.last_name}</h1><p className="text-slate-400">{data.admission_no}</p></div><Link href={`/dashboard/students/${data.id}/edit`} className="btn-primary">Edit</Link></div><div className="card mt-6 grid gap-4 p-6 md:grid-cols-2">{Object.entries(data).filter(([k])=>!["id","school_id","created_at","updated_at"].includes(k)).map(([k,v])=><div key={k}><div className="text-xs uppercase text-slate-500">{k.replaceAll("_"," ")}</div><div>{String(v??"—")}</div></div>)}</div></div>;
}
