import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { FileText, RefreshCw, CalendarCheck } from 'lucide-react';

const Agreements = () => {
  const cards = [
    {
      title: "Terms and Conditions",
      description: "Understand the general terms and conditions that govern your use of our services and website.",
      icon: <FileText size={40} className="text-teal-500 mb-4" />,
      link: "/agreements/terms",
      bgColor: "bg-teal-50"
    },
    {
      title: "Refund Policy",
      description: "Learn about our policies regarding refunds, cancellations, and changes to your bookings.",
      icon: <RefreshCw size={40} className="text-blue-500 mb-4" />,
      link: "/agreements/refund",
      bgColor: "bg-blue-50"
    },
    {
      title: "Booking Terms",
      description: "Review the specific terms and conditions for making and managing your travel bookings.",
      icon: <CalendarCheck size={40} className="text-emerald-500 mb-4" />,
      link: "/agreements/booking",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <MainLayout>
      <Head title="Legal Agreements | SoleWeb" />
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Legal Agreements</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency is at the heart of our service. Please take a moment to review our policies and terms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`${card.bgColor} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    {card.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{card.title}</h2>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <Link 
                    href={card.link}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group transition-colors"
                  >
                    Read more
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about our policies or need clarification on any terms, 
              our support team is here to help you.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Agreements;
