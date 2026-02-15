import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex items-center bg-zeectric-navy min-h-[90vh] lg:min-h-screen pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-zeectric-navy via-zeectric-navy/85 to-transparent z-10" />
        {/* Background image optimized with Next.js Image Component */}
        <Image
          src="/images/home/hero.avif"
          alt="High-voltage power infrastructure in Nigeria"
          fill
          priority
          className="object-cover opacity-60 scale-105"
          sizes="100vw"
        />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Mobile-optimized Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zeectric-blue/10 border border-zeectric-blue/20 text-zeectric-blue text-[9px] md:text-xs font-heading font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zeectric-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zeectric-blue"></span>
            </span>
            Premier EPC Company
          </div>
          
          {/* Fluid Typography Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.95] mb-6 md:mb-8 tracking-tighter uppercase">
            Engineering <br className="hidden sm:block" />
            <span className="text-zeectric-blue">Excellence.</span>
          </h1>
          
          <p className="font-sans text-base md:text-xl text-slate-300 mb-10 md:mb-12 leading-relaxed max-w-2xl font-medium">
            Zeectric Engineering provides reliable, efficient, and technologically advanced solutions 
            that drive industrial and infrastructural development across Nigeria.
          </p>

          {/* Adaptive Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link 
              href="/services" 
              className="font-heading px-8 py-4 md:px-10 md:py-5 bg-zeectric-blue hover:bg-white hover:text-zeectric-blue text-white rounded-2xl font-bold text-center transition-all shadow-xl shadow-zeectric-blue/20 uppercase tracking-widest text-sm active:scale-[0.98]"
            >
              Explore Services
            </Link>
            {/* <Link 
              href="/projects" 
              className="font-heading px-8 py-4 md:px-10 md:py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-2xl font-bold text-center transition-all uppercase tracking-widest text-sm active:scale-[0.98]"
            >
              Track Record
            </Link> */}
          </div>

          {/* ================= IMPACT STATS: RESPONSIVE GRID ================= */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-10">
            <div className="group">
              <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 group-hover:text-zeectric-blue transition-colors">2019</p>
              <p className="font-heading text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Incorporated</p>
            </div>
            <div className="group">
              <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 group-hover:text-zeectric-blue transition-colors">15km+</p>
              <p className="font-heading text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Power Lines</p>
            </div>
            <div className="hidden md:block group">
              <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 group-hover:text-zeectric-blue transition-colors">RC 1563638</p>
              <p className="font-heading text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">CAC Registered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}