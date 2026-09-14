import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(11, 15, 20, 0.92)',
        borderColor: '#1E242C',
      }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight"
              style={{
                color: '#F5A623',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              basil
              <span style={{ color: '#2DD4BF' }}>.</span>
              dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            <a
              href="https://blog-Basil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Blog
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#F5A623',
                color: '#0B0F14',
              }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-[#12161C] transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div
              className="p-3 rounded-xl border space-y-1"
              style={{
                backgroundColor: '#12161C',
                borderColor: '#1E242C',
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1A2028] transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="https://blog-Basil.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-[#1A2028] transition-colors"
              >
                <span>Blog</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 rounded-lg font-semibold mt-2"
                style={{
                  backgroundColor: '#F5A623',
                  color: '#0B0F14',
                }}
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