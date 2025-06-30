import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, ShieldCheck, Zap, Mail, MapPin, CheckCircle, Clock, Lock, Gift, ArrowRight } from 'lucide-react';
import { Button } from './UI/button';

// Import all payment method images
const paymentIcons = {
  visa: '/img/payment/visa.png',
  mastercard: '/img/payment/master.png',
  gcash: '/img/payment/gcash.png',
  paymaya: '/img/payment/paymaya.png',
  bpi: '/img/payment/bpi.png',
  cebuana: '/img/payment/cebuana.png',
  sevenEleven: '/img/payment/711.png',
  mlhuil: '/img/payment/mlhuil.png',
  coins: '/img/payment/coins.png',
  grab: '/img/payment/grab.png',
};

const paymentMethods = [
  { id: 1, name: 'Visa', icon: 'visa' },
  { id: 2, name: 'Mastercard', icon: 'mastercard' },
  { id: 3, name: 'GCash', icon: 'gcash' },
  { id: 4, name: 'PayMaya', icon: 'paymaya' },
  { id: 5, name: 'BPI', icon: 'bpi' },
  { id: 6, name: 'Cebuana', icon: 'cebuana' },
  { id: 7, name: '7-Eleven', icon: 'sevenEleven' },
  { id: 8, name: 'MLHuil', icon: 'mlhuil' },
  { id: 9, name: 'Coins.ph', icon: 'coins' },
  { id: 10, name: 'GrabPay', icon: 'grab' },
];

const benefits = [
  { id: 1, text: 'No hidden fees', icon: <ShieldCheck className="h-5 w-5" /> },
  { id: 2, text: 'Instant booking confirmation', icon: <Zap className="h-5 w-5" /> },
  { id: 3, text: 'Flexible cancellation', icon: <Clock className="h-5 w-5" /> },
  { id: 4, text: 'Best price guarantee', icon: <Gift className="h-5 w-5" /> },
];

const PaymentBanner = () => {
  const [activePayment, setActivePayment] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-rotate payment methods
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActivePayment(prev => (prev % paymentMethods.length) + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <div className="relative bg-gradient-to-br from-[#0f2d3a] via-[#1f5262] to-[#1f9a8e] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              transform: `scale(${Math.random() * 2 + 1})`,
              animation: `pulse ${Math.random() * 15 + 10}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 mb-6 border border-white/20">
                <Zap className="h-4 w-4 mr-2 text-amber-300" />
                <span>Secure & Easy Payments</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Flexible Payment <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Options</span>
              </h2>
              
              <p className="text-lg text-white/90 mb-8 max-w-lg">
                Book now, pay later with our secure payment solutions. We accept all major credit cards, e-wallets, and bank transfers for your convenience.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5 text-amber-300">
                      {benefit.icon}
                    </div>
                    <p className="text-white/90">{benefit.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Button 
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-5 text-base font-semibold h-auto shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center">
                    Book Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <div className="flex items-center text-sm text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <Lock className="h-4 w-4 mr-2 text-amber-300" />
                  <span>256-bit SSL Secured</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Payment Methods */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border-2 border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">We Accept All Major Payment Methods</h3>
                
                <div 
                  className="grid grid-cols-3 sm:grid-cols-5 gap-4"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {paymentMethods.map((method) => (
                    <div 
                      key={method.id}
                      className={`relative group p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        activePayment === method.id 
                          ? 'bg-white/10 border-amber-400 scale-105 shadow-lg shadow-amber-500/20' 
                          : 'bg-white/5 border-white/10 hover:border-white/20 hover:scale-105'
                      }`}
                      onClick={() => setActivePayment(method.id)}
                      title={method.name}
                    >
                      <div className="aspect-square flex items-center justify-center p-2">
                        <div className="h-10 w-16 flex items-center justify-center">
                          <img 
                            src={paymentIcons[method.icon]} 
                            alt={method.name}
                            className="h-full w-auto max-w-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://via.placeholder.com/80x40/1f9a8e/ffffff?text=${encodeURIComponent(method.name.substring(0, 2))}`;
                            }}
                          />
                        </div>
                      </div>
                      {activePayment === method.id && (
                        <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-0.5">
                          <CheckCircle className="h-4 w-4 text-slate-900" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-xl border border-amber-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-amber-500/20 rounded-lg">
                      <Gift className="h-6 w-6 text-amber-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Exclusive Mobile Payment Bonus!</h4>
                      <p className="text-sm text-white/80 mt-1">Enjoy these benefits when you pay with GCash or PayMaya:</p>
                      <ul className="mt-2 space-y-1 text-sm text-white/80">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-300 mr-2" />
                          Faster booking confirmation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-300 mr-2" />
                          Instant payment processing
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-amber-300 mr-2" />
                          Secure and encrypted transactions
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap overflow-hidden">
                          <img 
                            src={paymentIcons['gcash']} 
                            alt="GCash" 
                            className="h-3.5 w-auto mr-1.5 flex-shrink-0"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                          <span className="truncate">GCash</span>
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap overflow-hidden">
                          <img 
                            src={paymentIcons['paymaya']} 
                            alt="PayMaya" 
                            className="h-3.5 w-auto mr-1.5 flex-shrink-0"
                            onError={(e) => e.target.style.display = 'none'}
                          />
                          <span className="truncate">PayMaya</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-white/70">Need help? <a href="#" className="text-amber-300 hover:underline font-medium">Contact Support</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBanner;
