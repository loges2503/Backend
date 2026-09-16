import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCompass, FiTrendingUp, FiCheckCircle, FiShare2, FiZap } from 'react-icons/fi';
import { TbBrain, TbRobot, TbAtom } from 'react-icons/tb';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7DB5B4]/20 via-[#7E9AB4]/20 to-[#7F80B3]/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#7EB498]/15 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7DB5B4]/15 via-[#7E9AB4]/15 to-[#7F80B3]/15 border border-[#7DB5B4]/30 text-[#1F2937] dark:text-gray-200 text-xs font-semibold uppercase tracking-wider"
            >
              <FiZap className="text-[#7DB5B4] animate-bounce" />
              <span>Vision 2030 • Strategic Blueprint</span>
            </motion.div>

            {/* Main Title (EXACT content) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#1F2937] dark:text-white leading-[1.15] tracking-tight">
              The Future of the <br />
              <span className="hero-gradient-text">IT Industry in 2030</span>
            </h1>

            {/* Subtitle (EXACT content) */}
            <p className="text-lg sm:text-xl text-[#6B7280] dark:text-gray-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              How AI will transform industries and how I plan to adapt to the future.
            </p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#industry-situation"
                className="px-7 py-3.5 rounded-2xl hero-gradient-bg text-white font-medium text-sm shadow-lg shadow-[#7DB5B4]/25 hover:shadow-xl hover:shadow-[#7F80B3]/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore 2030 Roles</span>
                <FiTrendingUp className="text-lg" />
              </a>
              <a
                href="#future-goal"
                className="px-7 py-3.5 rounded-2xl bg-white dark:bg-gray-800 text-[#1F2937] dark:text-white border border-[#E5E7EB] dark:border-gray-700 font-medium text-sm hover:border-[#7DB5B4] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <FiCompass className="text-lg text-[#7F80B3]" />
                <span>My Goal Tracker</span>
              </a>
            </motion.div>

            {/* Highlight Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-gray-200/80 dark:border-gray-800 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#7EB498] text-base shrink-0" />
                <span className="text-xs text-[#6B7280] dark:text-gray-400 font-medium">AI Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#7DB5B4] text-base shrink-0" />
                <span className="text-xs text-[#6B7280] dark:text-gray-400 font-medium">Quantum Era</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#7F80B3] text-base shrink-0" />
                <span className="text-xs text-[#6B7280] dark:text-gray-400 font-medium">Sustainable Tech</span>
              </div>
            </div>
          </motion.div>

          {/* Right Futuristic AI Illustration Column */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Outer Rotating Glow Ring */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#7DB5B4]/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#7F80B3]/20 animate-[spin_25s_linear_infinite_reverse]" />

              {/* Central Futuristic Glass Orb Container */}
              <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-3xl glass-card flex flex-col items-center justify-center p-6 text-center shadow-2xl relative z-10 border border-white/60 dark:border-gray-700/60 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#7DB5B4]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-[#7F80B3]/20 rounded-full blur-xl" />

                {/* Central Animated AI Core */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl hero-gradient-bg flex items-center justify-center shadow-xl mb-4 text-white relative group"
                >
                  <TbBrain className="text-5xl sm:text-6xl text-white drop-shadow-md" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                <h3 className="font-heading font-bold text-lg text-[#1F2937] dark:text-white">
                  AI Systems & Robotics
                </h3>
                <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-1">
                  Human & Machine Synergy in 2030
                </p>
              </div>

              {/* Floating Element 1: Robot Icon */}
              <motion.div
                className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 px-4 py-2.5 rounded-2xl glass-card shadow-lg flex items-center gap-2.5 border border-[#7DB5B4]/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#7DB5B4]/20 flex items-center justify-center text-[#7DB5B4]">
                  <TbRobot className="text-xl" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F2937] dark:text-white">AI Agents</div>
                  <div className="text-[10px] text-[#6B7280] dark:text-gray-400">Autonomous Tasks</div>
                </div>
              </motion.div>

              {/* Floating Element 2: Quantum Tech */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-6 px-4 py-2.5 rounded-2xl glass-card shadow-lg flex items-center gap-2.5 border border-[#7F80B3]/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#7F80B3]/20 flex items-center justify-center text-[#7F80B3]">
                  <TbAtom className="text-xl" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1F2937] dark:text-white">Quantum Computing</div>
                  <div className="text-[10px] text-[#6B7280] dark:text-gray-400">Next-gen Power</div>
                </div>
              </motion.div>

              {/* Floating Element 3: Smart Edge Badge */}
              <motion.div
                className="absolute top-1/2 -right-8 sm:-right-12 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-md border border-[#7EB498]/40 flex items-center gap-2"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#7EB498] animate-ping" />
                <span className="text-[11px] font-semibold text-[#1F2937] dark:text-gray-200">
                  Adaptive AI Era
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
