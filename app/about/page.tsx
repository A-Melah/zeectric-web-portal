import Image from "next/image";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  Building2, 
  ChevronRight,
  Zap,
  Users,
  HardHat
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-zeectric-slate selection:bg-zeectric-blue selection:text-white min-h-screen">
      
      {/* ================= HERO SECTION: FLUID HEIGHT & TYPOGRAPHY ================= */}
      <section className="relative flex items-center bg-zeectric-navy pt-28 pb-16 md:pt-40 md:pb-24 lg:min-h-[50vh] overflow-hidden">
        <Image
          src="/images/about/hero.avif"
          alt="Technical engineering infrastructure"
          fill
          priority
          className="object-cover opacity-60 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zeectric-navy via-zeectric-navy/80 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-zeectric-blue/10 border border-zeectric-blue/20 text-zeectric-blue text-[10px] font-heading font-black uppercase tracking-[0.3em]">
            Established 2019
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.9] mb-6 tracking-tighter uppercase">
            OUR <span className="text-zeectric-blue">IDENTITY.</span>
          </h1>
          <p className="font-sans text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Delivering mission-critical electrical, renewable, and turbine 
            engineering solutions across the Nigerian landscape.
          </p>
        </div>
      </section>

      {/* ================= CORPORATE OVERVIEW: ADAPTIVE GRID ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Content Column */}
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-zeectric-slate leading-tight uppercase">
                  Zeectric Engineering <br className="hidden md:block" />Nigeria Limited
                </h2>
                <div className="h-1.5 w-16 bg-zeectric-blue rounded-full" />
              </div>
              
              <div className="font-sans space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  ZEECTRIC ENL is a premier <span className="font-bold text-zeectric-slate">Engineering, Procurement, and Construction (EPC)</span> firm. We specialize in high-stakes power engineering, instrumentation, and renewable assets.
                </p>
                <p>
                  Incorporated on February 26, 2019, we serve as the technical bridge between complex engineering challenges and sustainable operational reality across Nigeria.
                </p>
              </div>

              {/* Trust Indicators: Mobile-First Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-10 border-t border-slate-100">
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Building2 className="w-6 h-6 text-zeectric-blue" />
                  </div>
                  <div>
                    <p className="font-heading text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Incorporation</p>
                    <p className="font-heading font-bold text-zeectric-slate uppercase text-sm">RC: 1563638</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-zeectric-blue" />
                  </div>
                  <div>
                    <p className="font-heading text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Headquarters</p>
                    <p className="font-heading font-bold text-zeectric-slate uppercase text-sm">Port Harcourt, NG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Column: Responsive Aspect Ratio */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-zeectric-blue/5 rounded-[3.5rem] -rotate-1 hidden md:block" />
              <div className="relative aspect-4/3 md:aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/images/about/team.avif"
                  alt="Zeectric Engineering team on site"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
              </div>
              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-zeectric-navy text-white p-6 md:p-8 rounded-4xl shadow-2xl hidden sm:block">
                <p className="font-heading text-3xl md:text-4xl font-black text-zeectric-blue leading-none tracking-tighter">100%</p>
                <p className="font-heading text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-2">Delivery Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION: FLUID GRID ================= */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Mission */}
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-zeectric-blue text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-zeectric-blue/20">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-zeectric-slate uppercase tracking-tight">Our Mission</h3>
              <p className="font-sans text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                To deliver technologically advanced engineering solutions that exceed client expectations, ensuring excellence in execution and long-term value creation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-zeectric-navy p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] text-white shadow-2xl hover:shadow-zeectric-blue/10 transition-all duration-500">
              <div className="w-14 h-14 bg-white/10 text-zeectric-blue rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-sm">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white uppercase tracking-tight">Our Vision</h3>
              <p className="font-sans text-slate-300 leading-relaxed text-base md:text-lg font-medium">
                To be Nigeria&apos;s leading EPC company, driving industrial development through innovative and sustainable solutions that define the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES: MULTI-BREAKPOINT GRID ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl md:text-6xl font-black text-zeectric-slate tracking-tighter uppercase leading-none">The Zeectric DNA</h2>
              <p className="font-sans text-slate-500 text-lg md:text-xl mt-4 font-medium">Core principles governing every project mobilization.</p>
            </div>
            <div className="h-1.5 w-24 bg-zeectric-blue hidden lg:block mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Customer-Centric", desc: "Understanding unique technical needs.", icon: Users },
              { title: "Integrity", desc: "Upholding absolute ethical standards.", icon: ShieldCheck },
              { title: "Innovation", desc: "Implementing cutting-edge automation.", icon: Zap },
              { title: "Safety & Quality", icon: Award, desc: "Zero-compromise on QHSE benchmarks." }
            ].map((v, i) => (
              <div key={i} className="group p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-zeectric-blue/20 transition-all duration-500">
                <v.icon className="w-10 h-10 text-zeectric-blue mb-8 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <h4 className="font-heading text-xl font-bold mb-3 text-zeectric-slate uppercase tracking-tight">{v.title}</h4>
                <p className="font-sans text-slate-600 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPACT QHSE: RESPONSIVE ROW LAYOUT ================= */}
      <section className="py-16 md:py-20 bg-zeectric-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="w-full lg:max-w-2xl space-y-6">
              <div className="inline-flex p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <HardHat className="w-8 h-8 text-zeectric-blue" />
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                Uncompromising <br /><span className="text-zeectric-blue">QHSE Standards</span>
              </h2>
              <p className="font-sans text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                We maintain strict adherence to global safety regulations to protect our workforce and the communities we serve.
              </p>
              
              <div className="flex flex-wrap gap-4 md:gap-8 pt-2">
                {["QHSE Compliant", "ISO Alignment", "Zero Harm"].map((check, i) => (
                  <div key={i} className="flex items-center gap-2 text-white font-heading font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                    <ChevronRight className="w-4 h-4 text-zeectric-blue" /> {check}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:w-100 aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5 group">
              <Image
                src="/images/about/qhse.avif"
                alt="Zeectric safety operational standards"
                fill
                className="object-cover group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}