import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Star, MapPin, Target, Award, Heart, ShieldCheck, BarChart2, MapPin as MapPinIcon } from 'lucide-react';
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

  // Company information
  const companyInfo = {
    name: 'Sole Explorer Travel and Tours',
    description: 'One of the trusted and legit travel & tour operators in the Philippines, providing affordable and customized tour packages. We are a Destination Management Company (DMC) specializing in inbound and outbound travel, leisure, adventure, team buildings, educational tours, health/medical and wellness, cultural heritage tours, food and farm experiences, immersions, MICE, and other travel-related services.'
  };

  // Core statements
  const statements = {
    vision: {
      title: 'Our Vision',
      content: 'To become a well-known travel service provider by joining different organizations to enhance my knowledge in the travel industry. As well as to partner with the best tour operators around the globe to help other travel agents especially those who are just starting their own business.',
      icon: <Globe className="w-7 h-7 text-lime-700" />
    },
    mission: {
      title: 'Our Mission',
      content: 'To provide quality and affordable travel services that’s suits the budget of the clients, without sacrificing the memories they will experience. Our team of efficient and reliable staff is always available to answer inquiries, arrange services, and provide full customer assistance for the whole duration of their trip. Lastly, is to promote Philippines tourism globally as well.',
      icon: <Target className="w-7 h-7 text-lime-700" />
    },
    objective: {
      title: 'Our Objective',
      content: 'Our trademark of providing affordable and hassle-free tour packages stands to be strengthened and enhanced that offers budget-friendly tour rates for enjoyable & convenient trips.',
      icon: <Award className="w-7 h-7 text-lime-700" />
    }
  };

  // Core values
  const values = [
    {
      title: 'Customer Focus',
      description: 'Committed to delivering exceptional service and creating memorable travel experiences that exceed expectations.',
      icon: <Heart className="w-6 h-6 text-lime-600" />
    },
    {
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty and ethical business practices in all our operations.',
      icon: <ShieldCheck className="w-6 h-6 text-lime-600" />
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our services and adopting new technologies to provide the best travel solutions.',
      icon: <BarChart2 className="w-6 h-6 text-lime-600" />
    },
    {
      title: 'Sustainability',
      description: 'Promoting responsible tourism that benefits local communities and preserves natural resources.',
      icon: <MapPinIcon className="w-6 h-6 text-lime-600" />
    }
  ];

  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ScrollAnimation yOffset={40} duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-lime-600">{companyInfo.name}</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            {companyInfo.description}
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                    Founded with a passion for exploration, {companyInfo.name} has been helping travelers discover the world's most beautiful destinations. We believe in creating meaningful travel experiences that go beyond the ordinary.
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

        {/* Core Statements */}
        <div className="mt-20 bg-gradient-to-br from-lime-50 to-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-inner">
          <ScrollAnimation yOffset={30} duration={0.8} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Vision <span className="text-lime-600">&</span> Mission
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(statements).map(([key, { title, content, icon }]) => (
              <motion.div
                key={key}
                className="group bg-white p-8 rounded-2xl border-2 border-lime-100 hover:border-lime-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: key === 'vision' ? 0.1 : key === 'mission' ? 0.2 : 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-lime-400 to-lime-600"></div>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-lime-50 rounded-xl shadow-sm group-hover:bg-lime-100 transition-colors duration-300">
                    {React.cloneElement(icon, { className: 'w-7 h-7 text-lime-700' })}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">{content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 bg-gradient-to-br from-white to-lime-50 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-inner">
          <ScrollAnimation yOffset={30} duration={0.8} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-lime-600">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The fundamental principles that guide our every decision and action
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-lime-50 hover:border-lime-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-lime-50 flex items-center justify-center mb-6 group-hover:bg-lime-100 transition-colors duration-300">
                  {React.cloneElement(value.icon, { className: 'w-8 h-8 text-lime-600' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
