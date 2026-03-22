import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'benefits'>('description');
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-2xl font-serif text-[#2c3e50] mb-4">Product not found</h2>
        <p className="text-gray-500 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link to="/shop" className="text-[#75A5C1] font-medium hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(q => q - 1);
    } else if (type === 'increase' && quantity < 10) {
      setQuantity(q => q + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-[#75A5C1] transition-colors">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-300">/</span>
                <Link to="/shop" className="hover:text-[#75A5C1] transition-colors">Shop</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {product.isNew && (
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-md">
                  NEW ARRIVAL
                </div>
              )}
              {product.isBestseller && !product.isNew && (
                <div className="absolute top-6 left-6 bg-[#f8e1d4] px-4 py-1.5 rounded-full text-xs font-bold text-[#8a5a44] shadow-md">
                  BESTSELLER
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-sm text-[#75A5C1] font-bold tracking-widest uppercase mb-3">{product.category}</div>
              <h1 className="text-4xl sm:text-5xl font-serif text-[#2c3e50] leading-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium">{product.rating}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-gray-900 transition-colors">
                  {product.reviews} reviews
                </span>
              </div>
              
              <p className="text-3xl font-medium text-gray-900 mb-8">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 pb-10 border-b border-gray-100">
              <div className="flex items-center border border-gray-200 rounded-full h-14 w-full sm:w-32 bg-white">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium text-gray-900">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                  disabled={quantity >= 10}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 h-14 rounded-full flex items-center justify-center text-base font-medium transition-all duration-300 shadow-md ${
                  isAdded 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-[#75A5C1] text-white hover:bg-[#5c8ba6] hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5 mr-2" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-[#75A5C1] mr-3 flex-shrink-0" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-5 h-5 text-[#75A5C1] mr-3 flex-shrink-0" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RefreshCw className="w-5 h-5 text-[#75A5C1] mr-3 flex-shrink-0" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-gray-200 mb-6">
                {(['description', 'ingredients', 'benefits'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-4 text-sm font-medium capitalize transition-colors relative ${
                      activeTab === tab ? 'text-[#75A5C1]' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#75A5C1]"
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[120px]">
                {activeTab === 'description' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {product.description}
                  </motion.p>
                )}
                {activeTab === 'ingredients' && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="list-disc pl-5 space-y-2 text-gray-600"
                  >
                    {product.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </motion.ul>
                )}
                {activeTab === 'benefits' && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="list-disc pl-5 space-y-2 text-gray-600"
                  >
                    {product.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
