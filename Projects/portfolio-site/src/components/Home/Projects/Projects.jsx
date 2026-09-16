// src/components/Home/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import projects from '@/data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedContainer from '@/components/AnimatedContainer';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <AnimatedContainer className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12 text-primary">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.article
              key={proj.title}
              className="bg-white/70 backdrop-blur-xs rounded-xl overflow-hidden shadow-glass group"
              whileHover={{ scale: 1.02 }}
            >
              <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-heading text-xl text-primary mb-2">{proj.title}</h3>
                <p className="text-sm text-text mb-3">{proj.description}</p>
                <p className="text-xs text-text mb-2">
                  <strong>Tech:</strong> {proj.technologies.join(', ')}
                </p>
                <div className="flex space-x-3">
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition" aria-label="GitHub repo">
                    <FaGithub size={20} />
                  </a>
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition" aria-label="Live demo">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
}
