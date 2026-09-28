import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const posts = {
"building-propertypro": {
title: "Building PropertyPro: A Modern Property Management System",
category: "Development",
date: "September 2026",
readTime: "5 min read",
content: [
"Property management involves more than collecting rent. Property owners and managers need a reliable way to manage properties, units, tenants, payments, leases, and maintenance requests.",
"This was the idea behind PropertyPro, a property and rental management system that I have been developing as a practical full-stack project.",
"The project gave me an opportunity to work across the frontend and backend while thinking about how different parts of a real application communicate with each other.",
"On the frontend, I focused on creating clear dashboards and interfaces that make common property management tasks easier to understand and use.",
"The backend handles application logic, authentication, data management, payments, maintenance records, leases, and notifications.",
"One of the biggest lessons from the project has been understanding that building software is not only about writing code. It is also about designing a system that solves a real problem and remains maintainable as the project grows.",
],
},

"learning-full-stack": {
title: "My Journey Into Full-Stack Development",
category: "Career",
date: "September 2026",
readTime: "4 min read",
content: [
"My journey into software development started with an interest in understanding how websites and applications work.",
"As I continued learning, I moved beyond frontend development and became interested in what happens behind the interface: APIs, databases, authentication, server-side logic, and deployment.",
"Learning full-stack development has taught me that every technology has a purpose. React can help create interactive interfaces, Node.js can power backend services, and databases provide a place to organize application data.",
"Working on personal projects has been one of the most important parts of my learning process because projects force me to solve problems rather than simply follow tutorials.",
"There have been plenty of errors and broken builds along the way, but debugging those problems has helped me become more comfortable with the development process.",
"I am continuing to improve my skills by building practical applications and learning from every project I work on.",
],
},

"building-with-react": {
title: "Why I Enjoy Building With React",
category: "React",
date: "September 2026",
readTime: "3 min read",
content: [
"React has become one of the technologies I enjoy using when building modern web interfaces.",
"One reason I like React is the component-based approach. Instead of putting an entire interface into one large file, an application can be divided into smaller reusable components.",
"This makes it easier to organize an application and make changes without unnecessarily affecting unrelated parts of the interface.",
"React has also helped me understand important frontend concepts such as state, props, reusable components, routing, and user interactions.",
"Combined with tools such as Tailwind CSS and modern build tools, React gives me a flexible environment for creating responsive applications.",
"The more projects I build, the more I appreciate the importance of writing components that are simple, reusable, and easy to maintain.",
],
},
};

const BlogPost = () => {
const { slug } = useParams();

const post = posts[slug as keyof typeof posts];

if (!post) {
return ( <div className="flex min-h-screen items-center justify-center bg-[#0B0F14] px-6 text-white"> <div className="text-center"> <h1 className="text-4xl font-bold">Article Not Found</h1>


      <p className="mt-4 text-slate-400">
        The article you are looking for does not exist.
      </p>

      <Link
        to="/blog"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        <ArrowLeft size={18} />
        Back to Blog
      </Link>
    </div>
  </div>
);


}

return ( <article className="min-h-screen bg-[#0B0F14] text-white"> <div className="mx-auto max-w-4xl px-6 py-12"> <Link
       to="/blog"
       className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
     > <ArrowLeft size={18} />
Back to Blog </Link>


    <header className="mt-12">
      <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
        {post.category}
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
        {post.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <Calendar size={16} />
          {post.date}
        </span>

        <span className="flex items-center gap-2">
          <Clock size={16} />
          {post.readTime}
        </span>
      </div>
    </header>

    <div className="mt-12 space-y-7 border-t border-[#1E242C] pt-10">
      {post.content.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg leading-9 text-slate-300"
        >
          {paragraph}
        </p>
      ))}
    </div>

    <div className="mt-14 border-t border-[#1E242C] pt-8">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 font-medium text-cyan-400 transition hover:text-cyan-300"
      >
        <ArrowLeft size={18} />
        Back to all articles
      </Link>
    </div>
  </div>
</article>

);
};

export default BlogPost;
