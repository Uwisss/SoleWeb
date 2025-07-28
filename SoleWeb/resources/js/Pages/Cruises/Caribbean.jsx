import React, { useState, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { StarIcon, MapPinIcon, CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const CaribbeanCruises = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedPackage(null), 300);
  };

  const cruises = [
    {
      id: 1,
      name: 'Caribbean Paradise',
      location: 'Caribbean Islands',
      description: 'Experience the ultimate Caribbean cruise with stops at the most beautiful islands in the region. Enjoy white sandy beaches, crystal-clear waters, and vibrant local cultures.',
      price: 1299,
      duration: '7 Nights',
      groupSize: '2-12 People',
      rating: 4.9,
      reviewCount: 312,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Visit multiple Caribbean islands in one trip',
        'Snorkel in crystal-clear waters',
        'Experience vibrant local cultures',
        'Enjoy world-class onboard amenities',
        'Savor gourmet dining options'
      ],
      itinerary: [
        { title: 'Day 1: Embarkation', description: 'Board your luxury cruise ship and settle into your stateroom.' },
        { title: 'Day 2: Nassau, Bahamas', description: 'Explore the beautiful beaches and vibrant culture of Nassau.' },
        { title: 'Day 3: At Sea', description: 'Enjoy the ship\'s amenities and activities.' },
        { title: 'Day 4: St. Thomas', description: 'Discover the stunning beaches and shopping in St. Thomas.' },
        { title: 'Day 5: San Juan, Puerto Rico', description: 'Explore the historic streets of Old San Juan.' },
        { title: 'Day 6: At Sea', description: 'Relax and enjoy the ship\'s entertainment.' },
        { title: 'Day 7: Private Island', description: 'Spend the day at our exclusive private island.' },
        { title: 'Day 8: Debarkation', description: 'Disembark and transfer to the airport.' }
      ],
      priceIncludes: [
        '7 nights accommodation in a luxury stateroom',
        'All meals and snacks',
        'Onboard entertainment and activities',
        'Port fees and taxes',
        'Access to private island'
      ],
      priceExcludes: [
        'Airfare',
        'Shore excursions',
        'Alcoholic beverages',
        'Spa treatments',
        'Travel insurance'
      ]
    },
    {
      id: 2,
      name: 'Eastern Caribbean Adventure',
      location: 'Eastern Caribbean',
      description: 'Discover the best of the Eastern Caribbean with this exciting 7-night cruise featuring stunning beaches, rich history, and thrilling water activities.',
      price: 1499,
      duration: '7 Nights',
      groupSize: '2-12 People',
      rating: 4.8,
      reviewCount: 287,
      images: [
        '/img/places/Riceterraces.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Visit multiple Eastern Caribbean destinations',
        'Snorkel with tropical fish',
        'Explore historic sites',
        'Enjoy water sports activities',
        'Experience local cuisine'
      ],
      itinerary: [
        { title: 'Day 1: Embarkation', description: 'Board your cruise ship in Miami.' },
        { title: 'Day 2: At Sea', description: 'Enjoy a day at sea with onboard activities.' },
        { title: 'Day 3: St. Maarten', description: 'Explore the Dutch and French sides of the island.' },
        { title: 'Day 4: St. Thomas', description: 'Visit Magens Bay and go shopping.' },
        { title: 'Day 5: San Juan', description: 'Tour Old San Juan and El Morro.' },
        { title: 'Day 6: At Sea', description: 'Relax and enjoy the ship\'s amenities.' },
        { title: 'Day 7: Private Island', description: 'Spend the day at our private island.' },
        { title: 'Day 8: Debarkation', description: 'Disembark and transfer to the airport.' }
      ],
      priceIncludes: [
        '7 nights accommodation',
        'All meals and non-alcoholic beverages',
        'Onboard entertainment',
        'Port fees and taxes',
        'Access to private island'
      ],
      priceExcludes: [
        'Airfare',
        'Shore excursions',
        'Alcoholic beverages',
        'Spa services',
        'Travel insurance'
      ]
    }
  ];

  return (
    <MainLayout title="Caribbean Cruises - Sole Explorer">
      {/* Full-width Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/places/boracay.png"
            alt="Caribbean Cruise"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Caribbean Cruises</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Experience the ultimate Caribbean adventure with our luxury cruise packages. 
              Discover pristine beaches, crystal-clear waters, and vibrant cultures.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-teal-200">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1.5" />
                <span>4.9 (128 reviews)</span>
              </div>
              <div className="flex items-center text-teal-200">
                <MapPinIcon className="h-5 w-5 mr-1.5" />
                <span>Multiple Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PageContainer className="pt-16">

        {/* Cruise Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {cruises.map((cruise) => (
            <div 
              key={cruise.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(cruise)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={cruise.images[0]} 
                  alt={cruise.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{cruise.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {cruise.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{cruise.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${cruise.price}</span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(cruise);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Caribbean Cruises?</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                  ),
                  title: "Best Price Guarantee",
                  description: "We offer the best prices and value for your dream cruise vacation."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  ),
                  title: "Trust & Safety",
                  description: "Your safety and satisfaction are our top priorities."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 13a1 1 0 100-2 1 1 0 000 2z"></path>
                    </svg>
                  ),
                  title: "24/7 Support",
                  description: "Our cruise specialists are ready to help you plan your perfect Caribbean adventure."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>

      {selectedPackage && (
        <TourPackageModal 
          isOpen={isModalOpen} 
          closeModal={closeModal} 
          packageDetails={selectedPackage} 
        />
      )}
    </MainLayout>
  );
};

export default CaribbeanCruises;
