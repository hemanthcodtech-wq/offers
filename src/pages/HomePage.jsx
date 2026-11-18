import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { offers, selectedCity, searchQuery, setSearchQuery } = useApp();

  const filteredOffers = offers.filter(o =>
    o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Top Header with City Dropdown */}
      <Header showCityDropdown={true} />

      {/* Main Search Bar */}
      <div style={{ padding: '12px 18px 8px' }}>
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

      {/* Interactive Map Preview Widget from Screenshot 3 */}
      <div style={{ padding: '8px 18px 14px' }}>
        <div
          onClick={() => navigate('/map')}
          style={{
            position: 'relative',
            height: '145px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 215, 0, 0.4)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            cursor: 'pointer',
            background: '#1a1f2c'
          }}
        >
          {/* Stylized Simulated Map Grid */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            backgroundColor: '#121620'
          }} />

          {/* Map Roads / Curves Representation */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
            <path d="M-20,40 Q100,10 180,80 T380,40" fill="none" stroke="#60a5fa" strokeWidth="6" />
            <path d="M40,150 Q160,80 260,110 T450,20" fill="none" stroke="#ffd700" strokeWidth="4" />
          </svg>

          {/* Interactive Floating Location Pins */}
          <div style={{
            position: 'absolute',
            top: '25%',
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
            fontSize: '14px',
            boxShadow: '0 0 12px rgba(255, 45, 85, 0.8)'
          }}>
            %
          </div>

          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: '#fff',
            boxShadow: '0 0 16px rgba(37, 99, 235, 0.9)',
            border: '2px solid #ffffff'
          }}>
            <MapPin size={22} fill="#ffffff" color="#ffffff" />
          </div>

          <div style={{
            position: 'absolute',
            top: '30%',
            right: '25%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
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
            bottom: '22%',
            left: '15%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#ff2d55',
            color: '#fff',
            fontWeight: '900',
            fontSize: '12px',
            boxShadow: '0 0 10px rgba(255, 45, 85, 0.8)'
          }}>
            %
          </div>

          <div style={{
            position: 'absolute',
            bottom: '25%',
            right: '18%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#ff2d55',
            color: '#fff',
            fontWeight: '900',
            fontSize: '12px',
            boxShadow: '0 0 10px rgba(255, 45, 85, 0.8)'
          }}>
            %
          </div>

          {/* Map CTA Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            border: '1px solid rgba(255, 215, 0, 0.5)',
            borderRadius: '20px',
            padding: '4px 12px',
            color: '#ffd700',
            fontSize: '11px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <span>Explore Near Me</span>
            <ArrowRight size={12} />
          </div>
        </div>
      </div>

      {/* Quick Action Badges (Role Navigation Shortcuts) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        padding: '0 18px 16px'
      }}>
        <div
          onClick={() => navigate('/offers')}
          style={{
            background: 'linear-gradient(145deg, #1f1f23, #151518)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '14px',
            padding: '10px 8px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: '18px', marginBottom: '2px' }}>🎁</div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#fff' }}>Hot Deals</div>
          <div style={{ fontSize: '9px', color: '#ffd700' }}>Live verified</div>
        </div>

        <div
          onClick={() => navigate('/business')}
          style={{
            background: 'linear-gradient(145deg, #1f1f23, #151518)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '14px',
            padding: '10px 8px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: '18px', marginBottom: '2px' }}>🏪</div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#fff' }}>Business</div>
          <div style={{ fontSize: '9px', color: '#ffd700' }}>Post @ ₹499</div>
        </div>

        <div
          onClick={() => navigate('/franchise')}
          style={{
            background: 'linear-gradient(145deg, #1f1f23, #151518)',
            border: '1px solid rgba(255, 215, 0, 0.35)',
            borderRadius: '14px',
            padding: '10px 8px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(255, 215, 0, 0.12)'
          }}
        >
          <div style={{ fontSize: '18px', marginBottom: '2px' }}>🤝</div>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#ffd700' }}>Franchise</div>
          <div style={{ fontSize: '9px', color: '#22c55e' }}>Earn ₹1.25L+</div>
        </div>
      </div>

      {/* Subscription Banner (₹9 / Month Ad-free) */}
      <div style={{ padding: '0 18px 16px' }}>
        <div
          onClick={() => navigate('/subscribe')}
          style={{
            background: 'linear-gradient(90deg, #1a1608 0%, #2e240c 100%)',
            border: '1px solid #d4af37',
            borderRadius: '16px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>👑</span>
            <div>
              <div style={{ color: '#ffd700', fontWeight: '800', fontSize: '13px' }}>
                Subscribe @ ₹9 / Month
              </div>
              <div style={{ color: '#aaa', fontSize: '11px' }}>
                Enjoy Ad-Free Browsing & Exclusive Premium Deals
              </div>
            </div>
          </div>
          <span style={{
            background: '#ffd700',
            color: '#000',
            fontWeight: '800',
            fontSize: '11px',
            padding: '4px 10px',
            borderRadius: '12px'
          }}>
            Join
          </span>
        </div>
      </div>

      {/* Nearby Offers Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 18px 12px'
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '800',
          color: '#ffffff',
          letterSpacing: '0.2px'
        }}>
          Nearby Offers
        </h2>
        <button
          onClick={() => navigate('/offers')}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffd700',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          See All &gt;
        </button>
      </div>

      {/* Offers Feed */}
      <div style={{ padding: '0 18px' }}>
        {filteredOffers.length > 0 ? (
          filteredOffers.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#888'
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
  );
}
