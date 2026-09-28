import React from 'react';
import { ArrowUpRight, Download, Github, Mail } from 'lucide-react';
import SkillCards3D from './SkillCards3D';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'PHP',
    'MySQL',
    'Express',
    'Tailwind CSS',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0B0F14] flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#0B0F14] to-purple-900/20" />
      <div className="absolute top-10 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161C] border border-[#1E242C] mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                SOFTWARE DEVELOPER
              </span>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              I turn real-world
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                problems into software.
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              I'm Basil Mutuku, a software developer focused on building
              practical web applications, backend services, APIs, and
              database-driven systems that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-300 bg-[#12161C] border border-[#1E242C] hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/10"
              >
                View My Work
                <ArrowUpRight size={19} />
              </button>

              <a
                href="/Basil-uploads/Basil-Mutuku-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border border-[#2A323D] text-gray-200 px-7 py-3.5 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                <Download size={19} />
                View CV
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <a
                href="https://github.com/Breezy-Reese"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">Let's Talk</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — interactive 3D skills sphere */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative w-full max-w-md">
              <div className="text-center mb-2">
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: '#8B949E' }}>
                  Drag to rotate
                </p>
              </div>
              <SkillCards3D />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
