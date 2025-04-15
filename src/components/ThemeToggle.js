'use client';
import { useTheme } from "@/lib/ThemeContext";
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2"
      title="Toggle Theme"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}
