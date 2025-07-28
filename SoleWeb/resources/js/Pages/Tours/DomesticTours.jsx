import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';
import { Award, Shield, MapPin, Sun, CloudRain, Luggage, Lightbulb, Mail, HelpCircle } from 'lucide-react';

const DomesticTours = () => {
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

  const domesticPackages = [
    {
      id: 1,
      name: 'Palawan Paradise',
      location: 'Palawan, Philippines',
      description: 'Discover the stunning beauty of Palawan, known for its crystal-clear waters, pristine beaches, and breathtaking limestone cliffs. This tour includes visits to the world-famous Underground River, El Nido\'s lagoons, and Coron\'s shipwrecks.',
      price: 899,
      duration: '5 Days / 4 Nights',
      groupSize: '2-12 People',
      rating: 4.8,
      reviewCount: 245,
      images: [
        '/img/places/korea.png',
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Explore the Puerto Princesa Underground River',
        'Island hopping in El Nido',
        'Snorkel in the crystal-clear waters of Coron',
        'Sunset cruise around the Bacuit Archipelago',
        'Visit local communities and learn about their way of life'
      ],
      itinerary: [
        { title: 'Arrival in Puerto Princesa', description: 'Airport transfer and hotel check-in. Free time to explore the city.' },
        { title: 'Underground River Tour', description: 'Full-day tour of the UNESCO-listed Puerto Princesa Underground River.' },
        { title: 'Travel to El Nido', description: 'Scenic van transfer to El Nido. Afternoon at leisure.' },
        { title: 'El Nido Island Hopping', description: 'Tour A - Visit the Big Lagoon, Small Lagoon, Secret Lagoon, and more.' },
        { title: 'Departure', description: 'Transfer to the airport for your flight home.' }
      ],
      priceIncludes: [
        '4 nights accommodation in 4-star hotels',
        'Daily breakfast',
        'All transfers and transportation',
        'English-speaking guide',
        'Entrance fees to all attractions',
        'Boat tours as per itinerary'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities'
      ]
    },
    {
      id: 2,
      name: 'Boracay Beach Escape',
      location: 'Boracay, Philippines',
      description: 'Experience the world-famous White Beach of Boracay with its powdery white sand and crystal-clear waters. This all-inclusive package features island hopping, water sports, and luxurious beachfront accommodations.',
      price: 749,
      duration: '4 Days / 3 Nights',
      groupSize: '2-12 People',
      rating: 4.7,
      reviewCount: 198,
      images: [
        '/img/places/boracay.png',
        '/img/places/korea.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Relax on the famous White Beach',
        'Island hopping to Puka Beach and Crystal Cove',
        'Snorkeling and helmet diving',
        'Sunset sailing on a paraw boat',
        'Experience Boracay\'s vibrant nightlife'
      ],
      itinerary: [
        { title: 'Arrival in Boracay', description: 'Airport transfer to Boracay. Check-in at your beachfront resort. Free time to explore White Beach.' },
        { title: 'Island Hopping', description: 'Full-day island hopping tour including snorkeling stops and a beach picnic lunch.' },
        { title: 'Free Day', description: 'Day at leisure to enjoy water sports, spa treatments, or relax on the beach.' },
        { title: 'Departure', description: 'Transfer to the airport for your flight home.' }
      ],
      priceIncludes: [
        '3 nights accommodation in a beachfront hotel',
        'Daily breakfast',
        'Roundtrip airport transfers',
        'Island hopping tour with lunch',
        'English-speaking guide',
        'Snorkeling equipment'
      ],
      priceExcludes: [
        'Airfare',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities'
      ]
    },
    {
      id: 3,
      name: 'Cebu Adventure',
      location: 'Cebu, Philippines',
      description: 'Discover the best of Cebu with this action-packed adventure. Swim with whale sharks in Oslob, chase waterfalls in the highlands, and explore the rich history and culture of the Queen City of the South.',
      price: 699,
      duration: '5 Days / 4 Nights',
      groupSize: '2-12 People',
      rating: 4.6,
      reviewCount: 176,
      images: [
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Swim with whale sharks in Oslob',
        'Explore Kawasan Falls and canyoneering',
        'Visit historical sites in Cebu City',
        'Snorkel with sea turtles in Moalboal',
        'Experience the Sirao Flower Farm'
      ],
      itinerary: [
        { title: 'Arrival in Cebu', description: 'Airport transfer and hotel check-in. City tour including Magellan\'s Cross and Basilica del Santo Niño.' },
        { title: 'South Cebu Tour', description: 'Full-day tour to Oslob for whale shark watching and Tumalog Falls.' },
        { title: 'Kawasan Canyoneering', description: 'Adventure day with canyoneering at Kawasan Falls.' },
        { title: 'Moalboal Island Hopping', description: 'Island hopping with snorkeling at Pescador Island and Sardine Run.' },
        { title: 'Departure', description: 'Free time until transfer to the airport.' }
      ],
      priceIncludes: [
        '4 nights accommodation in 3-4 star hotels',
        'Daily breakfast',
        'All tours and activities as per itinerary',
        'English-speaking guide',
        'Entrance fees',
        'Transportation in air-conditioned vehicle',
        'Meals as specified'
      ],
      priceExcludes: [
        'Airfare',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities'
      ]
    },
    {
      id: 4,
      name: 'Banaue Rice Terraces',
      location: 'Ifugao, Philippines',
      description: 'Journey to the UNESCO-listed Banaue Rice Terraces, often called the "Eighth Wonder of the World". Immerse yourself in the rich culture of the Ifugao people and trek through breathtaking landscapes that have been carved into the mountains over 2,000 years ago.',
      price: 549,
      duration: '3 Days / 2 Nights',
      groupSize: '4-12 People',
      rating: 4.5,
      reviewCount: 132,
      images: [
        '/img/places/Riceterraces.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Marvel at the Banaue Rice Terraces',
        'Trek to Batad Rice Terraces',
        'Visit the Tappiya Waterfalls',
        'Experience Ifugao culture and traditions',
        'See traditional woodcarving at Banaue Museum'
      ],
      itinerary: [
        { title: 'Manila to Banaue', description: 'Early morning departure from Manila. Stop at Banaue viewpoint. Check-in at hotel. Afternoon visit to Banaue Museum.' },
        { title: 'Batad Terraces Trek', description: 'Full-day trek to Batad Rice Terraces and Tappiya Waterfalls. Packed lunch included.' },
        { title: 'Return to Manila', description: 'Morning at leisure. Depart for Manila with stop at Banaue Viewpoint for final photos.' }
      ],
      priceIncludes: [
        '2 nights accommodation in Banaue',
        'Roundtrip transportation from Manila',
        'Meals as per itinerary (2 breakfasts, 1 lunch)',
        'Local guide for trekking',
        'Entrance fees',
        'Environmental fees'
      ],
      priceExcludes: [
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities',
        'Travel insurance',
        'Optional activities'
      ]
    },
    {
      id: 5,
      name: 'Davao Nature Adventure',
      location: 'Davao, Philippines',
      description: 'Embark on an unforgettable journey through Davao, where you can experience the best of nature and adventure. From the majestic Mount Apo to the pristine beaches of Samal Island, this tour offers a perfect blend of excitement and relaxation in the heart of Mindanao.',
      price: 799,
      duration: '5 Days / 4 Nights',
      groupSize: '2-10 People',
      rating: 4.7,
      reviewCount: 98,
      images: [
        '/img/places/korea1.png',
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Visit the Philippine Eagle Center',
        'Explore Eden Nature Park',
        'Island hopping in Samal',
        'Trek to Mount Apo base camp',
        'Experience Davao\'s famous fruits at a local market'
      ],
      itinerary: [
        { title: 'Arrival in Davao', description: 'Airport transfer. Visit People\'s Park and Jack\'s Ridge for dinner with city view.' },
        { title: 'Philippine Eagle & Nature Parks', description: 'Visit the Philippine Eagle Center and Eden Nature Park.' },
        { title: 'Samal Island', description: 'Full-day island hopping and beach activities.' },
        { title: 'Mount Apo Trek', description: 'Trek to Mount Apo base camp with packed lunch.' },
        { title: 'Departure', description: 'Morning market visit before airport transfer.' }
      ],
      priceIncludes: [
        '4 nights accommodation',
        'Daily breakfast',
        'Tours and activities as per itinerary',
        'Entrance fees',
        'English-speaking guide',
        'Transportation in air-conditioned vehicle',
        'Boat transfers for island hopping'
      ],
      priceExcludes: [
        'Airfare',
        'Meals not mentioned',
        'Personal expenses',
        'Travel insurance',
        'Tips and gratuities'
      ]
    },
    {
      id: 6,
      name: 'Vigan Heritage Tour',
      location: 'Ilocos Sur, Philippines',
      description: 'Travel back in time as you explore the well-preserved Spanish colonial city of Vigan, a UNESCO World Heritage Site. Walk along cobblestone streets, ride a traditional kalesa, and immerse yourself in the rich history and culture of the Ilocos region.',
      price: 499,
      duration: '3 Days / 2 Nights',
      groupSize: '2-8 People',
      rating: 4.6,
      reviewCount: 87,
      images: [
        '/img/places/shangrila.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Walk along Calle Crisologo at night',
        'Ride a traditional kalesa',
        'Visit Baluarte Zoo',
        'See the Bantay Bell Tower',
        'Taste authentic Ilocano cuisine'
      ],
      itinerary: [
        { title: 'Manila to Vigan', description: 'Early morning departure from Manila. Stop at Baluarte Zoo. Check-in at hotel. Afternoon walking tour of Calle Crisologo.' },
        { title: 'Vigan Heritage Tour', description: 'Full-day tour including Bantay Bell Tower, Hidden Garden, and pottery making. Dinner at a local restaurant.' },
        { title: 'Return to Manila', description: 'Morning visit to local market. Depart for Manila with stop at Paoay Church and Sand Dunes.' }
      ],
      priceIncludes: [
        '2 nights accommodation in a heritage hotel',
        'Roundtrip transportation from Manila',
        'Daily breakfast',
        'Tours as per itinerary',
        'Entrance fees',
        'English-speaking guide'
      ],
      priceExcludes: [
        'Meals not mentioned',
        'Personal expenses',
        'Kalesa ride',
        'Souvenirs',
        'Travel insurance',
        'Tips and gratuities'
      ]
    }
  ];
  return (
    <MainLayout title="Domestic Tours - Sole Explorer">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: 1 }}>
          <img
            src={heroImages[activeImageIndex]}
            alt="Domestic Tours"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/90 to-teal-900/80" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Domestic Tours</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore the breathtaking beauty of the Philippines with our handpicked domestic tour packages. 
              From pristine beaches to majestic mountains, discover the hidden gems of our beautiful islands.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center text-teal-200">
                <svg className="w-5 h-5 text-yellow-400 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8 (342 reviews)</span>
              </div>
              <div className="flex items-center text-teal-200">
                <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>10+ Destinations</span>
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
      />
      <PageContainer>
        {/* Featured Destinations */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={pkg.images[0]} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/img/placeholder-destination.jpg';
                    }}
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

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50 rounded-2xl my-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Domestic Tours</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-10 h-10 mx-auto text-teal-500 mb-4" />,
                  title: 'Best Price Guarantee',
                  description: 'We offer the most competitive prices for our domestic tour packages.'
                },
                {
                  icon: <Shield className="w-10 h-10 mx-auto text-teal-500 mb-4" />,
                  title: 'Safe & Secure',
                  description: 'Your safety is our top priority. All our partners are vetted and certified.'
                },
                {
                  icon: <MapPin className="w-10 h-10 mx-auto text-teal-500 mb-4" />,
                  title: 'Local Experts',
                  description: 'Our local guides will show you the hidden gems of each destination.'
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Tips for Domestic Tours</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Sun className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Best Time to Visit</h3>
                <p className="text-gray-600">The Philippines has a tropical climate with two main seasons: dry (November to April) and wet (May to October). For beach destinations like Boracay and Palawan, the dry season is ideal.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Luggage className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Packing Essentials</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Light, breathable clothing</li>
                  <li>Swimwear and beach cover-ups</li>
                  <li>Sun protection (hat, sunglasses, sunscreen)</li>
                  <li>Comfortable walking shoes</li>
                  <li>Reusable water bottle</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Local Etiquette</h3>
                <p className="text-gray-600 mb-3">Filipinos are known for their hospitality. A few tips:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Use "po" and "opo" to show respect</li>
                  <li>Remove shoes when entering homes</li>
                  <li>Dress modestly in religious sites</li>
                  <li>Always ask before taking photos of locals</li>
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
                  question: 'What is included in the tour price?',
                  answer: 'Our tour prices typically include accommodations, daily breakfast, transportation during tours, entrance fees to attractions, and the services of an English-speaking guide. Please check the specific tour details for inclusions and exclusions.'
                },
                {
                  question: 'What is the cancellation policy?',
                  answer: 'We offer free cancellation up to 30 days before the tour date. For cancellations made 15-29 days before the tour, a 50% cancellation fee applies. No refunds for cancellations made within 14 days of the tour.'
                },
                {
                  question: 'Are the tours suitable for children and elderly?',
                  answer: 'Yes, most of our tours are family-friendly. However, some activities like hiking or adventure sports may have age restrictions. Please check the specific tour details or contact us for more information.'
                },
                {
                  question: 'What should I pack for the tour?',
                  answer: 'We recommend packing light, comfortable clothing suitable for the season, comfortable walking shoes, swimwear, sun protection (hat, sunglasses, sunscreen), insect repellent, and any personal medications. A detailed packing list will be provided upon booking.'
                },
                {
                  question: 'Do I need travel insurance?',
                  answer: 'While not mandatory, we strongly recommend purchasing comprehensive travel insurance that covers trip cancellation, medical expenses, and personal belongings. This is for your protection in case of unforeseen circumstances.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
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
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center mx-auto">
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

export default DomesticTours;
