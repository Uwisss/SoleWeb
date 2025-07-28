import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { PageContainer } from '../../components/PageContainer';
import { ShieldCheck, Globe, Headset, CreditCard } from 'lucide-react';

const TravelInsurance = () => {
  const plans = [
    {
      name: 'Basic',
      price: 25,
      description: 'Essential coverage for your trip',
      features: [
        'Trip Cancellation',
        'Trip Interruption',
        'Emergency Medical',
        'Baggage Loss',
        '24/7 Assistance'
      ]
    },
    {
      name: 'Premium',
      price: 50,
      description: 'Comprehensive protection',
      features: [
        'All Basic features',
        'Emergency Medical Evacuation',
        'Pre-existing Conditions',
        'Adventure Sports',
        'Rental Car Damage',
        'Cancel for Any Reason (CFAR)'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: 90,
      description: 'Complete protection for your family',
      features: [
        'All Premium features',
        'Coverage for children under 18',
        'Family-friendly activities',
        'Childcare coverage',
        'Medical expenses for children'
      ]
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: 'Comprehensive Coverage',
      description: 'Protection against trip cancellations, medical emergencies, and unexpected events.'
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: 'Worldwide Protection',
      description: 'Get covered no matter where your travels take you around the globe.'
    },
    {
      icon: <Headset className="w-10 h-10 text-blue-600" />,
      title: '24/7 Assistance',
      description: 'Round-the-clock support for emergencies and travel assistance.'
    },
    {
      icon: <CreditCard className="w-10 h-10 text-blue-600" />,
      title: 'Easy Claims Process',
      description: 'Simple and fast claims processing with our dedicated support team.'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Insurance</h1>
          <p className="text-xl max-w-2xl">Comprehensive protection for your peace of mind while traveling</p>
        </div>
      </div>

      <PageContainer>
        {/* Why Choose Our Insurance */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Why Choose Our Travel Insurance?</h2>
            <p className="text-black max-w-3xl mx-auto">
              Our comprehensive travel insurance plans are designed to protect you from unexpected events before and during your trip, 
              giving you peace of mind wherever your travels take you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance Plans */}
        <section className="py-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Insurance Plans</h2>
            <p className="text-black max-w-3xl mx-auto">
              Choose the perfect coverage for your travel needs. All plans include 24/7 emergency assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500 transform -translate-y-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
                  <p className="text-black mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">${plan.price}</span>
                    <span className="text-black"> / person</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Get {plan.name} Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What does travel insurance typically cover?',
                answer: 'Travel insurance typically covers trip cancellations, medical emergencies, lost or delayed baggage, trip interruptions, and emergency evacuations. Coverage varies by plan, so it\'s important to review the policy details.'
              },
              {
                question: 'When should I purchase travel insurance?',
                answer: 'It\'s best to purchase travel insurance soon after making your initial trip deposit. This ensures you can take advantage of time-sensitive benefits like pre-existing condition waivers and cancel for any reason coverage.'
              },
              {
                question: 'Can I get travel insurance after booking my trip?',
                answer: 'Yes, you can purchase travel insurance after booking your trip, but some benefits may be time-sensitive. For full coverage, it\'s recommended to purchase insurance within 10-21 days of your initial trip deposit.'
              },
              {
                question: 'Does travel insurance cover COVID-19 related issues?',
                answer: 'Many of our plans now include coverage for COVID-19 related medical expenses and trip interruptions. However, coverage varies by plan, so please review the specific policy details.'
              },
              {
                question: 'How do I file a claim?',
                answer: 'To file a claim, log in to your account on our website and follow the claims process. You\'ll need to submit supporting documentation such as receipts, medical reports, or police reports, depending on the nature of your claim.'
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full text-left p-4 font-medium bg-gray-50 hover:bg-gray-100 focus:outline-none text-black">
                  {item.question}
                </button>
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center my-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Protect Your Journey?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Get a free quote and purchase your travel insurance in minutes. Travel with peace of mind knowing you're covered.
          </p>
          <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
            Get a Free Quote
          </button>
        </section>

      </PageContainer>
    </MainLayout>
  );
};

export default TravelInsurance;
