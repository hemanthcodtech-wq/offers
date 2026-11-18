import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function MyOffersPage() {
  const navigate = useNavigate();
  const { offers } = useApp();

  // User's active redeemed / subscribed offers
  const myOffers = offers.slice(0, 3);

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="My Offers" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px 8px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #201c0b 0%, #131317 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
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
              backgroundColor: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000'
            }}>
              <ShoppingBag size={20} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>
                3 Active Claimed Offers
              </div>
              <div style={{ fontSize: '11px', color: '#ffd700' }}>
                Show QR / coupon code in-store
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#ffd700', marginBottom: '12px' }}>
          Active Passes
        </h3>

        {myOffers.map((offer) => (
          <div key={offer.id} style={{ position: 'relative' }}>
            <OfferCard offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
}
