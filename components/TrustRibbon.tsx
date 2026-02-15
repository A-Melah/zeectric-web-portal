import Image from 'next/image';

export default function TrustRibbon() {
  const agencies = [
    { name: 'CAC', logo: '/images/agencies/cac.avif', alt: 'Corporate Affairs Commission' },
    { name: 'FIRS', logo: '/images/agencies/firS.avif', alt: 'Federal Inland Revenue Service' },
    { name: 'PENCOM', logo: '/images/agencies/pencom.avif', alt: 'National Pension Commission' },
    { name: 'NSITF', logo: '/images/agencies/nsitf.avif', alt: 'Nigeria Social Insurance Trust Fund' },
    { name: 'ITF', logo: '/images/agencies/itf.avif', alt: 'Industrial Training Fund' },
  ];

  // We combine the RC info into the loop to make it part of the continuous scroll
  const RibbonItem = () => (
    <>
      {/* RC Number Badge */}
      <div className="flex flex-col items-center justify-center min-w-50 shrink-0">
        <span className="font-heading text-xl font-black text-zeectric-slate">
          RC 1563638
        </span>
        <span className="text-[8px] font-bold text-slate-400 tracking-widest mt-1">INCORPORATED 2019</span>
      </div>

      {/* Agency Logos */}
      {agencies.map((agency) => (
        <div key={agency.name} className="relative w-32 h-16 md:w-40 md:h-20 shrink-0 px-4">
          <Image
            src={agency.logo}
            alt={agency.alt}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </>
  );

  return (
    <section className="bg-white border-y border-slate-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="font-heading text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zeectric-slate/50">
          Statutory Compliance & Federal Certifications
        </h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* The animation moves this div left. We render the content twice for the infinite loop. */}
        <div className="flex animate-marquee whitespace-nowrap md:gap-20 items-center hover:[animation-play-state:paused] cursor-pointer">
          <RibbonItem />
          <RibbonItem />
        </div>

        {/* Gradient Fades (Optional: Makes the logos "emerge" from the sides) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}