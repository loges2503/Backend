import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FiEdit3, FiTrash2, FiSave, FiPlusCircle, FiCheck, FiRefreshCw, FiTarget } from 'react-icons/fi';
import { TbBrain, TbSparkles } from 'react-icons/tb';

export default function FutureGoalTracker() {
  const DEFAULT_GOAL = "I want to become an AI Engineer.";
  const [savedGoal, setSavedGoal] = useLocalStorage('user_future_goal_2030', DEFAULT_GOAL);
  
  const [inputText, setInputText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showNotification, setShowNotification] = useState('');

  const samplePresets = [
    "I want to become an AI Engineer.",
    "I want to build AI-powered products for businesses.",
    "I want to start my own AI startup by 2030.",
    "I want to create AI solutions for sustainable agriculture."
  ];

  const handleSave = (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    
    setSavedGoal(inputText.trim());
    setIsEditing(false);
    setInputText('');
    triggerToast('Goal saved successfully!');
  };

  const handleStartEdit = () => {
    setInputText(savedGoal || '');
    setIsEditing(true);
  };

  const handleDelete = () => {
    setSavedGoal(null);
    setIsEditing(false);
    setInputText('');
    triggerToast('Goal removed.');
  };

  const triggerToast = (msg) => {
    setShowNotification(msg);
    setTimeout(() => setShowNotification(''), 3000);
  };

  return (
    <section id="future-goal" className="py-20 relative">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-[#7DB5B4]/15 via-[#7E9AB4]/15 to-[#7F80B3]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] dark:border-gray-800 shadow-xl relative overflow-hidden"
        >
          {/* Top Decorative Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-200/80 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl hero-gradient-bg text-white flex items-center justify-center shadow-lg">
                <FiTarget className="text-2xl" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7DB5B4]">
                  Interactive Local Storage
                </span>
                <h2 className="text-2xl font-heading font-bold text-[#1F2937] dark:text-white">
                  My Future Goal
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7EB498]/15 text-[#7EB498]">
                <TbSparkles /> Persistent Storage Active
              </span>
            </div>
          </div>

          {/* Toast Notification */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3 rounded-xl bg-[#7EB498]/20 border border-[#7EB498]/40 text-[#7EB498] text-xs font-semibold flex items-center gap-2"
              >
                <FiCheck className="text-sm" />
                <span>{showNotification}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Body Content */}
          <div className="py-8">
            {savedGoal && !isEditing ? (
              /* Display Saved Goal */
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900/60 dark:via-gray-800/60 dark:to-gray-900/60 border border-gray-200/80 dark:border-gray-700/80 shadow-inner relative group">
                  <div className="text-xs font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <TbBrain className="text-[#7DB5B4]" /> Saved 2030 Aspirations
                  </div>
                  <p className="text-xl sm:text-2xl font-heading font-bold text-[#1F2937] dark:text-white leading-relaxed hero-gradient-text">
                    "{savedGoal}"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleStartEdit}
                    className="px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-[#E5E7EB] dark:border-gray-700 text-[#1F2937] dark:text-gray-200 text-xs font-semibold hover:border-[#7DB5B4] hover:text-[#7DB5B4] shadow-sm transition-all flex items-center gap-2"
                  >
                    <FiEdit3 className="text-sm" />
                    <span>Edit Goal</span>
                  </button>

                  <button
                    onClick={handleDelete}
                    className="px-5 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 text-xs font-semibold hover:bg-red-100 dark:hover:bg-red-900/40 shadow-sm transition-all flex items-center gap-2"
                  >
                    <FiTrash2 className="text-sm" />
                    <span>Delete Goal</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Create / Edit Goal Form */
              <form onSubmit={handleSave} className="space-y-6">
                <div>
                  <label className="block text-sm font-heading font-semibold text-[#1F2937] dark:text-gray-200 mb-2">
                    {savedGoal ? "Edit Your 2030 Goal" : "Set Your Personal 2030 Goal"}
                  </label>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="e.g. I want to become an AI Engineer."
                    className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-[#E5E7EB] dark:border-gray-700 text-[#1F2937] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7DB5B4] transition-all text-base shadow-sm"
                  />
                </div>

                {/* Quick Presets */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-[#6B7280] dark:text-gray-400 block">
                    Quick Sample Suggestions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {samplePresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setInputText(preset)}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#7DB5B4]/15 hover:text-[#7DB5B4] text-xs font-medium text-[#1F2937] dark:text-gray-300 transition-colors border border-transparent hover:border-[#7DB5B4]/30"
                      >
                        + "{preset}"
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="px-6 py-3 rounded-xl hero-gradient-bg text-white text-xs font-bold shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 transition-all flex items-center gap-2"
                  >
                    <FiSave className="text-base" />
                    <span>Save Goal to Local Storage</span>
                  </button>

                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Local Storage Indicator note */}
          <div className="pt-6 border-t border-gray-200/80 dark:border-gray-800 text-xs text-[#6B7280] dark:text-gray-400 flex items-center justify-between">
            <span>Data stored locally in browser session</span>
            <span className="font-mono text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              Key: user_future_goal_2030
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
