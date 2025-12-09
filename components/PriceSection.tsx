"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { colors, textStyles, mergeStyles, fonts } from "@/lib/constants";

// Constants
const GRID_GAP = "4px";
const CELL_PADDING =
  "px-2 py-2 sm:px-4 sm:py-3 md:px-8 md:py-5 lg:px-10 lg:py-6";
const CELL_TEXT = "text-center text-xs sm:text-sm md:text-base lg:text-lg";

// Styles (defined at module level for reuse)
const tableHeaderCellStyle = mergeStyles(textStyles.headingWhite, {
  fontWeight: 700,
});

const tableBodyCellStyle = mergeStyles(textStyles.headingWhite, {
  fontWeight: 700,
  fontFamily: fonts.pretendard,
  color: "#000000",
});

// Types
type CellType = "header" | "body" | "last-column";
type CellPosition = {
  colIndex: number; // 0-3 (0,1,2 are first 3 columns, 3 is last column)
  rowIndex: number; // 0 is header, 1+ are data rows
  isFirstRow: boolean;
};

// Helper function to calculate margin styles based on cell position
function getCellMargins(position: CellPosition): React.CSSProperties {
  const { colIndex, rowIndex, isFirstRow } = position;
  const gap = GRID_GAP;
  const negativeGap = `-${gap}`;

  // Header row - no negative margins (keep gaps)
  if (isFirstRow) {
    return {};
  }

  // Last column (colIndex 3) - only vertical negative margins (but keep gap after header)
  if (colIndex === 3) {
    // Only apply negative vertical margins starting from second data row
    if (rowIndex > 1) {
      return {
        marginTop: negativeGap,
        marginBottom: negativeGap,
      };
    }
    // First data row keeps the gap from header
    return {};
  }

  // First 3 columns (colIndex 0, 1, 2) - collapse all gaps
  const margins: React.CSSProperties = {};

  // Horizontal margins
  if (colIndex === 0) {
    margins.marginRight = negativeGap;
  } else if (colIndex === 1) {
    margins.marginLeft = negativeGap;
    margins.marginRight = negativeGap;
  } else if (colIndex === 2) {
    margins.marginLeft = negativeGap;
  }

  // Vertical margins (for all data rows except first)
  if (rowIndex > 1) {
    margins.marginTop = negativeGap;
    margins.marginBottom = negativeGap;
  }

  return margins;
}

// Reusable cell component
interface PriceTableCellProps {
  children: React.ReactNode;
  type: CellType;
  position: CellPosition;
}

function PriceTableCell({ children, type, position }: PriceTableCellProps) {
  const baseStyle =
    type === "header" || type === "last-column"
      ? tableHeaderCellStyle
      : tableBodyCellStyle;

  const backgroundColor =
    type === "header" || type === "last-column"
      ? colors.brown.primary
      : "#FFFBF8";

  const margins = getCellMargins(position);

  return (
    <div
      className={`${CELL_PADDING} ${CELL_TEXT}`}
      style={{
        ...baseStyle,
        backgroundColor,
        ...margins,
      }}
    >
      {children}
    </div>
  );
}

// Table data structure
interface TableData {
  title: string;
  description: string;
  headers: string[];
  rows: string[][];
}

const tablesData: TableData[] = [
  {
    title: "Slimming Program",
    description: "누워서 30분, 수면 다이어트 테라피",
    headers: ["횟수", "시간", "가격", "회당 가격"],
    rows: [
      ["1회", "30분", "100,000원", "100,000원"],
      ["1회", "60분", "145,000원", "72,500원"],
      ["1회", "90분", "179,000원", "59,000원"],
      ["5회", "회당 30분", "299,000원", "59,800원"],
      ["10회", "회당 30분", "550,000원", "55,000원"],
    ],
  },
  {
    title: "MuscleFit Program",
    description: "운동없이 완성하는, 고강도 머슬핏 케어",
    headers: ["횟수", "시간", "가격", "회당 가격"],
    rows: [
      ["1회", "30분", "100,000원", "100,000원"],
      ["1회", "60분", "145,000원", "72,500원"],
      ["5회", "회당 30분", "299,000원", "59,800원"],
      ["10회", "회당 30분", "550,000원", "55,000원"],
    ],
  },
  {
    title: "Slimming + MuscleFit Program",
    description: "수면 다이어트 + 머슬핏 케어",
    headers: ["횟수", "시간", "가격", "회당 가격"],
    rows: [
      ["1회", "60분(30분+30분)", "145,000원", "72,500원"],
      ["1회", "90분(30분+60분)", "179,000원", "59,000원"],
      ["5회", "회당 60분", "550,000원", "55,000원"],
      ["10회", "회당 60분", "990,000원", "49,500원"],
    ],
  },
];

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

  const eventHeaderStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "100%",
    textAlign: "center" as const,
    color: colors.brown.primary,
  });

  const eventTextStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "100%",
    textAlign: "center" as const,
    color: "#3B2415",
  });

  const descriptionStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "120%",
    textAlign: "center" as const,
    color: "#3B2415",
  });

  const cardTitleStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "140%",
    textAlign: "center" as const,
  });

  const cardPriceStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "120%",
    textAlign: "center" as const,
  });

  const cardLabelStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "150%",
    textAlign: "center" as const,
  });

  const finalMessageStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "120%",
    textAlign: "center" as const,
    color: "#3B2415",
  });

  const buttonStyle = mergeStyles({
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "100%",
    textAlign: "center" as const,
    color: colors.text.white,
  });

  return (
    <section id="price" className="pt-8 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center pb-12 md:pb-0"
        >
          <h2
            className="mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={sectionTitleStyle}
          >
            Price
          </h2>

          <p className="mb-2" style={eventHeaderStyle}>
            오픈특가 체험권
          </p>
          <p className="mb-8" style={eventTextStyle}>
            EVENT
          </p>

          {/* First Price Card - Beige */}
          <div
            className="max-w-xs mx-auto mb-12 px-8 pt-8 pb-3 md:px-12 md:pt-12 md:pb-6"
            style={{ backgroundColor: colors.beige.lighter }}
          >
            <p
              className="mb-4"
              style={{
                ...descriptionStyle,
                fontSize: "16px",
              }}
            >
              누워서 경험하는
              <br />
              <span className="font-bold">수면 다이어트 테라피</span>
            </p>
            <p
              className="mb-1"
              style={{
                ...cardTitleStyle,
                fontSize: "26px",
                fontWeight: 700,
                color: "#3B2415",
              }}
            >
              슬림핏 1회 체험권
            </p>
            <p className="mb-6" style={{ ...cardPriceStyle, color: "#3B2415" }}>
              49,500원
            </p>
            <div
              className="border-t-2 border-dashed pt-4"
              style={{ borderColor: "#3B2415" }}
            >
              <p style={{ ...cardLabelStyle, color: "#3B2415" }}>
                Welcome coupon
              </p>
            </div>
          </div>

          {/* Second Price Card - Dark Brown */}
          <div
            className="max-w-xs mx-auto mb-12 px-8 pt-8 pb-3 md:px-12 md:pt-12 md:pb-6"
            style={{ backgroundColor: colors.brown.primary }}
          >
            <p
              className="mb-4"
              style={{
                ...descriptionStyle,
                fontSize: "16px",
                color: colors.text.white,
              }}
            >
              운동 없이 완성하는
              <br />
              <span className="font-bold">기술집약형 체험관리</span>
            </p>
            <p
              className="mb-1"
              style={{
                ...cardTitleStyle,
                fontSize: "26px",
                fontWeight: 700,
                color: colors.text.white,
                lineHeight: "120%",
              }}
            >
              슬림핏 + 머슬핏
              <br />
              1회 체험권
            </p>
            <p
              className="mb-6"
              style={{ ...cardPriceStyle, color: colors.text.white }}
            >
              99,000원
            </p>
            <div
              className="border-t-2 border-dashed pt-4"
              style={{ borderColor: colors.text.white }}
            >
              <p style={{ ...cardLabelStyle, color: colors.text.white }}>
                Welcome coupon
              </p>
            </div>
          </div>

          <p className="mb-0" style={finalMessageStyle}>
            런칭을 기념하여 오직 지금만 드리는
          </p>
          <p className="mb-6" style={{ ...finalMessageStyle, fontWeight: 700 }}>
            특별한 혜택을 놓치지 마세요!
          </p>

          {/* CTA Button */}
          <a
            href="https://naver.me/xjUE2WjY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.brown.primary }}
          >
            <span style={buttonStyle}>오픈특가 예약하기</span>
          </a>
        </motion.div>

        {/* Price Tables - Commented Out */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full mb-0 md:mb-16 space-y-6 sm:space-y-8 md:space-y-12 px-4 py-8 sm:p-8 md:p-16 lg:p-24"
          style={{ backgroundColor: colors.beige.cream }}
        >
          {tablesData.map((table, tableIndex) => (
            <div
              key={tableIndex}
              className="w-full p-2 sm:p-4 md:p-6 lg:p-8 rounded-lg"
            >
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-2 md:mb-3 text-center"
                style={{
                  fontFamily: fonts.belleza,
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: colors.brown.primary,
                }}
              >
                {table.title}
              </h3>
              <p
                className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-6 text-center"
                style={tableDescriptionStyle}
              >
                {table.description}
              </p>
              <div>
                <div
                  className="w-full"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: GRID_GAP,
                  }}
                >
                  {table.headers.map((header, colIndex) => (
                    <PriceTableCell
                      key={`header-${colIndex}`}
                      type="header"
                      position={{
                        colIndex,
                        rowIndex: 0,
                        isFirstRow: true,
                      }}
                    >
                      {header}
                    </PriceTableCell>
                  ))}

                  {table.rows.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <PriceTableCell
                        key={`row-${rowIndex}-col-${colIndex}`}
                        type={colIndex === 3 ? "last-column" : "body"}
                        position={{
                          colIndex,
                          rowIndex: rowIndex + 1,
                          isFirstRow: false,
                        }}
                      >
                        {cell}
                      </PriceTableCell>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
