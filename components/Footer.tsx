import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zeectric-slate text-slate-300 pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. COMPANY BIO & LOGO BADGE */}
          <div className="space-y-6">
            <Link href="/" className="shrink-0 inline-block group transition-transform hover:scale-105">
              {/* Logo Badge Container: Matches Navbar Style */}
              <div className="relative w-44 h-12 flex items-center justify-center bg-white border border-white/10 rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)] px-3 py-1.5 overflow-hidden transition-all group-hover:border-zeectric-blue/40">
                <Image 
                  src="/logo.svg" 
                  alt="Zeectric Engineering Nig. Ltd Logo" 
                  fill
                  className="object-contain p-1" 
                />
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-400">
              A premier EPC company delivering high-quality services in electrical power engineering, 
              instrumentation, and renewable energy across Nigeria.
            </p>
            <div className="pt-2">
              <p className="font-heading text-xs font-bold text-zeectric-blue uppercase tracking-widest mb-1">
                Incorporation
              </p>
              <p className="text-xs font-mono text-slate-500">RC: 1563638</p>
            </div>
          </div>

          {/* 2. QUICK NAVIGATION */}
          <div>
            <h4 className="font-heading text-white font-bold uppercase tracking-wider text-sm mb-8">
              Technical Services
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/services" className="hover:text-zeectric-blue transition-colors">Electrical & Power Engineering</Link></li>
              <li><Link href="/services" className="hover:text-zeectric-blue transition-colors">Renewable Energy Solutions</Link></li>
              <li><Link href="/services" className="hover:text-zeectric-blue transition-colors">Gas Turbine O&M</Link></li>
              <li><Link href="/services" className="hover:text-zeectric-blue transition-colors">Metering & Automation</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT DETAILS */}
          <div>
            <h4 className="font-heading text-white font-bold uppercase tracking-wider text-sm mb-8">
              Headquarters
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-zeectric-blue shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  146, Trans-Amadi, Industrial Layout, <br />
                  Port Harcourt, Rivers State, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-zeectric-blue shrink-0 group-hover:scale-110 transition-transform" />
                <span>+234 (0)816 631 2933</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-zeectric-blue shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@zeectric.ng</span>
              </li>
            </ul>
          </div>

          {/* 4. STATUTORY ACCREDITATION */}
          <div>
            <h4 className="font-heading text-white font-bold uppercase tracking-wider text-sm mb-8">
              Accreditation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'FIRS', title: 'Tax' },
                { name: 'PENCOM', title: 'Pension' },
                { name: 'ITF', title: 'Training' },
                { name: 'NSITF', title: 'Social' }
              ].map((item) => (
                <div 
                  key={item.name} 
                  className="h-12 bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10 hover:border-zeectric-blue/50 transition-colors group"
                >
                  <span className="font-heading text-[10px] font-black text-white group-hover:text-zeectric-blue transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[7px] font-bold text-slate-500 uppercase tracking-tighter">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-heading text-[10px] font-medium text-slate-500 uppercase tracking-widest">
            &copy; {currentYear} ZEECTRIC ENGINEERING NIG. LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 font-heading text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}