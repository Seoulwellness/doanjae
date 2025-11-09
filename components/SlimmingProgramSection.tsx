'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function SlimmingProgramSection() {
  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-32"
            style={{ color: '#3b2415' }}
          >
            Slimming Program
          </h2>

          {/* Text below title */}
          <div className="space-y-2 md:space-y-3">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: '#3b2415' }}
            >
              당신의 몸에 가장 '편안한 변화'
            </p>
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: '#3b2415' }}
            >
              누워서 30분
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{ color: '#3b2415' }}
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: '#3b2415' }}
          >
            인생에서 가장 빛나야 할 순간을 위해
          </h3>

          {/* Focus Statement */}
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
            style={{ color: '#3b2415' }}
          >
            도안재의 기술이 '체지방'과 '독소'에 집중합니다.
          </p>

          {/* Descriptive Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed">
            <p style={{ color: '#3b2415' }}>
              특수 파동이 정체된 림프 순환을 촉진하여 평소 고민이던 부위의 부종을 빠르게 완화하고,
            </p>
            <p style={{ color: '#3b2415' }}>
              근적외선으로 체지방을 집중 분해하여 숨어있던 바디 라인을 선명하게 되찾아 드립니다.
            </p>
          </div>

          {/* Quoted Text Block */}
          <div className="mt-8 md:mt-32 space-y-2">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed"
              style={{ color: '#3b2415' }}
            >
              "<br />
              식단과 운동으로 미처 정리되지 못한<br />
              마지막 1인치까지,<br />
              도안재가 '가볍게' 완성합니다.<br />
              "
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

