import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsLight = !isLight;
    setIsLight(newIsLight);
    if (newIsLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-surface border border-border text-text-main hover:border-primary/50 transition-all focus:outline-none group overflow-hidden"
      aria-label="Alternar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={20} className="text-orange-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={20} className="text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
};

export default ThemeToggle;
