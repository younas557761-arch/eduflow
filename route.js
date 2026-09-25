import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function db() {
 const cookieStore = cookies();
 return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,{cookies:{getAll:()=>cookieStore.getAll(),setAll:()=>{}}});
}
export async function GET() {
 const supabase=await db(); const {data,error}=await supabase.from("teachers").select("*").order("created_at",{ascending:false});
 if(error)return NextResponse.json({error:error.message},{status:400}); return NextResponse.json(data);
}
export async function POST(request) {
 const body=await request.json(); const supabase=await db();
 const allowed="first_name,last_name,employee_no,email,phone,specialization".split(",");
 const payload=Object.fromEntries(allowed.filter(k=>body[k]!==undefined).map(k=>[k,body[k]]));
 const {data,error}=await supabase.from("teachers").insert(payload).select().single();
 if(error)return NextResponse.json({error:error.message},{status:400}); return NextResponse.json(data,{status:201});
}
