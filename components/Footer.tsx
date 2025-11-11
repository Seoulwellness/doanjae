"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="w-full py-6 md:py-8 overflow-hidden"
      style={{ backgroundColor: "#3b2415" }}
    >
      <div className="relative">
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
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src="/logo3.png"
                alt="DOANJAE"
                width={50}
                height={21}
                className="h-auto w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
