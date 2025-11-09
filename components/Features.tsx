'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Features() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            환영합니다
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            현대적이고 반응형인 랜딩 페이지를 경험해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                기능 {item}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                부드러운 애니메이션과 전환 효과를 갖춘 반응형 디자인입니다.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
