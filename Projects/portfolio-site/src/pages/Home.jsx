// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Home/Hero/Hero';
import About from '@/components/Home/About/About';
import Skills from '@/components/Home/Skills/Skills';
import Projects from '@/components/Home/Projects/Projects';
import Vision from '@/components/Home/Vision/Vision';
import Insights from '@/components/Home/Insights/Insights';
import Contact from '@/components/Home/Contact/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Logeswari – Frontend Developer & Future AI Engineer</title>
        <meta name="description" content="Portfolio of Logeswari, a Frontend Developer transitioning into AI Engineering. Showcasing projects, skills, and industry insights with a premium, responsive design." />
        <meta name="theme-color" content="#FA6F86" />
      </Helmet>
      <div className="flex flex-col gap-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Vision />
        <Insights />
        <Contact />
      </div>
    </>
  );
}
