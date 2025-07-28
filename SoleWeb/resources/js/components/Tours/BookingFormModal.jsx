import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Calendar, User, Building, Mail, Phone, Users, Plane, Check } from 'lucide-react';

const BookingFormModal = ({ isOpen, closeModal, packageDetails, onBookingSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    contactNumber: '',
    travelDate: '',
    destination: '',
    adults: 1,
    children: 0,
    infants: 0,
    services: '',
    withAirfare: 'with',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        onBookingSuccess(formData);
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!packageDetails) return null;

  // Prevent click events from bubbling up to parent elements
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal} static>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel 
                className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-2xl transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    Book {packageDetails.name}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeModal}
                    disabled={isSubmitting}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Success Message */}
                {isSuccess && (
                  <div className="bg-green-50 p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <p className="text-green-800 font-medium">Booking request submitted successfully!</p>
                    <p className="text-green-700 text-sm mt-1">We'll contact you shortly to confirm your booking.</p>
                  </div>
                )}

                {!isSuccess && (
                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-6" onClick={stopPropagation}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700 placeholder-gray-400"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company / School
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700 placeholder-gray-400"
                            placeholder="Your company or school name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700 placeholder-gray-400"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Contact Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="tel"
                              id="contactNumber"
                              name="contactNumber"
                              required
                              value={formData.contactNumber}
                              onChange={handleChange}
                              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700 placeholder-gray-400"
                              placeholder="+63 912 345 6789"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Travel Date <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="date"
                              id="travelDate"
                              name="travelDate"
                              required
                              value={formData.travelDate}
                              onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]}
                              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700 placeholder-gray-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                            Destination <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="destination"
                            name="destination"
                            required
                            value={packageDetails.location || formData.destination}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700 placeholder-gray-400"
                            placeholder="e.g., Palawan, Philippines"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Travelers
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="adults" className="block text-xs text-gray-500 mb-1">Adults (12+ years)</label>
                            <div className="relative">
                              <select
                                id="adults"
                                name="adults"
                                value={formData.adults}
                                onChange={handleChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                  <option key={num} value={num}>{num}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="children" className="block text-xs text-gray-500 mb-1">Children (2-12 years)</label>
                            <div className="relative">
                              <select
                                id="children"
                                name="children"
                                value={formData.children}
                                onChange={handleChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700"
                              >
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                  <option key={num} value={num}>{num}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="infants" className="block text-xs text-gray-500 mb-1">Infants (below 2 years)</label>
                            <div className="relative">
                              <select
                                id="infants"
                                name="infants"
                                value={formData.infants}
                                onChange={handleChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-700"
                              >
                                {[0, 1, 2, 3, 4, 5].map(num => (
                                  <option key={num} value={num}>{num}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">
                          Product / Services
                        </label>
                        <textarea
                          id="services"
                          name="services"
                          rows="2"
                          value={formData.services}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-400 placeholder-gray-300"
                          placeholder="Any specific services or products you're interested in?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Airfare
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <label className={`relative flex items-center justify-center p-4 border rounded-lg cursor-pointer ${formData.withAirfare === 'with' ? 'border-teal-500 bg-teal-50' : 'border-gray-300'}`}>
                            <input
                              type="radio"
                              name="withAirfare"
                              value="with"
                              checked={formData.withAirfare === 'with'}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="flex items-center">
                              <Plane className={`h-5 w-5 ${formData.withAirfare === 'with' ? 'text-teal-600' : 'text-gray-400'}`} />
                              <span className={`ml-2 ${formData.withAirfare === 'with' ? 'text-teal-700 font-medium' : 'text-gray-700'}`}>
                                With Airfare
                              </span>
                            </div>
                          </label>
                          <label className={`relative flex items-center justify-center p-4 border rounded-lg cursor-pointer ${formData.withAirfare === 'without' ? 'border-teal-500 bg-teal-50' : 'border-gray-300'}`}>
                            <input
                              type="radio"
                              name="withAirfare"
                              value="without"
                              checked={formData.withAirfare === 'without'}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="flex items-center">
                              <X className={`h-5 w-5 ${formData.withAirfare === 'without' ? 'text-teal-600' : 'text-gray-400'}`} />
                              <span className={`ml-2 ${formData.withAirfare === 'without' ? 'text-teal-700 font-medium' : 'text-gray-700'}`}>
                                Without Airfare
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                          Special Requests
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          rows="3"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm py-2.5 text-gray-400 placeholder-gray-300"
                          placeholder="Any special requests or additional information?"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={closeModal}
                        disabled={isSubmitting}
                        className="px-4 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 flex items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          'Submit Booking Request'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingFormModal;
