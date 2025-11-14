"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="w-full h-10 md:h-[54px] overflow-hidden flex items-center py-2 md:py-3"
      style={{ backgroundColor: "#3b2415" }}
    >
      <div className="relative w-full">
        {/* Repeating Logo3 Animation */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 100] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src="/logo3.png"
                alt="DOANJAE"
                width={80}
                height={34}
                className="h-5 md:h-6 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
