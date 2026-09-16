import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiShield, FiCloud, FiDatabase, FiLock, FiTerminal, FiMessageSquare, FiCompass } from 'react-icons/fi';
import { TbBrain, TbLockCheck, TbBulb, TbMessageChatbot } from 'react-icons/tb';

export default function FutureSkills() {
  const skills = [
    { title: 'AI Prompt Engineering', icon: TbBrain, category: 'Core AI', color: '#7DB5B4' },
    { title: 'Cloud Computing', icon: FiCloud, category: 'Infrastructure', color: '#7E9AB4' },
    { title: 'Cybersecurity', icon: FiLock, category: 'Security', color: '#7F80B3' },
    { title: 'Data Analytics', icon: FiDatabase, category: 'Intelligence', color: '#7EB498' },
    { title: 'AI Ethics', icon: TbLockCheck, category: 'Governance', color: '#7DB5B4' },
    { title: 'DevOps', icon: FiTerminal, category: 'Engineering', color: '#7E9AB4' },
    { title: 'Problem Solving', icon: TbBulb, category: 'Cognitive', color: '#7F80B3' },
    { title: 'Communication', icon: TbMessageChatbot, category: 'Soft Skill', color: '#7EB498' }
  ];

  return (
    <div className="space-y-8 pt-8 border-t border-gray-200/80 dark:border-gray-800">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7EB498]/10 text-[#7EB498] text-xs font-semibold uppercase tracking-wider">
          <FiAward />
          <span>Must-Have Capabilities</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1F2937] dark:text-white">
          Future Skills
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          Essential technical expertise and human skills required to thrive alongside advanced AI systems.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card rounded-2xl p-5 border border-[#E5E7EB] dark:border-gray-800 flex items-center gap-4 hover:border-[#7DB5B4] shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                <IconComponent className="text-2xl" />
              </div>
              <div className="space-y-1 overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] dark:text-gray-400 block">
                  {skill.category}
                </span>
                <h4 className="font-heading font-bold text-sm text-[#1F2937] dark:text-white truncate group-hover:text-[#7DB5B4] transition-colors">
                  {skill.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
