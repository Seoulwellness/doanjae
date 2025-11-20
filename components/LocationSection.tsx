"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles, mergeStyles, fonts } from "@/lib/constants";
import NaverMap from "./NaverMap";

export default function LocationSection() {
  // Extend base styles - Belleza font for section titles
  const sectionTitleStyle = mergeStyles({
    fontFamily: fonts.belleza,
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: colors.brown.primary,
  });

  const largeTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
  });

  const bodyTextRegular = mergeStyles(textStyles.bodyCentered, {
    fontWeight: 400,
    color: colors.brown.primary,
    verticalAlign: "middle" as const,
  });

  const bodyTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
  });

  const headingStyle = mergeStyles(textStyles.headingCentered, {
    lineHeight: "100%",
    verticalAlign: "middle" as const,
  });
  return (
    <section
      id="map"
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.beige.primary }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="mb-6 md:mb-24 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={sectionTitleStyle}
          >
            Location
          </h2>
          <div>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              도안재는 가장 편안한 공간에서
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              당신을 기다립니다.
            </p>
            <br />
            <br />
          </div>
        </motion.div>

        {/* Naver Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full mb-8 md:mb-12"
        >
          <NaverMap className="w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden" />
        </motion.div>

        {/* Address Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
            <Image
              src="/location.png"
              alt="Location"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
              quality={90}
            />
            {/* Circle on top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1 md:translate-y-2 rounded-full"
              style={{
                width: "32%",
                height: "32%",
                backgroundColor: colors.beige.primary,
              }}
            />
          </div>
          <p
            className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
            style={bodyTextRegular}
          >
            서울특별시 광진구 동이로 212, <br />{" "}
            <span
              className="text-base md:text-lg lg:text-xl"
              style={bodyTextBold}
            >
              아늑호텔 앤 스파 서울 성수 건대점 B1
            </span>
          </p>
        </motion.div>

        {/* Parking Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h3
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={headingStyle}
          >
            주차 안내
          </h3>
          <br />

          <div>
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={bodyTextRegular}
            >
              아늑 호텔 지하 주차장 이용 가능
            </p>
            <br />
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={bodyTextBold}
            >
              *관리 타임 무료 지원
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
