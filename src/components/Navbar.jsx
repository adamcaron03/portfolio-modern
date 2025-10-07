import React, { useState, useEffect } from "react";

export default function Navbar() {
  // Initialize dark mode from localStorage (if available)
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) return JSON.parse(stored);
      // fallback to system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
      return false;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    // sync html class with state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch (e) {
      // ignore write errors
    }
  }, [darkMode]);

  // Listen to system preference changes and update only if user hasn't explicitly chosen
  useEffect(() => {
    let mq;
    try {
      mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => {
        const stored = localStorage.getItem('darkMode');
        if (stored === null) {
          setDarkMode(e.matches);
        }
      };
      if (mq && mq.addEventListener) mq.addEventListener('change', handler);
      else if (mq && mq.addListener) mq.addListener(handler);
      return () => {
        if (mq && mq.removeEventListener) mq.removeEventListener('change', handler);
        else if (mq && mq.removeListener) mq.removeListener(handler);
      };
    } catch (e) {
      return undefined;
    }
  }, []);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow transition-colors duration-300">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center space-x-2 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <>
            {/* Sun icon for light mode */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM10 14a4 4 0 100-8 4 4 0 000 8zM4.22 5.47a1 1 0 010 1.41L3.5 7.6a1 1 0 01-1.41-1.41l.72-.72a1 1 0 011.41 0zM16.5 12.4a1 1 0 011.41 1.41l-.72.72a1 1 0 01-1.41-1.41l.72-.72zM17 9a1 1 0 110 2h-1a1 1 0 110-2h1zM5 9a1 1 0 110 2H4a1 1 0 110-2h1zM4.22 12.53a1 1 0 011.41 0l.72.72A1 1 0 015.94 15l-.72-.72a1 1 0 010-1.41zM15.06 4.94a1 1 0 011.41 0l.72.72A1 1 0 0116.78 7.07l-.72-.72a1 1 0 010-1.41z" />
            </svg>
            <span className="text-sm">Mode clair</span>
          </>
        ) : (
          <>
            {/* Moon icon for dark mode */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 dark:text-yellow-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
            </svg>
            <span className="text-sm">Mode sombre</span>
          </>
        )}
      </button>
    </nav>
  );
}
