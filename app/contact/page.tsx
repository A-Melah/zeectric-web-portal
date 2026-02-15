"use client";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2,
  Globe,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Replace 'YOUR_FORMSPREE_ID' with the ID provided in your Formspree dashboard
  const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ID";
  const standardEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.836885387926!2d7.025424574979848!3d4.815340395160408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd74ec33cb2b%3A0xa025c5d83c35bcaf!2s146%20Trans-Amadi%20Industrial%20Layout%20Rd%2C%20Trans%20Amadi%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1715423854123!5m2!1sen!2sng";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again or email info@zeectric.ng directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-zeectric-slate selection:bg-zeectric-blue selection:text-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex items-center bg-zeectric-navy pt-28 pb-16 md:pt-40 md:pb-24 lg:min-h-[50vh] overflow-hidden">
        <Image
          src="/images/contact/hero.avif" 
          alt="Zeectric Technical communication hub"
          fill
          priority
          className="object-cover opacity-60 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zeectric-navy via-zeectric-navy/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-zeectric-blue/10 border border-zeectric-blue/20 text-zeectric-blue text-[10px] font-heading font-black uppercase tracking-[0.3em]">
            <Globe className="w-3.5 h-3.5 mr-2" /> Regional Operations
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.9] mb-6 tracking-tighter uppercase">
            Get in <span className="text-zeectric-blue">Touch.</span>
          </h1>
          
          <p className="font-sans text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            From industrial power systems to renewable energy, our Port Harcourt engineering team provides technical support across Nigeria.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* LEFT: ESSENTIALS */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-zeectric-slate uppercase tracking-tight">Technical HQ</h2>
                <div className="h-1.5 w-12 bg-zeectric-blue rounded-full" />
                <p className="font-sans text-lg text-slate-600 leading-relaxed">
                  Operating with regulatory integrity since 2019, our headquarters is situated in the primary industrial zone of Rivers State.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: MapPin, label: "Visit Us", content: "146, Trans-Amadi Industrial Layout, PH", color: "bg-zeectric-blue/10 text-zeectric-blue" },
                  { icon: Phone, label: "Direct Support", content: "+234 (0)816 631 2933", color: "bg-emerald-50 text-emerald-600" },
                  { icon: Mail, label: "Official Email", content: "info@zeectric.ng", color: "bg-slate-100 text-zeectric-slate" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-heading text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="font-heading text-zeectric-slate font-bold text-base md:text-lg leading-tight">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-4xl bg-zeectric-navy text-white inline-flex items-center shadow-2xl shadow-zeectric-navy/20">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-zeectric-blue" />
                </div>
                <span className="font-heading text-sm font-bold text-zeectric-blue uppercase tracking-tighter">Under 24H Response</span>
              </div>
            </div>

            {/* RIGHT: COMPACT FORM (FORMSPREE ENABLED) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-100">
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-emerald-100 text-zeectric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-zeectric-slate uppercase">Message Received</h3>
                    <p className="font-sans text-slate-600">Our engineering leads have been notified and will review your requirements shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="font-heading text-zeectric-blue font-bold uppercase tracking-widest text-sm hover:text-zeectric-navy transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-zeectric-slate uppercase">Request Technical Quote</h3>
                      <p className="font-sans text-slate-500 mt-2">Complete the form for a technical consultation with our engineering leads.</p>
                    </div>

                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="name" className="font-heading text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                          <input id="name" name="name" required type="text" autoComplete="name" className="font-sans w-full px-6 py-4 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-zeectric-blue/10 focus:border-zeectric-blue outline-none bg-slate-50 text-base font-bold transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="organization" className="font-heading text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Organization</label>
                          <input id="organization" name="organization" type="text" autoComplete="organization" className="font-sans w-full px-6 py-4 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-zeectric-blue/10 focus:border-zeectric-blue outline-none bg-slate-50 text-base font-bold transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-heading text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input id="email" name="email" required type="email" autoComplete="email" className="font-sans w-full px-6 py-4 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-zeectric-blue/10 focus:border-zeectric-blue outline-none bg-slate-50 text-base font-bold transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="font-heading text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Requirement</label>
                        <textarea id="message" name="message" required rows={5} placeholder="Describe your power or engineering needs..." className="font-sans w-full px-6 py-4 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-zeectric-blue/10 focus:border-zeectric-blue outline-none bg-slate-50 text-base font-bold transition-all resize-none" />
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="font-heading w-full py-6 bg-zeectric-blue text-white rounded-2xl font-bold text-lg hover:bg-zeectric-slate transition-all shadow-xl shadow-zeectric-blue/20 flex items-center justify-center gap-3 uppercase tracking-widest active:scale-[0.98] disabled:opacity-70"
                      >
                        {isSubmitting ? "Processing..." : "Submit Inquiry"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE MAP ================= */}
      <section className="bg-slate-50 py-16 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl h-80 md:h-96 group">
            <iframe
              src={standardEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Zeectric Engineering HQ Location"
            />
            
            <div className="absolute top-6 left-6 bg-white p-6 rounded-3xl shadow-2xl max-w-xs hidden lg:block border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-zeectric-blue rounded-xl flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-zeectric-slate text-lg leading-none uppercase">Zeectric ENL</h4>
                  <span className="font-heading text-[9px] text-zeectric-blue font-black uppercase tracking-widest">Port Harcourt HQ</span>
                </div>
              </div>
              <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4">
                146, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State.
              </p>
              <Link 
                href="https://share.google/BUKebM1C12q6xGLFp" 
                target="_blank"
                className="font-heading text-[10px] font-bold text-zeectric-blue hover:text-zeectric-slate flex items-center gap-1 transition-colors uppercase tracking-widest"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}