"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInRight, fadeInUp } from "@/lib/animations";

export default function PatentSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const progressThumbRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const thumb = progressThumbRef.current;
    const track = progressTrackRef.current;
    if (!container || !thumb || !track) return;

    const updateThumbPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;

      // Get track and thumb dimensions
      const trackRect = track.getBoundingClientRect();
      const trackWidth = trackRect.width;
      const thumbWidth = thumb.offsetWidth;

      // Calculate position using transform (GPU accelerated)
      let translateX = 0;
      if (progress >= 100) {
        // At end: position thumb so right edge aligns with track end
        translateX = trackWidth - thumbWidth;
      } else {
        // Calculate position accounting for thumb width
        const maxTranslate = trackWidth - thumbWidth;
        translateX = (progress / 100) * maxTranslate;
      }

      // Use transform instead of left for better performance
      thumb.style.transform = `translateX(${translateX}px)`;
      thumb.style.willChange = "transform";
    };

    const handleScroll = () => {
      // Cancel previous animation frame if exists
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      // Use requestAnimationFrame for smooth 60fps updates
      rafIdRef.current = requestAnimationFrame(updateThumbPosition);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    updateThumbPosition(); // Initial calculation

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Progress bar interaction handlers
  useEffect(() => {
    const track = progressTrackRef.current;
    const thumb = progressThumbRef.current;
    const container = scrollContainerRef.current;
    if (!track || !container) return;

    const updateScrollFromPosition = (clientX: number) => {
      const rect = track.getBoundingClientRect();
      const clickX = clientX - rect.left;
      const trackWidth = rect.width;
      const percentage = Math.max(
        0,
        Math.min(100, (clickX / trackWidth) * 100)
      );

      // Calculate scroll position
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = (percentage / 100) * maxScroll;
      container.scrollLeft = targetScroll;
    };

    const handleProgressMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDraggingProgress(true);
      updateScrollFromPosition(e.clientX);
    };

    const handleProgressMouseMove = (e: MouseEvent) => {
      if (!isDraggingProgress) return;
      e.preventDefault();
      // Use requestAnimationFrame for smooth dragging
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        updateScrollFromPosition(e.clientX);
      });
    };

    const handleProgressMouseUp = () => {
      setIsDraggingProgress(false);
    };

    // Add listeners to both track and thumb
    track.addEventListener("mousedown", handleProgressMouseDown);
    if (thumb) {
      thumb.addEventListener("mousedown", handleProgressMouseDown);
    }
    document.addEventListener("mousemove", handleProgressMouseMove);
    document.addEventListener("mouseup", handleProgressMouseUp);

    return () => {
      track.removeEventListener("mousedown", handleProgressMouseDown);
      if (thumb) {
        thumb.removeEventListener("mousedown", handleProgressMouseDown);
      }
      document.removeEventListener("mousemove", handleProgressMouseMove);
      document.removeEventListener("mouseup", handleProgressMouseUp);
    };
  }, [isDraggingProgress]);

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
            className="font-bold mb-2 md:mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              letterSpacing: "0%",
              textAlign: "center",
              color: "#3B2415",
            }}
          >
            아름다운 체형 관리를 위한
          </h2>
          <h3
            className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
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
          <div
            ref={progressTrackRef}
            className="relative w-64 md:w-80 lg:w-[75%] h-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors select-none"
          >
            <div
              ref={progressThumbRef}
              className="absolute top-0 left-0 h-full w-16 md:w-48 lg:w-64 bg-[#3B2415] rounded-full cursor-grab active:cursor-grabbing pointer-events-auto"
              style={{
                willChange: "transform",
                transition: isDraggingProgress
                  ? "none"
                  : "transform 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
