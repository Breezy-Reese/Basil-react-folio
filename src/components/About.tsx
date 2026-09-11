import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="public/Basil-uploads/basil-headshot.jpg"
                alt="Basil Mutuku"
                className="relative w-96 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
            </h1>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Hello! I'm Basil Mutuku.</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              I'm a full-stack JavaScript developer with hands-on experience building
              production systems — from hotel and business management platforms to
              student projects built with Agile teams. Along the way I discovered a real
              passion for helping other upcoming developers learn to code, so mentoring
              and teaching has become part of the journey too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;