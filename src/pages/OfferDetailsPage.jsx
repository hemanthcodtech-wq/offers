import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import { triggerGoldConfetti } from '../utils/confetti';
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
  Info,
  ArrowLeft
} from 'lucide-react';

export default function OfferDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { offers, savedOfferIds, toggleSaveOffer, showToast } = useApp();

  const offer = offers.find(o => o.id === id) || offers[0];
  const isSaved = savedOfferIds.includes(offer.id);
  const [couponCopied, setCouponCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const couponCode = `OFFERSNOW-${offer.discount.replace('%', '').trim()}OFF`;

  const handleCopyCoupon = () => {
    navigator.clipboard?.writeText(couponCode);
    setCouponCopied(true);
    triggerGoldConfetti();
    showToast(`Code ${couponCode} copied! Ready to redeem.`);
    setTimeout(() => setCouponCopied(false), 2500);
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Mobile Back Header */}
      <Header title="Offer Details" showBack={true} showShare={true} showNotifications={false} />

      {/* Desktop Breadcrumb Navigation */}
      <div className="desktop-page-container" style={{ marginBottom: '8px' }}>
        <button
          onClick={() => navigate(-1)}
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
            padding: '4px 0'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Offers</span>
        </button>
      </div>

      {/* Main Responsive Grid Layout (Split screen on Desktop, Stacked on Mobile) */}
      <div className="desktop-details-layout">
        
        {/* ================= LEFT COLUMN: VISUAL SHOWCASE & PASS ================= */}
        <div>
          {/* Main Showcase Banner Image */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '320px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1.5px solid rgba(255, 215, 0, 0.3)',
            boxShadow: '0 12px 35px rgba(0,0,0,0.85)',
            marginBottom: '18px'
          }}>
            <img
              src={offer.bannerImage}
              alt={offer.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(12,12,14,0.92) 100%)'
            }} />

            {/* Special Offer Tag */}
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
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              🔥 {offer.tag}
            </div>

            {/* Circular Discount Tag */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#ffd700',
              color: '#000000',
              fontWeight: '950',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.9)',
              border: '3px solid #ffffff',
              lineHeight: '1.05'
            }}>
              <span style={{ fontSize: '17px' }}>{offer.discount}</span>
              <span style={{ fontSize: '9px', fontWeight: '900' }}>OFF</span>
            </div>

            {/* Store title overlay */}
            <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px' }}>
              <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '800', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                {offer.category} • {offer.location.split(',')[0]}
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '950', color: '#fff', marginTop: '2px' }}>
                {offer.title}
              </h2>
            </div>
          </div>

          {/* In-Store Coupon Pass Card */}
          <div style={{
            background: 'linear-gradient(135deg, #221c08 0%, #15151a 100%)',
            borderRadius: '20px',
            border: '2px dashed #ffd700',
            padding: '20px',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.22)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ fontSize: '11px', color: '#ffd700', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                OFFICIAL IN-STORE COUPON CODE
              </div>
              <button
                onClick={() => {
                  setShowQrModal(true);
                  triggerGoldConfetti();
                }}
                className="spring-btn"
                style={{
                  background: 'rgba(255,215,0,0.18)',
                  border: '1.5px solid #ffd700',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  color: '#ffd700',
                  fontSize: '11.5px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <QrCode size={14} />
                <span>Show QR Pass</span>
              </button>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#0a0a0d',
              borderRadius: '14px',
              padding: '12px 16px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <span style={{ fontSize: '17px', fontWeight: '950', letterSpacing: '1px', color: '#ffffff' }}>
                {couponCode}
              </span>
              <button
                onClick={handleCopyCoupon}
                className="spring-btn"
                style={{
                  background: couponCopied ? '#22c55e' : 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '8px 16px',
                  fontSize: '12px',
                  fontWeight: '900',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <Copy size={13} />
                <span>{couponCopied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <p style={{ fontSize: '11.5px', color: '#888', marginTop: '8px' }}>
              Present this pass or coupon code to cashier at checkout to claim the discount.
            </p>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: DETAILS, STORE & ACTIONS ================= */}
        <div>
          {/* Rating, Reviews & Merchant verification */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid #22c55e',
              color: '#22c55e',
              borderRadius: '14px',
              padding: '4px 10px',
              fontWeight: '800',
              fontSize: '12px'
            }}>
              <ShieldCheck size={15} />
              <span>Verified Storefront Partner</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffd700' }}>
              <Star size={15} fill="#ffd700" />
              <span style={{ fontWeight: '900', color: '#fff', fontSize: '14px' }}>{offer.rating}</span>
              <span style={{ color: '#888', fontSize: '12px' }}>({offer.reviews} Reviews)</span>
            </div>
          </div>

          {/* Key Info Strip (Location & Validity) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            padding: '16px',
            background: '#151518',
            borderRadius: '18px',
            border: '1.5px solid rgba(255, 215, 0, 0.22)',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 215, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MapPin size={18} color="#ffd700" />
              </div>
              <div>
                <div style={{ fontSize: '10.5px', color: '#888', fontWeight: '800' }}>PROXIMITY</div>
                <div style={{ fontWeight: '800', color: '#fff', fontSize: '13.5px' }}>
                  {offer.distance} ({offer.location.split(',')[0]})
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={18} color="#22c55e" />
              </div>
              <div>
                <div style={{ fontSize: '10.5px', color: '#888', fontWeight: '800' }}>VALID UNTIL</div>
                <div style={{ fontWeight: '800', color: '#22c55e', fontSize: '13.5px' }}>
                  {offer.validTill}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '22px' }}>
            <button
              onClick={() => { window.location.href = `tel:${offer.phone}`; }}
              className="spring-btn"
              style={{
                flex: 2,
                background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                color: '#000000',
                fontWeight: '950',
                fontSize: '15px',
                border: 'none',
                borderRadius: '28px',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(244, 180, 0, 0.5)'
              }}
            >
              <Phone size={18} fill="#000" />
              <span>Call Store ({offer.phone})</span>
            </button>

            <button
              onClick={() => navigate('/map')}
              className="spring-btn"
              style={{
                flex: 1,
                background: '#1b1b22',
                border: '1.5px solid rgba(255, 215, 0, 0.35)',
                borderRadius: '28px',
                padding: '14px',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <Navigation size={16} color="#ffd700" />
              <span>Map Route</span>
            </button>
          </div>

          {/* About Offer Section */}
          <div style={{
            background: '#141418',
            padding: '18px',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>
              📝 About This In-Store Deal
            </h3>
            <p style={{ fontSize: '13px', color: '#a0a0ab', lineHeight: '1.6' }}>
              {offer.longDescription}
            </p>
          </div>

          {/* Terms & Conditions */}
          <div style={{
            background: '#131316',
            borderRadius: '18px',
            padding: '18px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{ fontSize: '13px', fontWeight: '900', color: '#ffd700', marginBottom: '10px' }}>
              Terms & Conditions:
            </div>
            {offer.terms.map((term, index) => (
              <div key={index} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#9e9ea7', marginBottom: '6px', lineHeight: '1.4' }}>
                <span style={{ color: '#ffd700', fontWeight: '900' }}>•</span>
                <span>{term}</span>
              </div>
            ))}
          </div>
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
            backdropFilter: 'blur(10px)',
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
              boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="laser-scanner" />
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

            <button
              onClick={() => setShowQrModal(false)}
              className="gold-glow-button"
              style={{
                width: '100%',
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
