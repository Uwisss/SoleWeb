import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon, MapPinIcon, CalendarIcon, UserIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid';

const TourPackageModal = ({ isOpen, closeModal, packageDetails }) => {
  if (!packageDetails) return null;

  const { 
    id,
    name, 
    location, 
    description, 
    price, 
    duration, 
    groupSize, 
    rating, 
    reviewCount,
    images = [],
    highlights = [],
    inclusions = [],
    itinerary = [],
    priceIncludes = [],
    priceExcludes = []
  } = packageDetails;

  // Default images if none provided
  const displayImages = images.length > 0 ? images : ['/img/places/korea.png', '/img/places/tokyo.png', '/img/places/boracay.png'];
  const [selectedImage, setSelectedImage] = React.useState(displayImages[0]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    {name} Tour Package
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Main Content */}
                <div className="max-h-[80vh] overflow-y-auto">
                  {/* Image Gallery */}
                  <div className="bg-gray-100">
                    <div className="h-96 w-full">
                      <img
                        src={selectedImage}
                        alt={name}
                        className="h-full w-full object-cover object-center"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/img/placeholder-tour.jpg';
                        }}
                      />
                    </div>
                    <div className="flex p-4 space-x-2 overflow-x-auto">
                      {displayImages.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImage(img)}
                          className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${selectedImage === img ? 'ring-2 ring-teal-500' : ''}`}
                        >
                          <img
                            src={img}
                            alt={`${name} ${idx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/img/placeholder-tour.jpg';
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Package Info */}
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                            <div className="mt-1 flex items-center text-gray-600">
                              <MapPinIcon className="h-5 w-5 mr-1 text-teal-500" />
                              <span>{location || 'Various Locations'}</span>
                            </div>
                          </div>
                          <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold text-lg">
                            ${price?.toLocaleString() || '1,299'} <span className="text-sm font-normal">/ person</span>
                          </div>
                        </div>

                        {/* Rating and Reviews */}
                        <div className="mt-4 flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((star) => (
                              <StarIcon
                                key={star}
                                className={`h-5 w-5 ${star < (rating || 4.5) ? 'text-teal-500 fill-current' : 'text-gray-300 fill-current'}`}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="ml-2 text-sm text-gray-600">
                            {rating || 4.5} ({reviewCount || 128} reviews)
                          </p>
                        </div>

                        {/* Highlights */}
                        {highlights.length > 0 && (
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-900">Tour Highlights</h3>
                            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start">
                                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-gray-600">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Description */}
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                          <p className="mt-2 text-gray-600">
                            {description || 'Experience the beauty and culture of this amazing destination with our expertly guided tour. This package includes comfortable accommodations, delicious meals, and unforgettable experiences.'}
                          </p>
                        </div>

                        {/* Itinerary */}
                        {itinerary.length > 0 && (
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-900">Itinerary</h3>
                            <div className="mt-4 space-y-4">
                              {itinerary.map((day, idx) => (
                                <div key={idx} className="flex">
                                  <div className="flex flex-col items-center mr-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600 font-semibold">
                                      {idx + 1}
                                    </div>
                                    {idx < itinerary.length - 1 && (
                                      <div className="w-0.5 h-full bg-gray-200" />
                                    )}
                                  </div>
                                  <div className="pb-6">
                                    <h4 className="font-medium text-gray-900">{day.title || `Day ${idx + 1}`}</h4>
                                    <p className="mt-1 text-gray-600">{day.description || 'Full day of activities and sightseeing.'}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Booking Sidebar */}
                      <div className="md:w-80 flex-shrink-0">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="text-lg font-semibold text-gray-900">Tour Details</h3>
                          
                          <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                              <CalendarIcon className="h-5 w-5 text-teal-500 mr-3" />
                              <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="font-medium text-gray-800">{duration || '6 Days / 5 Nights'}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center">
                              <UserIcon className="h-5 w-5 text-teal-500 mr-3" />
                              <div>
                                <p className="text-sm text-gray-500">Group Size</p>
                                <p className="font-medium text-gray-800">2-12 People</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center">
                              <ClockIcon className="h-5 w-5 text-teal-500 mr-3" />
                              <div>
                                <p className="text-sm text-gray-500">Availability</p>
                                <p className="font-medium text-gray-800">Year Round</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center">
                              <CurrencyDollarIcon className="h-5 w-5 text-teal-500 mr-3" />
                              <div>
                                <p className="text-sm text-gray-500">Starting From</p>
                                <p className="font-medium text-xl text-teal-600">${price?.toLocaleString() || '1,299'}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Price Includes</h4>
                            <ul className="space-y-2">
                              {(priceIncludes.length > 0 ? priceIncludes : [
                                'Accommodation',
                                'Meals as per itinerary',
                                'Professional guide',
                                'Entrance fees',
                                'Transportation',
                              ]).map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-sm text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Not Included</h4>
                            <ul className="space-y-2">
                              {(priceExcludes.length > 0 ? priceExcludes : [
                                'International flights',
                                'Travel insurance',
                                'Personal expenses',
                                'Visa fees',
                                'Tips and gratuities',
                              ]).map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  <span className="text-sm text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            type="button"
                            className="mt-8 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                          >
                            Book Now
                          </button>
                          
                          <p className="mt-3 text-center text-sm text-gray-500">
                            Have questions?{' '}
                            <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                              Contact us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TourPackageModal;
