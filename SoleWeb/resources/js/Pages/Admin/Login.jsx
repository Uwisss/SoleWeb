import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';

export default function AdminLogin() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        router.visit('/admin/dashboard');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <Head title="Admin Login | Sole Explorer" />
            
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <img 
                            src="/img/SoleLogo.png" 
                            alt="Sole Explorer" 
                            className="h-16 w-auto"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Admin Access
                    </h1>
                    <p className="text-gray-600">
                        Demo Mode - No Credentials Required
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">
                            Username (demo)
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                defaultValue="admin"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition duration-200 bg-gray-50 text-gray-900"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-700">
                                Password (demo)
                            </label>
                        </div>
                        <div className="mt-1">
                            <input
                                type="password"
                                defaultValue="••••••••"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition duration-200 bg-gray-50 text-gray-900"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition duration-200 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Redirecting to Dashboard...
                                </>
                            ) : 'Sign in to Dashboard'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm">
                    <a href="/" className="font-medium text-gray-600 hover:text-lime-500">
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}
