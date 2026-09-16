import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiClock, FiLayers, FiZap } from 'react-icons/fi';

export default function RoleComparison() {
  const [activeTab, setActiveTab] = useState('all');

  const rolePairs = [
    { current: 'Frontend Developer', future: 'AI Enhanced Frontend Engineer', icon: '💻', desc: 'Transition from manual UI creation to AI-driven prompt UI & generative web systems.' },
    { current: 'Backend Developer', future: 'AI Systems Engineer', icon: '⚙️', desc: 'Focus on high-throughput neural architectures, model fine-tuning & real-time inference pipelines.' },
    { current: 'Full Stack Developer', future: 'AI Full Stack Engineer', icon: '🚀', desc: 'Build end-to-end intelligent applications powered by multimodal AI agents and cloud systems.' },
    { current: 'Manual Tester', future: 'AI Test Automation Engineer', icon: '🧪', desc: 'Shift from repetitive scripts to autonomous self-healing test bots and synth data testing.' },
    { current: 'UI/UX Designer', future: 'AI Experience Designer', icon: '🎨', desc: 'Design adaptive, personalized spatial interfaces and conversational AI interactions.' },
    { current: 'Data Analyst', future: 'AI Data Scientist', icon: '📊', desc: 'Evolve from static SQL dashboards to predictive intelligence, LLMs, and autonomous insights.' },
    { current: 'DevOps Engineer', future: 'AI Cloud & DevOps Engineer', icon: '☁️', desc: 'Manage autonomous cloud infrastructure, AI model serving, and zero-downtime MLOps pipelines.' },
    { current: 'Security Engineer', future: 'AI Cybersecurity Specialist', icon: '🛡️', desc: 'Defend networks using real-time anomaly detection AI and adversarial attack prevention.' },
    { current: 'Mobile App Developer', future: 'AI Mobile Solutions Engineer', icon: '📱', desc: 'Craft high-efficiency on-device AI models and cross-platform intelligent experiences.' },
    { current: 'Software Engineer', future: 'AI Product Engineer', icon: '🧠', desc: 'Synthesize product strategy, system architecture, and generative AI agents to ship products fast.' }
  ];

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7DB5B4]/10 text-[#7DB5B4] text-xs font-semibold uppercase tracking-wider">
          <FiClock />
          <span>Timeline Evolution: 2024 to 2030</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1F2937] dark:text-white">
          Current IT Roles <span className="text-[#7E9AB4]">vs</span> 2030 Roles
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          How traditional engineering responsibilities will evolve into AI-augmented specialized roles by 2030.
        </p>
      </div>

      {/* Grid Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rolePairs.map((pair, idx) => (
          <motion.div
            key={pair.current}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative border border-[#E5E7EB] dark:border-gray-800 overflow-hidden group"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7DB5B4]/10 via-[#7F80B3]/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="flex items-start justify-between mb-4">
              <span className="text-2xl p-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                {pair.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#7EB498]/15 text-[#7EB498]">
                Evolution Pair #{idx + 1}
              </span>
            </div>

            {/* Current vs 2030 Comparison Rows */}
            <div className="space-y-4">
              {/* Current Role */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6B7280] dark:text-gray-400 block mb-0.5">
                    Current Role
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-[#1F2937] dark:text-gray-200">
                    {pair.current}
                  </h4>
                </div>
                <span className="w-7 h-7 rounded-full bg-gray-200/80 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs">
                  2024
                </span>
              </div>

              {/* Arrow Transition */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="w-8 h-8 rounded-full hero-gradient-bg text-white flex items-center justify-center shadow-md group-hover:rotate-90 transition-transform duration-300">
                  <FiArrowRight className="text-xs" />
                </div>
              </div>

              {/* 2030 Role */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#7DB5B4]/10 via-[#7E9AB4]/10 to-[#7F80B3]/10 border border-[#7DB5B4]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7DB5B4] dark:text-[#7DB5B4] block mb-0.5 flex items-center gap-1">
                    <FiZap className="text-xs" /> 2030 Transformed Role
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#1F2937] dark:text-white hero-gradient-text">
                    {pair.future}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-full hero-gradient-bg text-white text-[10px] font-bold">
                  2030
                </span>
              </div>

              <p className="text-xs text-[#6B7280] dark:text-gray-400 pt-1 leading-relaxed">
                {pair.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
