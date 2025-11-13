"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInRight, fadeInUp } from "@/lib/animations";

export default function PatentSection() {
  return (
    <section className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-24"
        >
          <h2
            className="font-bold mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#3B2415",
            }}
          >
            아름다운 체형 관리를 위한
          </h2>
          <h3
            className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#3B2415",
            }}
          >
            도안재만의 7종 특허기술
          </h3>
        </motion.div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 overflow-x-auto overflow-y-hidden sm:overflow-x-visible sm:overflow-y-visible pb-4 sm:pb-0">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative flex-shrink-0 w-[90vw] sm:w-full"
            >
              <Image
                src={`/images/landing/patent${num}.png`}
                alt={`특허기술 ${num}`}
                width={1200}
                height={1500}
                className="w-full h-auto"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                quality={90}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
