/**
 * Theme constants for consistent styling across the application
 */

export const colors = {
  primary: '#3b2415',
  background: {
    beige: '#dbcfbf',
    lightBeige: '#D8CEBA',
    cream: '#e4dbd2',
    white: '#ffffff',
  },
  text: {
    primary: '#3b2415',
    white: '#ffffff',
  },
  overlay: {
    darkBrown: 'rgba(57, 38, 24, 0.8)', // rgba version of primary with 80% opacity
  },
} as const;

export const spacing = {
  section: {
    py: 'py-8 md:py-32',
    px: 'px-4 sm:px-6 lg:px-8',
  },
  container: {
    base: 'container mx-auto max-w-7xl',
  },
} as const;

