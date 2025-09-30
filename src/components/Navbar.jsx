import React, { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {darkMode ? "Mode clair" : "Mode sombre"}
      </button>
    </nav>
  );
}
