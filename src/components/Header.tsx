
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-cyan-400 text-xl font-bold">
              <Link to="/">BM</Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-cyan-400 transition-colors duration-200 uppercase"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-cyan-400 transition-colors duration-200 uppercase"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-cyan-400 transition-colors duration-200 uppercase"
              >
                Services
              </button>
              <a 
                href="https://blog-Basil.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors duration-200 uppercase"
              >
                Blog
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                Services
              </button>
              <a 
                href="https://blog-Basil.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                Blog
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-cyan-400 text-gray-900 rounded font-semibold hover:bg-cyan-300 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
