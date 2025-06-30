import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Star, MapPin } from 'lucide-react';
import { ScrollAnimation, StaggerContainer } from './UI/ScrollAnimation';

const AboutUs = () => {
  // Add scroll-margin-top to account for fixed header
  useEffect(() => {
    const element = document.getElementById('about');
    if (element) {
      element.style.scrollMarginTop = '100px';
    }
  }, []);

  const stats = [
    { icon: <Globe className="w-6 h-6 text-lime-600" />, value: '50+', label: 'Destinations' },
    { icon: <MapPin className="w-6 h-6 text-lime-600" />, value: '100+', label: 'Tours' },
    { icon: <Users className="w-6 h-6 text-lime-600" />, value: '10K+', label: 'Travelers' },
    { icon: <Star className="w-6 h-6 text-lime-600" />, value: '4.9', label: 'Rating' },
  ];

  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ScrollAnimation yOffset={40} duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-lime-600">Sole Explorer</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Creating unforgettable travel experiences since 2010
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation 
            delay={0.2} 
            duration={0.8} 
            yOffset={50}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img 
                src="/img/team/team.png" 
                alt="Our Team" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </ScrollAnimation>

          <div className="space-y-6">
            <StaggerContainer className="space-y-6">
              <ScrollAnimation yOffset={20} duration={0.6}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
                  <p className="text-gray-600">
                    Founded with a passion for exploration, Sole Explorer has been helping travelers discover the world's most beautiful destinations. We believe in creating meaningful travel experiences that go beyond the ordinary.
                  </p>
                  <p className="text-gray-600">
                    Our team of travel experts combines local knowledge with personalized service to craft journeys that inspire and delight.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation yOffset={30} duration={0.7} delay={0.2}>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-lime-50 transition-colors duration-300"
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <div className="p-2 bg-lime-50 rounded-full">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollAnimation>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
