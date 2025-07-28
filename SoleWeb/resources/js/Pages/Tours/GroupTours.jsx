import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { Award, Shield, MapPin, Sun, CloudRain, Luggage, Lightbulb, Mail, HelpCircle, Users, Calendar } from 'lucide-react';

const GroupTours = () => {
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

  const groupTours = [
    {
      id: 1,
      name: 'European Highlights',
      location: 'Multiple Countries',
      description: 'Experience the best of Europe with this comprehensive tour covering iconic cities like Paris, Rome, and Amsterdam. Perfect for first-time visitors looking to see the highlights.',
      price: 2499,
      duration: '12 Days / 11 Nights',
      groupSize: '15-25 People',
      rating: 4.8,
      reviewCount: 156,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Visit 8 countries in 3 weeks',
        'Skip-the-line access to major attractions',
        'Comfortable hotels in central locations',
        'Experienced tour director',
        'Breakfast daily and some meals'
      ],
      itinerary: [
        { title: 'Day 1-3: London', description: 'Arrival, city tour, and free time' },
        { title: 'Day 4-6: Paris', description: 'Eiffel Tower, Louvre, and Seine River cruise' },
        { title: 'Day 7-9: Swiss Alps', description: 'Scenic train rides and mountain excursions' },
        { title: 'Day 10-12: Venice & Florence', description: 'Gondola rides and Renaissance art' },
        { title: 'Day 13-16: Rome & Amalfi Coast', description: 'Ancient ruins and coastal beauty' },
        { title: 'Day 17-21: Greek Islands', description: 'Santorini and Mykonos exploration' }
      ],
      priceIncludes: [
        '20 nights in 3-4 star hotels',
        'Breakfast daily, 5 dinners',
        'Transportation between cities',
        'Sightseeing tours with local guides',
        'Entrance fees to major attractions'
      ],
      priceExcludes: [
        'International airfare',
        'Travel insurance',
        'Some meals',
        'Optional excursions',
        'Airport transfers'
      ]
    },
    {
      id: 2,
      name: 'Southeast Asia Discovery',
      location: 'Thailand, Vietnam, Cambodia',
      description: 'Immerse yourself in the vibrant cultures and stunning landscapes of Southeast Asia. From bustling cities to ancient temples and pristine beaches.',
      price: 1899,
      duration: '14 Days / 13 Nights',
      groupSize: '12-18 People',
      rating: 4.9,
      reviewCount: 234,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Explore Angkor Wat at sunrise',
        'Cruise through Halong Bay',
        'Visit floating markets in Thailand',
        'Local cooking class in Hoi An',
        'Small group experience with local guides'
      ],
      itinerary: [
        { title: 'Day 1-3: Bangkok', description: 'Temples, markets, and Thai cuisine' },
        { title: 'Day 4-6: Chiang Mai', description: 'Elephant sanctuary and cooking class' },
        { title: 'Day 7-9: Luang Prabang', description: 'Kuang Si Falls and alms giving ceremony' },
        { title: 'Day 10-12: Hanoi & Halong Bay', description: 'City tour and overnight cruise' },
        { title: 'Day 13-14: Siem Reap', description: 'Angkor Wat and Ta Prohm temples' }
      ],
      priceIncludes: [
        '13 nights in 3-4 star hotels',
        'Breakfast daily, 5 dinners',
        'All transportation between cities',
        'Local English-speaking guides',
        'Entrance fees to all attractions'
      ],
      priceExcludes: [
        'International flights',
        'Visa fees',
        'Travel insurance',
        'Some meals',
        'Personal expenses'
      ]
    },
    {
      id: 3,
      name: 'South American Explorer',
      location: 'Peru, Bolivia, Chile',
      description: 'Discover the wonders of South America with our small group adventure. From the ancient ruins of Machu Picchu to the stunning landscapes of the Atacama Desert.',
      price: 2199,
      duration: '17 Days / 16 Nights',
      groupSize: '8-14 People',
      rating: 4.9,
      reviewCount: 98,
      images: [
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Guided tour of Machu Picchu',
        'Stay in a luxury eco-lodge in the Amazon',
        'Sunset over the Uyuni Salt Flats',
        'Wine tasting in Chilean vineyards',
        'Small group experience'
      ],
      itinerary: [
        { title: 'Day 1-3: Lima & Cusco', description: 'City tours and acclimatization' },
        { title: 'Day 4-7: Sacred Valley & Machu Picchu', description: 'Inca ruins and mountain scenery' },
        { title: 'Day 8-10: Amazon Rainforest', description: 'Wildlife spotting and jungle activities' },
        { title: 'Day 11-13: La Paz & Uyuni', description: 'City tour and salt flat adventure' },
        { title: 'Day 14-17: Atacama Desert', description: 'Geysers, stargazing, and desert landscapes' }
      ],
      priceIncludes: [
        '16 nights accommodation',
        'All internal flights',
        'Breakfast daily, some meals',
        'Experienced bilingual guide',
        'Entrance fees and activities'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Gratuities',
        'Some meals',
        'Personal expenses'
      ]
    },
    {
      id: 4,
      name: 'African Safari Adventure',
      location: 'Kenya & Tanzania',
      description: 'Experience the ultimate wildlife adventure on this African safari. Witness the Great Migration, spot the Big Five, and relax on Zanzibar\'s pristine beaches.',
      price: 3499,
      duration: '14 Days / 13 Nights',
      groupSize: '10-16 People',
      rating: 4.9,
      reviewCount: 187,
      images: [
        '/img/places/korea.png',
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Game drives in Masai Mara and Serengeti',
        'Witness the Great Migration (seasonal)',
        'Visit Ngorongoro Crater',
        'Cultural experience with Maasai tribe',
        'Beach extension in Zanzibar'
      ],
      itinerary: [
        { title: 'Day 1-3: Nairobi & Amboseli', description: 'City tour and game drives with Kilimanjaro views' },
        { title: 'Day 4-6: Masai Mara', description: 'Game drives in search of the Big Five' },
        { title: 'Day 7-9: Serengeti', description: 'Witness the Great Migration (seasonal)' },
        { title: 'Day 10-11: Ngorongoro Crater', description: 'Full-day game drive in the crater' },
        { title: 'Day 12-14: Zanzibar', description: 'Beach relaxation and Stone Town tour' }
      ],
      priceIncludes: [
        '13 nights in lodges and tented camps',
        'All meals on safari, breakfast only in Zanzibar',
        'Game drives in 4x4 vehicles',
        'Professional safari guide',
        'All park fees and conservation fees'
      ],
      priceExcludes: [
        'International flights',
        'Visa fees',
        'Travel insurance',
        'Optional activities',
        'Gratuities'
      ]
    },
    {
      id: 5,
      name: 'Japan Cultural Journey',
      location: 'Japan',
      description: 'Immerse yourself in Japanese culture on this comprehensive tour from Tokyo to Kyoto. Experience ancient traditions, modern cities, and breathtaking landscapes.',
      price: 3899,
      duration: '12 Days / 11 Nights',
      groupSize: '8-14 People',
      rating: 4.9,
      reviewCount: 143,
      images: [
        '/img/places/tokyo.png',
        '/img/places/korea.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Traditional tea ceremony in Kyoto',
        'Bullet train experience',
        'Stay in a ryokan with onsen',
        'Visit Hiroshima Peace Memorial Park',
        'Cherry blossom viewing (seasonal)'
      ],
      itinerary: [
        { title: 'Day 1-3: Tokyo', description: 'Asakusa, Shibuya, and Tsukiji Market' },
        { title: 'Day 4-5: Hakone', description: 'Mt. Fuji views and hot springs' },
        { title: 'Day 6-8: Kyoto', description: 'Temples, gardens, and Gion district' },
        { title: 'Day 9-10: Hiroshima', description: 'Peace Park and Miyajima Island' },
        { title: 'Day 11-12: Osaka', description: 'Castle and food tour' }
      ],
      priceIncludes: [
        '11 nights in 3-4 star hotels and ryokans',
        'Breakfast daily, 5 dinners',
        'Japan Rail Pass',
        'Local English-speaking guide',
        'Entrance fees to all attractions'
      ],
      priceExcludes: [
        'International flights',
        'Some meals',
        'Travel insurance',
        'Personal expenses',
        'Airport transfers'
      ]
    },
    {
      id: 6,
      name: 'Australian Outback & Reef',
      location: 'Australia',
      description: 'Experience the best of Australia, from the iconic Sydney Opera House to the Great Barrier Reef and the mystical Uluru in the Red Centre.',
      price: 4299,
      duration: '14 Days / 13 Nights',
      groupSize: '12-18 People',
      rating: 4.8,
      reviewCount: 112,
      images: [
        '/img/places/boracay.png',
        '/img/places/tokyo.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Sydney Harbour cruise',
        'Snorkel the Great Barrier Reef',
        'Sunset at Uluru',
        'Daintree Rainforest experience',
        'Indigenous cultural activities'
      ],
      itinerary: [
        { title: 'Day 1-3: Sydney', description: 'Harbor cruise, Bondi Beach, and Blue Mountains' },
        { title: 'Day 4-6: Cairns & Great Barrier Reef', description: 'Snorkeling and Daintree Rainforest' },
        { title: 'Day 7-9: Uluru', description: 'Sunset viewing and cultural experiences' },
        { title: 'Day 10-12: Melbourne', description: 'Great Ocean Road and penguin parade' },
        { title: 'Day 13-14: Sydney', description: 'Free time and departure' }
      ],
      priceIncludes: [
        '13 nights in 4-star hotels',
        'Breakfast daily, 5 dinners',
        'Domestic flights within Australia',
        'All tours and activities mentioned',
        'Experienced local guide'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Some meals',
        'Optional activities',
        'Personal expenses'
      ]
    }
  ];

  return (
    <MainLayout title="Group Tours - Sole Explorer">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: 1 }}>
          <img
            src={heroImages[activeImageIndex]}
            alt="Group Tours"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/placeholder-destination.jpg';
            }}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/90 to-purple-900/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Group Tours</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Join like-minded travelers on our exciting group tours. Make new friends, share experiences,
              and create unforgettable memories together with our carefully curated group itineraries.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-purple-200">
                <svg className="w-5 h-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9 (342 reviews)</span>
              </div>
              <div className="flex items-center text-purple-200">
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
        {/* Featured Destinations */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Group Tours</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupTours.map((tour) => (
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
                  <div className="absolute top-4 right-4 bg-white/90 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{tour.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1 text-purple-300" />
                      <span className="text-sm text-purple-100">{tour.location}</span>
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
                      <Award className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="font-medium text-gray-900">{tour.rating || '4.8'}</span>
                      <span className="text-gray-500 ml-1">({tour.reviewCount || '100'}+)</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openModal(tour)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    View Tour Details
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Group Tours</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-10 h-10 mx-auto text-purple-500 mb-4" />,
                  title: 'Social Experience',
                  description: 'Meet like-minded travelers and make new friends from around the world.'
                },
                {
                  icon: <Award className="w-10 h-10 mx-auto text-purple-500 mb-4" />,
                  title: 'Expert Guides',
                  description: 'Our knowledgeable guides provide insights you won\'t find in guidebooks.'
                },
                {
                  icon: <Shield className="w-10 h-10 mx-auto text-purple-500 mb-4" />,
                  title: 'Hassle-Free',
                  description: 'We handle all the logistics so you can focus on enjoying your trip.'
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
        {/* Travel Tips Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Group Travel Tips</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sun className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Best Time to Travel</h3>
                <p className="text-gray-600">Our group tours are scheduled during the best times to visit each destination, with comfortable weather and fewer crowds. Check individual tour pages for specific seasonal information.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Luggage className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Packing Tips</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Pack light and bring versatile clothing</li>
                  <li>Comfortable walking shoes are a must</li>
                  <li>Bring a daypack for daily excursions</li>
                  <li>Don't forget chargers and adapters</li>
                  <li>Leave room for souvenirs</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Group Travel Etiquette</h3>
                <p className="text-gray-600 mb-3">To ensure everyone has a great experience:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Be on time for group activities</li>
                  <li>Respect personal space and privacy</li>
                  <li>Be open to trying new things</li>
                  <li>Practice patience and flexibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 rounded-2xl my-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'What is the average group size?',
                  answer: 'Our group sizes typically range from 10 to 25 travelers, depending on the destination and type of tour. This allows for a good balance of social interaction and personal attention from our guides.'
                },
                {
                  question: 'What is the age range of travelers?',
                  answer: 'Our group tours attract travelers of all ages, though most are between 25-65 years old. Some tours may have specific age recommendations or requirements, which will be listed in the tour details.'
                },
                {
                  question: 'Are flights included in the tour price?',
                  answer: 'International flights are not included in our tour prices, as our travelers come from all over the world. However, we can assist with flight arrangements if needed. All internal transportation during the tour is included.'
                },
                {
                  question: 'What is the single supplement?',
                  answer: 'Our tour prices are based on double occupancy. If you\'re traveling alone, you can choose to be matched with a roommate of the same gender or pay a single supplement for your own room.'
                },
                {
                  question: 'How much free time is included?',
                  answer: 'We balance organized activities with free time for independent exploration. Most days include a mix of guided tours and free time to relax or explore on your own.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">Have more questions?</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center mx-auto">
                <Mail className="w-4 h-4 mr-2" />
                Contact Our Support Team
              </button>
            </div>
          </div>
        </section>
      </PageContainer>
    </MainLayout>
  );
};

export default GroupTours;
