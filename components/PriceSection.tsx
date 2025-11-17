"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles, mergeStyles, fonts } from "@/lib/constants";

export default function PriceSection() {
  // Extend base styles with component-specific overrides
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

  const largeTextSemiBold = mergeStyles(textStyles.heading2, {
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: colors.text.white,
  });

  const mediumTextRegular = mergeStyles(textStyles.heading3, {
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    color: "#000000",
  });

  const mediumTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
    color: "#000000",
  });

  const tableHeadingStyle = mergeStyles(textStyles.heading1, {
    lineHeight: "100%",
  });

  const tableDescriptionStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0%",
    color: colors.brown.primary,
  });

  const tableHeaderCellStyle = textStyles.headingWhite;

  const tableBodyCellStyle = { fontFamily: fonts.pretendard, color: "#000000" };

  const bottomTextRegular = mergeStyles(textStyles.heading3, {
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  });

  const bottomTextBold = mergeStyles(textStyles.headingCentered, {
    verticalAlign: "middle" as const,
  });
  return (
    <section id="price" className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
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
            Price
          </h2>
          <div>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              2025년 11월
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={largeTextBold}
            >
              도안재 GRAND OPEN!
            </p>
            <br />

            <div
              className="inline-block px-6 md:px-12 py-3 md:py-4 rounded-full"
              style={{ backgroundColor: colors.brown.primary }}
            >
              <p
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
                style={largeTextSemiBold}
              >
                첫방문 49,500원
              </p>
            </div>
            <br />
            <br />
            <br />
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={mediumTextRegular}
            >
              런칭을 기념하여 오직 지금만 드리는
            </p>
            <br />
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.15] md:[line-height:26px]"
              style={mediumTextBold}
            >
              특별한 혜택을 놓치지 마세요!
            </p>
            <br />
            <br />
          </div>
        </motion.div>

        {/* Price Tables */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full mb-8 md:mb-16 space-y-8 md:space-y-12 p-4 md:p-6 lg:p-8"
          style={{ backgroundColor: colors.beige.cream }}
        >
          {/* Wellness Body Therapy 01 */}
          <div className="w-full">
            <h3
              className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4"
              style={tableHeadingStyle}
            >
              Wellness Body Therapy 01
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg mb-4 md:mb-6"
              style={tableDescriptionStyle}
            >
              누워서 30분, 수면 다이어트 테라피
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: colors.brown.primary }}>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      횟수
                    </th>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      시간
                    </th>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      가격
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      30분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      100,000원 (회당 100,000원)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: colors.background.secondary }}>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      60분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      145,000원 (회당 72,500원)
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      90분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      179,000원 (회당 59,667원)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: colors.background.secondary }}>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      5회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      299,000원 (회당 59,800원)
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      10회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      550,000원 (회당 55,000원)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Wellness Body Therapy 02 */}
          <div className="w-full">
            <h3
              className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4"
              style={tableHeadingStyle}
            >
              Wellness Body Therapy 02
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg mb-4 md:mb-6"
              style={tableDescriptionStyle}
            >
              운동없이 완성하는, 고강도 머슬핏 케어
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: colors.brown.primary }}>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      횟수
                    </th>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      시간
                    </th>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      가격
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      30분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      100,000원 (회당 100,000원)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: colors.background.secondary }}>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      60분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      145,000원 (회당 72,500원)
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      5회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      299,000원 (회당 59,800원)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: colors.background.secondary }}>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      10회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      550,000원 (회당 55,000원)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Wellness Body Therapy 03 */}
          <div className="w-full">
            <h3
              className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4"
              style={tableHeadingStyle}
            >
              Wellness Body Therapy 03
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg mb-4 md:mb-6"
              style={tableDescriptionStyle}
            >
              수면 다이어트 + 머슬핏 케어
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: colors.brown.primary }}>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      횟수
                    </th>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      시간
                    </th>
                    <th
                      className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableHeaderCellStyle}
                    >
                      가격
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      60분 (30분+30분)
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      145,000원 (회당 72,500원)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: colors.background.secondary }}>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      1회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      90분 (30분+60분)
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      179,000원 (회당 59,667원)
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      5회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      회당 60분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      550,000원 (회당 55,000원)
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: colors.background.secondary }}>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      10회
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      회당 60분
                    </td>
                    <td
                      className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base lg:text-lg border border-gray-300"
                      style={tableBodyCellStyle}
                    >
                      990,000원 (회당 49,500원)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <p
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
            style={bottomTextRegular}
          >
            오픈 혜택 마감 전,
          </p>
          <br />
          <p
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
            style={bottomTextBold}
          >
            지금 바로 예약하세요!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
