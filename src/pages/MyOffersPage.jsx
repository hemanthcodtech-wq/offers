import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

export default function MyOffersPage() {
  const navigate = useNavigate();
  const { offers } = useApp();

  // User's active redeemed / subscribed offers
  const myOffers = offers.slice(0, 3);

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="My Offers" showBack={true} showNotifications={false} />

      <div className="desktop-page-container">
        {/* Breadcrumb Back Button */}
        <button
          onClick={() => navigate('/profile')}
          className="spring-btn"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffd700',
            fontSize: '13px',
            fontWeight: '800',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            padding: '4px 0',
            marginBottom: '14px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Profile</span>
        </button>

        {/* Hero Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #241c09 0%, #15151a 100%)',
          borderRadius: '20px',
          border: '1.5px solid #ffd700',
          padding: '18px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '22px',
          boxShadow: '0 8px 25px rgba(255, 215, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              boxShadow: '0 0 16px rgba(255, 215, 0, 0.6)'
            }}>
              <ShoppingBag size={24} />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '950', color: '#fff' }}>
                3 Active Claimed Passes
              </div>
              <div style={{ fontSize: '12px', color: '#ffd700', marginTop: '2px' }}>
                Present the QR code at cashier counter during billing
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/map')}
            className="spring-btn"
            style={{
              background: 'rgba(255, 215, 0, 0.15)',
              border: '1px solid #ffd700',
              color: '#ffd700',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            Locate Stores on Map
          </button>
        </div>

        {/* Multi-Column Grid */}
        <div className="desktop-feed-grid">
          {myOffers.map((offer, idx) => (
            <OfferCard key={offer.id} offer={offer} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
