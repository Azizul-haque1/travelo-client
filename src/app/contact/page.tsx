import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/home/CallToAction';
import { glassCard, glassPanel } from '@/utils/glass';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-100 to-sky-200 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-teal-500 selection:text-white transition-colors duration-700">
      
      {/* Dynamic Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob rounded-full z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-2000 rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-teal-400 mix-blend-multiply dark:mix-blend-overlay filter blur-[120px] opacity-50 dark:opacity-30 animate-blob animation-delay-4000 rounded-full z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Contact Header */}
        <header className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 dark:from-white dark:via-teal-200 dark:to-white drop-shadow-sm mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200/90 leading-relaxed font-medium max-w-2xl mx-auto">
            Have a question, need travel advice, or want to share your experience? Our team is here to help you navigate your next grand adventure.
          </p>
        </header>

        {/* Contact Content */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className={`${glassCard} p-8 flex flex-col items-center text-center group cursor-default hover:-translate-y-2 transition-transform duration-500`}>
                <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-medium">We usually respond within 24 hours.</p>
                <a href="mailto:hello@travelo.com" className="text-teal-600 dark:text-teal-400 font-bold hover:underline">
                  hello@travelo.com
                </a>
              </div>

              <div className={`${glassCard} p-8 flex flex-col items-center text-center group cursor-default hover:-translate-y-2 transition-transform duration-500`}>
                <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm font-medium">Mon-Fri from 8am to 6pm.</p>
                <a href="tel:+1234567890" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">
                  +1 (234) 567-890
                </a>
              </div>

              <div className={`${glassCard} p-8 flex flex-col items-center text-center group cursor-default hover:-translate-y-2 transition-transform duration-500`}>
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  123 Explorer Avenue<br />
                  Wanderlust City, WL 10012<br />
                  Earth
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 ${glassPanel} p-8 md:p-12 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-[80px] translate-y-1/2 -translate-x-1/2" />
              
              <h2 className="text-3xl font-extrabold mb-8 relative z-10">Send us a Message</h2>
              
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane"
                      className="w-full bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium placeholder-slate-500 dark:placeholder-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium placeholder-slate-500 dark:placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium placeholder-slate-500 dark:placeholder-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help you?"
                    className="w-full bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium placeholder-slate-500 dark:placeholder-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 transition-all font-medium placeholder-slate-500 dark:placeholder-slate-400 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:from-teal-400 hover:to-emerald-400"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
