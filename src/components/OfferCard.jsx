import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Navigation, Heart, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function OfferCard({ offer, isCompact = false }) {
  const navigate = useNavigate();
  const { savedOfferIds, toggleSaveOffer } = useApp();
  const isSaved = savedOfferIds.includes(offer.id);

  return (
    <div
      style={{
        background: '#16161a',
        borderRadius: '18px',
        border: '1.5px solid rgba(255, 215, 0, 0.25)',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
        marginBottom: '16px',
        transition: 'transform 0.2s, border-color 0.2s',
        position: 'relative'
      }}
    >
      {/* Top Banner with Badges */}
      <div style={{ position: 'relative', width: '100%', height: isCompact ? '130px' : '160px', overflow: 'hidden' }}>
        <img
          src={offer.bannerImage}
          alt={offer.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)'
        }} />

        {/* Offer Tag Badge (Red Special Offer style from Screenshot) */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: '#ff2d55',
          color: '#ffffff',
          fontWeight: '800',
          fontSize: '11px',
          letterSpacing: '0.3px',
          padding: '4px 10px',
          borderRadius: '20px',
          boxShadow: '0 4px 10px rgba(255, 45, 85, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          🔥 {offer.tag}
        </div>

        {/* Circular Discount Tag (Yellow 50% OFF sticker from screenshot) */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#ffd700',
          color: '#000000',
          fontWeight: '900',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(255, 215, 0, 0.6)',
          border: '2px solid #ffffff',
          lineHeight: '1.05'
        }}>
          <span style={{ fontSize: '13px', fontWeight: '900' }}>{offer.discount}</span>
          <span style={{ fontSize: '9px', fontWeight: '800', textTransform: 'uppercase' }}>OFF</span>
        </div>

        {/* Heart Save button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveOffer(offer.id);
          }}
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '12px',
            background: 'rgba(0,0,0,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isSaved ? '#ff2d55' : '#ffffff'
          }}
        >
          <Heart size={16} fill={isSaved ? '#ff2d55' : 'none'} />
        </button>
      </div>

      {/* Card Content Details */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{
              fontSize: '17px',
              fontWeight: '800',
              color: '#ffffff',
              letterSpacing: '0.2px',
              marginBottom: '3px'
            }}>
              {offer.title}
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#e0e0e0',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              {offer.description}
            </p>
          </div>
        </div>

        {/* Distance & Action Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '6px',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#a0a0a0', fontSize: '12px' }}>
            <span style={{ color: '#ffd700' }}>📍</span>
            <span style={{ fontWeight: '600', color: '#f0f0f0' }}>{offer.distance}</span>
            <span>•</span>
            <span style={{ color: '#888' }}>{offer.category}</span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => {
                window.location.href = `tel:${offer.phone}`;
              }}
              style={{
                background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                color: '#000000',
                border: 'none',
                borderRadius: '24px',
                padding: '7px 14px',
                fontSize: '12px',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                boxShadow: '0 3px 10px rgba(244, 180, 0, 0.35)'
              }}
            >
              <Phone size={13} fill="#000000" />
              Call Now
            </button>

            <button
              onClick={() => navigate(`/offers/${offer.id}`)}
              style={{
                background: 'rgba(255, 215, 0, 0.12)',
                color: '#ffd700',
                border: '1px solid rgba(255, 215, 0, 0.4)',
                borderRadius: '24px',
                padding: '7px 12px',
                fontSize: '12px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              Details
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
