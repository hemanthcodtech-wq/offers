import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Phone,
  Navigation,
  Share2,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Heart,
  QrCode,
  Copy,
  Clock,
  Sparkles,
  Store,
  Star,
  ExternalLink,
  Info
} from 'lucide-react';

export default function OfferDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { offers, savedOfferIds, toggleSaveOffer } = useApp();

  const offer = offers.find(o => o.id === id) || offers[0];
  const isSaved = savedOfferIds.includes(offer.id);
  const [couponCopied, setCouponCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const couponCode = `OFFERSNOW-${offer.discount.replace('%', '').trim()}OFF`;

  const handleCopyCoupon = () => {
    navigator.clipboard?.writeText(couponCode);
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2500);
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Offer Details" showBack={true} showShare={true} showNotifications={false} />

      {/* Main Showcase Image with Banner & Tag (Matching Screenshot 8) */}
      <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
        <img
          src={offer.bannerImage}
          alt={offer.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(12,12,14,0.95) 100%)'
        }} />

        {/* Floating Special Offer Badge (Red badge from Screenshot 8) */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          background: 'linear-gradient(135deg, #ff2a54 0%, #ff1744 100%)',
          color: '#ffffff',
          fontWeight: '900',
          fontSize: '12px',
          padding: '6px 14px',
          borderRadius: '20px',
          boxShadow: '0 4px 14px rgba(255, 23, 68, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          letterSpacing: '0.4px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          🔥 {offer.tag}
        </div>

        {/* Circular Discount Tag (50% OFF sticker from Screenshot 8) */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '66px',
          height: '66px',
          borderRadius: '50%',
          backgroundColor: '#ffd700',
          color: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 18px rgba(255, 215, 0, 0.75)',
          border: '3px solid #ffffff',
          lineHeight: '1.05'
        }}>
          <span style={{ fontSize: '16px', fontWeight: '950' }}>{offer.discount}</span>
          <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' }}>OFF</span>
        </div>

        {/* Heart Favorite Button */}
        <button
          onClick={() => toggleSaveOffer(offer.id)}
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            background: 'rgba(20,20,24,0.85)',
            border: '1px solid rgba(255,215,0,0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isSaved ? '#ff2d55' : '#ffffff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}
        >
          <Heart size={19} fill={isSaved ? '#ff2d55' : 'none'} />
        </button>
      </div>

      {/* Offer Information Content */}
      <div style={{ padding: '16px 20px' }}>
        {/* Title & Ratings */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '950',
              color: '#ffffff',
              letterSpacing: '0.3px',
              marginBottom: '3px'
            }}>
              {offer.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#ffd700',
              fontWeight: '800',
              marginBottom: '12px'
            }}>
              {offer.description}
            </p>
          </div>
        </div>

        {/* Store Trust & Rating pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
          fontSize: '12px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            color: '#22c55e',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '12px',
            padding: '3px 8px',
            fontWeight: '700'
          }}>
            <ShieldCheck size={14} />
            <span>Verified Merchant</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#ffd700' }}>
            <Star size={13} fill="#ffd700" />
            <span style={{ fontWeight: '800', color: '#fff' }}>{offer.rating}</span>
            <span style={{ color: '#888' }}>({offer.reviews} Reviews)</span>
          </div>
        </div>

        {/* Key Info Strip (Distance, Validity, Category) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          padding: '14px',
          background: '#151518',
          borderRadius: '16px',
          border: '1.5px solid rgba(255, 215, 0, 0.22)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#f0f0f0' }}>
            <MapPin size={18} color="#ffd700" />
            <div>
              <div style={{ fontSize: '10px', color: '#888' }}>LOCATION</div>
              <div style={{ fontWeight: '700' }}>{offer.distance} ({offer.location.split(',')[0]})</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#f0f0f0' }}>
            <Clock size={18} color="#22c55e" />
            <div>
              <div style={{ fontSize: '10px', color: '#888' }}>VALID UNTIL</div>
              <div style={{ fontWeight: '700', color: '#22c55e' }}>{offer.validTill}</div>
            </div>
          </div>
        </div>

        {/* Digital Coupon Pass with QR Code */}
        <div style={{
          background: 'linear-gradient(135deg, #1f1b0a 0%, #15140e 100%)',
          borderRadius: '18px',
          border: '1.5px dashed #ffd700',
          padding: '16px',
          marginBottom: '22px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '800', textTransform: 'uppercase' }}>
              OFFICIAL IN-STORE COUPON CODE
            </div>
            <button
              onClick={() => setShowQrModal(true)}
              style={{
                background: 'rgba(255,215,0,0.15)',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                padding: '3px 8px',
                color: '#ffd700',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <QrCode size={13} />
              <span>Show QR</span>
            </button>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0d0d10',
            borderRadius: '12px',
            padding: '10px 14px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <span style={{ fontSize: '16px', fontWeight: '950', letterSpacing: '1px', color: '#ffffff' }}>
              {couponCode}
            </span>
            <button
              onClick={handleCopyCoupon}
              style={{
                background: couponCopied ? '#22c55e' : '#ffd700',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s'
              }}
            >
              <Copy size={12} />
              <span>{couponCopied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          <p style={{ fontSize: '11px', color: '#888', marginTop: '6px' }}>
            Show this coupon or tap Call Now to reserve the deal before visiting.
          </p>
        </div>

        {/* About Offer Section */}
        <div style={{ marginBottom: '22px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>📝</span> About Offer
          </h3>
          <p style={{
            fontSize: '13px',
            color: '#b0b0b8',
            lineHeight: '1.6',
            background: '#141417',
            padding: '16px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            {offer.longDescription}
          </p>
        </div>

        {/* Big Yellow Call Now CTA Button (Screenshot 8 Matching) */}
        <button
          onClick={() => {
            window.location.href = `tel:${offer.phone}`;
          }}
          style={{
            width: '100%',
            background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
            color: '#000000',
            fontWeight: '950',
            fontSize: '16px',
            border: 'none',
            borderRadius: '32px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(244, 180, 0, 0.55)',
            marginBottom: '16px',
            transition: 'transform 0.15s'
          }}
        >
          <Phone size={19} fill="#000000" />
          <span>Call Now ({offer.phone})</span>
        </button>

        {/* Dual Actions: Get Direction & Share Offer from Screenshot 8 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <button
            onClick={() => navigate('/map')}
            style={{
              background: '#1b1b20',
              border: '1.5px solid rgba(255, 215, 0, 0.35)',
              borderRadius: '26px',
              padding: '14px',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            <Navigation size={17} color="#ffd700" />
            Get Direction
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: offer.title, text: offer.description, url: window.location.href });
              } else {
                handleCopyCoupon();
                alert('Offer link & coupon code copied to clipboard!');
              }
            }}
            style={{
              background: '#1b1b20',
              border: '1.5px solid rgba(255, 215, 0, 0.35)',
              borderRadius: '26px',
              padding: '14px',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            <Share2 size={17} color="#ffd700" />
            Share Offer
          </button>
        </div>

        {/* Store Address & Contact */}
        <div style={{
          background: '#141418',
          borderRadius: '16px',
          padding: '16px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Store size={18} color="#ffd700" />
            <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>Store Information</h4>
          </div>
          <p style={{ fontSize: '12px', color: '#aaa', lineHeight: '1.5' }}>
            📍 {offer.location}
          </p>
          <p style={{ fontSize: '12px', color: '#ffd700', marginTop: '4px', fontWeight: '700' }}>
            📞 Direct Hotline: {offer.phone}
          </p>
        </div>

        {/* Terms and Conditions from Screenshot 8 */}
        <div style={{
          background: '#131316',
          borderRadius: '16px',
          padding: '16px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '10px' }}>
            Terms & Conditions:
          </div>
          {offer.terms.map((term, index) => (
            <div key={index} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#9e9ea7', marginBottom: '8px', lineHeight: '1.4' }}>
              <span style={{ color: '#ffd700', fontWeight: '900' }}>•</span>
              <span>{term}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code In-Store Modal Popup */}
      {showQrModal && (
        <div
          onClick={() => setShowQrModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#16161b',
              border: '2px solid #ffd700',
              borderRadius: '24px',
              padding: '26px 20px',
              width: '100%',
              maxWidth: '340px',
              textAlign: 'center',
              boxShadow: '0 0 35px rgba(255, 215, 0, 0.35)'
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#fff' }}>
              {offer.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#ffd700', fontWeight: '700', marginTop: '2px' }}>
              {offer.discount} IN-STORE PASS
            </p>

            {/* Stylized QR Matrix Container */}
            <div style={{
              margin: '20px auto',
              width: '190px',
              height: '190px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
            }}>
              <QrCode size={160} color="#000000" />
            </div>

            <div style={{
              fontSize: '14px',
              fontWeight: '900',
              letterSpacing: '1px',
              color: '#ffd700',
              backgroundColor: '#0a0a0d',
              padding: '8px 12px',
              borderRadius: '10px',
              border: '1px solid rgba(255,215,0,0.3)',
              marginBottom: '16px'
            }}>
              {couponCode}
            </div>

            <p style={{ fontSize: '11px', color: '#aaa', marginBottom: '18px' }}>
              Present this QR to cashier at checkout to claim your discount.
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              style={{
                width: '100%',
                background: '#ffd700',
                color: '#000',
                fontWeight: '900',
                border: 'none',
                borderRadius: '20px',
                padding: '12px',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Done / Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
