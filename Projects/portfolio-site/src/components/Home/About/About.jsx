import React from 'react';
import AnimatedContainer from '@/components/AnimatedContainer';
import profileImg from '@/assets/hero.png'; // placeholder, replace with real portrait

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-16">
      <AnimatedContainer className="flex-1">
        <img src={profileImg} alt="Portrait" className="w-48 h-48 rounded-full object-cover" />
      </AnimatedContainer>
      <AnimatedContainer className="flex-1">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I am a front‑end developer with a passion for crafting beautiful, fast, and accessible web experiences. I specialize in React, Tailwind CSS, and modern animation techniques.
        </p>
      </AnimatedContainer>
    </section>
  );
}
