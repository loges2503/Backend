import React from 'react';
import AnimatedContainer from '@/components/AnimatedContainer';

const frontend = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Git',
  'Responsive Design',
];

const learning = [
  'Node.js',
  'Express',
  'MongoDB',
  'AI APIs',
  'Cloud Computing',
  'AI Agents',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <AnimatedContainer className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12 text-primary">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Front-end */}
          <div className="bg-white/70 backdrop-blur-xs rounded-xl p-6 shadow-glass">
            <h3 className="font-body text-xl mb-4 text-primary">Frontend</h3>
            <ul className="list-disc list-inside space-y-1 text-text">
              {frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          {/* Learning */}
          <div className="bg-white/70 backdrop-blur-xs rounded-xl p-6 shadow-glass">
            <h3 className="font-body text-xl mb-4 text-primary">Learning</h3>
            <ul className="list-disc list-inside space-y-1 text-text">
              {learning.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedContainer>
    </section>
  );
}

