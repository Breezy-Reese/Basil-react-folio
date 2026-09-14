import React from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';

const About = () => {
  const technologies = [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'PHP',
    'Tailwind CSS',
    'Git',
    'GitHub',
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'Building web applications across frontend interfaces, backend services, APIs, authentication, and databases.',
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      description:
        'Developing backend functionality, REST APIs, database structures, and data-driven features using Node.js, Express.js, MongoDB, MySQL, and PHP.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description:
        'Breaking real-world requirements into smaller technical problems and developing practical solutions through structured development and testing.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Continuous Learning',
      description:
        'Continuously improving my technical skills by building projects, exploring technologies, reviewing my work, and learning from feedback.',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0F14] py-20"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            I build software{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              with purpose.
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A software developer focused on practical solutions,
            continuous learning, and building useful digital products.
          </p>
        </div>

        {/* Main About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-20">

          {/* Image */}
          <div className="lg:w-5/12 w-full flex justify-center">
            <div className="relative">
              <div className="absolute -inset-5 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-3xl blur-2xl" />

              <div className="relative">
                <img
                  src="/Basil-uploads/basil-headshot.jpg"
                  alt="Basil Mutuku - Software Developer"
                  className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl border border-[#2A323D] shadow-2xl"
                />

                {/* Image Badge */}
                <div className="absolute -bottom-5 -right-5 bg-[#12161C] border border-[#2A323D] rounded-xl px-5 py-4 shadow-xl">
                  <p className="text-cyan-400 text-sm font-semibold">
                    Software Developer
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Building • Learning • Growing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:w-7/12 w-full">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="text-cyan-400" size={24} />

              <h3 className="text-2xl font-bold text-white">
                My Development Journey
              </h3>
            </div>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                I recently completed a Diploma in Software Design and
                Programming, where I built a strong foundation in software
                development, databases, networking, and problem solving.
              </p>

              <p>
                Since then, I have strengthened my skills through hands-on
                projects covering areas such as property management,
                hospitality, agriculture, education, emergency response,
                and employment platforms.
              </p>

              <p>
                My approach covers the complete development process —
                understanding requirements, planning solutions, building
                interfaces, developing backend services and APIs, connecting
                databases, testing functionality, and improving the user
                experience.
              </p>

              <p>
                I believe the best way to grow as a developer is to keep
                building. Each project gives me an opportunity to solve new
                problems, learn from challenges, and improve the way I
                design and develop software.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-[#12161C] border border-[#2A323D] text-gray-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects CTA */}
            <div className="mt-8">
              <button
                onClick={() => {
                  const element = document.getElementById('projects');

                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Explore My Projects
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
              What I Bring
            </p>

            <h3 className="text-3xl font-bold text-white">
              How I approach software development
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.title}
                  className="group bg-[#12161C] border border-[#1E242C] rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/10 to-purple-600/10 border border-[#2A323D] flex items-center justify-center mb-5 group-hover:border-cyan-400/40 transition-colors">
                    <Icon className="text-cyan-400" size={23} />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">
                    {highlight.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
