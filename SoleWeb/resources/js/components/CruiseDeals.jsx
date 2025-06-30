import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import AuthModal from './Layout/AuthModal';

const CruiseDeals = () => {
  // Add scroll-margin-top to account for fixed header
  useEffect(() => {
    const element = document.getElementById('cruise-deals');
    if (element) {
      element.style.scrollMarginTop = '100px';
    }
  }, []);
  
  // Rest of the component
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cruises = [
    {
      id: 1,
      title: 'Ultimate Palawan Explorer',
      destination: 'Coron, El Nido, Puerto Princesa',
      duration: '7 Days / 6 Nights',
      departure: 'Every Monday',
      price: 1499,
      discount: 1899,
      images: [
        '/img/places/boracay.png',
        '/img/places/shangrila.png',
        '/img/places/Riceterraces.png'
      ],
      description: 'Experience the breathtaking beauty of Palawan with our exclusive island-hopping cruise. Visit stunning lagoons, hidden beaches, and world-class diving spots in the most luxurious way possible.',
      itinerary: [
        {
          title: 'Arrival in Coron',
          description: 'Welcome aboard! Settle into your luxury cabin and enjoy a welcome cocktail as we set sail through the stunning Coron Bay.'
        },
        {
          title: 'Kayangan Lake & Twin Lagoon',
          description: 'Explore the crystal-clear waters of Kayangan Lake and the enchanting Twin Lagoons, accessible only by small boats.'
        },
        {
          title: 'Barracuda Lake & Skeleton Wreck',
          description: 'Dive or snorkel in the unique thermocline waters of Barracuda Lake and explore the WWII Japanese shipwreck.'
        },
        {
          title: 'Island Hopping in El Nido',
          description: 'Discover the hidden beaches and secret lagoons of the Bacuit Archipelago, including the famous Small and Big Lagoons.'
        },
        {
          title: 'Underground River Adventure',
          description: 'Take a guided tour of the Puerto Princesa Underground River, a UNESCO World Heritage Site and one of the New 7 Wonders of Nature.'
        },
        {
          title: 'Private Island Retreat',
          description: 'Spend the day on your own private island with a personal butler, enjoying water sports, spa treatments, and a gourmet beach barbecue.'
        },
        {
          title: 'Farewell Brunch & Departure',
          description: 'Enjoy a farewell brunch before disembarking with memories to last a lifetime.'
        }
      ],
      inclusions: [
        '6 nights in luxury ocean-view cabin',
        'Gourmet meals and premium beverages',
        'Private guided island tours',
        'Snorkeling and scuba equipment',
        'Helicopter transfer to private islands',
        'Unlimited spa treatments',
        'Personal butler service',
        'All port fees and taxes'
      ],
      highlights: [
        'Exclusive private beach dining experience',
        'Sunset yacht party at Lagen Island',
        'Helicopter tour over the Underground River',
        'Private diving at Barracuda Lake',
        'Gourmet beach barbecue under the stars'
      ]
    },
    {
      id: 2,
      title: 'Pearl of the Visayas Luxury Cruise',
      destination: 'Cebu, Bohol, Siquijor, Dumaguete',
      duration: '8 Days / 7 Nights',
      departure: 'First Saturday of each month',
      price: 2199,
      discount: 2599,
      images: [
        '/img/places/shangrila.png',
        '/img/places/boracay.png',
        '/img/places/Riceterraces.png'
      ],
      description: 'An exclusive journey through the heart of the Visayas, combining luxury, adventure, and cultural immersion in one unforgettable voyage.',
      itinerary: [
        {
          title: 'Cebu Arrival',
          description: 'Embark in Cebu City and enjoy a welcome reception with traditional Filipino entertainment.'
        },
        {
          title: 'Whale Shark Encounter',
          description: 'Swim with gentle whale sharks in Oslob, followed by a visit to Tumalog Falls.'
        },
        {
          title: 'Bohol Adventure',
          description: 'Explore the Chocolate Hills and meet the adorable tarsiers at the sanctuary.'
        },
        {
          title: 'Panglao Island',
          description: 'Relax on Alona Beach and enjoy world-class diving or snorkeling.'
        },
        {
          title: 'Siquijor Mystique',
          description: 'Discover the mystical island known for its healing traditions and unspoiled beaches.'
        },
        {
          title: 'Apo Island Marine Sanctuary',
          description: 'Snorkel in the protected waters with sea turtles and vibrant coral reefs.'
        },
        {
          title: 'Dumaguete City Tour',
          description: 'Explore the City of Gentle People and enjoy a farewell dinner with cultural performances.'
        },
        {
          title: 'Departure',
          description: 'Disembark with unforgettable memories of the Visayas.'
        }
      ],
      inclusions: [
        '7 nights in premium suite with balcony',
        'All gourmet meals and premium beverages',
        'Private guided excursions at each port',
        'Scuba diving with whale sharks',
        'Chartered flights between islands',
        'Personal concierge service',
        'Unlimited spa treatments',
        'All transfers and port fees'
      ],
      highlights: [
        'Swim with gentle whale sharks in Oslob',
        'Private dinner at the Chocolate Hills',
        'Sunset cocktails at Apo Island',
        'Cultural show with local tribes',
        'Helicopter tour of Siquijor'
      ]
    },
    {
      id: 3,
      title: 'Northern Paradise Expedition',
      destination: 'Batanes, Calayan, Palaui',
      duration: '6 Days / 5 Nights',
      departure: 'Twice monthly',
      price: 1799,
      discount: 2099,
      images: [
        '/img/places/Riceterraces.png',
        '/img/places/boracay.png',
        '/img/places/shangrila.png'
      ],
      description: 'Discover the unspoiled beauty of Northern Philippines on this exclusive expedition to some of the most remote and breathtaking islands in the country.',
      itinerary: [
        {
          title: 'Manila to Basco',
          description: 'Fly to Basco and transfer to your luxury expedition vessel.'
        },
        {
          title: 'Batan Island Exploration',
          description: 'Visit the iconic stone houses and rolling hills of Batan Island.'
        },
        {
          title: 'Sabtang Island',
          description: 'Step back in time in this UNESCO-listed island with well-preserved Ivatan culture.'
        },
        {
          title: 'Calayan Island',
          description: 'Explore the pristine beaches and limestone cliffs of this remote paradise.'
        },
        {
          title: 'Palaui Island',
          description: 'Hike to Cape Engaño Lighthouse for panoramic views of the Pacific.'
        },
        {
          title: 'Return to Manila',
          description: 'Disembark with memories of the Philippines\' last frontier.'
        }
      ],
      inclusions: [
        '5 nights in premium cabin with window',
        'All meals and selected beverages',
        'Guided cultural tours',
        'Snorkeling and kayaking equipment',
        'Internal flights',
        'All transfers and port fees',
        'Travel insurance',
        'Expedition guide'
      ],
      highlights: [
        'Visit the iconic Batanes stone houses',
        'Explore the untouched beauty of Calayan',
        'Snorkel in Palaui Island',
        'Cultural immersion with Ivatan communities',
        'Photography tour of dramatic landscapes'
      ]
    },
    {
      id: 4,
      title: 'Southern Philippines Explorer',
      destination: 'Siargao, Camiguin, Zamboanga',
      duration: '7 Days / 6 Nights',
      departure: 'Twice monthly',
      price: 1999,
      discount: 2399,
      images: [
        '/img/places/boracay.png',
        '/img/places/shangrila.png',
        '/img/places/Riceterraces.png'
      ],
      description: 'A luxurious journey through the southern islands, featuring world-class diving, white sand beaches, and rich cultural experiences.',
      itinerary: [
        {
          title: 'Siargao Arrival',
          description: 'Arrive in the surfing capital and check into your beachfront resort.'
        },
        {
          title: 'Island Hopping',
          description: 'Explore the lagoons and sandbars of Daku, Guyam, and Naked Islands.'
        },
        {
          title: 'Surfing & Relaxation',
          description: 'Take a surfing lesson at Cloud 9 or relax at your resort.'
        },
        {
          title: 'Camiguin Adventure',
          description: 'Visit the Sunken Cemetery and Katibawasan Falls.'
        },
        {
          title: 'Zamboanga City Tour',
          description: 'Explore the vibrant culture and history of Zamboanga City.'
        },
        {
          title: 'Great Santa Cruz Island',
          description: 'Relax on the famous pink sand beach and enjoy water activities.'
        },
        {
          title: 'Departure',
          description: 'Bid farewell to the southern islands with unforgettable memories.'
        }
      ],
      inclusions: [
        '6 nights in premium ocean-view cabin',
        'All meals and premium beverages',
        'Scuba diving (3 dives included)',
        'Island-hopping tours',
        'Spa treatment package',
        'All transfers and port fees',
        'Travel insurance',
        'Personal dive guide'
      ],
      highlights: [
        'Dive at the famous Cloud 9 surf break',
        'Hot springs of Camiguin',
        'Pink sand beach of Great Sta. Cruz',
        'Cultural show in Zamboanga',
        'Private island picnic'
      ]
    },
    {
      id: 5,
      title: 'Tropical Paradise Escape',
      destination: 'Boracay, Romblon, Caramoan',
      duration: '6 Days / 5 Nights',
      departure: 'Every Friday',
      price: 1699,
      discount: 1999,
      images: [
        '/img/places/boracay.png',
        '/img/places/Riceterraces.png',
        '/img/places/shangrila.png'
      ],
      description: 'Experience the perfect blend of relaxation and adventure as you explore some of the most beautiful islands in the Philippines, featuring powdery white sand beaches and crystal-clear waters.',
      itinerary: [
        {
          title: 'Arrival in Boracay',
          description: 'Welcome to the world-famous White Beach. Check into your beachfront villa and enjoy a sunset welcome cocktail.'
        },
        {
          title: 'Island Hopping',
          description: 'Explore the stunning beaches and snorkeling spots around Boracay, including Puka Beach and Crocodile Island.'
        },
        {
          title: 'Romblon Discovery',
          description: 'Sail to Romblon and visit Bonbon Beach, known for its long stretch of white sand and crystal-clear waters.'
        },
        {
          title: 'Caramoan Adventure',
          description: 'Discover the hidden lagoons and pristine beaches that made Caramoan famous as a Survivor series location.'
        },
        {
          title: 'Relaxation Day',
          description: 'Enjoy a day of pampering at the spa or try water sports like kayaking and stand-up paddleboarding.'
        },
        {
          title: 'Farewell Brunch',
          description: 'Enjoy a final gourmet meal before disembarking with memories to last a lifetime.'
        }
      ],
      inclusions: [
        '5 nights in deluxe ocean-view cabin',
        'All meals and selected beverages',
        'Island-hopping tours',
        'Snorkeling equipment',
        'Airport transfers',
        'Welcome cocktail and farewell dinner',
        'All port fees and taxes',
        'Onboard entertainment'
      ],
      highlights: [
        'White Beach sunset cocktails',
        'Private beach picnic in Romblon',
        'Kayaking through hidden lagoons',
        'Beachfront barbecue dinner',
        'Guided photography tour'
      ]
    },
    {
      id: 6,
      title: 'Luxury Yacht Experience',
      destination: 'Coron, Apo Reef, Busuanga',
      duration: '5 Days / 4 Nights',
      departure: 'Every other Monday',
      price: 2499,
      discount: 2899,
      images: [
        '/img/places/shangrila.png',
        '/img/places/boracay.png',
        '/img/places/Riceterraces.png'
      ],
      description: 'Indulge in the ultimate luxury yacht experience as you sail through the pristine waters of northern Palawan, featuring world-class diving and exclusive island retreats.',
      itinerary: [
        {
          title: 'Coron Arrival',
          description: 'Board your luxury yacht and set sail through the stunning Coron Bay. Enjoy a welcome dinner under the stars.'
        },
        {
          title: 'Wreck Diving',
          description: 'Dive the famous Japanese shipwrecks of Coron Bay, including the Irako and Okikawa Maru.'
        },
        {
          title: 'Apo Reef Adventure',
          description: 'Explore the UNESCO-listed Apo Reef Natural Park, the second largest contiguous coral reef in the world.'
        },
        {
          title: 'Private Island Retreat',
          description: 'Spend the day on your own private island with a personal chef and butler service.'
        },
        {
          title: 'Farewell Brunch',
          description: 'Enjoy a final gourmet meal before disembarking with memories to last a lifetime.'
        }
      ],
      inclusions: [
        '4 nights in luxury yacht suite',
        'Gourmet meals and premium beverages',
        'Unlimited diving (for certified divers)',
        'Personal butler service',
        'Helicopter transfers',
        'Spa treatments',
        'All water sports equipment',
        'Travel insurance'
      ],
      highlights: [
        'Private sunset yacht cruise',
        'Helicopter tour of the islands',
        'Gourmet beach picnic',
        'Night diving experience',
        'Private butler service 24/7'
      ]
    }
  ];

  const openModal = (cruise) => {
    setSelectedCruise(cruise);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedCruise.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedCruise.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="cruise-deals" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Dream Cruise
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Embark on a journey of luxury and discovery to the most breathtaking destinations. Our curated selection of premium cruises offers unparalleled experiences on the crystal-clear waters of the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cruises.map((cruise) => (
            <motion.div 
              key={cruise.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cruise.images[0]}
                  alt={cruise.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-xl mb-1">{cruise.title}</h3>
                  <div className="flex items-center text-white/90">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{cruise.destination}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {Math.floor(Math.random() * 5) + 1} spots left
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-2">5.0 (24)</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {cruise.duration}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Starting from</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-gray-900">${cruise.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/person</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400 line-through">${cruise.discount}</span>
                      <span className="block text-lime-600 text-sm font-medium">
                        Save ${cruise.discount - cruise.price}
                      </span>
                    </div>
                  </div>
                
                  <Button 
                    className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white group text-sm h-11 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    onClick={() => openModal(cruise)}
                  >
                    <span>View Cruise Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedCruise && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
                
                {/* Image Gallery */}
                <div className="relative h-[28rem] bg-gray-100 overflow-hidden">
                  <div 
                    className="absolute inset-0 flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {selectedCruise.images.map((img, idx) => (
                      <div key={idx} className="w-full h-full flex-shrink-0 relative">
                        <img
                          src={img}
                          alt={`${selectedCruise.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                    {selectedCruise.images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setCurrentImageIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'w-8 bg-white' : 'w-3 bg-white/50 hover:bg-white/70'}`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-1">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Main Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCruise.title}</h3>
                      <div className="flex items-center text-gray-600 mb-6">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{selectedCruise.destination}</span>
                      </div>
                      
                      {/* Duration and Departure */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-lime-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Duration</p>
                            <p className="text-gray-600">{selectedCruise.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-lime-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Next Departure</p>
                            <p className="text-gray-600">{selectedCruise.departure}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* About Section */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">About This Cruise</h4>
                        <p className="text-gray-600 mb-4">{selectedCruise.description}</p>
                      </div>
                      
                      {/* Itinerary Highlights */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Itinerary Highlights</h4>
                        <div className="space-y-4">
                          {selectedCruise.itinerary && selectedCruise.itinerary.map((day, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                              <div className="font-medium text-gray-900">Day {idx + 1}: {day.title}</div>
                              <p className="text-gray-600 text-sm mt-1">{day.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* What's Included */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedCruise.inclusions.map((inclusion, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-lime-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{inclusion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Trip Highlights */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Trip Highlights</h4>
                        <ul className="space-y-2">
                          {selectedCruise.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-5 w-5 text-lime-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Right Column - Booking Form */}
                    <div className="lg:w-96 flex-shrink-0">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-8">
                        <div className="space-y-4">
                          {/* Price */}
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Starting from</p>
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold text-gray-900">${selectedCruise.price}</span>
                              <span className="text-sm text-gray-500 ml-1">/person</span>
                            </div>
                            {selectedCruise.discount && (
                              <p className="text-sm text-gray-400 line-through">${selectedCruise.discount}</p>
                            )}
                          </div>
                          
                          {/* Duration */}
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-sm text-gray-500 mb-1">Duration</p>
                            <p className="text-gray-900 font-medium">{selectedCruise.duration}</p>
                          </div>
                          
                          {/* Rating */}
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-sm text-gray-500 mb-1">Rating</p>
                            <div className="flex items-center">
                              <div className="flex items-center mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.floor(4.9) ? 'text-amber-400' : 'text-gray-300'}`} 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">4.9 (2,310 reviews)</span>
                            </div>
                          </div>
                          
                          {/* Book Now Button */}
                          <Button 
                            className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-2"
                            onClick={() => {
                              closeModal();
                              setIsAuthModalOpen(true);
                            }}
                          >
                            Book Now
                          </Button>
                          
                          <p className="text-xs text-center text-gray-500 mt-2">
                            No credit card required to book
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialTab="login"
      />
    </section>
  );
};

export default CruiseDeals;
