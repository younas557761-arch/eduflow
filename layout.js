import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default function DashboardLayout({children}) {
 return <div className="flex min-h-screen bg-slate-900"><Sidebar/><div className="min-w-0 flex-1"><Header/><main className="p-4 md:p-8">{children}</main></div></div>;
}
