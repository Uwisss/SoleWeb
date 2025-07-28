import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Tag, Shield, Star, Sparkles, Check, ShieldCheck, Users, Headset } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global Network',
    description: 'Access to 2M+ properties and experiences in 200+ countries with local expertise.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    delay: 0.1,
    features: ['200+ Countries', 'Local Experts', '24/7 Support']
  },
  {
    icon: <Tag className="w-5 h-5" />,
    title: 'Best Value',
    description: 'Exclusive member rates and our best price guarantee for complete peace of mind.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    delay: 0.2,
    features: ['Price Match', 'Members-Only Deals', 'No Hidden Fees']
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Travel Protection',
    description: '24/7 global support and verified accommodations for worry-free journeys.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    delay: 0.3,
    features: ['24/7 Support', 'Verified Stays', 'Travel Insurance']
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'Trusted Service',
    description: 'Consistently recognized for excellence in travel services.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    delay: 0.4,
    features: ['5-Star Rated', 'Award-Winning', '10+ Years Experience']
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Travel With <span className="text-lime-600">SoleTravel</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience the difference with our dedicated service and expert knowledge that makes every journey memorable.
            </motion.p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.4 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor} mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2 mt-4">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};

const OurPromise = () => {
  const promises = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'FULLY ACCREDITED',
      description: 'Sole Explorer is a fully accredited travel agency, registered with the Department of Tourism and compliant with all local business regulations. Our accreditations are your assurance of professional and reliable service.',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      iconColor: 'text-blue-700'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'TRAVEL EXPERTS',
      description: 'Our team of travel consultants brings years of industry experience and local knowledge. We stay updated on the latest travel trends, visa requirements, and destination insights to craft your perfect itinerary.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      iconColor: 'text-emerald-800'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'UNMATCHED VALUE',
      description: 'We leverage our strong industry relationships to secure exclusive deals and packages that you won\'t find elsewhere. Enjoy premium experiences at competitive prices with our carefully curated travel solutions.',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      iconColor: 'text-amber-800'
    },
    {
      icon: <Headset className="w-6 h-6" />,
      title: '24/7 SUPPORT',
      description: 'Your journey doesn\'t end with a booking. Our dedicated support team is available around the clock to assist with any questions or concerns, ensuring peace of mind throughout your travels.',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      iconColor: 'text-purple-800'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'TRAVEL PROTECTION',
      description: 'We prioritize your safety with comprehensive travel protection options. From trip cancellations to medical emergencies, we\'ve got you covered every step of the way.',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      iconColor: 'text-rose-800'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'GLOBAL REACH',
      description: 'With partners in over 100 countries, we offer seamless travel experiences worldwide. Whether it\'s a local getaway or an international adventure, we make global travel simple and enjoyable.',
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      iconColor: 'text-teal-800'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Travelers Trust <span className="text-lime-600">Sole Explorer</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're committed to delivering exceptional travel experiences with integrity, expertise, and personalized service.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`p-6 rounded-xl border ${promise.border} ${promise.bg} hover:shadow-md transition-all duration-300`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${promise.bg.replace('50', '100')} ${promise.border} mb-4`}>
                {React.cloneElement(promise.icon, { className: `${promise.icon.props.className} ${promise.iconColor || 'text-gray-800'}` })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {promise.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export { WhyChooseUs, OurPromise };

export default WhyChooseUs;
