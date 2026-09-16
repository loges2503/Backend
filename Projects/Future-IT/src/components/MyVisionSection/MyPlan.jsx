import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiCheckCircle, FiCpu, FiBriefcase, FiTrendingUp, FiBookOpen } from 'react-icons/fi';
import { TbPlant, TbBuildingStore, TbTrendingUp, TbBrain, TbRocket } from 'react-icons/tb';

export default function MyPlan() {
  const planItems = [
    {
      text: "Start my own startup.",
      icon: TbRocket,
      color: "#7DB5B4",
      desc: "Found an agile AI-first enterprise delivering custom high-value software solutions."
    },
    {
      text: "Become an AI Engineer.",
      icon: TbBrain,
      color: "#7F80B3",
      desc: "Master LLM orchestration, model training, neural architectures, and intelligent systems."
    },
    {
      text: "Build AI-powered products for businesses.",
      icon: FiBriefcase,
      color: "#7EB498",
      desc: "Create scalable automation platforms that drive efficiency for commercial enterprises."
    },
    {
      text: "Create applications for harvesting and agriculture.",
      icon: TbPlant,
      color: "#7E9AB4",
      desc: "Develop smart computer-vision tools for crop monitoring, yield optimization, and smart farming."
    },
    {
      text: "Learn about trading and financial technology.",
      icon: TbTrendingUp,
      color: "#7DB5B4",
      desc: "Explore algorithmic trading, fintech software, and predictive financial analysis tools."
    },
    {
      text: "Continuously improve my technical skills to stay relevant in the AI era.",
      icon: FiBookOpen,
      color: "#7F80B3",
      desc: "Maintain lifelong learning, adapting rapidly to emerging quantum and AI breakthroughs."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7DB5B4]/15 text-[#7DB5B4] text-xs font-semibold uppercase tracking-wider">
          <FiTarget />
          <span>Personal Strategic Roadmap</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1F2937] dark:text-white">
          My Plan
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          Clear, actionable goals to innovate, build startups, and engineer transformative AI solutions.
        </p>
      </div>

      {/* Grid of Plan Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 border border-[#E5E7EB] dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    <IconComponent className="text-2xl" />
                  </div>
                  <span className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 font-mono text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-base text-[#1F2937] dark:text-white leading-snug group-hover:text-[#7DB5B4] transition-colors">
                    {item.text}
                  </h4>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center gap-2 text-xs font-medium text-[#7EB498]">
                <FiCheckCircle className="text-sm" />
                <span>Action Goal #{idx + 1}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
