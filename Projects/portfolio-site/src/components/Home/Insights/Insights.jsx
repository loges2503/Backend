// src/components/Home/Insights/Insights.jsx
import React from "react";
import AnimatedContainer from "@/components/AnimatedContainer";
import { motion } from "framer-motion";
import { FaRobot, FaDatabase, FaShieldAlt, FaCloud, FaChartLine, FaBalanceScale } from "react-icons/fa";

const insights = [
  { icon: <FaRobot size={24} />, title: "AI Automation", text: "Automation will reshape workflows across every industry." },
  { icon: <FaDatabase size={24} />, title: "Data is More Valuable Than Code", text: "Rich datasets drive smarter models and better decisions." },
  { icon: <FaShieldAlt size={24} />, title: "Cybersecurity", text: "Security will become increasingly critical as AI expands." },
  { icon: <FaCloud size={24} />, title: "Cloud Computing", text: "The backbone for modern, scalable applications." },
  { icon: <FaChartLine size={24} />, title: "AI Agents", text: "Agents will automate repetitive tasks and enhance productivity." },
  { icon: <FaBalanceScale size={24} />, title: "Responsible AI", text: "Ethics, privacy, and regulation must guide AI development." },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-background">
      <AnimatedContainer className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12 text-primary">Industry Insights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item) => (
            <motion.article
              key={item.title}
              className="bg-white/70 backdrop-blur-xs rounded-xl p-6 shadow-glass flex flex-col items-center text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="font-heading text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-text">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
}
