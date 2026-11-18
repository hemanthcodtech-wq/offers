import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLogo from '../components/AppLogo';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      onClick={() => navigate('/login')}
      style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px 24px 40px',
        background: 'radial-gradient(circle at 50% 25%, #2a2007 0%, #0a0a0c 80%)',
        position: 'relative',
        cursor: 'pointer'
      }}
    >
      <div className="gold-burst" />

      {/* Top / Center Brand Emblem with original logo.png */}
      <div style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Real Logo Component with golden radial aura */}
        <AppLogo size={110} showLiveBadge={true} />

        {/* Megaphone and Offers NOW typography */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          <span style={{ fontSize: '32px' }}>📢</span>
          <h1 style={{
            fontSize: '38px',
            fontWeight: '950',
            fontStyle: 'italic',
            letterSpacing: '0.5px',
            color: '#ffffff'
          }}>
            Offers <span style={{ color: '#ffd700' }}>NOW</span>
          </h1>
        </div>

        <p style={{
          fontSize: '15px',
          fontWeight: '800',
          letterSpacing: '1px',
          color: '#ffd700',
          textTransform: 'uppercase',
          marginTop: '6px'
        }}>
          Connect • Buy • Save
        </p>
      </div>

      {/* Golden Highway Perspective Visual from Screenshot 1 */}
      <div style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '25px 0'
      }}>
        {/* Golden skyline SVG silhouette */}
        <svg viewBox="0 0 320 80" style={{ width: '100%', height: '70px', opacity: 0.85 }}>
          <path d="M0,80 L10,50 L20,50 L20,35 L30,35 L30,60 L40,60 L45,20 L55,20 L55,65 L65,65 L70,30 L80,30 L80,80
                   L90,80 L95,15 L105,15 L110,5 L115,5 L120,80 L130,80 L135,40 L145,40 L150,80 L160,80 L165,25
                   L175,25 L180,80 L190,80 L200,10 L210,10 L215,80 L225,80 L230,35 L240,35 L245,80 L260,80
                   L270,18 L280,18 L285,80 L300,80 L310,40 L320,40 L320,80 Z"
                fill="#ffd700" />
        </svg>

        {/* Perspective Roadway converging into horizon */}
        <div style={{
          width: '100%',
          height: '90px',
          background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.45) 0%, transparent 100%)',
          clipPath: 'polygon(35% 0%, 65% 0%, 95% 100%, 5% 100%)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '100%',
            background: 'repeating-linear-gradient(to bottom, #ffffff 0, #ffffff 10px, transparent 10px, transparent 20px)'
          }} />
        </div>
      </div>

      {/* Loading Ring & Caption */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        {/* Animated Golden Ring */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '3.5px solid rgba(255, 215, 0, 0.25)',
          borderTopColor: '#ffd700',
          borderRightColor: '#ffd700',
          animation: 'spin 1s linear infinite'
        }} />

        <span style={{
          fontSize: '14px',
          fontWeight: '700',
          letterSpacing: '0.8px',
          color: '#ffffff'
        }}>
          Loading...
        </span>

        <span style={{ fontSize: '11px', color: '#888' }}>
          Tap anywhere to enter
        </span>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
