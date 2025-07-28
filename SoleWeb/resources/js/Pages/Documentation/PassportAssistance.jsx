import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import { FileText, Clock, Globe, CheckCircle, AlertCircle, HelpCircle, Mail, Phone } from 'lucide-react';

const PassportAssistance = () => {
  const services = [
    {
      title: 'New Passport Application',
      description: 'Assistance with first-time passport applications, including document preparation and submission.',
      processingTime: '4-6 weeks',
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Passport Renewal',
      description: 'Help with renewing an expiring or expired passport, including photo services.',
      processingTime: '3-5 weeks',
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Expedited Service',
      description: 'Faster processing for urgent travel needs (additional fees apply).',
      processingTime: '2-3 weeks',
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Visa Application Support',
      description: 'Assistance with visa applications for various countries.',
      processingTime: 'Varies by country',
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Name Change',
      description: 'Update your passport after a legal name change.',
      processingTime: '4-6 weeks',
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Lost or Stolen Passport',
      description: 'Emergency assistance with replacing lost or stolen passports.',
      processingTime: 'Varies',
      icon: <AlertCircle className="w-8 h-8 text-blue-600" />
    }
  ];

  const requirements = [
    'Completed application form (DS-11 for first-time applicants, DS-82 for renewals)',
    'Proof of U.S. citizenship (birth certificate, naturalization certificate, or previous passport)',
    'Government-issued photo ID (driver\'s license, military ID, etc.)',
    'Passport photo (we can take this for you)', 
    'Payment for applicable fees',
    'For minors: additional documentation required for both parents/guardians'
  ];

  const faqs = [
    {
      question: 'How long does it take to get a passport?',
      answer: 'Standard processing takes 4-6 weeks. Expedited service takes 2-3 weeks with an additional fee. For urgent travel, you may be able to get an appointment at a passport agency.'
    },
    {
      question: 'What are the passport photo requirements?',
      answer: 'Photos must be 2x2 inches in size, taken within the last 6 months, with a plain white or off-white background, and show a neutral facial expression with both eyes open.'
    },
    {
      question: 'How long is a passport valid?',
      answer: 'For adults (16+), passports are valid for 10 years. For children under 16, passports are valid for 5 years.'
    },
    {
      question: 'Do I need to apply in person?',
      answer: 'First-time applicants, children under 16, and those replacing a lost/stolen passport must apply in person. Renewals can often be done by mail.'
    },
    {
      question: 'What is the passport book vs. card?',
      answer: 'The passport book is valid for all international travel. The passport card is only valid for land and sea travel to Canada, Mexico, the Caribbean, and Bermuda.'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Passport Assistance</h1>
          <p className="text-xl max-w-2xl">Expert help with all your passport and travel document needs</p>
        </div>
      </div>

      <PageContainer>
        {/* Services Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-black">Our Passport Services</h2>
            <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
              We provide comprehensive passport services to make the application process smooth and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-blue-100 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                </div>
                <p className="text-black mb-2">{service.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Processing: {service.processingTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Passport Requirements</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-black">
                <FileText className="w-6 h-6 mr-2 text-blue-600 inline-block align-middle" />
                Documents You'll Need
              </h3>
              <ul className="space-y-3">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Need help with documents?</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p className="text-black">Contact our passport specialists for assistance with document preparation and verification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full text-left p-4 font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none text-black flex justify-between items-center">
                  <span>{item.question}</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-700 text-black">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Need Help With Your Passport?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our passport specialists are here to assist you with any questions or to schedule an appointment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/20 rounded-full mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">Call Us</h3>
                </div>
                <p className="text-blue-100 mb-2">Speak with a passport specialist</p>
                <a href="tel:+1234567890" className="text-xl font-bold hover:underline text-black">(123) 456-7890</a>
                <p className="text-sm text-blue-200 mt-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/20 rounded-full mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">Email Us</h3>
                </div>
                <p className="text-blue-100 mb-4">Send us your questions</p>
                <a href="mailto:passport@example.com" className="inline-block bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors text-black">
                  Email Now
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4 text-black">Visit Our Office</h3>
              <p className="text-blue-100">123 Travel Street, Suite 100</p>
              <p className="text-blue-100">Manila, 1000</p>
              <p className="text-blue-100">Philippines</p>
              <button className="mt-6 bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors text-black">
                Schedule an Appointment
              </button>
            </div>
          </div>
        </section>
      </PageContainer>
    </MainLayout>
  );
};

export default PassportAssistance;
