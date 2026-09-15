import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Mail,
  Code2,
  Database,
  Server,
  Globe,
  Layers,
} from 'lucide-react';
import Scene3D from './Scene3D';

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
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

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

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* =====================================================
              LEFT SIDE — INTRODUCTION
          ====================================================== */}

          <div className="text-center lg:text-left">

            {/* Developer Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161C] border border-[#1E242C] mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-400 text-sm font-medium tracking-widest">
                SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              I turn real-world
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                problems into software.
              </span>
            </h1>

            {/* Introduction */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              I'm Basil Mutuku, a software developer focused on building
              practical web applications, backend services, APIs, and
              database-driven systems that solve real-world problems.
            </p>

            {/* =====================================================
                TECHNOLOGIES
            ====================================================== */}

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9">

              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    px-3 py-1.5
                    rounded-full
                    text-xs sm:text-sm
                    text-gray-300
                    bg-[#12161C]
                    border border-[#1E242C]
                    hover:border-cyan-400/50
                    hover:text-cyan-400
                    transition-all duration-200
                  "
                >
                  {technology}
                </span>
              ))}

            </div>

            {/* =====================================================
                MAIN BUTTONS
            ====================================================== */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              {/* Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-600
                  text-white
                  px-7
                  py-3.5
                  rounded-lg
                  font-semibold
                  hover:from-cyan-500
                  hover:to-purple-700
                  transition-all
                  duration-200
                  shadow-lg
                  shadow-cyan-500/10
                "
              >
                View My Work

                <ArrowUpRight size={19} />
              </button>

              {/* CV */}
              <a
                href="/Basil-uploads/Basil-Mutuku-CV.pdf"
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#2A323D]
                  text-gray-200
                  px-7
                  py-3.5
                  rounded-lg
                  font-semibold
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition-all
                  duration-200
                "
              >
                <Download size={19} />

                View CV
              </a>

            </div>

            {/* =====================================================
                SOCIAL LINKS
            ====================================================== */}

            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">

              {/* GitHub */}
              <a
                href="https://github.com/Breezy-Reese"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-white
                  transition-colors
                "
              >
                <Github size={18} />

                <span className="text-sm">
                  GitHub
                </span>
              </a>

              {/* Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-gray-400
                  hover:text-cyan-400
                  transition-colors
                "
              >
                <Mail size={18} />

                <span className="text-sm">
                  Let's Talk
                </span>
              </button>

            </div>

          </div>

          {/* =====================================================
              RIGHT SIDE — 3D + FLOATING CARDS
          ====================================================== */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Main Glow */}
            <div
              className="
                absolute
                w-96
                h-96
                bg-cyan-500/10
                rounded-full
                blur-3xl
              "
            />

            <div className="relative w-full max-w-xl">

              {/* =================================================
                  FRONTEND CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -top-7
                  left-0
                  z-20
                  hidden
                  sm:block
                "
              >
                <div
                  className="
                    bg-[#12161C]/95
                    backdrop-blur-xl
                    border
                    border-[#242B35]
                    rounded-xl
                    px-4
                    py-3
                    shadow-xl
                    hover:border-cyan-400/60
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-cyan-400/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Code2
                        size={19}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <p className="text-white text-sm font-semibold">
                        Frontend
                      </p>

                      <p className="text-gray-500 text-xs mt-0.5">
                        React & UI
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* =================================================
                  BACKEND CARD
              ================================================== */}

              <div
                className="
                  absolute
                  top-12
                  -right-2
                  z-20
                  hidden
                  sm:block
                "
              >
                <div
                  className="
                    bg-[#12161C]/95
                    backdrop-blur-xl
                    border
                    border-[#242B35]
                    rounded-xl
                    px-4
                    py-3
                    shadow-xl
                    hover:border-purple-400/60
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-purple-400/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Server
                        size={19}
                        className="text-purple-400"
                      />
                    </div>

                    <div>
                      <p className="text-white text-sm font-semibold">
                        Backend
                      </p>

                      <p className="text-gray-500 text-xs mt-0.5">
                        Node.js & APIs
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* =================================================
                  MAIN 3D CARD
              ================================================== */}

              <div
                className="
                  relative
                  rounded-3xl
                  border
                  border-[#242B35]
                  bg-[#0E1218]/85
                  backdrop-blur-xl
                  p-4
                  sm:p-6
                  shadow-2xl
                "
              >

                {/* 3D Header */}
                <div className="flex items-center justify-between px-2 mb-4">

                  <div>
                    <p className="text-white text-sm font-semibold">
                      My Tech Stack
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      Interactive 3D environment
                    </p>
                  </div>

                  <div className="flex items-center gap-2">

                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                    <span className="text-gray-500 text-xs">
                      Drag to rotate
                    </span>

                  </div>

                </div>

                {/* =================================================
                    SCENE 3D
                ================================================== */}

                <div
                  className="
                    relative
                    rounded-2xl
                    overflow-hidden
                    border
                    border-[#1E242C]
                    bg-[#0B0F14]
                  "
                >
                  <Scene3D skills={technologies} />
                </div>

                {/* =================================================
                    LOWER CARDS
                ================================================== */}

                <div className="grid grid-cols-2 gap-3 mt-4">

                  {/* Database */}
                  <div
                    className="
                      bg-[#12161C]
                      border
                      border-[#242B35]
                      rounded-xl
                      p-3
                      hover:border-cyan-400/50
                      transition-colors
                    "
                  >
                    <div className="flex items-center gap-2.5">

                      <div
                        className="
                          w-8
                          h-8
                          rounded-lg
                          bg-cyan-400/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <Database
                          size={16}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <p className="text-white text-xs font-semibold">
                          Databases
                        </p>

                        <p className="text-gray-500 text-[11px] mt-0.5">
                          MongoDB & MySQL
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Web Applications */}
                  <div
                    className="
                      bg-[#12161C]
                      border
                      border-[#242B35]
                      rounded-xl
                      p-3
                      hover:border-purple-400/50
                      transition-colors
                    "
                  >
                    <div className="flex items-center gap-2.5">

                      <div
                        className="
                          w-8
                          h-8
                          rounded-lg
                          bg-purple-400/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <Globe
                          size={16}
                          className="text-purple-400"
                        />
                      </div>

                      <div>
                        <p className="text-white text-xs font-semibold">
                          Web Apps
                        </p>

                        <p className="text-gray-500 text-[11px] mt-0.5">
                          Full-Stack Solutions
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

              {/* =================================================
                  FULL STACK FLOATING CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-6
                  left-6
                  z-20
                  hidden
                  sm:block
                "
              >
                <div
                  className="
                    bg-[#12161C]/95
                    backdrop-blur-xl
                    border
                    border-[#242B35]
                    rounded-xl
                    px-4
                    py-3
                    shadow-xl
                    hover:border-orange-400/60
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-orange-400/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Layers
                        size={19}
                        className="text-orange-400"
                      />
                    </div>

                    <div>
                      <p className="text-white text-sm font-semibold">
                        Full-Stack
                      </p>

                      <p className="text-gray-500 text-xs mt-0.5">
                        End-to-End Development
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            BOTTOM EXPLORE BUTTON
        ========================================================== */}

        <div className="flex justify-center mt-16 lg:mt-20">

          <button
            onClick={() => scrollToSection('about')}
            className="
              group
              flex
              flex-col
              items-center
              gap-2
              text-gray-500
              hover:text-cyan-400
              transition-colors
            "
          >
            <span className="text-xs uppercase tracking-[0.2em]">
              Explore
            </span>

            <ArrowDown
              size={18}
              className="
                group-hover:translate-y-1
                transition-transform
              "
            />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;