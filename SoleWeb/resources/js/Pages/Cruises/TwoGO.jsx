import React, { useState, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { StarIcon, MapPinIcon, CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const TwoGO = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroImages = [
    '/img/places/boracay.png',
    '/img/places/korea.png',
    '/img/places/korea1.png'
  ];

  const cruises = [
    {
      id: 1,
      name: '2GO Island Hopper',
      location: 'Philippine Islands',
      description: 'Discover the beauty of the Philippine archipelago with our island-hopping cruise. Experience pristine beaches, vibrant marine life, and warm Filipino hospitality.',
      price: 8999,
      duration: '5 Nights',
      groupSize: '2-12 People',
      rating: 4.8,
      reviewCount: 198,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/korea1.png',
      ],
      highlights: [
        'Explore multiple Philippine destinations',
        'Experience local island culture',
        'Enjoy water activities and beach relaxation',
        'Taste authentic Filipino cuisine',
        'Comfortable and modern cabins'
      ],
      itinerary: [
        { title: 'Day 1: Manila', description: 'Embarkation and welcome dinner' },
        { title: 'Day 2: Coron, Palawan', description: 'Island hopping and snorkeling' },
        { title: 'Day 3: Puerto Princesa', description: 'Underground River tour' },
        { title: 'Day 4: Boracay', description: 'Beach relaxation and water sports' },
        { title: 'Day 5: At Sea', description: 'Onboard activities and entertainment' },
        { title: 'Day 6: Manila', description: 'Disembarkation' }
      ],
      inclusions: [
        '5 nights accommodation in your chosen cabin',
        'All meals and non-alcoholic beverages',
        'Onboard entertainment and activities',
        'Port charges and taxes',
        'Complimentary Wi-Fi'
      ],
      exclusions: [
        'Airfare to/from Manila',
        'Alcoholic beverages',
        'Optional shore excursions',
        'Travel insurance',
        'Personal expenses'
      ]
    },
    {
      id: 2,
      name: '2GO Southern Explorer',
      location: 'Visayas and Mindanao',
      description: 'Journey through the southern islands of the Philippines, from Cebu to Davao, experiencing the rich culture and natural wonders of the Visayas and Mindanao regions.',
      price: 10999,
      duration: '7 Nights',
      groupSize: '2-12 People',
      rating: 4.9,
      reviewCount: 156,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/korea1.png',
      ],
      highlights: [
        'Explore Cebu and Davao',
        'Visit historical landmarks',
        'Experience local festivals',
        'Enjoy tropical beaches',
        'Luxury accommodations'
      ],
      itinerary: [
        { title: 'Day 1: Cebu', description: 'Embarkation and welcome dinner' },
        { title: 'Day 2: Bohol', description: 'Chocolate Hills and tarsier sanctuary' },
        { title: 'Day 3: Siquijor', description: 'Beach day and island tour' },
        { title: 'Day 4: Dumaguete', description: 'Apo Island snorkeling' },
        { title: 'Day 5: Surigao', description: 'Enchanted River tour' },
        { title: 'Day 6: Davao', description: 'Eden Nature Park and city tour' },
        { title: 'Day 7: At Sea', description: 'Onboard activities and entertainment' },
        { title: 'Day 8: Davao', description: 'Disembarkation' }
      ],
      inclusions: [
        '7 nights accommodation',
        'All meals and non-alcoholic beverages',
        'Onboard entertainment',
        'Port charges and taxes',
        'Complimentary Wi-Fi'
      ],
      exclusions: [
        'Airfare',
        'Alcoholic beverages',
        'Optional excursions',
        'Travel insurance',
        'Personal expenses'
      ]
    }
  ];

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

  // Auto-rotate background images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout title="2GO Cruises - Sole Explorer">
      {/* Full-width Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-700 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/places/boracay.png"
            alt="2GO Cruises"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">2GO Cruises</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Experience the beauty of the Philippine islands with our comfortable and affordable cruise packages.
              Discover pristine beaches, crystal-clear waters, and warm Filipino hospitality.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-purple-200">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1.5" />
                <span>4.8 (198 reviews)</span>
              </div>
              <div className="flex items-center text-purple-200">
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
            <motion.div 
              key={cruise.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
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
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {cruise.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{cruise.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">₱{cruise.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(cruise);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Why Choose 2GO Cruises?</h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  ),
                  title: "Best Value",
                  description: "Experience luxury at an affordable price with our all-inclusive packages."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  ),
                  title: "Local Expertise",
                  description: "Our Filipino crew provides authentic local experiences and warm hospitality."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  ),
                  title: "Modern Fleet",
                  description: "Travel in comfort with our modern and well-maintained ships."
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
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
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

export default TwoGO;
