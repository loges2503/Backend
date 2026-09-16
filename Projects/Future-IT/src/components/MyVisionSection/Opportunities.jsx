import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiGlobe, FiShoppingBag, FiTool, FiHeart, FiCompass } from 'react-icons/fi';
import { TbPlant, TbLeaf, TbBuildingStore, TbBuildingBridge, TbHeartHandshake } from 'react-icons/tb';

export default function Opportunities() {
  const opportunityCategories = [
    {
      title: "Agriculture",
      icon: TbPlant,
      color: "#7EB498",
      bgGradient: "from-[#7EB498]/15 to-transparent",
      bullets: [
        "Build AI solutions for farming and harvesting.",
        "Help farmers increase productivity.",
        "Improve food production using technology."
      ]
    },
    {
      title: "Environmental Contribution",
      icon: TbLeaf,
      color: "#7DB5B4",
      bgGradient: "from-[#7DB5B4]/15 to-transparent",
      bullets: [
        "Create awareness about reducing plastic usage.",
        "Promote food consciousness and sustainable living.",
        "Build products that help protect and preserve the Earth."
      ]
    },
    {
      title: "Business & Trading",
      icon: TbBuildingStore,
      color: "#7F80B3",
      bgGradient: "from-[#7F80B3]/15 to-transparent",
      bullets: [
        "Develop AI solutions for supermarkets and textile shops.",
        "Build applications for harvesting management.",
        "Create trading-related software.",
        "Explore opportunities where AI can improve business operations."
      ]
    },
    {
      title: "Civil Engineering",
      icon: TbBuildingBridge,
      color: "#7E9AB4",
      bgGradient: "from-[#7E9AB4]/15 to-transparent",
      bullets: [
        "Use AI to increase the scope and efficiency of civil engineering.",
        "Develop solutions that reduce waste and improve resource utilization."
      ]
    },
    {
      title: "Better Quality of Life",
      icon: TbHeartHandshake,
      color: "#7DB5B4",
      bgGradient: "from-[#7DB5B4]/15 to-transparent",
      bullets: [
        "Build technology that helps people spend more meaningful time with their families.",
        "Use AI to automate repetitive work so people can focus on what matters most."
      ]
    }
  ];

  return (
    <div id="opportunities" className="space-y-8 pt-12 border-t border-gray-200/80 dark:border-gray-800">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7F80B3]/15 text-[#7F80B3] text-xs font-semibold uppercase tracking-wider">
          <FiCompass />
          <span>Impact Sectors</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1F2937] dark:text-white">
          Opportunities I See
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          Key domain areas where artificial intelligence can deliver immense economic, environmental, and human value.
        </p>
      </div>

      {/* 5 Beautiful Animated Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opportunityCategories.map((opp, idx) => {
          const IconComponent = opp.icon;
          return (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`glass-card rounded-3xl p-7 border border-[#E5E7EB] dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Corner Glow Accent */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${opp.bgGradient} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

              <div className="space-y-6 relative z-10">
                {/* Header with Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300"
                    style={{ backgroundColor: `${opp.color}25`, color: opp.color }}
                  >
                    <IconComponent className="text-3xl" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Domain #{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h4 className="font-heading font-bold text-xl text-[#1F2937] dark:text-white group-hover:text-[#7DB5B4] transition-colors">
                    {opp.title}
                  </h4>
                </div>

                {/* Exact Bullets List */}
                <ul className="space-y-3 pt-2">
                  {opp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-xs text-[#1F2937] dark:text-gray-300 font-sans leading-relaxed">
                      <FiCheckCircle
                        className="text-sm shrink-0 mt-0.5"
                        style={{ color: opp.color }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[11px] text-[#6B7280] dark:text-gray-400 relative z-10 font-medium">
                <span>Strategic Opportunity</span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: opp.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
