import React, { useEffect } from 'react';
import assets from '../assets/assets';

const ThemeToggle = ({ theme, setTheme }) => {

 useEffect(() => {
    // Check localStorage for theme preference on component mount

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').
    matches;

    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
 },[])

  useEffect(() => {
    // Update document class when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // localStorage is now handled in App.jsx
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-1.5 border border-gray-500 rounded-full hover:opacity-80 transition-opacity"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === "dark" ? (
        <img 
          src={assets.sun_icon} 
          alt="Sun" 
          className="w-6 h-6"
        />
      ) : (
        <img 
          src={assets.moon_icon} 
          alt="Moon" 
          className="w-6 h-6"
        />
      )}
    </button>
  );
};

export default ThemeToggle;