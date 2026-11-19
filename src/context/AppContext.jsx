import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USER, OFFERS_DATA } from '../data/mockData';
import {
  INITIAL_CUSTOMERS,
  INITIAL_MERCHANTS,
  INITIAL_FRANCHISES,
  ADMIN_METRICS,
  INITIAL_SHOP_REQUESTS,
  INITIAL_FRANCHISE_REQUESTS,
  INITIAL_OFFER_REQUESTS
} from '../data/adminMockData';

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
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Admin Central State Controls
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [merchants, setMerchants] = useState(INITIAL_MERCHANTS);
  const [franchises, setFranchises] = useState(INITIAL_FRANCHISES);

  // Approval Queues for Admin
  const [shopRequests, setShopRequests] = useState(INITIAL_SHOP_REQUESTS);
  const [franchiseRequests, setFranchiseRequests] = useState(INITIAL_FRANCHISE_REQUESTS);
  const [offerRequests, setOfferRequests] = useState(INITIAL_OFFER_REQUESTS);

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
  const addMerchant = (merchantData) => {
    const newMerchant = {
      id: `mch-${Date.now()}`,
      status: 'Verified',
      joined: 'Today',
      activeOffersCount: 1,
      totalViews: '0',
      callsReceived: 0,
      ...merchantData
    };
    setMerchants(prev => [newMerchant, ...prev]);

    // Also auto-add initial store deal to offers list
    const newOffer = {
      id: `offer-${Date.now()}`,
      title: merchantData.businessName,
      tag: 'Special Offer',
      badge: merchantData.discount || '30% OFF',
      discount: merchantData.discount || '30%',
      description: merchantData.headline || `Grand Inauguration Offer at ${merchantData.businessName}`,
      longDescription: `Exclusive retail discount at ${merchantData.businessName}. Verified by Offers NOW Admin.`,
      category: merchantData.category || 'Mobiles',
      distance: '0.8 km',
      location: `${merchantData.city || 'Hyderabad'} City`,
      phone: merchantData.phone || '+91 98765 43210',
      bannerImage: merchantData.bannerImage || 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
      terms: ['Present offer in-store before billing', 'Cannot be combined with other coupons', 'Valid for 30 days']
    };
    setOffers(prev => [newOffer, ...prev]);
  };

  const addFranchise = (franchiseData) => {
    const newFranchise = {
      id: `frc-${Date.now()}`,
      status: 'Active',
      registeredStores: 0,
      monthlyEarnings: '₹0',
      commissionCut: '30%',
      payoutStatus: 'Ready',
      ...franchiseData
    };
    setFranchises(prev => [newFranchise, ...prev]);
  };

  const addCustomer = (customerData) => {
    const newCustomer = {
      id: `usr-${Date.now()}`,
      status: 'Active',
      joined: 'Today',
      totalClaims: 0,
      plan: 'Free Plan',
      ...customerData
    };
    setCustomers(prev => [newCustomer, ...prev]);
  };

  const toggleCustomerStatus = (id) => {
    setCustomers(prev => prev.map(c => c.id === id ? { ...c, status: c.status === 'Active' ? 'Suspended' : 'Active' } : c));
  };

  const toggleMerchantStatus = (id) => {
    setMerchants(prev => prev.map(m => m.id === id ? { ...m, status: m.status === 'Verified' ? 'Suspended' : 'Verified' } : m));
  };

  const toggleFranchiseStatus = (id) => {
    setFranchises(prev => prev.map(f => f.id === id ? { ...f, status: f.status === 'Active' ? 'Suspended' : 'Active' } : f));
  };

  // Request Queues Actions
  const submitShopRequest = (shopData) => {
    const newReq = {
      id: `req-shop-${Date.now()}`,
      requestedAt: 'Just now',
      status: 'Pending',
      ...shopData
    };
    setShopRequests(prev => [newReq, ...prev]);
  };

  const approveShopRequest = (id) => {
    const req = shopRequests.find(r => r.id === id);
    if (!req) return;

    addMerchant({
      businessName: req.businessName,
      owner: req.owner,
      phone: req.phone,
      email: req.email,
      city: req.city,
      category: req.category,
      discount: req.discount || '30%',
      headline: req.notes || `Special Offer at ${req.businessName}`,
      plan: req.plan || '₹499/mo Merchant Pass'
    });

    setShopRequests(prev => prev.filter(r => r.id !== id));
  };

  const rejectShopRequest = (id) => {
    setShopRequests(prev => prev.filter(r => r.id !== id));
  };

  const submitFranchiseRequest = (frcData) => {
    const newReq = {
      id: `req-frc-${Date.now()}`,
      requestedAt: 'Just now',
      status: 'Pending',
      ...frcData
    };
    setFranchiseRequests(prev => [newReq, ...prev]);
  };

  const approveFranchiseRequest = (id) => {
    const req = franchiseRequests.find(r => r.id === id);
    if (!req) return;

    addFranchise({
      zone: req.zone,
      city: req.city,
      operatorName: req.applicantName,
      phone: req.phone,
      email: req.email,
      aadharNumber: req.aadharNumber,
      panNumber: req.panNumber,
      bankAccount: req.bankAccount,
      ifscCode: req.ifscCode,
      bankName: req.bankName,
      commissionCut: '30%',
      kycStatus: 'Verified'
    });

    setFranchiseRequests(prev => prev.filter(r => r.id !== id));
  };

  const rejectFranchiseRequest = (id) => {
    setFranchiseRequests(prev => prev.filter(r => r.id !== id));
  };

  const submitOfferRequest = (offerData) => {
    const newReq = {
      id: `req-ofr-${Date.now()}`,
      submittedAt: 'Just now',
      status: 'Pending',
      ...offerData
    };
    setOfferRequests(prev => [newReq, ...prev]);
  };

  const approveOfferRequest = (id) => {
    const req = offerRequests.find(r => r.id === id);
    if (!req) return;

    const newOffer = {
      id: `live-ofr-${Date.now()}`,
      title: req.shopName || req.title,
      tag: 'Special Offer',
      badge: req.discount?.includes('%') ? req.discount : `${req.discount}% OFF`,
      discount: req.discount?.includes('%') ? req.discount : `${req.discount}%`,
      description: req.title,
      longDescription: req.description,
      category: req.category,
      distance: '0.8 km',
      location: `${req.city || 'Hyderabad'} City`,
      phone: req.phone || '+91 98765 43210',
      bannerImage: req.bannerImage || 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
      terms: ['Present offer in-store before billing', 'Valid till ' + (req.validTill || '31 Dec 2026')]
    };
    setOffers(prev => [newOffer, ...prev]);
    setOfferRequests(prev => prev.filter(r => r.id !== id));
  };

  const rejectOfferRequest = (id) => {
    setOfferRequests(prev => prev.filter(r => r.id !== id));
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
        addMerchant,
        addFranchise,
        addCustomer,
        toggleCustomerStatus,
        toggleMerchantStatus,
        toggleFranchiseStatus,
        deleteOffer,
        // Request Approval Queues
        shopRequests,
        franchiseRequests,
        offerRequests,
        submitShopRequest,
        approveShopRequest,
        rejectShopRequest,
        submitFranchiseRequest,
        approveFranchiseRequest,
        rejectFranchiseRequest,
        submitOfferRequest,
        approveOfferRequest,
        rejectOfferRequest,
        // Toast
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
