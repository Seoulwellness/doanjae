"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function PriceSection() {
  return (
    <section id="price" className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
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
            className="mb-6 md:mb-24 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            style={{
              fontFamily: 'Belleza-Regular, sans-serif',
              fontWeight: 400,
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            Price
          </h2>
          <div>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#3B2415',
              }}
            >
              11월 17일,
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                lineHeight: '40px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#3B2415',
              }}
            >
              도안재 GRAND OPEN!
            </p>
            <br />

            <div
              className="inline-block px-6 md:px-12 py-3 md:py-4 rounded-full"
              style={{ backgroundColor: "#3b2415" }}
            >
              <p
                className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontWeight: 600,
                  lineHeight: '40px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  color: '#FFFFFF',
                }}
              >
                첫방문 49,500원!
              </p>
            </div>
            <br />
            <br />
            <br />
            <p
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 500,
                lineHeight: '26px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#000000',
              }}
            >
              런칭을 기념하여 오직 지금만 드리는
            </p>
            <br />
            <p
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontWeight: 700,
                lineHeight: '26px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#000000',
              }}
            >
              특별한 혜택을 놓치지 마세요!
            </p>
            <br />
            <br />
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
          className="text-center"
        >
          <p
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 500,
              lineHeight: '40px',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            오픈 혜택 마감 전,
          </p>
          <br />
          <p
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{
              fontFamily: 'Pretendard, sans-serif',
              fontWeight: 700,
              lineHeight: '40px',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: '#3B2415',
            }}
          >
            지금 바로 예약하세요!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
