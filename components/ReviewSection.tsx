"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles, mergeStyles, fonts } from "@/lib/constants";

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
  // Component-specific style constants
  const badgeTextStyle = mergeStyles(textStyles.headingWhite, {
    lineHeight: "100%",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  });

  const customerNameStyle = mergeStyles(textStyles.headingWhite, {
    lineHeight: "100%",
    verticalAlign: "middle" as const,
  });

  const dateStyle = mergeStyles(textStyles.bodyWhite, {
    lineHeight: "100%",
  });

  const reviewTextStyle = mergeStyles(textStyles.bodyWhite, {
    fontWeight: 500,
    lineHeight: "100%",
  });

  return (
    <div
      className="relative w-full overflow-hidden rounded-4xl select-none"
      style={{ backgroundColor: colors.background.secondary }}
    >
      {/* Image Section with Overlay */}
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={imageSrc}
          alt={`${customerName} 후기`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          draggable={false}
        />
        {/* Circular Badge - Top Right */}
        <div
          className="absolute top-8 right-8 sm:top-13 sm:right-13 w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center z-10"
          style={{ backgroundColor: colors.brown.primary }}
        >
          <span
            className="text-xs sm:text-base md:text-lg lg:text-xl"
            style={badgeTextStyle}
          >
            <span className="block">체지방</span>
            <span className="block">10% 감량</span>
          </span>
        </div>

        {/* Bottom Section with Dark Brown Background - Overlay on Image */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12 rounded-b-2xl"
          style={{ backgroundColor: colors.brown.primary }}
        >
          {/* Customer Name and Stars */}
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <p
                className="text-xs sm:text-base md:text-lg lg:text-xl"
                style={customerNameStyle}
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
            style={dateStyle}
          >
            {date}
          </p>

          {/* Review Text with ChevronRight on Right */}
          <div className="flex items-start gap-2 sm:gap-3">
            {/* Review Text - 70% width, left-aligned */}
            <p
              className="line-clamp-2 w-[70%] text-left whitespace-pre-line text-[10px] sm:text-xs md:text-sm"
              style={reviewTextStyle}
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
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const progressThumbRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const isDraggingProgressRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartScrollRef = useRef<number>(0);
  const dragRafRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number>(0);
  const touchStartScrollRef = useRef<number>(0);
  const isSwipingRef = useRef<boolean>(false);

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
      isDraggingProgressRef.current = true;
      setIsDraggingProgress(true);
      updateScrollFromPosition(e.clientX);
    };

    const handleProgressMouseMove = (e: MouseEvent) => {
      if (!isDraggingProgressRef.current) return;
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
      isDraggingProgressRef.current = false;
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
  }, []);

  // Safari touch swipe handlers
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartScrollRef.current = container.scrollLeft;
        isSwipingRef.current = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwipingRef.current || e.touches.length !== 1) return;

      const touchX = e.touches[0].clientX;
      const deltaX = touchStartXRef.current - touchX;
      const newScroll = touchStartScrollRef.current + deltaX;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Only prevent default if we're actually scrolling horizontally
      const scrollDelta = Math.abs(deltaX);
      if (scrollDelta > 5) {
        e.preventDefault();
      }

      container.scrollLeft = Math.max(0, Math.min(maxScroll, newScroll));
    };

    const handleTouchEnd = () => {
      isSwipingRef.current = false;
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Component-specific style constants
  const sectionTitleStyle = mergeStyles({
    fontFamily: fonts.belleza,
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: colors.brown.primary,
  });

  const largeTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
  });

  return (
    <section
      className="py-8 md:py-32 relative"
      style={{ backgroundColor: colors.beige.primary }}
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
            style={sectionTitleStyle}
          >
            Review
          </h2>

          <div>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              도안재 경험 고객분들의
            </p>
            <br />
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
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
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto overflow-y-hidden pb-8 pl-4 sm:pl-12 lg:pl-16 pr-4 sm:pr-12 lg:pr-16 scrollbar-hide"
          style={{
            cursor: "grab",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={(_, info) => {
            if (scrollContainerRef.current) {
              const container = scrollContainerRef.current;
              scrollContainerRef.current.style.cursor = "grabbing";
              dragStartXRef.current = info.point.x;
              dragStartScrollRef.current = container.scrollLeft;
            }
          }}
          onDrag={(_, info) => {
            if (scrollContainerRef.current) {
              // Cancel any pending animation frame
              if (dragRafRef.current !== null) {
                cancelAnimationFrame(dragRafRef.current);
              }

              // Use requestAnimationFrame for smooth updates
              dragRafRef.current = requestAnimationFrame(() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const deltaX = dragStartXRef.current - info.point.x;
                  const newScroll = dragStartScrollRef.current + deltaX;
                  const maxScroll =
                    container.scrollWidth - container.clientWidth;
                  container.scrollLeft = Math.max(
                    0,
                    Math.min(maxScroll, newScroll)
                  );
                  dragRafRef.current = null;
                }
              });
            }
          }}
          onDragEnd={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.style.cursor = "grab";
            }
            if (dragRafRef.current !== null) {
              cancelAnimationFrame(dragRafRef.current);
              dragRafRef.current = null;
            }
          }}
        >
          {allReviews.map((review, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-shrink-0 w-[68vw] sm:w-[40vw] lg:w-[22vw]"
              drag={false}
            >
              <ReviewCard {...review} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Progress Bar */}
        <div className="flex justify-center mt-4">
          <div
            ref={progressTrackRef}
            className="relative w-64 md:w-80 lg:w-[75%] h-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition-colors select-none"
          >
            <div
              ref={progressThumbRef}
              className="absolute top-0 left-0 h-full w-16 md:w-48 lg:w-64 rounded-full cursor-grab active:cursor-grabbing pointer-events-auto"
              style={{
                backgroundColor: colors.brown.primary,
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
