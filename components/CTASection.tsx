'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function CTASection() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Image 19 with Overlaid Text - Full Width */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-screen mb-8 md:mb-16 -mx-4 sm:-mx-6 lg:-mx-8"
      >
        <Image
          src="/images/landing/image19.png"
          alt="예약하기"
          width={1200}
          height={800}
          className="w-full h-auto"
          sizes="100vw"
          quality={90}
        />
        {/* Overlaid Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
              style={{ color: '#3b2415' }}
            >
              지금 바로 '가장 편안한 변화'를
            </p>
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: '#3b2415' }}
            >
              예약하세요.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="container max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pb-8 md:pb-20">
        {/* Bottom Section: Logo and Image 20 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-6 md:gap-8"
        >
          {/* Logo */}
          <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24">
            <Image
              src="/logo2.png"
              alt="DOANJAE"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
              quality={90}
            />
          </div>

          {/* Image 20 */}
          <div className="relative w-full">
            <Image
              src="/images/landing/image20.png"
              alt="Company Information"
              width={1200}
              height={600}
              className="w-full h-auto mx-auto"
              sizes="100vw"
              quality={90}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

