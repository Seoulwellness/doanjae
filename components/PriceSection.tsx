'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function PriceSection() {
  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            style={{ color: '#3b2415' }}
          >
            Price
          </h2>
          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            <p
              className="text-lg sm:text-xl md:text-2xl"
              style={{ color: '#3b2415' }}
            >
              11월 17일,
            </p>
            <p
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: '#3b2415' }}
            >
              도안재 GRAND OPEN!
            </p>
          </div>
          <div className="mb-6 md:mb-8">
            <div
              className="inline-block px-6 md:px-12 py-3 md:py-4 rounded-lg"
              style={{ backgroundColor: '#3b2415' }}
            >
              <p
                className="text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: '#ffffff' }}
              >
                첫방문 49,500원!
              </p>
            </div>
          </div>
          <div className="space-y-1 md:space-y-2">
            <p
              className="text-base sm:text-lg md:text-xl"
              style={{ color: '#3b2415' }}
            >
              런칭을 기념하여 오직 지금만 드리는
            </p>
            <p
              className="text-base sm:text-lg md:text-xl"
              style={{ color: '#3b2415' }}
            >
              특별한 혜택을 놓치지 마세요!
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full mb-8 md:mb-16"
        >
          <Image
            src="/images/landing/image14.png"
            alt="Price"
            width={1200}
            height={1600}
            className="w-full h-auto mx-auto"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center space-y-2 md:space-y-3"
        >
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: '#3b2415' }}
          >
            오픈 혜택 마감 전,
          </p>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: '#3b2415' }}
          >
            지금 바로 예약하세요!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

