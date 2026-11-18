import React, { useState } from 'react';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import { CATEGORIES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function OffersPage() {
  const { offers } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = offers.filter(offer => {
    const matchesCategory = selectedCategory === 'All' || offer.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesQuery = offer.title.toLowerCase().includes(query.toLowerCase()) ||
                         offer.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Offers" showNotifications={true} />

      {/* Filter Category Chips (Pills from Screenshot 7) */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        padding: '12px 18px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor: isActive ? '#ffd700' : '#1c1c20',
                color: isActive ? '#000000' : '#d0d0d0',
                fontWeight: isActive ? '800' : '600',
                fontSize: '13px',
                border: isActive ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '8px 18px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isActive ? '0 2px 10px rgba(255, 215, 0, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search within Offers */}
      <div style={{ padding: '0 18px 14px' }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Search size={16} color="#8e8e93" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            placeholder={`Search ${selectedCategory !== 'All' ? selectedCategory : 'all'} deals...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#161619',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              borderRadius: '20px',
              padding: '10px 14px 10px 40px',
              color: '#ffffff',
              fontSize: '13px',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Active Count & Sorting indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 18px 10px',
        color: '#8e8e93',
        fontSize: '12px'
      }}>
        <span>Showing <strong style={{ color: '#ffd700' }}>{filtered.length}</strong> live discounts</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <SlidersHorizontal size={13} color="#ffd700" /> Sort: Nearest
        </span>
      </div>

      {/* Feed list */}
      <div style={{ padding: '0 18px' }}>
        {filtered.length > 0 ? (
          filtered.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '50px 20px',
            color: '#888'
          }}>
            <p>No offers found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
