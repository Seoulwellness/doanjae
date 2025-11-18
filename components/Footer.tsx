"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { colors } from "@/lib/constants/colors";

export default function Footer() {
  // Reduced from 50 to 20 for better performance while maintaining seamless loop
  const logoCount = 20;

  return (
    <div
      className="w-full h-16 md:h-[54px] overflow-hidden flex items-center py-2 md:py-3"
      style={{ backgroundColor: colors.brown.primary }}
    >
      <div className="relative w-full">
        {/* Repeating Logo Animation with Performance Optimization */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 100] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
          style={{ willChange: "transform" }} // GPU acceleration hint
        >
          {Array.from({ length: logoCount }).map((_, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src="/logo3.png"
                alt="DOANJAE"
                width={80}
                height={34}
                className="h-5 md:h-6 w-auto"
                priority={i < 5} // Prioritize first 5 logos
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
