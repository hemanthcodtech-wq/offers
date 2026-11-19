import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import { Crown, CheckCircle2, ShieldCheck, Zap, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SubscribePage() {
  const navigate = useNavigate();
  const { showToast } = useApp();
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly VIP Ad-Free Pass',
      price: '₹9',
      period: '/ month',
      popular: true,
      desc: 'Cancel anytime. Instant digital activation across all stores.',
      perks: [
        '100% Ad-Free Experience across the entire app',
        'Exclusive 50% Extra Discounts on select flagship stores',
        'Early 2-hour priority reservation on Flash Sales',
        'Personalized local notifications for deals near you'
      ]
    },
    {
      id: 'annual',
      name: 'Annual VIP Gold Membership',
      price: '₹89',
      period: '/ year (Save 20%)',
      popular: false,
      desc: 'Billed annually. Full 365-day access to all VIP merchant savings.',
      perks: [
        'All Monthly VIP perks included',
        'Free ₹100 Welcome In-Store Voucher upon signup',
        'Zero convenience fee on partner event passes',
        'Direct VIP WhatsApp Hotline Support'
      ]
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="VIP Subscription" showBack={true} showNotifications={false} />

      <div className="desktop-page-container" style={{ maxWidth: '960px' }}>
        {/* Breadcrumb Back */}
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
            padding: '4px 0',
            marginBottom: '14px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        {/* Hero Visual Banner */}
        <div style={{
          textAlign: 'center',
          padding: '24px 20px',
          background: 'linear-gradient(135deg, #241d08 0%, #15151a 100%)',
          borderRadius: '24px',
          border: '1.5px solid #ffd700',
          marginBottom: '28px',
          boxShadow: '0 10px 30px rgba(255, 215, 0, 0.25)',
          position: 'relative'
        }}>
          {/* Big Golden Crown */}
          <div style={{
            width: '84px',
            height: '84px',
            margin: '0 auto 12px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffd700 0%, #b8860b 80%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 25px rgba(255, 215, 0, 0.5)',
            border: '2px solid #ffffff'
          }}>
            <Crown size={48} color="#000000" fill="#000000" />
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '950', color: '#ffffff' }}>
            Enjoy 100% Ad-Free <span className="shimmer-gold">Shopping</span>
          </h2>
          <p style={{ fontSize: '13px', color: '#ffd700', fontWeight: '800', marginTop: '4px' }}>
            Zero Distractions • Instant Pass Access • Guaranteed Savings
          </p>
        </div>

        {/* Pricing Cards Grid (Side-by-side on desktop) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}>
          {plans.map((p) => {
            const isSelected = selectedPlan === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPlan(p.id)}
                className="spring-card"
                style={{
                  background: isSelected ? 'linear-gradient(135deg, #221c08 0%, #15151a 100%)' : '#141418',
                  border: isSelected ? '2px solid #ffd700' : '1.5px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '22px',
                  padding: '24px 20px',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: isSelected ? '0 12px 30px rgba(255, 215, 0, 0.25)' : 'none'
                }}
              >
                {p.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)',
                    color: '#000',
                    fontSize: '10.5px',
                    fontWeight: '950',
                    padding: '3px 12px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(255, 215, 0, 0.5)'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#fff' }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                      {p.desc}
                    </p>
                  </div>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: isSelected ? '2px solid #ffd700' : '2px solid #666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isSelected ? '#ffd700' : 'transparent',
                    flexShrink: 0
                  }}>
                    {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#000' }} />}
                  </div>
                </div>

                <div style={{ margin: '18px 0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '36px', fontWeight: '950', color: '#ffd700', lineHeight: '1' }}>
                      {p.price}
                    </span>
                    <span style={{ fontSize: '13px', color: '#aaa', fontWeight: '700' }}>
                      {p.period}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {p.perks.map((perk, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#ccc' }}>
                      <CheckCircle2 size={16} color="#ffd700" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscribe Action Button */}
        <button
          onClick={() => showToast(`VIP Pass (${selectedPlan === 'monthly' ? '₹9/Month' : '₹89/Year'}) activated! Enjoy ad-free deals.`)}
          className="gold-glow-button"
          style={{
            width: '100%',
            maxWidth: '480px',
            margin: '0 auto',
            display: 'block',
            borderRadius: '28px',
            padding: '16px',
            fontSize: '16px',
            fontWeight: '950',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          Activate VIP Pass Now
        </button>
      </div>
    </div>
  );
}
