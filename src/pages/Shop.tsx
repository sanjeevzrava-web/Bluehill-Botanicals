import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, ChevronDown, Star } from 'lucide-react';
import { products, categories } from '../data/products';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-[#2c3e50] mb-4">Shop Collection</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our full range of natural, botanical skincare products designed to nourish and protect.
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-gray-100 gap-4">
          {/* Categories - Desktop */}
          <div className="hidden md:flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#75A5C1] text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl text-gray-700 font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="flex items-center"><Filter className="w-4 h-4 mr-2" /> Filter: {activeCategory}</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Categories - Mobile */}
          {isFilterOpen && (
            <div className="md:hidden w-full bg-white border border-gray-100 rounded-xl p-2 shadow-sm z-10">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-50 text-[#75A5C1]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Sorting */}
          <div className="flex items-center w-full md:w-auto">
            <span className="text-sm text-gray-500 mr-3 whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto bg-transparent border-none text-gray-700 font-medium focus:ring-0 cursor-pointer py-2 pr-8"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={product.id}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-[4/5] mb-4">
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
                  {product.isBestseller && !product.isNew && (
                    <div className="absolute top-4 left-4 bg-[#f8e1d4] px-3 py-1 rounded-full text-xs font-bold text-[#8a5a44] shadow-sm">
                      BESTSELLER
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
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-[#75A5C1] font-medium hover:underline"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
