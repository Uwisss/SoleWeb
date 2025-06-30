import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';

const AsianCruises = () => {
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

  const cruises = [
    {
      id: 1,
      name: 'Asian Treasures Voyage',
      location: 'Southeast Asia',
      description: 'Embark on an unforgettable journey through Southeast Asia\'s most vibrant cities and tropical paradises. Experience the perfect blend of ancient traditions and modern marvels.',
      price: 1999,
      duration: '10 Nights',
      groupSize: '2-12 People',
      rating: 4.9,
      reviewCount: 287,
      images: [
        '/img/places/singapore.png',
        '/img/places/boracay.png',
        '/img/places/korea.png',
      ],
      highlights: [
        'Explore vibrant cities and tropical islands',
        'Experience rich cultural heritage',
        'Taste authentic Asian cuisines',
        'Visit UNESCO World Heritage sites',
        'Enjoy world-class onboard amenities'
      ],
      itinerary: [
        { title: 'Day 1: Singapore', description: 'Embark on your cruise and explore the vibrant city of Singapore.' },
        { title: 'Day 2: At Sea', description: 'Enjoy the ship\'s amenities and activities.' },
        { title: 'Day 3: Kuala Lumpur', description: 'Visit the iconic Petronas Towers and Batu Caves.' },
        { title: 'Day 4: Penang', description: 'Explore George Town\'s historic streets and street art.' },
        { title: 'Day 5: Phuket', description: 'Relax on beautiful beaches and enjoy water sports.' },
        { title: 'Day 6: At Sea', description: 'Participate in onboard activities and entertainment.' },
        { title: 'Day 7: Ho Chi Minh', description: 'Discover the rich history and culture of Vietnam.' },
        { title: 'Day 8: Nha Trang', description: 'Enjoy the beautiful beaches and local cuisine.' },
        { title: 'Day 9: At Sea', description: 'Relax and enjoy the ship\'s facilities.' },
        { title: 'Day 10: Bangkok', description: 'Explore the Grand Palace and floating markets.' },
        { title: 'Day 11: Disembarkation', description: 'Disembark and transfer to the airport.' }
      ],
      priceIncludes: [
        '10 nights accommodation in a luxury stateroom',
        'All meals and snacks',
        'Onboard entertainment and activities',
        'Port fees and taxes',
        'Shore excursions in each port'
      ],
      priceExcludes: [
        'International airfare',
        'Visa fees',
        'Alcoholic beverages',
        'Spa treatments',
        'Travel insurance'
      ]
    },
    {
      id: 2,
      name: 'Far East Discovery',
      location: 'East Asia',
      description: 'Experience the perfect blend of modern cities and traditional cultures across East Asia. From the neon lights of Tokyo to the historic streets of Beijing.',
      price: 2499,
      duration: '12 Nights',
      groupSize: '2-12 People',
      rating: 4.8,
      reviewCount: 312,
      images: [
        '/img/places/tokyo.png',
        '/img/places/hongkong.png',
        '/img/places/Riceterraces.png',
      ],
      highlights: [
        'Experience modern and traditional Japan',
        'Explore vibrant Hong Kong',
        'Discover the beauty of Taiwan',
        'Visit historic sites in China',
        'Enjoy diverse Asian cuisines'
      ],
      itinerary: [
        { title: 'Day 1: Tokyo', description: 'Embark in Tokyo and explore the city.' },
        { title: 'Day 2: At Sea', description: 'Enjoy the ship\'s amenities.' },
        { title: 'Day 3: Osaka', description: 'Visit Osaka Castle and Dotonbori.' },
        { title: 'Day 4: Hiroshima', description: 'Peace Memorial Park and Museum.' },
        { title: 'Day 5: Busan', description: 'Explore South Korea\'s second-largest city.' },
        { title: 'Day 6: At Sea', description: 'Relax and enjoy onboard activities.' },
        { title: 'Day 7: Taipei', description: 'Visit Taipei 101 and night markets.' },
        { title: 'Day 8: Okinawa', description: 'Beautiful beaches and Ryukyu culture.' },
        { title: 'Day 9: At Sea', description: 'Enjoy the ship\'s facilities.' },
        { title: 'Day 10: Hong Kong', description: 'Victoria Peak and Star Ferry.' },
        { title: 'Day 11: Xiamen', description: 'Explore Gulangyu Island.' },
        { title: 'Day 12: Shanghai', description: 'The Bund and Yu Garden.' },
        { title: 'Day 13: Disembarkation', description: 'Disembark in Shanghai.' }
      ],
      priceIncludes: [
        '12 nights accommodation in a luxury stateroom',
        'All meals and non-alcoholic beverages',
        'Onboard entertainment',
        'Port fees and taxes',
        'Guided shore excursions'
      ],
      priceExcludes: [
        'International airfare',
        'Visa fees',
        'Alcoholic beverages',
        'Spa services',
        'Travel insurance'
      ]
    }
  ];

  return (
    <MainLayout title="Asian Cruises - Sole Explorer">
      <PageContainer className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Asian Cruises</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant cultures, ancient traditions, and modern wonders of Asia&apos;s most fascinating destinations.
          </p>
        </div>

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
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {cruise.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{cruise.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">${cruise.price}</span>
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
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose an Asian Cruise?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Diverse Cultures</h3>
              <p className="text-gray-600 mb-6">
                Asia is home to some of the world's most diverse cultures and ancient civilizations. 
                Experience the rich traditions, festivals, and customs that make each destination unique.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Culinary Delights</h3>
              <p className="text-gray-600">
                Savor the authentic flavors of Asia with our onboard dining options featuring regional specialties 
                and international cuisine prepared by world-class chefs. From street food to fine dining, every meal is an adventure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Modern & Ancient Wonders</h3>
              <p className="text-gray-600 mb-6">
                Marvel at the contrast between ancient temples and futuristic skylines. Visit UNESCO World Heritage sites, 
                traditional villages, and bustling metropolises - all in one unforgettable journey.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Time to Cruise</h3>
              <p className="text-gray-600">
                The best time for an Asian cruise is typically during the spring (March-May) and fall (September-November) 
                when the weather is pleasant and comfortable for exploration, with fewer crowds and better visibility.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {selectedPackage && (
        <TourPackageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          packageData={selectedPackage}
        />
      )}
    </MainLayout>
  );
};

export default AsianCruises;
