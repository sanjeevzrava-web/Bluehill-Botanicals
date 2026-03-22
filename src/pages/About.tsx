import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Droplets, Sun } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000"
            alt="Ooty hills"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Story</h1>
          <p className="text-xl text-white/90 font-medium">Born in the pristine hills of Ooty, crafted for your skin.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-[#2c3e50] mb-6">The Bluehill Philosophy</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Bluehill Botanicals, we believe that nature holds the key to radiant, healthy skin. Our journey began in the lush, mist-covered hills of Ooty, where we discovered the potent healing properties of indigenous herbs and botanicals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are committed to creating premium skincare products that are as pure as the mountain air. Every ingredient is carefully selected for its efficacy and sourced sustainably to protect the delicate ecosystem we call home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our formulations blend ancient Ayurvedic wisdom with modern botanical science, resulting in products that not only nourish your skin but also soothe your senses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1615397323755-66885368a5c3?auto=format&fit=crop&q=80&w=600" 
                  alt="Natural ingredients" 
                  className="w-full h-64 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80&w=600" 
                  alt="Skincare application" 
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Botanical extracts" 
                  className="w-full h-48 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600" 
                  alt="Product texture" 
                  className="w-full h-64 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#2c3e50] mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">What drives us every day to create the best for your skin.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-[#75A5C1]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Purity First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on the quality of our ingredients. No parabens, no sulfates, just pure botanical goodness.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-[#75A5C1]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                From ethically sourcing our herbs to using recyclable packaging, we strive to minimize our environmental footprint.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-[#75A5C1]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe you have the right to know exactly what goes onto your skin. Our ingredient lists are simple and clear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
