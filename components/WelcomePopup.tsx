"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";
import { colors, fonts } from "@/lib/constants";

const STORAGE_KEY = "doanjae-popup-hidden-until";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user chose "don't show for a day"
    const hiddenUntil = localStorage.getItem(STORAGE_KEY);
    if (hiddenUntil && new Date().getTime() < parseInt(hiddenUntil)) {
      return; // Don't show popup
    }

    // Show popup with small delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowForDay = () => {
    // Set to hide for 24 hours
    const hideUntil = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, hideUntil.toString());
    setIsOpen(false);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={
            prefersReducedMotion()
              ? { duration: 0.01 }
              : { duration: 0.3, ease: "easeOut" }
          }
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60"
        >
          <motion.div
            initial={
              prefersReducedMotion()
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.9, y: 20 }
            }
            animate={
              prefersReducedMotion()
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              prefersReducedMotion()
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.9, y: 20 }
            }
            transition={
              prefersReducedMotion()
                ? { duration: 0.01 }
                : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
            }
            className="relative w-full max-w-[340px] md:max-w-lg lg:max-w-xl rounded-2xl overflow-hidden shadow-2xl bg-white"
          >
            {/* Background Image - Upper part only */}
            <div className="relative w-full aspect-video">
              <Image
                src="/images/advertisement.avif"
                alt="Welcome"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Buttons */}
            <div className="flex gap-0">
              <button
                onClick={handleDontShowForDay}
                className="flex-1 py-4 md:py-5 text-xs md:text-sm font-bold text-center transition-opacity hover:opacity-90 border-t border-r"
                style={{
                  backgroundColor: colors.brown.primary,
                  color: colors.text.white,
                  fontFamily: fonts.pretendard,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                오늘 하루 보지 않기
              </button>
              <button
                onClick={handleClose}
                className="flex-1 py-4 md:py-5 text-xs md:text-sm font-bold text-center transition-opacity hover:opacity-90 border-t"
                style={{
                  backgroundColor: colors.brown.primary,
                  color: colors.text.white,
                  fontFamily: fonts.pretendard,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                닫기
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
