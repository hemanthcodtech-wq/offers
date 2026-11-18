import React, { useState, useEffect } from 'react';
import AppLogo from './AppLogo';

export default function SplashScreenOverlay({ onFinished, duration = 2600 }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out slightly before completion
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration - 400);

    const endTimer = setTimeout(() => {
      onFinished();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [duration, onFinished]);

  return (
    <div
      onClick={() => onFinished()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '60px 24px 40px',
        background: 'radial-gradient(circle at 50% 28%, #2d2208 0%, #08080a 75%)',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.4s ease-out',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      {/* Golden radial background flare */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.28) 0%, rgba(212, 175, 55, 0.05) 55%, transparent 75%)',
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }}
      />

      {/* Top Branding Section: Clean Logo & Typography */}
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        {/* Brand Logo from src/assets/logo.png */}
        <AppLogo size={130} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '18px' }}>
          <span style={{ fontSize: '32px' }}>📢</span>
          <h1
            style={{
              fontSize: '40px',
              fontWeight: '950',
              fontStyle: 'italic',
              letterSpacing: '0.5px',
              color: '#ffffff',
              lineHeight: '1.1'
            }}
          >
            Offers <span style={{ color: '#ffd700' }}>NOW</span>
          </h1>
        </div>

        <p
          style={{
            fontSize: '15px',
            fontWeight: '800',
            letterSpacing: '1.2px',
            color: '#ffd700',
            textTransform: 'uppercase',
            marginTop: '8px'
          }}
        >
          Connect • Buy • Save
        </p>
      </div>

      {/* Center Golden Highway & Skyline Illustration (from Screenshot 1) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px 0',
          zIndex: 2
        }}
      >
        {/* Golden city buildings silhouette */}
        <svg viewBox="0 0 340 70" style={{ width: '100%', height: '65px', opacity: 0.9 }}>
          <path
            d="M0,70 L10,45 L20,45 L20,30 L30,30 L30,55 L40,55 L45,15 L55,15 L55,60 L65,60 L70,25 L80,25 L80,70
               L90,70 L95,12 L105,12 L110,4 L115,4 L120,70 L130,70 L135,35 L145,35 L150,70 L160,70 L165,20
               L175,20 L180,70 L190,70 L200,8 L210,8 L215,70 L225,70 L230,30 L240,30 L245,70 L260,70
               L270,15 L280,15 L285,70 L300,70 L310,35 L320,35 L340,70 Z"
            fill="#ffd700"
          />
        </svg>

        {/* Perspective Road converging into the golden skyline */}
        <div
          style={{
            width: '100%',
            height: '95px',
            background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.5) 0%, transparent 100%)',
            clipPath: 'polygon(35% 0%, 65% 0%, 96% 100%, 4% 100%)',
            position: 'relative'
          }}
        >
          {/* Animated dashed road lane line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '3.5px',
              height: '100%',
              background: 'repeating-linear-gradient(to bottom, #ffffff 0, #ffffff 10px, transparent 10px, transparent 22px)'
            }}
          />
        </div>
      </div>

      {/* Bottom Loading Indicator */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
          zIndex: 2
        }}
      >
        {/* Animated Golden Ring (Screenshot 1 matching) */}
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '3.5px solid rgba(255, 215, 0, 0.25)',
            borderTopColor: '#ffd700',
            borderRightColor: '#ffd700',
            animation: 'spinRing 0.9s linear infinite'
          }}
        />

        <span
          style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0.8px',
            color: '#ffffff'
          }}
        >
          Loading...
        </span>

        <span style={{ fontSize: '11px', color: '#888' }}>
          Tap anywhere to skip
        </span>
      </div>

      <style>{`
        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
