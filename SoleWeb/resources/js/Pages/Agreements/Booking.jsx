import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, FileText, AlertCircle, CreditCard, Globe, Users, Info, Shield, Clock } from 'lucide-react';

const Booking = () => {
  const generalTerms = [
    "By receiving this SOA, you understand and agree to the terms and conditions stated.",
    "This is BOOK AND BUY unless under group booking. RATES ARE SUBJECT TO CHANGE WITHOUT PRIOR NOTICE.",
    "Flight fares are subject to change without prior notice unless timely partial or full payment has been made to guarantee fixed rates and/or fares.",
    "Hotel rooms are subject to availability unless partial or full payment has been made on time to guarantee accommodation. RATES ARE SUBJECT TO CHANGE WITHOUT PRIOR NOTICE.",
    "The company reserves the right to change the accommodation and/or airlines in the event airline seats and/or hotel rooms are no longer available due to late payment and/or non-payment of the remaining and/or full balance of the client. Provided that, the client shall be notified of such unavailability prior to the change of accommodation and/or airlines.",
    "Any further revisions or modifications once booking has been finalized will incur additional charges accordingly.",
    "For Government employees, you must secure a TRAVEL AUTHORITY/CLEARANCE from your respective government agency.",
    "Sole Explorer acts as an agent for travel service providers and is not responsible for their acts or omissions.",
    "Passengers are responsible for ensuring they meet all entry requirements for their destination, including visas, passports, and health regulations.",
    "Travel insurance is highly recommended for all bookings.",
    "Special requests (seat assignments, dietary requirements, etc.) will be communicated but cannot be guaranteed."
  ];

  const paymentTerms = [
    "NON PAYMENT ON OR BEFORE THE DUE DATE MEANS CANCELLATION.",
    "FULL PAYMENT is required 1 month or 45 days prior to departure date.",
    "A non-refundable down payment is REQUIRED to secure the slot at least 2 months prior to the chosen departure date.",
    "Once the guaranteed deposit or downpayment is settled, the client agrees to the company's TERMS AND CONDITIONS.",
    "We accept various payment methods including major credit cards, bank transfers, and other local payment options.",
    "All prices are quoted in the local currency of the booking location unless otherwise stated.",
    "Currency conversion rates, if applicable, are determined by the payment processor and may vary from day to day.",
    "Any additional taxes, fees, or surcharges will be clearly displayed before payment is processed."
  ];

  const cancellationPolicy = [
    "Cancellation is NOT ALLOWED once booking is confirmed.",
    "This is NON REFUNDABLE, NON TRANSFERABLE, NON REROUTABLE, NON REBOOKABLE (unless specified).",
    "Should the client decide to cancel the reservation/booking for whatever purpose it may serve them, such payment will no longer be refunded. It will serve as an inconvenience fee for the time, effort, and service rendered by the travel agency and other third parties involved in accommodating the client's inquiries and reservation requests.",
    "For international flights, in case of being offloaded, it is at the discretion of the Immigration Officers and we have no control. TICKET, HOTEL AND SERVICES ARE NON REFUNDABLE.",
    "In case of force majeure events, alternative arrangements or credit may be offered at our discretion.",
    "Special cancellation policies may apply during peak seasons or for specific promotions."
  ];

  const groupTerms = [
    "Group bookings typically require a deposit to secure services, with the balance due before travel.",
    "Group size reductions may be subject to penalties after a certain date, as specified in your contract.",
    "Rooming lists and final passenger details are typically required 30-60 days before departure.",
    "Name changes may be permitted subject to supplier terms and applicable fees.",
    "Group itineraries are subject to change based on local conditions and supplier availability.",
    "Special terms may apply for student, corporate, or other specialized group travel.",
    "Group coordinators are responsible for communicating all terms and conditions to all group members."
  ];

  const internationalTravel = [
    "Packages with VISA must file an application 3 months prior to departure date.",
    "FOR INTERNATIONAL FLIGHT, in case of being offloaded, it is at the discretion of the Immigration Officers and we have no control. TICKET, HOTEL AND SERVICES ARE NON REFUNDABLE.",
    "Passengers are responsible for obtaining all necessary travel documents, including visas, vaccinations, and travel insurance.",
    "Health and safety regulations vary by destination and may change with little notice.",
    "We recommend checking your government's travel advisories before departure.",
    "For flights, please ensure you comply with the airline's check-in and baggage policies.",
    "Some destinations may have specific entry requirements such as proof of onward travel or sufficient funds.",
    "Time zone differences, local laws, and cultural norms should be considered when planning international travel."
  ];

  return (
    <MainLayout>
      <Head title="Booking Terms and Conditions | Sole Explorer" />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-6">
              <FileText className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Booking Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="space-y-10">
            {/* General Terms */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">1</span>
                General Booking Terms
              </h2>
              <ul className="space-y-3">
                {generalTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <Info className="w-5 h-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">2</span>
                Payment Terms
              </h2>
              <ul className="space-y-3">
                {paymentTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <CreditCard className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">3</span>
                Cancellation Policy
              </h2>
              <ul className="space-y-3">
                {cancellationPolicy.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group Terms */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">4</span>
                Group Bookings
              </h2>
              <ul className="space-y-3">
                {groupTerms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* International Travel */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">5</span>
                International Travel Information
              </h2>
              <ul className="space-y-3">
                {internationalTravel.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <Globe className="w-5 h-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Shield className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Important Legal Notice</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      These terms and conditions are governed by the laws of the jurisdiction where Sole Explorer is registered. 
                      Any disputes shall be subject to the exclusive jurisdiction of the courts in that jurisdiction. 
                      These terms constitute the entire agreement between you and Sole Explorer regarding your booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 text-right">
            <p className="text-sm text-gray-500">
              Need assistance with your booking? <Link href="/contact" className="text-indigo-600 hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Booking;
