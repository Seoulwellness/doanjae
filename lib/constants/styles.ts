import { CSSProperties } from "react";
import { colors } from "./colors";

/**
 * Centralized style constants to reduce inline style duplication
 * All common style patterns should be defined here
 */

// Font family constants
export const fonts = {
  pretendard: "Pretendard, sans-serif",
  belleza: "Belleza-Regular, sans-serif",
} as const;

// Common text styles
export const textStyles = {
  // Heading styles
  heading1: {
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    color: colors.brown.primary,
    letterSpacing: "0%",
  } as CSSProperties,

  heading2: {
    fontFamily: fonts.pretendard,
    fontWeight: 600,
    color: colors.brown.primary,
    letterSpacing: "0%",
  } as CSSProperties,

  heading3: {
    fontFamily: fonts.pretendard,
    fontWeight: 500,
    color: colors.brown.primary,
    letterSpacing: "0%",
  } as CSSProperties,

  // Body text styles
  bodyLarge: {
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    color: colors.text.secondary,
    letterSpacing: "0%",
  } as CSSProperties,

  bodyMedium: {
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    color: colors.text.secondary,
    fontSize: "16px",
    letterSpacing: "0%",
  } as CSSProperties,

  bodySmall: {
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    color: colors.text.secondary,
    fontSize: "14px",
    letterSpacing: "0%",
  } as CSSProperties,

  // Special text styles
  caption: {
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    color: colors.text.muted,
    fontSize: "12px",
    letterSpacing: "0%",
  } as CSSProperties,

  // Centered text variants
  headingCentered: {
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    color: colors.brown.primary,
    textAlign: "center" as const,
    letterSpacing: "0%",
  } as CSSProperties,

  bodyCentered: {
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    color: colors.text.secondary,
    textAlign: "center" as const,
    letterSpacing: "0%",
  } as CSSProperties,

  // White text variants (for dark backgrounds)
  headingWhite: {
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    color: colors.text.white,
    letterSpacing: "0%",
  } as CSSProperties,

  bodyWhite: {
    fontFamily: fonts.pretendard,
    fontWeight: 400,
    color: colors.text.white,
    letterSpacing: "0%",
  } as CSSProperties,
} as const;

// Common layout styles
export const layoutStyles = {
  // Container styles
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  } as CSSProperties,

  // Flex layouts
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,

  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as CSSProperties,

  flexColumn: {
    display: "flex",
    flexDirection: "column" as const,
  } as CSSProperties,

  flexColumnCenter: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,
} as const;

// Common section styles
export const sectionStyles = {
  // Section padding
  sectionPadding: {
    padding: "80px 20px",
  } as CSSProperties,

  sectionPaddingMobile: {
    padding: "40px 20px",
  } as CSSProperties,

  // Section backgrounds
  backgroundCream: {
    backgroundColor: colors.background.primary,
  } as CSSProperties,

  backgroundWhite: {
    backgroundColor: colors.background.secondary,
  } as CSSProperties,

  backgroundBeige: {
    backgroundColor: colors.beige.primary,
  } as CSSProperties,
} as const;

// Button styles
export const buttonStyles = {
  primary: {
    fontFamily: fonts.pretendard,
    fontWeight: 600,
    backgroundColor: colors.brown.primary,
    color: colors.text.white,
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  } as CSSProperties,

  secondary: {
    fontFamily: fonts.pretendard,
    fontWeight: 600,
    backgroundColor: colors.beige.primary,
    color: colors.brown.primary,
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  } as CSSProperties,

  outline: {
    fontFamily: fonts.pretendard,
    fontWeight: 600,
    backgroundColor: "transparent",
    color: colors.brown.primary,
    padding: "12px 24px",
    borderRadius: "8px",
    border: `2px solid ${colors.brown.primary}`,
    cursor: "pointer",
    transition: "all 0.3s ease",
  } as CSSProperties,
} as const;

// Utility function to merge styles
export const mergeStyles = (...styles: CSSProperties[]): CSSProperties => {
  return Object.assign({}, ...styles);
};

// Export all style groups
export const styles = {
  text: textStyles,
  layout: layoutStyles,
  section: sectionStyles,
  button: buttonStyles,
} as const;
