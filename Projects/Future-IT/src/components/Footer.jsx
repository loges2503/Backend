import React from 'react';
import { FiArrowUp, FiCpu, FiHeart, FiGlobe, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { TbBrain } from 'react-icons/tb';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const paletteColors = [
    { name: 'Soft Teal', hex: '#7DB5B4' },
    { name: 'Lavender Blue', hex: '#7F80B3' },
    { name: 'Sage Green', hex: '#7EB498' },
    { name: 'Steel Blue', hex: '#7E9AB4' },
  ];

  return (
    <footer className="bg-white dark:bg-[#080C13] border-t border-[#E5E7EB] dark:border-gray-800/80 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100 dark:border-gray-800">
          
          {/* Brand & Vision */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl hero-gradient-bg flex items-center justify-center text-white shadow-md">
                <FiCpu className="text-lg" />
              </div>
              <span className="font-heading font-bold text-xl text-[#1F2937] dark:text-white">
                The Future of IT <span className="hero-gradient-text">2030</span>
              </span>
            </div>

            <p className="text-xs text-[#6B7280] dark:text-gray-400 max-w-md leading-relaxed font-sans">
              "How AI will transform industries and how I plan to adapt to the future."
              A modern digital blueprint exploring artificial intelligence, robotics, agricultural tech, and technical skill evolution.
            </p>

            {/* Swatch color indicators */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">Palette:</span>
              <div className="flex items-center gap-1.5">
                {paletteColors.map((c) => (
                  <span
                    key={c.name}
                    className="w-4 h-4 rounded-full border border-white dark:border-gray-800 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                    title={`${c.name}: ${c.hex}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#1F2937] dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#6B7280] dark:text-gray-400">
              <li><a href="#hero" className="hover:text-[#7DB5B4] transition-colors">Hero Overview</a></li>
              <li><a href="#industry-situation" className="hover:text-[#7DB5B4] transition-colors">Roles & Technologies</a></li>
              <li><a href="#ai-growth" className="hover:text-[#7DB5B4] transition-colors">How AI Will Grow</a></li>
              <li><a href="#my-plan" className="hover:text-[#7DB5B4] transition-colors">My Strategic Plan</a></li>
              <li><a href="#opportunities" className="hover:text-[#7DB5B4] transition-colors">Opportunities I See</a></li>
              <li><a href="#future-goal" className="hover:text-[#7DB5B4] transition-colors">Local Storage Goal</a></li>
            </ul>
          </div>

          {/* Vision Quote / Tag */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#1F2937] dark:text-white">
              Vision Principles
            </h4>
            <div className="p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-gray-800 text-xs text-[#6B7280] dark:text-gray-400 space-y-2">
              <div className="flex items-center gap-1.5 text-[#7EB498] font-bold">
                <TbBrain /> <span>Continuous Learning</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Building AI-powered solutions, enhancing productivity in agriculture, and promoting sustainable living for a better quality of life.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280] dark:text-gray-400">
          <div>
            © 2030 Vision • Built with React, Framer Motion & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl hero-gradient-bg text-white shadow-md hover:scale-105 transition-transform flex items-center gap-2 text-xs font-semibold"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
