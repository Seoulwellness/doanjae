'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
            시작할 준비가 되셨나요?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            현대적이고 반응형인 랜딩 페이지를 경험해보세요.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            시작하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
