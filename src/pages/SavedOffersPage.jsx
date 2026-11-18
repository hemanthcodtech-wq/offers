import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';
import { Heart, ArrowRight } from 'lucide-react';

export default function SavedOffersPage() {
  const navigate = useNavigate();
  const { offers, savedOfferIds } = useApp();

  const savedList = offers.filter((o) => savedOfferIds.includes(o.id));

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Saved Offers" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px 8px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #241419 0%, #131317 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 45, 85, 0.3)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: '#ff2d55',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <Heart size={20} fill="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>
                {savedList.length} Saved Deal{savedList.length === 1 ? '' : 's'}
              </div>
              <div style={{ fontSize: '11px', color: '#ff758f' }}>
                Your bookmarked deals for later
              </div>
            </div>
          </div>
        </div>

        {savedList.length > 0 ? (
          savedList.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '50px 20px', color: '#888' }}>
            <Heart size={48} color="#444" style={{ margin: '0 auto 12px' }} />
            <p style={{ fontSize: '15px', color: '#fff', fontWeight: '700' }}>No saved offers yet</p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>Tap the heart on any offer to save it here</p>
            <button
              onClick={() => navigate('/offers')}
              style={{
                marginTop: '16px',
                background: '#ffd700',
                color: '#000',
                fontWeight: '800',
                border: 'none',
                borderRadius: '20px',
                padding: '10px 20px',
                cursor: 'pointer'
              }}
            >
              Browse Offers
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
