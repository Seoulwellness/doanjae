"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function PremiumSection() {
  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#dbcfbf" }}
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
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <Image
              src="/images/landing/video.png"
              alt="프리미엄 다이어트 테라피"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
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
          <div className="space-y-2 md:space-y-3">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
              style={{ color: "#3b2415" }}
            >
              몸은 가볍게,
            </p>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
              style={{ color: "#3b2415" }}
            >
              과정은 편안하게,
            </p>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium"
              style={{ color: "#3b2415" }}
            >
              결과는 한층 아름답게,
            </p>
          </div>

          <div className="pt-4 md:pt-6 space-y-2">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: "#3b2415" }}
            >
              프리미엄 다이어트 테라피
            </h2>
            <p
              className="text-2xl sm:text-3xl md:text4xl lg:text-5xl font-bold"
              style={{ color: "#3b2415" }}
            >
              도안재
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
