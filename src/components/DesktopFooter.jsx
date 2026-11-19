import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLogo from './AppLogo';

export default function DesktopFooter() {
  const navigate = useNavigate();

  return (
    <footer className="desktop-footer">
      <div className="desktop-footer-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '36px' }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <AppLogo size={36} />
              <span style={{ fontSize: '20px', fontWeight: '950', fontStyle: 'italic', color: '#ffffff' }}>
                Offers <span className="shimmer-gold">NOW</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#8e8e93', lineHeight: '1.6', maxWidth: '300px' }}>
              India's premier hyperlocal savings network connecting smart consumers with verified neighborhood retailers, dining spots, and premium services.
            </p>
            <div style={{ marginTop: '14px', fontSize: '12px', color: '#ffd700', fontWeight: '700' }}>
              Operating across Hyderabad, Bengaluru, Mumbai, Delhi NCR & Chennai
            </div>
          </div>

          {/* Consumers Col */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '900', color: '#fff', marginBottom: '14px' }}>
              For Consumers
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#a0a0a8' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>Nearby Offers</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/map')}>Live Radar Map</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/subscribe')}>VIP Pass @ ₹9/mo</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/profile/saved-offers')}>Saved Coupons</span>
            </div>
          </div>

          {/* Merchants & Partners */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '14px' }}>
              Business Partners
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#a0a0a8' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/business')}>Store Growth Pass (₹499)</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/business/post-offer')}>Post Monthly Deal</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/business/analytics')}>In-Store Analytics</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/franchise')}>Area Franchise Network</span>
            </div>
          </div>

          {/* Legal & Portals */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '900', color: '#fff', marginBottom: '14px' }}>
              Ecosystem
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#a0a0a8' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/admin')}>Admin Command Hub</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/profile/help')}>24/7 Hotline Support</span>
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/profile/about')}>About Zewotech</span>
              <span style={{ color: '#22c55e', fontWeight: '700' }}>● All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          marginTop: '36px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#666'
        }}>
          <div>© {new Date().getFullYear()} Offers NOW. Built by Zewotech Pvt. Ltd. All rights reserved.</div>
          <div style={{ color: '#ffd700', fontWeight: '800' }}>Exclusive Black & Gold Luxury Edition</div>
        </div>
      </div>
    </footer>
  );
}
