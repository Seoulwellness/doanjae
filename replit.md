# 도안재 (Doanjae) - Premium Diet Therapy Website

## Overview
This is a Next.js 16 website for 도안재, a premium diet therapy service in South Korea. The website showcases the company's services, programs, and location information with a modern, responsive design.

## Recent Changes (November 25, 2025)
- Imported from GitHub repository
- Configured for Replit environment:
  - Updated Next.js to run on port 5000 with host 0.0.0.0
  - Added server actions allowed origins configuration for Replit's proxy
  - Added image quality configuration (75, 90) to resolve warnings
  - Set up workflow for development server

## Project Architecture

### Technology Stack
- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript 5
- **UI Framework**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion 11.11.1
- **Icons**: Lucide React
- **Analytics**: Amplitude Browser SDK
- **Maps**: Naver Maps API (requires API key)

### Directory Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions and helpers
- `public/` - Static assets (images, fonts, videos)
- `types/` - TypeScript type definitions

### Key Features
- Responsive design with mobile and desktop layouts
- Hero section with image carousel
- Multiple program sections (Slimming, Muscle Fit, Wellness)
- Customer reviews section
- Pricing information
- Location map (Naver Maps integration)
- Contact/CTA sections
- Error boundaries for component isolation

### Environment Variables
- `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` - Naver Maps API client ID (optional, map won't load without it)

## Development

### Commands
- `npm run dev` - Start development server on 0.0.0.0:5000
- `npm run build` - Build for production
- `npm start` - Start production server on 0.0.0.0:5000
- `npm run lint` - Run ESLint

### Replit Workflow
The "Start application" workflow runs `npm run dev` automatically, serving the site on port 5000 for webview preview.

## Notes
- The site uses Korean language content (ko_KR locale)
- Custom fonts: Pretendard (Korean), Geist (English), Belleza
- Video content includes premium.mp4 for the premium section
- Site is configured for the domain doan.life in metadata
