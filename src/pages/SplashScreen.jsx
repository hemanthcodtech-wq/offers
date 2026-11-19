import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLogo from '../components/AppLogo';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate('/home');
          return 100;
        }
        const jump = Math.floor(Math.random() * 16) + 8;
        return Math.min(100, prev + jump);
      });
    }, 190);

    return () => clearInterval(interval);
  }, [navigate]);

  const particles = [
    { id: 1, left: '15%', top: '25%', size: 4, delay: '0s', duration: '3.2s' },
    { id: 2, left: '82%', top: '20%', size: 6, delay: '0.4s', duration: '2.8s' },
    { id: 3, left: '22%', top: '55%', size: 5, delay: '0.9s', duration: '3.5s' },
    { id: 4, left: '78%', top: '60%', size: 4, delay: '1.2s', duration: '3.1s' },
    { id: 5, left: '48%', top: '15%', size: 5, delay: '0.6s', duration: '2.6s' },
    { id: 6, left: '88%', top: '42%', size: 3, delay: '1.5s', duration: '3.8s' },
    { id: 7, left: '12%', top: '72%', size: 4, delay: '0.2s', duration: '3.0s' }
  ];

  return (
    <div
      onClick={() => navigate('/home')}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px 24px 40px',
        background: 'radial-gradient(ellipse at 50% 32%, #221804 0%, #0a090b 60%, #040405 100%)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      {/* Background Animated Golden Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '22%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.32) 0%, rgba(255, 170, 0, 0.12) 45%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          animation: 'pulseAura 3s ease-in-out infinite alternate'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '260px',
          height: '140px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating Golden Sparks / Light Dust */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fff 0%, #ffd700 80%)',
            boxShadow: '0 0 10px #ffd700, 0 0 20px rgba(255, 215, 0, 0.6)',
            animation: `floatParticle ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}

      {/* Top Branding Section: Glowing 3D Logo & Typography */}
      <div
        style={{
          marginTop: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Animated Rings around Logo */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              width: '168px',
              height: '168px',
              borderRadius: '50%',
              border: '1.5px dashed rgba(255, 215, 0, 0.35)',
              animation: 'spinRing 18s linear infinite'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '188px',
              height: '188px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 215, 0, 0.18)',
              animation: 'pulseRing 2.4s ease-in-out infinite'
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              filter: 'drop-shadow(0 14px 28px rgba(255, 215, 0, 0.38))',
              animation: 'floatLogo 3s ease-in-out infinite alternate'
            }}
          >
            <AppLogo size={135} />
          </div>
        </div>

        {/* Brand Name Typography */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '22px' }}>
          <span style={{ fontSize: '28px', filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))' }}>📢</span>
          <h1
            style={{
              fontSize: '42px',
              fontWeight: '950',
              fontStyle: 'italic',
              letterSpacing: '0.6px',
              color: '#ffffff',
              lineHeight: '1.05',
              textShadow: '0 4px 18px rgba(0,0,0,0.8), 0 0 25px rgba(255,215,0,0.35)'
            }}
          >
            Offers <span style={{ color: '#ffd700', textShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}>NOW</span>
          </h1>
        </div>

        {/* Luxury Subtitle Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '10px',
            padding: '5px 16px',
            borderRadius: '20px',
            background: 'rgba(255, 215, 0, 0.08)',
            border: '1px solid rgba(255, 215, 0, 0.28)',
            backdropFilter: 'blur(6px)'
          }}
        >
          <Sparkles size={13} color="#ffd700" />
          <span
            style={{
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '2px',
              color: '#ffd700',
              textTransform: 'uppercase'
            }}
          >
            Connect • Buy • Save
          </span>
          <Sparkles size={13} color="#ffd700" />
        </div>
      </div>

      {/* Middle Animated Feature Capsules */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          width: '100%',
          maxWidth: '340px',
          zIndex: 2,
          margin: '20px 0'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '10px 18px',
            borderRadius: '16px',
            background: 'linear-gradient(90deg, rgba(255, 215, 0, 0.12) 0%, rgba(20, 20, 24, 0.7) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.22)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
            animation: 'fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ffd700, #ff9900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(255, 215, 0, 0.5)'
              }}
            >
              <Zap size={18} color="#000" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>Hyper-Local Deals</div>
              <div style={{ fontSize: '10px', color: '#ffd700' }}>Verified neighborhood discounts</div>
            </div>
          </div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '900',
              padding: '3px 8px',
              borderRadius: '8px',
              background: '#22c55e',
              color: '#000'
            }}
          >
            ACTIVE
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.65)',
            letterSpacing: '0.4px'
          }}
        >
          <ShieldCheck size={14} color="#ffd700" />
          <span>Exclusive 1 Deal / Month Quality Assurance</span>
        </div>
      </div>

      {/* Bottom Loading Indicator with Progress Bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          width: '100%',
          maxWidth: '260px',
          marginBottom: '16px',
          zIndex: 2
        }}
      >
        <div
          style={{
            width: '100%',
            height: '5px',
            borderRadius: '99px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 215, 0, 0.18)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              borderRadius: '99px',
              background: 'linear-gradient(90deg, #d4af37, #ffd700, #fff8cc)',
              boxShadow: '0 0 12px #ffd700',
              transition: 'width 0.22s ease-out'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.8px',
              color: '#ffd700'
            }}
          >
            Starting Engine...
          </span>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#ffffff', opacity: 0.8 }}>
            {progress}%
          </span>
        </div>

        <span style={{ fontSize: '11px', color: '#666', marginTop: '-4px' }}>
          Tap anywhere to skip
        </span>
      </div>

      <style>{`
        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
        @keyframes pulseAura {
          0% { transform: translateX(-50%) scale(0.9); opacity: 0.6; }
          100% { transform: translateX(-50%) scale(1.15); opacity: 0.95; }
        }
        @keyframes floatLogo {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes floatParticle {
          0% { transform: translateY(0px) scale(0.85); opacity: 0.3; }
          100% { transform: translateY(-22px) scale(1.2); opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
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
