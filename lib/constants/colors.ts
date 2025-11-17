/**
 * Centralized color constants for the Doanjae brand
 * All colors used throughout the application should be defined here
 */

export const colors = {
  // Primary brand colors - Brown tones
  brown: {
    primary: "#3B2415", // Main brand brown (headings, primary text)
    medium: "#5C4A3A", // Medium brown
    light: "#8B7355", // Light brown accent
  },

  // Secondary brand colors - Beige/Cream tones
  beige: {
    primary: "#D8CEBA", // Primary beige
    secondary: "#DBCFBF", // Secondary beige
    light: "#E5D6C3", // Light beige
    lighter: "#E4DBD2", // Lighter beige variant
    cream: "#D6CEB9", // Cream variant
  },

  // Background colors
  background: {
    primary: "#F5F1ED", // Main background
    secondary: "#FFFFFF", // White background
    cream: "#F8F5F2", // Cream background variant
  },

  // Text colors
  text: {
    primary: "#3B2415", // Primary text (brown)
    secondary: "#5C5C5C", // Secondary text (gray)
    muted: "#8B8B8B", // Muted text
    white: "#FFFFFF", // White text
  },

  // UI element colors
  border: {
    light: "#E0E0E0", // Light borders
    medium: "#D8CEBA", // Medium borders (beige)
    dark: "#3B2415", // Dark borders (brown)
  },

  // Status/accent colors (if needed for future features)
  accent: {
    gold: "#D4AF37", // Gold accent (if needed)
    warm: "#F5E6D3", // Warm accent
    kakao: "#FFD800", // KakaoTalk yellow
  },
} as const;

// Export individual color palettes for convenience
export const { brown, beige, background, text, border, accent } = colors;

// Type for color values (useful for TypeScript)
export type ColorPalette = typeof colors;
export type BrownShade = keyof typeof colors.brown;
export type BeigeShade = keyof typeof colors.beige;
