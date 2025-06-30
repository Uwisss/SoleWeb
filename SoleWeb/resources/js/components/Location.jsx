import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="find-us" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Visit our office or get in touch with our friendly team.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 mr-4">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Office</h3>
                  <p className="text-lime-600 font-medium">Taytay, Rizal, Philippines</p>
                </div>
              </div>
              
              <div className="space-y-5 mb-10">
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-1">Address</h4>
                  <p className="text-gray-600">F1380 Manila East Road, Brgy. San Juan, Taytay, Rizal, Philippines</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-1">Coordinates</h4>
                  <p className="text-gray-600">14.5715° N, 121.1147° E</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">Business Hours</h4>
                  <div className="space-y-1 text-gray-600">
                    <p className="flex justify-between"><span>Monday - Friday:</span> <span className="font-medium">8:00 AM - 5:00 PM</span></p>
                    <p className="flex justify-between"><span>Saturday:</span> <span className="font-medium">8:00 AM - 5:00 PM</span></p>
                    <p className="flex justify-between"><span>Sunday:</span> <span className="font-medium">Closed</span></p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=14.5715,121.1147" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-0 text-base font-medium rounded-full text-white bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Get Directions
              </a>
            </div>
            
            <div className="md:w-1/2 h-96 md:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.749698223772!2d121.1147!3d14.5715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7cc7c7c7c7d%3A0x3e3e3e3e3e3e3e3e!2sF1380%20Manila%20East%20Road%2C%20Taytay%2C%20Rizal!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
