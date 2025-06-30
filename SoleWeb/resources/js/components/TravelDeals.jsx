import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { router } from '@inertiajs/react';

const TravelDeals = () => {
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (deal) => {
        setSelectedDeal(deal);
        setCurrentImageIndex(0);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setCurrentImageIndex(prev => 
            prev === selectedDeal.images.length - 1 ? 0 : prev + 1
        );
    };
    
    const prevImage = () => {
        setCurrentImageIndex(prev => 
            prev === 0 ? selectedDeal.images.length - 1 : prev - 1
        );
    };

    const handleBookNow = () => {
        // Simple redirect to payment page
        window.location.href = '/payment';
    };

    const deals = [
        {
            id: 1,
            title: 'Boracay Paradise Escape',
            location: 'Boracay, Philippines',
            duration: '5 Days / 4 Nights',
            price: 349,
            discount: 499,
            images: ['/img/places/boracay.png', '/img/places/shangrila.png', '/img/places/Riceterraces.png'],
            date: 'Jun 15 - Jun 20, 2023',
            rating: 4.9,
            reviews: 1567,
            highlights: [
                'White Beach with powdery white sand',
                'World-class diving and water sports',
                'Vibrant nightlife and dining',
                'Island hopping tours',
                'Sunset sailing'
            ]
        },
        {
            id: 2,
            title: 'Banaue Rice Terraces Adventure',
            location: 'Ifugao, Philippines',
            duration: '4 Days / 3 Nights',
            price: 299,
            discount: 399,
            images: ['/img/places/Riceterraces.png', '/img/places/boracay.png', '/img/places/shangrila.png'],
            date: 'Jul 1 - Jul 5, 2023',
            rating: 4.8,
            reviews: 1245,
            highlights: [
                'UNESCO World Heritage Site',
                'Terraces View',
                'Tappiya Falls',
                'Local Village Tour',
                'Sunrise Viewing'
            ]
        },
        {
            id: 3,
            title: 'Luxury Resort Getaway',
            location: 'Mactan, Cebu',
            duration: '6 Days / 5 Nights',
            price: 599,
            discount: 799,
            images: ['/img/places/shangrila.png', '/img/places/boracay.png', '/img/places/Riceterraces.png'],
            date: 'Aug 10 - Aug 16, 2023',
            rating: 4.9,
            reviews: 1987,
            highlights: [
                'Private Beach',
                'Infinity Pool',
                'Spa Package',
                'Gourmet Dining',
                'Water Sports'
            ]
        },
        {
            id: 4,
            title: 'Palawan Island Hopping',
            location: 'El Nido, Palawan',
            duration: '7 Days / 6 Nights',
            price: 749,
            discount: 899,
            images: ['/img/places/boracay.png', '/img/places/shangrila.png', '/img/places/Riceterraces.png'],
            date: 'Sep 5 - Sep 12, 2023',
            rating: 4.9,
            reviews: 2103,
            highlights: [
                'Big Lagoon',
                'Small Lagoon',
                'Secret Beach',
                'Snorkeling Spots',
                'Island Hopping'
            ]
        },
        {
            id: 5,
            title: 'Chocolate Hills Adventure',
            location: 'Bohol, Philippines',
            duration: '5 Days / 4 Nights',
            price: 429,
            discount: 549,
            images: ['/img/places/Riceterraces.png', '/img/places/boracay.png', '/img/places/shangrila.png'],
            date: 'Oct 1 - Oct 6, 2023',
            rating: 4.7,
            reviews: 1876,
            highlights: [
                'Chocolate Hills',
                'Tarsier Sanctuary',
                'Loboc River Cruise',
                'Hanging Bridge',
                'Butterfly Garden'
            ]
        },
        {
            id: 6,
            title: 'Siargao Surf & Stay',
            location: 'Siargao Island',
            duration: '6 Days / 5 Nights',
            price: 529,
            discount: 699,
            images: ['/img/places/shangrila.png', '/img/places/boracay.png', '/img/places/Riceterraces.png'],
            date: 'Nov 10 - Nov 16, 2023',
            rating: 4.8,
            reviews: 2345,
            highlights: [
                'Cloud 9 Surfing',
                'Island Hopping',
                'Magpupungko Rock Pools',
                'Coconut Forest',
                'Sunset Cruises'
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Travel Deals</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover amazing destinations at unbeatable prices. Limited time offers for your dream vacation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal) => (
                        <motion.div 
                            key={deal.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img 
                                    src={deal.images ? deal.images[0] : deal.image} 
                                    alt={deal.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-white font-bold text-xl mb-1">{deal.title}</h3>
                                    <div className="flex items-center text-white/90">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm font-medium">{deal.location}</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {Math.floor(Math.random() * 10) + 1} spots left
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-4 h-4 ${i < Math.floor(deal.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                                            />
                                        ))}
                                        <span className="text-gray-500 text-sm ml-2">{deal.rating} ({deal.reviews})</span>
                                    </div>
                                    <div className="text-sm text-gray-500 flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {deal.duration}
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Starting from</p>
                                            <div className="flex items-baseline">
                                                <span className="text-2xl font-bold text-gray-900">${deal.price}</span>
                                                <span className="text-sm text-gray-500 ml-1">/person</span>
                                            </div>
                                        </div>
                                        {deal.discount && (
                                            <div className="text-right">
                                                <span className="text-sm text-gray-400 line-through">${deal.discount}</span>
                                                <span className="block text-amber-600 text-sm font-medium">
                                                    Save ${deal.discount - deal.price}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <Button 
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white group text-sm h-11 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                                        onClick={() => openModal(deal)}
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {isModalOpen && selectedDeal && (
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
                                    {(selectedDeal.images || [selectedDeal.image]).map((img, idx) => (
                                        <div key={idx} className="w-full h-full flex-shrink-0 relative">
                                            <img
                                                src={img}
                                                alt={`${selectedDeal.title} ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Navigation Arrows */}
                                <button 
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all duration-200"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-all duration-200"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                                
                                {/* Dots Indicator */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                                    {(selectedDeal.images || [selectedDeal.image]).map((_, idx) => (
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
                            
                            <div className="overflow-y-auto flex-1">
                                <div className="p-8">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        <div className="flex-1">
                                            <div className="mb-6">
                                                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                                                    Limited Time Offer
                                                </span>
                                                <h3 className="text-3xl font-bold text-gray-900 mb-3">{selectedDeal.title}</h3>
                                                <div className="flex items-center text-gray-600 mb-6">
                                                    <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                                                    <span className="text-lg">{selectedDeal.location}</span>
                                                </div>
                                                
                                                <div className="mb-8">
                                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">About This Deal</h4>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {selectedDeal.description || `Experience the best of ${selectedDeal.location} with this exclusive travel package.`}
                                                    </p>
                                                </div>
                                                
                                                <div className="mb-8">
                                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Trip Highlights</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {selectedDeal.highlights.map((highlight, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {(selectedDeal.included || [
                                                            'Accommodation',
                                                            'Daily breakfast',
                                                            'Airport transfers',
                                                            'Guided tours',
                                                            'Entrance fees',
                                                            'Travel insurance'
                                                        ]).map((item, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="lg:w-80 flex-shrink-0">
                                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 sticky top-6">
                                                <div className="mb-6">
                                                    <div className="flex items-baseline justify-between mb-2">
                                                        <span className="text-gray-500">Starting from</span>
                                                        <div className="flex items-baseline">
                                                            <span className="text-2xl font-bold text-gray-900">${selectedDeal.price}</span>
                                                            <span className="text-gray-500 ml-1">/person</span>
                                                        </div>
                                                    </div>
                                                    {selectedDeal.discount && (
                                                        <div className="text-right">
                                                            <span className="text-sm text-gray-400 line-through">${selectedDeal.discount}</span>
                                                            <span className="block text-amber-600 text-sm font-medium">
                                                                Save ${selectedDeal.discount - selectedDeal.price}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                <div className="space-y-4 mb-6">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-500">Duration</span>
                                                        <span className="font-medium text-gray-900">{selectedDeal.duration}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-500">Travel Dates</span>
                                                        <span className="font-medium text-gray-900">{selectedDeal.date}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-gray-500">Rating</span>
                                                        <div className="flex items-center">
                                                            <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                                                            <span className="font-medium text-gray-900">
                                                                {selectedDeal.rating} ({selectedDeal.reviews} reviews)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <Button 
                                                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-4 text-base font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-3"
                                                    onClick={handleBookNow}
                                                >
                                                    Book Now & Save ${selectedDeal.discount - selectedDeal.price}
                                                </Button>
                                                
                                                <p className="text-xs text-center text-gray-500">
                                                    Price includes taxes and fees. Additional charges may apply.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sticky bottom bar removed */}
                        </motion.div>
                    </div>
                )}

                <div className="flex flex-wrap gap-4 justify-center mt-12">
                    <Button variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-3 h-auto">
                        View All Deals
                    </Button>
                    <Button className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 h-auto">
                        Special Offers
                    </Button>
                    <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 h-auto">
                        Last Minute Deals
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TravelDeals;
