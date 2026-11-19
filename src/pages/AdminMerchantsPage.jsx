import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Store,
  Search,
  ShieldCheck,
  Ban,
  CheckCircle2,
  Eye,
  PhoneCall,
  MapPin,
  Tag,
  PlusCircle,
  X,
  Sparkles
} from 'lucide-react';

export default function AdminMerchantsPage() {
  const { merchants, toggleMerchantStatus, addMerchant, showToast } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // Add Shop Form State
  const [businessName, setBusinessName] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [category, setCategory] = useState('Mobiles');
  const [discount, setDiscount] = useState('40%');
  const [headline, setHeadline] = useState('');

  const filtered = merchants.filter(m => {
    const matchesQuery = m.businessName.toLowerCase().includes(query.toLowerCase()) ||
                         m.owner.toLowerCase().includes(query.toLowerCase()) ||
                         m.city.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || m.status === filter;
    return matchesQuery && matchesFilter;
  });

  const handleCreateShop = (e) => {
    e.preventDefault();
    if (!businessName.trim() || !owner.trim() || !phone.trim()) {
      showToast('Please fill shop name, owner name, and phone', 'error');
      return;
    }

    addMerchant({
      businessName,
      owner,
      phone,
      email: email || `${owner.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      city,
      category,
      discount: discount.includes('%') ? discount : `${discount}%`,
      headline: headline || `Grand Discount Offer at ${businessName}`,
      plan: '₹499/mo Merchant Pass'
    });

    showToast(`Store "${businessName}" successfully onboarded into platform!`);
    setShowAddModal(false);

    // Reset Form
    setBusinessName('');
    setOwner('');
    setPhone('');
    setEmail('');
    setHeadline('');
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header
        title="Manage Shopkeepers"
        showBack={false}
        showNotifications={false}
        rightAction={
          <button
            onClick={() => setShowAddModal(true)}
            className="spring-btn"
            style={{
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000000',
              border: 'none',
              borderRadius: '20px',
              padding: '6px 12px',
              fontSize: '11px',
              fontWeight: '900',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(244, 180, 0, 0.4)'
            }}
          >
            <PlusCircle size={14} />
            + Add Shop
          </button>
        }
      />

      <div style={{ padding: '16px 18px' }}>
        {/* Banner with Add Shop Trigger */}
        <div
          style={{
            background: 'linear-gradient(135deg, #241c08 0%, #151518 100%)',
            border: '1.5px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '16px',
            padding: '14px 16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>Shopkeeper Directory</div>
            <div style={{ fontSize: '11px', color: '#ffd700' }}>{merchants.length} Partnered retail storefronts live</div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="spring-btn"
            style={{
              background: '#ffd700',
              color: '#000',
              border: 'none',
              borderRadius: '16px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '900',
              cursor: 'pointer'
            }}
          >
            + Onboard Shop
          </button>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search shops by name, owner, city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto' }}>
          {['All', 'Verified', 'Pending Review', 'Suspended'].map(st => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              style={{
                backgroundColor: filter === st ? '#ffd700' : '#151518',
                color: filter === st ? '#000' : '#aaa',
                border: filter === st ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Shop List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filtered.map((shop, idx) => {
            const isVerified = shop.status === 'Verified';
            return (
              <div
                key={shop.id}
                className="spring-card cascade-item"
                style={{
                  background: '#151518',
                  borderRadius: '18px',
                  border: isVerified ? '1px solid rgba(255, 215, 0, 0.25)' : '1px solid #ef4444',
                  padding: '16px',
                  animationDelay: `${Math.min(idx * 50, 300)}ms`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffd700'
                    }}>
                      <Store size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>
                        {shop.businessName}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                        Owner: <strong style={{ color: '#fff' }}>{shop.owner}</strong> • 📍 {shop.city}
                      </p>
                      <p style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px', fontWeight: '700' }}>
                        🏷️ Category: {shop.category} • Plan: {shop.plan}
                      </p>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '800',
                    backgroundColor: isVerified ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                    color: isVerified ? '#22c55e' : '#f59e0b',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    border: `1px solid ${isVerified ? '#22c55e' : '#f59e0b'}`
                  }}>
                    {shop.status}
                  </span>
                </div>

                {/* Stats & Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '11px',
                  color: '#aaa'
                }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span>👀 <strong style={{ color: '#fff' }}>{shop.totalViews}</strong> views</span>
                    <span>📞 <strong style={{ color: '#22c55e' }}>{shop.callsReceived}</strong> calls</span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => toggleMerchantStatus(shop.id)}
                      className="spring-btn"
                      style={{
                        background: isVerified ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
                        color: isVerified ? '#ef4444' : '#22c55e',
                        border: isVerified ? '1px solid #ef4444' : '1px solid #22c55e',
                        borderRadius: '12px',
                        padding: '5px 12px',
                        fontSize: '11px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      {isVerified ? 'Suspend Shop' : 'Approve & Verify'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add New Shopkeeper Modal */}
      {showAddModal && (
        <div
          onClick={() => setShowAddModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
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
              background: '#16161a',
              border: '1.5px solid #ffd700',
              borderRadius: '24px',
              padding: '24px 20px',
              width: '100%',
              maxWidth: '420px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 0 35px rgba(255, 215, 0, 0.35)',
              animation: 'cascadeIn 0.3s ease-out'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Store size={22} color="#ffd700" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#fff' }}>Onboard New Shop</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateShop} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Store / Shop Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Royal Electronics & Mobiles"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  style={{ marginTop: '5px' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Owner Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rajesh Kumar"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  style={{ marginTop: '5px' }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Phone / Mobile *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ marginTop: '5px' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Category</label>
                  <select
                    className="form-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ marginTop: '5px' }}
                  >
                    <option value="Mobiles">Mobiles & Tech</option>
                    <option value="Fashion">Fashion & Clothing</option>
                    <option value="Grocery">Supermart & Grocery</option>
                    <option value="Dining">Restaurant & Cafe</option>
                    <option value="Jewelry">Gold & Jewelry</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>City / Location</label>
                  <select
                    className="form-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ marginTop: '5px' }}
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Launch Discount</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 40% OFF"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    style={{ marginTop: '5px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Inauguration Deal Headline</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Flat 40% Off on all smartphone accessories"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  style={{ marginTop: '5px' }}
                />
              </div>

              <div style={{
                background: 'rgba(255, 215, 0, 0.08)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                borderRadius: '12px',
                padding: '10px 14px',
                fontSize: '11px',
                color: '#ffd700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Sparkles size={16} />
                <span>Onboarding this shop automatically activates their Merchant Pass and publishes their deal to customer feeds.</span>
              </div>

              <button
                type="submit"
                className="spring-btn"
                style={{
                  marginTop: '10px',
                  width: '100%',
                  background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                  color: '#000',
                  fontWeight: '900',
                  padding: '12px',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Confirm & Onboard Store
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
