"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function SlimmingProgramSection() {
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
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="mb-6 md:mb-32 text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: 'Belleza-Regular, sans-serif',
              fontWeight: 400,
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#3B2415',
            }}
          >
            Slimming Program
          </h2>

          {/* Text below title */}
          <div className="space-y-2 md:space-y-3">
            <p
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#3B2415',
              }}
            >
              당신의 몸에 가장 &apos;편안한 변화&apos;
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#3B2415',
              }}
            >
              누워서 30분
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.15] md:[line-height:40px]"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#3B2415',
              }}
            >
              수면 다이어트 테라피
            </p>
          </div>
        </motion.div>

        {/* Image 9 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full mb-8 md:mb-32"
        >
          <Image
            src="/images/landing/image9.png"
            alt="Slimming Program"
            width={1200}
            height={800}
            className="w-full h-auto mx-auto"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Main Title */}
          <h3
            className="text-base md:text-lg lg:text-xl"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              lineHeight: '26px',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            인생에서 가장 빛나야 할 순간을 위해
          </h3>

          {/* Focus Statement */}
          <p
            className="text-base md:text-lg lg:text-xl"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              lineHeight: '26px',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            도안재의 기술이{' '}
            <span
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                lineHeight: '26px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#3B2415',
              }}
            >
              &apos;체지방&apos;과 &apos;독소&apos;
            </span>
            에 집중합니다.
          </p>

          {/* Descriptive Paragraphs */}
          <div className="space-y-4">
            <p
              className="text-xs md:text-sm"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 500,
                lineHeight: '16px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#3B2415',
              }}
            >
              특수 파동이 정체된 림프 순환을 촉진하여 평소 고민이던 부위의
              부종을 빠르게 완화하고,
            </p>
            <p
              className="text-xs md:text-sm"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 500,
                lineHeight: '16px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#3B2415',
              }}
            >
              근적외선으로 체지방을 집중 분해하여 숨어있던 바디 라인을 선명하게
              되찾아 드립니다.
            </p>
          </div>

          {/* Quoted Text Block */}
          <div className="mt-8 md:mt-32 space-y-2">
            <p
              style={{
                textAlign: "center",
                color: "#3B2415",
              }}
            >
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                &ldquo;
              </span>
              <span
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                식단과 운동으로 미처 정리되지 못한
              </span>
              <br />
              <span
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                마지막 1인치까지,
              </span>
              <br />
              <span
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 700,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                도안재가 &apos;가볍게&apos; 완성합니다.
              </span>
              <br />
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  display: "block",
                  marginTop: "16px",
                }}
              >
                &rdquo;
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
