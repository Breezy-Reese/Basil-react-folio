import React from 'react';
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Layers,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      category: 'Programming',
      description: 'Languages I use to build application logic and software solutions.',
      skills: ['JavaScript', 'Python', 'PHP', 'Java', 'C#'],
    },
    {
      icon: Monitor,
      category: 'Frontend Development',
      description: 'Building responsive and user-focused web interfaces.',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      icon: Server,
      category: 'Backend Development',
      description: 'Developing server-side applications, APIs, and application logic.',
      skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'FastAPI'],
    },
    {
      icon: Database,
      category: 'Databases',
      description: 'Designing and working with data storage and application databases.',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Data Modelling'],
    },
    {
      icon: Wrench,
      category: 'Tools & Development',
      description: 'Tools I use throughout the development and debugging workflow.',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Ngrok'],
    },
    {
      icon: Layers,
      category: 'Additional Skills',
      description: 'Technologies and practices used in real-world application development.',
      skills: [
        'M-Pesa Daraja API',
        'Authentication',
        'API Integration',
        'Responsive Design',
        'Deployment',
      ],
    },
  ];

  const workflow = [
    'Understand the requirements',
    'Plan the application structure',
    'Build the frontend',
    'Develop the backend and APIs',
    'Connect the database',
    'Test and improve the application',
  ];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0B0F14' }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#8B5CF6' }}
      />

      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#22D3EE' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#22D3EE' }}
          >
            Technical Skills
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{
              color: '#F6F5F2',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Technologies I use to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              build software.
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{ color: '#8B949E' }}
          >
            My technical toolkit covers frontend development, backend systems,
            APIs, databases, and the tools required to develop and maintain
            modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.category}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                style={{
                  backgroundColor: '#12161C',
                  borderColor: '#1E242C',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: '#18232B',
                    color: '#22D3EE',
                  }}
                >
                  <Icon size={24} />
                </div>

                {/* Category */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#F6F5F2' }}
                >
                  {category.category}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: '#8B949E' }}
                >
                  {category.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-xs border transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
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

        {/* Development Approach */}
        <div className="mt-20">
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              backgroundColor: '#12161C',
              borderColor: '#1E242C',
            }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Text */}
              <div>
                <p
                  className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
                  style={{ color: '#22D3EE' }}
                >
                  How I Work
                </p>

                <h3
                  className="text-2xl md:text-3xl font-bold mb-5"
                  style={{ color: '#F6F5F2' }}
                >
                  From requirements to a working solution.
                </h3>

                <p
                  className="leading-relaxed"
                  style={{ color: '#8B949E' }}
                >
                  I approach development by first understanding the problem
                  and requirements, then breaking the solution into manageable
                  parts. I work across the interface, application logic,
                  APIs, and database while testing and improving the result
                  throughout the development process.
                </p>
              </div>

              {/* Workflow */}
              <div className="grid sm:grid-cols-2 gap-3">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 p-4 rounded-lg border"
                    style={{
                      backgroundColor: '#0B0F14',
                      borderColor: '#1E242C',
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: '#18232B',
                        color: '#22D3EE',
                      }}
                    >
                      {index + 1}
                    </span>

                    <span
                      className="text-sm"
                      style={{ color: '#A8B1BC' }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="text-sm" style={{ color: '#66707C' }}>
            Always learning, building, testing, and improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
