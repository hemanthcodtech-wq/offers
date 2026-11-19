import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Sparkles, ArrowRight, ShieldCheck, Zap, SlidersHorizontal } from 'lucide-react';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { offers, selectedCity, searchQuery, setSearchQuery } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobiles', 'Fashion', 'Grocery', 'Dining'];

  const filteredOffers = offers.filter(o => {
    const matchesCategory = selectedCategory === 'All' || o.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Top Header with City Dropdown (Mobile only) */}
      <Header showCityDropdown={true} />

      {/* Main Search Bar (Mobile only, desktop search lives in top navbar) */}
      <div className="mobile-only-search" style={{ padding: '12px 18px 8px' }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Search
            size={18}
            color="#ffd700"
            style={{ position: 'absolute', left: '16px' }}
          />
          <input
            type="text"
            placeholder="Search offers, stores, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#1b1b1e',
              border: '1.5px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '25px',
              padding: '12px 16px 12px 46px',
              color: '#ffffff',
              fontSize: '14px',
              outline: 'none',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '14px',
                background: 'transparent',
                border: 'none',
                color: '#888',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Responsive Layout Wrapper:
          Mobile: Vertical flow
          Desktop: Split-screen (Left side Map + Portals; Right side Offers Feed) */}
      <div className="desktop-split-container">
        
        {/* ================= LEFT SIDE: MAP & PORTAL HIGHLIGHTS ================= */}
        <div className="desktop-sticky-left">
          
          {/* Interactive Map Radar Preview Card */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="live-beacon" />
                <span style={{ fontSize: '13px', fontWeight: '900', color: '#ffffff' }}>
                  Live Radar Map ({selectedCity})
                </span>
              </div>
              <span
                onClick={() => navigate('/map')}
                style={{ fontSize: '11px', color: '#ffd700', fontWeight: '800', cursor: 'pointer' }}
              >
                Expand &gt;
              </span>
            </div>

            <div
              onClick={() => navigate('/map')}
              className="spring-card"
              style={{
                position: 'relative',
                height: '200px',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '2px solid rgba(255, 215, 0, 0.45)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
                cursor: 'pointer',
                background: '#121620'
              }}
            >
              {/* Map Grid Background */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
                backgroundColor: '#10141d'
              }} />

              {/* Roads Vector Simulation */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}>
                <path d="M-20,60 Q120,20 220,110 T460,50" fill="none" stroke="#60a5fa" strokeWidth="6" />
                <path d="M30,190 Q180,90 280,130 T480,30" fill="none" stroke="#ffd700" strokeWidth="4" />
              </svg>

              {/* Store Discount Pins */}
              <div style={{
                position: 'absolute',
                top: '28%',
                left: '22%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#ff2d55',
                color: '#fff',
                fontWeight: '900',
                fontSize: '13px',
                boxShadow: '0 0 12px rgba(255, 45, 85, 0.8)'
              }}>
                %
              </div>

              <div style={{
                position: 'absolute',
                top: '46%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#2563eb',
                color: '#fff',
                boxShadow: '0 0 18px rgba(37, 99, 235, 0.95)',
                border: '3px solid #ffffff'
              }}>
                <MapPin size={22} fill="#ffffff" color="#ffffff" />
              </div>

              <div style={{
                position: 'absolute',
                top: '32%',
                right: '22%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#ff2d55',
                color: '#fff',
                fontWeight: '900',
                fontSize: '12px',
                boxShadow: '0 0 12px rgba(255, 45, 85, 0.8)'
              }}>
                %
              </div>

              {/* Radar CTA Pill */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                border: '1px solid #ffd700',
                borderRadius: '20px',
                padding: '5px 14px',
                color: '#ffd700',
                fontSize: '11px',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <span>Open Full Radar</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </div>

          {/* Quick Portal Switcher Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px'
          }}>
            <div
              onClick={() => navigate('/offers')}
              className="spring-card"
              style={{
                background: 'linear-gradient(145deg, #1b1b20, #131316)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                borderRadius: '16px',
                padding: '12px 8px',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '3px' }}>🎁</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>Hot Deals</div>
              <div style={{ fontSize: '10px', color: '#ffd700' }}>Verified</div>
            </div>

            <div
              onClick={() => navigate('/business')}
              className="spring-card"
              style={{
                background: 'linear-gradient(145deg, #1b1b20, #131316)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                borderRadius: '16px',
                padding: '12px 8px',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '3px' }}>🏪</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>Business</div>
              <div style={{ fontSize: '10px', color: '#ffd700' }}>Post @ ₹499</div>
            </div>

            <div
              onClick={() => navigate('/franchise')}
              className="spring-card"
              style={{
                background: 'linear-gradient(145deg, #1b1b20, #131316)',
                border: '1.5px solid rgba(255, 215, 0, 0.4)',
                borderRadius: '16px',
                padding: '12px 8px',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(255, 215, 0, 0.15)'
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '3px' }}>🤝</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#ffd700' }}>Franchise</div>
              <div style={{ fontSize: '10px', color: '#22c55e' }}>Earn 30% cut</div>
            </div>
          </div>

          {/* Luxury Subscription Pass Card */}
          <div
            onClick={() => navigate('/subscribe')}
            className="spring-card"
            style={{
              background: 'linear-gradient(135deg, #221c08 0%, #15151a 100%)',
              border: '1.5px solid #d4af37',
              borderRadius: '18px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255, 215, 0, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '26px' }}>👑</span>
              <div>
                <div style={{ color: '#ffd700', fontWeight: '900', fontSize: '13.5px' }}>
                  Subscribe @ ₹9 / Month
                </div>
                <div style={{ color: '#aaa', fontSize: '11px', marginTop: '1px' }}>
                  Ad-free browsing & exclusive in-store perks
                </div>
              </div>
            </div>
            <span style={{
              background: 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)',
              color: '#000',
              fontWeight: '950',
              fontSize: '11px',
              padding: '6px 14px',
              borderRadius: '16px'
            }}>
              Join VIP
            </span>
          </div>

        </div>

        {/* ================= RIGHT SIDE: OFFERS & DEALS DIRECTORY ================= */}
        <div>
          {/* Header & Category Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '950',
                color: '#ffffff',
                letterSpacing: '0.2px'
              }}>
                Nearby In-Store Offers
              </h2>
              <span style={{
                fontSize: '11px',
                color: '#ffd700',
                background: 'rgba(255, 215, 0, 0.15)',
                padding: '2px 8px',
                borderRadius: '10px',
                fontWeight: '800'
              }}>
                {filteredOffers.length} Live
              </span>
            </div>

            <button
              onClick={() => navigate('/offers')}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffd700',
                fontSize: '13px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '2px'
              }}
            >
              See All &gt;
            </button>
          </div>

          {/* Category Chips Bar */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)' : '#17171c',
                  color: selectedCategory === cat ? '#000000' : '#a0a0ab',
                  border: selectedCategory === cat ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.18s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Offers Multi-Column Grid */}
          <div className="desktop-feed-grid">
            {filteredOffers.length > 0 ? (
              filteredOffers.map((offer, idx) => (
                <OfferCard key={offer.id} offer={offer} index={idx} />
              ))
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '50px 20px',
                color: '#888',
                gridColumn: '1 / -1'
              }}>
                <p>No offers found for "{searchQuery}".</p>
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    marginTop: '10px',
                    color: '#ffd700',
                    background: 'none',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
