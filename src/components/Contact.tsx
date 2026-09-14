import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Github,
  Facebook,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgraqbk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: 'Message sent successfully',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Unable to send message',
        description:
          'Please try again or contact me directly using the email provided.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#0B0F14] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                {' '}
                Useful
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you have a software project, internship opportunity,
              collaboration idea, or technical question, I'd be happy to hear
              from you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-[#12161C] border border-[#1E242C] rounded-2xl p-7 h-full">
                <h3 className="text-xl font-semibold text-white mb-7">
                  Get in Touch
                </h3>

                <div className="space-y-7">
                  
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-400/10">
                      <MapPin className="text-cyan-400" size={21} />
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Location
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Changamwe, Mombasa
                      </p>
                      <p className="text-gray-400 text-sm">
                        Kenya
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-400/10">
                      <Phone className="text-purple-400" size={21} />
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Phone
                      </h4>

                      <a
                        href="tel:+254110665688"
                        className="block text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                      >
                        +254 110 665 688
                      </a>

                      <a
                        href="tel:+254768378553"
                        className="block text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                      >
                        +254 768 378 553
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-400/10">
                      <Mail className="text-orange-400" size={21} />
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Email
                      </h4>

                      <a
                        href="mailto:basil59mutuku@gmail.com"
                        className="text-gray-400 text-sm hover:text-cyan-400 transition-colors break-all"
                      >
                        basil59mutuku@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-[#1E242C] mt-8 pt-7">
                  <p className="text-sm text-gray-500 mb-4">
                    Find me online
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Breezy-Reese"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-3 rounded-lg bg-[#0B0F14] border border-[#1E242C] text-gray-400 hover:text-white hover:border-cyan-400 transition-all"
                    >
                      <Github size={19} />
                    </a>

                    <a
                      href="https://www.facebook.com/Breezy-Reese"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-3 rounded-lg bg-[#0B0F14] border border-[#1E242C] text-gray-400 hover:text-white hover:border-cyan-400 transition-all"
                    >
                      <Facebook size={19} />
                    </a>

                    <a
                      href="mailto:basil59mutuku@gmail.com"
                      aria-label="Email"
                      className="p-3 rounded-lg bg-[#0B0F14] border border-[#1E242C] text-gray-400 hover:text-white hover:border-cyan-400 transition-all"
                    >
                      <Mail size={19} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-[#12161C] border border-[#1E242C] rounded-2xl p-7 md:p-9">
                <div className="mb-7">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Send Me a Message
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Tell me a little about your project, opportunity, or
                    question and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-[#2A323D] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-[#2A323D] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-[#0B0F14] border border-[#2A323D] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white py-3.5 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        <Send size={19} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;