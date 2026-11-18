import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Tag,
  Calendar,
  Store,
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function BusinessPostOfferPage() {
  const navigate = useNavigate();
  const { addBusinessOffer, selectedCity } = useApp();

  const [title, setTitle] = useState('');
  const [discount, setDiscount] = useState('50%');
  const [category, setCategory] = useState('Mobiles');
  const [headline, setHeadline] = useState('');
  const [details, setDetails] = useState('');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [validTill, setValidTill] = useState('31 Dec 2026');
  const [bannerPreview, setBannerPreview] = useState('https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !headline.trim()) {
      alert('Please fill in required fields');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newOffer = {
        id: `merchant-offer-${Date.now()}`,
        title: title,
        tag: 'Special Offer',
        badge: discount.includes('%') ? discount : `${discount}% OFF`,
        discount: discount.includes('%') ? discount : `${discount}%`,
        description: headline,
        longDescription: details || `Exclusive retail discount at ${title}. Present Offers NOW pass in-store.`,
        category: category,
        distance: '0.5 km',
        validTill: validTill,
        phone: phone,
        location: `${selectedCity} Central Market`,
        lat: 17.44,
        lng: 78.45,
        rating: 5.0,
        reviews: 1,
        bannerImage: bannerPreview,
        terms: ['Present Offers NOW pass before billing', 'Valid on in-store walk-in purchases']
      };

      addBusinessOffer(newOffer);
      setIsSubmitting(false);
      setSuccess(true);
    }, 700);
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Post Monthly Deal" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Pass Status Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #201a08 0%, #15130b 100%)',
          border: '1.5px solid #ffd700',
          borderRadius: '16px',
          padding: '14px 16px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '900', color: '#ffd700' }}>
              Merchant Pass Active (₹499/mo)
            </div>
            <div style={{ fontSize: '11px', color: '#a0a0a0', marginTop: '2px' }}>
              Includes Unlimited Live Edits & Real-Time Analytics
            </div>
          </div>
          <span style={{ fontSize: '24px' }}>🏪</span>
        </div>

        {success ? (
          <div style={{
            background: '#0d2818',
            border: '1.5px solid #22c55e',
            borderRadius: '18px',
            padding: '24px 20px',
            textAlign: 'center'
          }}>
            <CheckCircle2 size={46} color="#22c55e" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#ffffff' }}>
              Offer Published Live!
            </h3>
            <p style={{ fontSize: '13px', color: '#a7f3d0', marginTop: '6px', lineHeight: '1.5' }}>
              Your store deal is now visible to 50,000+ local customers in {selectedCity} on the Home feed and Map.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={() => navigate('/offers')}
                style={{
                  flex: 1,
                  background: '#ffd700',
                  color: '#000',
                  fontWeight: '800',
                  padding: '12px',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                View on Feed
              </button>
              <button
                onClick={() => navigate('/business/analytics')}
                style={{
                  flex: 1,
                  background: '#151518',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontWeight: '700',
                  padding: '12px',
                  borderRadius: '20px',
                  cursor: 'pointer'
                }}
              >
                Track Leads
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Store Name */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', fontWeight: '800', marginBottom: '5px' }}>
                Business / Store Name *
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Store size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Royal Mobiles & Tech Hub"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Discount Badge & Category */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Discount Tag
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Tag size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 50% or BOGO"
                    style={{ paddingLeft: '34px', fontSize: '12px' }}
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Category
                </label>
                <select
                  className="form-input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ paddingLeft: '14px', appearance: 'none' }}
                >
                  <option value="Mobiles">Mobiles & Tech</option>
                  <option value="Fashion">Fashion & Apparel</option>
                  <option value="Grocery">Grocery / Organic</option>
                  <option value="Dining">Dining & Cafe</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
            </div>

            {/* Offer Tagline / Headline */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                Headline / Offer Pitch *
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Upto 50% Off on All Smartphones & Accessories"
                style={{ paddingLeft: '14px' }}
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                required
              />
            </div>

            {/* Long Description */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                Offer Terms & Details
              </label>
              <textarea
                className="form-input"
                rows={3}
                placeholder="Describe your special discounts, exchange bonuses, and in-store redeem conditions..."
                style={{ paddingLeft: '14px', resize: 'none', height: '80px' }}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            {/* Direct Hotline Contact & Expiry */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Direct Phone *
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Phone size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 00000"
                    style={{ paddingLeft: '34px', fontSize: '12px' }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Valid Until
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Calendar size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="31 Dec 2026"
                    style={{ paddingLeft: '34px', fontSize: '12px' }}
                    value={validTill}
                    onChange={(e) => setValidTill(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Image Preview Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '6px' }}>
                Storefront Banner Image
              </label>
              <div style={{
                position: 'relative',
                height: '110px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1.5px solid rgba(255, 215, 0, 0.3)'
              }}>
                <img
                  src={bannerPreview}
                  alt="Banner Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const alternates = [
                      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
                      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
                    ];
                    const next = alternates[(alternates.indexOf(bannerPreview) + 1) % alternates.length];
                    setBannerPreview(next);
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#ffd700',
                    border: '1px solid #ffd700',
                    borderRadius: '14px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: '800',
                    cursor: 'pointer'
                  }}
                >
                  Change Photo
                </button>
              </div>
            </div>

            {/* Post Your Offer Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                marginTop: '10px',
                background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                color: '#000000',
                border: 'none',
                borderRadius: '28px',
                padding: '15px',
                fontSize: '15px',
                fontWeight: '950',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(244, 180, 0, 0.45)'
              }}
            >
              <span>{isSubmitting ? 'Publishing Live...' : 'Publish Monthly Deal Live'}</span>
              <ArrowRight size={17} strokeWidth={2.5} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
