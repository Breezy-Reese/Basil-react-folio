
import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px]">
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="public/Basil-uploads/WhatsApp Image 2026-08-19 at 11.20.56 AM.jpeg"
                alt="Basil mutuku"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h6 className="text-cyan-400 text-xl mb-4 font-semibold">Basil Mutuku</h6>
            <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6">
              I'm a Software<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Engineer
              </span>
              <br />& Mentor
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Based in changamwe Kenya. Web dev, instructor & mentor. I eat, sleep and breathe React. 
              Am a proclaimed self-taught fullstack Javascript developer with knowledge in Javascript, 
              ReactJs, NodeJs, DotNet, C#, Python, Java, MongoDB and MySQL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                <Download size={20} />
                DOWNLOAD CV
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
