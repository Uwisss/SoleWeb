import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import { FileText, Globe, Clock, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

const VisaProcessing = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const visaTypes = [
    {
      id: 'tourist',
      name: 'Tourist Visa',
      description: 'For leisure and sightseeing purposes',
      processingTime: '5-7 business days',
      validity: '3-6 months',
      requirements: [
        'Passport valid for at least 6 months',
        'Completed application form',
        'Passport-sized photos',
        'Proof of accommodation',
        'Return flight tickets',
        'Bank statements',
        'Travel itinerary'
      ]
    },
    {
      id: 'business',
      name: 'Business Visa',
      description: 'For business meetings and conferences',
      processingTime: '7-10 business days',
      validity: '6-12 months',
      requirements: [
        'All tourist visa requirements',
        'Business invitation letter',
        'Company registration documents',
        'Letter from employer',
        'Business references'
      ]
    },
    {
      id: 'student',
      name: 'Student Visa',
      description: 'For educational purposes',
      processingTime: '10-15 business days',
      validity: 'Duration of study',
      requirements: [
        'Letter of acceptance from institution',
        'Proof of tuition payment',
        'Academic certificates',
        'Financial support documents',
        'Medical examination results'
      ]
    },
    {
      id: 'work',
      name: 'Work Visa',
      description: 'For employment purposes',
      processingTime: '15-30 business days',
      validity: '1-2 years',
      requirements: [
        'Job offer letter',
        'Employment contract',
        'Educational certificates',
        'Work experience certificates',
        'Police clearance certificate'
      ]
    }
  ];

  const [selectedVisaType, setSelectedVisaType] = useState(visaTypes[0]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passportNumber: '',
    issueDate: '',
    expiryDate: '',
    visaType: 'tourist',
    entryType: 'single',
    purpose: '',
    arrivalDate: '',
    departureDate: '',
    address: ''
  });

  const handleInputChange = (e) => {
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
    alert('Visa application submitted successfully! We will contact you shortly.');
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visa Processing</h1>
          <p className="text-xl max-w-2xl">Complete visa application and requirements for your next destination</p>
        </div>
      </div>

      <PageContainer>
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('requirements')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'requirements'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Visa Requirements
              </div>
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'application'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Visa Application
              </div>
            </button>
          </nav>
        </div>

        {activeTab === 'requirements' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold mb-8 text-black">Visa Requirements by Type</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Visa Type</label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <div className="flex items-center">
                      <span className="block truncate">{selectedVisaType.name}</span>
                    </div>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </span>
                  </button>
                  
                  {isDropdownOpen && (
                    <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {visaTypes.map((type) => (
                        <li
                          key={type.id}
                          className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                          onClick={() => {
                            setSelectedVisaType(type);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div className="flex items-center">
                            <span className={`block truncate ${selectedVisaType.id === type.id ? 'font-semibold' : 'font-normal'}`}>
                              {type.name}
                            </span>
                          </div>
                          {selectedVisaType.id === type.id && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                              <CheckCircle className="h-5 w-5" />
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedVisaType.name}</h3>
                <p className="text-gray-700">{selectedVisaType.description}</p>
                <div className="mt-3 flex items-center text-sm text-gray-700">
                  <Clock className="w-4 h-4 mr-1 text-blue-600" />
                  <span>Processing Time: <span className="font-medium">{selectedVisaType.processingTime}</span></span>
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-700">
                  <Globe className="w-4 h-4 mr-1 text-blue-600" />
                  <span>Validity: <span className="font-medium">{selectedVisaType.validity}</span></span>
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 text-black">Required Documents</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {selectedVisaType.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      <strong className="font-semibold">Important Notice:</strong> Visa requirements are subject to change based on your nationality and specific circumstances. 
                      We strongly recommend verifying all information with the official embassy or consulate of your destination country before finalizing your travel plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6 text-black">General Visa Application Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Apply well in advance of your planned travel date</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Ensure your passport is valid for at least 6 months beyond your intended stay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Check passport validity (should be valid for at least 6 months)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Provide clear copies of all required documents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-black">Be prepared for possible interviews at the embassy/consulate</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'application' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-black">Visa Application Form</h2>
            <p className="text-gray-600 mb-8">Please fill out the form below to apply for your visa. All fields are required unless marked optional.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name (as in passport)</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Passport Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">Passport Number</label>
                    <input
                      type="text"
                      id="passportNumber"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">Issue Date</label>
                    <input
                      type="date"
                      id="issueDate"
                      name="issueDate"
                      value={formData.issueDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                      type="date"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">Visa Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="visaType" className="block text-sm font-medium text-gray-700">Visa Type</label>
                    <select
                      id="visaType"
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    >
                      <option value="tourist">Tourist Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Visa</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="entryType" className="block text-sm font-medium text-gray-700">Entry Type</label>
                    <select
                      id="entryType"
                      name="entryType"
                      value={formData.entryType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    >
                      <option value="single">Single Entry</option>
                      <option value="double">Double Entry</option>
                      <option value="multiple">Multiple Entry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">Intended Date of Arrival</label>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">Intended Date of Departure</label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose of Visit</label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      rows={3}
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address During Stay</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I certify that all information provided is true and correct
                    </label>
                    <p className="text-gray-500">
                      By submitting this form, you agree to our terms of service and privacy policy.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Visa Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </PageContainer>
    </MainLayout>
  );
};

export default VisaProcessing;
