import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USER, OFFERS_DATA } from '../data/mockData';
import { INITIAL_CUSTOMERS, INITIAL_MERCHANTS, INITIAL_FRANCHISES, ADMIN_METRICS } from '../data/adminMockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('offers_now_user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('offers_now_auth') === 'true';
  });

  const [offers, setOffers] = useState(OFFERS_DATA);
  const [selectedCity, setSelectedCity] = useState('Hyderabad');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedOfferIds, setSavedOfferIds] = useState(['sri-sai-mobiles']);
  const [deviceFrame, setDeviceFrame] = useState(false);

  // Admin Central State Controls
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [merchants, setMerchants] = useState(INITIAL_MERCHANTS);
  const [franchises, setFranchises] = useState(INITIAL_FRANCHISES);

  useEffect(() => {
    localStorage.setItem('offers_now_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('offers_now_auth', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const toggleSaveOffer = (id) => {
    setSavedOfferIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const loginAsRole = (role) => {
    const updatedUser = {
      ...user,
      role: role,
      name: role === 'Admin'
        ? 'Super Admin (System Head)'
        : role === 'Business'
        ? 'Suresh Verma'
        : role === 'Area Franchise'
        ? 'K. R. Mohan (Franchise Head)'
        : 'Ramesh Kumar',
      email: role === 'Admin'
        ? 'admin@offersnow.in'
        : role === 'Business'
        ? 'suresh@business.offersnow.in'
        : role === 'Area Franchise'
        ? 'franchise.hyd@offersnow.in'
        : 'user@offersnow.in'
    };
    setUser(updatedUser);
    setIsAuthenticated(true);
  };

  const loginWithCredentials = (email, password, role = 'User') => {
    const updatedUser = {
      name: role === 'Admin' ? 'Super Admin' : email.split('@')[0] || 'Offers User',
      email: email,
      phone: '+91 98765 00112',
      plan: role === 'Admin' ? 'Master Admin Key' : '₹9 Plan Active',
      planDesc: 'Ad-Free Experience',
      role: role,
      location: selectedCity
    };
    setUser(updatedUser);
    setIsAuthenticated(true);
  };

  const signupUser = ({ name, email, phone, role, city }) => {
    const newUser = {
      name: name,
      email: email,
      phone: phone || '+91 99999 88888',
      plan: 'Free Plan',
      planDesc: 'With Ads',
      role: role || 'User',
      location: city || selectedCity
    };
    setUser(newUser);
    if (city) setSelectedCity(city);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addBusinessOffer = (newOffer) => {
    setOffers([newOffer, ...offers]);
  };

  // Admin Actions
  const toggleCustomerStatus = (id) => {
    setCustomers(prev => prev.map(c => c.id === id ? { ...c, status: c.status === 'Active' ? 'Suspended' : 'Active' } : c));
  };

  const toggleMerchantStatus = (id) => {
    setMerchants(prev => prev.map(m => m.id === id ? { ...m, status: m.status === 'Verified' ? 'Suspended' : 'Verified' } : m));
  };

  const toggleFranchiseStatus = (id) => {
    setFranchises(prev => prev.map(f => f.id === id ? { ...f, status: f.status === 'Active' ? 'Suspended' : 'Active' } : f));
  };

  const deleteOffer = (id) => {
    setOffers(prev => prev.filter(o => o.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        offers,
        setOffers,
        selectedCity,
        setSelectedCity,
        searchQuery,
        setSearchQuery,
        savedOfferIds,
        toggleSaveOffer,
        loginAsRole,
        loginWithCredentials,
        signupUser,
        logout,
        addBusinessOffer,
        deviceFrame,
        setDeviceFrame,
        // Admin
        customers,
        merchants,
        franchises,
        adminMetrics: ADMIN_METRICS,
        toggleCustomerStatus,
        toggleMerchantStatus,
        toggleFranchiseStatus,
        deleteOffer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
