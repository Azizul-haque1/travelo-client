import React from 'react';
import { Plane, Heart } from 'lucide-react';
import { glassPanel } from '@/utils/glass';

export default function Footer() {
  return (
    <footer className={`${glassPanel} !rounded-b-none !rounded-t-[3rem] mt-20 border-b-0`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="p-2 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl text-white shadow-lg">
                <Plane size={24} />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-indigo-900 dark:from-sky-300 dark:to-indigo-300">
                Travelo
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
              Making travel smarter, easier, and accessible for everyone through the power of artificial intelligence.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/30 dark:bg-black/30 flex items-center justify-center cursor-pointer hover:bg-white/50 dark:hover:bg-white/10 transition-colors shadow-inner">
                  <div className="w-4 h-4 bg-slate-800 dark:bg-slate-200 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">AI Itineraries</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Hotels</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Flights</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 font-medium text-slate-700 dark:text-slate-300">
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Trust & Safety</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 dark:border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-600 dark:text-slate-400 font-medium text-sm">
          <p>&copy; 2026 Travelo AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Crafted with <Heart size={14} className="text-rose-500 fill-rose-500 mx-1" /> for travelers worldwide.
          </div>
        </div>
      </div>
    </footer>
  );
}
