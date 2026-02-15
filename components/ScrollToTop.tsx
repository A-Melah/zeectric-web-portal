"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-4 bg-white border border-zeectric-slate/15 text-zeectric-blue rounded-xl shadow-[0_4px_20px_-5px_rgba(51,61,71,0.2)] hover:bg-zeectric-blue hover:text-white hover:border-zeectric-blue transition-all duration-300 active:scale-90 group"
        >
          <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}