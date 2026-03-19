import React from 'react';
import { ArrowRight } from 'lucide-react';
import { glassCard } from '@/utils/glass';

export default function BlogSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold drop-shadow-sm">Travel Insights</h2>
        <button className={`${glassCard} px-6 py-2 hidden md:flex items-center gap-2 font-medium !rounded-full`}>
          All Articles <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Top 10 Hidden Beaches in Europe", tag: "Guide", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
          { title: "Pack Like a Pro for a 2-Week Journey", tag: "Tips", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800" },
          { title: "How AI is Reshaping Modern Tourism", tag: "Tech", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
        ].map((blog, i) => (
          <div key={i} className={`${glassCard} flex flex-col overflow-hidden`}>
            <div className="h-48 overflow-hidden relative">
              <img src={blog.img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt="Blog" />
              <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-white/40 shadow-sm uppercase tracking-wider">{blog.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer transition-colors">{blog.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-4">Discover the fundamental shifts happening in the way we explore our world, and how to stay ahead of the curve.</p>
              <button className="text-[#0EA5E9] font-bold text-sm tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
