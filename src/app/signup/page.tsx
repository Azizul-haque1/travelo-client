import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { glassCard } from "@/utils/glass";
import { Mail, Lock, User, ArrowRight, Github } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        <Navbar />

        <div className="flex-1 flex flex-col justify-center items-center p-6 mb-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm mb-4">
              Join Travelo
            </h1>
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              Create an account and start exploring right away.
            </p>
          </div>

          <div
            className={`${glassCard} w-full max-w-md p-8 md:p-10 relative overflow-hidden`}
          >
            {/* Subtle inner flare */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />

            <form className="relative z-10 space-y-5 flex flex-col">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-500" />
                  </div>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-500" />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1 block md:hidden">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-500" />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-slate-900 dark:text-white placeholder-slate-500 font-medium"
                  />
                </div>
              </div>

              <button className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2">
                Create Account <ArrowRight size={18} />
              </button>
            </form>

            <div className="relative z-10 mt-8 mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300/50 dark:border-slate-700/50"></div>
              </div>
              <div className="relative flex justify-center text-sm"></div>
            </div>
          </div>

          <p className="mt-8 text-slate-700 dark:text-slate-300 font-medium z-10">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
