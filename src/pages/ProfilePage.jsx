import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  User,
  Crown,
  Heart,
  Bell,
  MapPin,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  ShoppingBag,
  Briefcase,
  Store
} from 'lucide-react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, selectedCity, savedOfferIds, logout } = useApp();

  const menuItems = [
    { icon: ShoppingBag, label: 'My Offers', count: '3 Active', path: '/profile/my-offers' },
    { icon: Heart, label: 'Saved Offers', count: `${savedOfferIds.length} Saved`, path: '/profile/saved-offers' },
    { icon: Bell, label: 'Notifications', count: '1 New', path: '/profile/notifications' },
    { icon: MapPin, label: 'Change Area', count: selectedCity, path: '/profile/change-area' },
    { icon: Store, label: 'Business Panel', count: 'Post Offer', path: '/business' },
    { icon: Briefcase, label: 'Franchise Panel', count: 'Manage Zone', path: '/franchise' },
    { icon: HelpCircle, label: 'Help & Support', count: '', path: '/profile/help' },
    { icon: Info, label: 'About Us', count: 'v2.4.0', path: '/profile/about' },
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="My Profile" showBack={false} showNotifications={false} />

      {/* User Profile Info Card from Screenshot 10 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 20px 18px',
        position: 'relative'
      }}>
        {/* Profile Avatar with Gold Ring Glow */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          border: '3px solid #ffd700',
          boxShadow: '0 0 25px rgba(255, 215, 0, 0.4)',
          background: 'radial-gradient(circle, #2d2a1b 0%, #151515 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px'
        }}>
          <User size={46} color="#ffd700" />
        </div>

        <h2 style={{
          fontSize: '20px',
          fontWeight: '900',
          color: '#ffffff',
          marginBottom: '2px'
        }}>
          {user.name}
        </h2>

        <p style={{
          fontSize: '13px',
          color: '#a0a0a0',
          marginBottom: '14px'
        }}>
          {user.email}
        </p>

        {/* ₹9 Plan Active Banner Button from Screenshot 10 */}
        <div
          onClick={() => navigate('/subscribe')}
          style={{
            width: '100%',
            background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
            color: '#000000',
            borderRadius: '25px',
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(244, 180, 0, 0.4)',
            cursor: 'pointer',
            fontWeight: '800'
          }}
        >
          <Crown size={18} fill="#000000" color="#000000" />
          <span style={{ fontSize: '14px' }}>₹9 Plan Active</span>
          <span style={{ fontSize: '11px', opacity: 0.85 }}>• Ad-Free</span>
        </div>
      </div>

      {/* Profile Navigation List */}
      <div style={{ padding: '0 18px' }}>
        <div style={{
          background: '#151518',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          overflow: 'hidden'
        }}>
          {menuItems.map((item, index) => {
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
                  borderBottom: index < menuItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: 'rgba(255, 215, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={17} color="#ffd700" />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#f0f0f0' }}>
                    {item.label}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.count && (
                    <span style={{ fontSize: '12px', color: '#888' }}>
                      {item.count}
                    </span>
                  )}
                  <ChevronRight size={16} color="#666" />
                </div>
              </div>
            );
          })}

          {/* Logout Action */}
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
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <LogOut size={17} color="#ef4444" />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#ef4444' }}>
                Logout / Switch Account
              </span>
            </div>
            <ChevronRight size={16} color="#ef4444" />
          </div>
        </div>
      </div>

      {/* Brand Footer Slogan */}
      <div style={{
        marginTop: '25px',
        textAlign: 'center',
        padding: '12px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ffd700',
          fontWeight: '900',
          fontSize: '15px',
          letterSpacing: '0.5px'
        }}>
          📢 Offers <span style={{ color: '#fff' }}>NOW</span>
        </div>
        <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
          Connect • Buy • Save
        </p>
      </div>
    </div>
  );
}
