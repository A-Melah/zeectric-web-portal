"use client";

import React, { useState } from 'react';
import { Zap, Power, Sun, Settings, Cpu, ShoppingCart, Gauge, MapPin, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // encode function for Netlify form submission
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "zeectric-leads", email: email })
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    // Lightened background from slate-950 to slate-900 for better visibility
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decoration - Increased opacity for better texture */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Brighter Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-900/30 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen max-w-5xl text-center">
        
        <header className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/40">
              <Zap className="w-8 h-8 text-white fill-current" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase text-white">
              Zeectric <span className="text-blue-400">Engineering</span>
            </h1>
          </div>
          <div className="inline-block px-4 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            Nigeria's Premier EPC Partner
          </div>
        </header>

        <section className="space-y-6 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Engineering a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
              Smarter Power Grid.
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            We are building a new digital home to showcase our Engineering, Procurement, and Construction excellence. Launching soon.
          </p>
        </section>

        <section className="mt-12 w-full max-w-md">
          {status === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/50 p-6 rounded-2xl flex flex-col items-center gap-3 animate-in fade-in zoom-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              <p className="text-emerald-100 font-medium">You're on the list! We'll be in touch soon.</p>
              <button onClick={() => setStatus('idle')} className="text-xs text-emerald-400 underline underline-offset-4">Send another email</button>
            </div>
          ) : (
            <form 
              name="zeectric-leads" 
              method="POST" 
              data-netlify="true" 
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="zeectric-leads" />
              
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required 
                disabled={status === 'loading'}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group active:scale-95"
              >
                {status === 'loading' ? 'Processing...' : 'Notify Me'}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>}
          <p className="text-slate-400 text-xs mt-4">
            Be the first to receive our corporate profile and launch updates.
          </p>
        </section>

        {/* Capability Grid - Increased visibility */}
        <section className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {[
            { icon: Power, label: "Power Systems" },
            { icon: Sun, label: "Renewable Energy" },
            { icon: Settings, label: "Gas Turbine O&M" },
            { icon: Cpu, label: "Instrumentation" },
            { icon: ShoppingCart, label: "Procurement" },
            { icon: Gauge, label: "Smart Metering" }
          ].map((item, idx) => (
            <div key={idx} className="p-5 border border-slate-700 rounded-3xl bg-slate-800/50 flex flex-col items-center text-center group hover:border-blue-500/50 transition-all cursor-default">
              <item.icon className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-200">{item.label}</span>
            </div>
          ))}
        </section>

        <footer className="mt-32 w-full pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Trans Amadi, Port Harcourt, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>info@zeectric.ng</span>
            </div>
          </div>
          
          <div className="flex gap-5 font-medium">
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a>
          </div>
        </footer>
      </main>
    </div>
  );
}