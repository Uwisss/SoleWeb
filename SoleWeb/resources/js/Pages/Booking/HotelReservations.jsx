import React, { useState, Fragment } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import { Dialog, Transition } from '@headlessui/react';
import { MapPin, Calendar, Users, Search, Star, Wifi, Coffee, WashingMachine, ParkingCircle, Dumbbell, Waves, Utensils, X, Check, ChevronRight } from 'lucide-react';

const HotelReservations = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedStars, setSelectedStars] = useState([3, 4, 5]);
  const [selectedAmenities, setSelectedAmenities] = useState(['wifi', 'pool']);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    setSelectedImage(hotel.image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedHotel(null), 300);
  };

  const amenities = [
    { id: 'wifi', name: 'Free WiFi', icon: <Wifi className="w-5 h-5" /> },
    { id: 'breakfast', name: 'Breakfast', icon: <Coffee className="w-5 h-5" /> },
    { id: 'pool', name: 'Swimming Pool', icon: <Waves className="w-5 h-5" /> },
    { id: 'parking', name: 'Free Parking', icon: <ParkingCircle className="w-5 h-5" /> },
    { id: 'gym', name: 'Gym', icon: <Dumbbell className="w-5 h-5" /> },
    { id: 'restaurant', name: 'Restaurant', icon: <Utensils className="w-5 h-5" /> },
    { id: 'laundry', name: 'Laundry', icon: <WashingMachine className="w-5 h-5" /> },
  ];

  const hotels = [
    {
      id: 1,
      name: 'Luxury Bayview Hotel',
      location: 'Manila, Philippines',
      price: 150,
      rating: 4.7,
      reviewCount: 1248,
      stars: 5,
      image: '/img/places/Riceterraces.png',
      images: [
        '/img/hotels/hotel1-1.jpg',
        '/img/hotels/hotel1-2.jpg',
        '/img/hotels/hotel1-3.jpg',
      ],
      description: 'Experience luxury at its finest in the heart of Manila. Our 5-star hotel offers stunning city views, world-class dining, and exceptional service. Perfect for both business and leisure travelers.',
      amenities: ['wifi', 'breakfast', 'pool', 'gym', 'restaurant', 'laundry'],
      roomType: 'Deluxe City View',
      maxGuests: 2,
      roomFeatures: [
        '1 King Bed',
        'City View',
        '32" Flat-screen TV',
        'Air Conditioning',
        'Free WiFi',
        'Minibar',
        'Coffee/Tea Maker',
        'Safe',
        'Work Desk',
        '24-hour Room Service'
      ]
    },
    {
      id: 2,
      name: 'Sunset Beach Resort',
      location: 'Boracay, Philippines',
      price: 220,
      rating: 4.8,
      reviewCount: 892,
      stars: 5,
      image: '/img/places/boracay.png',
      images: [
        '/img/hotels/hotel2-1.jpg',
        '/img/hotels/hotel2-2.jpg',
        '/img/hotels/hotel2-3.jpg',
      ],
      description: 'Wake up to the sound of waves at our beachfront resort in Boracay. Enjoy direct beach access, an infinity pool overlooking the ocean, and a variety of water sports activities right at your doorstep.',
      amenities: ['wifi', 'breakfast', 'pool', 'beach', 'restaurant', 'laundry'],
      roomType: 'Beachfront Villa',
      maxGuests: 4,
      roomFeatures: [
        '1 King Bed & 2 Single Beds',
        'Ocean View',
        'Private Balcony',
        'Air Conditioning',
        'Free WiFi',
        'Minibar',
        'Coffee/Tea Maker',
        'Safe',
        'Flat-screen TV',
        'Private Bathroom with Bathtub'
      ]
    },
    {
      id: 3,
      name: 'City Central Hotel',
      location: 'Cebu City, Philippines',
      price: 95,
      rating: 4.3,
      reviewCount: 756,
      stars: 4,
      image: '/img/places/shangrila.png',
      images: [
        '/img/hotels/hotel3-1.jpg',
        '/img/hotels/hotel3-2.jpg',
        '/img/hotels/hotel3-3.jpg',
      ],
      description: 'Located in the heart of Cebu City, our hotel offers modern comfort with easy access to business districts and tourist attractions. Enjoy our rooftop bar with panoramic city views.',
      amenities: ['wifi', 'gym', 'restaurant', 'laundry', 'parking'],
      roomType: 'Superior Room',
      maxGuests: 2,
      roomFeatures: [
        '1 Queen Bed',
        'City View',
        '32" Flat-screen TV',
        'Air Conditioning',
        'Free WiFi',
        'Work Desk',
        'Coffee/Tea Maker',
        'Safe',
        '24-hour Room Service'
      ]
    },
    {
      id: 4,
      name: 'Mountain View Lodge',
      location: 'Baguio, Philippines',
      price: 75,
      rating: 4.5,
      reviewCount: 543,
      stars: 3,
      image: '/img/places/korea.png',
      images: [
        '/img/hotels/hotel4-1.jpg',
        '/img/hotels/hotel4-2.jpg',
        '/img/hotels/hotel4-3.jpg',
      ],
      description: 'Escape to the cool climate of Baguio and enjoy the breathtaking mountain views from our cozy lodge. Perfect for nature lovers and those seeking a peaceful retreat.',
      amenities: ['wifi', 'breakfast', 'parking', 'restaurant'],
      roomType: 'Mountain View Room',
      maxGuests: 3,
      roomFeatures: [
        '1 Queen Bed & 1 Single Bed',
        'Mountain View',
        'Flat-screen TV',
        'Heating',
        'Free WiFi',
        'Coffee/Tea Maker',
        'Private Bathroom',
        'Balcony'
      ]
    },
  ];

  const toggleStar = (star) => {
    if (selectedStars.includes(star)) {
      setSelectedStars(selectedStars.filter(s => s !== star));
    } else {
      setSelectedStars([...selectedStars, star]);
    }
  };

  const toggleAmenity = (amenityId) => {
    if (selectedAmenities.includes(amenityId)) {
      setSelectedAmenities(selectedAmenities.filter(id => id !== amenityId));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityId]);
    }
  };

  const filteredHotels = hotels.filter(hotel => 
    selectedStars.includes(hotel.stars) &&
    selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
  );

  return (
    <MainLayout title="Hotel Reservations - Sole Explorer">
      <div className="min-h-screen bg-gray-50">
        {/* Hotel Details Modal */}
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    {selectedHotel && (
                      <>
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                          <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                            {selectedHotel.name}
                          </Dialog.Title>
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={closeModal}
                          >
                            <span className="sr-only">Close</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Main Content */}
                        <div className="max-h-[80vh] overflow-y-auto">
                          {/* Image Gallery */}
                          <div className="bg-gray-100">
                            <div className="h-96 w-full">
                              <img
                                src={selectedImage}
                                alt={selectedHotel.name}
                                className="h-full w-full object-cover object-center"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = '/img/placeholder-hotel.jpg';
                                }}
                              />
                            </div>
                            <div className="flex p-4 space-x-2 overflow-x-auto">
                              {[selectedHotel.image, ...(selectedHotel.images || [])].map((img, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setSelectedImage(img)}
                                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${selectedImage === img ? 'ring-2 ring-teal-500' : ''}`}
                                >
                                  <img
                                    src={img}
                                    alt={`${selectedHotel.name} ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = '/img/placeholder-hotel.jpg';
                                    }}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-8">
                              {/* Main Content */}
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedHotel.name}</h2>
                                    <div className="mt-1 flex items-center text-gray-600">
                                      <MapPin className="h-5 w-5 mr-1 text-teal-500" />
                                      <span>{selectedHotel.location}</span>
                                    </div>
                                  </div>
                                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full font-semibold text-lg">
                                    ${selectedHotel.price?.toLocaleString()} <span className="text-sm font-normal">/ night</span>
                                  </div>
                                </div>

                                {/* Rating */}
                                <div className="mt-4 flex items-center">
                                  <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-5 w-5 ${star <= selectedHotel.stars ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                                        aria-hidden="true"
                                      />
                                    ))}
                                  </div>
                                  <p className="ml-2 text-sm text-gray-600">
                                    {selectedHotel.rating} ({selectedHotel.reviewCount} reviews)
                                  </p>
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                  <h3 className="text-lg font-semibold text-gray-900">About This Hotel</h3>
                                  <p className="mt-2 text-gray-600">
                                    {selectedHotel.description || 'Experience luxury and comfort at its finest. Our hotel offers world-class amenities and exceptional service to make your stay memorable.'}
                                  </p>
                                </div>

                                {/* Room Features */}
                                {selectedHotel.roomFeatures && (
                                  <div className="mt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Features</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {selectedHotel.roomFeatures.map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                          <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                          <span className="text-gray-700">{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Amenities */}
                                <div className="mt-6">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Hotel Amenities</h3>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {selectedHotel.amenities.map((amenityId, idx) => {
                                      const amenity = amenities.find(a => a.id === amenityId);
                                      return amenity ? (
                                        <div key={idx} className="flex items-center">
                                          <div className="bg-teal-50 p-2 rounded-lg mr-3">
                                            {React.cloneElement(amenity.icon, { className: 'w-5 h-5 text-teal-600' })}
                                          </div>
                                          <span className="text-gray-700">{amenity.name}</span>
                                        </div>
                                      ) : null;
                                    })}
                                  </div>
                                </div>
                              </div>

                              {/* Booking Sidebar */}
                              <div className="md:w-96 flex-shrink-0">
                                <div className="bg-gray-50 p-6 rounded-xl sticky top-4">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Booking Details</h3>
                                  
                                  <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                                      <div className="flex items-start">
                                        <div className="flex-1">
                                          <h4 className="font-medium text-gray-900">{selectedHotel.roomType || 'Deluxe Room'}</h4>
                                          <div className="flex items-center text-sm text-gray-500 mt-1">
                                            <Users className="w-4 h-4 mr-1" />
                                            <span>Up to {selectedHotel.maxGuests || 2} guests</span>
                                          </div>
                                        </div>
                                        <div className="text-right">
                                          <p className="text-lg font-semibold text-gray-900">${selectedHotel.price?.toLocaleString()}</p>
                                          <p className="text-sm text-gray-500">per night</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="space-y-3">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Check-in</span>
                                        <span className="font-medium text-gray-900">
                                          {checkInDate || 'Select date'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Check-out</span>
                                        <span className="font-medium text-gray-900">
                                          {checkOutDate || 'Select date'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Guests</span>
                                        <span className="font-medium text-gray-900">
                                          {guests} {guests === 1 ? 'guest' : 'guests'}
                                        </span>
                                      </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                      <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">3 nights x ${selectedHotel.price?.toLocaleString()}</span>
                                        <span className="font-medium text-gray-900">${(selectedHotel.price * 3)?.toLocaleString()}</span>
                                      </div>
                                      <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t border-gray-200">
                                        <span>Total</span>
                                        <span className="text-gray-900">${(selectedHotel.price * 3)?.toLocaleString()}</span>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                                    >
                                      Book Now
                                      <ChevronRight className="w-5 h-5 ml-2" />
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-3">
                                      No credit card required to book
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* Main Content */}
        <PageContainer>
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-teal-700 to-blue-800 text-white py-20">
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hotel Reservations</h1>
              <p className="text-xl max-w-2xl">Find and book the perfect hotel for your next trip</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="container mx-auto px-4 -mt-10 relative z-20">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {/* Search Form Fields */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="City or Hotel Name" 
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-500 text-sm"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="appearance-none w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center">
                <Search className="mr-2" size={18} />
                Search Hotels
              </button>
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="container mx-auto px-4 mt-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters */}
              <div className="w-full md:w-1/4">
                <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Filters</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Star Rating</h4>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map(star => (
                        <label key={star} className="flex items-center">
                          <input 
                            type="checkbox" 
                            checked={selectedStars.includes(star)}
                            onChange={() => {
                              if (selectedStars.includes(star)) {
                                setSelectedStars(selectedStars.filter(s => s !== star));
                              } else {
                                setSelectedStars([...selectedStars, star]);
                              }
                            }}
                            className="rounded text-teal-600 focus:ring-teal-500"
                          />
                          <span className="ml-2 text-gray-900">
                            {Array(star).fill(0).map((_, i) => (
                              <Star key={i} className="w-4 h-4 inline fill-current text-yellow-400" />
                            ))}
                            {star < 5 && Array(5 - star).fill(0).map((_, i) => (
                              <Star key={i} className="w-4 h-4 inline text-gray-300" />
                            ))}
                            {star === 5 && ' 5 Stars'}
                            {star === 4 && ' 4 Stars'}
                            {star === 3 && ' 3 Stars'}
                            {star === 2 && ' 2 Stars'}
                            {star === 1 && ' 1 Star'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Amenities</h4>
                    <div className="space-y-2">
                      {amenities.map(amenity => (
                        <label key={amenity.id} className="flex items-center">
                          <input 
                            type="checkbox" 
                            checked={selectedAmenities.includes(amenity.id)}
                            onChange={() => {
                              if (selectedAmenities.includes(amenity.id)) {
                                setSelectedAmenities(selectedAmenities.filter(id => id !== amenity.id));
                              } else {
                                setSelectedAmenities([...selectedAmenities, amenity.id]);
                              }
                            }}
                            className="rounded text-teal-600 focus:ring-teal-500"
                          />
                          <span className="ml-2 text-gray-900 flex items-center">
                            <span className="mr-2 text-gray-500">{amenity.icon}</span>
                            {amenity.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hotel List */}
              <div className="w-full md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {hotels.length} {hotels.length === 1 ? 'Hotel' : 'Hotels'} Available
                  </h2>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-2 font-medium">Sort by:</span>
                    <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-teal-500 focus:border-teal-500 text-gray-900 bg-white">
                      <option>Recommended</option>
                      <option>Price (low to high)</option>
                      <option>Price (high to low)</option>
                      <option>Star Rating</option>
                      <option>Guest Rating</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {hotels.map(hotel => (
                    <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/img/placeholder-hotel.jpg';
                          }}
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{hotel.location}</span>
                            </div>
                            <div className="mt-2">
                              {Array(hotel.stars).fill(0).map((_, i) => (
                                <Star key={i} className="w-4 h-4 inline fill-current text-yellow-400" />
                              ))}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {hotel.amenities.slice(0, 3).map(amenityId => {
                                const amenity = amenities.find(a => a.id === amenityId);
                                return amenity ? (
                                  <span key={amenityId} className="flex items-center text-sm text-gray-700 bg-gray-50 px-2 py-1 rounded">
                                    <span className="text-gray-600 mr-1">{amenity.icon}</span>
                                    {amenity.name}
                                  </span>
                                ) : null;
                              })}
                              {hotel.amenities.length > 3 && (
                                <span className="text-sm text-gray-500">+{hotel.amenities.length - 3} more</span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">${hotel.price}</div>
                            <div className="text-sm text-gray-500">per night</div>
                            <div className="mt-2 flex items-center justify-end">
                              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center">
                                {hotel.rating}
                                <Star className="w-3 h-3 ml-0.5 fill-current" />
                              </span>
                              <span className="text-sm text-gray-500 ml-1">({hotel.reviewCount})</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <button 
                            onClick={() => openModal(hotel)}
                            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                          >
                            View Deal
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </MainLayout>
  );
};

export default HotelReservations;
