import { createContext, useContext, useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [authModal, setAuthModal] = useState({
        isOpen: false,
        tab: 'login',
        redirectAfterAuth: null
    });

    // Check auth status on mount
    useEffect(() => {
        fetch('/api/user')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(() => setUser(null))
            .finally(() => setIsLoading(false));
    }, []);

    const login = async (credentials) => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                closeAuthModal();
                return { success: true };
            }
            
            const error = await response.json();
            return { success: false, error: error.message || 'Login failed' };
        } catch (error) {
            return { success: false, error: 'Network error' };
        }
    };

    const register = async (userData) => {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                closeAuthModal();
                return { success: true };
            }
            
            const error = await response.json();
            return { success: false, error: error.message || 'Registration failed' };
        } catch (error) {
            return { success: false, error: 'Network error' };
        }
    };

    const logout = async () => {
        try {
            await fetch('/logout', { method: 'POST' });
            setUser(null);
            router.visit('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const showAuthModal = (tab = 'login', redirectAfterAuth = null) => {
        setAuthModal({
            isOpen: true,
            tab,
            redirectAfterAuth
        });
    };

    const closeAuthModal = () => {
        setAuthModal(prev => ({ ...prev, isOpen: false }));
    };

    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        authModal,
        showAuthModal,
        closeAuthModal
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
