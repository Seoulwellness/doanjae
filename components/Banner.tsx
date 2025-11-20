"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";
import { colors } from "@/lib/constants";

interface BannerItem {
  id: number;
  text: string;
}

const bannerItems: BannerItem[] = [
  { id: 1, text: "11월 17일 GRAND OPEN" },
  { id: 2, text: "신규 회원 특별 할인 진행중" },
  { id: 3, text: "무료 체험 예약 받습니다" },
];

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality (disabled if user prefers reduced motion)
  useEffect(() => {
    if (!isDragging && !prefersReducedMotion()) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isDragging]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + bannerItems.length) % bannerItems.length
    );
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold) {
      goToNext();
    }
  };

  return (
    <div
      id="top-banner"
      className="w-full overflow-hidden relative z-50"
      style={{ backgroundColor: colors.brown.primary }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-center h-12 md:h-[54px] text-sm md:text-base cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={currentIndex}
              initial={
                prefersReducedMotion() ? { opacity: 0 } : { opacity: 0, x: 20 }
              }
              animate={
                prefersReducedMotion() ? { opacity: 1 } : { opacity: 1, x: 0 }
              }
              exit={
                prefersReducedMotion() ? { opacity: 0 } : { opacity: 0, x: -20 }
              }
              transition={
                prefersReducedMotion()
                  ? { duration: 0.01 }
                  : { duration: 0.3, ease: "easeInOut" }
              }
              className="text-white font-medium whitespace-nowrap"
            >
              {bannerItems[currentIndex].text}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
