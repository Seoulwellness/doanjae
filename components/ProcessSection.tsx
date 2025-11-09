'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function ProcessSection() {
  return (
    <section
      className="py-8 md:py-32 px-24 sm:px-10 lg:px-8 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/background 1.png"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            style={{ color: '#3b2415' }}
          >
            Process
          </h2>
          <div className="space-y-1 md:space-y-2">
            <p
              className="text-lg sm:text-xl md:text-2xl"
              style={{ color: '#3b2415' }}
            >
              도안재만의
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl"
              style={{ color: '#3b2415' }}
            >
              특별한 관리 프로세스
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
        {/* First Row: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Image Section - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image15.png"
              alt="Process Step 1"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 mx-16 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 rounded-lg mb-4" style={{ backgroundColor: '#3b2415' }}>
              <span className="text-white font-bold text-sm sm:text-base md:text-lg">STEP 01</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#3b2415' }}
            >
              나를 알다.
            </h2>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: '#3b2415' }}
            >
              체질분석 및 상담
            </h3>
            <div className="space-y-2 text-base sm:text-lg leading-relaxed">
              <p style={{ color: '#3b2415' }}>
                편안한 분위기에서 10년 경력의 전문가와 함께
              </p>
              <p style={{ color: '#3b2415' }}>
                나의 체질과 라이프스타일을 분석합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second Row: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 order-2 lg:order-1 mx-16 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 rounded-lg mb-4" style={{ backgroundColor: '#3b2415' }}>
              <span className="text-white font-bold text-sm sm:text-base md:text-lg">STEP 02</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#3b2415' }}
            >
              몸을 비우다.
            </h2>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: '#3b2415' }}
            >
              웰니스 바디 테라피
            </h3>
            <div className="space-y-2 text-base sm:text-lg leading-relaxed">
              <p style={{ color: '#3b2415' }}>
                나에게 꼭 맞는 프로그램으로
              </p>
              <p style={{ color: '#3b2415' }}>
                30분간 가장 편안한 휴식을 경험합니다.
              </p>
            </div>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative w-full order-1 lg:order-2"
          >
            <Image
              src="/images/landing/image16.png"
              alt="Process Step 2"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </div>

        {/* Third Row: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Image Section - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image17.png"
              alt="Process Step 3"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 mx-16 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 rounded-lg mb-4" style={{ backgroundColor: '#3b2415' }}>
              <span className="text-white font-bold text-sm sm:text-base md:text-lg">STEP 03</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#3b2415' }}
            >
              변화를 만나다.
            </h2>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: '#3b2415' }}
            >
              맞춤형 솔루션
            </h3>
            <div className="space-y-2 text-base sm:text-lg leading-relaxed">
              <p style={{ color: '#3b2415' }}>
                관리 후 가벼워진 몸의 변화를 수치로 확인하고,
              </p>
              <p style={{ color: '#3b2415' }}>
                도안재의 스페셜 티와 함께 마무리 합니다.
              </p>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}

