"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";
import { colors, fonts } from "@/lib/constants";

interface NavigationProps {
  fixed?: boolean;
}

export default function Navigation({ fixed = true }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  // Smooth scroll to section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const behavior: ScrollBehavior = prefersReducedMotion()
        ? "auto"
        : "smooth";
      element.scrollIntoView({
        behavior,
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  // Reusable style objects
  const navLinkStyle = {
    fontFamily: fonts.pretendard,
    fontWeight: 700,
    lineHeight: "100%",
    letterSpacing: "0%",
  };

  const desktopNavLinkStyle = (visible: boolean) => ({
    ...navLinkStyle,
    color: visible ? "#000000" : colors.text.white,
    transition: "color 200ms ease-out",
  });

  const mobileNavLinkStyle = {
    ...navLinkStyle,
    color: "#000000",
  };

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
          fixed ? (bannerVisible ? "top-12" : "top-0") : "top-0"
        } md:hidden`}
        style={{
          backgroundColor: bannerVisible ? "transparent" : colors.brown.primary,
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
          fixed ? (bannerVisible ? "top-14 md:top-18" : "top-0") : "top-10"
        } left-0 right-0 w-full`}
      >
        <div
          className={`w-full px-6 md:px-8 lg:px-12 py-3 md:py-4 ${
            bannerVisible ? "" : "shadow-sm"
          }`}
          style={{
            backgroundColor: bannerVisible
              ? "transparent"
              : colors.brown.primary,
            transition: "background-color 200ms ease-out",
          }}
        >
          <div className="mx-auto relative flex items-center">
            {/* Logo - Left */}
            <Link href="/" className="flex-shrink-0 z-10">
              <div className="transition-opacity duration-200 ease-out">
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

            {/* Navigation Links - Center (truly centered on screen) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-8 lg:gap-10">
              <a
                href="#brand"
                onClick={(e) => scrollToSection(e, "brand")}
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={desktopNavLinkStyle(bannerVisible)}
              >
                BRAND
              </a>
              <a
                href="#program"
                onClick={(e) => scrollToSection(e, "program")}
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={desktopNavLinkStyle(bannerVisible)}
              >
                PROGRAM
              </a>
              <a
                href="#price"
                onClick={(e) => scrollToSection(e, "price")}
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={desktopNavLinkStyle(bannerVisible)}
              >
                PRICE
              </a>
              <a
                href="#map"
                onClick={(e) => scrollToSection(e, "map")}
                className="font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer"
                style={desktopNavLinkStyle(bannerVisible)}
              >
                CONTACT
              </a>
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
              className="fixed left-0 top-0 bottom-0 w-[80%] max-w-md z-[110] md:hidden overflow-y-auto"
              style={{ backgroundColor: colors.beige.primary }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div
                  className="p-6 relative"
                  style={{ backgroundColor: colors.beige.primary }}
                >
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
                    <a
                      href="#brand"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={mobileNavLinkStyle}
                      onClick={(e) => scrollToSection(e, "brand")}
                    >
                      BRAND
                    </a>
                    <a
                      href="#program"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={mobileNavLinkStyle}
                      onClick={(e) => scrollToSection(e, "program")}
                    >
                      PROGRAM
                    </a>
                    <a
                      href="#price"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={mobileNavLinkStyle}
                      onClick={(e) => scrollToSection(e, "price")}
                    >
                      PRICE
                    </a>
                    <a
                      href="#map"
                      className="block py-4 font-bold text-sm md:text-base uppercase border-b border-black/10 cursor-pointer"
                      style={mobileNavLinkStyle}
                      onClick={(e) => scrollToSection(e, "map")}
                    >
                      CONTACT
                    </a>
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
