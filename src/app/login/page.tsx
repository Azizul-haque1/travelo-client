import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { glassCard } from "@/utils/glass";
import { Mail, Lock, ArrowRight } from "lucide-react";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        <Navbar />

        <div className="flex-1 flex flex-col justify-center items-center p-6 mt-10 mb-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm mb-4">
              Welcome Back
            </h1>
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              Log in to continue your journey with Travelo.
            </p>
          </div>

          <div
            className={`${glassCard} w-full max-w-md p-8 md:p-10 relative overflow-hidden`}
          >
            {/* Subtle inner flare */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-400/20 blur-3xl rounded-full pointer-events-none" />

            {/* login form */}
            <LoginForm />

            <div className="relative z-10 mt-8 mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300/50 dark:border-slate-700/50"></div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-slate-700 dark:text-slate-300 font-medium z-10">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
