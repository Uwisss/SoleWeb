import React from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const VisaPage = () => {
  return (
    <MainLayout title="Visa Services - Sole Explorer">
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <PageContainer>
          <div className="py-16 text-center">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              Travel with Confidence
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Visa Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hassle-free visa processing for your travel needs. Our experts handle the paperwork so you can focus on your journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="relative h-64">
                  <img 
                    src="/img/visa/requirements.jpg" 
                    alt="Visa Requirements" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-1">Visa Requirements</h2>
                    <p className="text-indigo-100 text-sm">Check what you need</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Find out the necessary documents and requirements for your visa application.</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Documents
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Processing
                    </span>
                  </div>
                  <Link 
                    href="/visa/requirements" 
                    className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 group"
                  >
                    View Requirements
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="relative h-64">
                  <img 
                    src="/img/visa/application.jpg" 
                    alt="Visa Application" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-1">Visa Application</h2>
                    <p className="text-indigo-100 text-sm">Start your application</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Begin your visa application process with our easy-to-use online form. Get started in minutes.</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Online Form
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Easy Process
                    </span>
                  </div>
                  <Link 
                    href="/visa/application" 
                    className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 group"
                  >
                    Start Application
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="relative h-64">
                  <img 
                    src="/img/visa/status.jpg" 
                    alt="Visa Status Check" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-1">Visa Status Check</h2>
                    <p className="text-indigo-100 text-sm">Track your application</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Check the status of your visa application in real-time with our tracking system.</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Real-time
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Updates
                    </span>
                  </div>
                  <Link 
                    href="/visa/status" 
                    className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 group"
                  >
                    Check Status
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="relative h-64">
                  <img 
                    src="/img/visa/types.jpg" 
                    alt="Visa Types" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Visa Types</h2>
                    <p className="text-teal-100">Find the right visa for you</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Learn about different types of visas and which one suits your travel needs.</p>
                  <Link 
                    href="/visa/types" 
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
                  >
                    View Visa Types
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

export default VisaPage;
