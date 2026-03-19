import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { glassCard } from '@/utils/glass';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
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

          <div className={`${glassCard} w-full max-w-md p-8 md:p-10 relative overflow-hidden`}>
            {/* Subtle inner flare */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none" />
            
            <form className="relative z-10 space-y-5 flex flex-col">
              
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
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
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
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
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Password</label>
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
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Confirm Password</label>
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
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-slate-500 dark:text-slate-400 font-medium">Or sign up with</span>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-xl font-bold hover:bg-white/40 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-200 shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-white text-white rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm">
                <Github size={20} />
                GitHub
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-slate-700 dark:text-slate-300 font-medium z-10">
            Already have an account? <Link href="/login" className="font-bold text-teal-600 dark:text-teal-400 hover:underline">Log in</Link>
          </p>

        </div>
      </div>
    </div>
  );
}
