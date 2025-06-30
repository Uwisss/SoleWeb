import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const VisaApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    visaType: 'tourist',
    travelDate: '',
    passportNumber: '',
    passportExpiry: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
    alert('Application submitted successfully! We will contact you shortly.');
  };

  const countries = [
    'Select a country',
    'Japan',
    'South Korea',
    'Schengen Countries',
    'United States',
    'Australia',
    'United Kingdom',
    'Canada',
    'New Zealand',
    'Singapore',
    'Malaysia'
  ];

  const visaTypes = [
    { value: 'tourist', label: 'Tourist Visa' },
    { value: 'business', label: 'Business Visa' },
    { value: 'student', label: 'Student Visa' },
    { value: 'work', label: 'Work Visa' },
    { value: 'transit', label: 'Transit Visa' }
  ];

  return (
    <MainLayout title="Visa Application - Sole Explorer">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/patterns/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Visa Application</h1>
          </div>
        </div>
      </div>

      <PageContainer>
        <div className="max-w-4xl mx-auto my-16">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-indigo-50 px-8 py-4 border-b border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900">Visa Application Form</h2>
            </div>
            <div className="p-8">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Destination Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country} disabled={index === 0}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="visaType" className="block text-sm font-medium text-gray-700 mb-1">
                      Visa Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="visaType"
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                    >
                      {visaTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Intended Travel Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="passportNumber"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                      placeholder="AB1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="passportExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="passportExpiry"
                      name="passportExpiry"
                      value={formData.passportExpiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-white"
                    placeholder="Any special requirements or additional information..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded focus:ring-2 focus:ring-offset-0"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="/terms" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="/privacy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                  </label>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-gray-500">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-3 px-8 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Submit Application
                      <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Need Help with Your Application?</h3>
            <p className="text-blue-700 mb-4">Our visa experts are here to assist you with any questions or special requirements you might have.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+1234567890" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-100">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: +1 (234) 567-890
              </a>
              <a href="mailto:visa@soleexplorer.com" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-100">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email: visa@soleexplorer.com
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default VisaApplication;
