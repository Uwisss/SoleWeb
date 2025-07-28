import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { MapPin, Sun, CloudRain, Luggage, Lightbulb, Mail, HelpCircle, Clock, Calendar, Compass, Shield } from 'lucide-react';

const DayTours = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const heroImages = [
    '/img/places/boracay.png',
    '/img/places/korea.png',
    '/img/places/tokyo.png'
  ];
  
  // Auto-rotate background images
  React.useEffect(() => {
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

  const dayTours = [
    {
      id: 1,
      name: 'City Highlights & Local Cuisine',
      location: 'Bangkok, Thailand',
      description: 'Experience the best of Bangkok in one action-packed day. Visit stunning temples, bustling markets, and enjoy authentic Thai cuisine.',
      price: 89,
      duration: '10 Hours',
      groupSize: 'Small Group (Max 12)',
      rating: 4.8,
      reviewCount: 243,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Visit the Grand Palace and Wat Pho',
        'Explore vibrant local markets',
        'Lunch at a local restaurant',
        'Boat ride along the Chao Phraya River',
        'Tuk-tuk ride included'
      ],
      itinerary: [
        { title: 'Morning', description: 'Pickup from hotel, visit Grand Palace and Wat Pho' },
        { title: 'Midday', description: 'Authentic Thai lunch at a local restaurant' },
        { title: 'Afternoon', description: 'Explore local markets and take a boat ride' },
        { title: 'Evening', description: 'Return to hotel' }
      ],
      priceIncludes: [
        'Hotel pickup and drop-off',
        'Professional English-speaking guide',
        'All entrance fees',
        'Boat ticket',
        'Lunch and drinking water',
        'Tuk-tuk ride'
      ],
      priceExcludes: [
        'Personal expenses',
        'Tips for guide and driver',
        'Additional food and drinks'
      ]
    },
    {
      id: 2,
      name: 'Countryside Cycling Adventure',
      location: 'Chiang Mai, Thailand',
      description: 'Escape the city and explore the beautiful countryside of Chiang Mai by bicycle. Visit local villages, rice fields, and enjoy a traditional Thai lunch.',
      price: 65,
      duration: '8 Hours',
      groupSize: 'Small Group (Max 8)',
      rating: 4.9,
      reviewCount: 187,
      images: [
        '/img/places/korea.png',
        '/img/places/boracay.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Scenic cycling through rice fields',
        'Visit local farming communities',
        'Traditional Thai lunch',
        'Learn about local agriculture',
        'Small group experience'
      ],
      itinerary: [
        { title: 'Morning', description: 'Hotel pickup, bike fitting, and safety briefing' },
        { title: 'Mid-morning', description: 'Cycle through rice fields and local villages' },
        { title: 'Lunch', description: 'Traditional Thai meal at a local restaurant' },
        { title: 'Afternoon', description: 'Continue cycling, visit local market, return to hotel' }
      ],
      priceIncludes: [
        'Hotel pickup and drop-off',
        'Bicycle and helmet rental',
        'English-speaking guide',
        'Drinking water and snacks',
        'Lunch',
        'All entrance fees'
      ],
      priceExcludes: [
        'Personal expenses',
        'Tips for guide',
        'Additional snacks and drinks'
      ]
    },
    {
      id: 3,
      name: 'Island Hopping Adventure',
      location: 'Phuket, Thailand',
      description: 'Discover the stunning islands of Phang Nga Bay on this full-day boat tour. Swim in crystal-clear waters, explore hidden lagoons, and relax on pristine beaches.',
      price: 110,
      duration: '12 Hours',
      groupSize: 'Small Group (Max 15)',
      rating: 4.9,
      reviewCount: 312,
      images: [
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Visit multiple islands in Phang Nga Bay',
        'Kayaking in hidden lagoons',
        'Snorkeling in crystal-clear waters',
        'Beachside lunch',
        'Professional guide and photographer'
      ],
      itinerary: [
        { title: 'Morning', description: 'Hotel pickup, transfer to pier, and boat departure' },
        { title: 'Mid-morning', description: 'First island stop for swimming and snorkeling' },
        { title: 'Lunch', description: 'Beachside lunch on a secluded island' },
        { title: 'Afternoon', description: 'Kayaking in hidden lagoons, visit more islands' },
        { title: 'Evening', description: 'Sunset viewing, return to pier, and hotel transfer' }
      ],
      priceIncludes: [
        'Hotel pickup and drop-off',
        'Professional English-speaking guide',
        'National park fees',
        'Lunch and refreshments',
        'Snorkeling equipment',
        'Kayak rental',
        'Life jacket'
      ],
      priceExcludes: [
        'Personal expenses',
        'Alcoholic beverages',
        'Tips for guide and crew',
        'Beach towel'
      ]
    },
    {
      id: 4,
      name: 'Temple & River Cruise',
      location: 'Ayutthaya, Thailand',
      description: 'Explore the ancient city of Ayutthaya, a UNESCO World Heritage Site, and enjoy a scenic river cruise back to Bangkok.',
      price: 95,
      duration: '10 Hours',
      groupSize: 'Small Group (Max 12)',
      rating: 4.7,
      reviewCount: 198,
      images: [
        '/img/places/boracay.png',
        '/img/places/tokyo.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Visit the ancient temples of Ayutthaya',
        'Learn about Thai history and culture',
        'Buffet lunch at a local restaurant',
        'Scenic river cruise back to Bangkok',
        'Small group experience'
      ],
      itinerary: [
        { title: 'Morning', description: 'Hotel pickup and drive to Ayutthaya' },
        { title: 'Mid-morning', description: 'Visit Wat Mahathat and Wat Phra Si Sanphet' },
        { title: 'Lunch', description: 'Buffet lunch at a local restaurant' },
        { title: 'Afternoon', description: 'Continue temple visits, then board the river cruise' },
        { title: 'Evening', description: 'Arrive in Bangkok and transfer to hotel' }
      ],
      priceIncludes: [
        'Hotel pickup and drop-off',
        'Professional English-speaking guide',
        'All entrance fees',
        'Buffet lunch',
        'River cruise ticket',
        'Drinking water'
      ],
      priceExcludes: [
        'Personal expenses',
        'Tips for guide and driver',
        'Additional food and drinks'
      ]
    },
    {
      id: 5,
      name: 'Elephant Sanctuary Visit',
      location: 'Chiang Mai, Thailand',
      description: 'Spend a day with rescued elephants in their natural habitat. Feed, bathe, and learn about these magnificent creatures in an ethical environment.',
      price: 85,
      duration: '8 Hours',
      groupSize: 'Small Group (Max 10)',
      rating: 5.0,
      reviewCount: 426,
      images: [
        '/img/places/korea.png',
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Ethical elephant interaction',
        'Feed and bathe the elephants',
        'Learn about elephant conservation',
        'Traditional Thai lunch included',
        'Small group experience'
      ],
      itinerary: [
        { title: 'Morning', description: 'Hotel pickup and drive to the sanctuary' },
        { title: 'Mid-morning', description: 'Introduction to elephants and their stories' },
        { title: 'Lunch', description: 'Traditional Thai meal at the sanctuary' },
        { title: 'Afternoon', description: 'Bathe and play with the elephants in the river' },
        { title: 'Evening', description: 'Return to hotel' }
      ],
      priceIncludes: [
        'Hotel pickup and drop-off',
        'English-speaking guide',
        'All activities with elephants',
        'Traditional Thai lunch',
        'Drinking water',
        'Insurance'
      ],
      priceExcludes: [
        'Personal expenses',
        'Tips for guide and staff',
        'Additional snacks and drinks'
      ]
    },
    {
      id: 6,
      name: 'Floating Markets & Railway Market',
      location: 'Damnoen Saduak & Maeklong, Thailand',
      description: 'Experience the vibrant colors and flavors of Thailand with a visit to the famous floating markets and the unique Maeklong Railway Market.',
      price: 75,
      duration: '8 Hours',
      groupSize: 'Small Group (Max 12)',
      rating: 4.6,
      reviewCount: 287,
      images: [
        '/img/places/tokyo.png',
        '/img/places/korea.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Boat ride through floating markets',
        'Taste local Thai snacks and fruits',
        'See the famous Maeklong Railway Market',
        'Small group experience',
        'Professional guide'
      ],
      itinerary: [
        { title: 'Early Morning', description: 'Hotel pickup and drive to Damnoen Saduak' },
        { title: 'Morning', description: 'Explore the floating markets by boat' },
        { title: 'Midday', description: 'Lunch at a local restaurant' },
        { title: 'Afternoon', description: 'Visit Maeklong Railway Market' },
        { title: 'Evening', description: 'Return to Bangkok' }
      ],
      priceIncludes: [
        'Hotel pickup and drop-off',
        'Professional English-speaking guide',
        'Boat ride at floating market',
        'Lunch',
        'Drinking water',
        'All entrance fees'
      ],
      priceExcludes: [
        'Personal expenses',
        'Tips for guide and driver',
        'Additional food and drinks',
        'Souvenirs'
      ]
    }
  ];

  return (
    <MainLayout title="Day Tours & Excursions - Sole Explorer">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-cyan-700 text-white">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: 1 }}>
          <img
            src={heroImages[activeImageIndex]}
            alt="Day Tours & Excursions"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/placeholder-destination.jpg';
            }}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-cyan-700/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Day Tours & Excursions</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover the best of each destination with our carefully curated day tours. 
              From cultural experiences to outdoor adventures, we have something for every traveler.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-blue-200">
                <svg className="w-5 h-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8 (756 reviews)</span>
              </div>
              <div className="flex items-center text-blue-200">
                <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Flexible Durations</span>
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
        {/* Featured Day Tours */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Day Tours</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={tour.images[0]} 
                    alt={tour.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/img/placeholder-destination.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{tour.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1 text-blue-300" />
                      <span className="text-sm text-blue-100">{tour.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${tour.price}</span>
                      <span className="text-gray-500"> / person</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium text-gray-900">{tour.rating || '4.8'}</span>
                      <span className="text-gray-500 ml-1">({tour.reviewCount || '100'}+)</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openModal(tour)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50 rounded-2xl my-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Day Tours</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-10 h-10 mx-auto text-blue-500 mb-4" />,
                  title: 'Flexible Duration',
                  description: 'Choose from half-day or full-day tours to fit your schedule and interests.'
                },
                {
                  icon: <Compass className="w-10 h-10 mx-auto text-blue-500 mb-4" />,
                  title: 'Local Experts',
                  description: 'Our guides are passionate locals who share insider knowledge and hidden gems.'
                },
                {
                  icon: <Shield className="w-10 h-10 mx-auto text-blue-500 mb-4" />,
                  title: 'Hassle-Free',
                  description: 'We take care of all the details including transportation, tickets, and reservations.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Tips for Day Tours</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Sun className="w-6 h-6 text-blue-500" />,
                  title: 'Check the Weather',
                  description: 'Be prepared for changing conditions and pack accordingly.'
                },
                {
                  icon: <CloudRain className="w-6 h-6 text-blue-500" />,
                  title: 'Wear Comfortable Shoes',
                  description: 'You\'ll be doing a lot of walking, so make sure your footwear is up to the task.'
                },
                {
                  icon: <Luggage className="w-6 h-6 text-blue-500" />,
                  title: 'Pack Light',
                  description: 'Bring only the essentials to make your tour more enjoyable.'
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
                  title: 'Stay Hydrated',
                  description: 'Bring a reusable water bottle to stay refreshed throughout the day.'
                }
              ].map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {tip.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{tip.title}</h3>
                  <p className="text-gray-600 text-center">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 rounded-2xl my-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'What should I bring on a day tour?',
                  answer: 'We recommend bringing comfortable walking shoes, weather-appropriate clothing, sunscreen, a hat, a reusable water bottle, a camera, and any personal medications you may need.'
                },
                {
                  question: 'Are meals included in the tour price?',
                  answer: 'Most of our full-day tours include lunch, and some may include snacks or refreshments. Please check the specific tour details for meal inclusions. Dietary restrictions can often be accommodated with advance notice.'
                },
                {
                  question: 'What is your cancellation policy?',
                  answer: 'You can cancel up to 24 hours in advance for a full refund. Cancellations made less than 24 hours before the start time will not be refunded. In case of inclement weather, we will either reschedule your tour or provide a full refund.'
                },
                {
                  question: 'How large are the tour groups?',
                  answer: 'We keep our groups small to ensure a personalized experience. Most tours have a maximum of 12-15 participants, while some specialized tours may have even smaller group sizes.'
                },
                {
                  question: 'Do you offer private tours?',
                  answer: 'Yes, we offer private tours for individuals, families, and small groups. Private tours can be customized to your interests and schedule. Please contact us for more information and pricing.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </PageContainer>
    </MainLayout>
  );
};

export default DayTours;
