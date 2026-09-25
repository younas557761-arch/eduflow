"use client";
import {useParams} from "next/navigation";
export default function EditStaff(){const {id}=useParams();return <div className="card p-6"><h1 className="text-2xl font-bold">Edit staff</h1><p className="mt-2 text-slate-400">Staff editor for record {id}. Use the API endpoint to update fields.</p></div>}
