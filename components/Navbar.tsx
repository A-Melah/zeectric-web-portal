"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Clickable Logo Branding with Blended Border */}
          <Link href="/" className="shrink-0 flex items-center group transition-transform hover:scale-105">
            <div className="relative w-44 h-12 flex items-center justify-center bg-white border border-zeectric-slate/15 rounded-xl shadow-[0_2px_15px_-3px_rgba(51,61,71,0.08)] px-3 py-1.5 overflow-hidden transition-all group-hover:border-zeectric-blue/30">
              <Image 
                src="/logo.svg" 
                alt="Zeectric Engineering Nig. Ltd Logo" 
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`font-heading text-sm font-bold uppercase tracking-widest transition-all relative py-2 ${
                    isActive 
                      ? "text-zeectric-blue" 
                      : "text-zeectric-slate hover:text-zeectric-blue"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zeectric-blue rounded-full" />
                  )}
                </Link>
              );
            })}
            
            <Link 
              href="/contact" 
              className="font-heading bg-zeectric-blue text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-tighter hover:bg-zeectric-slate transition-all shadow-lg shadow-zeectric-blue/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-zeectric-slate hover:text-zeectric-blue p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-10 space-y-3 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`block px-4 py-3 rounded-xl font-heading font-bold uppercase tracking-widest text-sm transition-colors ${
                  isActive 
                    ? "bg-zeectric-blue/10 text-zeectric-blue" 
                    : "text-zeectric-slate hover:bg-slate-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 px-3">
            <Link 
              href="/contact" 
              className="block w-full text-center font-heading bg-zeectric-blue text-white px-6 py-4 rounded-xl font-bold uppercase tracking-tighter shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}