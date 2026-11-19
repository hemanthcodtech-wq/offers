import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, QrCode, Sparkles, CheckCircle2 } from 'lucide-react';
import AppLogo from './AppLogo';
import { useApp } from '../context/AppContext';

export default function DownloadAppModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useApp();

  useEffect(() => {
    // Show prompt automatically after 4 seconds if not closed this session
    const dismissed = sessionStorage.getItem('offers_app_modal_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem('offers_app_modal_dismissed', 'true');
  };

  const handleDownload = (platform) => {
    showToast(`Downloading Offers NOW app for ${platform}... 🚀`);
    handleDismiss();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleDismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="spring-card"
        style={{
          background: 'linear-gradient(135deg, #1b170c 0%, #121217 60%, #0d0d10 100%)',
          borderRadius: '28px',
          border: '2px solid #ffd700',
          padding: '32px 28px',
          maxWidth: '540px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 215, 0, 0.35)',
          textAlign: 'center'
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="spring-btn"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            color: '#ffd700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={16} />
        </button>

        {/* Brand App Icon & Glow */}
        <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 16px' }}>
          <div style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '24px',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, transparent 70%)',
            filter: 'blur(10px)'
          }} />
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            backgroundColor: '#0c0c0e',
            border: '2px solid #ffd700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)'
          }}>
            <AppLogo size={58} />
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '4px' }}>
          <span className="live-beacon" />
          <span style={{ fontSize: '11px', color: '#ffd700', fontWeight: '900', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
            GET THE FULL EXPERIENCE
          </span>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '950', color: '#ffffff', letterSpacing: '0.3px', lineHeight: '1.2' }}>
          Download the <span className="shimmer-gold">Offers NOW</span> App
        </h2>

        <p style={{ fontSize: '13px', color: '#a0a0ab', marginTop: '6px', lineHeight: '1.5', maxWidth: '420px', margin: '6px auto 20px' }}>
          Get instant flash notifications when you walk near store deals, redeem offline QR passes with 1 tap, and save up to ₹15,000 every month!
        </p>

        {/* Feature Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '16px',
          padding: '12px 10px',
          border: '1px solid rgba(255, 215, 0, 0.15)',
          marginBottom: '22px'
        }}>
          <div>
            <div style={{ fontSize: '18px', marginBottom: '2px' }}>📍</div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#fff' }}>Near Me GPS</div>
            <div style={{ fontSize: '9px', color: '#888' }}>Live radar alerts</div>
          </div>
          <div>
            <div style={{ fontSize: '18px', marginBottom: '2px' }}>⚡</div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#fff' }}>Instant QR</div>
            <div style={{ fontSize: '9px', color: '#ffd700' }}>1-Tap counter scan</div>
          </div>
          <div>
            <div style={{ fontSize: '18px', marginBottom: '2px' }}>👑</div>
            <div style={{ fontSize: '11px', fontWeight: '800', color: '#fff' }}>VIP Club</div>
            <div style={{ fontSize: '9px', color: '#22c55e' }}>50%+ extra off</div>
          </div>
        </div>

        {/* Download Buttons: Google Play & Apple App Store */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
          <button
            onClick={() => handleDownload('Android (Google Play)')}
            className="spring-btn"
            style={{
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000000',
              fontWeight: '950',
              border: 'none',
              borderRadius: '22px',
              padding: '12px 16px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(244, 180, 0, 0.5)'
            }}
          >
            <Download size={16} />
            <span>Google Play</span>
          </button>

          <button
            onClick={() => handleDownload('iOS (Apple App Store)')}
            className="spring-btn"
            style={{
              background: '#1b1b22',
              color: '#ffffff',
              fontWeight: '800',
              border: '1.5px solid rgba(255, 215, 0, 0.4)',
              borderRadius: '22px',
              padding: '12px 16px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <Smartphone size={16} color="#ffd700" />
            <span>App Store</span>
          </button>
        </div>

        {/* Small dismiss link */}
        <button
          onClick={handleDismiss}
          style={{
            background: 'none',
            border: 'none',
            color: '#888',
            fontSize: '11.5px',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Continue browsing website
        </button>
      </div>
    </div>
  );
}
