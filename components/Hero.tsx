'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden h-[calc(100vh-2.5rem)] md:h-[calc(100vh-3rem)]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero/hero.jpg"
          alt="도안자 수면 다이어트 테라피"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1)',
            willChange: 'auto'
          }}
        />
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-neutral-900/20 dark:bg-neutral-900/40" /> */}
      </div>

      {/* Text Content */}
      <div className="container mx-auto max-w-[80%] relative z-10">
        <motion.div
          variants={fadeInLeft}
          className="text-left space-y-4 md:space-y-6 lg:space-y-8 mt-[10vh] md:mt-[25vh]"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-extrabold"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 800,
              fontSize: '52px',
              lineHeight: '60px',
              letterSpacing: '0%',
              color: '#3B2415',
            }}
          >
            누워서 30분<br />
            수면 다이어트 테라피, 도안재
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-bold"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#3B2415',
            }}
          >
            가볍게, 편안하게, 아름답게
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-medium"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              fontSize: '21px',
              lineHeight: '26px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            천년의 지혜와 7종의 특허 기술로 <br />
            당신의 몸에 가장 '편안한 변화'를 약속합니다
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-bold"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 700,
              fontSize: '21px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            지금, 가장 먼저 '편안한 변화'를 경험하세요.
          </motion.p>
        </motion.div>
      </div>

      {/* Buttons - Fixed at bottom */}
      <div className="absolute bottom-0  md:bottom-16 left-0 right-0 z-[70] w-full">
        <div className="flex justify-center w-full">
          <motion.div
            variants={fadeInUp}
            className="flex w-full md:w-1/2 md:rounded-4xl overflow-hidden shadow-lg"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 md:px-8 py-8 md:py-4 transition-shadow text-center"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                backgroundColor: '#3B2415',
                color: '#FFFFFF',
              }}
            >
              도안재 예약하기
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 md:px-8 py-8 md:py-4 transition-colors text-center"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                backgroundColor: '#FFD800',
                color: '#3B2415',
              }}
            >
              카카오 채널
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
