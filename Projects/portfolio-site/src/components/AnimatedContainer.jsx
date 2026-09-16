// src/components/AnimatedContainer.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wrapper that applies a fade‑in‑up animation when the element scrolls into view.
 * Props:
 *   - children: content to animate
 *   - className: optional Tailwind classes
 *   - delay: optional delay in seconds
 */
export default function AnimatedContainer({ children, className = '', delay = 0 }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
