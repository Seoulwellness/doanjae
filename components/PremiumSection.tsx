"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles } from "@/lib/constants";

export default function PremiumSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lazy load and autoplay video when component is in viewport
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVideoLoaded) {
              // Load video when it comes into view
              videoElement.load();
              setIsVideoLoaded(true);
            }
            // Try to play unmuted first
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  // Autoplay succeeded, try to unmute
                  videoElement.muted = false;
                  setIsMuted(false);
                })
                .catch((error) => {
                  // Autoplay was prevented, try muted
                  console.log(
                    "Unmuted autoplay prevented, trying muted:",
                    error
                  );
                  videoElement.muted = true;
                  setIsMuted(true);
                  videoElement.play().catch((err) => {
                    console.log("Muted autoplay also prevented:", err);
                  });
                });
            }
          } else {
            // Pause when out of viewport to save resources
            videoElement.pause();
          }
        });
      },
      { rootMargin: "50px", threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [isVideoLoaded]);

  const handleVideoPlay = () => {
    setShowPoster(false);
    // Try to unmute when video starts playing (after user interaction)
    if (videoRef.current && isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.beige.secondary }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Video/Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full mb-12 md:mb-24"
        >
          <div className="relative w-full aspect-video overflow-hidden rounded-none">
            {showPoster && (
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/landing/video.png"
                  alt="프리미엄 다이어트 테라피"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={90}
                />
              </div>
            )}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/images/landing/video.png"
              autoPlay
              loop
              playsInline
              controls
              preload="metadata"
              onPlay={handleVideoPlay}
              onLoadedData={() => setShowPoster(false)}
            >
              <source src="/videos/premium.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center space-y-4 md:space-y-6"
        >
          <div className="space-y-1 md:space-y-3">
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={textStyles.headingCentered}
            >
              몸은 가볍게,
            </p>
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={textStyles.headingCentered}
            >
              과정은 편안하게,
            </p>
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={textStyles.headingCentered}
            >
              결과는 한층 아름답게,
            </p>
          </div>

          <div className="pt-4 md:pt-6 space-y-1 md:space-y-2">
            <h2
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.15] md:[line-height:40px]"
              style={textStyles.headingCentered}
            >
              프리미엄 다이어트 테라피
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.15] md:[line-height:40px]"
              style={textStyles.headingCentered}
            >
              도안재
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
