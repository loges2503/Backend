// src/components/Home/Vision/Vision.jsx
import React from "react";
import AnimatedContainer from "@/components/AnimatedContainer";
import { motion } from "framer-motion";

const steps = [
  "Frontend Developer",
  "Full Stack Developer",
  "AI‑powered Web Applications",
  "Cloud & AI Agents",
  "Startup Founder",
  "Building AI Products for Agriculture & Small Businesses",
];

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-background/50">
      <AnimatedContainer className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading mb-12 text-primary">My Journey</h2>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-primary/30 h-full rounded"></div>
          </div>

          {steps.map((step, i) => (
            <div key={step} className="relative flex items-center mb-12 last:mb-0">
              <div className="flex-1 text-right pr-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  <span className="font-body text-lg text-text">{step}</span>
                </motion.div>
              </div>

              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-subtle">
                <span className="text-white font-bold">{i + 1}</span>
              </div>

              <div className="flex-1 pl-6"></div>
            </div>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
}
