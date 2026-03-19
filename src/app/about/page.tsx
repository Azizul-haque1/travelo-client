import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/home/CallToAction';
import { glassCard, glassPanel } from '@/utils/glass';
import { Compass, Users, Globe, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar />
        
        {/* About Hero */}
        <header className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm mb-6">
              Our Journey
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200/90 leading-relaxed font-medium mx-auto max-w-2xl">
              We believe that travel is the ultimate connector. Travelo was born from a desire to make exploring the world seamless, deeply personal, and powered by the cutting edge of artificial intelligence.
            </p>
          </div>
        </header>

        {/* Mission Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className={`${glassPanel} p-10 md:p-16 relative overflow-hidden`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-6">The Mission</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                  Every traveler is unique, but the planning process has always been one-size-fits-all. Our mission is to democratize bespoke luxury travel planning. By utilizing fine-tuned Local Language Models and vast global datasets, we provide hyper-personalized itineraries in seconds.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="flex flex-col gap-2">
                    <Globe size={32} className="text-teal-600 dark:text-teal-400" />
                    <h3 className="text-xl font-bold">100+</h3>
                    <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm uppercase tracking-wider">Countries Covered</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Users size={32} className="text-teal-600 dark:text-teal-400" />
                    <h3 className="text-xl font-bold">500k</h3>
                    <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm uppercase tracking-wider">Active Explorers</span>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden relative border border-white/20 shadow-lg">
                 <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Our Team" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold drop-shadow-sm mb-4">Our Core Values</h2>
            <p className="text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto">The principles that guide everything we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Compass />, title: "Discovery First", desc: "Always pushing travelers off the beaten path into authentic local experiences." },
              { icon: <Award />, title: "Uncompromising Quality", desc: "If our AI recommends it, we ensure it's vetted, reviewed, and exceptional." },
              { icon: <Heart />, title: "Empathy & Care", desc: "Understanding the stress of travel and designing solutions to completely alleviate it." },
            ].map((val, i) => (
              <div key={i} className={`${glassCard} p-10 flex flex-col items-center text-center`}>
                <div className="p-4 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 mb-6 font-bold shadow-inner inline-flex">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
