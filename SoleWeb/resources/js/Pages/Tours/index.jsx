import React from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const ToursPage = () => {
  return (
    <MainLayout title="Tours - Sole Explorer">
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
        <PageContainer>
          <div className="py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Tour Packages</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing destinations and unforgettable experiences with our curated tour packages.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64">
                  <img 
                    src="/img/places/philippines.jpg" 
                    alt="Domestic Tours" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Domestic Tours</h2>
                    <p className="text-teal-100">Explore the beauty of the Philippines</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Discover the stunning beaches, mountains, and cultural landmarks across the Philippines.</p>
                  <Link 
                    href="/tours/domestic" 
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
                  >
                    View Domestic Tours
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64">
                  <img 
                    src="/img/places/international.jpg" 
                    alt="International Tours" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">International Tours</h2>
                    <p className="text-teal-100">Discover the world with us</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Experience different cultures, cuisines, and adventures across the globe.</p>
                  <Link 
                    href="/tours/international" 
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
                  >
                    View International Tours
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </MainLayout>
  );
};

export default ToursPage;
