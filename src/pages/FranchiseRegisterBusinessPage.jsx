import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Store,
  MapPin,
  Phone,
  Mail,
  User,
  CheckCircle2,
  Tag,
  DollarSign,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function FranchiseRegisterBusinessPage() {
  const navigate = useNavigate();
  const { addBusinessOffer, selectedCity } = useApp();

  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Mobiles');
  const [address, setAddress] = useState('');
  const [discountHeadline, setDiscountHeadline] = useState('Flat 40% Off on all purchases');
  const [planSelected, setPlanSelected] = useState('monthly_499'); // 'monthly_499' | 'quarterly_1299' | 'annual_4999'
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shopName.trim() || !ownerName.trim() || !phone.trim()) {
      alert('Please fill all mandatory fields');
      return;
    }

    // Auto-create initial merchant deal into area feed
    const newOffer = {
      id: `partner-${Date.now()}`,
      title: shopName,
      tag: 'New Store Launch',
      badge: '40% OFF',
      discount: '40%',
      description: discountHeadline,
      longDescription: `Official partnered store in ${selectedCity}. Special inauguration offers verified by Area Franchise.`,
      category: category,
      distance: '0.6 km',
      validTill: '31 Dec 2026',
      phone: phone,
      location: address || `${selectedCity} Central Zone`,
      lat: 17.44,
      lng: 78.45,
      rating: 5.0,
      reviews: 1,
      bannerImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
      terms: ['Exclusive Offers NOW in-store verification pass required']
    };

    addBusinessOffer(newOffer);
    setSubmitted(true);
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Register Business" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Top Commission Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #1b160a 0%, #29200a 100%)',
          border: '1.5px solid #ffd700',
          borderRadius: '16px',
          padding: '14px 16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700' }}>
              Franchise Commission: 30% Direct Cut
            </div>
            <div style={{ fontSize: '11px', color: '#c0c0c0', marginTop: '2px' }}>
              Earn instant ₹150 payout on ₹499 monthly store onboarding
            </div>
          </div>
          <span style={{ fontSize: '24px' }}>💰</span>
        </div>

        {submitted ? (
          <div style={{
            background: '#0d2818',
            border: '1.5px solid #22c55e',
            borderRadius: '18px',
            padding: '24px 20px',
            textAlign: 'center'
          }}>
            <CheckCircle2 size={46} color="#22c55e" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#ffffff' }}>
              Merchant Onboarded Successfully!
            </h3>
            <p style={{ fontSize: '13px', color: '#a7f3d0', marginTop: '6px', lineHeight: '1.5' }}>
              {shopName} has been registered under your franchise territory. A verification SMS and Merchant Portal link were sent to {phone}.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={() => navigate('/franchise/manage-offers')}
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
                View Area Offers
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShopName('');
                  setOwnerName('');
                  setPhone('');
                }}
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
                + Register Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Store Name */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', fontWeight: '700', marginBottom: '5px' }}>
                Store / Shop Name *
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Store size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Trends Footwear & Bags"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Owner Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Owner Name *
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <User size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="K. Rajesh"
                    style={{ paddingLeft: '34px', fontSize: '12px' }}
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Mobile Number *
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Phone size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    style={{ paddingLeft: '34px', fontSize: '12px' }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category & Address */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
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
                  <option value="Fashion">Fashion & Clothing</option>
                  <option value="Grocery">Supermarket / Grocery</option>
                  <option value="Dining">Restaurant / Cafe</option>
                  <option value="Electronics">Home Appliances</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                  Area Landmark
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <MapPin size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Road No 12"
                    style={{ paddingLeft: '34px', fontSize: '12px' }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Launch Deal Offer Tagline */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#aaa', marginBottom: '5px' }}>
                Launch Deal Headline (Visible to Customers)
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Tag size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Grand Inauguration: Flat 40% Off on everything"
                  value={discountHeadline}
                  onChange={(e) => setDiscountHeadline(e.target.value)}
                />
              </div>
            </div>

            {/* Package Plan Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', fontWeight: '700', marginBottom: '8px' }}>
                Select Merchant Package
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { id: 'monthly_499', label: '1 Month', price: '₹499', cut: 'Your Cut: ₹150' },
                  { id: 'quarterly_1299', label: '3 Months', price: '₹1,299', cut: 'Your Cut: ₹390' },
                  { id: 'annual_4999', label: '1 Year VIP', price: '₹4,999', cut: 'Your Cut: ₹1,500' }
                ].map((plan) => {
                  const isSelected = planSelected === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setPlanSelected(plan.id)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '12px',
                        border: isSelected ? '1.5px solid #ffd700' : '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: isSelected ? 'rgba(255, 215, 0, 0.15)' : '#141418',
                        textAlign: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ fontSize: '11px', color: isSelected ? '#ffd700' : '#aaa' }}>{plan.label}</div>
                      <div style={{ fontSize: '15px', fontWeight: '900', color: '#fff', margin: '2px 0' }}>{plan.price}</div>
                      <div style={{ fontSize: '9px', color: '#22c55e', fontWeight: '700' }}>{plan.cut}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Submit Onboarding Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                marginTop: '10px',
                background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                color: '#000000',
                border: 'none',
                borderRadius: '26px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: '900',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(244, 180, 0, 0.45)'
              }}
            >
              <span>Verify & Onboard Merchant</span>
              <ArrowRight size={17} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
