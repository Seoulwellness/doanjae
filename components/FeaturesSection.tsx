"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { colors, textStyles, mergeStyles } from "@/lib/constants";

export default function FeaturesSection() {
  // Extend base styles with component-specific overrides
  const headingBoldStyle = mergeStyles(textStyles.heading1, {
    textAlign: "center" as const,
  });

  const bodyTextStyle = mergeStyles(textStyles.heading3, {
    lineHeight: "26px",
    verticalAlign: "middle" as const,
  });

  const bodyTextBoldStyle = mergeStyles(textStyles.heading1, {
    lineHeight: "26px",
    verticalAlign: "middle" as const,
  });
  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.beige.lighter }}
    >
      <div className="container mx-auto max-w-7xl space-y-12">
        {/* First Row: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Image Section - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative w-full px-12 sm:px-16 md:px-0"
          >
            <Image
              src="/images/landing/image2.png"
              alt="근적외선 파장"
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
            <h2
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={textStyles.heading3}
            >
              인체에 가장 유효한 <br />
              <span
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={headingBoldStyle}
              >
                &apos;근적외선&apos; 파장
              </span>
            </h2>

            <p
              className="text-base md:text-lg lg:text-xl"
              style={bodyTextStyle}
            >
              피부 표면이 아닌,{" "}
              <span
                className="text-base md:text-lg lg:text-xl"
                style={bodyTextBoldStyle}
              >
                깊은 곳의
              </span>
              <br />
              <span
                className="text-base md:text-lg lg:text-xl"
                style={bodyTextBoldStyle}
              >
                &apos;체지방&apos;에 직접 도달
              </span>
              하여 <br />
              스스로 타오르는 힘을 만듭니다.
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
            <h2
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={textStyles.heading3}
            >
              동의보감의 <br />
              <span
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={headingBoldStyle}
              >
                &apos;온열 요법&apos;
              </span>
            </h2>

            <p
              className="text-base md:text-lg lg:text-xl"
              style={bodyTextStyle}
            >
              몸 속 깊은 곳부터 따뜻하게 데워 <br />
              <span
                className="text-base md:text-lg lg:text-xl"
                style={bodyTextBoldStyle}
              >
                불필요한 노폐물과 독소가 땀과 함께
              </span>
              <br />
              <span
                className="text-base md:text-lg lg:text-xl"
                style={bodyTextBoldStyle}
              >
                자연스럽게 배출되도록 돕습니다.
              </span>
            </p>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative w-full order-1 lg:order-2 px-12 sm:px-16 md:px-0"
          >
            <Image
              src="/images/landing/image3.png"
              alt="온열요법"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
