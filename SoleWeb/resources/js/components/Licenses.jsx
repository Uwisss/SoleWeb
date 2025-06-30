import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BadgeCheck } from 'lucide-react';

const licenses = [
  { 
    id: 1, 
    image: '/img/licenses/dot.png', 
    name: 'Department of Tourism',
    description: 'Fully accredited by the Philippine Department of Tourism ensuring quality service and standards.'
  },
  { 
    id: 2, 
    image: '/img/licenses/tpbph.png', 
    name: 'Tourism Promotions Board',
    description: 'Recognized by the Tourism Promotions Board for excellence in travel services.'
  },
  { 
    id: 3, 
    image: '/img/licenses/philtoa.png', 
    name: 'Philippine Tour Operators Association',
    description: 'Active member of PHILTOA, the country\'s leading association of travel and tour operators.'
  },
  { 
    id: 4, 
    image: '/img/licenses/rtaa.png', 
    name: 'Regional Travel Agencies Association',
    description: 'Member of RTAA, ensuring we maintain the highest standards in travel services.'
  },
  { 
    id: 5, 
    image: '/img/licenses/nitas.png', 
    name: 'National Inbound Travel Association',
    description: 'Recognized by NITAS for our commitment to inbound tourism excellence.'
  },
  { 
    id: 6, 
    image: '/img/licenses/tourismcongress.png', 
    name: 'Philippine Travel Agencies Association',
    description: 'Member of PTAA, the national association of travel and tour agencies in the Philippines.'
  },
];

const Licenses = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Accreditations & Licenses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to be recognized and accredited by the leading tourism organizations in the Philippines.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {licenses.map((license) => (
            <motion.div 
              key={license.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img 
                  src={license.image} 
                  alt={license.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{license.name}</h3>
              <p className="text-sm text-gray-500">{license.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-lime-50 rounded-xl p-6 md:p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-100 text-lime-600 mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Safety is Our Priority</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            All our partners and services are vetted to ensure they meet the highest standards of safety and quality.
            We are committed to providing you with a secure and enjoyable travel experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Licenses;
