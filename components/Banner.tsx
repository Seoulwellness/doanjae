'use client';

import { motion } from 'framer-motion';
import { fadeInDown } from '@/lib/animations';

export default function Banner() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="relative z-[60]"
      style={{ backgroundColor: '#3b2415' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-10 md:h-12 text-sm md:text-base">
          <span className="text-white font-medium">
            11월 17일 GRAND OPEN
          </span>
        </div>
      </div>
    </motion.div>
  );
}

