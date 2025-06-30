import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import TourPackageModal from '../../components/Tours/TourPackageModal';

const CaribbeanCruises = () => {
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
      <PageContainer className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Caribbean Cruises</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the crystal-clear waters, white sandy beaches, and vibrant cultures of the Caribbean islands.
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

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose a Caribbean Cruise?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Stunning Destinations</h3>
              <p className="text-gray-600 mb-6">
                The Caribbean is home to some of the world's most beautiful beaches and crystal-clear waters. 
                Each island offers its own unique charm, from the vibrant culture of Jamaica to the pristine 
                beaches of the Bahamas.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">All-Inclusive Experience</h3>
              <p className="text-gray-600">
                Our Caribbean cruises include everything you need for a perfect vacation. Enjoy gourmet dining, 
                world-class entertainment, and luxurious accommodations, all while visiting multiple destinations 
                without the hassle of packing and unpacking.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Activities for Everyone</h3>
              <p className="text-gray-600 mb-6">
                Whether you're looking for adventure or relaxation, our Caribbean cruises have something for everyone. 
                Go snorkeling in coral reefs, explore historic sites, or simply relax on the deck with a tropical drink.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Best Time to Cruise</h3>
              <p className="text-gray-600">
                The best time for a Caribbean cruise is from December to April when the weather is warm and dry. 
                This is also the peak season, so be sure to book early to secure the best cabins and prices.
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

export default CaribbeanCruises;
