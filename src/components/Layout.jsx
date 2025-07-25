import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Layout = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  // Effect to set the theme on initial load from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Effect to toggle dark class on root element and save to localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4 shadow-md flex-shrink-0">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <button onClick={() => navigate('/dashboard')} className="w-full text-left block hover:text-blue-500">Dashboard</button>
          <button onClick={() => navigate('/profile')} className="w-full text-left block hover:text-blue-500">Profile</button>
          <button onClick={() => navigate('/chart-builder')} className="w-full text-left block hover:text-blue-500">Create Charts</button>
          <button onClick={() => navigate('/charts')} className="w-full text-left block hover:text-blue-500">View Charts</button>
          <button onClick={() => navigate('/login')} className="w-full text-left block text-red-500 hover:text-red-600">Logout</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-end items-center mb-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
            title="Toggle Theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        {/* Outlet renders the matched child route component */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
