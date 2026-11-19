import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import AppLogo from './AppLogo';
import {
  Compass,
  Search,
  Bell,
  ChevronDown,
  Store,
  Crown,
  ShieldAlert,
  User,
  Sparkles,
  MapPin,
  Tag,
  X,
  CheckCircle2,
  LogOut
} from 'lucide-react';

export default function DesktopNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCity, setSelectedCity, searchQuery, setSearchQuery, showToast, user } = useApp();
  const [cityOpen, setCityOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const cityDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Chennai'];

  // Check portal contexts
  const isAdmin = location.pathname.startsWith('/admin');
  const isBusiness = location.pathname.startsWith('/business');
  const isFranchise = location.pathname.startsWith('/franchise');

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setCityOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="desktop-navbar">
      <div className="desktop-navbar-inner">
        {/* 1. Brand Logo */}
        <div
          onClick={() => navigate('/home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexShrink: 0 }}
        >
          <div style={{ position: 'relative' }}>
            <AppLogo size={36} />
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
              filter: 'blur(3px)',
              zIndex: -1
            }} />
          </div>

          <div style={{ lineHeight: '1.1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '18px', fontWeight: '950', fontStyle: 'italic', color: '#ffffff', letterSpacing: '0.4px', whiteSpace: 'nowrap' }}>
                Offers <span className="shimmer-gold">NOW</span>
              </span>
            </div>
            <div style={{ fontSize: '9px', color: '#888', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Local Savings
            </div>
          </div>
        </div>

        {/* 2. City Selector Pill */}
        <div ref={cityDropdownRef} style={{ position: 'relative', flexShrink: 0 }}>
          <button
            onClick={() => setCityOpen(!cityOpen)}
            className="spring-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.12) 0%, rgba(20, 20, 24, 0.9) 100%)',
              border: cityOpen ? '1.5px solid #ffd700' : '1.5px solid rgba(255, 215, 0, 0.35)',
              padding: '6px 12px',
              borderRadius: '20px',
              color: '#ffd700',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <MapPin size={12} color="#ffd700" />
            <span>{selectedCity}</span>
            <ChevronDown size={13} color="#ffd700" />
          </button>

          {cityOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                background: 'rgba(18, 18, 22, 0.98)',
                backdropFilter: 'blur(20px)',
                border: '1.5px solid #ffd700',
                borderRadius: '14px',
                padding: '6px',
                minWidth: '160px',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.85), 0 0 15px rgba(255, 215, 0, 0.2)',
                zIndex: 1000
              }}
            >
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setCityOpen(false);
                    showToast(`Region switched to ${city}`);
                  }}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: selectedCity === city ? '800' : '600',
                    color: selectedCity === city ? '#000000' : '#ffffff',
                    background: selectedCity === city ? 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2px'
                  }}
                >
                  <span>📍 {city}</span>
                  {selectedCity === city && <CheckCircle2 size={13} color="#000" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Search Bar */}
        <div style={{ flex: '1 1 200px', maxWidth: '300px', minWidth: '150px', position: 'relative' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: '#141418',
            borderRadius: '22px',
            border: searchFocused ? '1.5px solid #ffd700' : '1.5px solid rgba(255, 215, 0, 0.25)',
            boxShadow: searchFocused ? '0 0 12px rgba(255, 215, 0, 0.3)' : 'none',
            transition: 'all 0.2s'
          }}>
            <Search
              size={14}
              color={searchFocused ? '#ffd700' : '#888'}
              style={{ marginLeft: '12px', flexShrink: 0 }}
            />
            <input
              type="text"
              placeholder="Search deals, stores..."
              value={searchQuery}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                padding: '8px 10px',
                color: '#ffffff',
                fontSize: '12px',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  paddingRight: '10px',
                  cursor: 'pointer',
                  display: 'flex'
                }}
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* 4. Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <NavLink
            to="/home"
            className={({ isActive }) => `desktop-nav-link ${isActive && !isAdmin && !isBusiness && !isFranchise ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) => `desktop-nav-link ${isActive ? 'active' : ''}`}
          >
            Offers
          </NavLink>
          <NavLink
            to="/map"
            className={({ isActive }) => `desktop-nav-link ${isActive ? 'active' : ''}`}
          >
            <Compass size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
            Radar Map
          </NavLink>
        </div>

        {/* 5. Portal Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <button
            onClick={() => navigate('/business')}
            className={`desktop-portal-badge ${isBusiness ? 'active-badge' : ''}`}
            title="Merchant Portal"
          >
            <Store size={13} />
            <span>Store @ ₹499</span>
          </button>

          <button
            onClick={() => navigate('/franchise')}
            className={`desktop-portal-badge ${isFranchise ? 'active-badge' : ''}`}
            title="Franchise Hub"
          >
            <Crown size={13} color="#ffd700" />
            <span>Franchise</span>
          </button>

          <button
            onClick={() => navigate('/admin')}
            className={`desktop-portal-badge ${isAdmin ? 'active-badge' : ''}`}
            title="Admin Command Hub"
          >
            <ShieldAlert size={13} color="#ff3b30" />
            <span>Admin</span>
          </button>
        </div>

        {/* 6. Notifications Bell */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <button
            onClick={() => navigate('/profile/notifications')}
            className="spring-btn"
            title="Notifications"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 215, 0, 0.28)',
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <span className="bell-sway" style={{ display: 'inline-flex' }}>
              <Bell size={15} />
            </span>
          </button>
          <span className="pulse-badge" style={{
            position: 'absolute',
            top: '1px',
            right: '1px',
            width: '7px',
            height: '7px',
            backgroundColor: '#ff3b30',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
        </div>

        {/* 7. Profile Avatar */}
        <div ref={profileDropdownRef} style={{ position: 'relative', flexShrink: 0 }}>
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="spring-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: profileOpen ? 'rgba(255, 215, 0, 0.15)' : '#18181d',
              border: profileOpen ? '1.5px solid #ffd700' : '1.5px solid rgba(255, 215, 0, 0.4)',
              borderRadius: '22px',
              padding: '3px 10px 3px 5px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)',
              color: '#000000',
              fontWeight: '950',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px'
            }}>
              {user?.name?.[0] || 'R'}
            </div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff', whiteSpace: 'nowrap' }}>
              {user?.name?.split(' ')[0] || 'Ramesh'}
            </span>
            <ChevronDown size={12} color="#ffd700" />
          </div>

          {profileOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                background: 'rgba(18, 18, 22, 0.98)',
                backdropFilter: 'blur(20px)',
                border: '1.5px solid #ffd700',
                borderRadius: '14px',
                padding: '8px',
                minWidth: '200px',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.85), 0 0 15px rgba(255, 215, 0, 0.2)',
                zIndex: 1000
              }}
            >
              <div style={{ padding: '6px 8px 8px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '13px', fontWeight: '900', color: '#ffffff' }}>
                  {user?.name || 'Ramesh Kumar'}
                </div>
                <div style={{ fontSize: '10px', color: '#ffd700', fontWeight: '700' }}>
                  VIP Pass Member
                </div>
              </div>

              <div style={{ padding: '4px 0' }}>
                {[
                  { label: 'My Saved Coupons', icon: Tag, path: '/profile/saved-offers' },
                  { label: 'VIP Membership (₹9)', icon: Sparkles, path: '/subscribe' },
                  { label: 'Account Settings', icon: User, path: '/profile' }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      onClick={() => {
                        setProfileOpen(false);
                        navigate(item.path);
                      }}
                      style={{
                        padding: '7px 8px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        color: '#e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 215, 0, 0.12)';
                        e.currentTarget.style.color = '#ffd700';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#e0e0e0';
                      }}
                    >
                      <Icon size={13} color="#ffd700" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '4px' }}>
                <div
                  onClick={() => {
                    setProfileOpen(false);
                    navigate('/login');
                    showToast('Logged out successfully');
                  }}
                  style={{
                    padding: '6px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    color: '#ff4d4f',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <LogOut size={12} />
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
