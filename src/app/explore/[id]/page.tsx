import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { glassCard, glassPanel } from '@/utils/glass';
import { MapPin, Star, Calendar, Heart, Share2, Info, Users, Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations } from '@/data/destinations';

// In Next 15, params is a Promise. We use 'any' to avoid strict type errors for now if version is mismatching.
export default async function DestinationDetailsPage(props: any) {
  // Await the params object
  const params = await props.params;
  const { id } = params;
  
  const dest = destinations.find(d => d.id === id);

  if (!dest) {
    // If not found, use a fallback to avoid crashing or simply show the first one
    return (
        <div className="min-h-screen flex items-center justify-center text-xl font-bold bg-slate-900 text-white">
            Destination not found.
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700 pb-20">
      <Navbar />

      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img src={dest.images[0] || dest.thumbnail} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        
        {/* Top specific nav items */}
        <div className="absolute top-6 left-6 right-6 max-w-7xl mx-auto flex justify-between items-center z-10 w-full pr-12">
            <Link href="/explore" className="bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors p-3 rounded-full text-white cursor-pointer shadow-lg outline outline-1 outline-white/30">
                <ArrowLeft size={24} />
            </Link>
            <div className="flex gap-4">
                <button className="bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors p-3 rounded-full text-white cursor-pointer shadow-lg outline outline-1 outline-white/30">
                    <Share2 size={24} />
                </button>
                <button className="bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors p-3 rounded-full text-white cursor-pointer shadow-lg outline outline-1 outline-white/30">
                    <Heart size={24} />
                </button>
            </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 max-w-7xl mx-auto transform translate-y-8">
            <div className={`${glassPanel} p-8 md:p-10 border-white/20 inline-block w-full backdrop-blur-xl shadow-2xl`}>
                <div className="flex flex-wrap gap-3 mb-4">
                    {dest.tags.map(tag => (
                       <span key={tag} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-500/30">
                         {tag}
                       </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md mb-2">{dest.name}</h1>
                <p className="text-lg md:text-2xl text-slate-200 font-medium flex items-center gap-2 drop-shadow-sm">
                    <MapPin size={24} className="text-teal-400" /> {dest.city}, {dest.country}
                </p>
            </div>
        </div>
      </div>

      {/* Main Details Section */}
      <div className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Details) */}
          <div className="lg:col-span-2 space-y-10">
              
              {/* Overview */}
              <section>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <Info className="text-teal-600 dark:text-teal-400" /> Overview
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {dest.description}
                  </p>
              </section>

              {/* Highlights */}
              <section className={`${glassCard} p-8`}>
                  <h3 className="text-2xl font-bold mb-6 border-b border-slate-300/50 dark:border-slate-700/50 pb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dest.popularActivities.map((item: string, idx: number) => (
                           <div key={idx} className="flex items-center gap-3">
                               <CheckCircle className="text-emerald-500 flex-shrink-0" size={24} />
                               <span className="font-semibold text-lg">{item}</span>
                           </div>
                      ))}
                  </div>
              </section>

              {/* Reviews Preview */}
              <section>
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Traveler Reviews</h3>
                    <div className="flex items-center gap-2 bg-teal-100 dark:bg-teal-900/40 px-4 py-2 rounded-xl">
                        <Star className="fill-yellow-500 text-yellow-500" size={24} />
                        <span className="text-xl font-extrabold">{dest.rating}</span>
                        <span className="text-slate-500 font-medium text-sm">({dest.totalReviews || 124} reviews)</span>
                    </div>
                 </div>
                 <div className={`${glassPanel} p-6 border-l-4 border-l-teal-500`}>
                     <p className="italic text-slate-700 dark:text-slate-300 font-medium mb-4">"Absolutely breathtaking. The photos do not do it justice. The locals were friendly and the itinerary suggested by Travelo was flawless."</p>
                     <p className="text-sm font-bold">- Sarah J.</p>
                 </div>
              </section>
          </div>

          {/* Right Column (Booking Card) */}
          <div className="lg:col-span-1">
              <div className={`${glassPanel} p-8 sticky top-32 border-t-4 border-t-teal-500 shadow-2xl`}>
                  <div className="flex justify-between items-end mb-6">
                      <div>
                          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Starting from</p>
                          <p className="text-4xl font-extrabold text-slate-900 dark:text-white drop-shadow-sm">${dest.priceRange.min.toLocaleString()}</p>
                      </div>
                      <span className="font-medium text-slate-500">/ person</span>
                  </div>

                  <div className="space-y-4 mb-8">
                       <div className="flex items-center gap-3 p-4 bg-white/40 dark:bg-black/20 rounded-xl border border-white/40 dark:border-white/10">
                           <Calendar className="text-teal-600 dark:text-teal-400" />
                           <div>
                               <p className="text-xs font-bold text-slate-500 uppercase">Dates</p>
                               <p className="font-semibold cursor-pointer text-slate-900 dark:text-slate-200">Select Dates</p>
                           </div>
                       </div>
                       <div className="flex items-center gap-3 p-4 bg-white/40 dark:bg-black/20 rounded-xl border border-white/40 dark:border-white/10">
                           <Users className="text-teal-600 dark:text-teal-400" />
                           <div>
                               <p className="text-xs font-bold text-slate-500 uppercase">Travelers</p>
                               <p className="font-semibold cursor-pointer text-slate-900 dark:text-slate-200">2 Adults</p>
                           </div>
                       </div>
                  </div>

                  <button className="w-full py-4 text-lg bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-extrabold rounded-2xl shadow-[0_10px_20px_-10px_rgba(20,184,166,0.8)] transition-all hover:-translate-y-1 active:scale-95">
                      Book Now
                  </button>
                  <p className="text-center text-xs text-slate-500 font-medium mt-4">You won't be charged yet</p>
              </div>
          </div>
      </div>
    </div>
  );
}
