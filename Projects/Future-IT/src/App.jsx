import React, { useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoleComparison from './components/IndustrySituation/RoleComparison';
import FutureTech from './components/IndustrySituation/FutureTech';
import FutureSkills from './components/IndustrySituation/FutureSkills';
import AIGrowthSection from './components/AIGrowthSection';
import MyPlan from './components/MyVisionSection/MyPlan';
import Opportunities from './components/MyVisionSection/Opportunities';
import FutureGoalTracker from './components/FutureGoalTracker';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { FiLayers, FiCompass } from 'react-icons/fi';

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage('future_it_dark_mode', false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F17] text-[#1F2937] dark:text-[#E2E8F0] selection:bg-[#7DB5B4]/30 selection:text-[#7DB5B4] font-sans transition-colors duration-300">
      
      {/* Sticky Navigation Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <main>
        <HeroSection />

        {/* Section 1: IT Industry Situation */}
        <section id="industry-situation" className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Section 1 Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7DB5B4]/15 to-[#7E9AB4]/15 border border-[#7DB5B4]/30 text-[#1F2937] dark:text-gray-200 text-xs font-semibold uppercase tracking-wider"
              >
                <FiLayers className="text-[#7DB5B4]" />
                <span>Section 1 • Market & Skills Shift</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1F2937] dark:text-white leading-tight">
                IT Industry <span className="hero-gradient-text">Situation</span>
              </h2>
              <p className="text-base text-[#6B7280] dark:text-gray-300 font-sans">
                A structured comparison of 2024 vs 2030 engineering roles, alongside upcoming technological pillars and core skill requirements.
              </p>
            </div>

            {/* Current vs 2030 Roles */}
            <RoleComparison />

            {/* Future Technologies */}
            <FutureTech />

            {/* Future Skills */}
            <FutureSkills />
          </div>
        </section>

        {/* Section 2: How AI Will Grow in 2030 */}
        <AIGrowthSection />

        {/* Section 3: What Will I Do In That Situation */}
        <section id="my-plan" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Section 3 Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7EB498]/15 to-[#7DB5B4]/15 border border-[#7EB498]/30 text-[#1F2937] dark:text-gray-200 text-xs font-semibold uppercase tracking-wider"
              >
                <FiCompass className="text-[#7EB498]" />
                <span>Section 3 • Vision & Action Plan</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1F2937] dark:text-white leading-tight">
                What Will I Do <span className="hero-gradient-text">In That Situation</span>
              </h2>
              <p className="text-base text-[#6B7280] dark:text-gray-300 font-sans">
                My concrete roadmap to embrace artificial intelligence, launch startups, innovate in agriculture, and contribute to society.
              </p>
            </div>

            {/* My Plan Roadmap */}
            <MyPlan />

            {/* Opportunities I See */}
            <Opportunities />
          </div>
        </section>

        {/* Dynamic Feature: Local Storage Goal Tracker */}
        <FutureGoalTracker />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
