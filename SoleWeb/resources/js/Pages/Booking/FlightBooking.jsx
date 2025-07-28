import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import { Plane, MapPin, Calendar, Users, Search, ChevronDown, Check, Shield, Clock, Globe } from 'lucide-react';

const FlightBooking = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Flight Booking</h1>
          <p className="text-lg text-blue-100 max-w-2xl">Find and book the best flight deals to destinations around the world</p>
        </div>
      </div>

      {/* Search Form */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex flex-wrap gap-3 mb-6">
            <button 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                tripType === 'roundtrip' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setTripType('roundtrip')}
            >
              Round Trip
            </button>
            <button 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                tripType === 'oneway' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setTripType('oneway')}
            >
              One Way
            </button>
            <button 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                tripType === 'multicity' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setTripType('multicity')}
            >
              Multi-City
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="City or Airport" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <MapPin className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 text-sm"
                />
                <MapPin className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
                />
                <Calendar className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            {tripType === 'roundtrip' && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
                  />
                  <Calendar className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <div className="relative">
                <div 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer flex items-center justify-between text-sm text-gray-800"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{passengers} {passengers === 1 ? 'Passenger' : 'Passengers'}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                </div>
                <Users className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-700">Adults (12+)</span>
                        <div className="flex items-center space-x-3">
                          <button 
                            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                            onClick={(e) => { e.stopPropagation(); setPassengers(Math.max(1, passengers - 1)); }}
                            type="button"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-gray-800">{passengers}</span>
                          <button 
                            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                            onClick={(e) => { e.stopPropagation(); setPassengers(passengers + 1); }}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cabin Class</label>
              <div className="relative">
                <select 
                  className="w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white text-gray-800 text-sm"
                  value={cabinClass}
                  onChange={(e) => setCabinClass(e.target.value)}
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium Economy</option>
                  <option value="business">Business Class</option>
                  <option value="first">First Class</option>
                </select>
                <Users className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm md:text-base shadow-md hover:shadow-lg"
            type="button"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
            Search Flights
          </button>
        </div>
      </div>

      <PageContainer>
        {/* Why Book With Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Why Book With Us</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Experience the difference with our premium flight booking services</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Safe & Secure</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Your personal and payment information is always protected with bank-level security.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">24/7 Support</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Our dedicated customer service team is available around the clock to assist you.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Globe className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Best Prices</h3>
                <p className="text-gray-700 text-sm leading-relaxed">We guarantee the most competitive prices with our extensive network of airline partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Flight Routes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Flight Routes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover our most sought-after destinations with great deals and availability</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  from: 'New York (JFK)', 
                  to: 'London (LHR)', 
                  price: '$450',
                  duration: '7h 10m',
                  airline: 'Multiple Airlines'
                },
                { 
                  from: 'Los Angeles (LAX)', 
                  to: 'Tokyo (HND)', 
                  price: '$850',
                  duration: '11h 45m',
                  airline: 'ANA, JAL, United'
                },
                { 
                  from: 'Dubai (DXB)', 
                  to: 'Singapore (SIN)', 
                  price: '$380',
                  duration: '7h 30m',
                  airline: 'Emirates, Singapore Air'
                },
                { 
                  from: 'Sydney (SYD)', 
                  to: 'Auckland (AKL)', 
                  price: '$320',
                  duration: '3h 15m',
                  airline: 'Qantas, Air New Zealand'
                },
              ].map((route, index) => (
                <div 
                  key={index} 
                  className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-2/3">
                          <p className="text-sm font-medium text-gray-900 truncate">{route.from}</p>
                          <div className="w-6 h-px bg-gray-300 my-1"></div>
                          <p className="text-sm font-medium text-gray-900 truncate">{route.to}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-blue-700">{route.price}</p>
                          <p className="text-xs text-gray-500">Round Trip</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600 mt-4 mb-5">
                        <span>✈ {route.duration}</span>
                        <span>🛫 {route.airline}</span>
                      </div>
                    </div>
                    <button className="w-full py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 mt-auto">
                      View Flights
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">*Prices are for round-trip flights including all taxes and fees.</p>
          </div>
        </section>
      </PageContainer>
    </MainLayout>
  );
};

export default FlightBooking;
