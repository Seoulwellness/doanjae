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

  const tableDescriptionStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 600,
    lineHeight: "150%",
    letterSpacing: "0%",
    color: colors.brown.primary,
  });

  const tableHeaderCellStyle = mergeStyles(textStyles.headingWhite, {
    fontWeight: 700,
  });

  const tableBodyCellStyle = mergeStyles(textStyles.headingWhite, {
    fontWeight: 700,
    fontFamily: fonts.pretendard,
    color: "#000000",
  });

  return (
    <section id="price" className="py-8 md:py-32 px-0 sm:px-0 lg:px-8 bg-white">
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
          className="w-full mb-8 md:mb-16 space-y-8 md:space-y-12 p-12 md:p-16 lg:p-24"
          style={{ backgroundColor: colors.beige.cream }}
        >
          {/* Slimming Program */}
          <div className="w-full p-4 md:p-6 lg:p-8 rounded-lg">
            <h3
              className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-3 text-center"
              style={{
                fontFamily: fonts.belleza,
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: colors.brown.primary,
              }}
            >
              Slimming Program
            </h3>
            <p
              className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-center"
              style={tableDescriptionStyle}
            >
              누워서 30분, 수면 다이어트 테라피
            </p>
            <div className="overflow-x-auto">
              <table
                className="w-full"
                style={{ borderSpacing: "4px", borderCollapse: "separate" }}
              >
                <thead>
                  <tr>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      횟수
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      시간
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      가격
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      회당 가격
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      30분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      100,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      100,000원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      60분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      145,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      72,500원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      90분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      179,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      59,000원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      5회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      299,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      59,800원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      10회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      550,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      55,000원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MuscleFit Program */}
          <div className="w-full p-4 md:p-6 lg:p-8 rounded-lg">
            <h3
              className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-3 text-center"
              style={{
                fontFamily: fonts.belleza,
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: colors.brown.primary,
              }}
            >
              MuscleFit Program
            </h3>
            <p
              className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-center"
              style={tableDescriptionStyle}
            >
              운동없이 완성하는, 고강도 머슬핏 케어
            </p>
            <div className="overflow-x-auto">
              <table
                className="w-full"
                style={{ borderSpacing: "4px", borderCollapse: "separate" }}
              >
                <thead>
                  <tr>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      횟수
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      시간
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      가격
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      회당 가격
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      30분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      100,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      100,000원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      60분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      145,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      72,500원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      5회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      299,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      59,800원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      10회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      회당 30분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      550,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      55,000원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Slimming + MuscleFit Program */}
          <div className="w-full p-4 md:p-6 lg:p-8 rounded-lg">
            <h3
              className="text-xl md:text-2xl lg:text-2xl mb-2 md:mb-3 text-center"
              style={{
                fontFamily: fonts.belleza,
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: colors.brown.primary,
              }}
            >
              Slimming + MuscleFit Program
            </h3>
            <p
              className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 text-center"
              style={tableDescriptionStyle}
            >
              수면 다이어트 + 머슬핏 케어
            </p>
            <div className="overflow-x-auto">
              <table
                className="w-full"
                style={{ borderSpacing: "4px", borderCollapse: "separate" }}
              >
                <thead>
                  <tr>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      횟수
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      시간
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      가격
                    </th>
                    <th
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      회당 가격
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      60분(30분+30분)
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      145,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      72,500원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      1회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      90분(30분+60분)
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      179,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      59,000원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      5회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      회당 60분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      550,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      55,000원
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      10회
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      회당 60분
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableBodyCellStyle,
                        backgroundColor: "#FFFBF8",
                      }}
                    >
                      990,000원
                    </td>
                    <td
                      className="px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 text-center text-sm md:text-base lg:text-lg"
                      style={{
                        ...tableHeaderCellStyle,
                        backgroundColor: colors.brown.primary,
                      }}
                    >
                      49,500원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
