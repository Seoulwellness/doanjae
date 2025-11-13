"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

interface NavigationProps {
  fixed?: boolean;
}

export default function Navigation({ fixed = true }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if banner is visible (scrolling down past 50px hides it)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setBannerVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setBannerVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className={`${
          fixed ? "fixed" : "absolute"
        } left-0 right-0 z-50 transition-all duration-300 ${
          fixed ? (bannerVisible ? "top-10" : "top-0") : "top-0"
        } md:hidden`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu - Left */}
            <button
              className="p-2"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-8 h-8 text-black" />
            </button>

            {/* Logo - Center */}
            <Link href="/">
              <div className="flex-shrink-0">
                <Image
                  src="/logo2.png"
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
        } z-50 transition-all duration-300 ${
          fixed ? (bannerVisible ? "top-12" : "top-0") : "top-10"
        } left-1/2 -translate-x-1/2`}
      >
        <div className="rounded-lg px-6 md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16 justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
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
                  color: "#000000",
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
                  color: "#000000",
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
                  color: "#000000",
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
                  color: "#000000",
                }}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Side Panel */}
          <div
            className="fixed left-0 top-0 bottom-0 w-[70%] max-w-sm bg-[#d8ceba] z-[60] md:hidden overflow-y-auto"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 bg-[#d8ceba]">
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
          </div>
        </>
      )}
    </>
  );
}
