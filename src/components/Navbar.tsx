"use client";
import React, { useState, useEffect } from "react";
import { Plane, Menu } from "lucide-react";
import Link from "next/link";
import { glassPanel } from "@/utils/glass";
import { useAuthStore } from "@/store/auth.store";

export default function Navbar() {
  const { user } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 mx-auto">
      <div
        className={`${glassPanel} max-w-7xl mx-auto px-6 py-3 flex items-center justify-between rounded-full`}
      >
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="p-2 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl text-white shadow-lg group-hover:rotate-12 transition-transform">
            <Plane size={24} />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-indigo-900 dark:from-sky-300 dark:to-indigo-300">
            Travelo
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            href="/"
            className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
          >
            Explore
          </Link>
          <Link
            href="/about"
            className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 border-l border-white/30 dark:border-white/10 pl-4">
          {/* Auth Conditional Rendering */}
          {isMounted && !user ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 font-medium hover:bg-white/20 dark:hover:bg-black/20 rounded-full transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 font-medium bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white rounded-full shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
              >
                Sign Up
              </Link>
            </>
          ) : isMounted && user ? (
            /* Profile Link */
            <Link href="/profile" className="flex items-center gap-3 ml-2 group transition-all duration-200 hover:opacity-80">
              <div className="hidden lg:flex flex-col text-right">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {user.name || "User"}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 capitalize">
                  {user.role || "Member"}
                </span>
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 overflow-hidden group-hover:border-sky-400 transition-colors duration-200 bg-sky-100 flex items-center justify-center shadow-sm">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "User"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sky-800 font-bold text-lg">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ) : null}
        </div>

        <button className="md:hidden p-2 text-slate-800 dark:text-slate-200">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}
