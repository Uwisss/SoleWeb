import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { Briefcase, Users, Globe, Award, Shield, Calendar, Mail, HelpCircle, MapPin, Star, ChevronRight } from 'lucide-react';

const CorporateTravel = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Hero Images for Corporate Travel
  const heroImages = [
    '/img/places/korea1.png',
    '/img/places/tokyo.png',
    '/img/places/boracay.png',
    '/img/places/Riceterraces.png',
    '/img/places/shangrila.png'
  ];
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Small delay to allow the modal to close before clearing the package
    setTimeout(() => setSelectedPackage(null), 300);
  };
  
  // Corporate Travel Packages Data
  const micePackages = [
    {
      id: 1,
      name: 'Executive Retreat Package',
      location: 'Bali, Indonesia',
      description: 'An exclusive executive retreat package designed for corporate teams looking to strategize and bond in a luxurious tropical setting. Includes team-building activities, meeting facilities, and premium accommodations.',
      price: 1299,
      duration: '4 Days / 3 Nights',
      groupSize: '10-50 People',
      rating: 4.9,
      reviewCount: 87,
      images: [
        '/img/places/boracay.png',
        '/img/places/tokyo.png',
        '/img/places/korea1.png',
        '/img/places/shangrila.png'
      ],
      highlights: [
        'Private meeting spaces with state-of-the-art facilities',
        'Team building activities and workshops',
        'Luxury beachfront accommodations',
        'Gourmet dining experiences',
        'Wellness and relaxation activities'
      ],
      itinerary: [
        { title: 'Arrival & Welcome', description: 'Airport transfer and check-in at luxury resort. Welcome dinner and briefing.' },
        { title: 'Strategy Session', description: 'Full-day meeting with team building activities and working lunch.' },
        { title: 'Team Building', description: 'Outdoor activities and workshops followed by group dinner.' },
        { title: 'Departure', description: 'Leisure morning, check-out and airport transfer.' }
      ],
      priceIncludes: [
        '3 nights in luxury accommodations',
        'Daily breakfast and meals as specified',
        'Meeting room facilities',
        'Team building activities',
        'Airport transfers',
        'Dedicated event coordinator'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Visa fees if applicable'
      ]
    },
    {
      id: 2,
      name: 'Corporate Conference Package',
      location: 'Singapore',
      description: 'A comprehensive conference package in the heart of Asia\'s business hub. Perfect for corporate meetings, product launches, and industry conferences with world-class facilities and services.',
      price: 1599,
      duration: '3 Days / 2 Nights',
      groupSize: '50-300 People',
      rating: 4.8,
      reviewCount: 112,
      images: [
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
        '/img/places/Riceterraces.png',
      ],
      highlights: [
        'State-of-the-art conference facilities',
        'Professional event management',
        'Networking opportunities',
        'City tour and cultural experiences',
        'Gala dinner options'
      ],
      itinerary: [
        { title: 'Arrival & Setup', description: 'Airport transfers and venue setup. Registration and welcome reception.' },
        { title: 'Conference Day 1', description: 'Full-day conference with coffee breaks and lunch. Evening networking event.' },
        { title: 'Conference Day 2', description: 'Morning sessions, closing ceremony, and farewell dinner.' },
        { title: 'Departure', description: 'Check-out and airport transfers.' }
      ],
      priceIncludes: [
        '2 nights in 5-star hotel',
        'Conference venue rental',
        'Audiovisual equipment',
        'Coffee breaks and meals as specified',
        'Local transportation',
        'Event staff support'
      ],
      priceExcludes: [
        'International flights',
        'Visa fees',
        'Optional tours',
        'Personal expenses'
      ]
    },
    {
      id: 3,
      name: 'Incentive Travel Program',
      location: 'Phuket, Thailand',
      description: 'Reward your top performers with an unforgettable incentive travel experience. This package combines luxury, adventure, and team appreciation in one of Thailand\'s most beautiful destinations.',
      price: 1899,
      duration: '5 Days / 4 Nights',
      groupSize: '15-100 People',
      rating: 4.9,
      reviewCount: 64,
      images: [
        '/img/places/Riceterraces.png',
        '/img/places/shangrila.png',
        '/img/places/korea1.png',
      ],
      highlights: [
        'Luxury beachfront resort',
        'Team building activities',
        'Island hopping and water sports',
        'Award ceremony gala',
        'Spa and wellness experiences'
      ],
      itinerary: [
        { title: 'Arrival & Welcome', description: 'Airport transfer and check-in. Welcome cocktails and dinner.' },
        { title: 'Team Adventure', description: 'Island hopping tour with water activities. Team building games.' },
        { title: 'Leisure Day', description: 'Free day for spa treatments, golf, or relaxation. Optional tours available.' },
        { title: 'Awards Night', description: 'Morning at leisure. Evening awards ceremony and gala dinner.' },
        { title: 'Departure', description: 'Check-out and airport transfers.' }
      ],
      priceIncludes: [
        '4 nights in 5-star accommodations',
        'All meals and beverages',
        'Activities and excursions',
        'Awards gala dinner',
        'Airport transfers',
        'Dedicated event coordinator'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Optional activities',
        'Personal expenses'
      ]
    }
  ];

  return (
    <MainLayout title="Corporate & Group Travel (MICE) - Sole Explorer">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: 1 }}>
          <img
            src={heroImages[activeImageIndex]}
            alt="Corporate & Group Travel"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/90 to-teal-900/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate & Group Travel (MICE)</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Elevate your corporate events with our bespoke MICE (Meetings, Incentives, Conferences, and Exhibitions) solutions. 
              We specialize in creating seamless, memorable experiences tailored to your business objectives.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-teal-200">
                <svg className="w-5 h-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9 (128 reviews)</span>
              </div>
              <div className="flex items-center text-teal-200">
                <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>15+ Destinations</span>
              </div>
            </div>
            
            {/* Image Indicator Dots */}
            <div className="flex mt-6 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === activeImageIndex ? 'bg-white w-8' : 'bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tour Package Modal */}
      <TourPackageModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        packageDetails={selectedPackage}
        onBookingSuccess={(bookingData) => {
          console.log('Booking successful:', bookingData);
          closeModal();
        }}
      />
      <PageContainer>
        {/* Our Packages */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Corporate Travel Packages</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our curated selection of corporate travel packages designed to meet your business objectives and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {micePackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={pkg.images[0]} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-teal-700 text-sm font-medium px-3 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1 text-teal-300" />
                      <span className="text-sm text-teal-100">{pkg.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                      <span className="text-gray-500"> / person</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="font-medium text-gray-900">{pkg.rating}</span>
                      <span className="text-gray-500 ml-1">({pkg.reviewCount})</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openModal(pkg)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our MICE Services</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive MICE solutions tailored to your corporate needs, from planning to execution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Briefcase className="w-6 h-6 text-teal-500" />,
                  title: 'Corporate Retreats',
                  description: 'Plan your next corporate retreat at premium destinations with team-building activities and luxury accommodations.'
                },
                {
                  icon: <Users className="w-6 h-6 text-teal-500" />,
                  title: 'Conferences & Seminars',
                  description: 'End-to-end management of corporate events with venue selection, logistics, and accommodation.'
                },
                {
                  icon: <Award className="w-6 h-6 text-teal-500" />,
                  title: 'Incentive Travel',
                  description: 'Reward your top performers with unforgettable travel experiences tailored to your company\'s goals.'
                },
                {
                  icon: <Globe className="w-6 h-6 text-teal-500" />,
                  title: 'Global Meetings',
                  description: 'Comprehensive solutions for international meetings and business events worldwide.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-teal-100">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50 rounded-2xl my-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our MICE Services</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional corporate travel experiences with attention to every detail.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-teal-500" />,
                  title: 'Dedicated Support',
                  description: '24/7 dedicated support team for all your corporate travel needs.'
                },
                {
                  icon: <Calendar className="w-6 h-6 text-teal-500" />,
                  title: 'End-to-End Planning',
                  description: 'Comprehensive event planning from concept to execution.'
                },
                {
                  icon: <Award className="w-6 h-6 text-teal-500" />,
                  title: 'Global Network',
                  description: 'Access to premium venues and vendors worldwide.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl my-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Corporate Event?</h2>
            <p className="text-xl mb-8">Our MICE specialists are ready to create a customized solution for your business needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-teal-700 bg-white hover:bg-gray-50 transition-all hover:shadow-md"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Our Team
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </PageContainer>

    </MainLayout>
  );
};

export default CorporateTravel;
