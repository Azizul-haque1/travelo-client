import React from 'react';
import { User, Compass, Star } from 'lucide-react';
import { glassCard } from '@/utils/glass';

export default function Statistics() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { icon: <User />, count: "500K+", label: "Happy Travelers" },
          { icon: <Compass />, count: "10K+", label: "Destinations" },
          { icon: <Star />, count: "4.9/5", label: "Average Ratings" },
        ].map((stat, i) => (
          <div key={i} className={`${glassCard} p-10 flex flex-col items-center justify-center`}>
            <div className="p-4 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 mb-6 font-bold">
              {stat.icon}
            </div>
            <h3 className="text-5xl font-extrabold mb-2">{stat.count}</h3>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
