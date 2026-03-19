import React from 'react';
import { Star } from 'lucide-react';
import { glassCard } from '@/utils/glass';

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold drop-shadow-sm mb-4">What Explorers Say</h2>
        <p className="text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto">Real experiences from travelers who trusted Travelo's AI to plan their perfect getaways.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Sarah Jenkins", role: "Solo Backpacker", img: "https://i.pravatar.cc/150?img=1", quote: "The AI Planner built a completely flawless Tokyo itinerary for me. It knew exactly the kind of eccentric coffee shops I love!" },
          { name: "David & Emma", role: "Honeymooners", img: "https://i.pravatar.cc/150?img=11", quote: "We were overwhelmed planning our Bali trip. Travelo generated a perfect luxury-meets-adventure 10 day plan in 3 minutes." },
          { name: "Michael Chen", role: "Digital Nomad", img: "https://i.pravatar.cc/150?img=15", quote: "I travel year round and Travelo is my default app now. The smart recommendations save me hours of research every week." }
        ].map((test, i) => (
          <div key={i} className={`${glassCard} p-8 flex flex-col justify-between`}>
            <div>
              <div className="flex text-amber-500 mb-6 drop-shadow-sm">
                {[1,2,3,4,5].map(s => <Star key={s} size={18} className="fill-current" />)}
              </div>
              <p className="text-lg text-slate-800 dark:text-slate-200 font-medium italic mb-8">"{test.quote}"</p>
            </div>
            <div className="flex items-center gap-4 border-t border-white/20 dark:border-white/10 pt-6">
              <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full border-2 border-white/50" />
              <div>
                <h4 className="font-bold">{test.name}</h4>
                <p className="text-sm font-semibold text-[#0EA5E9]">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
