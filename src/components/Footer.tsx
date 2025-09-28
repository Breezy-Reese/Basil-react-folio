
import React, { useState } from 'react';
import { MessageSquare, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Section */}
          <div>
            <h4 className="text-cyan-400 text-lg font-bold mb-4 border-b-2 border-cyan-400 pb-2">
              Info
            </h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-200">Services</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-cyan-400 text-lg font-bold mb-4 border-b-2 border-cyan-400 pb-2">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://melbite.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  My Blog
                </a>
              </li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Latest Projects</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Technologies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Portfolio</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-cyan-400 text-lg font-bold mb-4 border-b-2 border-cyan-400 pb-2">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-cyan-400 text-lg font-bold mb-4 border-b-2 border-cyan-400 pb-2">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-cyan-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="w-full bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-cyan-300 transition-colors duration-200"
              >
                SUBSCRIBE
              </button>
            </form>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://wa.me/0768378553" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
              >
                <MessageSquare size={24} />
              </a>
              <a 
                href="https://www.facebook.com/Breezy-Reese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.github.com/Breezy-Reese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Basil mutuku. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
