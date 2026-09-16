// src/components/Button.jsx
import React from 'react';

/**
 * Reusable rounded button with theme colors.
 * Props:
 *  - children: button label
 *  - onClick: click handler
 *  - className: additional Tailwind classes
 *  - type: button type (default "button")
 */
export default function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
