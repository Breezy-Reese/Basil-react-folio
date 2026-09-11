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

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
  ];

  return (
    <header
      className="fixed w-full top-0 z-50 border-b"
      style={{
        backgroundColor: '#0B0F14',
        borderColor: '#1E242C',
      }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo + Desktop Navigation */}
          <div className="flex items-center space-x-10">
            <Link
              to="/"
              className="text-lg font-bold"
              style={{
                color: '#F5A623',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              basil<span style={{ color: '#2DD4BF' }}>.</span>dev
            </Link>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium transition-colors duration-150"
                  style={{
                    color: '#8B949E',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F6F5F2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8B949E';
                  }}
                >
                  {link.label}
                </button>
              ))}

              {/* Blog */}
              <a
                href="https://blog-Basil.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-150"
                style={{
                  color: '#8B949E',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F6F5F2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B949E';
                }}
              >
                Blog
              </a>
            </div>
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 rounded-md text-sm font-medium transition-opacity duration-150 hover:opacity-90"
              style={{
                backgroundColor: '#F5A623',
                color: '#0B0F14',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#F6F5F2' }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div
              className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 border"
              style={{
                backgroundColor: '#12161C',
                borderColor: '#1E242C',
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-150"
                  style={{
                    color: '#8B949E',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Blog */}
              <a
                href="https://blog-Basil.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium"
                style={{
                  color: '#8B949E',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Blog
              </a>

              {/* Mobile Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md font-medium mt-1"
                style={{
                  backgroundColor: '#F5A623',
                  color: '#0B0F14',
                  fontFamily: "'Inter', sans-serif",
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

