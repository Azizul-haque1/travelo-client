import React from 'react';
import { glassCard, glassPanel } from '@/utils/glass';

export default function CallToAction() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className={`${glassPanel} p-12 md:p-20 text-center relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-indigo-600/20 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm">Start Your Journey Today</h2>
          <p className="text-xl font-medium text-slate-700 dark:text-slate-200 mb-10 max-w-2xl mx-auto">Join hundreds of thousands of smart travelers. Let our AI curate your next unforgettable adventure.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <button className="px-10 py-5 font-bold text-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] dark:shadow-[0_10px_40px_-5px_rgba(255,255,255,0.4)] transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
              Get Started for Free
            </button>
          </div>

          <div className="pt-10 border-t border-white/20 dark:border-white/10">
            <p className="font-semibold mb-4 drop-shadow-sm uppercase tracking-widest text-sm">Subscribe for Exclusive Deals</p>
            <div className={`${glassCard} flex p-2 max-w-md mx-auto !rounded-full bg-white/40 dark:bg-black/40`}>
              <input type="email" placeholder="Enter your email address" className="bg-transparent border-none outline-none flex-1 px-4 text-slate-900 dark:text-white placeholder-slate-700 dark:placeholder-slate-400 font-medium" />
              <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
