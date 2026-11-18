import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Briefcase,
  Search,
  ShieldCheck,
  Ban,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Building,
  DollarSign
} from 'lucide-react';

export default function AdminFranchisesPage() {
  const { franchises, toggleFranchiseStatus } = useApp();
  const [query, setQuery] = useState('');

  const filtered = franchises.filter(f =>
    f.zone.toLowerCase().includes(query.toLowerCase()) ||
    f.operatorName.toLowerCase().includes(query.toLowerCase()) ||
    f.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Manage Franchises" showBack={false} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search franchises by zone, operator, city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>

        {/* Franchise Zone Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filtered.map((item) => {
            const isActive = item.status === 'Active';
            return (
              <div
                key={item.id}
                style={{
                  background: '#151518',
                  borderRadius: '18px',
                  border: isActive ? '1.5px solid rgba(255, 215, 0, 0.3)' : '1.5px solid #ef4444',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '14px',
                      backgroundColor: '#1f1d14',
                      border: '1.5px solid #ffd700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Briefcase size={22} color="#ffd700" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: '950', color: '#fff' }}>
                        {item.zone}
                      </h4>
                      <div style={{ fontSize: '12px', color: '#ffd700', fontWeight: '700' }}>
                        Lead: {item.operatorName}
                      </div>
                      <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                        📞 {item.phone} • {item.email}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '900',
                    color: isActive ? '#22c55e' : '#f59e0b',
                    backgroundColor: isActive ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    border: `1px solid ${isActive ? '#22c55e' : '#f59e0b'}`
                  }}>
                    {item.status}
                  </span>
                </div>

                {/* Performance Strip */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                  margin: '12px 0',
                  padding: '10px',
                  background: '#0e0e12',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '10px', color: '#888' }}>STORES</div>
                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>{item.registeredStores}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#888' }}>PAYOUT</div>
                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700' }}>{item.monthlyEarnings}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#888' }}>COMMISSION</div>
                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#22c55e' }}>{item.commissionCut}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ fontSize: '11px', color: '#aaa' }}>
                    Payout Status: <strong style={{ color: item.payoutStatus === 'Settled' ? '#22c55e' : '#f59e0b' }}>{item.payoutStatus}</strong>
                  </div>

                  <button
                    onClick={() => toggleFranchiseStatus(item.id)}
                    style={{
                      background: isActive ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
                      color: isActive ? '#ef4444' : '#22c55e',
                      border: isActive ? '1px solid #ef4444' : '1px solid #22c55e',
                      borderRadius: '12px',
                      padding: '5px 12px',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    {isActive ? 'Freeze Territory' : 'Authorize Partner'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
