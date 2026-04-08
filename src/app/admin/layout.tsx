import React from "react";
import Link from "next/link";
import { glassPanel } from "@/utils/glass";
import {
  LayoutDashboard,
  Map,
  Users,
  CalendarCheck,
  Settings,
  LogOut,
  Plane,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex relative overflow-hidden selection:bg-teal-500 selection:text-white">
      {/* Dark mode background orbs specifically for admin */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-600/20 mix-blend-screen filter blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 mix-blend-screen filter blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Sidebar Layout */}
      <aside className={`w-64 border-r border-white/10 ${glassPanel} rounded-none border-y-0 border-l-0 flex flex-col z-10 sticky top-0 h-screen`}>
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <Plane className="text-teal-400" size={28} />
          <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">Travelo<span className="text-teal-400">.io</span></span>
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-teal-300 text-slate-300 font-medium transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/destinations" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-teal-300 text-slate-300 font-medium transition-colors">
            <Map size={20} /> Destinations
          </Link>
          <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-teal-300 text-slate-300 font-medium transition-colors">
            <CalendarCheck size={20} /> Bookings
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-teal-300 text-slate-300 font-medium transition-colors">
            <Users size={20} /> Users
          </Link>

          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mt-8 mb-2">Configuration</p>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 hover:text-teal-300 text-slate-300 font-medium transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/explore" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 text-slate-400 font-medium transition-colors">
            <LogOut size={20} /> Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto z-10 px-8 py-8 w-full">
        {children}
      </main>
    </div>
  );
}
