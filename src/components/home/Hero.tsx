import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { glassPanel } from '@/utils/glass';

export default function Hero() {
  return (
    <header className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-20">
      <div className={`${glassPanel} max-w-4xl w-full p-10 md:p-16 text-center relative overflow-hidden group`}>
        {/* Subtle inner flare */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-300/30 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/20 text-sm font-semibold flex items-center gap-2 drop-shadow-sm">
            <Sparkles size={16} className="text-amber-300" /> AI-Powered Travel
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-sky-200 dark:to-white drop-shadow-sm">
            Travel Smarter <br className="hidden md:block" /> with AI
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-700 dark:text-slate-200/90 leading-relaxed font-medium">
            Discover breathtaking destinations, get highly personalized recommendations, and plan your perfect trip effortlessly in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-8 py-4 font-semibold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full shadow-xl shadow-indigo-600/30 transition-all hover:-translate-y-1 flex items-center gap-2 justify-center">
              Explore Destinations <Compass size={20} />
            </button>
            <button className="px-8 py-4 font-semibold text-lg bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/40 border border-white/40 dark:border-white/20 rounded-full shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 flex items-center gap-2 justify-center">
              Try AI Planner <Sparkles size={20} className="text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
