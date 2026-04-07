import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { glassCard, glassPanel } from "@/utils/glass";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Settings,
  Shield,
  LogOut,
  Camera,
  Edit2,
  Plane,
  CreditCard,
  Bell,
  Map,
} from "lucide-react";
import { logoutUser } from "@/services/auth.service";
import toast from "react-hot-toast";
import LogoutButton from "@/components/buttons/LogoutButton";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar />

        <main className="flex-grow pt-24 pb-16 px-6 max-w-7xl mx-auto w-full">
          {/* Header Area */}
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm">
              Account Profile
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">
              Manage your details, bookings, and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-6">
              {/* User Summary Card */}
              <div
                className={`${glassCard} p-6 flex flex-col items-center text-center`}
              >
                <div className="relative mb-4 group cursor-pointer">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 dark:border-white/10 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"
                      alt="Profile Avatar"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="text-white w-6 h-6" />
                  </div>
                </div>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-cyan-700 dark:from-teal-300 dark:to-cyan-300">
                  Alex Morgan
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                  Explorer Tier
                </p>
                <div className="w-full h-px bg-slate-200/50 dark:bg-slate-700/50 mb-4" />
                <button className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                  <Edit2 size={16} /> Edit Profile
                </button>
              </div>

              {/* Navigation Menu */}
              <div className={`${glassCard} overflow-hidden`}>
                <nav className="flex flex-col">
                  {[
                    {
                      icon: <User size={20} />,
                      label: "Personal Info",
                      active: true,
                    },
                    {
                      icon: <Plane size={20} />,
                      label: "My Bookings",
                      active: false,
                    },
                    {
                      icon: <CreditCard size={20} />,
                      label: "Payment Methods",
                      active: false,
                    },
                    {
                      icon: <Shield size={20} />,
                      label: "Security",
                      active: false,
                    },
                    {
                      icon: <Bell size={20} />,
                      label: "Notifications",
                      active: false,
                    },
                    {
                      icon: <Settings size={20} />,
                      label: "Preferences",
                      active: false,
                    },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      className={`flex items-center gap-3 px-6 py-4 font-medium transition-colors duration-200 text-left cursor-pointer
                        ${
                          item.active
                            ? "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-l-4 border-teal-500"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100 border-l-4 border-transparent"
                        }
                      `}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                  <div className="h-px bg-slate-200/50 dark:bg-slate-700/50" />

                  <LogoutButton />
                </nav>
              </div>
            </div>

            {/* Main Profile Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    label: "Total Trips",
                    value: "14",
                    icon: <Plane size={24} className="text-teal-500" />,
                  },
                  {
                    label: "Reviews",
                    value: "28",
                    icon: <User size={24} className="text-cyan-500" />,
                  },
                  {
                    label: "Points",
                    value: "4,500",
                    icon: <Shield size={24} className="text-emerald-500" />,
                  },
                  {
                    label: "Countries",
                    value: "7",
                    icon: <MapPin size={24} className="text-blue-500" />,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`${glassCard} p-5 flex flex-col justify-center items-center md:items-start`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shadow-inner">
                        {stat.icon}
                      </div>
                      <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Personal Information Form/View */}
              <div className={`${glassPanel} p-8`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-slate-200/50 dark:border-slate-700/50 pb-4">
                  <User className="text-teal-500" /> Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400">
                      First Name
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/20 border border-white/50 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-200 font-medium font-sans flex items-center gap-3">
                      <User size={18} className="text-slate-400" />
                      <span>Alex</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Last Name
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/20 border border-white/50 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-200 font-medium font-sans flex items-center gap-3">
                      <User size={18} className="text-slate-400" />
                      <span>Morgan</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Email Address
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/20 border border-white/50 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-200 font-medium font-sans flex items-center gap-3">
                      <Mail size={18} className="text-slate-400" />
                      <span>alex.morgan@example.com</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Phone Number
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/20 border border-white/50 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-200 font-medium font-sans flex items-center gap-3">
                      <Phone size={18} className="text-slate-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Date of Birth
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/20 border border-white/50 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-200 font-medium font-sans flex items-center gap-3">
                      <Calendar size={18} className="text-slate-400" />
                      <span>October 12, 1994</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Location
                    </label>
                    <div className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/20 border border-white/50 dark:border-white/10 shadow-sm text-slate-800 dark:text-slate-200 font-medium font-sans flex items-center gap-3">
                      <MapPin size={18} className="text-slate-400" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Bookings (Preview) */}
              <div className={`${glassPanel} p-8`}>
                <div className="flex justify-between items-center mb-6 border-b border-slate-200/50 dark:border-slate-700/50 pb-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Map className="text-teal-500" /> Recent Bookings
                  </h3>
                  <button className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Booking Item 1 */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-white/30 dark:bg-black/30 border border-white/30 dark:border-white/5 transition-colors hover:bg-white/40 dark:hover:bg-black/40">
                    <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=400"
                        alt="Paris"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow w-full text-center sm:text-left">
                      <h4 className="text-lg font-bold mb-1">Paris Escape</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2 flex items-center justify-center sm:justify-start gap-1">
                        <Calendar size={14} /> Aug 12 - Aug 19, 2024
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                        Completed
                      </span>
                    </div>
                    <div className="flex-shrink-0 w-full sm:w-auto text-center sm:text-right">
                      <p className="text-xlg font-extrabold text-slate-900 dark:text-white">
                        $2,450
                      </p>
                      <button className="mt-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Booking Item 2 */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-white/30 dark:bg-black/30 border border-white/30 dark:border-white/5 transition-colors hover:bg-white/40 dark:hover:bg-black/40">
                    <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=400"
                        alt="Tokyo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow w-full text-center sm:text-left">
                      <h4 className="text-lg font-bold mb-1">
                        Tokyo Adventure
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2 flex items-center justify-center sm:justify-start gap-1">
                        <Calendar size={14} /> Oct 05 - Oct 15, 2024
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
                        Upcoming
                      </span>
                    </div>
                    <div className="flex-shrink-0 w-full sm:w-auto text-center sm:text-right">
                      <p className="text-xlg font-extrabold text-slate-900 dark:text-white">
                        $3,100
                      </p>
                      <button className="mt-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
