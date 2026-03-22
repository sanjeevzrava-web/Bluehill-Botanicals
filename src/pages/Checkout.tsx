import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-2xl font-serif text-[#2c3e50] mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some items to your cart before checking out.</p>
        <Link to="/shop" className="text-[#75A5C1] font-medium hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 py-20"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-serif text-[#2c3e50] mb-4">Order Confirmed!</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Thank you for your purchase. Your order has been received and is being processed. We'll send you an email with the tracking details shortly.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#75A5C1] hover:bg-[#5c8ba6] rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#f8fafc] py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/cart" className="inline-flex items-center text-gray-500 hover:text-[#75A5C1] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cart
        </Link>
        
        <h1 className="text-4xl font-serif text-[#2c3e50] mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              {/* Contact Info */}
              <div className="mb-10">
                <h2 className="text-xl font-serif text-[#2c3e50] mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="mb-10">
                <h2 className="text-xl font-serif text-[#2c3e50] mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input type="text" id="address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all" placeholder="123 Main St" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input type="text" id="city" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">ZIP / Postal Code</label>
                    <input type="text" id="zipCode" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="mb-8">
                <h2 className="text-xl font-serif text-[#2c3e50] mb-6">Payment Details</h2>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                  <div className="flex items-center text-gray-500 mb-4">
                    <ShieldCheck className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-sm">This is a secure, encrypted demo checkout.</span>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                      <input type="text" id="cardName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input type="text" id="cardNumber" required placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all bg-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input type="text" id="expDate" required placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all bg-white" />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input type="text" id="cvv" required placeholder="123" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#75A5C1] focus:border-transparent outline-none transition-all bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#2c3e50] text-white py-4 rounded-full font-medium text-lg hover:bg-[#1a252f] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : `Pay $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-28">
              <h2 className="text-xl font-serif text-[#2c3e50] mb-6">Order Summary</h2>
              
              <div className="divide-y divide-gray-100 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex items-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900 ml-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 text-gray-600 border-t border-gray-100 pt-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
