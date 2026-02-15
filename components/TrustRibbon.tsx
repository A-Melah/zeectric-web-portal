import Image from 'next/image';

export default function TrustRibbon() {
  const agencies = [
    { name: 'CAC', logo: '/images/agencies/cac.avif', alt: 'Corporate Affairs Commission' },
    { name: 'FIRS', logo: '/images/agencies/firs.avif', alt: 'Federal Inland Revenue Service' },
    { name: 'PENCOM', logo: '/images/agencies/pencom.avif', alt: 'National Pension Commission' },
    { name: 'NSITF', logo: '/images/agencies/nsitf.avif', alt: 'Nigeria Social Insurance Trust Fund' },
    { name: 'ITF', logo: '/images/agencies/itf.avif', alt: 'Industrial Training Fund' },
  ];

  // Render content once
  const RibbonContent = () => (
    <div className="flex items-center gap-12 md:gap-24 shrink-0 px-6">
      {/* RC Number Badge - Highlighting ZEECTRIC's established status since 2019 */}
      <div className="flex flex-col items-center justify-center shrink-0">
        <span className="font-heading text-xl font-black text-zeectric-slate whitespace-nowrap">
          RC 1563638
        </span>
        <span className="text-[8px] font-bold text-slate-400 tracking-widest mt-1 uppercase">INCORPORATED 2019</span>
      </div>

      {/* Agency Logos */}
      {agencies.map((agency) => (
        <div key={agency.name} className="relative w-32 h-16 md:w-40 md:h-20 shrink-0">
          <Image
            src={agency.logo}
            alt={agency.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 128px, 160px"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-white border-y border-slate-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-heading text-center text-[10px] font-bold uppercase tracking-[0.4em] text-zeectric-slate/40">
          Statutory Compliance & Federal Certifications
        </h2>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="relative flex">
        {/* We use 'min-w-full' and 'flex-nowrap' to ensure the containers 
          sit perfectly side-by-side for the infinite handoff.
        */}
        <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] cursor-pointer">
          <RibbonContent />
          <RibbonContent />
          <RibbonContent />
        </div>

        {/* Professional Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}