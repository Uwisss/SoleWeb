import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Lock, Globe } from 'lucide-react';

export default function Footer() {
    const { url } = usePage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <div className="flex items-center">
                                <img 
                                    src="/img/SoleLogo.png" 
                                    alt="Sole Explorer" 
                                    className="h-10 w-auto mr-3" 
                                />
                                <span className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                                    Sole Explorer
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Your ultimate travel companion for discovering the most breathtaking destinations around the world.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, url: 'https://facebook.com/soleexplorer', label: 'Facebook' },
                                { icon: Instagram, url: 'https://instagram.com/soleexplorer', label: 'Instagram' },
                                { icon: Twitter, url: 'https://twitter.com/soleexplorer', label: 'Twitter' }
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-lime-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Destinations', path: '/destinations' },
                                { name: 'Tours', path: '/tours' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' },
                                { name: 'Admin', path: '/admin/login' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.path}
                                        className={`hover:text-lime-400 transition-colors ${url === link.path ? 'text-lime-400' : 'text-gray-400'}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-lime-400 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-400">F1380 Manila East Road, Taytay Rizal</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-lime-400 mr-3 flex-shrink-0" />  
                                <a href="tel:+639088896827" className="text-gray-400 hover:text-white transition-colors">
                                    +63 908 889 6827
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-lime-400 mr-3 flex-shrink-0" />
                                <a href="mailto:soleexplorer16@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    soleexplorer16@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="py-6 border-t border-gray-800">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">We Accept</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                        <img src="/img/payment/visa.png" alt="Visa" className="h-8 w-auto bg-white p-1 rounded" />
                        <img src="/img/payment/master.png" alt="Mastercard" className="h-8 w-auto bg-white p-1 rounded" />
                        <img src="/img/payment/gcash.png" alt="GCash" className="h-8 w-auto bg-white p-1 rounded" />
                        <img src="/img/payment/paymaya.png" alt="PayMaya" className="h-8 w-auto bg-white p-1 rounded" />
                        <img src="/img/payment/bpi.png" alt="BPI" className="h-8 w-auto bg-white p-1 rounded" />
                        <img src="/img/payment/711.png" alt="7-Eleven" className="h-8 w-auto bg-white p-1 rounded" />
                    </div>
                </div>

                {/* Copyright and Admin Button */}
                <div className="pt-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500 text-center md:text-left">
                            &copy; {currentYear} Sole Explorer. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <Link 
                                href="/admin" 
                                className="inline-flex items-center text-sm text-gray-400 hover:text-lime-400 transition-colors"
                            >
                                <Lock className="h-4 w-4 mr-1.5" />
                                Admin Panel
                            </Link>
                            <Link 
                                href="/privacy" 
                                className="text-sm text-gray-500 hover:text-lime-400 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/terms" 
                                className="text-sm text-gray-500 hover:text-lime-400 transition-colors"
                            >
                                Terms
                            </Link>
                            <div className="flex items-center">
                                <Globe className="h-4 w-4 text-gray-500 mr-1" />
                                <span className="text-sm text-gray-500">PH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
