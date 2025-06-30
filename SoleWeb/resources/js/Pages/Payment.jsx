import React, { useState } from 'react';
import { usePage, Head, Link } from '@inertiajs/react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Payment = () => {
    const { props } = usePage();
    const [selectedMethod, setSelectedMethod] = useState(null);
    
    // Extract package data with defaults
    const packageData = props?.package || {};
    const {
        title = 'Tour Package',
        destination = 'Destination',
        duration = '3 Days / 2 Nights',
        price = '0.00',
        currency = 'PHP',
        discount = '0.00',
        image = '/img/placeholder-tour.jpg'
    } = packageData;
    
    const paymentMethods = [
        { id: 'gcash', name: 'GCash', image: '/img/payment/gcash.png' },
        { id: 'paymaya', name: 'PayMaya', image: '/img/payment/paymaya.png' },
        { id: 'bpi', name: 'BPI', image: '/img/payment/bpi.png' },
        { id: 'visa', name: 'Credit/Debit Card', image: '/img/payment/visa.png' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedMethod) {
            alert('Please select a payment method');
            return;
        }
        // Handle payment submission
        alert(`Processing payment via ${selectedMethod}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Head>
                <title>Payment - {tourPackage?.title || 'Tour Package'}</title>
            </Head>

            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-2xl font-bold text-gray-800">Complete Your Booking</h1>
                            <p className="text-gray-600 mt-2">Choose your preferred payment method</p>
                        </div>

                        <div className="md:flex">
                            <div className="md:w-2/3 p-6 border-r border-gray-200">
                                <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {paymentMethods.map((method) => (
                                            <div 
                                                key={method.id}
                                                onClick={() => setSelectedMethod(method.id)}
                                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                    selectedMethod === method.id 
                                                        ? 'border-lime-500 bg-lime-50' 
                                                        : 'border-gray-200 hover:border-lime-300'
                                                }`}
                                            >
                                                <div className="h-16 flex items-center justify-center mb-2">
                                                    <img 
                                                        src={method.image} 
                                                        alt={method.name} 
                                                        className="max-h-full max-w-full object-contain"
                                                    />
                                                </div>
                                                <p className="text-sm text-center text-gray-700">{method.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            disabled={!selectedMethod}
                                            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                                                selectedMethod 
                                                    ? 'bg-lime-600 hover:bg-lime-700' 
                                                    : 'bg-gray-400 cursor-not-allowed'
                                            }`}
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="md:w-1/3 p-6 bg-gray-50">
                                <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
                                
                                {tourPackage?.image && (
                                    <img 
                                        src={tourPackage.image} 
                                        alt={tourPackage.title} 
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                )}
                                
                                <h3 className="font-medium text-gray-900">{tourPackage?.title || 'Tour Package'}</h3>
                                <p className="text-gray-600 text-sm mt-1">{tourPackage?.destination || 'Destination'}</p>
                                
                                <div className="mt-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-medium">{tourPackage?.duration || 'N/A'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Price per person:</span>
                                        <span className="font-medium">
                                            {tourPackage?.currency === 'PHP' ? '₱' : '$'}
                                            {tourPackage?.price || '0.00'}
                                        </span>
                                    </div>
                                    {tourPackage?.discount > 0 && (
                                        <div className="flex justify-between text-red-600">
                                            <span>Discount:</span>
                                            <span>-{tourPackage.currency === 'PHP' ? '₱' : '$'}{tourPackage.discount}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-gray-200 my-2"></div>
                                    <div className="flex justify-between font-semibold text-gray-900">
                                        <span>Total Amount:</span>
                                        <span>
                                            {tourPackage?.currency === 'PHP' ? '₱' : '$'}
                                            {tourPackage?.discount > 0 
                                                ? (parseFloat(tourPackage.price) - parseFloat(tourPackage.discount || 0)).toFixed(2)
                                                : parseFloat(tourPackage?.price || 0).toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 text-sm text-gray-500">
                                    <p className="mb-2">Need help?</p>
                                    <p>Email: support@soleexplorer.com</p>
                                    <p>Phone: +63 123 456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Payment;
