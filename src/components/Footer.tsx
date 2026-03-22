import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-2xl tracking-tight text-[#2c3e50]">
                Bluehill <span className="text-[#75A5C1]">Botanicals</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Inspired by the pristine hills of Ooty, we bring you natural, botanical skincare crafted with pure mountain herbs and essential oils.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#75A5C1] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#75A5C1] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#75A5C1] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/ingredients" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Ingredients</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Journal</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Care</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/track" className="text-gray-500 hover:text-[#75A5C1] text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay in touch</h3>
            <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#75A5C1] text-white px-4 py-2 rounded-lg hover:bg-[#5c8ba6] transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bluehill Botanicals. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[#75A5C1] text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#75A5C1] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
