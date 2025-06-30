import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight, X, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';

const PopularDestinations = ({ onLoginClick }) => {
    // Add scroll-margin-top to account for fixed header
    useEffect(() => {
        const element = document.getElementById('popular-destinations');
        if (element) {
            element.style.scrollMarginTop = '100px';
        }
    }, []);
    
    const [activeTab, setActiveTab] = useState('beaches');
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (destination) => {
        setSelectedDestination(destination);
        setCurrentImageIndex(0); // Reset image index when opening modal
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleBookNow = (e) => {
        if (e) e.preventDefault();
        closeModal();
        if (onLoginClick) {
            onLoginClick('login');
        } else {
            // Fallback behavior if onLoginClick is not provided
            alert('Please log in to book this destination');
        }
    };
    
    const destinations = {
        beaches: [
            {
                id: 1,
                name: 'Boracay',
                location: 'Aklan, Philippines',
                image: '/img/places/boracay.png',
                rating: 4.9,
                reviews: 2456,
                price: 349,
                duration: '5D/4N',
                featured: true,
                description: 'Experience the world-famous white sand beaches and vibrant nightlife of Boracay Island. Perfect for beach lovers and water sports enthusiasts.'
            },
            {
                id: 2,
                name: 'El Nido',
                location: 'Palawan, Philippines',
                image: '/img/places/boracay.png',
                rating: 4.9,
                reviews: 2310,
                price: 429,
                duration: '6D/5N',
                featured: true,
                description: 'Discover the stunning lagoons, hidden beaches, and dramatic limestone cliffs of this tropical paradise.'
            },
            {
                id: 3,
                name: 'Panglao Island',
                location: 'Bohol, Philippines',
                image: '/img/places/shangrila.png',
                rating: 4.8,
                reviews: 1987,
                price: 379,
                duration: '5D/4N',
                description: 'Home to Alona Beach and some of the best diving spots in the country.'
            }
        ],
        mountains: [
            {
                id: 4,
                name: 'Banaue Rice Terraces',
                location: 'Ifugao, Philippines',
                image: '/img/places/Riceterraces.png',
                rating: 4.8,
                reviews: 1876,
                price: 299,
                duration: '4D/3N',
                featured: true,
                description: 'Explore the ancient rice terraces, a UNESCO World Heritage Site, and experience indigenous Ifugao culture.'
            },
            {
                id: 5,
                name: 'Mount Pulag',
                location: 'Benguet, Philippines',
                image: '/img/places/Riceterraces.png',
                rating: 4.7,
                reviews: 1567,
                price: 259,
                duration: '3D/2N',
                description: 'Trek to the summit for a breathtaking sea of clouds at sunrise.'
            },
            {
                id: 6,
                name: 'Sagada',
                location: 'Mountain Province, Philippines',
                image: '/img/places/boracay.png',
                rating: 4.7,
                reviews: 1345,
                price: 279,
                duration: '4D/3N',
                description: 'Explore hanging coffins, caves, and stunning mountain views in this peaceful highland town.'
            }
        ],
        resorts: [
            {
                id: 7,
                name: 'Shangri-La Mactan',
                location: 'Cebu, Philippines',
                image: '/img/places/shangrila.png',
                rating: 4.9,
                reviews: 1987,
                price: 599,
                duration: '5D/4N',
                featured: true,
                description: 'Indulge in luxury at this 5-star beachfront resort with world-class amenities and service.'
            },
            {
                id: 8,
                name: 'Amanpulo',
                location: 'Pamalican Island, Palawan',
                image: '/img/places/shangrila.png',
                rating: 5.0,
                reviews: 987,
                price: 1299,
                duration: '5D/4N',
                featured: true,
                description: 'An exclusive private island resort offering ultimate luxury and privacy in paradise.'
            },
            {
                id: 9,
                name: 'El Nido Resorts',
                location: 'Palawan, Philippines',
                image: '/img/places/boracay.png',
                rating: 4.8,
                reviews: 1765,
                price: 849,
                duration: '6D/5N',
                description: 'Eco-luxury resorts in the heart of Palawan\'s stunning archipelago.'
            }
        ],
        islands: [
            {
                id: 10,
                name: 'Siargao',
                location: 'Surigao del Norte, Philippines',
                image: '/img/places/boracay.png',
                rating: 4.8,
                reviews: 1987,
                price: 499,
                duration: '6D/5N',
                featured: true,
                description: 'Surfing capital of the Philippines with pristine beaches and laid-back island vibes.'
            },
            {
                id: 11,
                name: 'Coron',
                location: 'Palawan, Philippines',
                image: '/img/places/shangrila.png',
                rating: 4.9,
                reviews: 2103,
                price: 579,
                duration: '5D/4N',
                featured: true,
                description: 'World-class wreck diving and stunning limestone formations in crystal clear waters.'
            },
            {
                id: 12,
                name: 'Siquijor',
                location: 'Central Visayas, Philippines',
                image: '/img/places/Riceterraces.png',
                rating: 4.7,
                reviews: 1567,
                price: 429,
                duration: '5D/4N',
                description: 'Mystical island known for its pristine beaches, waterfalls, and healing traditions.'
            }
        ],
        cities: [
            {
                id: 13,
                name: 'Cebu City',
                location: 'Cebu, Philippines',
                image: '/img/places/shangrila.png',
                rating: 4.6,
                reviews: 2345,
                price: 349,
                duration: '4D/3N',
                featured: true,
                description: 'Vibrant city with rich history, modern amenities, and access to beautiful islands.'
            },
            {
                id: 14,
                name: 'Manila',
                location: 'Metro Manila, Philippines',
                image: '/img/places/boracay.png',
                rating: 4.3,
                reviews: 2876,
                price: 299,
                duration: '4D/3N',
                featured: true,
                description: 'The bustling capital city with a mix of historic sites and modern attractions.'
            },
            {
                id: 15,
                name: 'Davao City',
                location: 'Davao del Sur, Philippines',
                image: '/img/places/Riceterraces.png',
                rating: 4.5,
                reviews: 1876,
                price: 399,
                duration: '5D/4N',
                description: 'Gateway to Mount Apo and home to the Philippine Eagle, with a vibrant food scene.'
            }
        ]
    };

    return (
        <div id="popular-destinations" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our most sought-after destinations in the beautiful Philippines.
                    </p>
                </div>

                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {['beaches', 'mountains', 'resorts', 'islands', 'cities'].map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeTab === tab 
                                        ? 'bg-lime-600 text-white' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations[activeTab].map((destination, index) => (
                        <div key={destination.id} className="group relative">
                            <motion.div 
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Image with overlay */}
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={destination.images ? destination.images[0] : destination.image} 
                                        alt={destination.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    
                                    {/* Featured tag */}
                                    {destination.featured && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                Popular
                                            </span>
                                        </div>
                                    )}
                                    
                                    {/* Spots left */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {Math.floor(Math.random() * 5) + 1} spots left
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Card content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Location and rating */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className={`w-4 h-4 ${i < Math.floor(destination.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                                                />
                                            ))}
                                            <span className="text-gray-500 text-sm ml-2">{destination.rating} ({destination.reviews})</span>
                                        </div>
                                        <div className="text-sm text-gray-500 flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {destination.duration}
                                        </div>
                                    </div>
                                    
                                    {/* Title and location */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                                    <div className="flex items-center text-gray-500 text-sm mb-6">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {destination.location}
                                    </div>
                                    
                                    {/* Price and button */}
                                    <div className="mt-auto">
                                        <div className="flex items-end justify-between mb-4">
                                            <div>
                                                <p className="text-gray-500 text-sm">Starting from</p>
                                                <div className="flex items-baseline">
                                                    <span className="text-2xl font-bold text-gray-900">${destination.price}</span>
                                                    <span className="text-sm text-gray-500 ml-1">/person</span>
                                                </div>
                                            </div>
                                            {destination.discount && (
                                                <div className="text-right">
                                                    <span className="text-sm text-gray-400 line-through">${destination.discount}</span>
                                                    <span className="block text-lime-600 text-sm font-medium">
                                                        Save ${destination.discount - destination.price}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <Button 
                                            className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white group text-sm h-11 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                                            onClick={() => openModal(destination)}
                                        >
                                            <span>View Details</span>
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                            
                            {/* Price with discount - removed as per new design */}
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <Button 
                        variant="outline" 
                        className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-3 h-auto group text-base font-medium rounded-lg transition-all duration-300 hover:shadow-md"
                    >
                        View All Destinations
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                        className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 h-auto text-base font-medium rounded-lg transition-all duration-300 hover:shadow-md"
                    >
                        Special Packages
                    </Button>
                    <Button 
                        variant="outline" 
                        className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 h-auto text-base font-medium rounded-lg transition-all duration-300 hover:shadow-md"
                    >
                        Family Getaways
                    </Button>
                </div>
            </div>

            {/* Destination Details Modal */}
            {isModalOpen && selectedDestination && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
                    <motion.div 
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Gallery */}
                        <div className="relative h-[28rem] bg-gray-100 overflow-hidden">
                            <div 
                                className="absolute inset-0 flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {(selectedDestination.images || [selectedDestination.image]).map((img, idx) => (
                                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                                        <img
                                            src={img}
                                            alt={`${selectedDestination.name} ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = '/img/placeholder.jpg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Navigation Arrows */}
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const images = selectedDestination.images || [selectedDestination.image];
                                    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all duration-300 hover:scale-110"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const images = selectedDestination.images || [selectedDestination.image];
                                    setCurrentImageIndex((prev) => (prev + 1) % images.length);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all duration-300 hover:scale-110"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            {/* Dots Indicator */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                                {(selectedDestination.images || [selectedDestination.image]).map((_, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            setCurrentImageIndex(idx);
                                        }}
                                        className={`h-2 w-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70 w-2'}`}
                                        aria-label={`View image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="overflow-y-auto flex-1">
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="mb-6">
                                            <span className="inline-block bg-lime-100 text-lime-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                                                {activeTab === 'beaches' ? 'Beach Getaway' : 'Mountain Retreat'}
                                            </span>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-3">{selectedDestination.name}</h3>
                                            <div className="flex items-center text-gray-600 mb-6">
                                                <MapPin className="w-5 h-5 mr-2 text-lime-600" />
                                                <span className="text-lg">{selectedDestination.location}</span>
                                            </div>
                                            
                                            <div className="mb-8">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-4">About This Destination</h4>
                                                <p className="text-gray-600 leading-relaxed">{selectedDestination.description}</p>
                                            </div>
                                            
                                            {(selectedDestination.highlights || []).length > 0 && (
                                                <div className="mb-8">
                                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {selectedDestination.highlights.map((highlight, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <svg className="h-5 w-5 text-lime-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            
                                            {(selectedDestination.included || []).length > 0 && (
                                                <div>
                                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {selectedDestination.included.map((item, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <svg className="h-5 w-5 text-lime-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="lg:w-80 flex-shrink-0">
                                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 sticky top-6">
                                            <div className="mb-6">
                                                <div className="flex items-baseline justify-between mb-2">
                                                    <span className="text-gray-500">Starting from</span>
                                                    <div className="flex items-baseline">
                                                        <span className="text-2xl font-bold text-gray-900">${selectedDestination.price}</span>
                                                        <span className="text-gray-500 ml-1">/person</span>
                                                    </div>
                                                </div>
                                                {selectedDestination.discount && (
                                                    <div className="text-right">
                                                        <span className="text-sm text-gray-400 line-through">${selectedDestination.discount}</span>
                                                        <span className="block text-lime-600 text-sm font-medium">
                                                            Save ${selectedDestination.discount - selectedDestination.price}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="space-y-4 mb-6">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">Duration</span>
                                                    <span className="font-medium text-gray-900">{selectedDestination.duration}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">Rating</span>
                                                    <div className="flex items-center">
                                                        <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                                                        <span className="font-medium text-gray-900">
                                                            {selectedDestination.rating} ({selectedDestination.reviews} reviews)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button 
                                                className="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white py-4 text-base font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                                onClick={handleBookNow}
                                            >
                                                Book Now
                                            </button>
                                            
                                            <p className="text-xs text-center text-gray-500 mt-3">
                                                No credit card required to book
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">
                                            <span className="line-through">${Math.round(selectedDestination.price * 1.25)}</span> 
                                            <span className="text-amber-600 ml-1">Save ${Math.round(selectedDestination.price * 0.25)}!</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default PopularDestinations;
