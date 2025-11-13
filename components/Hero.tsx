"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative flex items-center px-8 sm:px-8 lg:px-8 overflow-hidden h-screen"
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
            objectFit: "cover",
            willChange: "auto",
          }}
        />
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-neutral-900/20 dark:bg-neutral-900/40" /> */}
      </div>

      {/* Text Content */}
      <div className="container mx-auto max-w-full md:max-w-[80%] relative z-10">
        <motion.div
          variants={fadeInLeft}
          className="text-left space-y-4 md:space-y-6 lg:space-y-8 mt-[10vh] md:mt-[25vh]"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white md:text-[#3B2415]"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 800,
              lineHeight: "60px",
              letterSpacing: "0%",
            }}
          >
            누워서 30분
            <br />
            수면 다이어트 테라피, 도안재
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-white md:text-[#3B2415]"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            가볍게, 편안하게, 아름답게
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-medium text-base md:text-lg lg:text-xl text-white md:text-[#3B2415]"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 500,
              lineHeight: "26px",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            천년의 지혜와 7종의 특허 기술로 <br />
            당신의 몸에 가장 &apos;편안한 변화&apos;를 약속합니다
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-bold text-base md:text-lg lg:text-xl text-white md:text-[#3B2415]"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            지금, 가장 먼저 &apos;편안한 변화&apos;를 경험하세요.
          </motion.p>
        </motion.div>
      </div>

      {/* Buttons - Fixed at bottom */}
      <div className="absolute bottom-0  md:bottom-16 left-0 right-0 z-40 w-full">
        <div className="flex justify-center w-full">
          <motion.div
            variants={fadeInUp}
            className="flex w-full md:w-1/2 md:rounded-4xl overflow-hidden shadow-lg"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 md:px-8 py-8 md:py-4 transition-shadow text-center text-sm md:text-base"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                backgroundColor: "#3B2415",
                color: "#FFFFFF",
              }}
            >
              도안재 예약하기
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 md:px-8 py-8 md:py-4 transition-colors text-center text-sm md:text-base"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                backgroundColor: "#FFD800",
                color: "#3B2415",
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
