import React from "react";

import { glassCard, glassPanel } from "@/utils/glass";
import {
  LayoutDashboard,
  Map,
  Users,
  CalendarCheck,
  Settings,
  LogOut,
  TrendingUp,
  Plane,
  DollarSign,
  Activity,
  MoreVertical,
  Edit2,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      growth: "+20.1%",
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      title: "Active Bookings",
      value: "356",
      growth: "+12.5%",
      icon: CalendarCheck,
      color: "text-blue-400",
    },
    {
      title: "Destinations",
      value: "24",
      growth: "+3.2%",
      icon: Map,
      color: "text-purple-400",
    },
    {
      title: "Total Users",
      value: "2,405",
      growth: "+15.3%",
      icon: Users,
      color: "text-orange-400",
    },
  ];

  const recentBookings = [
    {
      id: "BK-1023",
      user: "Alice Walker",
      destination: "Santorini, Greece",
      amount: "$1,400",
      status: "Confirmed",
      date: "Oct 24, 2026",
    },
    {
      id: "BK-1024",
      user: "John Doe",
      destination: "Kyoto, Japan",
      amount: "$1,850",
      status: "Pending",
      date: "Oct 25, 2026",
    },
    {
      id: "BK-1025",
      user: "Sarah Smith",
      destination: "Maldives",
      amount: "$2,200",
      status: "Cancelled",
      date: "Oct 25, 2026",
    },
    {
      id: "BK-1026",
      user: "James Bond",
      destination: "Swiss Alps, Switzerland",
      amount: "$2,100",
      status: "Confirmed",
      date: "Oct 26, 2026",
    },
    {
      id: "BK-1027",
      user: "Emma Watson",
      destination: "Bora Bora, French Polynesia",
      amount: "$3,100",
      status: "Waitlist",
      date: "Oct 28, 2026",
    },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="flex justify-between items-center mb-10 w-full">
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Dashboard Overview
          </h1>
          <p className="text-slate-400 mt-1 font-medium">
            Welcome back, Admin! Here's what's happening today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">System Online</span>
          </div>
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
            alt="Admin"
            className="w-12 h-12 rounded-full border-2 border-teal-500"
          />
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`${glassCard} p-6 border border-white/10 hover:border-white/20 transition-all`}
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 rounded-xl bg-white/5 ${stat.color} border border-white/10`}
              >
                <stat.icon size={24} />
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} /> {stat.growth}
              </span>
            </div>
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">
              {stat.title}
            </h3>
            <p className="text-3xl font-extrabold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tables & Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Recent Bookings Table */}
        <div
          className={`lg:col-span-2 ${glassPanel} p-6 border-white/10 border`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Bookings</h2>
            <button className="text-sm text-teal-400 hover:text-teal-300 font-bold">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase">
                    Booking ID
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase">
                    User
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase">
                    Destination
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase">
                    Amount
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase">
                    Status
                  </th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm font-bold text-slate-300">
                      {booking.id}
                    </td>
                    <td className="py-4 px-4 text-sm font-medium">
                      {booking.user}
                    </td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-400">
                      {booking.destination}
                    </td>
                    <td className="py-4 px-4 text-sm font-bold">
                      {booking.amount}
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          booking.status === "Confirmed"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : booking.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : booking.status === "Waitlist"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-2 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & System Health */}
        <div className="space-y-8">
          <div className={`${glassPanel} p-6 border-white/10 border`}>
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                href={"/admin/destinations/create"}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-bold transition-all shadow-[0_4px_14px_0_rgba(20,184,166,0.39)] hover:shadow-[0_6px_20px_rgba(20,184,166,0.23)] hover:-translate-y-0.5"
              >
                <Map size={20} /> Add New Destination
              </Link>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all">
                <CalendarCheck size={20} /> Create Manual Booking
              </button>
              <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all">
                <Users size={20} /> Invite Staff Member
              </button>
            </div>
          </div>

          <div className={`${glassCard} p-6 border-white/10 border`}>
            <h2 className="text-xl font-bold text-white mb-4">System Health</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400 font-medium">
                    Server Load
                  </span>
                  <span className="text-emerald-400 font-bold">24%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-emerald-400 h-2 rounded-full"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400 font-medium">
                    Database Capacity
                  </span>
                  <span className="text-yellow-400 font-bold">68%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                <Activity size={14} className="text-emerald-400" /> All systems
                running optimally
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
