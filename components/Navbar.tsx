import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-google-blue flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
            <i className="fa-solid fa-bookmark text-sm"></i>
          </div>
          <span className="text-xl font-medium tracking-tight text-google-text group-hover:text-google-blue transition-colors">
            AI Bookmarks
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://github.com/sproutowo/AI-Bookmarks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 text-google-subtext hover:text-google-blue transition-colors"
          >
            <i className="fa-brands fa-github text-lg"></i>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a 
            href="https://github.com/sproutowo/AI-Bookmarks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-google-text text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:bg-google-blue hover:shadow-hover hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            获取扩展
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;