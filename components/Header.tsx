"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">✓ Todo</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-blue-200 transition duration-200 font-medium"
          >
            Add Task
          </Link>
          <Link
            href="/demo"
            className="hover:text-blue-200 transition duration-200 font-medium"
          >
            View Tasks
          </Link>
          <button
            onClick={toggleDarkMode}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded-lg transition duration-200"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}