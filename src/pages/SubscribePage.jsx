import React, { useState } from 'react';
import Header from '../components/Header';
import { Crown, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Subscribe" showBack={true} showNotifications={false} />

      {/* Top Value Headline from Screenshot 5 */}
      <div style={{
        padding: '20px 20px 10px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '22px',
          fontWeight: '900',
          color: '#ffffff',
          marginBottom: '4px'
        }}>
          Enjoy Ad-Free Experience
        </h2>
        <p style={{ fontSize: '13px', color: '#ffd700', fontWeight: '700' }}>
          No Ads • No Distractions
        </p>

        {/* Big Golden Crown Visual from Screenshot 5 */}
        <div style={{
          width: '90px',
          height: '90px',
          margin: '16px auto 10px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffd700 0%, #b8860b 80%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.45)',
          border: '2px solid #ffffff'
        }}>
          <Crown size={52} color="#000000" fill="#000000" />
        </div>
      </div>

      <div style={{ padding: '0 18px' }}>
        {/* Most Popular Badge & Card: ₹9 / Month from Screenshot 5 */}
        <div
          onClick={() => setSelectedPlan('premium')}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #ffd700 0%, #f5a623 50%, #d48806 100%)',
            borderRadius: '20px',
            padding: '22px 20px',
            color: '#000000',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
            marginBottom: '14px',
            border: selectedPlan === 'premium' ? '3px solid #ffffff' : 'none'
          }}
        >
          {/* Most Popular Tag from Screenshot 5 */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#000000',
            color: '#ffd700',
            fontWeight: '900',
            fontSize: '11px',
            padding: '3px 14px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            ★ Most Popular
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '38px', fontWeight: '950', lineHeight: '1' }}>
                ₹9
              </div>
              <div style={{ fontSize: '14px', fontWeight: '800', marginTop: '2px' }}>
                . / Month
              </div>
              <div style={{ fontSize: '12px', fontWeight: '700', marginTop: '6px', opacity: 0.9 }}>
                Enjoy Seamlessly
              </div>
            </div>

            {/* Checkmark Selection Pill from Screenshot 5 */}
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#000000',
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle2 size={22} fill="#ffd700" color="#000000" />
            </div>
          </div>
        </div>

        {/* Free Plan with Ads Card from Screenshot 5 */}
        <div
          onClick={() => setSelectedPlan('free')}
          style={{
            background: '#151518',
            borderRadius: '18px',
            padding: '16px 20px',
            cursor: 'pointer',
            border: selectedPlan === 'free' ? '2px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '20px'
          }}
        >
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff' }}>
            Free Plan With Ads
          </div>
          <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
            View Offers & Deals with standard banner ads
          </div>
        </div>

        {/* What You Get Features Checklist from Screenshot 5 */}
        <div style={{
          background: '#131316',
          borderRadius: '18px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          padding: '16px 18px',
          marginBottom: '22px'
        }}>
          {[
            'No Ads (₹9 Plan Exclusive)',
            'All Offers Unlocked & Verified',
            'All Features (Direct Call, GPS, Maps)',
            'Premium Customer Experience'
          ].map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: i === 3 ? 0 : '12px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CheckCircle2 size={13} strokeWidth={3} />
              </div>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#ffffff' }}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Big Yellow Subscribe Now CTA Button from Screenshot 5 */}
        <button
          onClick={() => alert('Congratulations! You are subscribed to the ₹9/Month Ad-Free Plan!')}
          style={{
            width: '100%',
            background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
            color: '#000000',
            border: 'none',
            borderRadius: '25px',
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
          <Crown size={18} fill="#000000" color="#000000" />
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
