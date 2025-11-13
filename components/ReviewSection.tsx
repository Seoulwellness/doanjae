"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface ReviewCardProps {
  imageSrc: string;
  customerName: string;
  stars: number;
  date: string;
  reviewText: string;
  index: number;
}

function ReviewCard({
  imageSrc,
  customerName,
  stars,
  date,
  reviewText,
}: ReviewCardProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-4xl"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Image Section with Overlay */}
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={imageSrc}
          alt={`${customerName} 후기`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
        />
        {/* Circular Badge - Top Right */}
        <div
          className="absolute top-8 right-8 sm:top-13 sm:right-13 w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center z-10"
          style={{ backgroundColor: "#3b2415" }}
        >
          <span
            className="text-xs sm:text-base md:text-lg lg:text-xl"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#FFFFFF",
            }}
          >
            <span className="block">체지방</span>
            <span className="block">10% 감량</span>
          </span>
        </div>

        {/* Bottom Section with Dark Brown Background - Overlay on Image */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 rounded-b-2xl"
          style={{ backgroundColor: "#3b2415" }}
        >
          {/* Customer Name and Stars */}
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <p
                className="text-xs sm:text-base md:text-lg lg:text-xl"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#FFFFFF",
                }}
              >
                {customerName}
              </p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-xs sm:text-base md:text-lg"
                    style={{
                      color: i < stars ? "#fbbf24" : "#6b7280",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Date */}
          <p
            className="mb-2 sm:mb-3 text-xs sm:text-sm md:text-base"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
            }}
          >
            {date}
          </p>

          {/* Review Text with ChevronRight on Right */}
          <div className="flex items-start gap-2 sm:gap-3">
            {/* Review Text - 70% width, left-aligned */}
            <p
              className="line-clamp-2 w-[70%] text-left whitespace-pre-line text-[10px] sm:text-xs md:text-sm"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#FFFFFF",
              }}
            >
              {reviewText}
            </p>

            {/* Navigation Arrow - Right Side */}
            <button
              className="rounded-full p-1 sm:p-2 hover:bg-white/10 transition-colors flex-shrink-0 ml-auto mt-2 sm:mt-4"
              aria-label="더보기"
            >
              <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const reviews = [
    {
      imageSrc: "/images/landing/image21.png",
      customerName: "장** 고객님",
      stars: 5,
      date: "10.24",
      reviewText:
        "결혼식 앞 두고 관리차 몇번 해봤는데 제발 다들 꼭 해보셨으면 좋겠어요.\n효과가 정말 남다릅니다! 제가 경험해본 ....",
    },
    {
      imageSrc: "/images/landing/image22.png",
      customerName: "박** 고객님",
      stars: 5,
      date: "11.04",
      reviewText:
        "결혼식 앞 두고 관리차 몇번 해봤는데 제발 다들 꼭 해보셨으면 좋겠어요.\n효과가 정말 남다릅니다! 제가 경험해본 ....",
    },
    {
      imageSrc: "/images/landing/image23.png",
      customerName: "김** 고객님",
      stars: 3,
      date: "09.26",
      reviewText:
        "결혼식 앞 두고 관리차 몇번 해봤는데 제발 다들 꼭 해보셨으면 좋겠어요.\n효과가 정말 남다릅니다! 제가 경험해본 ....",
    },
  ];

  // Reuse reviews to create more cards
  const allReviews = [...reviews, ...reviews, ...reviews];

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
  const getThumbPosition = () => {
    if (typeof window === "undefined") return 0;

    const isLarge = window.innerWidth >= 1024;
    const isMedium = window.innerWidth >= 640;

    // Calculate thumb width as percentage of track
    let thumbWidthPercent = 0;
    if (isLarge) {
      thumbWidthPercent = 18;
    } else if (isMedium) {
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
    <section
      className="py-8 md:py-32 relative"
      style={{ backgroundColor: "#D8CEBA" }}
    >
      <div className="container mx-auto max-w-[95%] lg:max-w-[90%] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title and Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="mb-6 md:mb-24 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={{
              fontFamily: "Belleza-Regular, sans-serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
              color: "#3B2415",
            }}
          >
            Review
          </h2>

          <div>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "#3B2415",
              }}
            >
              도안재 경험 고객분들의
            </p>
            <br />
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "#3B2415",
              }}
            >
              특별한 후기
            </p>
            <br />
            <br />
          </div>
        </motion.div>
      </div>

      {/* Review Cards - Horizontal Scroll */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto overflow-y-hidden pb-8 pl-4 sm:pl-12 lg:pl-16 pr-4 sm:pr-12 lg:pr-16 scrollbar-hide"
        >
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-[30vw]"
            >
              <ReviewCard {...review} index={index} />
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
