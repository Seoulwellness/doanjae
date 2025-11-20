"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
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
          onClick={handleBackdropClick}
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
            className="relative w-full max-w-[340px] md:max-w-md rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: colors.beige.primary }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" style={{ color: colors.brown.primary }} />
            </button>

            {/* Popup Content */}
            <div className="p-5 md:p-8">
              {/* Logo */}
              <div className="flex justify-center mb-4 md:mb-6">
                <Image
                  src="/logo2.png"
                  alt="DOANJAE"
                  width={80}
                  height={80}
                  className="h-auto w-auto"
                />
              </div>

              {/* Title */}
              <h2
                className="text-lg md:text-2xl text-center mb-3 md:mb-4"
                style={{
                  fontFamily: fonts.pretendard,
                  fontWeight: 700,
                  color: colors.brown.primary,
                }}
              >
                도안재에 오신 것을 환영합니다
              </h2>

              {/* Description */}
              <p
                className="text-xs md:text-base text-center mb-4 md:mb-6 leading-relaxed"
                style={{
                  fontFamily: fonts.pretendard,
                  fontWeight: 400,
                  color: colors.brown.primary,
                }}
              >
                11월 17일 GRAND OPEN
                <br />
                신규 회원 특별 할인 진행중
              </p>

              {/* CTA Buttons */}
              <div className="space-y-2 md:space-y-3">
                <a
                  href="#contact"
                  onClick={handleClose}
                  className="block w-full py-2.5 md:py-3 px-4 rounded-lg text-center text-xs md:text-base font-bold transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: colors.brown.primary,
                    color: colors.text.white,
                    fontFamily: fonts.pretendard,
                  }}
                >
                  예약하기
                </a>
                <a
                  href="http://pf.kakao.com/_ZkMxkn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block w-full py-2.5 md:py-3 px-4 rounded-lg text-center text-xs md:text-base font-bold transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: colors.accent.kakao,
                    color: colors.brown.primary,
                    fontFamily: fonts.pretendard,
                  }}
                >
                  카카오 채널 추가
                </a>
              </div>

              {/* Don't show again option */}
              <button
                onClick={handleDontShowForDay}
                className="w-full mt-3 md:mt-4 py-1.5 md:py-2 text-[10px] md:text-xs text-center opacity-60 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: fonts.pretendard,
                  color: colors.brown.primary,
                }}
              >
                오늘 하루 보지 않기
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
