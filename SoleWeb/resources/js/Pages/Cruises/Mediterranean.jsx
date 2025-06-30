import React from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const MediterraneanCruises = () => {
  const cruises = [
    {
      id: 1,
      title: 'Asian Cultural Explorer',
      duration: '10 Nights',
      ports: ['Manila', 'Taipei', 'Osaka', 'Seoul', 'Shanghai'],
      price: 1499,
      image: '/img/places/korea.png',
      departure: 'May 20, 2024',
      ship: 'Asian Explorer',
      description: 'Experience the rich cultures and modern cities of East Asia on this unforgettable journey.'
    },
    {
      id: 2,
      title: 'Southeast Asian Adventure',
      duration: '7 Nights',
      ports: ['Manila', 'Bangkok', 'Singapore', 'Kuala Lumpur', 'Ho Chi Minh'],
      price: 1299,
      image: '/img/places/korea1.png',
      departure: 'Jun 15, 2024',
      ship: 'Tropical Voyager',
      description: 'Discover the vibrant cultures and stunning landscapes of Southeast Asia.'
    },
    {
      id: 3,
      title: 'Japanese Island Hopper',
      duration: '12 Nights',
      ports: ['Osaka', 'Hiroshima', 'Nagasaki', 'Okinawa', 'Ishigaki', 'Naha'],
      price: 1899,
      image: '/img/places/tokyo.png',
      departure: 'Jul 1, 2024',
      ship: 'Sakura Dream',
      description: 'Explore the beautiful islands of Japan, from bustling cities to tropical paradises.'
    },
  ];
  
  const highlights = [
    {
      title: 'Cultural Immersion',
      description: 'Experience diverse cultures and traditions',
      icon: '🏯'
    },
    {
      title: 'Culinary Delights',
      description: 'Savor authentic Asian cuisines',
      icon: '🍣'
    },
    {
      title: 'Historical Sites',
      description: 'Visit UNESCO World Heritage sites',
      icon: '🏛️'
    },
    {
      title: 'Modern Cities',
      description: 'Explore vibrant metropolises',
      icon: '🌆'
    },
  ];

  return (
    <MainLayout title="Asian Cruises - Sole Explorer">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-700 to-teal-600 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/img/places/korea.png" 
              alt="Asian Cruise" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <PageContainer className="relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Asian Cruises</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Discover the rich cultures, ancient traditions, and modern wonders of Asia's most fascinating destinations.
            </p>
          </PageContainer>
        </div>

        <PageContainer className="py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Asian Cruises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cruises.map((cruise) => (
                <div key={cruise.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={cruise.image} 
                      alt={cruise.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{cruise.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {cruise.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Ship:</span> {cruise.ship}<br />
                      <span className="font-semibold">Departs:</span> {cruise.departure}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Ports of Call:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cruise.ports.map((port, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                            {port}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">${cruise.price}</span>
                        <span className="text-gray-500 text-sm ml-1">per person</span>
                      </div>
                      <Link 
                        href={`/cruises/booking/${cruise.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Mediterranean Cruise?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Riches</h3>
                <p className="text-gray-600 mb-6">
                  The Mediterranean is a treasure trove of history and culture. Explore ancient ruins in Rome, 
                  marvel at the architecture in Barcelona, or walk through the whitewashed villages of the Greek Isles.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Culinary Delights</h3>
                <p className="text-gray-600">
                  Savor the flavors of the Mediterranean with fresh seafood, authentic Italian pasta, Greek meze, 
                  and Spanish tapas, all prepared by world-class chefs on board.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Scenic Beauty</h3>
                <p className="text-gray-600 mb-6">
                  From the dramatic cliffs of Santorini to the crystal-clear waters of the Adriatic, the Mediterranean 
                  offers some of the most breathtaking scenery in the world.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Time to Cruise</h3>
                <p className="text-gray-600">
                  The Mediterranean cruise season runs from April through October, with the most pleasant weather 
                  typically from May to June and September to October when temperatures are mild and crowds are smaller.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose an Asian Cruise?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Cultural Riches</h3>
                <p className="text-gray-600 mb-6">
                  Asia is home to some of the world's oldest civilizations, each with unique traditions, 
                  cuisines, and architectural wonders. From ancient temples to futuristic cities, 
                  experience the best of both worlds.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Culinary Journey</h3>
                <p className="text-gray-600">
                  Savor the diverse flavors of Asia, from street food to gourmet dining. Enjoy cooking 
                  demonstrations and food tours that showcase the region's rich culinary heritage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Scenic Beauty</h3>
                <p className="text-gray-600 mb-6">
                  From the tropical beaches of Southeast Asia to the dramatic coastlines of East Asia, 
                  our cruises take you to some of the most breathtaking destinations in the world.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Time to Cruise</h3>
                <p className="text-gray-600">
                  The best time for an Asian cruise depends on your destination. Generally, 
                  November to March offers pleasant weather throughout most of Southeast and East Asia.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-center mb-6">Journey Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-3">{highlight.icon}</div>
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Explore Asia by Sea?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our cruise specialists are ready to help you plan your perfect Asian adventure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+1234567890" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg text-lg transition-colors text-center"
              >
                Call Now: (123) 456-7890
              </a>
            </div>
          </div>
        </PageContainer>
      </div>
    </MainLayout>
  );
};

export default MediterraneanCruises;
