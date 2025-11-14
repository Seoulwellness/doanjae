"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";

export default function Landing() {
  return (
    <motion.section
      id="brand"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="relative py-8 md:py-12 lg:py-40"
      style={{ backgroundColor: "#e4dbd2" }}
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
              className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "0%",
                color: "#3B2415",
              }}
            >
              30분, 정말 그냥 <br /> 누워만 있어도 돼요.
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="font-bold text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: "0%",
                color: "#3B2415",
              }}
            >
              땀만 뻘뻘 흘리던 기존의 관리와는 달라요.
            </motion.p>

            <motion.div
              variants={fadeInLeft}
              className="text-xs md:text-sm"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 400,
                lineHeight: "16px",
                letterSpacing: "0%",
                verticalAlign: "middle",
                color: "#3B2415",
              }}
            >
              도안재의 30분은{" "}
              <span
                className="text-xs md:text-sm"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "16px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                천년의 지혜
              </span>
              와
              <br />
              <span
                className="text-xs md:text-sm"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "16px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                7종의 특허 기술
              </span>
              이 집약된 시간입니다.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
