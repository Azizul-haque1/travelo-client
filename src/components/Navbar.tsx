import React from "react";
import { Plane, Menu } from "lucide-react";
import Link from "next/link";
import { glassPanel } from "@/utils/glass";

export default function Navbar() {
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

          {/* Profile Dropdown Mock */}
          <div className="relative group cursor-pointer ml-2">
            <div className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button className="md:hidden p-2 text-slate-800 dark:text-slate-200">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}
