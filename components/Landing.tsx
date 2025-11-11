'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';

export default function Landing() {
  return (
    <motion.section
      id="landing"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative lg:h-screen pb-8 lg:py-0 lg:flex lg:items-center"
      style={{ backgroundColor: '#e4dbd2' }}
    >
      <div className="container mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-32 lg:items-center">
          {/* Image Section - Left */}
          <motion.div
            variants={fadeInLeft}
            className="relative w-full order-1 lg:order-1"
          >
            <div className="relative w-full">
              <Image
                src="/images/landing/image1.png"
                alt="도안재 수면 다이어트 테라피"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            variants={fadeInLeft}
            className="space-y-4 md:space-y-6 lg:space-y-8 flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left"
          >
            <motion.h1
              variants={fadeInLeft}
              className="text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ color: '#3b2415' }}
            >
              30분, 정말 그냥 <br /> 누워만 있어도 돼요.
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed"
              style={{ color: '#3b2415' }}
            >
              땀만 뻘뻘 흘리던 기존의 관리와는 달라요.
            </motion.p>

            <motion.div
              variants={fadeInLeft}
              className="space-y-1 md:space-y-2"
            >
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ color: '#3b2415' }}
              >
                도안재의 30분은 <strong> 천년의 지혜</strong>와

              </p>
              <p
                className="text-[10px] sm:text-xs md:text-sm lg:text-base"
                style={{ color: '#3b2415' }}
              >
                <strong>7종의 특허 기술</strong>이 집약된 시간입니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

