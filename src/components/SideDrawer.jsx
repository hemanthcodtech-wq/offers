import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import AppLogo from './AppLogo';
import {
  X,
  Home,
  Gift,
  MapPin,
  User,
  Store,
  Briefcase,
  TrendingUp,
  FileText,
  Crown,
  Bell,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  ShieldCheck,
  PlusCircle,
  BarChart3,
  ShieldAlert,
  Users
} from 'lucide-react';

export default function SideDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, selectedCity, logout } = useApp();

  if (!isOpen) return null;

  const isAdminMode = location.pathname.startsWith('/admin') || user.role === 'Admin';
  const isFranchiseMode = location.pathname.startsWith('/franchise');
  const isBusinessMode = location.pathname.startsWith('/business');

  const handleNav = (path) => {
    onClose();
    navigate(path);
  };

  const consumerLinks = [
    { label: 'Home Feed', path: '/home', icon: Home },
    { label: 'All Offers & Deals', path: '/offers', icon: Gift },
    { label: 'Live Map Search', path: '/map', icon: MapPin },
    { label: 'My Profile', path: '/profile', icon: User },
    { label: 'Business Merchant Pass', path: '/business', icon: Store, badge: '₹499/mo' },
    { label: 'Area Franchise Portal', path: '/franchise', icon: Briefcase, badge: 'Partner' },
    { label: 'Admin Control Room', path: '/admin', icon: ShieldAlert, badge: 'Master' },
    { label: 'VIP Ad-Free Pass', path: '/subscribe', icon: Crown, badge: '₹9/mo' }
  ];

  const adminLinks = [
    { label: 'Admin Command Hub', path: '/admin', icon: ShieldAlert },
    { label: 'Manage Customers', path: '/admin/users', icon: Users, badge: 'Users' },
    { label: 'Manage Shopkeepers', path: '/admin/merchants', icon: Store, badge: 'Shops' },
    { label: 'Manage Franchises', path: '/admin/franchises', icon: Briefcase, badge: 'Zones' },
    { label: 'Finance & Revenue', path: '/admin/finance', icon: BarChart3, badge: '₹14.8L' },
    { label: 'Switch to User App', path: '/home', icon: Home, badge: 'User Mode' }
  ];

  const businessLinks = [
    { label: 'Business Dashboard', path: '/business', icon: Store },
    { label: 'Post Monthly Deal', path: '/business/post-offer', icon: PlusCircle, badge: 'Live Edit' },
    { label: 'Lead & Traffic Analytics', path: '/business/analytics', icon: BarChart3, badge: '482 Calls' },
    { label: 'My Active Deals', path: '/business/my-offers', icon: Gift },
    { label: 'Store Profile & Settings', path: '/business/profile', icon: User },
    { label: 'Area Franchise Portal', path: '/franchise', icon: Briefcase, badge: 'Franchise' },
    { label: 'Switch to User App', path: '/home', icon: Home, badge: 'User Mode' }
  ];

  const franchiseLinks = [
    { label: 'Franchise Dashboard', path: '/franchise', icon: Home },
    { label: 'Register New Business', path: '/franchise/register-business', icon: Store, badge: '+₹150 Cut' },
    { label: 'Manage Area Offers', path: '/franchise/manage-offers', icon: ShieldCheck, badge: '142 Active' },
    { label: 'Earnings & Commission', path: '/franchise/earnings', icon: TrendingUp, badge: '₹1.25L+' },
    { label: 'Tax Reports & Invoices', path: '/franchise/reports', icon: FileText, badge: 'TDS Net' },
    { label: 'Franchise Profile', path: '/franchise/profile', icon: User },
    { label: 'Switch to User App', path: '/home', icon: Home, badge: 'User Mode' }
  ];

  const currentLinks = isAdminMode
    ? adminLinks
    : isFranchiseMode
    ? franchiseLinks
    : isBusinessMode
    ? businessLinks
    : consumerLinks;

  const currentModeTitle = isAdminMode
    ? 'Master Super Admin'
    : isFranchiseMode
    ? 'Franchise Partner'
    : isBusinessMode
    ? 'Merchant Portal'
    : `📍 ${selectedCity}`;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex'
    }}>
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.25s ease'
        }}
      />

      {/* Drawer Content */}
      <div style={{
        position: 'relative',
        width: '82%',
        maxWidth: '320px',
        height: '100%',
        backgroundColor: '#111115',
        borderRight: '1.5px solid rgba(255, 215, 0, 0.35)',
        boxShadow: '10px 0 35px rgba(0, 0, 0, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 10,
        animation: 'slideIn 0.25s ease-out',
        overflowY: 'auto'
      }}>
        {/* Drawer Header */}
        <div>
          <div style={{
            padding: '20px 18px 16px',
            borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
            background: 'radial-gradient(circle at 0% 0%, rgba(255,215,0,0.18) 0%, transparent 80%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AppLogo size={42} />
              <div>
                <div style={{ fontSize: '18px', fontWeight: '950', fontStyle: 'italic', color: '#fff' }}>
                  Offers <span style={{ color: '#ffd700' }}>NOW</span>
                </div>
                <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  {currentModeTitle}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* User / Operator Card */}
          <div style={{
            margin: '14px 16px 8px',
            padding: '12px 14px',
            borderRadius: '14px',
            background: '#18181d',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#ffd700',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '16px'
            }}>
              {user.name.charAt(0)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user.name}
              </div>
              <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '600' }}>
                {isAdminMode ? 'Platform Administrator' : isBusinessMode ? 'Verified Merchant' : user.role}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ padding: '8px 12px' }}>
            <div style={{ fontSize: '10px', color: '#888', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', padding: '6px 8px' }}>
              {isAdminMode ? 'Admin Navigation' : isFranchiseMode ? 'Franchise Navigation' : isBusinessMode ? 'Merchant Navigation' : 'Quick Menu'}
            </div>

            {currentLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.label}
                  onClick={() => handleNav(link.path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 12px',
                    borderRadius: '12px',
                    marginBottom: '4px',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                    border: isActive ? '1px solid #ffd700' : '1px solid transparent',
                    color: isActive ? '#ffd700' : '#ddd',
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={18} color={isActive ? '#ffd700' : '#999'} />
                    <span style={{ fontSize: '13px', fontWeight: isActive ? '800' : '600' }}>
                      {link.label}
                    </span>
                  </div>

                  {link.badge && (
                    <span style={{
                      fontSize: '10px',
                      fontWeight: '800',
                      backgroundColor: isActive ? '#ffd700' : 'rgba(255, 215, 0, 0.12)',
                      color: isActive ? '#000' : '#ffd700',
                      padding: '2px 7px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 215, 0, 0.25)'
                    }}>
                      {link.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div style={{ padding: '14px 16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={() => {
              logout();
              handleNav('/login');
            }}
            style={{
              width: '100%',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '14px',
              padding: '11px',
              color: '#ef4444',
              fontSize: '13px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <LogOut size={16} />
            <span>Switch Role / Logout</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
