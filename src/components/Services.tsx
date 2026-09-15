import React from 'react';
import {
  Network,
  Code,
  PenTool,
  Database,
  Globe,
  Shield,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Network,
      title: 'Networking',
      description:
        'Networking experience including infrastructure setup, connectivity, and network security.',
      skills: [
        'Network Fundamentals',
        'Internet & Web Technologies',
        'Local Area Networks (LAN)',
        'Wide Area Networks (WAN)',
        'Network Security',
        'VPNs',
      ],
    },
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications built with reliable frontend and backend technologies.',
      skills: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Development',
        'Responsive Design',
        'API Integration',
        'Database Development',
      ],
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description:
        'Clear and engaging technical, web, and blog content tailored for different audiences and platforms.',
      skills: [
        'Technical Writing',
        'Blog Posts',
        'Documentation',
        'SEO Content',
        'Web Content',
        'Research Writing',
      ],
    },
    {
      icon: Database,
      title: 'Database Development',
      description:
        'Designing, managing, and optimizing databases for reliable and efficient applications.',
      skills: [
        'MySQL',
        'MongoDB',
        'Data Management',
        'Database Security',
        'Data Modelling',
        'Backup & Recovery',
      ],
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description:
        'End-to-end web application development covering the frontend, backend, APIs, and database layer.',
      skills: [
        'React Development',
        'Node.js Backend',
        'REST APIs',
        'API Integration',
        'Database Design',
        'Application Development',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description:
        'Building applications with security, reliability, maintainability, and performance in mind.',
      skills: [
        'Web Security',
        'Performance Optimization',
        'Code Review',
        'Authentication',
        'Secure APIs',
        'Best Practices',
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0B0F14' }}
    >
      <div
        className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#8B5CF6' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#22D3EE' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#22D3EE' }}
          >
            What I Offer
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ color: '#F6F5F2' }}
          >
            Services
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: '#8B949E' }}>
            I provide practical digital solutions focused on modern
            development, reliable systems, and secure applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#12161C',
                  borderColor: '#1E242C',
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border mb-6 transition-colors duration-300 group-hover:border-cyan-400/50"
                  style={{
                    backgroundColor: '#0B0F14',
                    borderColor: '#2A323D',
                  }}
                >
                  <IconComponent
                    size={24}
                    strokeWidth={1.75}
                    style={{ color: '#22D3EE' }}
                  />
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#F6F5F2' }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: '#8B949E' }}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-2.5 py-1 rounded-md border"
                      style={{
                        color: '#A8B1BC',
                        backgroundColor: '#0B0F14',
                        borderColor: '#1E242C',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;