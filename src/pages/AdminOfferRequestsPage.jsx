import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Tag,
  CheckCircle2,
  XCircle,
  Store,
  Calendar,
  Percent,
  Search,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function AdminOfferRequestsPage() {
  const { offerRequests, approveOfferRequest, rejectOfferRequest, showToast } = useApp();
  const [query, setQuery] = useState('');

  const filtered = offerRequests.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.shopName.toLowerCase().includes(query.toLowerCase()) ||
    r.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleApprove = (req) => {
    approveOfferRequest(req.id);
    showToast(`Deal "${req.title}" approved and live in customer feed!`);
  };

  const handleReject = (req) => {
    rejectOfferRequest(req.id);
    showToast(`Offer "${req.title}" declined.`, 'error');
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Deal Approvals" showBack={true} showNotifications={false} />

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
              Pending Monthly Deals
            </div>
            <div style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px' }}>
              {offerRequests.length} merchant discounts waiting for quality & compliance check
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
            {offerRequests.length} DEALS
          </span>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input form-input-with-icon"
            placeholder="Search deals by shop or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Requests List */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: '#121215',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <CheckCircle2 size={36} color="#22c55e" style={{ margin: '0 auto 10px' }} />
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>No Pending Deals</h4>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
              All merchant monthly offers have been reviewed and published.
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
                  overflow: 'hidden',
                  animationDelay: `${Math.min(idx * 60, 300)}ms`
                }}
              >
                {/* Banner Preview */}
                <div style={{ position: 'relative', height: '140px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={req.bannerImage}
                    alt={req.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#ffd700',
                    color: '#000',
                    fontWeight: '900',
                    fontSize: '12px',
                    padding: '3px 8px',
                    borderRadius: '8px'
                  }}>
                    {req.discount}
                  </div>
                </div>

                <div style={{ padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#ffd700', fontWeight: '700' }}>
                    <Store size={14} />
                    <span>{req.shopName}</span>
                    <span style={{ color: '#666' }}>•</span>
                    <span style={{ color: '#aaa' }}>{req.category}</span>
                  </div>

                  <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff', marginTop: '4px' }}>
                    {req.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#aaa', marginTop: '4px', lineHeight: '1.4' }}>
                    {req.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '12px',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '11px',
                    color: '#888'
                  }}>
                    <span>Submitted by {req.submittedBy} ({req.submittedAt})</span>
                    <span>Valid: <strong style={{ color: '#fff' }}>{req.validTill}</strong></span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                    <button
                      onClick={() => handleReject(req)}
                      className="spring-btn"
                      style={{
                        flex: 1,
                        background: 'rgba(239, 68, 68, 0.12)',
                        color: '#ef4444',
                        border: '1px solid #ef4444',
                        borderRadius: '14px',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      Decline
                    </button>

                    <button
                      onClick={() => handleApprove(req)}
                      className="spring-btn"
                      style={{
                        flex: 2,
                        background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '8px',
                        fontSize: '12px',
                        fontWeight: '900',
                        cursor: 'pointer'
                      }}
                    >
                      ✓ Approve & Publish Deal
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
