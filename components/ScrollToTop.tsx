"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timeoutId = setTimeout(() => {
      // Find the Hero section
      const heroSection = document.querySelector("[data-hero-section]");
      if (!heroSection) {
        // If no hero section found, show button after scrolling
        const handleScroll = () => {
          setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return;
      }

      // Use Intersection Observer to detect when Hero section is out of view
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Show button when Hero section is not visible (scrolled past it)
            setIsVisible(!entry.isIntersecting);
          });
        },
        {
          threshold: 0,
          rootMargin: "0px",
        }
      );

      observer.observe(heroSection);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    // Check for reduced motion preference (accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    // Try to find the top banner element first (more reliable)
    const topBanner = document.getElementById("top-banner");

    if (topBanner) {
      // Use scrollIntoView for more reliable smooth scrolling
      topBanner.scrollIntoView({
        behavior,
        block: "start",
        inline: "nearest",
      });
    } else {
      // Fallback to window.scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToTop();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-22 md:bottom-12 right-4 md:right-12 z-[9999] p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
          style={{ backgroundColor: "#3b2415" }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-white pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
