"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles, mergeStyles, fonts } from "@/lib/constants";

export default function CTASection() {
  // Extend base styles with component-specific overrides
  const ctaTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
    color: "#000000",
  });

  const labelTextStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.15em",
    color: colors.text.secondary,
  });

  const valueTextStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.05em",
    color: "#000000",
  });

  const copyrightTextStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#000000",
  });
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
              style={{ ...ctaTextBold, marginBottom: "8px" }}
            >
              지금 바로 &apos;가장 편안한 변화&apos;를
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px] mb-2 md:mb-12"
              style={ctaTextBold}
            >
              예약하세요.
            </p>
            <button
              className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-2 sm:py-3 md:py-5 lg:py-6 rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold cursor-pointer transition-opacity hover:opacity-90 active:opacity-75 whitespace-nowrap"
              style={{
                backgroundColor: colors.brown.primary,
                color: colors.text.white,
                fontFamily: fonts.pretendard,
              }}
            >
              예약하기
            </button>
          </div>
        </div>
      </motion.div>

      <div id="contact" className="w-full pb-16 md:pb-20">
        {/* Bottom Section: Logo and Company Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32"
        >
          {/* Left Column: Logo and Company Information */}
          <div className="flex flex-col gap-6 md:gap-8">
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
                    style={labelTextStyle}
                  >
                    상호
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={valueTextStyle}
                  >
                    주식회사 서울웰니스클럽
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg md:hidden"
                    style={labelTextStyle}
                  >
                    {" "}
                    대표자{" "}
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg md:hidden"
                    style={valueTextStyle}
                  >
                    김연준
                  </span>
                </div>

                {/* Desktop: 대표자 separate */}
                <div className="hidden md:flex flex-row items-center gap-1 md:gap-2">
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={labelTextStyle}
                  >
                    대표자
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={valueTextStyle}
                  >
                    김연준
                  </span>
                </div>

                {/* 사업자등록번호 */}
                <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={labelTextStyle}
                  >
                    사업자등록번호
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={valueTextStyle}
                  >
                    8688102266
                    <a
                      href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8688102266"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70 transition-opacity ml-1 cursor-pointer"
                      style={{ color: "#000000" }}
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
                    style={labelTextStyle}
                  >
                    주소
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={valueTextStyle}
                  >
                    대전광역시 대덕구 대전로 1394, 1층(읍내동)
                  </span>
                </div>

                {/* 개인정보보호책임자 */}
                <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:gap-2">
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={labelTextStyle}
                  >
                    개인정보보호책임자
                  </span>
                  <span
                    className="text-sm md:text-base lg:text-lg"
                    style={valueTextStyle}
                  >
                    김연준
                  </span>
                </div>
              </div>

              {/* Copyright */}
              <p
                className="text-sm md:text-base lg:text-lg mt-2 text-center md:text-left"
                style={copyrightTextStyle}
              >
                Copyright ⓒ 주식회사 서울웰니스클럽 All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left mt-8 md:mt-10">
            {/* Social Media */}
            <div className="flex flex-col gap-3">
              <p
                className="text-sm md:text-base lg:text-lg"
                style={labelTextStyle}
              >
                Social Media
              </p>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-8 h-8 md:w-6 md:h-6 hover:opacity-70 transition-opacity mx-auto md:mx-0"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: colors.brown.primary }}
                  className="w-full h-full"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col gap-5">
              <p
                className="text-sm md:text-base lg:text-lg"
                style={labelTextStyle}
              >
                고객센터
              </p>
              <p
                className="text-sm md:text-base lg:text-lg"
                style={valueTextStyle}
              >
                070-8822-1110
              </p>
              <div className="flex flex-row items-start gap-1 justify-center md:justify-start">
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={labelTextStyle}
                >
                  운영시간 :{" "}
                </span>
                <span
                  className="text-sm md:text-base lg:text-lg"
                  style={valueTextStyle}
                >
                  AM 10:00 - PM 23:00(*토, 일요일 및 공휴일 휴무)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
