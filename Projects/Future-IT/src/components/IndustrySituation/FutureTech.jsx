import React from 'react';
import { motion } from 'framer-motion';
import { TbRobot, TbAtom, TbAugmentedReality, TbCpu, TbCar, TbWifi, TbLayersIntersect } from 'react-icons/tb';
import { FiCpu, FiTrendingUp } from 'react-icons/fi';

export default function FutureTech() {
  const technologies = [
    {
      title: 'AI Agents',
      icon: TbRobot,
      color: '#7DB5B4',
      bgLight: 'rgba(125, 181, 180, 0.12)',
      desc: 'Autonomous intelligent agents capable of multi-step reasoning, goal planning, and direct execution.'
    },
    {
      title: 'Robotics',
      icon: TbCpu,
      color: '#7F80B3',
      bgLight: 'rgba(127, 128, 179, 0.12)',
      desc: 'Humanoid robots and automated systems assisting in services, manufacturing, household tasks, and logistics.'
    },
    {
      title: 'Quantum Computing',
      icon: TbAtom,
      color: '#7EB498',
      bgLight: 'rgba(126, 180, 152, 0.12)',
      desc: 'Exponential processing power unlocking complex molecular simulation, cryptography, and optimization algorithms.'
    },
    {
      title: 'AR / VR',
      icon: TbAugmentedReality,
      color: '#7E9AB4',
      bgLight: 'rgba(126, 154, 180, 0.12)',
      desc: 'Immersive spatial computing bridging physical and virtual environments for work, design, and collaboration.'
    },
    {
      title: 'IoT',
      icon: TbWifi,
      color: '#7DB5B4',
      bgLight: 'rgba(125, 181, 180, 0.12)',
      desc: 'Interconnected smart sensors and edge devices delivering real-time environmental and operational data.'
    },
    {
      title: 'Autonomous Vehicles',
      icon: TbCar,
      color: '#7F80B3',
      bgLight: 'rgba(127, 128, 179, 0.12)',
      desc: 'Self-driving transportation systems transforming urban mobility, agricultural equipment, and supply chains.'
    },
    {
      title: 'Edge Computing',
      icon: TbLayersIntersect,
      color: '#7EB498',
      bgLight: 'rgba(126, 180, 152, 0.12)',
      desc: 'Ultra-low latency micro-data centers running AI models directly on local hardware devices.'
    }
  ];

  return (
    <div className="space-y-8 pt-8 border-t border-gray-200/80 dark:border-gray-800">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7F80B3]/10 text-[#7F80B3] text-xs font-semibold uppercase tracking-wider">
          <FiCpu />
          <span>Core Drivers of 2030</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1F2937] dark:text-white">
          Future Technologies
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          The 7 key technological pillars reshaping software architecture, hardware interfaces, and global industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {technologies.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E7EB] dark:border-gray-800 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform duration-300"
                    style={{ backgroundColor: tech.bgLight, color: tech.color }}
                  >
                    <IconComponent className="text-3xl" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Pillar #{idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-[#1F2937] dark:text-white group-hover:text-[#7DB5B4] transition-colors">
                    {tech.title}
                  </h4>
                  <p className="text-xs text-[#6B7280] dark:text-gray-400 mt-2 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#7E9AB4] flex items-center gap-1">
                  <FiTrendingUp /> High Impact
                </span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
