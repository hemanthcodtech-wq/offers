import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Eye,
  SlidersHorizontal,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function FranchiseManageOffersPage() {
  const { offers } = useApp();
  const [offerList, setOfferList] = useState(offers);
  const [filter, setFilter] = useState('all'); // 'all' | 'verified' | 'pending'

  const toggleApproval = (id) => {
    setOfferList(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          verified: item.verified === false ? true : false
        };
      }
      return item;
    }));
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Manage Area Offers" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Territory Status Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1b160a 0%, #201c0f 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          padding: '14px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>
              Area Verification Hub
            </div>
            <div style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px' }}>
              Hyderabad Central Zone • 142 Active Listings
            </div>
          </div>
          <div style={{
            background: 'rgba(34, 197, 94, 0.15)',
            color: '#22c55e',
            border: '1px solid #22c55e',
            borderRadius: '20px',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: '800'
          }}>
            98.5% Live
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          {[
            { id: 'all', label: `All Offers (${offerList.length})` },
            { id: 'verified', label: 'Verified Active' },
            { id: 'pending', label: 'Needs Review (1)' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                backgroundColor: filter === f.id ? '#ffd700' : '#151518',
                color: filter === f.id ? '#000' : '#aaa',
                border: filter === f.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '18px',
                padding: '7px 14px',
                fontSize: '12px',
                fontWeight: filter === f.id ? '800' : '600',
                cursor: 'pointer'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Offer Verification Card List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {offerList.map((offer) => {
            const isVerified = offer.verified !== false;
            return (
              <div
                key={offer.id}
                style={{
                  background: '#151518',
                  borderRadius: '16px',
                  border: isVerified ? '1.5px solid rgba(255, 215, 0, 0.25)' : '1.5px solid #ef4444',
                  overflow: 'hidden',
                  padding: '14px'
                }}
              >
                <div style={{ display: 'flex', gap: '12px' }}>
                  <img
                    src={offer.bannerImage}
                    alt={offer.title}
                    style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }}
                  />

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>
                        {offer.title}
                      </h4>
                      <span style={{
                        backgroundColor: isVerified ? '#22c55e' : '#ef4444',
                        color: '#fff',
                        fontSize: '9px',
                        fontWeight: '800',
                        padding: '2px 8px',
                        borderRadius: '10px'
                      }}>
                        {isVerified ? 'VERIFIED' : 'PENDING'}
                      </span>
                    </div>

                    <p style={{ fontSize: '12px', color: '#ffd700', fontWeight: '700', marginTop: '2px' }}>
                      {offer.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#888', marginTop: '4px' }}>
                      <span>📍 {offer.location}</span>
                      <span>•</span>
                      <span>Expires: {offer.validTill}</span>
                    </div>
                  </div>
                </div>

                {/* Management Action Bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ fontSize: '11px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Eye size={13} color="#ffd700" />
                    <span>3,420 Views in Zone</span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => toggleApproval(offer.id)}
                      style={{
                        backgroundColor: isVerified ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)',
                        color: isVerified ? '#ef4444' : '#22c55e',
                        border: isVerified ? '1px solid #ef4444' : '1px solid #22c55e',
                        borderRadius: '14px',
                        padding: '6px 12px',
                        fontSize: '11px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      {isVerified ? 'Pause Offer' : 'Approve & Push Live'}
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
