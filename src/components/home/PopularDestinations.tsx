import React from 'react';
import { ArrowRight, MapPin, Star, Heart } from 'lucide-react';
import { glassCard } from '@/utils/glass';

export default function PopularDestinations() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold drop-shadow-sm">Trending Now</h2>
          <p className="text-slate-700 dark:text-slate-300 mt-2 font-medium font-medium">Most visited destinations by our users</p>
        </div>
        <button className={`${glassCard} px-6 py-2 hidden md:flex items-center gap-2 font-medium !rounded-full`}>
          View All <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800", name: "Paris", location: "France", price: "$1,200", rating: "4.9" },
          { img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", name: "Dubai", location: "UAE", price: "$1,800", rating: "4.8" },
          { img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800", name: "Tokyo", location: "Japan", price: "$1,450", rating: "4.9" },
          { img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=800", name: "Bali", location: "Indonesia", price: "$850", rating: "4.7" },
        ].map((dest, i) => (
          <div key={i} className={`${glassCard} overflow-hidden flex flex-col group`}>
            <div className="relative h-56 w-full overflow-hidden">
              <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 group-hover:bg-white/40 transition-colors cursor-pointer">
                <Heart size={20} className="text-white drop-shadow-md" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center gap-1">
                <Star size={14} className="text-amber-400 fill-amber-400" /> {dest.rating}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold">{dest.name}</h3>
                <p className="flex items-center gap-1 text-slate-700 dark:text-slate-300 mt-1 mb-4 text-sm font-medium">
                  <MapPin size={16} /> {dest.location}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase">Starting from</span>
                  <span className="text-xl font-extrabold text-[#0EA5E9]">{dest.price}</span>
                </div>
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow hover:scale-105 active:scale-95 text-sm">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
