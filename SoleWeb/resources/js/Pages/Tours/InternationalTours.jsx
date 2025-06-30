import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';

const InternationalTours = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPackage(null), 300);
  };

  const internationalPackages = [
    {
      id: 1,
      name: 'Tokyo Adventure',
      location: 'Tokyo, Japan',
      description: 'Experience the perfect blend of ancient traditions and futuristic technology in Tokyo. From the bustling streets of Shibuya to the serene Meiji Shrine, this tour offers an unforgettable Japanese adventure.',
      price: 2499,
      duration: '7 Days / 6 Nights',
      groupSize: '2-10 People',
      rating: 4.9,
      reviewCount: 312,
      images: [
        '/img/places/tokyo.png',
        '/img/places/korea.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'Explore the historic Asakusa district and Senso-ji Temple',
        'Experience the famous Shibuya Crossing',
        'Visit the digital art museum teamLab Borderless',
        'Day trip to Mount Fuji and Hakone',
        'Experience traditional tea ceremony',
        'Enjoy authentic sushi-making class'
      ],
      itinerary: [
        { title: 'Arrival in Tokyo', description: 'Airport transfer and hotel check-in. Evening at leisure to explore the local area.' },
        { title: 'Tokyo Highlights Tour', description: 'Visit Meiji Shrine, Takeshita Street, and Shibuya Crossing.' },
        { title: 'Cultural Experience', description: 'Traditional tea ceremony, Asakusa district, and Tokyo Skytree.' },
        { title: 'Day Trip to Mount Fuji', description: 'Full-day tour to Mount Fuji and Hakone with cruise on Lake Ashi.' },
        { title: 'Free Day', description: 'Free day for shopping and exploration. Optional Disneyland or DisneySea visit.' },
        { title: 'Tsukiji Market & Odaiba', description: 'Visit the famous fish market and explore the futuristic Odaiba district.' },
        { title: 'Departure', description: 'Transfer to the airport for your flight home.' }
      ],
      priceIncludes: [
        '6 nights accommodation in 4-star hotels',
        'Daily breakfast',
        'All transfers and transportation',
        'English-speaking guide',
        'Entrance fees to all attractions',
        'Some meals as per itinerary'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities',
        'Optional activities'
      ]
    },
    {
      id: 2,
      name: 'Seoul Discovery',
      location: 'Seoul, South Korea',
      description: 'Discover the vibrant city of Seoul, where modern skyscrapers stand alongside ancient palaces. Experience K-pop culture, delicious cuisine, and rich history on this exciting tour.',
      price: 2199,
      duration: '6 Days / 5 Nights',
      groupSize: '2-12 People',
      rating: 4.8,
      reviewCount: 287,
      images: [
        '/img/places/korea.png',
        '/img/places/korea1.png',
        '/img/places/tokyo.png',
      ],
      highlights: [
        'Explore the grand Gyeongbokgung Palace and watch the changing of the guard ceremony',
        'Walk through the traditional Bukchon Hanok Village',
        'Experience the bustling Myeongdong shopping district',
        'Visit the futuristic Dongdaemun Design Plaza',
        'Taste authentic Korean BBQ and street food at Gwangjang Market',
        'Take in panoramic views from N Seoul Tower'
      ],
      itinerary: [
        { title: 'Arrival in Seoul', description: 'Airport transfer and hotel check-in. Evening at leisure to explore Myeongdong.' },
        { title: 'Palace Tour & Bukchon Village', description: 'Visit Gyeongbokgung Palace, Bukchon Hanok Village, and Insadong.' },
        { title: 'DMZ Tour', description: 'Full-day tour to the Demilitarized Zone between North and South Korea.' },
        { title: 'Cultural Experience', description: 'Try on hanbok, make kimchi, and enjoy a traditional Korean performance.' },
        { title: 'Namsan & Shopping', description: 'Visit N Seoul Tower, explore Hongdae, and shop in Dongdaemun.' },
        { title: 'Departure', description: 'Transfer to the airport for your flight home.' }
      ],
      priceIncludes: [
        '5 nights accommodation in 4-star hotels',
        'Daily breakfast',
        'All transfers and transportation',
        'English-speaking guide',
        'Entrance fees to all attractions',
        'Some meals as per itinerary'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities',
        'Optional activities'
      ]
    },
    {
      id: 3,
      name: 'Bangkok & Phuket Escape',
      location: 'Thailand',
      description: 'Experience the best of Thailand with this tour that combines the vibrant city of Bangkok with the stunning beaches of Phuket. From golden temples to white sand beaches, this tour offers the perfect mix of culture and relaxation.',
      price: 1899,
      duration: '8 Days / 7 Nights',
      groupSize: '2-15 People',
      rating: 4.7,
      reviewCount: 245,
      images: [
        '/img/places/boracay.png',
        '/img/places/tokyo.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Explore the Grand Palace and Wat Pho in Bangkok',
        'Cruise along the Chao Phraya River',
        'Experience the vibrant floating markets',
        'Relax on the beautiful beaches of Phuket',
        'Take a boat tour to Phi Phi Islands',
        'Enjoy a traditional Thai massage',
        'Taste authentic Thai cuisine'
      ],
      itinerary: [
        { title: 'Arrival in Bangkok', description: 'Airport transfer and hotel check-in. Evening at leisure to explore Khao San Road.' },
        { title: 'Bangkok City Tour', description: 'Visit the Grand Palace, Wat Pho, and Wat Arun. Take a boat ride along the canals.' },
        { title: 'Floating Market & Ayutthaya', description: 'Visit Damnoen Saduak Floating Market and the ancient city of Ayutthaya.' },
        { title: 'Fly to Phuket', description: 'Morning flight to Phuket. Free afternoon to relax on Patong Beach.' },
        { title: 'Phi Phi Islands Tour', description: 'Full-day boat tour to Maya Bay, Monkey Beach, and Phi Phi Don.' },
        { title: 'Phang Nga Bay', description: 'Canoeing in Phang Nga Bay and visit James Bond Island.' },
        { title: 'Free Day in Phuket', description: 'Day at leisure for optional activities or beach relaxation.' },
        { title: 'Departure', description: 'Transfer to Phuket Airport for your flight home.' }
      ],
      priceIncludes: [
        '7 nights accommodation (4 nights in Bangkok, 3 nights in Phuket)',
        'Daily breakfast',
        'All transfers and transportation including domestic flight',
        'English-speaking guide',
        'Entrance fees to all attractions',
        'Boat tours as per itinerary',
        'Some meals as specified'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities',
        'Optional activities',
        'Visa fees (if applicable)'
      ]
    },
    {
      id: 4,
      name: 'Sydney & Great Barrier Reef',
      location: 'Australia',
      description: 'Explore the iconic Sydney Opera House and then dive into the underwater wonderland of the Great Barrier Reef. This Australian adventure combines city sights with natural wonders for an unforgettable experience.',
      price: 3499,
      duration: '9 Days / 8 Nights',
      groupSize: '2-10 People',
      rating: 4.9,
      reviewCount: 198,
      images: [
        '/img/places/shangrila.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Take a guided tour of the Sydney Opera House',
        'Climb the Sydney Harbour Bridge for panoramic views',
        'Explore the Royal Botanic Garden and Mrs. Macquarie\'s Chair',
        'Snorkel or dive in the Great Barrier Reef',
        'Visit the Daintree Rainforest',
        'Experience a traditional Aboriginal cultural tour',
        'Relax on the white sands of Whitehaven Beach'
      ],
      itinerary: [
        { title: 'Arrival in Sydney', description: 'Airport transfer and hotel check-in. Evening at leisure to explore Darling Harbour.' },
        { title: 'Sydney City Tour', description: 'Visit the Opera House, Royal Botanic Garden, and The Rocks. Afternoon Harbour cruise.' },
        { title: 'Blue Mountains Day Trip', description: 'Full-day tour to the Blue Mountains, including Scenic World rides.' },
        { title: 'Fly to Cairns', description: 'Morning flight to Cairns. Afternoon at leisure to explore the Esplanade.' },
        { title: 'Great Barrier Reef Tour', description: 'Full-day cruise to the Outer Reef for snorkeling and diving.' },
        { title: 'Daintree Rainforest', description: 'Explore the ancient rainforest and Cape Tribulation.' },
        { title: 'Free Day in Cairns', description: 'Optional activities like hot air ballooning or relaxing by the lagoon.' },
        { title: 'Whitehaven Beach Excursion', description: 'Day trip to the stunning Whitsunday Islands.' },
        { title: 'Departure', description: 'Transfer to Cairns Airport for your flight home.' }
      ],
      priceIncludes: [
        '8 nights accommodation (4 nights in Sydney, 4 nights in Cairns)',
        'Daily breakfast',
        'All transfers and domestic flights',
        'English-speaking guides',
        'Entrance fees to all attractions',
        'Great Barrier Reef cruise with equipment',
        'Blue Mountains tour with lunch',
        'Daintree Rainforest tour with lunch',
        'Whitehaven Beach day trip'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities',
        'Optional activities',
        'Australia visa'
      ]
    },
    {
      id: 5,
      name: 'European Highlights',
      location: 'France, Italy, Spain',
      description: 'Experience the best of Europe with this multi-country tour featuring the romantic streets of Paris, the ancient history of Rome, and the vibrant culture of Barcelona. A perfect introduction to Europe\'s most iconic cities.',
      price: 4299,
      duration: '12 Days / 11 Nights',
      groupSize: '4-16 People',
      rating: 4.8,
      reviewCount: 356,
      images: [
        '/img/places/Riceterraces.png',
        '/img/places/tokyo.png',
        '/img/places/boracay.png',
      ],
      highlights: [
        'See the Eiffel Tower and cruise the Seine River in Paris',
        'Visit the Louvre Museum and see the Mona Lisa',
        'Explore the Vatican City and Sistine Chapel in Rome',
        'Throw a coin in the Trevi Fountain',
        'Tour the Colosseum and Roman Forum',
        'Marvel at Gaudi\'s Sagrada Familia in Barcelona',
        'Stroll down Las Ramblas and experience local tapas',
        'Day trip to Montserrat or the Amalfi Coast'
      ],
      itinerary: [
        { title: 'Arrival in Paris', description: 'Airport transfer and hotel check-in. Evening at leisure to explore the City of Light.' },
        { title: 'Paris City Tour', description: 'Visit the Eiffel Tower, Champs-Élysées, and Arc de Triomphe. Afternoon at the Louvre Museum.' },
        { title: 'Montmartre & Seine River Cruise', description: 'Explore the artistic Montmartre district and enjoy a romantic evening cruise on the Seine.' },
        { title: 'Travel to Rome', description: 'Morning flight to Rome. Afternoon tour of the Colosseum and Roman Forum.' },
        { title: 'Vatican City', description: 'Full-day tour of Vatican Museums, Sistine Chapel, and St. Peter\'s Basilica.' },
        { title: 'Rome Highlights', description: 'Visit the Pantheon, Trevi Fountain, and Spanish Steps. Free afternoon for shopping.' },
        { title: 'Fly to Barcelona', description: 'Morning flight to Barcelona. Afternoon tour of La Sagrada Familia.' },
        { title: 'Barcelona Exploration', description: 'Gaudi\'s Park Güell, Casa Batlló, and La Pedrera. Stroll down Las Ramblas.' },
        { title: 'Montserrat Day Trip', description: 'Visit the stunning mountain monastery of Montserrat.' },
        { title: 'Free Day in Barcelona', description: 'Day at leisure for shopping, beach time, or additional sightseeing.' },
        { title: 'Farewell Dinner', description: 'Enjoy a traditional Spanish farewell dinner with flamenco show.' },
        { title: 'Departure', description: 'Transfer to Barcelona Airport for your flight home.' }
      ],
      priceIncludes: [
        '11 nights accommodation in 4-star hotels',
        'Daily breakfast and 3 dinners',
        'All transfers and transportation including inter-city flights/trains',
        'English-speaking guides',
        'Entrance fees to all major attractions',
        'Seine River cruise',
        'Vatican Museums & Sistine Chapel tickets',
        'Montserrat day trip',
        'Farewell dinner with show'
      ],
      priceExcludes: [
        'International flights',
        'Travel insurance',
        'Meals not mentioned',
        'Personal expenses',
        'Tips and gratuities',
        'Optional activities',
        'Schengen visa (if required)'
      ]
    },
    {
      id: 6,
      name: 'New York City Explorer',
      location: 'USA',
      description: 'Experience the city that never sleeps with this comprehensive tour of New York City\'s most famous landmarks.',
      price: 2899,
      duration: '5 Days / 4 Nights',
      groupSize: '2-8 People',
      rating: 4.7,
      reviewCount: 201,
      images: [
        '/img/places/korea1.png',
        '/img/places/boracay.png',
        '/img/places/tokyo.png',
      ]
    }
  ];
  return (
    <MainLayout title="International Tours - Sole Explorer">
      {/* Tour Package Modal */}
      <TourPackageModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        packageDetails={selectedPackage} 
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/patterns/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">International Tours</h1>
          </div>
        </div>
      </div>

      <PageContainer>
        {/* Featured Destinations */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular International Destinations</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Japan',
                description: 'Experience the perfect blend of ancient traditions and modern technology in the Land of the Rising Sun.',
                image: '/img/places/tokyo.png'
              },
              {
                id: 2,
                name: 'South Korea',
                description: 'Discover the vibrant culture, delicious cuisine, and stunning landscapes of South Korea.',
                image: '/img/places/korea.png'
              },
              {
                id: 3,
                name: 'Thailand',
                description: 'Explore the beautiful beaches, ancient temples, and bustling cities of Thailand.',
                image: '/img/places/boracay.png'
              },
              {
                id: 4,
                name: 'Singapore',
                description: 'Experience the futuristic cityscape and diverse cultures of Singapore.',
                image: '/img/places/shangrila.png'
              },
              {
                id: 5,
                name: 'Vietnam',
                description: 'Discover the natural beauty and rich history of Vietnam.',
                image: '/img/places/Riceterraces.png'
              },
              {
                id: 6,
                name: 'Malaysia',
                description: 'Explore the diverse cultures and stunning landscapes of Malaysia.',
                image: '/img/places/korea1.png'
              }
            ].map((destination) => {
              const pkg = internationalPackages.find(p => p.id === destination.id) || destination;
              return (
                <div key={destination.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/img/placeholder-destination.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <button 
                      onClick={() => openModal(pkg)}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
                    >
                      View Packages
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white text-center my-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us today to book your dream international tour package!
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Get a Free Quote
          </button>
        </div>

        {/* Travel Tips Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">International Travel Tips</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-500 text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visa & Documentation</h3>
                <p className="text-gray-600">Check visa requirements for your destination well in advance. Ensure your passport is valid for at least 6 months beyond your travel dates and has enough blank pages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-500 text-4xl mb-4">💱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Currency & Payments</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Notify your bank of travel plans</li>
                  <li>Carry some local currency for small expenses</li>
                  <li>Use credit cards for better exchange rates</li>
                  <li>Download a currency converter app</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-500 text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Connected</h3>
                <p className="text-gray-600 mb-3">Options for staying connected abroad:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>International roaming plans</li>
                  <li>Local SIM cards</li>
                  <li>Portable WiFi devices</li>
                  <li>Offline maps and translation apps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Health & Safety Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Health & Safety</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vaccinations & Health</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Check required and recommended vaccinations for your destination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Pack a basic first-aid kit with essential medications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Research local healthcare facilities at your destination</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Insurance</h3>
                <p className="text-gray-600 mb-4">Comprehensive travel insurance is highly recommended for international travel. Ensure your policy covers:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Medical expenses and emergency evacuation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Trip cancellation and interruption</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Lost or delayed baggage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">24/7 emergency assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Do I need a visa for international travel?',
                  answer: 'Visa requirements vary by destination and your nationality. We provide visa requirement information for each tour, but we recommend checking with the respective embassy or consulate for the most up-to-date information.'
                },
                {
                  question: 'When should I book my international tour?',
                  answer: 'We recommend booking at least 3-6 months in advance for international tours, especially during peak travel seasons. This ensures better availability and often better pricing for flights and accommodations.'
                },
                {
                  question: 'What is the group size for international tours?',
                  answer: 'Our international tours typically accommodate 12-20 travelers, ensuring a more personalized experience. Some specialized tours may have smaller group sizes.'
                },
                {
                  question: 'What is included in the tour price?',
                  answer: 'Our international tour prices typically include accommodations, most meals, transportation during the tour, entrance fees to attractions, and the services of an experienced tour director. Airfare is usually not included unless specified.'
                },
                {
                  question: 'What is the cancellation policy for international tours?',
                  answer: 'Cancellation policies vary by tour and supplier. Generally, we offer full refunds for cancellations made 90+ days before departure, with decreasing percentages as the departure date approaches. Travel insurance is highly recommended to protect your investment.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Contact Our Travel Experts
              </button>
            </div>
          </div>
        </section>
      </PageContainer>
    </MainLayout>
  );
};

export default InternationalTours;
