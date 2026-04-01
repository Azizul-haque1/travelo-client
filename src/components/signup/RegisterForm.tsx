import React from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterForm() {
  return (
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

      <div className="space-y-1 block">
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
  );
}
