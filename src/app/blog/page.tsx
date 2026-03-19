import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/home/CallToAction';
import { glassCard, glassPanel } from '@/utils/glass';
import { Search, Calendar, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const blogs = [
    { title: "Top 10 Hidden Beaches in Europe", category: "Guide", date: "Oct 12, 2026", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
    { title: "Pack Like a Pro for a 2-Week Journey", category: "Tips", date: "Oct 05, 2026", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800" },
    { title: "How AI is Reshaping Modern Tourism", category: "Tech", date: "Sep 28, 2026", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "The Ultimate Guide to Kyoto in Autumn", category: "Destination", date: "Sep 21, 2026", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" },
    { title: "Sustainable Travel: Leaving No Trace", category: "Eco", date: "Sep 15, 2026", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
    { title: "Navigating Street Food Markets safely", category: "Tips", date: "Sep 02, 2026", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Blog Header */}
        <header className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm mb-6">
                Travel Insights
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200/90 leading-relaxed font-medium">
                Expert tips, detailed guides, and the latest trends in the world of smart travel.
              </p>
            </div>
            
            <div className={`${glassPanel} p-2 flex items-center w-full max-w-md !rounded-full bg-white/40 dark:bg-black/40`}>
              <Search className="text-slate-500 ml-4 mr-2" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-transparent border-none outline-none flex-1 py-3 text-slate-900 dark:text-white placeholder-slate-700 dark:placeholder-slate-400 font-medium"
              />
              <button className="bg-teal-600 dark:bg-teal-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-transform hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </header>

        {/* Categories Bar */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap gap-4">
            {["All", "Guides", "Tips", "Destinations", "Tech", "Eco-Travel"].map((cat, i) => (
              <button key={i} className={`px-6 py-2 rounded-full font-semibold border border-white/30 backdrop-blur-md transition-all hover:bg-teal-500 hover:text-white ${i === 0 ? 'bg-teal-500 text-white' : 'bg-white/20 dark:bg-black/20 text-slate-800 dark:text-slate-200'}`}>
                {cat}
              </button>
            ))}
        </div>

        {/* Featured Post */}
        <section className="px-6 max-w-7xl mx-auto mb-16">
          <div className={`${glassPanel} overflow-hidden grid grid-cols-1 md:grid-cols-2 group cursor-pointer`}>
            <div className="h-64 md:h-auto relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" alt="Featured" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:hidden">
                <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-3">Featured</span>
                <h2 className="text-3xl font-extrabold text-white">The Future of Solo Travel with AI Companions</h2>
              </div>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center hidden md:flex">
              <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-6">Featured</span>
              <h2 className="text-4xl font-extrabold mb-6 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">The Future of Solo Travel with AI Companions</h2>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-8 text-lg leading-relaxed">
                Discover how deep-learning models are acting as personal guides, security details, and local translators for millions of solo adventurers exploring off-grid locales.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm">
                  <Calendar size={16} /> Oct 24, 2026
                </div>
                <div className="text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read Article <ChevronRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-10 px-6 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div key={i} className={`${glassCard} flex flex-col overflow-hidden group cursor-pointer`}>
                <div className="h-56 overflow-hidden relative">
                  <img src={blog.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={blog.title} />
                  <span className="absolute top-4 left-4 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-white/40 shadow-sm uppercase tracking-wider">{blog.category}</span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{blog.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-6 line-clamp-2">
                       A comprehensive look into what makes this subject so vital for modern travelers looking to get the maximum experience with minimum stress.
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/20 dark:border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <Calendar size={16} /> {blog.date}
                    </div>
                    <ChevronRight size={20} className="text-teal-600 dark:text-teal-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Mock */}
          <div className="flex justify-center mt-16 gap-2">
            {[1, 2, 3, "...", 8].map((page, i) => (
              <button key={i} className={`w-12 h-12 rounded-full font-bold flex items-center justify-center transition-all ${page === 1 ? 'bg-teal-500 text-white shadow-lg' : 'bg-white/20 dark:bg-black/20 text-slate-800 dark:text-slate-200 hover:bg-white/40 border border-white/30'}`}>
                {page}
              </button>
            ))}
          </div>
        </section>

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
