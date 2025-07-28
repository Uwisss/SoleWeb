import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Clock, AlertCircle, CheckCircle2, XCircle, CreditCard, FileText, BadgeDollarSign, Shield, Calendar, Plane, Hotel, AlertTriangle } from 'lucide-react';

const Refund = () => {
  const policies = [
    {
      title: "Refund Eligibility",
      content: "Refunds are applicable only for cancellable bookings. Non-refundable bookings, as indicated at the time of purchase, are not eligible for refunds under any circumstances.",
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Requesting a Refund",
      content: "To request a refund, you must contact our customer service within the specified period mentioned in your booking terms. Refund requests must be submitted in writing, either via email or through our website's refund request form.",
      icon: <FileText className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Processing Time",
      content: "Refund processing may take up to 180 days from the date of request. This timeframe allows us to coordinate with service providers (airlines, hotels, etc.) and process your request efficiently.",
      icon: <Clock className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Deductions",
      content: "A standard processing fee will be deducted from the refund amount. Additionally, any non-refundable fees imposed by third-party service providers (such as airlines or hotels) will also be deducted.",
      icon: <BadgeDollarSign className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Partial Refunds",
      content: "For partially used services (e.g., one-way of a round-trip ticket), the refund will be calculated based on the unused portion of the service, minus applicable fees and deductions.",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Mode of Refund",
      content: "Refunds will be credited back to the original mode of payment. If the original payment method is unavailable, we will offer an alternative refund method in compliance with financial regulations.",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Force Majeure",
      content: "In cases of force majeure, such as natural disasters, pandemics, or other unforeseen major events, refunds will be subject to the policies of third-party service providers. We will assist customers in obtaining any possible refunds under such circumstances.",
      icon: <Shield className="w-5 h-5 text-blue-600" />
    },
    {
      title: "No-Show Policy",
      content: "No refunds will be issued for no-shows or missed departures/arrivals. It is the customer's responsibility to adhere to the scheduled times.",
      icon: <XCircle className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Cancellation by Us",
      content: "If we cancel a service due to operational reasons or circumstances beyond our control, a full refund will be issued without any deductions.",
      icon: <AlertCircle className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Amendments",
      content: "Any changes to bookings that result in a lower price will be refunded as per the terms above, minus applicable change fees.",
      icon: <FileText className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Legal Compliance",
      content: "Our refund policy complies with applicable laws and respects the rights of both the customers and the service providers.",
      icon: <Shield className="w-5 h-5 text-blue-600" />
    }
  ];

  const nonRefundableItems = [
    'Airline tickets once issued',
    'Visa application fees',
    'Travel insurance premiums',
    'Third-party service fees',
    'Bank or payment processing fees',
    'Special event tickets',
    'Administrative fees',
    'Service charges'
  ];

  return (
    <MainLayout>
      <Head title="Refund Policy | Sole Explorer" />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <BadgeDollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Refund Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Main Policies */}
            <div className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      {policy.icon}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{policy.title}</h2>
                      <p className="text-gray-600">{policy.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Non-Refundable Items */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <XCircle className="w-6 h-6 text-red-500 mr-3" />
                Non-Refundable Items & Fees
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {nonRefundableItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Important Notice</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Sole Explorer acts as an agent for travel service providers. Due to the volatile nature of the travel industry, 
                      refunds for flight tickets will only be processed once received from the respective airline. In the event that an 
                      airline discontinues operations, Sole Explorer cannot be held responsible for refunds not issued by the airline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 text-right">
            <p className="text-sm text-gray-500">
              Need help with a refund? <Link href="/contact" className="text-blue-600 hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Refund;
