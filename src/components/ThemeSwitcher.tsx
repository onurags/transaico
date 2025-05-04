import React, { useEffect } from 'react';

interface ThemeSwitcherProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ darkMode, toggleTheme }) => {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {darkMode ? (
        <svg className="h-5 w-5 text-yellow-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-8h1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707M17.657 6.343l.707-.707M6.343 17.657l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      ) : (
        <svg className="h-5 w-5 text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-8h1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707M17.657 6.343l.707-.707M6.343 17.657l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      )}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;