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
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
            Services
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I provide practical digital solutions focused on modern
            development, reliable systems, and secure applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 relative group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-600 p-4 rounded-full shadow-lg">
                    <IconComponent
                      className="text-white"
                      size={24}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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


