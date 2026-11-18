import React from 'react';
import Header from '../components/Header';
import AppLogo from '../components/AppLogo';
import { ShieldCheck, Heart, Award, Globe } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="About Us" showBack={true} showNotifications={false} />

      <div style={{ padding: '20px 18px', textAlign: 'center' }}>
        <AppLogo size={90} showLiveBadge={true} />

        <h2 style={{ fontSize: '24px', fontWeight: '950', color: '#fff', marginTop: '14px' }}>
          Offers <span style={{ color: '#ffd700' }}>NOW</span>
        </h2>
        <p style={{ fontSize: '13px', color: '#ffd700', fontWeight: '800', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
          Connect • Buy • Save
        </p>

        <p style={{ fontSize: '13px', color: '#a0a0a0', lineHeight: '1.6', marginTop: '14px', textAlign: 'left', background: '#151518', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,215,0,0.2)' }}>
          Offers NOW is India's hyper-local deals ecosystem bridging consumers with neighborhood retail stores, boutiques, supermarkets, and restaurants. By integrating high-converting digital storefronts with an Area Franchise network, we empower local business commerce with live footfall.
        </p>

        {/* Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px', textAlign: 'left' }}>
          <div style={{ background: '#151518', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <Award size={22} color="#ffd700" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>Verified Deals</div>
            <div style={{ fontSize: '11px', color: '#888' }}>100% genuine local in-store offers</div>
          </div>

          <div style={{ background: '#151518', padding: '14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <Globe size={22} color="#ffd700" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>Area Franchises</div>
            <div style={{ fontSize: '11px', color: '#888' }}>Empowering local city entrepreneurs</div>
          </div>
        </div>

        <div style={{ marginTop: '24px', color: '#666', fontSize: '11px' }}>
          Version 2.4.0 (Build 2026.11) • All Rights Reserved
        </div>
      </div>
    </div>
  );
}
