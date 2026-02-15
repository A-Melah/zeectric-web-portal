import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Building2,
  Scale,
  Briefcase,
  Award,
  Lock,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

/* =========================
   SEO & CONFIG
========================= */
export const metadata: Metadata = {
  title: "Statutory Compliance | ZEECTRIC ENL",
  description: "ZEECTRIC ENL is fully certified by CAC, FIRS, PenCom, ITF, and NSITF. Explore our regulatory standing and QHSE commitment.",
};

/* =========================
   TYPES & DATA
========================= */
interface Certification {
  title: string;
  org: string;
  ref: string;
  status: string;
  desc: string;
  icon: React.ElementType;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "Corporate Affairs Commission",
    org: "CAC Nigeria",
    ref: "RC: 1563638",
    status: "Active / Incorporated 2019",
    desc: "Legally authorized to operate as a Company Limited by Shares under the Companies and Allied Matters Act.",
    icon: Building2,
    image: "/images/agencies/cac.avif",
  },
  {
    title: "Federal Inland Revenue Service",
    org: "FIRS",
    ref: "TIN: 21258585-0001",
    status: "VAT Collection Agent",
    desc: "Fully tax-compliant entity contributing to national growth through transparent fiscal responsibility.",
    icon: FileText,
    image: "/images/agencies/firs.avif",
  },
  {
    title: "National Pension Commission",
    org: "PenCom",
    ref: "Code: PR0000069978",
    status: "Compliant",
    desc: "Ensuring workforce security through strict adherence to the Pension Reform Act guidelines.",
    icon: ShieldCheck,
    image: "/images/agencies/pencom.avif",
  },
  {
    title: "Industrial Training Fund",
    org: "ITF Nigeria",
    ref: "Reg: PHT-008-9010",
    status: "Compliant",
    desc: "Commitment to human capital development and industrial skill acquisition standards.",
    icon: Briefcase,
    image: "/images/agencies/itf.avif",
  },
  {
    title: "Social Insurance Trust Fund",
    org: "NSITF",
    ref: "Employer No: 2004151520",
    status: "ECS Compliant",
    desc: "Priority workforce protection under the Employees' Compensation Act 2010.",
    icon: Scale,
    image: "/images/agencies/nsitf.avif",
  },
];

export default function CompliancePage() {
  return (
    <main className="bg-white text-zeectric-slate selection:bg-zeectric-blue selection:text-white min-h-screen">
      
      {/* ================= HERO SECTION: FLUID TYPOGRAPHY & HEIGHT ================= */}
      <section className="relative flex items-center bg-zeectric-navy pt-28 pb-16 md:pt-40 md:pb-24 lg:min-h-[50vh] overflow-hidden">
        <Image
          src="/images/compliance/hero.avif" 
          alt="Zeectric Engineering blueprints and stamps"
          fill
          priority
          className="object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zeectric-navy via-zeectric-navy/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-zeectric-blue/10 border border-zeectric-blue/20 text-zeectric-blue text-[10px] font-heading font-black uppercase tracking-[0.3em]">
            <Award className="w-3.5 h-3.5 mr-2" /> Certified Excellence
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.9] mb-6 tracking-tighter uppercase">
            REGULATORY <span className="text-zeectric-blue">INTEGRITY.</span>
          </h1>
          
          <p className="font-sans text-base md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Operating with absolute transparency and legal standing since 2019. Our certifications 
            form the foundation of our industrial partnerships.
          </p>
        </div>
      </section>

      {/* ================= ACCREDITATION GRID: RESPONSIVE CARDS ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-zeectric-slate uppercase tracking-tight">Official Accreditations</h2>
              <div className="h-1.5 w-12 bg-zeectric-blue rounded-full mt-4" />
              <p className="font-sans text-sm md:text-lg text-slate-500 mt-6 font-medium leading-relaxed">
                Verification of our capacity to execute federal and industrial infrastructure projects nationwide.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-[10px] font-heading font-black text-zeectric-blue bg-zeectric-blue/5 border border-zeectric-blue/10 px-6 py-3 rounded-full uppercase tracking-widest self-start md:self-end">
              <Lock className="w-4 h-4" /> Secure Data Verified
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, i) => (
              <article key={i} className="group flex flex-col h-full bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="relative h-44 overflow-hidden">
                  <Image src={cert.image} alt={cert.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-zeectric-navy/60 group-hover:bg-zeectric-blue/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <cert.icon className="w-12 h-12 text-white opacity-80" />
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col grow">
                  <span className="font-heading text-[10px] font-black text-zeectric-blue uppercase tracking-widest mb-3">{cert.org}</span>
                  <h3 className="font-heading text-xl font-bold text-zeectric-slate mb-6 leading-tight uppercase tracking-tight">{cert.title}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-slate-100 mb-8 shadow-sm gap-2">
                    <span className="text-xs font-mono font-bold text-slate-700">{cert.ref}</span>
                    <span className="text-[9px] font-heading font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-1 rounded-md w-fit">Verified</span>
                  </div>

                  <p className="font-sans text-slate-600 leading-relaxed text-sm mb-10 grow font-medium">
                    {cert.desc}
                  </p>

                  <Link href="/contact" className="font-heading inline-flex items-center gap-2 text-[10px] font-black text-zeectric-slate hover:text-zeectric-blue transition-all uppercase tracking-widest group/link mt-auto">
                    Request Copy <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform text-zeectric-blue" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QHSE FRAMEWORK: MOBILE-FIRST REORDERING ================= */}
      <section className="py-16 md:py-24 bg-zeectric-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image (Displays after text on mobile, side-by-side on desktop) */}
            <div className="order-2 lg:order-1 relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white/10 aspect-4/3 md:aspect-4/5">
              <Image 
                src="/images/compliance/qhse.avif" 
                alt="Zeectric Safety engineer on site" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zeectric-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="font-heading text-5xl md:text-7xl font-black text-white italic mb-2 tracking-tighter leading-none">SAFE-T</p>
                <p className="font-heading text-zeectric-blue font-black uppercase tracking-[0.3em] text-[10px]">Proprietary Operational Standard</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-4">
                <span className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-zeectric-blue">Zero Harm Policy</span>
                <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">QHSE Framework</h2>
                <p className="font-sans text-base md:text-xl text-slate-400 leading-relaxed font-medium">
                  Quality, Health, Safety, and Environment (QHSE) are the pillars of every ZEECTRIC ENL site operation.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { t: "01. Quality Assurance", d: "Rigorous ISO-standard material inspection and multi-stage control." },
                  { t: "02. Proactive Safety", d: "Daily site briefings and zero-harm operational protocols for all crew." },
                  { t: "03. Eco-Compliance", d: "Minimal impact engineering and sustainable industrial waste management." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6 p-6 bg-white/5 border border-white/10 rounded-4xl hover:bg-white/10 transition-all group">
                    <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8 text-zeectric-blue shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-heading font-bold text-base md:text-lg text-white uppercase tracking-tight">{item.t}</h4>
                      <p className="font-sans text-xs md:text-sm text-slate-400 font-medium mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: TOUCH-CENTRIC ================= */}
      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block p-6 rounded-4xl bg-zeectric-blue/10 mb-8 md:mb-10">
            <Scale className="w-10 h-10 md:w-12 md:h-12 text-zeectric-blue" />
          </div>
          <h2 className="font-heading text-4xl md:text-7xl font-black text-zeectric-slate mb-8 uppercase tracking-tighter leading-none">
            FULLY <span className="text-zeectric-blue">BONDED.</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Our legal standing allows us to partner with international firms and government bodies on high-value EPC contracts across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link href="/contact" className="font-heading px-10 py-5 bg-zeectric-blue text-white rounded-2xl font-bold text-sm md:text-lg hover:bg-zeectric-slate shadow-xl shadow-zeectric-blue/20 transition-all uppercase tracking-tighter active:scale-[0.98]">
              Download Corporate Profile
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}