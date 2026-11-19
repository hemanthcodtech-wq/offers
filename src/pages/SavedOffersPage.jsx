import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';
import { Heart, ArrowRight, ArrowLeft } from 'lucide-react';

export default function SavedOffersPage() {
  const navigate = useNavigate();
  const { offers, savedOfferIds } = useApp();

  const savedList = offers.filter((o) => savedOfferIds.includes(o.id));

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Saved Offers" showBack={true} showNotifications={false} />

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
          background: 'linear-gradient(135deg, #241419 0%, #15151a 100%)',
          borderRadius: '20px',
          border: '1.5px solid rgba(255, 45, 85, 0.4)',
          padding: '18px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '22px',
          boxShadow: '0 8px 25px rgba(255, 45, 85, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: '#ff2d55',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 16px rgba(255, 45, 85, 0.6)'
            }}>
              <Heart size={24} fill="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '950', color: '#fff' }}>
                {savedList.length} Bookmarked Deal{savedList.length === 1 ? '' : 's'}
              </div>
              <div style={{ fontSize: '12px', color: '#ff758f', marginTop: '2px' }}>
                Your saved discount passes ready for in-store checkout
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/offers')}
            className="spring-btn"
            style={{
              background: 'rgba(255, 45, 85, 0.15)',
              border: '1px solid #ff2d55',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            Find More Deals
          </button>
        </div>

        {/* Multi-Column Grid */}
        <div className="desktop-feed-grid">
          {savedList.length > 0 ? (
            savedList.map((offer, idx) => (
              <OfferCard key={offer.id} offer={offer} index={idx} />
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#888',
              gridColumn: '1 / -1',
              background: '#141418',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <Heart size={42} color="#ff2d55" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>
                No Saved Offers Yet
              </h3>
              <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                Tap the heart icon on any deal card to save it here for later.
              </p>
              <button
                onClick={() => navigate('/offers')}
                className="gold-glow-button"
                style={{
                  marginTop: '16px',
                  padding: '9px 22px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                Explore Hot Deals
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
