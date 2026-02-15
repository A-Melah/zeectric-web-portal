import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "15km Transmission Line",
    location: "Eliozu to Eneka",
    year: "2019",
    description: "Successful engineering and construction of a major high-voltage transmission route spanning 15 kilometers.",
    image: "/images/home/transmission.avif"
  },
  {
    title: "Agip Base Substations",
    location: "Port Harcourt",
    year: "2020",
    description: "Full-scale installation and commissioning of two critical injection substations to enhance regional power stability.",
    image: "/images/home/substation.avif"
  },
  {
    title: "PHED Rehabilitation",
    location: "Akpajo to Onne",
    year: "2021",
    description: "Extensive rehabilitation of a 91.5km 33KV power line for the Port Harcourt Electricity Distribution company.",
    image: "/images/home/phed.avif"
  }
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-heading inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-zeectric-blue mb-4">
              Our Track Record
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-zeectric-slate mb-6 tracking-tight">
              Proven <span className="text-zeectric-blue">Expertise.</span>
            </h2>
            <p className="font-sans text-lg text-slate-600 leading-relaxed">
              Successfully delivering high-profile engineering projects across Nigeria since our incorporation in 2019.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="font-heading inline-flex items-center gap-2 text-sm font-bold text-zeectric-blue uppercase tracking-widest hover:text-zeectric-slate transition-colors group"
          >
            View All Projects 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <article key={i} className="group flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-zeectric-blue/20">
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-zeectric-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-zeectric-blue" />
                    <span className="font-heading text-[10px] font-black text-zeectric-slate uppercase tracking-wider">
                      {p.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col grow">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-zeectric-blue" />
                  <span className="font-heading text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                    {p.location}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-zeectric-slate mb-4 leading-tight group-hover:text-zeectric-blue transition-colors">
                  {p.title}
                </h3>
                
                <p className="font-sans text-slate-600 text-base leading-relaxed mb-8 grow">
                  {p.description}
                </p>

                <div className="pt-6 border-t border-slate-200">
                  <Link 
                    href="/projects" 
                    className="font-heading inline-flex items-center gap-2 text-xs font-bold text-zeectric-slate uppercase tracking-tighter hover:text-zeectric-blue transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}