import React from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code2,
  Database,
  Globe,
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PropertyPro',
      category: 'Property Management',
      description:
        'A full-stack property and rental management platform for managing properties, units, tenants, leases, payments, maintenance, and expenses.',
      technologies: ['React', 'PHP', 'Node.js', 'MongoDB'],
      icon: Database,
      featured: true,
    },
    {
      title: 'Hotel Management System',
      category: 'Hospitality Platform',
      description:
        'A modern hotel management platform designed to handle rooms, reservations, guests, restaurant services, orders, and customer bookings.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      icon: Globe,
      featured: true,
    },
    {
      title: 'AgriSmart',
      category: 'Agriculture Technology',
      description:
        'An agriculture management platform connecting agricultural products, orders, and digital services through a modern web application.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      icon: Code2,
      featured: false,
    },
    {
      title: 'School Management System',
      category: 'Education Technology',
      description:
        'A school management platform designed to bring administration, teachers, students, parents, attendance, results, fees, and academic information together.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      icon: Globe,
      featured: false,
    },
    {
      title: 'SmartRoad',
      category: 'Emergency Response',
      description:
        'A digital platform designed to support emergency response coordination between drivers, hospitals, responders, and administrators.',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
      icon: Code2,
      featured: false,
    },
    {
      title: 'JobConnect',
      category: 'Employment Platform',
      description:
        'A job connection platform designed to help users discover opportunities and connect with potential employers through a simple digital experience.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      icon: Globe,
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0B0F14' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-40 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#22D3EE' }}
      />

      <div
        className="absolute bottom-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#8B5CF6' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#22D3EE' }}
          >
            My Work
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{
              color: '#F6F5F2',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Projects I've
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              built and worked on.
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: '#8B949E',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            A selection of software projects focused on solving practical
            problems through modern web technologies, clean interfaces, and
            reliable backend systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
                style={{
                  backgroundColor: '#12161C',
                  borderColor: '#1E242C',
                }}
              >
                {/* Project Visual */}
                <div
                  className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(135deg, #111827 0%, #172033 50%, #1A1630 100%)',
                  }}
                >
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />

                  {/* Glow */}
                  <div
                    className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: '#22D3EE' }}
                  />

                  {/* Icon */}
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: '#12161C',
                      borderColor: '#2DD4BF',
                      color: '#22D3EE',
                    }}
                  >
                    <Icon size={36} strokeWidth={1.5} />
                  </div>

                  {/* Featured label */}
                  {project.featured && (
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: '#F5A623',
                        color: '#0B0F14',
                      }}
                    >
                      Featured
                    </span>
                  )}

                  {/* Arrow */}
                  <div
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      backgroundColor: '#1E242C',
                      color: '#F6F5F2',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: '#22D3EE' }}
                  >
                    {project.category}
                  </p>

                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: '#F6F5F2' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: '#8B949E' }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-2.5 py-1 rounded-md text-xs border"
                        style={{
                          color: '#A8B1BC',
                          backgroundColor: '#0B0F14',
                          borderColor: '#1E242C',
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div
                    className="flex items-center gap-3 pt-5 border-t"
                    style={{ borderColor: '#1E242C' }}
                  >
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: '#F6F5F2' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github size={17} />
                      GitHub
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: '#22D3EE' }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl border p-8 md:p-10 text-center"
          style={{
            backgroundColor: '#12161C',
            borderColor: '#1E242C',
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: '#F6F5F2' }}
          >
            Have a project in mind?
          </h3>

          <p
            className="max-w-2xl mx-auto mb-6"
            style={{ color: '#8B949E' }}
          >
            I'm always interested in building useful products and working on
            challenging software projects.
          </p>

          <button
            onClick={() => {
              const element = document.getElementById('contact');

              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#F5A623',
              color: '#0B0F14',
            }}
          >
            Let's Work Together
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;