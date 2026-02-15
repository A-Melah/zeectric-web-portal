import {
  Zap,
  Cpu,
  Sun,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Cog,
  Lightbulb,
  Truck,
  Gauge
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    id: "01",
    title: "Electrical & Power Engineering",
    tagline: "High-Voltage EPIC Solutions",
    icon: Zap,
    description: "Full-lifecycle engineering, procurement, installation, and commissioning (EPIC) for national and industrial power networks.",
    features: ["HV Transmission Systems", "Substation Deployment", "Industrial Grid Infrastructure", "Grid Commissioning"],
    image: "/images/home/power.avif", 
  },
  {
    id: "02",
    title: "Instrumentation & Automation",
    tagline: "Precision Control Systems",
    icon: Cpu,
    description: "Advanced control logic and sensor integration designed to optimize industrial output and minimize operational downtime.",
    features: ["SCADA & PLC Integration", "Process Control Design", "Calibration Services", "Real-time Monitoring"],
    image: "/images/home/instrumentation.avif",
  },
  {
    id: "03",
    title: "Renewable Energy Assets",
    tagline: "Sustainable Power Deployment",
    icon: Sun,
    description: "Strategic deployment of off-grid and on-grid solar solutions for commercial and industrial neighborhood micro-grids.",
    features: ["Utility-scale Solar", "Hybrid BESS Storage", "Grid-tied Integration", "Energy Auditing"],
    image: "/images/home/solar.avif",
  },
  {
    id: "04",
    title: "Turbine Operations & Maint.",
    tagline: "Lifecycle Reliability",
    icon: Wrench,
    description: "Full-scale operation, performance optimization, and maintenance of gas turbines to ensure long-term longevity.",
    features: ["Turbine Troubleshooting", "Preventive Maintenance", "Performance Tuning", "Global Parts Sourcing"],
    image: "/images/home/turbine.avif",
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-white text-zeectric-slate selection:bg-zeectric-blue selection:text-white min-h-screen">

      {/* ================= HERO SECTION: FLUID TYPOGRAPHY & BRAND DEPTH ================= */}
      <section className="relative flex items-center bg-zeectric-navy pt-28 pb-16 md:pt-40 md:pb-24 lg:min-h-[50vh] overflow-hidden">
        <Image
          src="/images/services/hero.avif" 
          alt="Technical capability landscape"
          fill
          priority
          className="object-cover opacity-60 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zeectric-navy via-zeectric-navy/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-zeectric-blue/10 border border-zeectric-blue/20 text-zeectric-blue text-[10px] font-heading font-black uppercase tracking-[0.3em]">
            <Lightbulb className="w-3.5 h-3.5 mr-2" /> Technical Framework
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.9] mb-6 tracking-tighter uppercase">
            Core <span className="text-zeectric-blue">Capabilities.</span>
          </h1>
          
          <p className="font-sans text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Delivering mission-critical electrical, renewable, and turbine 
            engineering solutions across the Nigerian landscape.
          </p>
        </div>
      </section>

      {/* ================= CATALOG SECTION: ALTERNATING RESPONSIVE GRID ================= */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-40">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col gap-10 md:gap-20 lg:gap-24 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Visual Side: Progressive Image Scaling */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-square md:aspect-4/3 lg:aspect-square rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 z-10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-zeectric-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Floating Brand Icon: Desktop Only Placement */}
                <div className={`absolute -bottom-6 ${index % 2 !== 0 ? "-left-6" : "-right-6"} z-20 bg-zeectric-blue text-white p-5 md:p-7 rounded-3xl md:rounded-3xl shadow-2xl hidden sm:flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 md:w-10 md:h-10" />
                </div>
              </div>

              {/* Content Side: Fluid Technical Info */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-10">
                <div className="space-y-4">
                  <span className="font-heading text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-zeectric-blue">
                    {service.tagline}
                  </span>
                  <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-zeectric-slate uppercase leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-zeectric-blue transition-colors">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-zeectric-blue" />
                      <span className="font-sans text-xs md:text-sm font-bold text-slate-700 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="font-heading inline-flex items-center justify-center gap-3 bg-zeectric-slate text-white w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-sm hover:bg-zeectric-blue transition-all uppercase tracking-widest shadow-xl shadow-zeectric-slate/10 active:scale-[0.98]"
                >
                  Technical Inquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUPPORT SECTION: HIGH-CONTRAST MOBILE GRID ================= */}
      <section className="py-20 md:py-32 bg-zeectric-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
            <div className="max-w-xl text-left">
              <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Support Logistics</h2>
              <p className="font-sans text-slate-400 text-base md:text-xl mt-6 font-medium leading-relaxed">
                Ensuring project sustainability through global supply chain integrity and precision industrial metering.
              </p>
            </div>
            <div className="h-1.5 w-24 bg-zeectric-blue hidden md:block mb-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
            {[
              { title: "Procurement", icon: Truck, desc: "Sourcing high-quality engineering materials with global logistics alignment." },
              { title: "Metering", icon: Gauge, desc: "Deployment of smart and conventional metering for precise industrial measurement." }
            ].map((item, i) => (
              <div key={i} className="group p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl">
                <item.icon className="w-10 h-10 md:w-14 md:h-14 text-zeectric-blue mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading text-xl md:text-3xl font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h4>
                <p className="font-sans text-sm md:text-lg text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: TOUCH-OPTIMIZED ACTION ================= */}
      <section className="py-24 md:py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Cog className="w-16 h-16 md:w-24 md:h-24 text-zeectric-blue mx-auto mb-10 opacity-20 animate-spin-slow" />
          <h2 className="font-heading text-4xl md:text-8xl font-black text-zeectric-slate mb-10 uppercase tracking-tighter leading-[0.9]">
            READY TO <span className="text-zeectric-blue">MOBILIZE.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              href="/contact"
              className="font-heading px-12 py-5 md:px-16 md:py-7 bg-zeectric-blue text-white rounded-2xl font-bold text-sm md:text-xl hover:bg-zeectric-slate transition-all uppercase tracking-tighter shadow-2xl shadow-zeectric-blue/30 active:scale-[0.98]"
            >
              Get Technical Proposal
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}