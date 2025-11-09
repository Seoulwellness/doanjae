'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

export default function FeaturesSection() {
  return (
    <section
      className="py-8 md:py-32 px-24 sm:px-10 lg:px-8"
      style={{ backgroundColor: '#e4dbd2' }}
    >
      <div className="container mx-auto max-w-7xl space-y-12">
        {/* First Row: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Image Section - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative w-full"
          >
            <Image
              src="/images/landing/image2.png"
              alt="근적외선 파장"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 mx-16 text-center lg:text-left"
          >
        
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#3b2415' }}
            >
              인체에 가장 유효한 '근적외선' 파장
            </h2>
            
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: '#3b2415' }}
            >
              피부 표면이 아닌, 깊은 곳의 '체지방'에 직접 도달하여 스스로 타오르는 힘을 만듭니다.
            </p>
          </motion.div>
        </div>

        {/* Second Row: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 order-2 lg:order-1 mx-16 text-center lg:text-left"
          >
          
            
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#3b2415' }}
            >
              동의보감의 '온열요법'
            </h2>
            
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: '#3b2415' }}
            >
              몸 속 깊은 곳부터 따뜻하게 데워 불필요한 노폐물과 독소가 땀과 함께 자연스럽게 배출되도록 돕습니다.
            </p>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative w-full order-1 lg:order-2"
          >
            <Image
              src="/images/landing/image3.png"
              alt="온열요법"
              width={1200}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

