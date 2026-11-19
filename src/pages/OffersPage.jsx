import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { useApp } from '../context/AppContext';
import {
  Search,
  SlidersHorizontal,
  Flame,
  Clock,
  Percent,
  Sparkles,
  MapPin,
  Tag,
  Store,
  ChevronDown,
  Navigation,
  CheckCircle2,
  X
} from 'lucide-react';

export default function OffersPage() {
  const navigate = useNavigate();
  const { offers, selectedCity, showToast } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'discount' | 'distance' | 'expiring'
  const [filterDiscount, setFilterDiscount] = useState('all'); // 'all' | '40plus' | '50plus'

  const categories = [
    { label: 'All Deals', value: 'All', icon: Sparkles },
    { label: 'Mobiles & Tech', value: 'Mobiles', icon: Tag },
    { label: 'Fashion & Apparel', value: 'Fashion', icon: Tag },
    { label: 'Grocery & Fresh', value: 'Grocery', icon: Store },
    { label: 'Dining & Cafes', value: 'Dining', icon: Flame }
  ];

  // Filter and sort offers
  const filtered = offers
    .filter((offer) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        offer.category?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesQuery =
        offer.title.toLowerCase().includes(query.toLowerCase()) ||
        offer.description.toLowerCase().includes(query.toLowerCase()) ||
        offer.location.toLowerCase().includes(query.toLowerCase());

      const discountNum = parseInt(offer.discount) || 0;
      const matchesDiscount =
        filterDiscount === 'all'
          ? true
          : filterDiscount === '50plus'
          ? discountNum >= 50
          : discountNum >= 40;

      return matchesCategory && matchesQuery && matchesDiscount;
    })
    .sort((a, b) => {
      if (sortBy === 'discount') {
        return (parseInt(b.discount) || 0) - (parseInt(a.discount) || 0);
      }
      if (sortBy === 'distance') {
        return parseFloat(a.distance) - parseFloat(b.distance);
      }
      return 0; // default popular
    });

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Mobile Top Header */}
      <Header title={`Hot Deals (${selectedCity})`} showNotifications={true} />

      {/* Hero Showcase Banner for Desktop & Mobile */}
      <div style={{
        background: 'linear-gradient(135deg, #241c08 0%, #121217 60%, #0d0d10 100%)',
        borderBottom: '1.5px solid rgba(255, 215, 0, 0.28)',
        padding: '24px 20px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Golden Radial Back-glow */}
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '10%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.18) 0%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="live-beacon" />
                <span style={{ fontSize: '11px', color: '#ffd700', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                  Verified In-Store Passes • {selectedCity}
                </span>
              </div>
              <h1 style={{
                fontSize: '26px',
                fontWeight: '950',
                color: '#ffffff',
                letterSpacing: '0.3px',
                lineHeight: '1.15'
              }}>
                Exclusive Neighborhood <span className="shimmer-gold">Discounts</span>
              </h1>
              <p style={{ fontSize: '13px', color: '#a0a0ab', marginTop: '6px', maxWidth: '580px', lineHeight: '1.4' }}>
                Show your coupon pass at billing or tap Call Now to reserve. Zero booking fees or hidden charges.
              </p>
            </div>

            {/* Quick Filter Pills (Top Discount Presets) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setFilterDiscount(filterDiscount === '50plus' ? 'all' : '50plus')}
                style={{
                  background: filterDiscount === '50plus' ? '#ffd700' : 'rgba(255, 215, 0, 0.1)',
                  color: filterDiscount === '50plus' ? '#000000' : '#ffd700',
                  border: '1.5px solid #ffd700',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: '900',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  boxShadow: filterDiscount === '50plus' ? '0 4px 14px rgba(255, 215, 0, 0.4)' : 'none'
                }}
              >
                🔥 50%+ OFF Only
              </button>

              <button
                onClick={() => navigate('/map')}
                style={{
                  background: 'rgba(37, 99, 235, 0.15)',
                  color: '#60a5fa',
                  border: '1.5px solid #3b82f6',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <Navigation size={13} />
                Radar Map View
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '16px 20px 0' }}>
        {/* Search, Categories, and Sort Toolbar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px'
        }}>
          {/* Category Chips Bar */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px',
            scrollbarWidth: 'none'
          }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className="spring-btn"
                  style={{
                    backgroundColor: isActive ? '#ffd700' : '#16161b',
                    color: isActive ? '#000000' : '#c0c0ca',
                    fontWeight: isActive ? '900' : '700',
                    fontSize: '12.5px',
                    border: isActive ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '22px',
                    padding: '7px 16px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.18s',
                    boxShadow: isActive ? '0 4px 14px rgba(255, 215, 0, 0.35)' : 'none'
                  }}
                >
                  <Icon size={13} color={isActive ? '#000' : '#ffd700'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Field & Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 300px', maxWidth: '480px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={15} color="#888" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder={`Search ${selectedCategory !== 'All' ? selectedCategory : 'all'} deals...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#16161b',
                  border: '1.5px solid rgba(255, 215, 0, 0.25)',
                  borderRadius: '22px',
                  padding: '9px 36px 9px 38px',
                  color: '#ffffff',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#888',
                    cursor: 'pointer'
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Picker */}
            <div style={{ position: 'relative' }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  backgroundColor: '#16161b',
                  border: '1.5px solid rgba(255, 215, 0, 0.28)',
                  borderRadius: '22px',
                  padding: '9px 14px',
                  color: '#ffd700',
                  fontSize: '12px',
                  fontWeight: '800',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="popular">⚡ Popular First</option>
                <option value="discount">🔥 Highest Discount</option>
                <option value="distance">📍 Nearest Distance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Live Filter Metric Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          color: '#8e8e93',
          fontSize: '12.5px'
        }}>
          <div>
            Showing <strong style={{ color: '#ffd700', fontWeight: '900' }}>{filtered.length}</strong> verified offers in {selectedCity}
          </div>
          <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: '700' }}>
            ● Live Redemptions Available
          </span>
        </div>

        {/* Multi-Column Grid */}
        <div className="desktop-feed-grid">
          {filtered.length > 0 ? (
            filtered.map((offer, idx) => (
              <OfferCard key={offer.id} offer={offer} index={idx} />
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#888',
              gridColumn: '1 / -1',
              background: '#121216',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <p style={{ fontSize: '15px', color: '#fff', fontWeight: '800' }}>
                No offers found matching your filters.
              </p>
              <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                Try resetting search terms or switching discount filters.
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('All');
                  setFilterDiscount('all');
                }}
                className="gold-glow-button"
                style={{
                  marginTop: '16px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
