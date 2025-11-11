"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";

export default function WellnessBodyTherapySection() {
  return (
    <section className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing/background 1.png"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title and Text Section */}
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
            Wellness Body Therapy
          </h2>

          <div>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#3b2415" }}
            >
              당신의 &apos;오늘&apos;을 확인하고
            </p>
            <br />
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#3b2415" }}
            >
              &apos;내일&apos;의 균형을 준비합니다.
            </p>
            <br />
            <br />
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#3b2415" }}
            >
              단순한 체형관리에서
            </p>
            <br />
            <br />
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ color: "#3b2415" }}
            >
              끝나지 않는 도안재의 웰니스 테라피
            </p>
          </div>
        </motion.div>

        {/* Images with Overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-16">
          {/* Image 12 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image12.png"
              alt="인바디 재측정"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              quality={90}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-16 text-center flex items-center justify-center h-[200px]"
              style={{ backgroundColor: "rgba(57, 38, 24, 0.8)" }}
            >
              <p
                className="text-base sm:text-lg md:text-xl font-medium"
                style={{ color: "#ffffff" }}
              >
                모든 관리가 끝나면 인바디 재측정을 통해
        
                <br />
                변화된 수치를 눈으로 직접 확인 합니다.
              </p>
            </div>
          </motion.div>

          {/* Image 13 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image13.png"
              alt="맞춤 한방 애프터티"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              quality={90}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-16 text-center flex items-center justify-center h-[200px]"
              style={{ backgroundColor: "rgba(57, 38, 24, 0.8)" }}
            >
              <p
                className="text-base sm:text-lg md:text-xl font-medium"
                style={{ color: "#ffffff" }}
              >
                디지털 체질 테스트 결과에 따라 특별히
        
                <br />
                블렌딩된 맞춤 한방 애프터티를 제공하여,
                <br />
                몸속까지 완벽한 힐링을 완성합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quoted Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-32 space-y-2"
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed"
            style={{ color: "#3b2415" }}
          >
            &quot;
            <br />
            도안재는 무너진 균형의 원인을 발견하고
            <br />
            우리 몸에 맞는 이상적인 아름다움을
            <br />
            함께 찾아 갑니다.
            <br />
            <br />
            &quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
