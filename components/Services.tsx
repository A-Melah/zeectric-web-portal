import Image from "next/image";
import {
  Zap,
  Cpu,
  Sun,
  Wrench,
  ShoppingCart,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

type Service = {
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
};

const services: Service[] = [
  {
    title: "Electrical & Power Engineering",
    tagline: "High-Voltage EPIC Solutions",
    description:
      "Comprehensive EPIC services for robust power infrastructure, including transmission and distribution systems.",
    icon: Zap,
    image: "/images/home/power.avif",
  },
  {
    title: "Instrumentation & Automation",
    tagline: "Precision Control Systems",
    description:
      "Advanced design, integration, and calibration of industrial automation systems for operational efficiency.",
    icon: Cpu,
    image: "/images/home/instrumentation.avif",
  },
  {
    title: "Renewable Energy Solutions",
    tagline: "Sustainable Power Infrastructure",
    description:
      "Strategic deployment of off-grid and on-grid solar, wind, and hybrid power solutions across Nigeria.",
    icon: Sun,
    image: "/images/home/solar.avif",
  },
  {
    title: "Gas Turbine O&M",
    tagline: "Performance & Reliability",
    description:
      "Full-scale operation, maintenance, and performance optimization to ensure long-term system longevity.",
    icon: Wrench,
    image: "/images/home/turbine.avif",
  },
  {
    title: "Procurement Services",
    tagline: "Global Material Sourcing",
    description:
      "Sourcing high-quality engineering materials with global logistics management aligned with local standards.",
    icon: ShoppingCart,
    image: "/images/home/procurement.avif",
  },
  {
    title: "Metering Solutions",
    tagline: "Advanced Infrastructure (AMI)",
    description:
      "Deployment of smart and conventional metering systems for precise industrial energy measurement.",
    icon: Activity,
    image: "/images/home/metering.avif",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="font-heading inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-zeectric-blue mb-4">
            Our Core Expertise
          </span>
          <h2
            id="services-heading"
            className="font-heading text-4xl md:text-6xl font-extrabold text-zeectric-slate mb-8 tracking-tight"
          >
            Engineering <span className="text-zeectric-blue">at Scale.</span>
          </h2>
          <p className="font-sans text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ZEECTRIC ENL delivers specialized engineering solutions that drive 
            industrial growth and sustainable infrastructure development.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={index}
                className="group flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-zeectric-blue/20"
              >
                {/* ===== VISUAL ANCHOR: IMAGE ===== */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-zeectric-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur rounded-full font-heading text-[9px] font-black text-zeectric-blue uppercase tracking-widest shadow-sm">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* ===== CONTENT: REFINED TYPOGRAPHY ===== */}
                <div className="p-10 flex flex-col grow">
                  <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm group-hover:bg-zeectric-blue group-hover:text-white transition-all duration-500">
                    <Icon className="w-8 h-8 text-zeectric-blue group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-zeectric-slate mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="font-sans text-slate-600 leading-relaxed text-base mb-8 grow">
                    {service.description}
                  </p>

                  <Link 
                    href="/services" 
                    className="inline-flex items-center gap-2 font-heading font-bold text-sm text-zeectric-slate uppercase tracking-tighter hover:text-zeectric-blue transition-colors group/link"
                  >
                    Explore Technical Specs 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}