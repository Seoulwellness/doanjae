"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16 bg-white">
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
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "#000000",
                marginBottom: "8px",
              }}
            >
              지금 바로 &apos;가장 편안한 변화&apos;를
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 700,
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "#000000",
              }}
            >
              예약하세요.
            </p>
          </div>
        </div>
      </motion.div>

      <div
        id="contact"
        className="container max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pb-8 md:pb-20"
      >
        {/* Bottom Section: Logo and Company Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-6 md:gap-8"
        >
          {/* Logo */}
          <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 mx-auto md:mx-0">
            {/* Mobile: logo.png */}
            <Image
              src="/logo.png"
              alt="DOANJAE"
              fill
              className="object-contain md:hidden"
              sizes="(max-width: 768px) 128px, 160px"
              quality={90}
            />
            {/* Desktop: logo2.png */}
            <Image
              src="/logo2.png"
              alt="DOANJAE"
              fill
              className="object-contain hidden md:block"
              sizes="(max-width: 1024px) 160px, 192px"
              quality={90}
            />
          </div>

          {/* Company Information */}
          <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
            {/* Mobile: First line with 상호 and 대표자, Desktop: First Line grouped */}
            <div className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-2 md:gap-4">
              {/* Mobile: First line - 상호 and 대표자 together */}
              <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.15em",
                    color: "#747474",
                  }}
                >
                  상호
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#000000",
                  }}
                >
                  주식회사 서울웰니스클럽
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg md:hidden"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.15em",
                    color: "#747474",
                  }}
                >
                  {" "}
                  대표자{" "}
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg md:hidden"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#000000",
                  }}
                >
                  김연준
                </span>
              </div>

              {/* Desktop: 대표자 separate */}
              <div className="hidden md:flex flex-row items-center gap-1 md:gap-2">
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.15em",
                    color: "#747474",
                  }}
                >
                  대표자
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#000000",
                  }}
                >
                  김연준
                </span>
              </div>

              {/* 사업자등록번호 */}
              <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.15em",
                    color: "#747474",
                  }}
                >
                  사업자등록번호
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#000000",
                  }}
                >
                  8688102266
                  <a
                    href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8688102266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] underline hover:opacity-70 transition-opacity ml-1 cursor-pointer"
                  >
                    [사업자정보확인]
                  </a>
                </span>
              </div>
            </div>

            {/* Mobile: Individual lines, Desktop: Second Line grouped */}
            <div className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-2 md:gap-4">
              {/* 주소 */}
              <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.15em",
                    color: "#747474",
                  }}
                >
                  주소
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#000000",
                  }}
                >
                  대전광역시 대덕구 대전로 1394, 1층(읍내동)
                </span>
              </div>

              {/* 개인정보보호책임자 */}
              <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.15em",
                    color: "#747474",
                  }}
                >
                  개인정보보호책임자
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "-0.05em",
                    color: "#000000",
                  }}
                >
                  김연준
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p
              className="text-sm md:text-base lg:text-lg mt-2 text-center md:text-left"
              style={{
                fontFamily: "Pretendard, sans-serif",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              Copyright ⓒ 주식회사 서울웰니스클럽 All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
