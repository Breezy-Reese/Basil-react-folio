import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  FolderGit2,
  Briefcase,
  BookOpen,
  Mail,
  Github,
  ChevronLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', id: 'hero', icon: Home },
  { label: 'About', id: 'about', icon: User },
  { label: 'Projects', id: 'projects', icon: FolderGit2 },
  { label: 'Services', id: 'services', icon: Briefcase },
];

const STORAGE_KEY = 'sidebar-open';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'false';
    } catch {
      return true;
    }
  });

  // Tell the page how much room the sidebar takes, so content can shift with it.
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-w',
      sidebarOpen ? '16rem' : '0px'
    );
    try {
      localStorage.setItem(STORAGE_KEY, String(sidebarOpen));
    } catch {
      /* ignore */
    }
  }, [sidebarOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const linkClass =
    'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-cyan-400/10 hover:text-cyan-300';

  const navItems = (
    <>
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <button key={link.id} onClick={() => scrollToSection(link.id)} className={linkClass}>
            <Icon size={18} />
            {link.label}
          </button>
        );
      })}
      <Link to="/blog" className={linkClass} onClick={() => setIsMenuOpen(false)}>
  <BookOpen size={18} />
  Blog
</Link>
    </>
  );

  return (
    <>
      {/* Desktop: collapsible left sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between border-r border-[#1E242C] bg-[#0B0F14] px-4 py-8 transition-transform duration-300 lg:flex ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="mb-10 flex items-center justify-between px-4">
            <Link to="/" className="font-mono text-xl font-bold text-cyan-400">
              basil<span className="text-purple-400">.</span>dev
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Hide menu"
              title="Hide menu"
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-400 transition hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <ChevronLeft size={16} />
              Hide
            </button>
          </div>
          <nav className="space-y-1">{navItems}</nav>
        </div>

        <div className="space-y-3">
          <a
            href="https://github.com/Breezy-Reese"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <Github size={18} />
            GitHub
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Mail size={17} />
            Contact
          </button>
        </div>
      </aside>

      {/* Desktop: small button to reopen the sidebar when it is closed */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Show menu"
          title="Show menu"
          className="fixed left-4 top-4 z-50 hidden h-10 items-center gap-2 rounded-full border border-[#1E242C] bg-[#0B0F14]/90 px-4 text-sm font-medium text-cyan-300 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-400/10 lg:flex"
        >
          <Menu size={18} />
          Menu
        </button>
      )}

      {/* Mobile / tablet: top bar with dropdown */}
      <header className="fixed top-0 z-50 w-full border-b border-[#1E242C] bg-[#0B0F14] lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" className="font-mono text-lg font-bold text-cyan-400">
            basil<span className="text-purple-400">.</span>dev
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-1 border-t border-[#1E242C] px-3 pb-4 pt-2">
            {navItems}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <Mail size={17} />
              Contact
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
