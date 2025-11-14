"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";

interface NavigationProps {
  fixed?: boolean;
}

export default function Navigation({ fixed = true }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    if (!fixed) return;

    let observer: IntersectionObserver | null = null;

    // Use setTimeout to avoid synchronous setState in effect
    const timeoutId = setTimeout(() => {
      const bannerElement = document.getElementById("top-banner");
      if (!bannerElement) {
        setBannerVisible(false);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setBannerVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0,
          rootMargin: "0px",
        }
      );

      observer.observe(bannerElement);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [fixed]);

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className={`${
          fixed ? "fixed" : "absolute"
        } left-0 right-0 z-[100] transition-all duration-200 ease-out ${
          fixed ? (bannerVisible ? "top-10" : "top-0") : "top-0"
        } md:hidden`}
        style={{
          backgroundColor: bannerVisible ? "transparent" : "#3b2415",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu - Left */}
            <button
              className="p-2"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu
                className="w-8 h-8 transition-colors duration-200 ease-out"
                style={{ color: bannerVisible ? "#000000" : "#ffffff" }}
              />
            </button>

            {/* Logo - Center */}
            <Link href="/">
              <div className="flex-shrink-0 transition-opacity duration-200 ease-out">
                <Image
                  src={bannerVisible ? "/logo2.png" : "/logo3.png"}
                  alt="DOANJAE"
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Spacer for balance */}
            <div className="w-10" />
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block ${
          fixed ? "fixed" : "absolute"
        } z-[100] transition-[top] duration-200 ease-out ${
          fixed ? (bannerVisible ? "top-12" : "top-3") : "top-10"
        } left-1/2 -translate-x-1/2`}
      >
        <div
          className={`rounded-lg px-6 md:px-8 lg:px-12 py-3 md:py-4 ${
            bannerVisible ? "" : "shadow-sm"
          }`}
          style={{
            backgroundColor: bannerVisible ? "transparent" : "#3b2415",
            transition: "background-color 200ms ease-out",
          }}
        >
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16 justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0 transition-opacity duration-200 ease-out">
                <Image
                  src={bannerVisible ? "/logo.png" : "/logo4.png"}
                  alt="DOANJAE"
                  width={40}
                  height={40}
                  className="h-auto w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              <Link
                href="/#brand"
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: bannerVisible ? "#000000" : "#ffffff",
                  transition: "color 200ms ease-out",
                }}
              >
                BRAND
              </Link>
              <Link
                href="/#program"
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: bannerVisible ? "#000000" : "#ffffff",
                  transition: "color 200ms ease-out",
                }}
              >
                PROGRAM
              </Link>
              <Link
                href="/#price"
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: bannerVisible ? "#000000" : "#ffffff",
                  transition: "color 200ms ease-out",
                }}
              >
                PRICE
              </Link>
              <Link
                href="/#contact"
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: bannerVisible ? "#000000" : "#ffffff",
                  transition: "color 200ms ease-out",
                }}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={
                prefersReducedMotion()
                  ? { duration: 0.01 }
                  : { duration: 0.3, ease: "easeOut" }
              }
              className="fixed inset-0 bg-black/50 z-[110] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={
                prefersReducedMotion()
                  ? { opacity: 0 }
                  : { opacity: 0, x: "-100%" }
              }
              animate={
                prefersReducedMotion() ? { opacity: 1 } : { opacity: 1, x: 0 }
              }
              exit={
                prefersReducedMotion()
                  ? { opacity: 0 }
                  : { opacity: 0, x: "-100%" }
              }
              transition={
                prefersReducedMotion()
                  ? { duration: 0.01 }
                  : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }
              className="fixed left-0 top-0 bottom-0 w-[80%] max-w-md bg-[#d8ceba] z-[110] md:hidden overflow-y-auto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 bg-[#d8ceba] relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-black" />
                  </button>

                  <Link href="/">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src="/logo.png"
                        alt="DOANJAE"
                        width={50}
                        height={50}
                        style={{ width: "50px", height: "auto" }}
                      />
                      <div className="flex flex-col">
                        <p className="text-black font-medium mb-1">
                          가볍게, 편안하게, 아름답게
                        </p>
                        <p className="text-black text-sm">
                          Korea Wellness & Body Therapy
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Promotional Banner */}
                <div className="px-6 py-6 bg-[#ffd800]">
                  <p className="text-black font-semibold text-sm leading-relaxed">
                    카카오톡 채널 추가하고
                    <br />
                    3,000원 혜택 받아가세요!
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-4">
                  <nav className="space-y-0">
                    <Link
                      href="/#brand"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontWeight: 700,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BRAND
                    </Link>
                    <Link
                      href="/#program"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontWeight: 700,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PROGRAM
                    </Link>
                    <Link
                      href="/#price"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontWeight: 700,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PRICE
                    </Link>
                    <Link
                      href="/#contact"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontWeight: 700,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACT
                    </Link>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
