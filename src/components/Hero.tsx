import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Mail,
  CheckCircle2,
  Code2,
  Database,
  Server,
} from 'lucide-react';

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
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0B0F14] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-[#0B0F14] to-purple-900/20" />

      <div className="absolute top-10 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Subtle Grid */}
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

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161C] border border-[#1E242C] mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              I turn real-world
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                problems into software.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              I'm Basil Mutuku, a software developer focused on building
              practical web applications, backend services, APIs, and
              database-driven systems that solve real-world problems.
            </p>

            {/* Technology Pills */}
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

            {/* Main Actions */}
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

            {/* Social / Contact */}
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

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Glow */}
            <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            {/* Developer Card */}
            <div className="relative w-full max-w-md">

              {/* Profile Card */}
              <div className="bg-[#12161C]/95 backdrop-blur-xl border border-[#242B35] rounded-2xl p-5 shadow-2xl">

                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400/50">
                      <img
                        src="/Basil-uploads/basil-headshot.jpg"
                        alt="Basil Mutuku"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-white font-semibold">
                        Basil Mutuku
                      </p>
                      <p className="text-gray-500 text-xs">
                        Software Developer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-400">
                      Available
                    </span>
                  </div>
                </div>

                {/* Code Window */}
                <div className="rounded-xl bg-[#0B0F14] border border-[#202731] overflow-hidden">

                  {/* Window Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#202731]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />

                    <span className="ml-3 text-xs text-gray-500 font-mono">
                      developer.js
                    </span>
                  </div>

                  {/* Code Content */}
                  <div className="p-5 font-mono text-sm leading-7">

                    <p className="text-gray-500">
                      <span className="text-purple-400">const</span>{' '}
                      developer = {'{'}
                    </p>

                    <p className="pl-5 text-gray-400">
                      <span className="text-cyan-400">name:</span>{' '}
                      <span className="text-green-400">
                        "Basil Mutuku"
                      </span>,
                    </p>

                    <p className="pl-5 text-gray-400">
                      <span className="text-cyan-400">role:</span>{' '}
                      <span className="text-green-400">
                        "Software Developer"
                      </span>,
                    </p>

                    <p className="pl-5 text-gray-400">
                      <span className="text-cyan-400">focus:</span>{' '}
                      <span className="text-green-400">
                        "Full-Stack Development"
                      </span>,
                    </p>

                    <p className="pl-5 text-gray-400">
                      <span className="text-cyan-400">projects:</span>{' '}
                      <span className="text-orange-400">6</span>,
                    </p>

                    <p className="pl-5 text-gray-400">
                      <span className="text-cyan-400">mindset:</span>{' '}
                      <span className="text-green-400">
                        "Always Learning"
                      </span>
                    </p>

                    <p className="text-gray-500">{'}'}</p>
                  </div>
                </div>

                {/* Capability Cards */}
                <div className="grid grid-cols-3 gap-3 mt-4">

                  <div className="bg-[#0B0F14] border border-[#202731] rounded-xl p-3">
                    <Code2
                      size={19}
                      className="text-cyan-400 mb-2"
                    />
                    <p className="text-white text-xs font-medium">
                      Frontend
                    </p>
                    <p className="text-gray-500 text-[11px] mt-1">
                      React & UI
                    </p>
                  </div>

                  <div className="bg-[#0B0F14] border border-[#202731] rounded-xl p-3">
                    <Server
                      size={19}
                      className="text-purple-400 mb-2"
                    />
                    <p className="text-white text-xs font-medium">
                      Backend
                    </p>
                    <p className="text-gray-500 text-[11px] mt-1">
                      APIs & Logic
                    </p>
                  </div>

                  <div className="bg-[#0B0F14] border border-[#202731] rounded-xl p-3">
                    <Database
                      size={19}
                      className="text-orange-400 mb-2"
                    />
                    <p className="text-white text-xs font-medium">
                      Database
                    </p>
                    <p className="text-gray-500 text-[11px] mt-1">
                      MongoDB & SQL
                    </p>
                  </div>

                </div>

                {/* Bottom Status */}
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#202731]">
                  <CheckCircle2
                    size={16}
                    className="text-green-400"
                  />

                  <span className="text-xs text-gray-400">
                    Building • Learning • Improving
                  </span>
                </div>
              </div>

              {/* Floating Project Badge */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 bg-[#12161C] border border-[#242B35] rounded-xl px-4 py-3 shadow-xl">
                <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <Code2 size={18} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-white text-sm font-semibold">
                    6 Practical Projects
                  </p>

                  <p className="text-gray-500 text-xs">
                    Across multiple domains
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.2em]">
              Explore
            </span>

            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;