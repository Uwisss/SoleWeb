import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User as UserIcon, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button'; // Path is now correct

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      alert(`Login attempted with:\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    } else {
      alert(`Signup attempted with:\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
      setActiveTab('login');
    }
    onClose();
  };

  if (!isOpen) return null;

  const formVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: { opacity: 0, x: 10 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <motion.div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          </motion.div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
          <motion.div 
            className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-2xl shadow-2xl sm:my-8 sm:align-middle sm:max-w-lg relative border border-gray-200"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4">
              <button
                type="button"
                className="text-gray-400 hover:text-lime-600 transition-colors p-1.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-2">
              <div className="flex border-b border-gray-200">
                <button
                  type="button"
                  className={`flex-1 py-4 px-1 text-center text-sm font-medium transition-colors ${
                    activeTab === 'login'
                      ? 'border-b-2 border-lime-500 text-lime-600 font-semibold'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('login')}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className={`flex-1 py-4 px-1 text-center text-sm font-medium transition-colors ${
                    activeTab === 'signup'
                      ? 'border-b-2 border-lime-500 text-lime-600 font-semibold'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('signup')}
                >
                  Create Account
                </button>
              </div>

              <motion.div 
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
                className="mt-8"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  {activeTab === 'signup' && (
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1.5">
                        Full Name
                      </label>
                      <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent block w-full pl-10 sm:text-sm rounded-lg py-2.5"
                          placeholder="John Doe"
                          required={activeTab === 'signup'}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1.5">
                      Email address
                    </label>
                    <div className="relative rounded-lg overflow-hidden">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent block w-full pl-10 sm:text-sm rounded-lg py-2.5"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                        Password
                      </label>
                      {activeTab === 'login' && (
                        <a href="#forgot-password" className="text-xs font-medium text-lime-700 hover:text-lime-600 hover:underline">
                          Forgot password?
                        </a>
                      )}
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent block w-full pl-10 pr-10 sm:text-sm rounded-lg py-2.5"
                        placeholder={activeTab === 'login' ? 'Enter your password' : 'Create a password'}
                        minLength={activeTab === 'signup' ? 8 : 1}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    {activeTab === 'signup' && (
                      <p className="mt-1.5 text-xs text-gray-600">
                        Must be at least 8 characters
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full justify-center py-3 px-4 border-0 rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>{activeTab === 'login' ? 'Sign in' : 'Create account'}</>
                      )}
                    </Button>
                  </div>
                </form>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

                <div className="mt-8">
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-white text-gray-600">
                        {activeTab === 'login' ? 'New to our platform?' : 'Already have an account?'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-center py-2.5 px-4 border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-lime-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition-all duration-200"
                      onClick={() => {
                        setError('');
                        setActiveTab(activeTab === 'login' ? 'signup' : 'login');
                      }}
                    >
                      {activeTab === 'login' ? 'Create an account' : 'Log in instead'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
