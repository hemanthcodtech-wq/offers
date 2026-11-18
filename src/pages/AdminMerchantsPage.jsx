import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Store,
  Search,
  ShieldCheck,
  Ban,
  CheckCircle2,
  Eye,
  PhoneCall,
  MapPin,
  Tag
} from 'lucide-react';

export default function AdminMerchantsPage() {
  const { merchants, toggleMerchantStatus } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = merchants.filter(m => {
    const matchesQuery = m.businessName.toLowerCase().includes(query.toLowerCase()) ||
                         m.owner.toLowerCase().includes(query.toLowerCase()) ||
                         m.city.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || m.status === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Manage Shopkeepers" showBack={false} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search shops by name, owner, city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['All', 'Verified', 'Pending Review', 'Suspended'].map(st => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              style={{
                backgroundColor: filter === st ? '#ffd700' : '#151518',
                color: filter === st ? '#000' : '#aaa',
                border: filter === st ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer'
              }}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Merchants List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filtered.map((shop) => {
            const isVerified = shop.status === 'Verified';
            return (
              <div
                key={shop.id}
                style={{
                  background: '#151518',
                  borderRadius: '18px',
                  border: isVerified ? '1.5px solid rgba(255, 215, 0, 0.25)' : '1.5px solid #ef4444',
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
                      <Store size={22} color="#ffd700" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '950', color: '#fff' }}>
                        {shop.businessName}
                      </h4>
                      <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                        Owner: {shop.owner} • 📞 {shop.phone}
                      </div>
                      <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                        📍 {shop.city} • Category: {shop.category}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '900',
                    color: isVerified ? '#22c55e' : '#f59e0b',
                    backgroundColor: isVerified ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    border: `1px solid ${isVerified ? '#22c55e' : '#f59e0b'}`
                  }}>
                    {shop.status}
                  </span>
                </div>

                {/* Stats & Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '11px',
                  color: '#aaa'
                }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span>👀 <strong style={{ color: '#fff' }}>{shop.totalViews}</strong> views</span>
                    <span>📞 <strong style={{ color: '#22c55e' }}>{shop.callsReceived}</strong> calls</span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => toggleMerchantStatus(shop.id)}
                      style={{
                        background: isVerified ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
                        color: isVerified ? '#ef4444' : '#22c55e',
                        border: isVerified ? '1px solid #ef4444' : '1px solid #22c55e',
                        borderRadius: '12px',
                        padding: '5px 12px',
                        fontSize: '11px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      {isVerified ? 'Suspend Shop' : 'Approve & Verify'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
