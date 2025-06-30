import React from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const CruisesPage = () => {
  return (
    <MainLayout title="Cruises - Sole Explorer">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <PageContainer>
          <div className="py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Cruise Packages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing destinations and unforgettable experiences with our curated cruise packages.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64">
                  <img 
                    src="/img/places/boracay.png" 
                    alt="Caribbean Cruises" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Caribbean Cruises</h2>
                    <p className="text-blue-100">Explore the beautiful islands of the Caribbean</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Discover crystal-clear waters, white sandy beaches, and vibrant cultures on a Caribbean cruise.</p>
                  <Link 
                    href="/cruises/caribbean" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    View Caribbean Cruises
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64">
                  <img 
                    src="/img/places/Riceterraces.png" 
                    alt="Asian Cruises" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Asian Cruises</h2>
                    <p className="text-blue-100">Discover the rich cultures of Asia</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Experience the charm of exotic destinations, stunning coastlines, and delicious cuisine.</p>
                  <Link 
                    href="/cruises/asian" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    View Asian Cruises
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Cruises?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Amazing Destinations</h3>
                  <p className="text-gray-600">Visit the most beautiful ports and experience diverse cultures.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Luxury Experience</h3>
                  <p className="text-gray-600">Enjoy world-class amenities and exceptional service on board.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                  <p className="text-gray-600">We offer the best prices and value for your dream cruise vacation.</p>
                </div>
              </div>
              
              <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Ready to Set Sail?</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                  Contact our cruise specialists to help you plan the perfect cruise vacation tailored to your preferences.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors text-center"
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
            </div>
          </div>
        </PageContainer>
      </div>
    </MainLayout>
  );
};

export default CruisesPage;
