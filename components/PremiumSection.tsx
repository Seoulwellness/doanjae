"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles } from "@/lib/constants";

export default function PremiumSection() {
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
