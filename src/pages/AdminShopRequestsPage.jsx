import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Store,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';

export default function AdminShopRequestsPage() {
  const { shopRequests, approveShopRequest, rejectShopRequest, showToast } = useApp();
  const [query, setQuery] = useState('');

  const filtered = shopRequests.filter(r =>
    r.businessName.toLowerCase().includes(query.toLowerCase()) ||
    r.owner.toLowerCase().includes(query.toLowerCase()) ||
    r.city.toLowerCase().includes(query.toLowerCase())
  );

  const handleApprove = (req) => {
    approveShopRequest(req.id);
    showToast(`Store "${req.businessName}" approved! Merchant Pass activated.`);
  };

  const handleReject = (req) => {
    rejectShopRequest(req.id);
    showToast(`Shop request for "${req.businessName}" rejected.`, 'error');
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Shop Approval Requests" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #241c08 0%, #151518 100%)',
          borderRadius: '16px',
          border: '1.5px solid rgba(255, 215, 0, 0.3)',
          padding: '14px 16px',
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>
              Pending Merchant Signups
            </div>
            <div style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px' }}>
              {shopRequests.length} shopkeeper registration requests awaiting admin review
            </div>
          </div>
          <span style={{
            fontSize: '12px',
            fontWeight: '900',
            backgroundColor: '#ffd700',
            color: '#000',
            padding: '4px 10px',
            borderRadius: '12px'
          }}>
            {shopRequests.length} QUEUED
          </span>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input form-input-with-icon"
            placeholder="Search pending shop requests..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Request Cards List */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: '#121215',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <CheckCircle2 size={36} color="#22c55e" style={{ margin: '0 auto 10px' }} />
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>No Pending Shop Requests</h4>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
              All new merchant signups have been verified and processed.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filtered.map((req, idx) => (
              <div
                key={req.id}
                className="spring-card cascade-item"
                style={{
                  background: '#151518',
                  borderRadius: '18px',
                  border: '1.5px solid rgba(255, 215, 0, 0.28)',
                  padding: '16px',
                  animationDelay: `${Math.min(idx * 60, 300)}ms`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffd700'
                    }}>
                      <Store size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>
                        {req.businessName}
                      </h4>
                      <div style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                        Owner: <strong style={{ color: '#fff' }}>{req.owner}</strong> • 📍 {req.city}
                      </div>
                      <div style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px', fontWeight: '700' }}>
                        📞 {req.phone} • ✉️ {req.email}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '800',
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    border: '1px solid #f59e0b'
                  }}>
                    Awaiting Review
                  </span>
                </div>

                {/* Details pill box */}
                <div style={{
                  background: '#0d0d10',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  marginTop: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '11px',
                  color: '#ccc'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>Plan: <strong style={{ color: '#ffd700' }}>{req.plan}</strong></span>
                    <span>Discount: <strong style={{ color: '#22c55e' }}>{req.discount}</strong></span>
                  </div>
                  <div>Note: {req.notes}</div>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <span style={{ fontSize: '11px', color: '#777' }}>
                    Submitted {req.requestedAt}
                  </span>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleReject(req)}
                      className="spring-btn"
                      style={{
                        background: 'rgba(239, 68, 68, 0.12)',
                        color: '#ef4444',
                        border: '1px solid #ef4444',
                        borderRadius: '14px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => handleApprove(req)}
                      className="spring-btn"
                      style={{
                        background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '6px 16px',
                        fontSize: '12px',
                        fontWeight: '900',
                        cursor: 'pointer'
                      }}
                    >
                      ✓ Approve Store
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
