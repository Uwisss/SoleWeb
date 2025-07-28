import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Travel Enthusiast',
            content: 'Our trip to El Nido was absolutely breathtaking! The crystal-clear waters and stunning limestone cliffs exceeded all our expectations. The tour guides were knowledgeable and made our experience unforgettable.',
            rating: 5,
            image: '/img/testimonials/person1.jpg',
            location: 'El Nido, Palawan'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Photography Enthusiast',
            content: 'As a photographer, I was blown away by the natural beauty of the Philippines. The landscapes are like nowhere else on Earth. The tour was well-organized, and I captured some of my best shots here.',
            rating: 5,
            image: '/img/testimonials/person2.jpg',
            location: 'Bohol'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Solo Traveler',
            content: 'Traveling solo to the Philippines was one of the best decisions I\'ve made. The locals are incredibly friendly, and the beaches are paradise. I felt safe and welcomed throughout my entire journey.',
            rating: 4,
            image: '/img/testimonials/person3.jpg',
            location: 'Siargao'
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Adventure Seeker',
            content: 'The canyoneering experience in Cebu was the highlight of our trip! The guides were professional and made sure everyone was safe while having an amazing time. The waterfalls were absolutely stunning!',
            rating: 5,
            image: '/img/testimonials/person4.jpg',
            location: 'Cebu'
        },
        {
            id: 5,
            name: 'Lisa Wong',
            role: 'Honeymooner',
            content: 'Our honeymoon in the Philippines was magical! We stayed in a beautiful beachfront villa and enjoyed private island hopping. The sunset dinners on the beach were absolutely romantic and unforgettable.',
            rating: 5,
            image: '/img/testimonials/person5.jpg',
            location: 'Coron'
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Diving Enthusiast',
            content: 'The diving spots in the Philippines are world-class! We saw incredible marine life including turtles, sharks, and countless colorful fish. The dive masters were extremely knowledgeable about the local marine ecosystem.',
            rating: 4,
            image: '/img/testimonials/person6.jpg',
            location: 'Tubbataha Reef'
        },
        {
            id: 7,
            name: 'Maria Garcia',
            role: 'Family Traveler',
            content: 'Traveling with kids to the Philippines was easier than we expected. The resorts were family-friendly, and there were plenty of activities for all ages. The kids loved the white sand beaches and the friendly locals!',
            rating: 5,
            image: '/img/testimonials/person7.jpg',
            location: 'Boracay'
        },
        {
            id: 8,
            name: 'Thomas Müller',
            role: 'Cultural Explorer',
            content: 'The cultural experiences in the Philippines were fascinating. From the rice terraces of Banaue to the historic streets of Vigan, every destination had its own unique charm and history to discover.',
            rating: 4,
            image: '/img/testimonials/person8.jpg',
            location: 'Banaue & Vigan'
        },
        {
            id: 9,
            name: 'Aisha Patel',
            role: 'Food Lover',
            content: 'The food in the Philippines was a delightful surprise! From the famous lechon to the fresh seafood, every meal was a treat. The food tours gave us a great insight into the local cuisine and culture.',
            rating: 5,
            image: '/img/testimonials/person9.jpg',
            location: 'Cebu & Davao'
        }
    ];

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    // Handle dot navigation click
    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    // Handle next/previous navigation
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
    };

    // Get current testimonials to display (3 at a time)
    const getCurrentTestimonials = () => {
        const startIndex = currentIndex * 3;
        return testimonials.slice(startIndex, startIndex + 3);
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
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
                            What Our <span className="text-lime-600">Travelers Say</span>
                        </motion.h2>

                        <motion.p 
                            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Hear from our community of happy travelers who have experienced the beauty of the Philippines with us.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Navigation Arrows */}
                <div className="relative">
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {getCurrentTestimonials().map((testimonial) => (
                            <motion.div 
                                key={testimonial.id} 
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                                        />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-500">{testimonial.location}</span>
                                </div>
                                <Quote className="w-8 h-8 text-lime-100 mb-4" />
                                <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.content}"</p>
                                <div className="flex items-center mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=4ade80&color=fff';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-16 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="mt-12 flex justify-center space-x-3">
                    {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'w-8 bg-lime-600' : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
