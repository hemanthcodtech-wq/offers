import React from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  DollarSign,
  TrendingUp,
  Download,
  CreditCard,
  Building,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function AdminFinancePage() {
  const { adminMetrics, franchises, merchants } = useApp();

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Platform Finance & Revenue" showBack={false} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Revenue Card */}
        <div style={{
          background: 'linear-gradient(135deg, #241c08 0%, #111116 100%)',
          borderRadius: '20px',
          border: '1.5px solid #ffd700',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(255, 215, 0, 0.25)',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '800', textTransform: 'uppercase' }}>
            TOTAL MONETIZATION VOLUME
          </div>
          <div style={{ fontSize: '36px', fontWeight: '950', color: '#fff', margin: '4px 0' }}>
            {adminMetrics.totalRevenue}
          </div>
          <p style={{ fontSize: '12px', color: '#22c55e', fontWeight: '700' }}>
            ↑ 28.4% month-on-month growth across subscriptions & merchant passes
          </p>
        </div>

        {/* Breakdown Streams */}
        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '12px' }}>
          Revenue Stream Breakdown
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
          {[
            { label: 'Shopkeeper Merchant Passes (₹499/mo)', val: '₹8,42,000', count: '1,687 Active Stores', growth: '+34%' },
            { label: 'Consumer Ad-Free Passes (₹9/mo)', val: '₹3,88,400', count: '43,155 Subscribers', growth: '+19%' },
            { label: 'Featured Category Sponsorships', val: '₹2,56,000', count: '52 Featured Slots', growth: '+42%' }
          ].map((stream, i) => (
            <div
              key={i}
              style={{
                background: '#151518',
                borderRadius: '14px',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                padding: '14px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>{stream.label}</h4>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>{stream.count}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#ffd700' }}>{stream.val}</div>
                <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '700' }}>{stream.growth}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Automated Franchise Payout Releases */}
        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '12px' }}>
          Franchise Payout Disbursals
        </h3>

        <div style={{
          background: '#151518',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '800' }}>Scheduled Payout Cycle</span>
            <span style={{ fontSize: '11px', color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.15)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>
              ● Cycle Ready
            </span>
          </div>
          <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.4' }}>
            Total pending commission to 12 city franchise operators: <strong style={{ color: '#ffd700' }}>₹4,56,910</strong>.
          </p>

          <button
            onClick={() => alert('Batch direct deposits dispatched to all 12 verified franchise bank accounts!')}
            style={{
              width: '100%',
              marginTop: '14px',
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000',
              fontWeight: '900',
              padding: '12px',
              borderRadius: '22px',
              border: 'none',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            Release All Verified Franchise Payouts
          </button>
        </div>
      </div>
    </div>
  );
}
