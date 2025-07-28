import React, { useState, useEffect } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { Car, Bus, Train, Plane, MapPin, Clock, Users, Shield, ChevronDown, ChevronUp, Star } from 'lucide-react';

const TransportationServices = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  const heroImages = [
    '/img/places/tokyo.png',
    '/img/places/boracay.png',
    '/img/places/korea1.png'
  ];
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Small delay to allow the modal to close before clearing the package
    setTimeout(() => setSelectedPackage(null), 300);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const transportPackages = [
    {
      id: 1,
      name: 'Luxury Sedan Service',
      location: 'Metro Manila',
      description: 'Travel in style and comfort with our premium luxury sedan service. Perfect for business executives, special occasions, or when you simply want to arrive in comfort. Our professional chauffeurs ensure a smooth and relaxing journey.',
      price: 3500,
      duration: '12 Hours',
      groupSize: '1-3 People',
      rating: 4.9,
      reviewCount: 128,
      images: [
        '/img/places/korea1.png',
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Premium luxury sedan with leather interior',
        'Professional, English-speaking chauffeur',
        'Complimentary bottled water and WiFi',
        'Meet & greet service at airports',
        '24/7 customer support'
      ],
      itinerary: [
        { title: 'Pickup', description: 'Your chauffeur will meet you at the designated location' },
        { title: 'Comfortable Ride', description: 'Relax in our luxury vehicle with climate control' },
        { title: 'Multiple Stops', description: 'Up to 3 stops within city limits' },
        { title: 'Drop-off', description: 'Safe arrival at your final destination' }
      ],
      priceIncludes: [
        '12 hours of service',
        'Professional chauffeur',
        'Fuel and toll fees',
        'Bottled water',
        'WiFi onboard',
        'All taxes and service charges'
      ],
      priceExcludes: [
        'Gratuities (recommended)',
        'Overnight fees if applicable',
        'Additional stops beyond 3',
        'Parking fees at certain locations'
      ]
    },
    {
      id: 2,
      name: 'Premium SUV Service',
      location: 'Metro Manila',
      description: 'Our premium SUV service offers spacious comfort for small groups or those with extra luggage. With ample legroom and luxury features, it\'s perfect for families, small groups, or anyone who values extra space and comfort.',
      price: 4500,
      duration: '12 Hours',
      groupSize: '1-6 People',
      rating: 4.8,
      reviewCount: 95,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea1.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Spacious luxury SUV with leather seats',
        'Professional, experienced driver',
        'Complimentary bottled water and WiFi',
        'Ample luggage space',
        'Child seats available upon request'
      ],
      itinerary: [
        { title: 'Pickup', description: 'Your driver will be waiting at the designated location' },
        { title: 'Comfortable Ride', description: 'Enjoy the spacious interior with climate control' },
        { title: 'Multiple Stops', description: 'Up to 3 stops within city limits' },
        { title: 'Drop-off', description: 'Safe arrival at your final destination' }
      ],
      priceIncludes: [
        '12 hours of service',
        'Professional driver',
        'Fuel and toll fees',
        'Bottled water',
        'WiFi onboard',
        'All taxes and service charges'
      ],
      priceExcludes: [
        'Gratuities (recommended)',
        'Overnight fees if applicable',
        'Additional stops beyond 3',
        'Parking fees at certain locations'
      ]
    },
    {
      id: 3,
      name: 'Executive Van Service',
      location: 'Metro Manila',
      description: 'Ideal for corporate groups or larger families, our executive van service provides comfortable transportation for up to 10 passengers. With plush seating and professional service, it\'s perfect for business meetings, group outings, or airport transfers.',
      price: 6500,
      duration: '12 Hours',
      groupSize: '1-10 People',
      rating: 4.7,
      reviewCount: 82,
      images: [
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
        '/img/places/korea1.png',
      ],
      highlights: [
        'Spacious executive van with comfortable seating',
        'Professional, uniformed chauffeur',
        'Complimentary bottled water',
        'Ample luggage capacity',
        'Privacy partition available'
      ],
      itinerary: [
        { title: 'Pickup', description: 'Your chauffeur will meet your group at the designated location' },
        { title: 'Comfortable Ride', description: 'Relax in our spacious van with climate control' },
        { title: 'Multiple Stops', description: 'Up to 3 stops within city limits' },
        { title: 'Drop-off', description: 'Safe arrival at your final destination' }
      ],
      priceIncludes: [
        '12 hours of service',
        'Professional chauffeur',
        'Fuel and toll fees',
        'Bottled water',
        'All taxes and service charges'
      ],
      priceExcludes: [
        'Gratuities (recommended)',
        'Overnight fees if applicable',
        'Additional stops beyond 3',
        'Parking fees at certain locations'
      ]
    }
  ];

  const transportTypes = [
    {
      id: 'private',
      name: 'Private Transfers',
      icon: <Car className="w-8 h-8 text-teal-600" />,
      description: 'Comfortable private transfers for individuals, families, or small groups with professional drivers.',
      features: ['Door-to-door service', '24/7 availability', 'Meet & greet', 'Child seats available']
    },
    {
      id: 'shuttle',
      name: 'Airport Shuttles',
      icon: <Bus className="w-8 h-8 text-blue-600" />,
      description: 'Shared or private shuttles to and from major airports with fixed schedules and competitive rates.',
      features: ['Fixed schedules', 'Shared or private options', 'Flight monitoring', 'Luggage assistance']
    },
    {
      id: 'intercity',
      name: 'Intercity Travel',
      icon: <Train className="w-8 h-8 text-purple-600" />,
      description: 'Comfortable transportation between cities with various vehicle options to suit your needs.',
      features: ['Multiple vehicle classes', 'WiFi onboard', 'Refreshments', 'Rest stops']
    },
    {
      id: 'corporate',
      name: 'Corporate Transportation',
      icon: <Plane className="w-8 h-8 text-amber-600" />,
      description: 'Professional transportation services for business travelers and corporate events.',
      features: ['Executive vehicles', 'Bilingual drivers', 'Hourly rentals', 'Corporate accounts']
    }
  ];

  const faqs = [
    {
      question: 'How do I book a transportation service?',
      answer: 'You can book directly through our website, mobile app, or by contacting our customer service team. Online bookings are available 24/7.'
    },
    {
      question: 'What types of vehicles do you offer?',
      answer: 'We offer a wide range of vehicles from economy cars to luxury vans and buses. Vehicle options vary by location and service type.'
    },
    {
      question: 'Are your drivers licensed and insured?',
      answer: 'Yes, all our drivers are professionally licensed, fully insured, undergo thorough background checks, and receive regular training.'
    },
    {
      question: 'Can I make changes to my booking?',
      answer: 'Yes, you can modify your booking up to 24 hours before your scheduled service, subject to availability.'
    },
    {
      question: 'What safety measures are in place?',
      answer: 'We follow strict safety protocols including regular vehicle sanitization, health checks for drivers, and contactless payment options.'
    }
  ];

  return (
    <MainLayout title="Transportation Services - Sole Explorer">
      <PageContainer>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: 1 }}>
          <img
            src={heroImages[activeImageIndex]}
            alt="Transportation Services"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/90 to-teal-900/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transportation Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Reliable and comfortable transportation solutions for all your travel needs. 
              From airport transfers to intercity travel, we've got you covered with professional service and competitive rates.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-teal-200">
                <Star className="w-5 h-5 mr-1.5 fill-current" />
                <span>4.9 (128 reviews)</span>
              </div>
              <div className="flex items-center text-teal-200">
                <MapPin className="w-5 h-5 mr-1.5" />
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
            
            <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5">
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      <PageContainer>
        {/* Our Packages */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transportation Packages</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of premium transportation services designed for comfort, reliability, and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.images[0]} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {pkg.location}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-5 h-5 fill-current mr-1" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-gray-500 ml-1">({pkg.reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-teal-600">₱{pkg.price.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{pkg.duration}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openModal(pkg)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Services Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transportation Services</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a variety of transportation solutions to meet all your travel needs with comfort and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transportTypes.map((type) => (
                <div 
                  key={type.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-teal-100"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50 rounded-2xl my-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Getting your transportation arranged is quick and easy with our simple 3-step process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Book Your Ride',
                  description: 'Choose your service type, vehicle, and schedule your pickup time and location.',
                  icon: <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                },
                {
                  step: '2',
                  title: 'Get Confirmation',
                  description: 'Receive instant confirmation with driver details and vehicle information.',
                  icon: <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                },
                {
                  step: '3',
                  title: 'Enjoy Your Ride',
                  description: 'Your professional driver will meet you at the designated location on time.',
                  icon: <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                }
              ].map((step, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: '1',
            title: 'Book Your Ride',
            description: 'Choose your service type, vehicle, and schedule your pickup time and location.',
            icon: <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          },
          {
            step: '2',
            title: 'Get Confirmation',
            description: 'Receive instant confirmation with driver details and vehicle information.',
            icon: <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          },
          {
            step: '3',
            title: 'Enjoy Your Ride',
            description: 'Your professional driver will meet you at the designated location on time.',
            icon: <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          }
        ].map((step, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our transportation services.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openFaq === index ? (
                <ChevronUp className="w-5 h-5 text-teal-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-teal-500" />
              )}
            </button>
            {openFaq === index && (
              <div className="px-6 pb-4 pt-0 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Our customer service team is available 24/7 to assist you.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/booking/transportation" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-teal-700 bg-white hover:bg-gray-50 transition-all hover:shadow-md"
          >
            Book Now
          </a>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center justify-center px-6 py-3 border border-teal-600 text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  </section>
      </PageContainer>

      {/* Tour Package Modal */}
      {selectedPackage && (
        <TourPackageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          tourPackage={selectedPackage}
        />
      )}
    </MainLayout>
  );
};

export default TransportationServices;
