'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/lib/animations';
import { spacing } from '@/lib/theme';

interface SectionWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  backgroundColor,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${spacing.section.py} ${spacing.section.px} ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className={spacing.container.base}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

