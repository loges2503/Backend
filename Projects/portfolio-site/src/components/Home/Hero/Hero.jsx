import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-16">
      <motion.h1
        className="text-5xl font-extrabold text-center text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, I am Logeswari!
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 text-center max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I am a front‑end developer passionate about creating beautiful, performant web experiences with React, Tailwind CSS, and modern animation libraries.
      </motion.p>
      <Button as={Link} to="/" className="flex items-center gap-2">
        <span>Explore My Work</span>
        <FaArrowRight />
      </Button>
    </section>
  );
}
