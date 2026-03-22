import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Droplets, Sun, Star, ShieldCheck, Truck, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const heroImages = [
  {
    desktop: "https://bluehillbotanicals.com/wp-content/uploads/2026/03/BB-BA.webp",
    mobile: "https://bluehillbotanicals.com/wp-content/uploads/2026/03/BB-BA-2.webp"
  },
  {
    desktop: "https://bluehillbotanicals.com/wp-content/uploads/2026/03/LIP-BA-1-1.webp",
    mobile: "https://bluehillbotanicals.com/wp-content/uploads/2026/03/LIP-BA-2-1.webp"
  },
  {
    desktop: "https://bluehillbotanicals.com/wp-content/uploads/2026/03/SERUM-BA-1.webp",
    mobile: "https://bluehillbotanicals.com/wp-content/uploads/2026/03/SERUM-BA-2.webp"
  }
];

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-[#75A5C1]" />,
    title: '100% Natural',
    description: 'Sourced directly from the pristine hills of Ooty.'
  },
  {
    icon: <Droplets className="w-6 h-6 text-[#75A5C1]" />,
    title: 'Cruelty Free',
    description: 'Never tested on animals, only on willing humans.'
  },
  {
    icon: <Sun className="w-6 h-6 text-[#75A5C1]" />,
    title: 'Dermatologically Tested',
    description: 'Safe for all skin types, including sensitive skin.'
  }
];

const trustBadges = [
  { icon: <ShieldCheck className="w-5 h-5" />, text: 'Secure Checkout' },
  { icon: <Truck className="w-5 h-5" />, text: 'Free Shipping Over $50' },
  { icon: <RefreshCw className="w-5 h-5" />, text: '30-Day Returns' },
];

export default function Home() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      {/* Hero Section Carousel */}
      <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-[#f4f7f6] group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Link to="/shop" className="block w-full h-full">
              <picture>
                <source media="(min-width: 768px)" srcSet={heroImages[currentSlide].desktop} />
                <img
                  src={heroImages[currentSlide].mobile}
                  alt={`Bluehill Botanicals Banner ${currentSlide + 1}`}
                  className="w-full h-full object-cover bg-[#f8e9e6]"
                  referrerPolicy="no-referrer"
                />
              </picture>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#75A5C1] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center text-gray-500 text-sm font-medium">
                <span className="text-[#75A5C1] mr-2">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#2c3e50] mb-4">The Bluehill Promise</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We believe in the power of nature to heal, restore, and rejuvenate your skin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fafc] border border-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-[#2c3e50] mb-2">Bestsellers</h2>
              <p className="text-gray-500">Our most loved botanical creations.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center text-[#75A5C1] font-medium hover:text-[#5c8ba6] transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/5] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                      NEW
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 font-medium py-3 rounded-xl shadow-sm hover:bg-white transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="px-1">
                  <div className="text-xs text-[#75A5C1] font-medium mb-1 uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-[#75A5C1] transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-gray-500">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center text-[#75A5C1] font-medium hover:text-[#5c8ba6] transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#2c3e50] mb-4">Loved by Many</h2>
            <p className="text-gray-500">Real results from real people.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Verified Buyer",
                text: "The Rose Water Toner is an absolute game changer. My skin feels so hydrated and the scent is incredibly calming.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Verified Buyer",
                text: "I've struggled with acne for years, but the Tea Tree Face Wash has completely cleared my skin without drying it out.",
                rating: 5
              },
              {
                name: "Emma Thompson",
                role: "Verified Buyer",
                text: "The Night Cream is so luxurious. I wake up with glowing, plump skin every morning. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#f8fafc] p-8 rounded-3xl relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
