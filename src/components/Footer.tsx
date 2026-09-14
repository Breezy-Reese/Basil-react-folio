import React from 'react';
import {
  ArrowUp,
  Facebook,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080B0F] text-gray-300 border-t border-[#1E242C]">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{
                color: '#F5A623',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              basil<span style={{ color: '#2DD4BF' }}>.</span>dev
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Software developer focused on building practical web
              applications, APIs, and database-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Professional Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Connect
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/Breezy-Reese"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={17} />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/Breezy-Reese"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Facebook size={17} />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="mailto:basil59mutuku@gmail.com"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail size={17} />
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://blog-Basil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Developer Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Let's Work Together
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Have a project, opportunity, or technical question? Feel free
              to get in touch.
            </p>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all"
            >
              Contact Me
              <Mail size={16} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1E242C] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Basil Mutuku. All rights reserved.
          </p>

          <button
            onClick={() => scrollToSection('hero')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;