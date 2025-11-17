"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { colors, textStyles, mergeStyles, fonts } from "@/lib/constants";
import { colors as themeColors } from "@/lib/theme";

export default function WellnessBodyTherapySection() {
  // Extend base styles with component-specific overrides
  const sectionTitleStyle = mergeStyles({
    fontFamily: fonts.belleza,
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center" as const,
    color: colors.brown.primary,
  });

  const bodyTextMedium = mergeStyles(textStyles.heading3, {
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  });

  const largeTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
  });

  const overlayTextRegular = mergeStyles(textStyles.bodyWhite, {
    fontWeight: 500,
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  });

  const overlayTextBold = mergeStyles(textStyles.headingWhite, {
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  });

  const quoteTextStyle = mergeStyles(textStyles.headingCentered, {
    lineHeight: "100%",
  });

  const overlayBackground = themeColors.overlay.darkBrown;
  return (
    <section className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 relative">
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
        {/* Title and Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="mb-6 md:mb-24 text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={sectionTitleStyle}
          >
            Wellness Body Therapy
          </h2>

          <div>
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={bodyTextMedium}
            >
              당신의 &apos;오늘&apos;을 확인하고
            </p>
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={bodyTextMedium}
            >
              &apos;내일&apos;의 균형을 준비합니다.
            </p>
            <br />

            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              단순한 체형관리에서
            </p>

            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              끝나지 않는 도안재의 웰니스 테라피
            </p>
          </div>
        </motion.div>

        {/* Images with Overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-16">
          {/* Image 12 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image12.png"
              alt="인바디 재측정"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              quality={90}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[85px] sm:h-[95px] md:h-[105px] lg:h-[115px] text-center flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
              style={{ backgroundColor: overlayBackground }}
            >
              <p
                className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
                style={overlayTextRegular}
              >
                모든 관리가 끝나면{" "}
                <span
                  className="text-base md:text-lg lg:text-xl"
                  style={overlayTextBold}
                >
                  인바디 재측정을 통해
                </span>
                <br />
                <span
                  className="text-base md:text-lg lg:text-xl"
                  style={overlayTextBold}
                >
                  변화된 수치를 눈으로 직접 확인 합니다.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Image 13 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image13.png"
              alt="맞춤 한방 애프터티"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              quality={90}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[85px] sm:h-[95px] md:h-[105px] lg:h-[115px] text-center flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
              style={{ backgroundColor: overlayBackground }}
            >
              <p
                className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
                style={overlayTextRegular}
              >
                디지털 체질 테스트 결과에 따라 특별히
                <br />
                <span
                  className="text-base md:text-lg lg:text-xl"
                  style={overlayTextBold}
                >
                  블렌딩된 맞춤 한방 애프터티를 제공
                </span>
                하여, <br />
                몸속까지 완벽한 힐링을 완성합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quoted Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-32 space-y-2"
        >
          <p
            style={{
              textAlign: "center",
              color: colors.brown.primary,
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                display: "block",
                marginBottom: "16px",
              }}
            >
              &ldquo;
            </span>
            <span
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={quoteTextStyle}
            >
              도안재는 무너진 균형의 원인을 발견하고
            </span>
            <br />
            <span
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={quoteTextStyle}
            >
              우리 몸에 맞는 이상적인 아름다움을
            </span>
            <br />
            <span
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={quoteTextStyle}
            >
              함께 찾아 갑니다.
            </span>
            <br />
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                display: "block",
                marginTop: "16px",
              }}
            >
              &rdquo;
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
