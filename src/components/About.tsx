
import React from 'react';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="public/Basil-uploads/Timeless design.png"
                alt="Basil mutuku"
                className="relative w-96 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
            </h1>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Hello! I'm Basil mutuku.</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Hi there! I am Basil! You might also know me as Javascript Developer. I've been programming 
              for over 2 years now as a Full Stack developer. I've worked both with startups and individuals 
              to help build & scale their businesses. Along the journey I realised my passion existed in 
              helping others excel and pursue their dreams as upcoming developers. Hence mentoring and teaching how to code.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
