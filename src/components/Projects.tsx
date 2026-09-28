import React, { useState } from "react";
import { ArrowUpRight, Github, Code2, Database, Globe } from "lucide-react";

// Screenshots go in: public/Basil-uploads/
// Use .jpg, .jpeg, .png or .webp - the extension is detected automatically.
// If no screenshot file is found, a styled placeholder is shown instead.
const projects = [
  {
    title: "PropertyPro",
    category: "Property Management",
    description:
      "A property and rental management system designed to help property managers organize properties, tenants, leases, payments, and maintenance requests from one dashboard.",
    technologies: ["PHP", "Node.js", "MongoDB", "Tailwind CSS"],
    icon: <Database size={28} strokeWidth={1.5} />,
    image: "/Basil-uploads/propertypro",
    gradient: "from-cyan-500/30 via-[#111820] to-blue-600/30",
    link: "https://github.com/Breezy-Reese/Rental-system",
    github: "",
  },
  {
    title: "Hotel Management System",
    category: "Hospitality Management",
    description:
      "A hotel management application for handling reservations, rooms, guests, staff operations, and other essential hotel activities through a centralized platform.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    icon: <Globe size={28} strokeWidth={1.5} />,
    image: "/Basil-uploads/hotel-system",
    gradient: "from-violet-500/30 via-[#111820] to-fuchsia-600/30",
    link: "https://github.com/Breezy-Reese/Hotel-ssystem",
    github: "",
  },
  {
    title: "AgriSmart",
    category: "Agriculture Technology",
    description:
      "An agriculture-focused platform that supports farmers with digital tools for managing farming activities and accessing useful agricultural information.",
    technologies: ["React", "Express.js", "MongoDB", "JavaScript"],
    icon: <Code2 size={28} strokeWidth={1.5} />,
    image: "/Basil-uploads/agrismart",
    gradient: "from-emerald-500/30 via-[#111820] to-cyan-600/30",
    link: "https://github.com/Breezy-Reese/Agrismart-system",
    github: "",
  },
  {
    title: "SmartRoad",
    category: "Smart Transportation",
    description:
      "A technology project focused on improving access to road-related information and supporting smarter transportation management.",
    technologies: ["React", "JavaScript", "Node.js", "Tailwind CSS"],
    icon: <Globe size={28} strokeWidth={1.5} />,
    image: "/Basil-uploads/smartroad",
    gradient: "from-amber-500/30 via-[#111820] to-orange-600/30",
    link: "https://github.com/Breezy-Reese/smartroad",
    github: "",
  },
];

type Project = (typeof projects)[number];

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const ProjectImage = ({ project }: { project: Project }) => {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
      className="group/image relative block overflow-hidden border-b border-white/10 bg-[#0B0F14]"
    >
      {/* Browser window bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0E1218] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-2 truncate rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] text-slate-500">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.app
        </span>
      </div>

      {/* Screenshot or placeholder */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {!failed ? (
          <img
            src={`${project.image}.${IMAGE_EXTENSIONS[attempt]}`}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => {
              if (attempt < IMAGE_EXTENSIONS.length - 1) {
                setAttempt(attempt + 1);
              } else {
                setFailed(true);
              }
            }}
            className="h-full w-full object-cover object-top transition duration-700 group-hover/image:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-[#0B0F14]/80 text-cyan-300 shadow-xl transition duration-500 group-hover/image:scale-110">
              {project.icon}
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F14]/70 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover/image:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#0B0F14] shadow-lg shadow-cyan-500/20">
            View Project
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B0F14] px-6 pb-8 pt-16 text-white sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            <Code2 size={16} />
            What I've built
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A selection of projects that demonstrate my experience building
            practical web applications, working with databases, and solving
            real-world problems through technology. Click any preview to open
            the project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111820] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <ProjectImage project={project} />

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-cyan-300">
                    {project.category}
                  </p>
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="flex-grow line-clamp-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 transition-colors group-hover:border-cyan-400/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#0B0F14] transition hover:bg-cyan-300"
                  >
                    View Project
                    <ArrowUpRight size={17} />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
                    >
                      <Github size={17} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-5 text-slate-400">
            Have a project in mind or want to work together?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-6 py-3 font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            Let's Connect
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
