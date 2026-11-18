import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Users,
  Search,
  ShieldCheck,
  Ban,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Tag
} from 'lucide-react';

export default function AdminCustomersPage() {
  const { customers, toggleCustomerStatus } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = customers.filter(c => {
    const matchesQuery = c.name.toLowerCase().includes(query.toLowerCase()) ||
                         c.email.toLowerCase().includes(query.toLowerCase()) ||
                         c.phone.includes(query);
    const matchesFilter = filter === 'All' || c.status === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Manage Customers" showBack={false} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search users by name, email, phone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['All', 'Active', 'Suspended'].map(st => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              style={{
                backgroundColor: filter === st ? '#ffd700' : '#151518',
                color: filter === st ? '#000' : '#aaa',
                border: filter === st ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '6px 14px',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer'
              }}
            >
              {st} ({st === 'All' ? customers.length : customers.filter(c => c.status === st).length})
            </button>
          ))}
        </div>

        {/* Customer Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map((user) => {
            const isActive = user.status === 'Active';
            return (
              <div
                key={user.id}
                style={{
                  background: '#151518',
                  borderRadius: '16px',
                  border: isActive ? '1px solid rgba(255, 215, 0, 0.25)' : '1px solid #ef4444',
                  padding: '14px 16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'rgba(255, 215, 0, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      color: isActive ? '#ffd700' : '#ef4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                      border: isActive ? '1px solid #ffd700' : '1px solid #ef4444'
                    }}>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>
                        {user.name}
                      </h4>
                      <div style={{ fontSize: '11px', color: '#888' }}>
                        {user.email} • {user.phone}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '900',
                    color: isActive ? '#22c55e' : '#ef4444',
                    backgroundColor: isActive ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    border: isActive ? '1px solid #22c55e' : '1px solid #ef4444'
                  }}>
                    {user.status}
                  </span>
                </div>

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
                  <div>
                    <span style={{ color: '#ffd700', fontWeight: '800' }}>{user.plan}</span> • {user.city} • Claims: {user.totalClaims}
                  </div>

                  <button
                    onClick={() => toggleCustomerStatus(user.id)}
                    style={{
                      background: isActive ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
                      color: isActive ? '#ef4444' : '#22c55e',
                      border: isActive ? '1px solid #ef4444' : '1px solid #22c55e',
                      borderRadius: '12px',
                      padding: '4px 10px',
                      fontSize: '10px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    {isActive ? 'Suspend User' : 'Restore Access'}
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
