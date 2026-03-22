import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08; // 8% tax
  const total = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 py-20"
      >
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-[#75A5C1]" />
        </div>
        <h2 className="text-3xl font-serif text-[#2c3e50] mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Looks like you haven't added any botanical goodness to your cart yet.
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
        <h1 className="text-4xl font-serif text-[#2c3e50] mb-8">Your Cart ({cartCount})</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-medium text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center w-full">
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden mr-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          <Link to={`/product/${item.id}`} className="hover:text-[#75A5C1] transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        <p className="text-gray-900 font-medium sm:hidden">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-3 flex items-center justify-between sm:justify-center w-full sm:w-auto mt-4 sm:mt-0">
                      <div className="flex items-center border border-gray-200 rounded-full h-10 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-medium text-gray-900 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Mobile Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="sm:hidden text-red-400 hover:text-red-500 p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Total & Desktop Remove */}
                    <div className="col-span-3 flex items-center justify-between sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
                      <span className="hidden sm:block text-lg font-medium text-gray-900 mr-6">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="hidden sm:flex text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-28">
              <h2 className="text-2xl font-serif text-[#2c3e50] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-gray-600">
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
              
              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-[#75A5C1] mt-2">
                    Add ${(50 - cartTotal).toFixed(2)} more to get free shipping!
                  </p>
                )}
              </div>
              
              <Link to="/checkout" className="w-full bg-[#2c3e50] text-white py-4 rounded-full font-medium text-lg hover:bg-[#1a252f] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group">
                Proceed to Checkout
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm">Secure Encrypted Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
