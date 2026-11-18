import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import { FRANCHISE_DATA } from '../data/mockData';
import {
  Crown,
  Briefcase,
  Store,
  ShieldCheck,
  TrendingUp,
  FileText,
  MapPin,
  Bell,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
  UserCheck,
  CreditCard,
  Building2,
  DollarSign
} from 'lucide-react';

export default function FranchiseProfilePage() {
  const navigate = useNavigate();
  const { user, selectedCity, logout } = useApp();

  const franchiseMenuItems = [
    { icon: Store, label: 'My Registered Stores', count: '84 Stores', path: '/franchise/manage-offers' },
    { icon: TrendingUp, label: 'Earnings & Commission', count: '₹1,25,430', path: '/franchise/earnings' },
    { icon: FileText, label: 'Tax Invoices & Payouts', count: '3 Statements', path: '/franchise/reports' },
    { icon: Building2, label: 'Territory Details', count: 'Zone #04 (Hyd)', path: '/franchise' },
    { icon: Bell, label: 'Franchise Alerts', count: '2 Unread', path: '/profile/notifications' },
    { icon: MapPin, label: 'Change City / Zone', count: selectedCity, path: '/profile/change-area' },
    { icon: HelpCircle, label: 'Franchise Support Desk', count: '24/7 Helpline', path: '/profile/help' },
    { icon: Info, label: 'Franchise Terms & SLA', count: 'v2.4.0', path: '/profile/about' },
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header
        title="Franchise Profile"
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

      {/* Franchise Profile Info Card (Matching Customer Profile Layout) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 20px 18px',
        position: 'relative'
      }}>
        {/* Avatar with Golden Aura Glow */}
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
          <Briefcase size={44} color="#ffd700" />
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
          {user.role === 'Area Franchise' ? user.name : 'K. R. Mohan (Franchise Head)'}
        </h2>

        <p style={{
          fontSize: '13px',
          color: '#a0a0a8',
          marginBottom: '14px'
        }}>
          franchise.hyd@offersnow.in • Operator ID: OFR-FR-HYD-04
        </p>

        {/* Master Active License Banner (Matches Gold Bar in Profile) */}
        <div
          onClick={() => navigate('/franchise/earnings')}
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
          <span style={{ fontSize: '14px' }}>Exclusive City Franchise License</span>
          <span style={{ fontSize: '11px', opacity: 0.85 }}>• Active</span>
        </div>
      </div>

      {/* Menu Navigation Card (Identical Structure to Customer Profile) */}
      <div style={{ padding: '0 18px' }}>
        <div style={{
          background: '#151518',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.22)',
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
        }}>
          {franchiseMenuItems.map((item, index) => {
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
                  borderBottom: index < franchiseMenuItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
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

          {/* Switch to User / Logout */}
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
                Logout / Exit Franchise Mode
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
          Franchise Operations Portal • Connect • Buy • Save
        </p>
      </div>
    </div>
  );
}
