import React from 'react';
import logoImg from '../assets/logo.png';

export default function AppLogo({
  size = 56,
  showTagline = false,
  className = '',
  style = {}
}) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        userSelect: 'none',
        ...style
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Soft golden aura behind emblem */}
        <div style={{
          position: 'absolute',
          inset: '-8px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.35) 0%, rgba(212, 175, 55, 0.08) 60%, transparent 80%)',
          filter: 'blur(10px)',
          pointerEvents: 'none'
        }} />

        {/* The Exact Clean Logo without any live badge overlay */}
        <img
          src={logoImg}
          alt="Offers NOW Logo"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.85)) drop-shadow(0 2px 8px rgba(255, 215, 0, 0.35))',
            display: 'block',
            position: 'relative',
            zIndex: 1
          }}
        />
      </div>

      {showTagline && (
        <span style={{
          fontSize: '11px',
          fontWeight: '800',
          letterSpacing: '1px',
          color: '#ffd700',
          textTransform: 'uppercase',
          marginTop: '6px'
        }}>
          Connect • Buy • Save
        </span>
      )}
    </div>
  );
}
