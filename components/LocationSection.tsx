"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#D8CEBA" }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-24"
            style={{ color: "#3b2415" }}
          >
            Location
          </h2>
          <div>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#3b2415" }}
            >
              도안재는 가장 편안한 공간에서
            </p>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#3b2415" }}
            >
              당신을 기다립니다.
            </p>
            <br />
            <br />
          </div>
        </motion.div>

        {/* Map Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full mb-8 md:mb-12"
        >
          <Image
            src="/images/landing/image18.png"
            alt="Location Map"
            width={1200}
            height={800}
            className="w-full h-auto mx-auto"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Address Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <MapPin
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            style={{ color: "#3b2415" }}
          />
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed text-center"
            style={{ color: "#3b2415" }}
          >
            서울특별시 광진구 동이로 212, <br />{" "}
            <span className="font-bold">
              아늑호텔 앤 스파 서울 성수 건대점 B1
            </span>
          </p>
        </motion.div>

        {/* Parking Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ color: "#3b2415" }}
          >
            주차 안내
          </h3>
          <br />

          <div>
            <p
              className="text-base sm:text-lg md:text-xl"
              style={{ color: "#3b2415" }}
            >
              아늑 호텔 지하 주차장 이용 가능
            </p>
            <br />
            <p
              className="text-base sm:text-lg md:text-xl"
              style={{ color: "#3b2415" }}
            >
              <span className="font-bold">*관리 타임 무료 지원</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
