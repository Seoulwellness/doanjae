"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { fadeInDown } from "@/lib/animations";

interface NavigationProps {
  align?: "left" | "center";
  fixed?: boolean;
}

export default function Navigation({
  align = "center",
  fixed = true,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className={`${fixed ? "fixed" : "absolute"} left-0 right-0 z-50 ${
          fixed ? "top-10" : "top-0"
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/logo2.png"
                  alt="DOANJAE"
                  width={120}
                  height={120}
                  className="h-auto w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Spacer for balance */}
            <div className="w-10" />
          </div>
        </div>
      </motion.nav>

      {/* Desktop Navigation */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className={`hidden md:block ${fixed ? "fixed" : "absolute"} z-50 ${
          fixed ? "top-12" : "top-10"
        } ${
          align === "left"
            ? "left-32"
            : fixed
            ? "left-1/2 -translate-x-1/2"
            : "left-32"
        }`}
      >
        <div className="rounded-lg px-6 md:px-8 lg:px-12 py-3 md:py-4">
          <div
            className={`flex items-center gap-8 md:gap-12 lg:gap-16 ${
              align === "left" ? "justify-start" : "justify-between"
            }`}
          >
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/logo.png"
                  alt="DOANJAE"
                  width={40}
                  height={40}
                  className="h-auto w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              <Link
                href="/landing#brand"
                className={`font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer ${
                  align === "left" ? "text-[#3b2415]" : "text-black"
                }`}
              >
                BRAND
              </Link>
              <Link
                href="/landing#program"
                className={`font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer ${
                  align === "left" ? "text-[#3b2415]" : "text-black"
                }`}
              >
                PROGRAM
              </Link>
              <Link
                href="/landing#price"
                className={`font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer ${
                  align === "left" ? "text-[#3b2415]" : "text-black"
                }`}
              >
                PRICE
              </Link>
              <Link
                href="/landing#contact"
                className={`font-bold text-sm md:text-base uppercase hover:opacity-70 transition-opacity cursor-pointer ${
                  align === "left" ? "text-[#3b2415]" : "text-black"
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-[70%] max-w-sm bg-[#d8ceba] z-[60] md:hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
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
                      href="/landing#brand"
                      className="block py-4 text-black font-bold text-lg border-b border-black/10 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Brand
                    </Link>
                    <Link
                      href="/landing#program"
                      className="block py-4 text-black font-bold text-lg border-b border-black/10 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Program
                    </Link>
                    <Link
                      href="/landing#price"
                      className="block py-4 text-black font-bold text-lg border-b border-black/10 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Price
                    </Link>
                    <Link
                      href="/landing#contact"
                      className="block py-4 text-black font-bold text-lg border-b border-black/10 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
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
