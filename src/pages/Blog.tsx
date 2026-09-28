import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";

const posts = [
  {
    id: "building-propertypro",
    title: "Building PropertyPro: A Modern Property Management System",
    excerpt:
      "A look at the ideas, technologies, and challenges behind building a property and rental management system.",
    date: "September 2026",
    readTime: "5 min read",
    category: "Development",
  },
  {
    id: "learning-full-stack",
    title: "My Journey Into Full-Stack Development",
    excerpt:
      "Lessons from learning frontend development, backend development, databases, APIs, and deployment.",
    date: "September 2026",
    readTime: "4 min read",
    category: "Career",
  },
  {
    id: "building-with-react",
    title: "Why I Enjoy Building With React",
    excerpt:
      "How React has changed the way I approach user interfaces and modern web applications.",
    date: "September 2026",
    readTime: "3 min read",
    category: "React",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to portfolio
        </Link>

        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3 text-cyan-400">
            <BookOpen size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Blog
            </span>
          </div>

          <h1 className="text-4xl font-bold md:text-5xl">
            Thoughts, Projects &{" "}
            <span className="text-cyan-400">Lessons</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            I write about software development, projects I build, technology,
            learning, and lessons from my journey as a software developer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col rounded-2xl border border-[#1E242C] bg-[#11161D] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-5">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-bold leading-8 transition group-hover:text-cyan-300">
                {post.title}
              </h2>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#1E242C] pt-5 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <Link
                to={`/blog/${post.id}`}
                className="mt-6 inline-flex items-center font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
