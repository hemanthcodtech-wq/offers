import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Gift, MapPin, User } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Offers', path: '/offers', icon: Gift },
    { name: 'Map', path: '/map', icon: MapPin },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '4px',
              color: isActive ? '#ffd700' : '#8e8e93',
              transition: 'all 0.2s ease',
              position: 'relative',
              padding: '4px 12px'
            })}
          >
            {({ isActive }) => (
              <>
                <div style={{
                  padding: '4px',
                  borderRadius: '12px',
                  background: isActive ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.2s'
                }}>
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} color={isActive ? '#ffd700' : '#8e8e93'} />
                </div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: isActive ? '700' : '500',
                  letterSpacing: '0.2px'
                }}>
                  {item.name}
                </span>
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    width: '16px',
                    height: '2.5px',
                    borderRadius: '2px',
                    background: '#ffd700',
                    boxShadow: '0 0 8px #ffd700'
                  }} />
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
