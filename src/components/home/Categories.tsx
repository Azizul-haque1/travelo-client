import React from 'react';
import { Sun, Mountain, Building, Tent, Diamond } from 'lucide-react';
import { glassCard } from '@/utils/glass';

export default function Categories() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-sky-200">Travel by Vibe</h2>
          <p className="text-slate-700 dark:text-slate-300 mt-2 font-medium">Find exactly what you're looking for</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { icon: <Sun size={32} />, name: "Beach", color: "text-amber-500" },
          { icon: <Mountain size={32} />, name: "Mountain", color: "text-emerald-500" },
          { icon: <Building size={32} />, name: "City", color: "text-rose-500" },
          { icon: <Tent size={32} />, name: "Adventure", color: "text-orange-500" },
          { icon: <Diamond size={32} />, name: "Luxury", color: "text-purple-500" },
        ].map((cat, i) => (
          <div key={i} className={`${glassCard} flex flex-col items-center justify-center p-8 gap-4 cursor-pointer group`}>
            <div className={`p-4 rounded-full bg-white/30 dark:bg-black/30 shadow-inner group-hover:scale-110 transition-transform ${cat.color}`}>
              {cat.icon}
            </div>
            <span className="font-semibold text-lg">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
