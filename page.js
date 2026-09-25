"use client";
import { useEffect,useState } from "react";
import { createClient } from "@/lib/supabase";
import StatsCard from "@/components/StatsCard";
import Chart from "@/components/Chart";
export default function Dashboard(){
 const [stats,setStats]=useState({students:0,teachers:0,staff:0,classes:0});
 useEffect(()=>{(async()=>{const s=createClient();const tables=["students","teachers","staff","classes"];const out={};for(const t of tables){const {count}=await s.from(t).select("*",{count:"exact",head:true});out[t]=count||0;}setStats(out)})()},[]);
 return <><h1 className="text-3xl font-bold">Dashboard</h1><p className="mt-2 text-slate-400">Your school at a glance.</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><StatsCard label="Students" value={stats.students}/><StatsCard label="Teachers" value={stats.teachers}/><StatsCard label="Staff" value={stats.staff}/><StatsCard label="Classes" value={stats.classes}/></div><div className="mt-6"><Chart title="School overview"/></div></>;
}
