import React from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginForm() {
  return (
    <form className="relative z-10 space-y-6 flex flex-col">
      <div className="space-y-2">
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

      <div className="space-y-2">
        <div className="flex items-center justify-between ml-1 mr-1">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
            Password
          </label>
          <a
            href="#"
            className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>
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

      <button className="w-full py-4 mt-2 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2">
        Sign In <ArrowRight size={18} />
      </button>
    </form>
  );
}
