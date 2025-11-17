/**
 * Shared TypeScript types and interfaces for the application
 */

import { ReactNode } from "react";

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Banner/Carousel types
export interface BannerItem {
  id: number;
  text: string;
  color?: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
}

// Navigation types
export interface NavigationProps {
  className?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

// Review/Testimonial types
export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date?: string;
  image?: string;
  verified?: boolean;
}

export interface ReviewCardProps {
  review: Review;
  index: number;
}

// Feature types
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

// Program types
export interface Program {
  id: number;
  name: string;
  description: string;
  duration?: string;
  price?: number;
  features?: string[];
  image?: string;
}

// Price table types
export interface PricingTier {
  id: number;
  name: string;
  price: number;
  duration?: string;
  features: string[];
  highlighted?: boolean;
  discount?: number;
}

export interface PriceTable {
  id: number;
  title: string;
  tiers: PricingTier[];
}

// Location types
export interface Location {
  name: string;
  address: string;
  phone: string;
  email?: string;
  hours?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Process/Step types
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image?: string;
  order: number;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  repeat?: number;
}

// Section wrapper types
export interface SectionWrapperProps extends BaseComponentProps {
  id?: string;
  fullWidth?: boolean;
  backgroundColor?: string;
  padding?: string;
}

// Error boundary types
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Form types (for future use)
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreeToTerms?: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  program?: string;
  message?: string;
}

// API response types (for future use)
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ID = string | number;
