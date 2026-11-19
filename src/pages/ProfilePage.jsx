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
  Store,
  Sparkles,
  ShieldCheck,
  CreditCard,
  QrCode
} from 'lucide-react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, selectedCity, savedOfferIds, showToast } = useApp();

  const menuSections = [
    {
      title: 'Customer Savings & Deals',
      items: [
        { icon: ShoppingBag, label: 'My Claimed Offers', count: '3 Passes Active', path: '/profile/my-offers', color: '#ffd700' },
        { icon: Heart, label: 'Saved Coupons & Deals', count: `${savedOfferIds.length} Saved`, path: '/profile/saved-offers', color: '#ff2d55' },
        { icon: Bell, label: 'Live Notifications & Alerts', count: '3 Unread', path: '/profile/notifications', color: '#ffd700' },
        { icon: MapPin, label: 'Explore & Change Area', count: selectedCity, path: '/profile/change-area', color: '#3b82f6' }
      ]
    },
    {
      title: 'Business & Partner Portals',
      items: [
        { icon: Store, label: 'Merchant Business Panel', count: 'Post Offer @ ₹499', path: '/business', color: '#22c55e' },
        { icon: Briefcase, label: 'Franchise Partner Hub', count: 'Manage Area Zone', path: '/franchise', color: '#ffd700' }
      ]
    },
    {
      title: 'Support & Legal',
      items: [
        { icon: HelpCircle, label: '24/7 Customer Help & FAQs', count: '', path: '/profile/help', color: '#a0a0ab' },
        { icon: Info, label: 'About Offers NOW Network', count: 'v2.4.0', path: '/profile/about', color: '#a0a0ab' }
      ]
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="My Profile" showBack={false} showNotifications={false} />

      <div className="desktop-profile-layout">
        
        {/* ================= LEFT SIDE: USER IDENTITY CARD ================= */}
        <div>
          <div style={{
            background: 'linear-gradient(135deg, #1b170c 0%, #131317 100%)',
            border: '1.5px solid rgba(255, 215, 0, 0.4)',
            borderRadius: '24px',
            padding: '28px 20px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
            position: 'relative'
          }}>
            {/* Avatar with Glow Ring */}
            <div style={{
              width: '94px',
              height: '94px',
              margin: '0 auto 14px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)',
              color: '#000000',
              fontWeight: '950',
              fontSize: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(255, 215, 0, 0.55)',
              border: '3px solid #ffffff'
            }}>
              {user?.name?.[0] || 'R'}
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: '950', color: '#ffffff' }}>
              {user?.name || 'Ramesh Kumar'}
            </h2>
            <div style={{ fontSize: '12px', color: '#ffd700', fontWeight: '800', marginTop: '2px' }}>
              👑 Offers NOW VIP Member
            </div>
            <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
              📞 {user?.phone || '+91 98480 22334'} • 📍 {selectedCity}
            </div>

            {/* VIP Status Banner */}
            <div
              onClick={() => navigate('/subscribe')}
              className="spring-card"
              style={{
                marginTop: '20px',
                background: 'linear-gradient(90deg, #2a2007 0%, #3a2e0a 100%)',
                border: '1.5px solid #ffd700',
                borderRadius: '16px',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Crown size={18} color="#ffd700" fill="#ffd700" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', fontWeight: '900', color: '#ffd700' }}>
                    VIP Pass Active (₹9/mo)
                  </div>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>
                    Ad-free & 50% extra perks
                  </div>
                </div>
              </div>
              <ChevronRight size={14} color="#ffd700" />
            </div>

            <button
              onClick={() => {
                navigate('/login');
                showToast('Logged out successfully');
              }}
              style={{
                width: '100%',
                marginTop: '16px',
                background: 'rgba(255, 59, 48, 0.1)',
                border: '1px solid rgba(255, 59, 48, 0.3)',
                color: '#ff4d4f',
                fontWeight: '800',
                fontSize: '12.5px',
                padding: '10px',
                borderRadius: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <LogOut size={14} />
              <span>Sign Out Account</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE: MENU SECTIONS ================= */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {menuSections.map((sec) => (
            <div key={sec.title}>
              <h3 style={{ fontSize: '13px', fontWeight: '900', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                {sec.title}
              </h3>

              <div style={{
                background: '#141418',
                borderRadius: '20px',
                border: '1.5px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden'
              }}>
                {sec.items.map((item, idx) => {
                  const Icon = item.icon;
                  const isLast = idx === sec.items.length - 1;
                  return (
                    <div
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      style={{
                        padding: '14px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                        cursor: 'pointer',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 215, 0, 0.06)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.color
                        }}>
                          <Icon size={18} />
                        </div>
                        <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#ffffff' }}>
                          {item.label}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {item.count && (
                          <span style={{ fontSize: '11.5px', color: '#ffd700', fontWeight: '700' }}>
                            {item.count}
                          </span>
                        )}
                        <ChevronRight size={15} color="#666" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
