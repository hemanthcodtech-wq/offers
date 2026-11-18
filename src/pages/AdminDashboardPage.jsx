import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  ShieldAlert,
  Users,
  Store,
  Briefcase,
  DollarSign,
  TrendingUp,
  Activity,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { customers, merchants, franchises, adminMetrics, offers } = useApp();

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header
        title="Admin Control Room"
        showBack={false}
        showNotifications={true}
      />

      {/* Hero Master Admin Banner */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #241d08 0%, #111116 100%)',
        borderBottom: '2px solid #ffd700',
        padding: '22px 20px 20px',
        boxShadow: '0 8px 30px rgba(255, 215, 0, 0.25)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 215, 0, 0.15)',
              border: '1px solid #ffd700',
              padding: '3px 10px',
              borderRadius: '14px',
              fontSize: '10px',
              fontWeight: '900',
              color: '#ffd700',
              textTransform: 'uppercase',
              marginBottom: '6px'
            }}>
              <ShieldAlert size={12} />
              <span>Platform Master Admin</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '950', color: '#ffffff', letterSpacing: '0.4px' }}>
              System Command Hub
            </h2>
            <p style={{ fontSize: '12px', color: '#ffd700', fontWeight: '700' }}>
              Full Control across Customers, Merchants & Area Franchises
            </p>
          </div>

          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#ffd700',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '950',
            fontSize: '20px',
            boxShadow: '0 0 16px rgba(255, 215, 0, 0.5)'
          }}>
            %
          </div>
        </div>

        {/* Total Platform Gross Volume */}
        <div style={{
          marginTop: '16px',
          background: 'rgba(0, 0, 0, 0.65)',
          borderRadius: '16px',
          padding: '12px 16px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '10px', color: '#888', fontWeight: '800', textTransform: 'uppercase' }}>
              GROSS PLATFORM VOLUME (MONTHLY)
            </div>
            <div style={{ fontSize: '24px', fontWeight: '950', color: '#ffd700', marginTop: '2px' }}>
              {adminMetrics.totalRevenue}
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: '800', backgroundColor: 'rgba(34, 197, 94, 0.15)', padding: '4px 10px', borderRadius: '12px' }}>
            ↑ {adminMetrics.monthlyGrowth}
          </span>
        </div>
      </div>

      <div style={{ padding: '16px 18px' }}>
        {/* Core Administrative Entities Control Cards */}
        <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#ffd700', marginBottom: '12px' }}>
          Entity Controls & Moderation
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
          {/* 1. Control Customers */}
          <div
            onClick={() => navigate('/admin/users')}
            style={{
              background: '#151518',
              borderRadius: '18px',
              border: '1.5px solid rgba(255, 215, 0, 0.28)',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                border: '1.5px solid #3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6'
              }}>
                <Users size={22} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>Customers & Users</h4>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.15)', padding: '2px 7px', borderRadius: '8px' }}>
                    {customers.length} Registered
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                  Manage accounts, suspend abusers, review subscriptions
                </p>
              </div>
            </div>
            <ArrowRight size={18} color="#ffd700" />
          </div>

          {/* 2. Control Shopkeepers / Merchants */}
          <div
            onClick={() => navigate('/admin/merchants')}
            style={{
              background: '#151518',
              borderRadius: '18px',
              border: '1.5px solid rgba(255, 215, 0, 0.28)',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1.5px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22c55e'
              }}>
                <Store size={22} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>Shopkeepers & Stores</h4>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', padding: '2px 7px', borderRadius: '8px' }}>
                    {merchants.length} Stores Live
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                  Moderate ₹499 passes, approve deals & audit store terms
                </p>
              </div>
            </div>
            <ArrowRight size={18} color="#ffd700" />
          </div>

          {/* 3. Control Area Franchises */}
          <div
            onClick={() => navigate('/admin/franchises')}
            style={{
              background: '#151518',
              borderRadius: '18px',
              border: '1.5px solid rgba(255, 215, 0, 0.28)',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 215, 0, 0.15)',
                border: '1.5px solid #ffd700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffd700'
              }}>
                <Briefcase size={22} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>Area Franchises</h4>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: '#ffd700', background: 'rgba(255, 215, 0, 0.15)', padding: '2px 7px', borderRadius: '8px' }}>
                    {franchises.length} City Zones
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                  Audit territorial rights, release payouts & commission cuts
                </p>
              </div>
            </div>
            <ArrowRight size={18} color="#ffd700" />
          </div>
        </div>

        {/* Live System Health */}
        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '10px' }}>
          Infrastructure & Live Operations
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ background: '#151518', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '12px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: '10px', color: '#888' }}>UPTIME</div>
            <div style={{ fontSize: '16px', fontWeight: '950', color: '#22c55e', marginTop: '2px' }}>99.98%</div>
            <div style={{ fontSize: '9px', color: '#aaa', marginTop: '1px' }}>All Nodes Live</div>
          </div>

          <div style={{ background: '#151518', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '12px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: '10px', color: '#888' }}>DEALS LIVE</div>
            <div style={{ fontSize: '16px', fontWeight: '950', color: '#ffd700', marginTop: '2px' }}>{offers.length}</div>
            <div style={{ fontSize: '9px', color: '#aaa', marginTop: '1px' }}>Verified Today</div>
          </div>

          <div style={{ background: '#151518', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '12px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: '10px', color: '#888' }}>SECURITY</div>
            <div style={{ fontSize: '16px', fontWeight: '950', color: '#22c55e', marginTop: '2px' }}>Optimal</div>
            <div style={{ fontSize: '9px', color: '#aaa', marginTop: '1px' }}>0 Breaches</div>
          </div>
        </div>
      </div>
    </div>
  );
}
