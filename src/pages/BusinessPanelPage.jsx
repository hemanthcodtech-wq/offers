import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Store,
  Upload,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  BarChart3,
  Calendar,
  Eye,
  ArrowRight,
  ShieldCheck,
  PlusCircle,
  Clock,
  PhoneCall
} from 'lucide-react';

export default function BusinessPanelPage() {
  const navigate = useNavigate();
  const { offers } = useApp();

  // Find store's active deals
  const myLiveOffer = offers[0];

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Business Panel Header with Menu icon (showBack=false opens the slide-out menu) */}
      <Header
        title="Business Panel"
        showBack={false}
        showNotifications={false}
      />

      {/* Hero Store Showcase Header (Matching Screenshot 4) */}
      <div style={{ position: 'relative', height: '215px', overflow: 'hidden', background: '#0e0e12' }}>
        <img
          src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=85"
          alt="Business Store Front"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.85) contrast(1.05)'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8, 8, 10, 0.45) 0%, rgba(8, 8, 10, 0.15) 35%, rgba(12, 12, 14, 0.98) 100%)'
        }} />

        {/* Merchant Badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '18px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(10, 10, 14, 0.85)',
          backdropFilter: 'blur(12px)',
          padding: '6px 14px',
          borderRadius: '24px',
          border: '1.8px solid #ffd700',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.8)'
        }}>
          <Store size={15} color="#ffd700" />
          <span style={{ fontSize: '11px', fontWeight: '900', color: '#ffd700', textTransform: 'uppercase' }}>
            Verified Merchant Partner
          </span>
        </div>

        {/* Hero Title */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '18px',
          right: '18px'
        }}>
          <h2 style={{ fontSize: '26px', fontWeight: '950', color: '#ffffff', letterSpacing: '0.4px', lineHeight: '1.15' }}>
            Business Man Panel
          </h2>
          <p style={{ fontSize: '13px', color: '#ffd700', fontWeight: '800', marginTop: '3px' }}>
            Post Your Offer Once a Month to 50,000+ Local Buyers
          </p>
        </div>
      </div>

      <div style={{ padding: '16px 18px' }}>
        {/* Price Card from Screenshot 4: ₹499/- */}
        <div style={{
          background: 'linear-gradient(135deg, #ffd700 0%, #f5a623 50%, #d48806 100%)',
          borderRadius: '22px',
          padding: '20px 22px',
          color: '#000000',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(244, 180, 0, 0.4)',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <div style={{
            fontSize: '12px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            backgroundColor: '#000',
            color: '#ffd700',
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '12px',
            marginBottom: '8px'
          }}>
            Merchant Growth Pass
          </div>

          <div style={{ fontSize: '44px', fontWeight: '950', lineHeight: '1' }}>
            ₹499/-
          </div>

          <div style={{ fontSize: '15px', fontWeight: '900', marginTop: '4px' }}>
            Post Your Offer Once a Month
          </div>
          <p style={{ fontSize: '12px', fontWeight: '700', opacity: 0.9, marginTop: '4px' }}>
            Active across Hyderabad Near-Me Feeds, Maps & Category Search
          </p>
        </div>

        {/* Feature Checkmarks from Screenshot 4 */}
        <div style={{
          background: '#151518',
          border: '1.5px solid rgba(255, 215, 0, 0.28)',
          borderRadius: '20px',
          padding: '18px 20px',
          marginBottom: '22px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
        }}>
          {[
            { text: 'Upload Offer Image & Storefront Photo', desc: 'High-res visuals in nearby customer feeds' },
            { text: 'Edit Unlimited Times Anytime in Cycle', desc: 'Switch your discounts & products 24/7' },
            { text: 'Track Real-Time Views & Customer Leads', desc: 'Direct phone calls, directions & QR scans' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: i === 2 ? 0 : '16px' }}>
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff' }}>
                  {item.text}
                </div>
                <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}

          {/* Primary CTA: Post Your Offer from Screenshot 4 */}
          <button
            onClick={() => navigate('/business/post-offer')}
            style={{
              width: '100%',
              marginTop: '20px',
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000000',
              border: 'none',
              borderRadius: '28px',
              padding: '15px',
              fontSize: '16px',
              fontWeight: '950',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 6px 22px rgba(244, 180, 0, 0.5)'
            }}
          >
            <span>✏️</span>
            <span>Post Your Offer</span>
          </button>
        </div>

        {/* Live Active Deal Snapshot */}
        <h3 style={{ fontSize: '15px', fontWeight: '900', color: '#ffd700', marginBottom: '10px' }}>
          Your Currently Active Deal
        </h3>
        <div style={{
          background: '#151518',
          border: '1.5px solid rgba(255, 215, 0, 0.3)',
          borderRadius: '18px',
          padding: '14px',
          display: 'flex',
          gap: '12px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/offers/sri-sai-mobiles')}
        >
          <img
            src={myLiveOffer.bannerImage}
            alt={myLiveOffer.title}
            style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>{myLiveOffer.title}</h4>
              <span style={{ backgroundColor: '#ffd700', color: '#000', fontSize: '10px', fontWeight: '900', padding: '2px 7px', borderRadius: '8px' }}>
                {myLiveOffer.discount}
              </span>
            </div>
            <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '2px' }}>{myLiveOffer.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#22c55e', marginTop: '6px', fontWeight: '700' }}>
              <span>● Status: LIVE</span>
              <span>•</span>
              <span style={{ color: '#ffd700' }}>12,410 Views</span>
            </div>
          </div>
        </div>

        {/* Quick Hub Navigation Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div
            onClick={() => navigate('/business/analytics')}
            style={{
              background: '#151518',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              borderRadius: '16px',
              padding: '14px',
              cursor: 'pointer'
            }}
          >
            <BarChart3 size={20} color="#ffd700" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>Lead Analytics</div>
            <div style={{ fontSize: '11px', color: '#22c55e', marginTop: '2px' }}>482 Phone Calls &gt;</div>
          </div>

          <div
            onClick={() => navigate('/business/profile')}
            style={{
              background: '#151518',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              borderRadius: '16px',
              padding: '14px',
              cursor: 'pointer'
            }}
          >
            <Store size={20} color="#ffd700" style={{ marginBottom: '4px' }} />
            <div style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>Store Settings</div>
            <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>Manage Profile &gt;</div>
          </div>
        </div>

        {/* Grow Your Business with Franchise Link from Screenshot 4 */}
        <div
          onClick={() => navigate('/franchise')}
          style={{
            background: 'linear-gradient(135deg, #1c170a 0%, #2b220a 100%)',
            border: '1.5px solid #d4af37',
            borderRadius: '18px',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '26px' }}>🤝</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700' }}>
                Grow Your Business with Offers NOW
              </div>
              <div style={{ fontSize: '11px', color: '#a0a0a0', marginTop: '2px' }}>
                Explore Area Franchise Model & Earn ₹1.25L+ Monthly
              </div>
            </div>
          </div>
          <ArrowRight size={18} color="#ffd700" />
        </div>
      </div>
    </div>
  );
}
