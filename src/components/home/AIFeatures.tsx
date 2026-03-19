import React from 'react';
import { MapPin, Compass, MessageCircle } from 'lucide-react';
import { glassCard, glassPanel } from '@/utils/glass';

export default function AIFeatures() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className={`${glassPanel} p-10 md:p-16 relative overflow-hidden`}>
        {/* Visual background elements within feature card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C55E]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sky-800 dark:text-sky-300 font-bold tracking-wider uppercase text-sm drop-shadow-sm mb-2 block">Powered By Precision</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm mb-6">Redefining Planning<br />With Intelligence</h2>
            <p className="text-lg text-slate-700 dark:text-slate-200/90 font-medium mb-10 leading-relaxed">
              Our core engine leverages fine-tuned models to understand your personal travel style, constraints, and dreams.
            </p>
            <div className="space-y-6">
              {/* Feature items */}
              {[
                { icon: <MapPin size={24} />, title: "AI Travel Planner", desc: "Builds absolute pinpoint itineraries by the hour." },
                { icon: <Compass size={24} />, title: "Smart Recommendations", desc: "Learns from your past bookings and preferences." },
                { icon: <MessageCircle size={24} />, title: "AI Chat Assistant", desc: "24/7 localized support for hidden gems anywhere." }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white/30 dark:bg-black/30 shadow-inner mt-1 text-indigo-700 dark:text-indigo-300">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{feat.title}</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Abstract UI representation */}
            <div className={`${glassCard} border-2 border-white/40 p-6 absolute -top-10 -left-10 w-64 z-20 animate-bounce`} style={{ animationDuration: '6s' }}>
              <div className="h-4 w-1/2 bg-sky-200/50 rounded-full mb-4"></div>
              <div className="h-3 w-4/5 bg-white/20 rounded-full mb-2"></div>
              <div className="h-3 w-3/5 bg-white/20 rounded-full"></div>
            </div>
            <div className={`${glassCard} border-2 border-white/40 aspect-[4/5] overflow-hidden flex flex-col justify-end p-8 w-full relative z-10`} style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)' }}>
              <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800" alt="AI feature" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
              <div className="relative z-10 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0" />
              <div className="relative z-20">
                <h3 className="text-3xl font-bold text-white shadow-black/50 mb-2">Instant Plans</h3>
                <p className="text-white/80 font-medium max-w-sm">Tap into comprehensive worldwide datasets integrated with local secrets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
