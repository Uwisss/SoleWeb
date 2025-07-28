import React, { useState, useEffect, useRef } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import AuthModal from '@/components/Layout/AuthModal';

// Preload background colors to prevent flash
const preloadColors = [
  'bg-white/90',
  'bg-transparent',
  'from-white to-gray-200',
  'from-teal-500 to-emerald-500',
  'hover:from-teal-400 hover:to-emerald-400',
  'bg-teal-500/10',
  'hover:bg-teal-500/20',
  'bg-teal-500/20',
  'hover:bg-teal-500/30',
  'bg-gradient-to-r',
  'from-teal-500',
  'to-emerald-500'
].join(' ');

const Header = ({ onLoginClick, onSignupClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { url } = usePage();
  
  const handleMobileMenuClick = (action) => {
    setIsMenuOpen(false);
    action();
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const leaveTimerRef = useRef(null);

  // Clear timeout on component unmount
  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (linkName) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    setOpenDropdown(linkName);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const handleDropdownEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
  };

  const handleDropdownLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const navLinks = [
    { 
      name: 'Tours', 
      href: '/tours',
      submenu: [
        { name: 'Domestic Tours', href: '/tours/domestic' },
        { name: 'International Tours', href: '/tours/international' },
        { name: 'Corporate & Group Travel (MICE)', href: '/tours/corporate' },
        { name: 'Group Tours', href: '/tours/group-tours' },
        { name: 'Day Tours & Excursions', href: '/tours/day-tours' }
      ]
    },
    {
      name: 'Agreements',
      href: '/agreements',
      submenu: [
        { name: 'Terms and Conditions', href: '/agreements/terms' },
        { name: 'Refund Policy', href: '/agreements/refund' },
        { name: 'Booking Terms', href: '/agreements/booking' }
      ]
    },
    { 
      name: 'Cruises', 
      href: '/cruises',
      submenu: [
        { name: 'Caribbean Cruises', href: '/cruises/caribbean' },
        { name: 'Asian Cruises', href: '/cruises/asian' },
        { name: '2GO Cruises', href: '/cruises/2go' },
      
      ]
    },
    { 
      name: 'Bookings', 
      href: '/booking/flights',
      submenu: [
        { name: 'Flight Booking', href: '/booking/flights' },
        { name: 'Hotel Reservations', href: '/booking/hotels' },
        { name: 'Transportation Services', href: '/booking/transportation' }
      ]
    },
    { 
      name: 'Documentation', 
      href: '/documentation/visa-processing',
      submenu: [
        { name: 'Visa Processing', href: '/documentation/visa-processing' },
        { name: 'Travel Insurance', href: '/documentation/travel-insurance' },
        { name: 'Passport Assistance', href: '/documentation/passport-assistance' }
      ]
    },
    { name: 'About Us', href: '#about' },
  ];

  const isActive = (href) => {
    if (href === '/') return url === '/';
    return url.includes(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hash = window.location.hash;
      
      // Always make header solid if there's a hash in the URL and we're not at the very top
      if (hash && scrollPosition > 0) {
        setIsScrolled(true);
        return;
      }
      
      // Otherwise, use the scroll position to determine header style
      setIsScrolled(scrollPosition > 100); // Reduced from 600px for better UX
    };
    
    // Initial check for hash on page load
    handleScroll();
    
    // Listen for hash changes (when clicking on navigation links)
    const handleHashChange = () => {
      if (window.location.hash) {
        // Small timeout to allow the scroll to complete
        setTimeout(() => {
          setIsScrolled(true);
        }, 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Common button classes
  const getButtonClasses = (variant = 'outline') => {
    const baseClasses = 'font-medium transition-all duration-300';
    
    if (variant === 'outline') {
      return `${baseClasses} ${
        isScrolled
          ? 'border-lime-500 text-lime-600 hover:bg-gradient-to-r hover:from-lime-500/10 hover:to-green-500/10 hover:border-lime-600 hover:text-lime-700 hover:shadow-lg hover:shadow-lime-500/20'
          : 'border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white'
      }`;
    }
    
    // Solid button
    return `${baseClasses} shadow-md ${
      isScrolled
        ? 'bg-gradient-to-r from-lime-500 to-green-500 text-white hover:from-lime-500/90 hover:to-green-500/90 shadow-lime-500/30 hover:shadow-lime-500/40 transform hover:-translate-y-0.5'
        : 'bg-white/90 text-lime-700 hover:bg-white shadow-white/10 hover:shadow-white/20'
    }`;
  };

  // Nav link classes
  const getNavLinkClasses = (isActive) => {
    const baseClasses = 'text-sm font-medium transition-all duration-200 px-3 py-2.5 rounded-lg group relative';
    
    if (isActive) {
      return isScrolled
        ? `${baseClasses} text-lime-600 bg-lime-50/90 shadow-md shadow-lime-100/50`
        : `${baseClasses} text-white bg-white/20 backdrop-blur-sm`;
    }
    
    return isScrolled
      ? `${baseClasses} text-gray-600 hover:text-lime-600 hover:bg-gray-50/80`
      : `${baseClasses} text-white/90 hover:text-white hover:bg-white/10`;
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      {/* Preload colors to prevent flash */}
      <div className="hidden opacity-0 pointer-events-none">
        <div className="bg-white/90 bg-transparent from-white to-gray-200 from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 bg-teal-500/10 hover:bg-teal-500/20 bg-teal-500/20 hover:bg-teal-500/30 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group transition-all duration-300 hover:scale-105">
              <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 group-hover:shadow-lg ${
                isScrolled 
                  ? 'bg-white/10 backdrop-blur-sm group-hover:bg-white/20' 
                  : 'bg-white/20 group-hover:bg-white/30'
              }`}>
                <img 
                  src="/img/SoleLogo.png" 
                  alt="Sole Explorer Logo" 
                  className="h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent leading-none ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-lime-600 to-green-600' 
                    : 'bg-gradient-to-r from-white to-teal-200'
                }`}>
                  SOLE EXPLORER
                </span>
                <span className={`hidden md:block text-xs md:text-sm font-medium ${
                  isScrolled ? 'text-gray-500' : 'text-white/80'
                }`}>
                  Travel & Tours
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`${getNavLinkClasses(isActive(link.href))} flex items-center whitespace-nowrap`}
                >
                  {link.name}
                  {link.submenu && (
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === link.name ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {link.submenu && (
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-lg shadow-xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5 py-2 transition-all duration-200 ease-in-out transform origin-top ${
                      openDropdown === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="group relative block px-4 py-2.5 text-sm text-gray-700 transition-all duration-200 hover:pl-6 hover:bg-gradient-to-r hover:from-lime-50 hover:to-white"
                      >
                        <span className="relative z-10 flex items-center">
                          <span className="absolute left-0 w-1 h-6 -ml-2 bg-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          <span className="ml-1">{subItem.name}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              className={`${getButtonClasses('outline')} group hover:bg-lime-50 border-2 px-4 h-10`}
              onClick={onLoginClick}
            >
              <LogIn className={`w-4 h-4 mr-2 transition-colors ${isScrolled ? 'text-lime-600 group-hover:text-gray-900' : 'text-white group-hover:text-gray-900'}`} />
              <span className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-lime-600 group-hover:text-gray-900' : 'text-white group-hover:text-gray-900'}`}>
                LOGIN
              </span>
            </Button>
            <Button
              className={`${getButtonClasses('solid')} bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-400 hover:to-green-400 text-white font-semibold border-0 px-4 h-10`}
              onClick={onSignupClick}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              <span className="text-sm">SIGN UP</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/90 hover:bg-white/10'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="lg:hidden w-full bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden fixed left-0 right-0 z-40"
            style={{ top: '4.5rem' }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => {
                            const dropdownId = `${link.name.toLowerCase().replace(/\s+/g, '-')}-mobile-link`;
                            const dropdown = document.getElementById(dropdownId);
                            if (dropdown) {
                              dropdown.classList.toggle('hidden');
                            }
                          }}
                          className="w-full text-left py-3 px-4 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-lime-500 flex items-center justify-between"
                        >
                          <span>{link.name}</span>
                          <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div id={`${link.name.toLowerCase().replace(/\s+/g, '-')}-mobile-link`} className="hidden pl-6">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`group relative block py-2.5 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                                isActive(subItem.href)
                                  ? 'text-lime-600 font-semibold bg-lime-50 pl-6'
                                  : 'text-gray-600 hover:bg-lime-50/50 hover:text-lime-600 hover:pl-6'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="relative z-10 flex items-center">
                                <span className={`absolute left-0 w-1 h-6 -ml-2 bg-lime-500 rounded-full transition-opacity duration-200 ${
                                  isActive(subItem.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}></span>
                                <span className="ml-1">{subItem.name}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200 ${
                          isActive(link.href)
                            ? 'bg-lime-50 text-lime-600 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-lime-500'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100 mt-2 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-lime-500 text-lime-600 hover:bg-lime-50 font-medium py-3 h-auto text-base"
                    onClick={() => handleMobileMenuClick(onLoginClick)}
                  >
                    <LogIn className="w-5 h-5 mr-2 text-lime-500" />
                    <span>Login</span>
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white hover:from-lime-400 hover:to-green-400 font-medium py-3 h-auto text-base"
                    onClick={() => handleMobileMenuClick(onSignupClick)}
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    <span>Sign Up</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
