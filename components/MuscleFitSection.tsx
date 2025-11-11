"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function MuscleFitSection() {
  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#D8CEBA" }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title and Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-24"
            style={{ color: "#3b2415" }}
          >
            Muscle fit Program
          </h2>

          <div className="space-y-2 md:space-y-3">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#3b2415" }}
            >
              운동만으로는 채울 수 없는 &apos;핏(FIT)&apos;을 원하신다면,
            </p>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#3b2415" }}
            >
              운동없이 완성하는,
            </p>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#3b2415" }}
            >
              고강도 머슬핏 케어
            </p>
          </div>
        </motion.div>

        {/* First Row: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-12 md:mb-16">
          {/* Image Section - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image10.png"
              alt="Muscle Fit"
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
            variants={fadeInRight}
            className="space-y-6 mx-16 text-center lg:text-left"
          >
            {/* <h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "#3b2415" }}
            >
              고강도 머슬핏 케어
            </h3> */}
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#3b2415" }}
            >
            <strong >근육 강화, 림프 순환, 지방 감소 3종 프로그램</strong>으로 <br /> 탄탄한 바디라인을 완성합니다.
            </p>
          </motion.div>
        </div>

        {/* Second Row: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-6 order-2 lg:order-1 mx-16 text-center lg:text-left"
          >
            {/* <h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "#3b2415" }}
            >
              전문 케어 솔루션
            </h3> */}
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#3b2415" }}
            >
              '고강도 전자기장 기술'을 기반으로 <br />
일반적인 운동으로는 <br />
자극하기 어려운 깊은 근육까지 <br />
<strong>직접 자극하고 강화하여,</strong> <br />
원하는 부위를 집중 관리합니다.
            </p>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative w-full order-1 lg:order-2"
          >
            <Image
              src="/images/landing/image11.png"
              alt="Muscle Fit Care"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-32 space-y-2"
        >
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{ color: "#3b2415" }}
          >
            운동 후 지친 근육을 위한
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: "#3b2415" }}
          >
            도안재만의 힐링 케어
          </p>
        </motion.div>
      </div>
    </section>
  );
}
