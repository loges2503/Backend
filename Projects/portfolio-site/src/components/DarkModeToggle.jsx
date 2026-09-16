// src/components/DarkModeToggle.jsx
import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import useLocalStorage from '@/hooks/useLocalStorage';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useLocalStorage('theme', false);

  const toggle = () => setIsDark(!isDark);

  // Apply class to html element
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-background hover:bg-background/80 transition-colors"
    >
      {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
