import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  const checkAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem('uniconnect_token');
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await authService.getMe();
      if (response.data.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      localStorage.removeItem('uniconnect_token');
      localStorage.removeItem('uniconnect_user');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Register
  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      if (response.data.success) {
        localStorage.setItem('uniconnect_token', response.data.token);
        localStorage.setItem('uniconnect_user', JSON.stringify(response.data.user));
        setUser(response.data.user);
        setIsAuthenticated(true);
        toast.success(response.data.message);
        return { success: true, user: response.data.user };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message);
      return { success: false, message };
    }
  };

  // Login
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      if (response.data.success) {
        localStorage.setItem('uniconnect_token', response.data.token);
        localStorage.setItem('uniconnect_user', JSON.stringify(response.data.user));
        setUser(response.data.user);
        setIsAuthenticated(true);
        toast.success('Welcome back!');
        return { success: true, user: response.data.user };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(message);
      return { success: false, message };
    }
  };

  // Logout
  const logout = async () => {
    const wasGuest = user?.isGuest;
    try {
      if (!wasGuest) await authService.logout();
    } catch (error) {
      // Continue with logout even if API call fails
    } finally {
      localStorage.removeItem('uniconnect_token');
      localStorage.removeItem('uniconnect_user');
      setUser(null);
      setIsAuthenticated(false);
      toast.success(wasGuest ? 'Exited guest mode' : 'Logged out successfully');
    }
  };

  // Login as Guest (demo mode — no backend required)
  const loginAsGuest = () => {
    const guestUser = {
      _id: 'guest-demo',
      fullName: 'Guest User',
      email: 'guest@demo.uniconnect.com',
      university: 'Demo University',
      course: 'Exploring UniConnect',
      graduationYear: new Date().getFullYear() + 2,
      bio: 'Just browsing UniConnect in demo mode!',
      isProfileComplete: true,
      isGuest: true,
    };
    setUser(guestUser);
    setIsAuthenticated(true);
    toast.success('Welcome! You\'re exploring as a guest.');
  };

  // Update user data locally
  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
    const stored = JSON.parse(localStorage.getItem('uniconnect_user') || '{}');
    localStorage.setItem('uniconnect_user', JSON.stringify({ ...stored, ...updatedData }));
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    isGuest: user?.isGuest || false,
    register,
    login,
    loginAsGuest,
    logout,
    updateUser,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
