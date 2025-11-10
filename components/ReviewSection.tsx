'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface ReviewCardProps {
  imageSrc: string;
  customerName: string;
  stars: number;
  date: string;
  reviewText: string;
  index: number;
}

function ReviewCard({
  imageSrc,
  customerName,
  stars,
  date,
  reviewText,
  index,
}: ReviewCardProps) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-4xl"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Image Section with Overlay */}
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={imageSrc}
          alt={`${customerName} 후기`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
        />
        {/* Circular Badge - Top Right */}
        <div
          className="absolute top-13 right-13 w-36 h-36 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center z-10"
          style={{ backgroundColor: '#3b2415' }}
        >
          <span className="text-white text-sm sm:text-base font-medium leading-tight text-center">
            <span className="block">체지방</span>
            <span className="block">10%</span>
            <span className="block">감량</span>
          </span>
        </div>

        {/* Bottom Section with Dark Brown Background - Overlay on Image */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 rounded-b-2xl"
          style={{ backgroundColor: '#3b2415' }}
        >
          {/* Customer Name and Stars */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <p className="text-white text-sm sm:text-base font-medium">
                {customerName}
              </p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-base sm:text-lg"
                    style={{
                      color: i < stars ? '#fbbf24' : '#6b7280',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Date */}
          <p className="text-white/80 text-xs sm:text-sm mb-3">{date}</p>

          {/* Review Text with ChevronRight on Right */}
          <div className="flex items-start gap-3">
            {/* Review Text - 70% width, left-aligned */}
            <p className="text-white text-xs sm:text-sm leading-relaxed line-clamp-2 w-[70%] text-left">
              {reviewText}
            </p>

            {/* Navigation Arrow - Right Side */}
            <button
              className="rounded-full p-2 hover:bg-white/10 transition-colors flex-shrink-0 ml-auto mt-4"
              aria-label="더보기"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewSection() {
  const reviews = [
    {
      imageSrc: '/images/landing/image21.png',
      customerName: '장** 고객님',
      stars: 5,
      date: '10.24',
      reviewText:
        '좋은식단과 운동 그리고 편안한 분위기에서 매일 다른 저를 마주하면 좋았어요. 트리가 정말 잘어울린다고 제가 생각했어...',
    },
    {
      imageSrc: '/images/landing/image22.png',
      customerName: '박** 고객님',
      stars: 5,
      date: '11.04',
      reviewText:
        '생각보다 쉽고 편안한 분위기에서 매일 다른 저를 마주하면 좋았어요. 트리가 정말 잘어울린다고 제가 생각했어...',
    },
    {
      imageSrc: '/images/landing/image23.png',
      customerName: '김** 고객님',
      stars: 3,
      date: '09.26',
      reviewText:
        '생각보다 쉽고 편안한 분위기에서 매일 다른 저를 마주하면 좋았어요. 트리가 정말 잘어울린다고 제가 생각했어...',
    },
  ];

  return (
    <section
      className="py-8 md:py-32 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: '#D8CEBA' }}
    >
      <div className="container mx-auto max-w-[95%] lg:max-w-[90%] relative z-10">
        {/* Title and Text Section */}
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
            Review
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{ color: '#3b2415' }}
          >
            도안재 경험 고객분들의 특별한 후기
          </p>
        </motion.div>

        {/* Review Cards Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto overflow-y-hidden sm:overflow-x-visible sm:overflow-y-visible pb-4 sm:pb-0">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-shrink-0 w-[90vw] sm:w-full"
            >
              <ReviewCard {...review} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Sliding Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-8 md:mt-12"
        >
          <div className="w-full max-w-4xl mx-auto h-px bg-gray-300 mb-4"></div>
        </motion.div>
      </div>
    </section>
  );
}

