import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import MobileStatusBar from './components/MobileStatusBar';
import BottomNav from './components/BottomNav';
import FranchiseBottomNav from './components/FranchiseBottomNav';
import BusinessBottomNav from './components/BusinessBottomNav';
import AdminBottomNav from './components/AdminBottomNav';
import SplashScreenOverlay from './components/SplashScreenOverlay';

// Core Pages
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import OffersPage from './pages/OffersPage';
import OfferDetailsPage from './pages/OfferDetailsPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import SubscribePage from './pages/SubscribePage';

// Admin Master Command Hub
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminCustomersPage from './pages/AdminCustomersPage';
import AdminMerchantsPage from './pages/AdminMerchantsPage';
import AdminFranchisesPage from './pages/AdminFranchisesPage';
import AdminFinancePage from './pages/AdminFinancePage';

// Business Merchant Portal & Sub-Pages
import BusinessPanelPage from './pages/BusinessPanelPage';
import BusinessPostOfferPage from './pages/BusinessPostOfferPage';
import BusinessAnalyticsPage from './pages/BusinessAnalyticsPage';
import BusinessProfilePage from './pages/BusinessProfilePage';

// Franchise Portal & Dedicated Sub-Pages
import FranchisePanelPage from './pages/FranchisePanelPage';
import FranchiseRegisterBusinessPage from './pages/FranchiseRegisterBusinessPage';
import FranchiseManageOffersPage from './pages/FranchiseManageOffersPage';
import EarningsPage from './pages/EarningsPage';
import FranchiseReportsPage from './pages/FranchiseReportsPage';
import FranchiseProfilePage from './pages/FranchiseProfilePage';

// Profile Sub-Pages
import MyOffersPage from './pages/MyOffersPage';
import SavedOffersPage from './pages/SavedOffersPage';
import NotificationsPage from './pages/NotificationsPage';
import ChangeAreaPage from './pages/ChangeAreaPage';
import HelpSupportPage from './pages/HelpSupportPage';
import AboutUsPage from './pages/AboutUsPage';

function AppLayout() {
  const location = useLocation();
  const { deviceFrame } = useApp();

  // Show entry splash screen overlay on first website visit
  const [showEntrySplash, setShowEntrySplash] = useState(() => {
    const hasSeenSplash = sessionStorage.getItem('offers_now_splash_seen');
    return !hasSeenSplash;
  });

  const handleSplashFinish = () => {
    sessionStorage.setItem('offers_now_splash_seen', 'true');
    setShowEntrySplash(false);
  };

  // Bottom Navigation Determination
  const isAdminSection = location.pathname.startsWith('/admin');
  const isFranchiseSection = location.pathname.startsWith('/franchise');
  const isBusinessSection = location.pathname.startsWith('/business');
  const isConsumerSection = ['/home', '/offers', '/map', '/profile'].includes(location.pathname);
  
  const isSplashRoute = location.pathname === '/';

  return (
    <div className="app-wrapper">
      {/* Dynamic Splash Screen on Website Entry */}
      {showEntrySplash && (
        <SplashScreenOverlay onFinished={handleSplashFinish} duration={2600} />
      )}

      {/* Main Viewport Container */}
      <div className={`phone-viewport-container ${deviceFrame ? 'framed-mode' : ''}`}>
        {!isSplashRoute && <MobileStatusBar />}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/offers/:id" element={<OfferDetailsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />

            {/* Admin Command Center */}
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/users" element={<AdminCustomersPage />} />
            <Route path="/admin/merchants" element={<AdminMerchantsPage />} />
            <Route path="/admin/franchises" element={<AdminFranchisesPage />} />
            <Route path="/admin/finance" element={<AdminFinancePage />} />

            {/* Business Merchant Portal & Sub-Pages */}
            <Route path="/business" element={<BusinessPanelPage />} />
            <Route path="/business/post-offer" element={<BusinessPostOfferPage />} />
            <Route path="/business/analytics" element={<BusinessAnalyticsPage />} />
            <Route path="/business/my-offers" element={<OffersPage />} />
            <Route path="/business/profile" element={<BusinessProfilePage />} />

            {/* Franchise Portal & Dedicated Sub-Pages */}
            <Route path="/franchise" element={<FranchisePanelPage />} />
            <Route path="/franchise/register-business" element={<FranchiseRegisterBusinessPage />} />
            <Route path="/franchise/manage-offers" element={<FranchiseManageOffersPage />} />
            <Route path="/franchise/earnings" element={<EarningsPage />} />
            <Route path="/franchise/reports" element={<FranchiseReportsPage />} />
            <Route path="/franchise/profile" element={<FranchiseProfilePage />} />

            {/* Customer Profile & Sub-Pages */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/my-offers" element={<MyOffersPage />} />
            <Route path="/profile/saved-offers" element={<SavedOffersPage />} />
            <Route path="/profile/notifications" element={<NotificationsPage />} />
            <Route path="/profile/change-area" element={<ChangeAreaPage />} />
            <Route path="/profile/help" element={<HelpSupportPage />} />
            <Route path="/profile/about" element={<AboutUsPage />} />

            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>

        {/* Dedicated Bottom Navigations based on Portal */}
        {isAdminSection && <AdminBottomNav />}
        {isFranchiseSection && <FranchiseBottomNav />}
        {isBusinessSection && <BusinessBottomNav />}
        {isConsumerSection && <BottomNav />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
