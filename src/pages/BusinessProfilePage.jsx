import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Store,
  Crown,
  CreditCard,
  BarChart3,
  PlusCircle,
  Bell,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Calendar
} from 'lucide-react';

export default function BusinessProfilePage() {
  const navigate = useNavigate();
  const { user, selectedCity, logout } = useApp();

  const businessMenuItems = [
    { icon: PlusCircle, label: 'Post / Edit Monthly Deal', count: '1 Active', path: '/business/post-offer' },
    { icon: BarChart3, label: 'Customer Views & Leads', count: '14,820 Total', path: '/business/analytics' },
    { icon: CreditCard, label: 'Merchant Pass Billing', count: '₹499/mo Active', path: '/business' },
    { icon: MapPin, label: 'Store Location & Geofence', count: selectedCity, path: '/profile/change-area' },
    { icon: Bell, label: 'Store Alerts & Notifications', count: '3 New', path: '/profile/notifications' },
    { icon: HelpCircle, label: 'Merchant Support Desk', count: 'Priority Call', path: '/profile/help' },
    { icon: Info, label: 'Store Listing Terms', count: 'v2.4.0', path: '/profile/about' },
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header
        title="Business Profile"
        showBack={true}
        showNotifications={false}
        rightAction={
          <button
            onClick={() => navigate('/home')}
            style={{
              background: 'rgba(255, 215, 0, 0.12)',
              border: '1px solid rgba(255, 215, 0, 0.35)',
              borderRadius: '14px',
              padding: '5px 10px',
              color: '#ffd700',
              fontSize: '11px',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            User App
          </button>
        }
      />

      {/* Merchant Profile Info Card */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 20px 18px',
        position: 'relative'
      }}>
        {/* Store Avatar with Gold Ring Glow */}
        <div style={{
          width: '92px',
          height: '92px',
          borderRadius: '50%',
          border: '3px solid #ffd700',
          boxShadow: '0 0 28px rgba(255, 215, 0, 0.45)',
          background: 'radial-gradient(circle, #2d240d 0%, #151515 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
          position: 'relative'
        }}>
          <Store size={44} color="#ffd700" />
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            backgroundColor: '#22c55e',
            color: '#000',
            borderRadius: '50%',
            padding: '3px',
            border: '2px solid #000'
          }}>
            <ShieldCheck size={14} color="#000" strokeWidth={3} />
          </div>
        </div>

        <h2 style={{
          fontSize: '20px',
          fontWeight: '950',
          color: '#ffffff',
          marginBottom: '2px'
        }}>
          {user.role === 'Business' ? user.name : 'Suresh Verma (Sri Sai Mobiles)'}
        </h2>

        <p style={{
          fontSize: '13px',
          color: '#a0a0a8',
          marginBottom: '14px'
        }}>
          suresh@business.offersnow.in • Merchant ID: OFR-MCH-8821
        </p>

        {/* ₹499 Merchant Pass Active Bar */}
        <div
          onClick={() => navigate('/business')}
          style={{
            width: '100%',
            background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
            color: '#000000',
            borderRadius: '25px',
            padding: '11px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(244, 180, 0, 0.4)',
            cursor: 'pointer',
            fontWeight: '900'
          }}
        >
          <Crown size={18} fill="#000000" color="#000000" />
          <span style={{ fontSize: '14px' }}>₹499/Month Merchant Pass</span>
          <span style={{ fontSize: '11px', opacity: 0.85 }}>• Active</span>
        </div>
      </div>

      {/* Menu List */}
      <div style={{ padding: '0 18px' }}>
        <div style={{
          background: '#151518',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.22)',
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
        }}>
          {businessMenuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                onClick={() => navigate(item.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderBottom: index < businessMenuItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background: 'rgba(255, 215, 0, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={18} color="#ffd700" />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#f0f0f0' }}>
                    {item.label}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.count && (
                    <span style={{ fontSize: '12px', color: '#ffd700', fontWeight: '600' }}>
                      {item.count}
                    </span>
                  )}
                  <ChevronRight size={16} color="#666" />
                </div>
              </div>
            );
          })}

          {/* Switch Role / Exit */}
          <div
            onClick={() => {
              logout();
              navigate('/login');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              cursor: 'pointer',
              background: 'rgba(239, 68, 68, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <LogOut size={18} color="#ef4444" />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#ef4444' }}>
                Logout / Exit Merchant Mode
              </span>
            </div>
            <ChevronRight size={16} color="#ef4444" />
          </div>
        </div>
      </div>

      {/* Brand Footer */}
      <div style={{ marginTop: '25px', textAlign: 'center', padding: '12px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ffd700',
          fontWeight: '900',
          fontSize: '15px'
        }}>
          📢 Offers <span style={{ color: '#fff' }}>NOW</span> Business
        </div>
        <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
          Merchant Growth Suite • Connect • Sell • Grow
        </p>
      </div>
    </div>
  );
}
