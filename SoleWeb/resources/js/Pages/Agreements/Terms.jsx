import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { FileText, ArrowLeft, Globe, Shield, User, CreditCard, AlertTriangle, RefreshCw, Scale, Info, Mail, Lock } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Sole Explorer. These Terms and Conditions (\"Terms\") govern your access to and use of our website, services, and any related applications (collectively, the 'Services'). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our Services.",
      icon: <FileText className="w-5 h-5 text-blue-600" />
    },
    {
      title: "2. Use of Website",
      content: "You agree to use our website and Services only for lawful purposes and in accordance with these Terms. You must not use our Services in any way that violates any applicable laws or regulations, infringes on the rights of others, or interferes with the use of our Services by others. Prohibited activities include but are not limited to: unauthorized access to our systems, data mining, and the use of automated systems to extract data from our website.",
      icon: <Globe className="w-5 h-5 text-blue-600" />
    },
    {
      title: "3. Intellectual Property",
      content: "All content on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Sole Explorer or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or in any way exploit any of the content without our express written permission.",
      icon: <Shield className="w-5 h-5 text-blue-600" />
    },
    {
      title: "4. User Accounts",
      content: "To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.",
      icon: <User className="w-5 h-5 text-blue-600" />
    },
    {
      title: "5. Booking and Payments",
      content: "All bookings made through our Services are subject to availability and our acceptance. We reserve the right to refuse any booking in our sole discretion. Prices for our services are subject to change without notice. Full payment is required at the time of booking unless otherwise stated in writing. By making a booking, you represent and warrant that you have the legal right to use any payment method used for the booking.",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />
    },
    {
      title: "6. Limitation of Liability",
      content: "To the maximum extent permitted by law, Sole Explorer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services; or (c) unauthorized access, use, or alteration of your transmissions or content.",
      icon: <AlertTriangle className="w-5 h-5 text-blue-600" />
    },
    {
      title: "7. Changes to Terms",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.",
      icon: <RefreshCw className="w-5 h-5 text-blue-600" />
    },
    {
      title: "8. Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sole Explorer is registered, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located within that jurisdiction for the purpose of litigating all such claims or disputes.",
      icon: <Scale className="w-5 h-5 text-blue-600" />
    },
    {
      title: "9. Privacy Policy",
      content: "Your use of our Services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our Services, you consent to the collection and use of your information as described in the Privacy Policy.",
      icon: <Lock className="w-5 h-5 text-blue-600" />
    },
    {
      title: "10. Travel and Tour Specific Terms",
      content: "The following terms apply specifically to our travel and tour services:",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      subsections: [
        "Down payment is non-refundable but transferable for the same reserved date only.",
        "Fully paid slots will be forfeited for no-show participants.",
        "Rates are based on room sharing of 6-10 pax unless otherwise specified.",
        "We reserve the right to cancel the tour due to inclement weather conditions, acts of God, and other unforeseen circumstances for the safety of our guests. Option to divert to another destination with the same rate is available.",
        "We reserve the right to cancel the tour if the number of pax/joiners doesn't reach the minimum required (10 pax). In such cases, we may transfer you to a partner agency to proceed with the tour.",
        "Rebooking is allowed once as long as it's done 1 month prior to the travel date. Rebooking must be within a 3-month period from the original date.",
        "Cancellations made within 2 weeks prior to the travel date will result in forfeiture of all payments.",
        "Travel light - 1 small bag is allowed per pax. Luggage and trolleys are not allowed in LAND TOURS.",
        "Always be punctual for all scheduled activities and departures.",
        "Full payment is required 30-45 days prior to travel date. Failure to comply means cancellation and no refund will be given.",
        "Travel insurance is complimentary from Sole Explorer. Any accident, loss, injury and damage to property in connection with any accommodation, transportation, optional activities or other services resulting directly or indirectly from any occurrence or defects of vehicles, breakdown of equipment, Acts of God, Strikes, Civil disturbances, theft, delay or cancellation or any change itinerary shall not be taken against SOLE EXPLORER TRAVEL AND TOURS and damage fee shall be paid by what is covered by the Travel Insurance provider."
      ]
    },
    {
      title: "11. International Travel Disclaimer",
      content: "For international bookings:",
      icon: <AlertTriangle className="w-5 h-5 text-blue-600" />,
      subsections: [
        "In the event that the Immigration Officer (IO) assesses and denies the passenger travel entry, such decision is under the discretion of the IO not permitting the passenger to leave the country. The travel agency has no control over such discretion.",
        "All tickets, tours, transfers, and/or accommodations for international bookings are non-refundable once finalized and paid.",
        "Passengers must comply with all immigration requirements and bear full responsibility for any denial of boarding or entry."
      ]
    },
    {
      title: "12. Contact Information",
      content: "If you have any questions about these Terms, please contact us at [Your Contact Information]. We welcome your questions and feedback regarding these Terms.",
      icon: <Mail className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <MainLayout>
      <Head title="Terms and Conditions | Sole Explorer" />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    {section.icon}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {section.content}
                    </p>
                    {section.subsections && (
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {section.subsections.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Important Information</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                      If you do not agree to these Terms, you must not use our Services. We recommend that you print a copy of these 
                      Terms for your records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-500">
                Need help understanding these terms? <Link href="/contact" className="text-blue-600 hover:underline">Contact our support team</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
