import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, ChevronDown, ArrowLeft, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import AppLogo from './AppLogo';
import SideDrawer from './SideDrawer';

export default function Header({
  title = 'Offers NOW',
  showBack = false,
  showCityDropdown = false,
  showShare = false,
  showNotifications = true,
  rightAction = null
}) {
  const navigate = useNavigate();
  const { selectedCity, setSelectedCity } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Interactive Sliding Side Menu Drawer */}
      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px 10px',
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(12, 12, 14, 0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.18)'
      }}>
        {/* Left Action: Back button OR Hamburger Menu Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {showBack ? (
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={19} />
            </button>
          ) : (
            <button
              onClick={() => setDrawerOpen(true)}
              title="Open Navigation Menu"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
            >
              <Menu size={24} color="#ffd700" />
            </button>
          )}

          <div>
            {showCityDropdown ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AppLogo size={36} />
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '950',
                    letterSpacing: '0.4px',
                    fontStyle: 'italic',
                    color: '#ffffff',
                    lineHeight: '1.1'
                  }}>
                    Offers <span style={{ color: '#ffd700' }}>NOW</span>
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px', cursor: 'pointer' }}
                    onClick={() => {
                      const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Chennai'];
                      const nextIndex = (cities.indexOf(selectedCity) + 1) % cities.length;
                      setSelectedCity(cities[nextIndex]);
                    }}
                  >
                    <span style={{ color: '#ffd700', fontSize: '12px', fontWeight: '700' }}>
                      📍 {selectedCity}
                    </span>
                    <ChevronDown size={13} color="#ffd700" />
                  </div>
                </div>
              </div>
            ) : (
              <h1 style={{
                fontSize: '17px',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '0.3px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                {title}
              </h1>
            )}
          </div>
        </div>

        {/* Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {showShare && (
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Offers NOW', text: 'Check out this deal!', url: window.location.href });
                } else {
                  alert('Deal link copied to clipboard!');
                }
              }}
              style={{
                background: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffd700',
                cursor: 'pointer'
              }}
            >
              <Share2 size={17} />
            </button>
          )}

          {showNotifications && (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => navigate('/profile/notifications')}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <Bell size={17} color="#ffd700" />
              </button>
              <span style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '7px',
                height: '7px',
                backgroundColor: '#ff3b30',
                borderRadius: '50%',
                boxShadow: '0 0 6px #ff3b30'
              }} />
            </div>
          )}

          {rightAction}
        </div>
      </header>
    </>
  );
}
