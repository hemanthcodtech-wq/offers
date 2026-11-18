import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, Users, Store, Briefcase, BarChart3, Settings } from 'lucide-react';

export default function AdminBottomNav() {
  const navItems = [
    { name: 'Overview', path: '/admin', icon: ShieldAlert, exact: true },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Shops', path: '/admin/merchants', icon: Store },
    { name: 'Franchises', path: '/admin/franchises', icon: Briefcase },
    { name: 'Finance', path: '/admin/finance', icon: BarChart3 },
  ];

  return (
    <nav className="bottom-nav-bar admin-bottom-nav" style={{ borderTop: '1.5px solid #ffd700' }}>
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
              padding: '4px 6px',
              flex: 1
            })}
          >
            {({ isActive }) => (
              <>
                <div style={{
                  padding: '4px 10px',
                  borderRadius: '14px',
                  background: isActive ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.28) 0%, rgba(212, 175, 55, 0.1) 100%)' : 'transparent',
                  border: isActive ? '1px solid #ffd700' : '1px solid transparent',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isActive ? '0 0 14px rgba(255, 215, 0, 0.4)' : 'none'
                }}>
                  <Icon size={19} strokeWidth={isActive ? 2.5 : 2} color={isActive ? '#ffd700' : '#8e8e93'} />
                </div>
                <span style={{
                  fontSize: '10px',
                  fontWeight: isActive ? '900' : '500',
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
