import React from 'react';
import { NavLink } from 'react-router-dom';
import { Store, PlusCircle, BarChart3, Clock, User } from 'lucide-react';

export default function BusinessBottomNav() {
  const navItems = [
    { name: 'Dashboard', path: '/business', icon: Store, exact: true },
    { name: 'Post Deal', path: '/business/post-offer', icon: PlusCircle },
    { name: 'Analytics', path: '/business/analytics', icon: BarChart3 },
    { name: 'My Deals', path: '/business/my-offers', icon: Clock },
    { name: 'Profile', path: '/business/profile', icon: User },
  ];

  return (
    <nav className="bottom-nav-bar business-bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.exact}
            style={({ isActive }) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              gap: '4px',
              color: isActive ? '#ffd700' : '#8e8e93',
              transition: 'all 0.2s ease',
              position: 'relative',
              padding: '4px 8px',
              flex: 1
            })}
          >
            {({ isActive }) => (
              <>
                <div style={{
                  padding: '4px 10px',
                  borderRadius: '14px',
                  background: isActive ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(212, 175, 55, 0.08) 100%)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 215, 0, 0.4)' : '1px solid transparent',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isActive ? '0 0 12px rgba(255, 215, 0, 0.3)' : 'none'
                }}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} color={isActive ? '#ffd700' : '#8e8e93'} />
                </div>
                <span style={{
                  fontSize: '10px',
                  fontWeight: isActive ? '800' : '500',
                  letterSpacing: '0.2px',
                  color: isActive ? '#ffd700' : '#888'
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
