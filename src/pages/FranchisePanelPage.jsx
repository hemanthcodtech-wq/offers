import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AnimatedCounter from '../components/AnimatedCounter';
import { FRANCHISE_DATA } from '../data/mockData';
import {
  Crown,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Users,
  Store,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileText,
  PlusCircle,
  Eye,
  Percent,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function FranchisePanelPage() {
  const navigate = useNavigate();

  const franchiseFeatures = [
    {
      title: 'Register Businesses',
      desc: 'Onboard local shops in zone & earn 30% cut',
      icon: Store,
      path: '/franchise/register-business',
      badge: 'Earn ₹150 / Shop',
      badgeColor: '#22c55e'
    },
    {
      title: 'Manage Area Offers',
      desc: 'Review, approve, and verify live deals',
      icon: ShieldCheck,
      path: '/franchise/manage-offers',
      badge: '142 Live Deals',
      badgeColor: '#22c55e'
    },
    {
      title: 'Track Earnings',
      desc: 'Daily breakdown of business posts & ad cuts',
      icon: TrendingUp,
      path: '/franchise/earnings',
      badge: '₹1,25,430 / Mo',
      badgeColor: '#ffd700'
    },
    {
      title: 'View Reports',
      desc: 'Download GST invoices & monthly statements',
      icon: FileText,
      path: '/franchise/reports',
      badge: 'TDS Verified',
      badgeColor: '#22c55e'
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Franchise Panel Header WITHOUT back button as requested */}
      <Header
        title="Franchise Panel"
        showBack={false}
        showNotifications={false}
      />

      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '215px',
        overflow: 'hidden',
        background: '#0e0e12'
      }}>
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85"
          alt="Franchise Partnership Handshake"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'brightness(0.85) contrast(1.05)'
          }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8, 8, 10, 0.45) 0%, rgba(8, 8, 10, 0.15) 35%, rgba(12, 12, 14, 0.98) 100%)'
        }} />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.22) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Crown Badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '18px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(10, 10, 14, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '6px 14px',
          borderRadius: '24px',
          border: '1.8px solid #ffd700',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 215, 0, 0.35)',
          zIndex: 5
        }}>
          <Crown size={15} color="#ffd700" fill="#ffd700" />
          <span style={{
            fontSize: '11px',
            fontWeight: '900',
            letterSpacing: '0.4px',
            color: '#ffd700',
            textTransform: 'uppercase'
          }}>
            Exclusive City Franchise Partner
          </span>
        </div>

        {/* Manage Your Area Title */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '18px',
          right: '18px',
          zIndex: 5
        }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: '950',
            color: '#ffffff',
            letterSpacing: '0.4px',
            lineHeight: '1.15',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
          }}>
            Manage Your Area
          </h2>
          <p style={{
            fontSize: '13px',
            color: '#ffd700',
            fontWeight: '800',
            letterSpacing: '0.3px',
            marginTop: '3px',
            textShadow: '0 1px 6px rgba(0, 0, 0, 0.9)'
          }}>
            with <span style={{ color: '#ffffff' }}>Offers NOW</span> Ecosystem
          </p>
        </div>
      </div>

      <div style={{ padding: '16px 18px' }}>
        {/* Performance Pulse Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          marginBottom: '20px'
        }}>
          <div style={{
            background: '#141418',
            border: '1px solid rgba(255, 215, 0, 0.25)',
            borderRadius: '14px',
            padding: '10px 8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '10px', color: '#888', fontWeight: '600' }}>ZONE VIEWS</div>
            <div style={{ fontSize: '16px', fontWeight: '950', color: '#ffd700', marginTop: '2px' }}>
              3.8 Lakh
            </div>
            <div style={{ fontSize: '9px', color: '#22c55e', marginTop: '2px' }}>↑ 18% growth</div>
          </div>

          <div style={{
            background: '#141418',
            border: '1px solid rgba(255, 215, 0, 0.25)',
            borderRadius: '14px',
            padding: '10px 8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '10px', color: '#888', fontWeight: '600' }}>ACTIVE SHOPS</div>
            <div style={{ fontSize: '16px', fontWeight: '950', color: '#ffffff', marginTop: '2px' }}>
              <AnimatedCounter value={FRANCHISE_DATA.metrics.registeredBusinesses} duration={1200} />
            </div>
            <div style={{ fontSize: '9px', color: '#22c55e', marginTop: '2px' }}>+8 this week</div>
          </div>

          <div style={{
            background: '#141418',
            border: '1px solid rgba(255, 215, 0, 0.25)',
            borderRadius: '14px',
            padding: '10px 8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '10px', color: '#888', fontWeight: '600' }}>EST. PAYOUT</div>
            <div style={{ fontSize: '16px', fontWeight: '950', color: '#ffd700', marginTop: '2px' }}>
              ₹1.25L
            </div>
            <div style={{ fontSize: '9px', color: '#22c55e', marginTop: '2px' }}>Net of TDS</div>
          </div>
        </div>

        {/* Modules Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#ffd700' }}>
            Franchise Operations & Modules
          </h3>
          <span style={{ fontSize: '11px', color: '#888' }}>Tap to manage</span>
        </div>

        {/* 4 Operations & Modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
          {franchiseFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                onClick={() => navigate(feat.path)}
                style={{
                  background: 'linear-gradient(135deg, #17171c 0%, #111114 100%)',
                  border: '1.5px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: '18px',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
                  transition: 'transform 0.15s, border-color 0.15s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    backgroundColor: '#1f1d14',
                    border: '1.5px solid #ffd700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(255, 215, 0, 0.35)',
                    flexShrink: 0
                  }}>
                    <Icon size={22} color="#ffd700" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff' }}>
                        {feat.title}
                      </h4>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: '800',
                        color: feat.badgeColor,
                        backgroundColor: feat.badgeColor === '#ffd700' ? 'rgba(255, 215, 0, 0.15)' : 'rgba(34, 197, 94, 0.15)',
                        border: `1px solid ${feat.badgeColor === '#ffd700' ? 'rgba(255, 215, 0, 0.35)' : 'rgba(34, 197, 94, 0.35)'}`,
                        padding: '2px 7px',
                        borderRadius: '8px'
                      }}>
                        {feat.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#a0a0a8', marginTop: '2px' }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <ArrowRight size={18} color="#ffd700" />
              </div>
            );
          })}
        </div>

        {/* Area Overview */}
        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '10px' }}>
          Area Overview ({FRANCHISE_DATA.area})
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div
            onClick={() => navigate('/franchise/manage-offers')}
            style={{
              background: '#16161a',
              border: '1.5px solid rgba(255, 215, 0, 0.22)',
              borderRadius: '16px',
              padding: '14px',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '11px', color: '#888' }}>Registered Stores</div>
            <div style={{ fontSize: '24px', fontWeight: '950', color: '#fff', marginTop: '4px' }}>
              {FRANCHISE_DATA.metrics.registeredBusinesses}
            </div>
            <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '700', marginTop: '3px' }}>
              +8 this week &gt;
            </div>
          </div>

          <div
            onClick={() => navigate('/franchise/earnings')}
            style={{
              background: '#16161a',
              border: '1.5px solid rgba(255, 215, 0, 0.22)',
              borderRadius: '16px',
              padding: '14px',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '11px', color: '#888' }}>Monthly Earnings</div>
            <div style={{ fontSize: '24px', fontWeight: '950', color: '#ffd700', marginTop: '4px' }}>
              {FRANCHISE_DATA.totalEarnings}
            </div>
            <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '700', marginTop: '3px' }}>
              +24.8% growth &gt;
            </div>
          </div>
        </div>

        {/* Onboard Store Action */}
        <div style={{
          background: 'linear-gradient(135deg, #1b160a 0%, #29200a 100%)',
          border: '1.5px solid #d4af37',
          borderRadius: '18px',
          padding: '18px',
          marginBottom: '22px',
          boxShadow: '0 4px 18px rgba(212, 175, 55, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>
              Onboard a New Store
            </h4>
            <span style={{ fontSize: '10px', background: '#22c55e', color: '#000', padding: '3px 9px', borderRadius: '10px', fontWeight: '900' }}>
              EARN 30% CUT
            </span>
          </div>
          <p style={{ fontSize: '12px', color: '#a0a0a0', marginBottom: '14px', lineHeight: '1.4' }}>
            Sign up a local business in your zone under the ₹499/mo plan and earn recurring commissions.
          </p>
          <button
            onClick={() => navigate('/franchise/register-business')}
            style={{
              width: '100%',
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000000',
              fontWeight: '950',
              fontSize: '14px',
              border: 'none',
              borderRadius: '24px',
              padding: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px rgba(244, 180, 0, 0.4)'
            }}
          >
            <PlusCircle size={17} strokeWidth={2.5} />
            <span>+ Register New Store in Zone</span>
          </button>
        </div>

        {/* Territory Rights Graphic */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          position: 'relative',
          height: '115px'
        }}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
            alt="City Zone Skyline"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '16px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '950', color: '#ffd700' }}>
              📍 Zone #04: Hyderabad Central & West
            </div>
            <div style={{ fontSize: '11px', color: '#fff', marginTop: '2px' }}>
              Franchise ID: OFR-FR-HYD-04 • Verified Operator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
