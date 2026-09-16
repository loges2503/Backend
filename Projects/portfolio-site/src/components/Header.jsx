import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-xs border-b border-border z-10 flex justify-between items-center px-6 py-3">
      <nav className="flex space-x-4 items-center">
        <Link to="/" className="text-primary font-heading text-xl font-bold">Logeswari</Link>
        <Link to="#projects" className="text-text hover:text-primary transition">Projects</Link>
        <Link to="#contact" className="text-text hover:text-primary transition">Contact</Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
}
