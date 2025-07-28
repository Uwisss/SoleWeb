import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Home, MapPin, Globe, Sun, Map, ShieldCheck, Briefcase, FileText, Users, Ship } from 'lucide-react';

import { Link } from '@inertiajs/react';

const services = [
  {
    icon: <Plane className="w-5 h-5" />,
    title: 'Flight Bookings',
    description: 'Domestic and international flight reservations with the best airlines.',
    bg: 'from-blue-600 to-blue-700',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    cta: 'Book Flights',
    image: '/img/services/flight.png',
    features: ['Best Prices', '24/7 Support', 'Flexible Dates'],
    href: '/booking/flights'
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: 'Hotel Reservations',
    description: 'Luxury to budget accommodations worldwide with exclusive deals.',
    bg: 'from-rose-600 to-rose-700',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    cta: 'Find Hotels',
    image: '/img/services/hotel.png',
    features: ['Best Rates', 'Free Cancellation', 'Loyalty Rewards'],
    href: '/booking/hotels'
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Domestic Tours',
    description: 'Explore breathtaking destinations within the country.',
    bg: 'from-emerald-600 to-emerald-700',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    cta: 'View Tours',
    image: '/img/services/domestic.png',
    features: ['Local Guides', 'Custom Itineraries', 'Group Discounts'],
    href: '/tours/domestic'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'International Tours',
    description: 'Discover the world with our curated overseas packages.',
    bg: 'from-purple-600 to-purple-700',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    cta: 'Explore Tours',
    image: '/img/services/international.png',
    features: ['Worldwide Destinations', 'Cultural Experiences', 'Custom Packages'],
    href: '/tours/international'
  },
  {
    icon: <Sun className="w-5 h-5" />,
    title: 'Day Tours & Excursions',
    description: 'Perfect for short getaways and city adventures.',
    bg: 'from-amber-600 to-amber-700',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    cta: 'Browse Day Tours',
    image: '/img/services/daytours.png',
    features: ['Half-Day Tours', 'Full-Day Excursions', 'Local Experiences'],
    href: '/tours/day-tours'
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: 'Transportation Services',
    description: 'Multi-day overland experiences across scenic routes.',
    bg: 'from-green-600 to-green-700',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    cta: 'Book Transportation',
    image: '/img/services/transpo.png',
    features: ['Scenic Routes', 'Comfortable Transport'],
    href: '/booking/transportation'
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: 'Corporate & Group Travel (MICE)',
    description: 'Professional management of meetings, incentives, conferences, and exhibitions.',
    bg: 'from-indigo-600 to-indigo-700',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    cta: 'Inquire Now',
    image: '/img/services/mice.png',
    features: ['Event Planning', 'Group Bookings', 'Corporate Rates'],
    href: '/tours/corporate'
  },
  {
    icon: <Ship className="w-5 h-5" />,
    title: 'Cruise Packages',
    description: 'Luxury cruise experiences to exotic destinations.',
    bg: 'from-indigo-600 to-indigo-700',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    cta: 'View Cruises',
    image: '/img/services/cruise.png',
    features: ['All-Inclusive', 'Luxury Cabins', 'Multiple Destinations'],
    href: '/cruises/caribbean'
  },
  {
    icon: <Ship className="w-5 h-5" />,
    title: '2Go Travel',
    description: 'Affordable sea travel to various Philippine destinations.',
    bg: 'from-red-600 to-red-700',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    cta: 'Book 2Go Cruise',
    image: '/img/services/2go.png',
    features: ['Island Hopping', 'Affordable Rates', 'Local Experience'],
    href: '/cruises/2go'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const OurServices = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-lime-500"></div>
              <span className="text-gray-900 font-bold text-sm tracking-widest">WHAT WE OFFER</span>
              <div className="w-2 h-2 bg-lime-500"></div>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore Our <span className="text-lime-600">Services</span>
            </motion.h2>

              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Professional services designed to meet all your travel and documentation needs with efficiency and care.
              </motion.p>
            </motion.div>
          </div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-[280px] max-w-[320px]"
            >
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className={`absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-lg ${service.iconBg} shadow-sm backdrop-blur-sm bg-white/90`}>
                    {React.cloneElement(service.icon, { className: `w-5 h-5 ${service.iconColor} opacity-90` })}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <svg 
                          className="flex-shrink-0 w-4 h-4 mt-0.5 mr-2.5 text-blue-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2.5} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.href || '#'}
                    className={`mt-auto w-full py-2.5 px-4 text-center text-sm font-medium text-white rounded-lg transition-all duration-300 bg-gradient-to-r ${service.bg} hover:opacity-90 hover:shadow-md hover:-translate-y-0.5`}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
       
      </div>
    </section>
  );
};

export default OurServices;
