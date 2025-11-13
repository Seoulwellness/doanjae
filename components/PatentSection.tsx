"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInRight, fadeInUp } from "@/lib/animations";

export default function PatentSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateScrollProgress = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => {
      container.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  // Calculate thumb position accounting for its width
  // Use CSS calc to position thumb correctly: left = progress% but limit to (100% - thumbWidth)
  const getThumbPosition = () => {
    // The thumb should move from 0% to (100% - thumbWidth%)
    // Thumb widths: w-32=128px, w-48=192px, w-64=256px
    // Track widths: w-64=256px, w-80=320px, lg:w-[75%]=variable
    if (typeof window === "undefined") return 0;

    const isLarge = window.innerWidth >= 1024;
    const isMedium = window.innerWidth >= 640;

    // Calculate thumb width as percentage of track
    let thumbWidthPercent = 0;
    if (isLarge) {
      // w-64 (256px) thumb on 75% screen width track
      // Approximate: 256px / (screenWidth * 0.75) * 100
      // For a 1920px screen: 256 / 1440 * 100 ≈ 17.8%
      // Use a conservative estimate
      thumbWidthPercent = 18;
    } else if (isMedium) {
      // w-48 (192px) on w-80 (320px) = 60%
      thumbWidthPercent = 60;
    } else {
      // Mobile: w-16 (64px) on w-64 (256px) track = 25%
      thumbWidthPercent = 25;
    }

    // Position: scrollProgress * (100 - thumbWidthPercent) / 100
    return Math.min(
      (scrollProgress * (100 - thumbWidthPercent)) / 100,
      100 - thumbWidthPercent
    );
  };

  return (
    <section className="py-8 md:py-32 bg-white">
      <div className="container mx-auto max-w-[95%] lg:max-w-[90%] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-24"
        >
          <h2
            className="font-bold mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#3B2415",
            }}
          >
            아름다운 체형 관리를 위한
          </h2>
          <h3
            className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#3B2415",
            }}
          >
            도안재만의 7종 특허기술
          </h3>
        </motion.div>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 lg:gap-12 overflow-x-auto overflow-y-hidden pb-8 pl-4 sm:pl-12 lg:pl-16 pr-4 sm:pr-12 lg:pr-16 scrollbar-hide"
        >
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map((num, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-[25vw]"
            >
              <Image
                src={`/images/landing/patent${num}.png`}
                alt={`특허기술 ${num}`}
                width={1200}
                height={1500}
                className="w-full h-auto"
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 25vw"
                quality={90}
              />
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="flex justify-center mt-4">
          <div className="relative w-64 md:w-80 lg:w-[75%] h-1 bg-gray-200 rounded-full">
            <motion.div
              className="absolute top-0 h-full w-16 md:w-48 lg:w-64 bg-[#3B2415] rounded-full"
              style={{ left: `${getThumbPosition()}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
