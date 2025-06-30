import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    Package, 
    Users, 
    Settings, 
    Menu, 
    X, 
    Plus, 
    Edit, 
    Trash2, 
    ArrowLeft, 
    Image as ImageIcon,
    XCircle,
    ChevronDown,
    MapPin,
    Calendar,
    DollarSign,
    Tag,
    Check,
    FileText,
    Map,
    Shield
} from 'lucide-react';

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('packages');
    const [showAddPackageModal, setShowAddPackageModal] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const [showAddAdminModal, setShowAddAdminModal] = useState(false);
    
    // Close dropdowns when clicking outside
    const dropdownRef = useRef(null);
    const currencyDropdownRef = useRef(null);
    
    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsCategoryDropdownOpen(false);
        }
        if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target)) {
            setShowCurrencyDropdown(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false);
    const [isInclusionsDropdownOpen, setIsInclusionsDropdownOpen] = useState(false);
    const [isHighlightsDropdownOpen, setIsHighlightsDropdownOpen] = useState(false);
    
    // Add click outside handler for dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isCategoryDropdownOpen) {
                setIsCategoryDropdownOpen(false);
            }
        };

        // Add when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        // Return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCategoryDropdownOpen]);
    
    // Form state
    const [formData, setFormData] = useState({
        title: '',
        category: 'cruise', // 'cruise', 'popular', or 'travel'
        destination: '',
        duration: '',
        price: '',
        discount: '',
        description: '',
        images: [],
        itinerary: [{ day: 1, title: '', description: '' }],
        inclusions: [''],
        highlights: ['']
    });
    
    const fileInputRef = useRef(null);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        // In a real app, you would upload these files to a server
        const newImages = files.map(file => ({
            id: URL.createObjectURL(file),
            file,
            preview: URL.createObjectURL(file)
        }));
        
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...newImages]
        }));
    };
    
    const removeImage = (index) => {
        const newImages = [...formData.images];
        newImages.splice(index, 1);
        setFormData(prev => ({
            ...prev,
            images: newImages
        }));
    };
    
    const addItineraryDay = () => {
        setFormData(prev => ({
            ...prev,
            itinerary: [...prev.itinerary, { day: prev.itinerary.length + 1, title: '', description: '' }]
        }));
    };
    
    const updateItinerary = (index, field, value) => {
        const newItinerary = [...formData.itinerary];
        newItinerary[index][field] = value;
        setFormData(prev => ({
            ...prev,
            itinerary: newItinerary
        }));
    };
    
    const addInclusion = () => {
        setFormData(prev => ({
            ...prev,
            inclusions: [...prev.inclusions, '']
        }));
    };
    
    const updateInclusion = (index, value) => {
        const newInclusions = [...formData.inclusions];
        newInclusions[index] = value;
        setFormData(prev => ({
            ...prev,
            inclusions: newInclusions
        }));
    };
    
    const addHighlight = () => {
        setFormData(prev => ({
            ...prev,
            highlights: [...prev.highlights, '']
        }));
    };
    
    const updateHighlight = (index, value) => {
        const newHighlights = [...formData.highlights];
        newHighlights[index] = value;
        setFormData(prev => ({
            ...prev,
            highlights: newHighlights
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would submit this data to your backend
        console.log('Form submitted:', formData);
        // Reset form and close modal
        setFormData({
            title: '',
            category: 'cruise',
            destination: '',
            duration: '',
            price: '',
            currency: 'USD',
            discount: '',
            description: '',
            images: [],
            itinerary: [{ day: 1, title: '', description: '' }],
            inclusions: [''],
            highlights: ['']
        });
        setShowAddPackageModal(false);
    };

    // Mock data
    const stats = [
        { name: 'Total Bookings', value: '1,234', change: '+12%', changeType: 'increase' },
        { name: 'Revenue', value: '$45,231', change: '+8.2%', changeType: 'increase' },
        { name: 'Active Users', value: '573', change: '+19.8%', changeType: 'increase' },
        { name: 'Pending Reviews', value: '24', change: '-4%', changeType: 'decrease' },
    ];

    const recentBookings = [
        { id: 1, customer: 'John Doe', package: 'Palawan Paradise', date: '2023-06-15', status: 'Confirmed' },
        { id: 2, customer: 'Jane Smith', package: 'Boracay Getaway', date: '2023-06-14', status: 'Pending' },
        { id: 3, customer: 'Robert Johnson', package: 'Siargao Adventure', date: '2023-06-13', status: 'Completed' },
        { id: 4, customer: 'Emily Davis', package: 'Bohol Experience', date: '2023-06-12', status: 'Cancelled' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div 
                className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
                    <h1 className="text-xl font-bold">Sole Explorer Admin</h1>
                    <button 
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-gray-400 hover:text-white"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <nav className="mt-4 px-2">
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('dashboard');
                        }}
                        className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 ${activeTab === 'dashboard' ? 'bg-gray-800 text-lime-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    >
                        <LayoutDashboard className="h-5 w-5 mr-3" />
                        Dashboard
                    </button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('packages');
                        }}
                        className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 ${activeTab === 'packages' ? 'bg-gray-800 text-lime-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    >
                        <Package className="h-5 w-5 mr-3" />
                        Tour Packages
                    </button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('bookings');
                        }}
                        className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 ${activeTab === 'bookings' ? 'bg-gray-800 text-lime-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Bookings
                    </button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('users');
                        }}
                        className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 ${activeTab === 'users' ? 'bg-gray-800 text-lime-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    >
                        <Users className="h-5 w-5 mr-3" />
                        Users
                    </button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('admins');
                        }}
                        className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 ${activeTab === 'admins' ? 'bg-gray-800 text-lime-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    >
                        <Shield className="h-5 w-5 mr-3" />
                        Admins
                    </button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab('settings');
                        }}
                        className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 ${activeTab === 'settings' ? 'bg-gray-800 text-lime-400' : 'text-gray-300 hover:bg-gray-800'}`}
                    >
                        <Settings className="h-5 w-5 mr-3" />
                        Settings
                    </button>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1 lg:pl-64">
                {/* Top navigation */}
                <header className="bg-white shadow-sm">
                    <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center">
                            <button 
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden text-gray-500 hover:text-gray-600"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                            <h1 className="ml-4 text-xl font-semibold text-gray-900">
                                {activeTab === 'dashboard' && 'Dashboard'}
                                {activeTab === 'packages' && 'Tour Packages'}
                                {activeTab === 'bookings' && 'Bookings'}
                                {activeTab === 'users' && 'Users'}
                                {activeTab === 'admins' && 'Admins'}
                                {activeTab === 'settings' && 'Settings'}
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <Link 
                                href="/" 
                                className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                            >
                                <ArrowLeft className="h-4 w-4 mr-1" />
                                Back to Site
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {activeTab === 'dashboard' && (
                        <div>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                                {stats.map((stat) => (
                                    <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                                        <div className="p-5">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 bg-lime-100 rounded-md p-3">
                                                    <Package className="h-6 w-6 text-lime-600" />
                                                </div>
                                                <div className="ml-5 w-0 flex-1">
                                                    <dl>
                                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                                            {stat.name}
                                                        </dt>
                                                        <dd>
                                                            <div className="text-lg font-medium text-gray-900">
                                                                {stat.value}
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <span className={`text-sm font-medium ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                                                    {stat.change}
                                                </span>
                                                <span className="text-sm text-gray-500 ml-1">from last month</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                                <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Bookings</h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Customer
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Package
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {recentBookings.map((booking) => (
                                                <tr key={booking.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{booking.package}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{booking.date}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-red-100 text-red-800'
                                                        }`}>
                                                            {booking.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-lime-600 hover:text-lime-900 mr-3">
                                                            <Edit className="h-4 w-4" />
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-900">
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'packages' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Tour Packages</h3>
                                <button 
                                    onClick={() => setShowAddPackageModal(true)}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add New Package
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 text-center py-8">No packages found. Click "Add New Package" to create one.</p>
                            </div>
                        </div>
                    )}

                    {/* Add Package Modal */}
                    {showAddPackageModal && (
                        <div className="fixed inset-0 z-50 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                                <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full border border-gray-700 selection:bg-lime-200 selection:text-gray-900">
                                    <style jsx global>{`
                                        input:-webkit-autofill,
                                        input:-webkit-autofill:hover,
                                        input:-webkit-autofill:focus,
                                        input:-webkit-autofill:active {
                                            -webkit-box-shadow: 0 0 0 30px white inset !important;
                                            -webkit-text-fill-color: #111827 !important;
                                            caret-color: #111827 !important;
                                        }
                                        
                                        input[type=number]::-webkit-inner-spin-button,
                                        input[type=number]::-webkit-outer-spin-button {
                                            -webkit-appearance: none;
                                            margin: 0;
                                        }
                                    `}</style>
                                    <form onSubmit={handleSubmit}>
                                        <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-lg leading-6 font-medium text-white">Add New Tour Package</h3>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowAddPackageModal(false)}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <X className="h-6 w-6" />
                                                </button>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Left Column - Basic Info */}
                                                <div className="space-y-4">
                                                    <div>
                                                        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Package Title</label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            id="title"
                                                            value={formData.title}
                                                            onChange={handleInputChange}
                                                            className="mt-1 block w-full bg-white border border-gray-300 text-gray-900 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm placeholder-gray-500 selection:bg-lime-200 selection:text-gray-900 cursor-text"
                                                            placeholder="e.g., Palawan Paradise Cruise"
                                                            required
                                                        />
                                                    </div>
                                                    
                                                    <div className="relative">
                                                        <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                                                        <div className="relative">
                                                            <div className="relative">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                                                                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm flex items-center justify-between"
                                                                    aria-haspopup="listbox"
                                                                    aria-expanded={isCategoryDropdownOpen}
                                                                >
                                                                    <span className="flex items-center">
                                                                        {formData.category === 'cruise' && <Package className="h-4 w-4 mr-2 text-lime-600" />}
                                                                        {formData.category === 'popular' && <MapPin className="h-4 w-4 mr-2 text-blue-600" />}
                                                                        {formData.category === 'travel' && <Globe className="h-4 w-4 mr-2 text-purple-600" />}
                                                                        {formData.category === 'cruise' ? 'Cruise Ship Deals' : formData.category === 'popular' ? 'Popular Destinations' : 'Travel Deals'}
                                                                    </span>
                                                                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isCategoryDropdownOpen ? 'transform rotate-180' : ''}`} />
                                                                </button>
                                                            </div>
                                                            
                                                            {isCategoryDropdownOpen && (
                                                                <div 
                                                                    className="absolute z-50 mt-1 w-full bg-gray-800 shadow-lg rounded-md py-1 text-base ring-1 ring-gray-700 ring-opacity-100 focus:outline-none sm:text-sm"
                                                                    onMouseDown={(e) => e.preventDefault()}
                                                                >
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setFormData(prev => ({ ...prev, category: 'cruise' }));
                                                                            setIsCategoryDropdownOpen(false);
                                                                        }}
                                                                        className={`w-full text-left px-4 py-2 text-sm flex items-center ${formData.category === 'cruise' ? 'bg-lime-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                                                    >
                                                                        <Package className="h-4 w-4 mr-2 text-lime-600" />
                                                                        Cruise Ship Deals
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setFormData(prev => ({ ...prev, category: 'popular' }));
                                                                            setIsCategoryDropdownOpen(false);
                                                                        }}
                                                                        className={`w-full text-left px-4 py-2 text-sm flex items-center ${formData.category === 'popular' ? 'bg-lime-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                                                    >
                                                                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                                                                        Popular Destinations
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setFormData(prev => ({ ...prev, category: 'travel' }));
                                                                            setIsCategoryDropdownOpen(false);
                                                                        }}
                                                                        className={`w-full text-left px-4 py-2 text-sm flex items-center ${formData.category === 'travel' ? 'bg-lime-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                                                    >
                                                                        <Globe className="h-4 w-4 mr-2 text-purple-600" />
                                                                        Travel Deals
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <label htmlFor="destination" className="block text-sm font-medium text-gray-300">Destination</label>
                                                        <div className="mt-1 relative rounded-md shadow-sm">
                                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                <MapPin className="h-4 w-4 text-gray-400" />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                name="destination"
                                                                id="destination"
                                                                value={formData.destination}
                                                                onChange={handleInputChange}
                                                                className="bg-white text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md placeholder-gray-500 selection:bg-lime-200 selection:text-gray-900 cursor-text"
                                                                placeholder="e.g., Palawan, Philippines"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label htmlFor="duration" className="block text-sm font-medium text-gray-300">Duration</label>
                                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                    <Calendar className="h-4 w-4 text-gray-400" />
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    name="duration"
                                                                    id="duration"
                                                                    value={formData.duration}
                                                                    onChange={handleInputChange}
                                                                    className="bg-white text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md placeholder-gray-500 selection:bg-lime-200 selection:text-gray-900 cursor-text"
                                                                    placeholder="e.g., 7 Days / 6 Nights"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="price" className="block text-sm font-medium text-gray-300">Price</label>
                                                            <div className="mt-1 relative rounded-md shadow-sm flex">
                                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                    <DollarSign className="h-4 w-4 text-gray-400" />
                                                                </div>
                                                                <input
                                                                    type="number"
                                                                    name="price"
                                                                    id="price"
                                                                    value={formData.price}
                                                                    onChange={handleInputChange}
                                                                    className="bg-white text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-l-md placeholder-gray-500 selection:bg-lime-200 selection:text-gray-900 cursor-text"
                                                                    placeholder="0.00"
                                                                    min="0"
                                                                    step="0.01"
                                                                    required
                                                                />
                                                                <div className="relative">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                                                                        className="h-full bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                                                                    >
                                                                        {formData.currency || 'USD'}
                                                                    </button>
                                                                    {showCurrencyDropdown && (
                                                                        <div className="absolute right-0 mt-1 w-20 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    setFormData(prev => ({ ...prev, currency: 'USD' }));
                                                                                    setShowCurrencyDropdown(false);
                                                                                }}
                                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                            >
                                                                                $
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    setFormData(prev => ({ ...prev, currency: 'PHP' }));
                                                                                    setShowCurrencyDropdown(false);
                                                                                }}
                                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                            >
                                                                                ₱
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <label htmlFor="discount" className="block text-sm font-medium text-gray-300">Discount Price (optional)</label>
                                                        <div className="mt-1 relative rounded-md shadow-sm">
                                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                <Tag className="h-4 w-4 text-gray-400" />
                                                            </div>
                                                            <input
                                                                type="number"
                                                                name="discount"
                                                                id="discount"
                                                                value={formData.discount}
                                                                onChange={handleInputChange}
                                                                className="bg-white text-gray-900 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md placeholder-gray-500 selection:bg-lime-200 selection:text-gray-900 cursor-text"
                                                                placeholder="0.00"
                                                                min="0"
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="description"
                                                                name="description"
                                                                rows="3"
                                                                value={formData.description}
                                                                onChange={handleInputChange}
                                                                className="bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-lime-500 focus:border-lime-500 block w-full sm:text-sm border border-gray-300 rounded-md placeholder-gray-500 selection:bg-lime-200 selection:text-gray-900 cursor-text"
                                                                placeholder="Write a brief description of the package..."
                                                                required
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Right Column - Images and Details */}
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Images</label>
                                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                            <div className="space-y-1 text-center">
                                                                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                                                                <div className="flex text-sm text-gray-600">
                                                                    <label
                                                                        htmlFor="file-upload"
                                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-lime-600 hover:text-lime-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-lime-500"
                                                                    >
                                                                        <span>Upload images</span>
                                                                        <input
                                                                            id="file-upload"
                                                                            name="file-upload"
                                                                            type="file"
                                                                            className="sr-only"
                                                                            onChange={handleImageUpload}
                                                                            multiple
                                                                            accept="image/*"
                                                                            ref={fileInputRef}
                                                                        />
                                                                    </label>
                                                                    <p className="pl-1">or drag and drop</p>
                                                                </div>
                                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Image previews */}
                                                        {formData.images.length > 0 && (
                                                            <div className="mt-4 grid grid-cols-3 gap-2">
                                                                {formData.images.map((image, index) => (
                                                                    <div key={index} className="relative group">
                                                                        <img
                                                                            src={image.preview}
                                                                            alt={`Preview ${index + 1}`}
                                                                            className="h-24 w-full object-cover rounded-md"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => removeImage(index)}
                                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                                            title="Remove image"
                                                                        >
                                                                            <X className="h-3 w-3" />
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    <div>
                                                        <div className="flex justify-between items-center">
                                                            <label className="block text-sm font-medium text-gray-700">Itinerary</label>
                                                            <button
                                                                type="button"
                                                                onClick={addItineraryDay}
                                                                className="text-xs text-lime-600 hover:text-lime-500"
                                                            >
                                                                + Add Day
                                                            </button>
                                                        </div>
                                                        <div className="mt-2 space-y-2">
                                                            {formData.itinerary.map((day, index) => (
                                                                <div key={index} className="border border-gray-200 rounded-md p-3">
                                                                    <div className="flex justify-between items-center mb-2">
                                                                        <span className="text-sm font-medium text-lime-600">Day {day.day}</span>
                                                                    </div>
                                                                    <input
                                                                        type="text"
                                                                        value={day.title}
                                                                        onChange={(e) => updateItinerary(index, 'title', e.target.value)}
                                                                        className="block w-full mb-2 text-sm bg-white text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-lime-500 focus:border-lime-500 placeholder-gray-500"
                                                                        placeholder="Title"
                                                                    />
                                                                    <textarea
                                                                        value={day.description}
                                                                        onChange={(e) => updateItinerary(index, 'description', e.target.value)}
                                                                        rows="2"
                                                                        className="block w-full text-sm bg-white text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-lime-500 focus:border-lime-500 placeholder-gray-500"
                                                                        placeholder="Description"
                                                                    ></textarea>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <div className="flex justify-between items-center">
                                                            <label className="block text-sm font-medium text-gray-700">Inclusions</label>
                                                            <button
                                                                type="button"
                                                                onClick={addInclusion}
                                                                className="text-xs text-lime-600 hover:text-lime-500"
                                                            >
                                                                + Add Inclusion
                                                            </button>
                                                        </div>
                                                        <div className="mt-2 space-y-2">
                                                            {formData.inclusions.map((inclusion, index) => (
                                                                <div key={index} className="flex items-center">
                                                                    <Check className="h-4 w-4 text-lime-500 mr-2" />
                                                                    <input
                                                                        type="text"
                                                                        value={inclusion}
                                                                        onChange={(e) => updateInclusion(index, e.target.value)}
                                                                        className="block w-full text-sm bg-white text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-lime-500 focus:border-lime-500 placeholder-gray-500"
                                                                        placeholder="Included item or service"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                        <div className="flex justify-between items-center">
                                                            <label className="block text-sm font-medium text-gray-700">Highlights</label>
                                                            <button
                                                                type="button"
                                                                onClick={addHighlight}
                                                                className="text-xs text-lime-600 hover:text-lime-500"
                                                            >
                                                                + Add Highlight
                                                            </button>
                                                        </div>
                                                        <div className="mt-2 space-y-2">
                                                            {formData.highlights.map((highlight, index) => (
                                                                <div key={index} className="flex items-start">
                                                                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-lime-100 text-lime-800 text-xs font-medium mr-2 mt-0.5">
                                                                        {index + 1}
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        value={highlight}
                                                                        onChange={(e) => updateHighlight(index, e.target.value)}
                                                                        className="block w-full text-sm bg-white text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-lime-500 focus:border-lime-500 placeholder-gray-500"
                                                                        placeholder="Tour highlight"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-800">
                                            <button
                                                type="submit"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-600 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                                            >
                                                Save Package
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowAddPackageModal(false)}
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'bookings' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">All Bookings</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 text-center py-8">No bookings found.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'users' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Users</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 text-center py-8">No users found.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Settings</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500">Settings content goes here.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'admins' && (
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Admin Accounts</h3>
                                <button 
                                    onClick={() => setShowAddAdminModal(true)}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add New Admin
                                </button>
                            </div>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                            <span className="text-gray-600 font-medium">AD</span>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">Admin User</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">admin@example.com</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                        Super Admin
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Active
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-lime-600 hover:text-lime-900 mr-3">
                                                        <Edit className="h-4 w-4" />
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-900">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Add Admin Modal */}
            {showAddAdminModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Add New Admin
                                        </h3>
                                        <div className="mt-5">
                                            <div className="mb-4">
                                                <label htmlFor="admin-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="admin-name"
                                                    id="admin-name"
                                                    className="shadow-sm focus:ring-lime-500 focus:border-lime-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                                <input
                                                    type="email"
                                                    name="admin-email"
                                                    id="admin-email"
                                                    className="shadow-sm focus:ring-lime-500 focus:border-lime-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                                    placeholder="admin@example.com"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="admin-role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                                <select
                                                    id="admin-role"
                                                    name="admin-role"
                                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm rounded-md"
                                                >
                                                    <option>Admin</option>
                                                    <option>Editor</option>
                                                    <option>Viewer</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-600 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowAddAdminModal(false)}
                                >
                                    Add Admin
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowAddAdminModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
