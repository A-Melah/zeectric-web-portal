"use client";
import {
  Calendar,
  MapPin,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  Database,
  Clock,
  Settings
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* =========================
    TYPES & DATA
========================= */
type Project = {
  title: string;
  location: string;
  year: string;
  description: string;
  category: string;
  image: string;
  specs?: string[];
};

const mainProjects: Project[] = [
  {
    title: "91.5km 33KV Power Line Rehab",
    location: "Akpajo to Onne (PHED)",
    year: "2021",
    description: "Major grid restoration involving the replacement of aging conductors and cross-arms to stabilize power supply for the Onne industrial corridor.",
    category: "Grid Rehabilitation",
    image: "/images/home/phed.avif", 
    specs: ["91.5km Coverage", "33KV High Tension", "Conductor Upgrade"]
  },
  {
    title: "Dual Injection Substations",
    location: "Agip Base",
    year: "2020",
    description: "Complete turnkey solution including civil works, equipment rigging, and protection relay coordination for critical petroleum base operations.",
    category: "Substation Engineering",
    image: "/images/home/substation.avif", 
    specs: ["Turnkey Installation", "Civil & Electrical", "Relay Coordination"]
  },
  {
    title: "15km HV Transmission Corridor",
    location: "Eliozu to Eneka",
    year: "2019",
    description: "Route survey, lattice tower erection, and stringing for a 15km corridor designed for high-density urban expansion and load growth.",
    category: "Transmission Corridor",
    image: "/images/home/transmission.avif", 
    specs: ["15km Greenfield", "Lattice Tower Erection", "Route Survey"]
  },
  {
    title: "2500KVA Transformer Deployment",
    location: "Trans Amadi Industrial Layout",
    year: "2017",
    description: "Sizing, procurement, and testing of a 33/0.415KV transformer system for a multi-unit heavy manufacturing facility.",
    category: "Industrial Power",
    image: "/images/projects/transformer.avif", 
    specs: ["2500KVA Output", "Industrial Step-down", "Protection Switchgear"]
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white text-zeectric-slate selection:bg-zeectric-blue selection:text-white min-h-screen">

      {/* ================= HERO SECTION: FLUID TYPOGRAPHY ================= */}
      <section className="relative flex items-center bg-zeectric-navy pt-28 pb-16 md:pt-40 md:pb-24 lg:min-h-[50vh] overflow-hidden">
        <Image
          src="/images/about/hero.avif" 
          alt="Technical project landscape"
          fill
          priority
          className="object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zeectric-navy via-zeectric-navy/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-zeectric-blue/10 border border-zeectric-blue/20 text-zeectric-blue text-[10px] font-heading font-black uppercase tracking-[0.3em]">
            <Database className="w-3.5 h-3.5 mr-2" /> Execution History
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.85] mb-6 tracking-tighter uppercase">
            PROVEN <span className="text-zeectric-blue">EXECUTION.</span>
          </h1>
          
          <p className="font-sans text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            From high-voltage corridors to specialized substations, our portfolio 
            represents the technical backbone of Nigeria's industrial growth.
          </p>
        </div>
      </section>

      {/* ================= STATS OVERLAP: RESPONSIVE GRID ================= */}
      <div className="relative z-20 -mt-10 md:-mt-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Transmission", val: "100km+" },
            { label: "Transformer Load", val: "50MVA+" },
            { label: "Active Districts", val: "12+" },
            { label: "Safety Rating", val: "100%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 md:p-8 rounded-2xl border border-slate-100 shadow-2xl group hover:border-zeectric-blue transition-all">
              <p className="font-heading text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-zeectric-blue transition-colors">{stat.label}</p>
              <p className="font-heading text-2xl md:text-4xl font-black text-zeectric-slate tracking-tighter">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PORTFOLIO GRID: ADAPTIVE CARDS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {mainProjects.map((project, idx) => (
              <article key={idx} className="group flex flex-col bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500">
                
                {/* Image Container with Responsive Aspect */}
                <div className="relative h-62.5 md:h-87.5 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-zeectric-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="font-heading px-3 py-1.5 bg-zeectric-blue text-white rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                    <MapPin className="w-3 h-3 text-zeectric-blue" />
                    <p className="font-heading text-[8px] md:text-[9px] text-zeectric-slate font-black uppercase tracking-tight leading-none">{project.location}</p>
                  </div>
                </div>

                {/* Technical Content: Fluid Typography */}
                <div className="p-8 md:p-10 flex flex-col grow">
                  <div className="flex items-center gap-2 font-heading text-[10px] font-black text-zeectric-blue uppercase tracking-widest mb-4">
                    <Calendar className="w-4 h-4" /> Delivered {project.year}
                  </div>
                  
                  <h3 className="font-heading text-xl md:text-3xl font-bold text-zeectric-slate mb-4 group-hover:text-zeectric-blue transition-colors leading-tight uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed mb-8 grow font-medium">
                    {project.description}
                  </p>

                  {/* Tech Specs: Mobile Optimized Wrap */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.specs?.map((spec, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-white rounded-md border border-slate-200 text-[8px] md:text-[9px] font-heading font-black text-slate-400 uppercase tracking-widest">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="font-heading inline-flex items-center gap-2 text-[10px] font-black text-zeectric-slate hover:text-zeectric-blue transition-all uppercase tracking-widest group/link mt-auto">
                    Inquire for Project Specs <ArrowUpRight className="w-4 h-4 text-zeectric-blue group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEGACY MILESTONES: COMPACT GRID ================= */}
      <section className="py-16 md:py-24 bg-zeectric-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
            <div className="max-w-xl">
              <span className="font-heading text-[10px] font-black text-zeectric-blue uppercase tracking-[0.3em] mb-4 block">Historical Track Record</span>
              <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Legacy Installations</h2>
              <p className="font-sans text-slate-400 mt-6 text-sm md:text-lg font-medium">Projects spanning two decades of engineering prior to our 2019 incorporation.</p>
            </div>
            <div className="h-1 w-20 bg-zeectric-blue/30 hidden lg:block mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Umuleri Community", desc: "500KVA Transformer Grid Integration", year: "2009" },
              { title: "Grand Venice Hotel", desc: "Commercial HV/LV Switchgear System", year: "2008" },
              { title: "Wilson Bakeries", desc: "200KVA Industrial Power Upgrade", year: "2005" },
            ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-4xl group hover:bg-white/10 transition-all relative overflow-hidden">
                <div className="absolute -top-3 -right-3 font-heading font-black text-6xl text-white/5 group-hover:text-zeectric-blue/10 transition-colors pointer-events-none">
                  {m.year.slice(-2)}
                </div>
                <Zap className="w-8 h-8 text-zeectric-blue mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading font-bold text-lg mb-2 uppercase tracking-tight text-white">{m.title}</h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed font-medium">{m.desc}</p>
                <div className="mt-6 font-heading text-[9px] font-black text-zeectric-blue tracking-widest uppercase">{m.year} Foundation Project</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: TOUCH TARGETS ================= */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block p-6 rounded-4xl bg-zeectric-blue/10 mb-8">
            <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-zeectric-blue" />
          </div>
          <h2 className="font-heading text-4xl md:text-7xl font-black text-zeectric-slate mb-8 uppercase tracking-tighter leading-none">
            READY TO <span className="text-zeectric-blue">MOBILIZE.</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Our track record is built on the rigorous application of engineering standards and specialized regional expertise.
          </p>
          <Link href="/contact" className="font-heading inline-block px-10 py-5 bg-zeectric-blue text-white rounded-2xl font-bold text-sm md:text-lg hover:bg-zeectric-navy shadow-xl shadow-zeectric-blue/20 transition-all uppercase tracking-tighter active:scale-[0.98]">
            Request Project Quote
          </Link>
        </div>
      </section>

    </main>
  );
}