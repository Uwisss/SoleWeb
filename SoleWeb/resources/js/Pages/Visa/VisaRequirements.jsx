import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';

const VisaRequirements = () => {
  const requirements = [
    {
      country: 'Japan',
      documents: [
        'Valid passport (6 months validity)',
        'Completed visa application form',
        'Passport-sized photos (4.5cm x 3.5cm)',
        'Daily itinerary in Japan',
        'Bank certificate',
        'Income tax return',
      ],
      processingTime: { text: '5-7 working days', color: 'bg-blue-100 text-blue-800' },
      fee: { text: 'PHP 1,500', color: 'bg-green-100 text-green-800' }
    },
    {
      country: 'South Korea',
      documents: [
        'Passport (valid for more than 6 months)',
        'Completed visa application form',
        'Passport photo (3.5cm x 4.5cm)',
        'Original bank certificate',
        'ITR (Income Tax Return)',
        'Certificate of Employment',
      ],
      processingTime: { text: '7 working days', color: 'bg-blue-100 text-blue-800' },
      fee: { text: 'PHP 1,800', color: 'bg-green-100 text-green-800' }
    },
    {
      country: 'Schengen Countries',
      documents: [
        'Passport (valid for 3 months after return)',
        'Completed application form',
        'Travel medical insurance (€30,000 coverage)',
        'Hotel and flight reservations',
        'Bank statements (3 months)',
        'Proof of employment',
      ],
      processingTime: { text: '15 working days', color: 'bg-blue-100 text-blue-800' },
      fee: { text: 'PHP 4,500', color: 'bg-green-100 text-green-800' }
    },
    {
      country: 'United States',
      documents: [
        'DS-160 confirmation page',
        'Passport valid for travel',
        'Photo (5cm x 5cm)',
        'MRV fee payment receipt',
        'Interview appointment letter',
        'Supporting documents',
      ],
      processingTime: { text: 'Varies', color: 'bg-blue-100 text-blue-800' },
      fee: { text: '$185', color: 'bg-green-100 text-green-800' }
    },
    {
      country: 'Australia',
      documents: [
        'Passport copy',
        'Completed application form',
        'Travel itinerary',
        'Bank statements',
        'Employment certificate',
        'Family certificate',
      ],
      processingTime: { text: '15-30 days', color: 'bg-blue-100 text-blue-800' },
      fee: { text: 'AUD 150', color: 'bg-green-100 text-green-800' }
    },
    {
      country: 'United Kingdom',
      documents: [
        'Valid passport',
        'Completed application form',
        'Financial evidence',
        'Travel details',
        'Accommodation details',
        'Employment details',
      ],
      processingTime: { text: '15 working days', color: 'bg-blue-100 text-blue-800' },
      fee: { text: 'GBP 100', color: 'bg-green-100 text-green-800' }
    }
  ];

  return (
    <MainLayout title="Visa Requirements - Sole Explorer">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/patterns/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Visa Requirements</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Find all the necessary documents and requirements for your visa application.
              We've compiled the latest information to make your application process smoother.
            </p>
          </div>
        </div>
      </div>

      <PageContainer>
        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto my-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {requirements.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center">{item.country}</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Required Documents:</h4>
                <ul className="space-y-2 mb-4">
                  {item.documents.map((doc, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.processingTime.color} mr-2`}>
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.processingTime.text}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.fee.color}`}>
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.fee.text}
                  </span>
                </div>
                <button className="w-full mt-4 bg-purple-100 text-purple-700 hover:bg-purple-200 py-2 rounded-lg font-medium transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-xl p-8 my-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Processing times may vary depending on the embassy's workload and other factors.</li>
            <li>• Additional documents may be requested by the consular officer.</li>
            <li>• Fees are subject to change without prior notice.</li>
            <li>• We recommend applying for your visa at least 1-2 months before your planned travel date.</li>
          </ul>
          <div className="mt-6">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Need Help? Contact Us
            </button>
          </div>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default VisaRequirements;
