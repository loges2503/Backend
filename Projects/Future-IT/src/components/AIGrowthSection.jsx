import React from 'react';
import { motion } from 'framer-motion';
import { TbRobot, TbReceipt, TbHomeHeart, TbBulb, TbSparkles } from 'react-icons/tb';
import { FiCpu, FiCheckCircle } from 'react-icons/fi';

export default function AIGrowthSection() {
  const growthPoints = [
    {
      id: 1,
      exactContent: "AI will be as robots and work casually like a waiter.",
      category: "Robotic Service",
      icon: TbRobot,
      color: "#7DB5B4",
      bgGradient: "from-[#7DB5B4]/15 via-[#7E9AB4]/10 to-transparent",
      badge: "Hospitality & Service"
    },
    {
      id: 2,
      exactContent: "AI will work in billing sections for billing.",
      category: "Automated Commerce",
      icon: TbReceipt,
      color: "#7F80B3",
      bgGradient: "from-[#7F80B3]/15 via-[#7DB5B4]/10 to-transparent",
      badge: "Retail & Finance"
    },
    {
      id: 3,
      exactContent: "AI will help in homes by handling household work.",
      category: "Domestic Automation",
      icon: TbHomeHeart,
      color: "#7EB498",
      bgGradient: "from-[#7EB498]/15 via-[#7E9AB4]/10 to-transparent",
      badge: "Smart Home & Living"
    },
    {
      id: 4,
      exactContent: "AI will guide people by giving ideas and suggestions.",
      category: "Personal Advisory",
      icon: TbBulb,
      color: "#7E9AB4",
      bgGradient: "from-[#7E9AB4]/15 via-[#7F80B3]/10 to-transparent",
      badge: "Cognitive Companion"
    }
  ];

  return (
    <section id="ai-growth" className="py-20 md:py-28 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7DB5B4]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7F80B3]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7DB5B4]/15 to-[#7F80B3]/15 border border-[#7DB5B4]/30 text-[#1F2937] dark:text-gray-200 text-xs font-semibold uppercase tracking-wider"
          >
            <TbSparkles className="text-[#7DB5B4]" />
            <span>Section 2 • Real-World Integration</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1F2937] dark:text-white leading-tight">
            How AI Will Grow in <span className="hero-gradient-text">2030</span>
          </h2>
          <p className="text-base text-[#6B7280] dark:text-gray-300 font-sans">
            Everyday applications and ubiquitous artificial intelligence across hospitality, finance, homes, and personal guidance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {growthPoints.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-card rounded-3xl p-8 relative overflow-hidden border border-[#E5E7EB] dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Gradient Corner Accent */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${item.bgGradient} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />

                <div className="space-y-6 relative z-10">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}25`, color: item.color }}
                    >
                      <IconComponent className="text-4xl" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-[#1F2937] dark:text-gray-300 shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Verbatim Content */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7E9AB4]">
                      {item.category}
                    </span>
                    <blockquote className="text-xl sm:text-2xl font-heading font-bold text-[#1F2937] dark:text-white leading-snug">
                      "{item.exactContent}"
                    </blockquote>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between relative z-10 text-xs font-medium text-[#6B7280] dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#7EB498]" />
                    <span>2030 Everyday Reality</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-500">
                    Pillar #{item.id}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
