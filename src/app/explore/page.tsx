import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { glassCard, glassPanel } from '@/utils/glass';
import { Search, MapPin, Star, Heart, Calendar, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function ExplorePage() {
  const destinations = [
    { name: "Santorini", location: "Greece", price: "$1,400", rating: "4.9", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800", tags: ["Romantic", "Beach"] },
    { name: "Kyoto", location: "Japan", price: "$1,850", rating: "4.8", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", tags: ["Culture", "Nature"] },
    { name: "Banff National Park", location: "Canada", price: "$950", rating: "4.9", img: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=800", tags: ["Mountain", "Adventure"] },
    { name: "Maldives", location: "South Asia", price: "$2,200", rating: "5.0", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", tags: ["Luxury", "Beach"] },
    { name: "Rome", location: "Italy", price: "$1,100", rating: "4.7", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800", tags: ["History", "City"] },
    { name: "Cape Town", location: "South Africa", price: "$1,350", rating: "4.8", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800", tags: ["Nature", "City"] },
    { name: "Machu Picchu", location: "Peru", price: "$850", rating: "4.9", img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800", tags: ["Adventure", "History"] },
    { name: "Dubai", location: "UAE", price: "$1,600", rating: "4.7", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", tags: ["Luxury", "City"] },
    { name: "Bora Bora", location: "French Polynesia", price: "$3,100", rating: "4.9", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800", tags: ["Romantic", "Beach"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700 flex flex-col">

      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar />

        {/* Header Section */}
        <header className="px-6 pt-16 pb-8 max-w-7xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm mb-4">
            Explore the World
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200/90 font-medium max-w-2xl">
            Discover and securely book the most spectacular destinations globally, hand-picked and highly rated by Travelo AI.
          </p>
        </header>

        {/* Filter Bar */}
        <section className="px-6 mb-12 max-w-7xl mx-auto w-full sticky top-24 z-40">
          <div className={`${glassPanel} p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center justify-between`}>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative border-r border-slate-300 dark:border-slate-700 sm:pr-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Destination</label>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-teal-600 dark:text-teal-400" />
                  <input type="text" placeholder="Where to?" className="bg-transparent border-none outline-none w-full font-semibold placeholder-slate-700 dark:placeholder-slate-400 text-slate-900 dark:text-white" />
                </div>
              </div>

              <div className="relative border-r border-slate-300 dark:border-slate-700 sm:pr-4">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">When</label>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Calendar size={18} className="text-teal-600 dark:text-teal-400" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Select Dates</span>
                  <ChevronDown size={16} className="ml-auto text-slate-400" />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Travelers</label>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Search size={18} className="text-teal-600 dark:text-teal-400" />
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Guests & Rooms</span>
                  <ChevronDown size={16} className="ml-auto text-slate-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-300 dark:border-slate-700 md:border-none">
              <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/20 dark:bg-black/20 hover:bg-white/40 dark:hover:bg-white/10 transition-colors font-bold text-slate-700 dark:text-slate-200 flex-1 md:flex-none justify-center border border-white/30 dark:border-white/10">
                <SlidersHorizontal size={18} /> Filters
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-400 hover:to-sky-500 text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] flex-1 md:flex-none text-center">
                Search
              </button>
            </div>

          </div>
        </section>

        {/* Categories / Tags */}
        <div className="max-w-7xl mx-auto px-6 mb-10 overflow-x-auto hide-scrollbar w-full">
          <div className="flex gap-3 min-w-max pb-4">
            {["All Destinations", "Top Rated", "Beach", "Mountain", "City", "Historical", "Luxury", "Budget Friendly", "Romantic"].map((cat, i) => (
              <button key={i} className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${i === 0 ? 'bg-teal-500 text-white border-teal-500 shadow-md' : 'bg-white/30 dark:bg-black/30 border-white/40 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-white/10 hover:border-teal-500/50'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <section className="px-6 mb-20 max-w-7xl mx-auto w-full flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <div key={i} className={`${glassCard} overflow-hidden flex flex-col group cursor-pointer`}>
                <div className="relative h-64 w-full overflow-hidden">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 group-hover:bg-white/40 transition-colors cursor-pointer z-10">
                    <Heart size={20} className="text-white drop-shadow-md" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {dest.tags.map(tag => (
                      <span key={tag} className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{dest.name}</h3>
                      <div className="flex items-center gap-1 bg-teal-500/10 dark:bg-teal-400/10 px-2 py-1 rounded-md text-teal-700 dark:text-teal-300 font-bold text-sm">
                        <Star size={14} className="fill-current" /> {dest.rating}
                      </div>
                    </div>
                    <p className="flex items-center gap-1 text-slate-600 dark:text-slate-400 mt-1 mb-6 text-sm font-medium">
                      <MapPin size={16} /> {dest.location}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto border-t border-slate-300/50 dark:border-slate-700/50 pt-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Starting from</span>
                      <span className="text-xl font-extrabold text-slate-900 dark:text-white">{dest.price} <span className="text-sm font-medium text-slate-500">/person</span></span>
                    </div>
                    <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95 text-sm">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className={`${glassPanel} px-8 py-4 font-bold text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/10 transition-colors flex items-center gap-2 !rounded-full shadow-md`}>
              Load More Destinations <ChevronDown size={20} />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
