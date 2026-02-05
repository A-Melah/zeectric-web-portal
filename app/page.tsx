"use client";

import React, { useState } from 'react';
import { Zap, Power, Sun, Settings, Cpu, ShoppingCart, Gauge, MapPin, Mail, ChevronRight } from 'lucide-react';

/**
 * Zeectric Engineering - Coming Soon Page
 * Built with Next.js, TypeScript, and Tailwind CSS.
 * Optimized for industrial/engineering brand identity.
 */
export default function App() {
  const [email, setEmail] = useState('');

  // Note: For Netlify forms in Next.js, ensure you have a hidden HTML form 
  // in your public/index.html or handled via a dedicated honeypot field.
  const handleSubmit = (e: React.FormEvent) => {
    // Netlify will detect the data-netlify attribute on the form
    // but the actual submission logic is handled by the browser 
    // or through an AJAX request if you choose to intercept it.
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-125 h-125 bg-slate-800/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen max-w-5xl text-center">
        
        {/* Logo Section */}
        <header className="mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
              <Zap className="w-8 h-8 text-white fill-current" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase">
              Zeectric <span className="text-blue-500">Engineering</span>
            </h1>
          </div>
          <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            Nigeria's Premier EPC Partner
          </div>
        </header>

        {/* Hero Section */}
        <section className="space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Engineering a <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-blue-500">
              Smarter Power Grid.
            </span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            We are building a new digital home to showcase our Engineering, Procurement, and Construction excellence. Launching soon for our partners and clients.
          </p>
        </section>

        {/* Lead Capture Form */}
        <section className="mt-12 w-full max-w-md animate-in fade-in zoom-in duration-1000 delay-300">
          <form 
            name="zeectric-leads" 
            method="POST" 
            data-netlify="true" 
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            {/* Netlify Hidden Input for App Router */}
            <input type="hidden" name="form-name" value="zeectric-leads" />
            
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required 
              className="flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all backdrop-blur-sm"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group active:scale-95"
            >
              Notify Me
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-slate-500 text-xs mt-4">
            Be the first to receive our full corporate profile and launch updates.
          </p>
        </section>

        {/* Services Capability Grid */}
        <section className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full opacity-70 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          {[
            { icon: Power, label: "Power Systems" },
            { icon: Sun, label: "Renewable Energy" },
            { icon: Settings, label: "Gas Turbine O&M" },
            { icon: Cpu, label: "Instrumentation" },
            { icon: ShoppingCart, label: "Procurement" },
            { icon: Gauge, label: "Smart Metering" }
          ].map((item, idx) => (
            <div key={idx} className="p-5 border border-white/5 rounded-3xl bg-white/2 flex flex-col items-center text-center group hover:bg-white/5 hover:border-blue-500/30 transition-all cursor-default">
              <item.icon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </section>

        {/* Bottom Contact / Location Bar */}
        <footer className="mt-32 w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm animate-in fade-in duration-1000 delay-700">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Trans Amadi, Port Harcourt, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info@zeectriceng.com</span>
            </div>
          </div>
          
          <div className="flex gap-5 font-medium">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </footer>
      </main>
    </div>
  );
}