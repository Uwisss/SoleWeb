import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { FaStar, FaRegStar, FaChevronDown, FaChevronUp, FaInfoCircle } from 'react-icons/fa';
import MainLayout from '@/Layouts/MainLayout';
import PageContainer from '@/Components/PageContainer';

export default function Show({ cruise }) {
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedSections, setExpandedSections] = useState({
        inclusions: false,
        exclusions: false,
        itinerary: {},
        faq: false
    });

    // Toggle section expansion
    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Toggle specific itinerary day
    const toggleItineraryDay = (day) => {
        setExpandedSections(prev => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                [day]: !prev.itinerary[day]
            }
        }));
    };

    // Format price
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    // Render star rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        
        return stars;
    };

    // Tab content
    const renderTabContent = () => {
        switch(activeTab) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        <div className="prose max-w-none">
                            <h3 className="text-xl font-semibold mb-4">About This Cruise</h3>
                            <p className="text-gray-700 mb-6">
                                {cruise?.description || 'Experience a journey of a lifetime with our exclusive cruise packages.'}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-medium text-gray-800 mb-2">Cruise Duration</h4>
                                    <p className="text-gray-600">{cruise?.duration || '7 Nights'}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-medium text-gray-800 mb-2">Departure Port</h4>
                                    <p className="text-gray-600">{cruise?.departurePort || 'Manila'}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-medium text-gray-800 mb-2">Ship</h4>
                                    <p className="text-gray-600">{cruise?.ship || 'Philippine Explorer'}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Itinerary Highlights</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {(cruise?.highlights || [
                                        'Visit multiple stunning destinations',
                                        'Enjoy world-class dining and entertainment',
                                        'Experience luxury accommodations',
                                        'Participate in exciting onboard activities'
                                    ]).map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
                
            case 'itinerary':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Cruise Itinerary</h3>
                        <div className="space-y-4">
                            {(cruise?.itinerary || Array(7).fill().map((_, i) => ({
                                day: i + 1,
                                port: `Port ${i + 1}`,
                                date: 'TBD',
                                description: 'Details about this port of call will be provided closer to the departure date.'
                            }))).map((day, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <button 
                                        className="w-full flex justify-between items-center text-left"
                                        onClick={() => toggleItineraryDay(day.day)}
                                    >
                                        <div>
                                            <h4 className="font-medium text-lg">Day {day.day}: {day.port}</h4>
                                            <p className="text-sm text-gray-600">{day.date}</p>
                                        </div>
                                        {expandedSections.itinerary[day.day] ? 
                                            <FaChevronUp className="text-gray-500" /> : 
                                            <FaChevronDown className="text-gray-500" />
                                        }
                                    </button>
                                    
                                    {expandedSections.itinerary[day.day] && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <p className="text-gray-700">{day.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
                
            default:
                return null;
        }
    };

    return (
        <MainLayout>
            <Head title={cruise?.title || 'Cruise Details'}>
                <meta name="description" content={cruise?.description || 'Discover amazing cruise destinations and book your next adventure.'} />
            </Head>

            {/* Hero Section */}
            <div className="relative bg-gray-900">
                <div className="h-64 bg-gradient-to-r from-blue-800 to-teal-700 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{cruise?.title || 'Cruise Details'}</h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            {cruise?.ship ? `${cruise.ship} • ` : ''}
                            {cruise?.duration || '7 Nights'}
                        </p>
                    </div>
                </div>
            </div>

            <PageContainer>
                <div className="py-8">
                    {/* Main Content */}
                    <div className="lg:pr-80">
                        {/* Tabs Navigation */}
                        <div className="border-b border-gray-200 mb-8">
                            <nav className="-mb-px flex space-x-8">
                                {['overview', 'itinerary', 'cabins', 'reviews', 'faq'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`${activeTab === tab
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="mb-12">
                            {renderTabContent()}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:absolute lg:top-0 lg:right-0 lg:w-72 xl:w-80 lg:pl-6 lg:border-l lg:border-gray-200 mt-8 lg:mt-0">
                        <div className="sticky top-6">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                <div className="p-4 bg-blue-600 text-white">
                                    <h3 className="text-lg font-semibold">Book Your Cruise</h3>
                                    <p className="text-sm opacity-90">
                                        Starting from {formatPrice(cruise?.price || 999)}
                                    </p>
                                </div>
                                
                                <div className="p-4">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Departure Date
                                            </label>
                                            <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                                <option>Select a date</option>
                                                <option>June 15, 2024</option>
                                                <option>July 20, 2024</option>
                                                <option>August 10, 2024</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Number of Guests
                                            </label>
                                            <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                                <option>1 Adult</option>
                                                <option>2 Adults</option>
                                                <option>3 Adults</option>
                                                <option>4 Adults</option>
                                            </select>
                                        </div>
                                        
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                                            Book Now
                                        </button>
                                    </div>
                                    
                                    <div className="mt-6 pt-4 border-t border-gray-200">
                                        <h4 className="font-medium text-sm text-gray-700 mb-2">Need help booking?</h4>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                                                <FaPhoneAlt className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-gray-500">Call us at</p>
                                                <a href="tel:+1234567890" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                                                    (123) 456-7890
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-medium text-yellow-800 mb-2">Special Offer</h4>
                                <p className="text-sm text-yellow-700">
                                    Book now and get 10% off your first cruise!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </MainLayout>
    );
}
