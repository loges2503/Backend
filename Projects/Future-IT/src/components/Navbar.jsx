import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiCpu } from 'react-icons/fi';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Roles & Tech', href: '#industry-situation' },
    { name: 'AI in 2030', href: '#ai-growth' },
    { name: 'My Plan', href: '#my-plan' },
    { name: 'Opportunities', href: '#opportunities' },
    { name: 'My Goal', href: '#future-goal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 glass-nav shadow-lg border-b border-[#E5E7EB]/40 dark:border-gray-800/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl hero-gradient-bg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <FiCpu className="text-xl animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight tracking-tight text-[#1F2937] dark:text-white">
                FUTURE <span className="hero-gradient-text">IT 2030</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-[#6B7280] uppercase">
                Vision & Strategy
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-gray-900/60 p-1.5 rounded-full border border-gray-200/80 dark:border-gray-800 shadow-sm backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs font-medium text-[#1F2937] dark:text-gray-300 hover:text-[#7DB5B4] dark:hover:text-[#7DB5B4] rounded-full hover:bg-gray-100/70 dark:hover:bg-gray-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-[#E5E7EB] dark:border-gray-700 text-[#1F2937] dark:text-yellow-400 hover:border-[#7DB5B4] dark:hover:border-[#7DB5B4] shadow-sm transition-all duration-300 active:scale-95"
              aria-label="Toggle Dark Mode"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg text-[#7F80B3]" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-[#E5E7EB] dark:border-gray-700 text-[#1F2937] dark:text-white"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-b border-[#E5E7EB] dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-[#1F2937] dark:text-gray-200 hover:bg-[#7DB5B4]/10 hover:text-[#7DB5B4] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
