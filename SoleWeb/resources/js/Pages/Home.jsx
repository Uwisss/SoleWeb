import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/components/Layout/Header';
import Hero from '@/components/Hero';
import PaymentBanner from '@/components/PaymentBanner';
import WhyChooseUs, { OurPromise } from '@/components/WhyChooseUs';
import OurServices from '@/components/OurServices';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import Licenses from '@/components/Licenses';
import Location from '@/components/Location';
import Footer from '@/components/Layout/Footer';
import AuthModal from '@/components/Layout/AuthModal';
import BackToTop from '@/components/Layout/BackToTop';

export default function Home() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalTab, setAuthModalTab] = useState('login');

    const openAuthModal = (tab = 'login') => {
        setAuthModalTab(tab);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Sole Explorer - Discover the Beauty of the Philippines</title>
                <meta name="description" content="Experience unforgettable journeys to the most beautiful destinations in the Philippines. Book your dream vacation with us today." />
            </Head>
            
            <Header 
                onLoginClick={() => openAuthModal('login')}
                onSignupClick={() => openAuthModal('register')}
            />
            
            <main className="flex-grow">
                <Hero />
                <PaymentBanner />
                <OurServices />
                <WhyChooseUs />
                <OurPromise />
                <AboutUs />
                <Testimonials />
                <Location />
                <Licenses />
            </main>
            
            <Footer />
            <BackToTop />
            
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={closeAuthModal}
                initialTab={authModalTab}
            />
        </div>
    );
}
