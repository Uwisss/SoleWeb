import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BackToTop from '../components/Layout/BackToTop';
import AuthModal from '../components/Layout/AuthModal';

export default function MainLayout({ children, title = 'Sole Explorer - Travel and Tours' }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      
      <Header 
        onLoginClick={handleLoginClick} 
        onSignupClick={handleSignupClick} 
      />
      
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      <Footer />
      <BackToTop />
      
      {/* Auth Modals */}
      {isLoginModalOpen && (
        <AuthModal 
          isOpen={isLoginModalOpen} 
          onClose={closeModals}
          type="login"
        />
      )}
      
      {isSignupModalOpen && (
        <AuthModal 
          isOpen={isSignupModalOpen} 
          onClose={closeModals}
          type="signup"
        />
      )}
    </div>
  );
}
