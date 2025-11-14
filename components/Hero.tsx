"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  prefersReducedMotion,
} from "@/lib/animations";

interface HeroSlide {
  id: number;
  image: string;
  imageType: "jpg" | "avif";
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/image1",
    imageType: "jpg",
    title: "누워서 30분\n수면 다이어트 테라피, 도안재",
    subtitle: "가볍게, 편안하게, 아름답게",
    description:
      "천년의 지혜와 7종의 특허 기술로\n당신의 몸에 가장 '편안한 변화'를 약속합니다",
    cta: "지금, 가장 먼저 '편안한 변화'를 경험하세요.",
  },
  {
    id: 2,
    image: "/images/hero/image2",
    imageType: "jpg",
    title: "누워서 30분\n수면 다이어트 테라피, 도안재",
    subtitle: "가볍게, 편안하게, 아름답게",
    description:
      "천년의 지혜와 7종의 특허 기술로\n당신의 몸에 가장 '편안한 변화'를 약속합니다",
    cta: "지금, 가장 먼저 '편안한 변화'를 경험하세요.",
  },
  {
    id: 3,
    image: "/images/hero/image6",
    imageType: "jpg",
    title: "누워서 30분\n수면 다이어트 테라피, 도안재",
    subtitle: "가볍게, 편안하게, 아름답게",
    description:
      "천년의 지혜와 7종의 특허 기술로\n당신의 몸에 가장 '편안한 변화'를 약속합니다",
    cta: "지금, 가장 먼저 '편안한 변화'를 경험하세요.",
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality (disabled if user prefers reduced motion)
  useEffect(() => {
    if (!isDragging && !prefersReducedMotion()) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isDragging]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
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

  const currentSlide = heroSlides[currentIndex];

  return (
    <motion.section
      id="home"
      data-hero-section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative flex items-center px-8 sm:px-8 lg:px-8 overflow-hidden h-[calc(100vh-2.5rem)] md:h-[calc(100vh-3rem)]"
      style={{ backgroundColor: "#e5d6c3" }}
    >
      {/* Carousel Container */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={
              prefersReducedMotion()
                ? { opacity: 0 }
                : { opacity: 0, x: "100%" }
            }
            animate={
              prefersReducedMotion() ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            exit={
              prefersReducedMotion()
                ? { opacity: 0 }
                : { opacity: 0, x: "-100%" }
            }
            transition={
              prefersReducedMotion()
                ? { duration: 0.01 }
                : { duration: 0.6, ease: "easeInOut" }
            }
            className="absolute inset-0"
          >
            <Image
              src={`${currentSlide.image}.${currentSlide.imageType}`}
              alt="도안자 수면 다이어트 테라피"
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
              quality={90}
              style={{
                objectFit: "cover",
                willChange: "auto",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Text Content */}
      <div className="container mx-auto max-w-full md:max-w-[80%] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={
              prefersReducedMotion() ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={
              prefersReducedMotion() ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={
              prefersReducedMotion() ? { opacity: 0 } : { opacity: 0, y: -20 }
            }
            transition={
              prefersReducedMotion()
                ? { duration: 0.01 }
                : { duration: 0.4, ease: "easeOut" }
            }
            className="text-left space-y-4 md:space-y-6 lg:space-y-8 mt-[10vh] md:mt-[25vh]"
          >
            <h1
              className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white md:text-[#3B2415] whitespace-pre-line"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 800,
                lineHeight: "60px",
                letterSpacing: "0%",
              }}
            >
              {currentSlide.title}
            </h1>

            <p
              className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-white md:text-[#3B2415]"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {currentSlide.subtitle}
            </p>

            <p
              className="font-medium text-base md:text-lg lg:text-xl text-white md:text-[#3B2415] whitespace-pre-line"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 500,
                lineHeight: "26px",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              {currentSlide.description}
            </p>

            <p
              className="font-bold text-base md:text-lg lg:text-xl text-white md:text-[#3B2415]"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              {currentSlide.cta}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Buttons - Fixed at bottom */}
      <div className="fixed bottom-0 md:bottom-16 left-0 right-0 z-40 w-full">
        <div className="flex justify-center w-full md:px-0">
          <motion.div
            variants={fadeInUp}
            className="flex w-full md:w-1/2 md:rounded-4xl overflow-hidden shadow-lg"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 md:px-8 py-6 md:py-4 transition-shadow text-center text-sm md:text-base"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                backgroundColor: "#3B2415",
                color: "#FFFFFF",
              }}
            >
              도안재 예약하기
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 md:px-8 py-6 md:py-4 transition-colors text-center text-sm md:text-base"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                backgroundColor: "#FFD800",
                color: "#3B2415",
              }}
            >
              카카오 채널
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
