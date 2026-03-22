import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f8fafc] py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-[#2c3e50] mb-4">Get in Touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a question about our products or your order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#75A5C1]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                Bluehill Botanicals Estate<br />
                Nilgiri Hills, Ooty<br />
                Tamil Nadu 643001, India
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#75A5C1]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">
                hello@bluehillbotanicals.com<br />
                support@bluehillbotanicals.com
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-[#75A5C1]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">
                +91 98765 43210<br />
                Mon-Fri, 9am - 6pm IST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif text-[#2c3e50] mb-8">Send us a message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-100 text-center"
                >
                  <h3 className="text-lg font-medium mb-2">Thank you for reaching out!</h3>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#75A5C1] hover:bg-[#5c8ba6] rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
