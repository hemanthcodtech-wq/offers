import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import { MapPin, Navigation, Compass, Layers, Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MapPage() {
  const navigate = useNavigate();
  const { offers, selectedCity } = useApp();
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);

  return (
    <div style={{ position: 'relative', height: '100%', minHeight: 'calc(100vh - 70px)', paddingBottom: '90px' }}>
      <Header title={`Live Map (${selectedCity})`} showBack={false} showNotifications={true} />

      {/* Stylized Realistic Dark Mode Map Canvas */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        backgroundColor: '#0f141d',
        overflow: 'hidden'
      }}>
        {/* Street Map Grid Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(#1e293b 1.5px, transparent 1.5px),
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px, 40px 40px, 40px 40px'
        }} />

        {/* Vector Roads and Arteries */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}>
          {/* Main Highway */}
          <path d="M-50,120 C100,100 200,260 480,220" fill="none" stroke="#f59e0b" strokeWidth="8" />
          <path d="M-50,120 C100,100 200,260 480,220" fill="none" stroke="#ffd700" strokeWidth="2" strokeDasharray="6,6" />
          {/* Secondary Arteries */}
          <path d="M120,-20 L180,450" fill="none" stroke="#3b82f6" strokeWidth="6" />
          <path d="M20,380 Q220,180 420,80" fill="none" stroke="#64748b" strokeWidth="5" />
          <path d="M300,-10 C280,180 320,300 360,440" fill="none" stroke="#475569" strokeWidth="4" />
        </svg>

        {/* User Current Location Indicator (Blue pulse from screenshot) */}
        <div style={{
          position: 'absolute',
          top: '52%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 20
        }}>
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(37, 99, 235, 0.25)',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
          }} />
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            border: '3px solid #ffffff',
            boxShadow: '0 0 15px rgba(37, 99, 235, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Navigation size={18} fill="#ffffff" color="#ffffff" style={{ transform: 'rotate(45deg)' }} />
          </div>
          <span style={{
            fontSize: '10px',
            fontWeight: '800',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '2px 6px',
            borderRadius: '10px',
            marginTop: '3px',
            color: '#fff'
          }}>
            You are here
          </span>
        </div>

        {/* Dynamic Pins for Available Offers */}
        {offers.map((item, index) => {
          // Pre-set pin coordinates around current location
          const coords = [
            { top: '26%', left: '25%' },
            { top: '32%', left: '76%' },
            { top: '68%', left: '20%' },
            { top: '75%', left: '80%' }
          ][index % 4];

          const isSelected = selectedOffer.id === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedOffer(item)}
              style={{
                position: 'absolute',
                top: coords.top,
                left: coords.left,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: isSelected ? 30 : 15,
                transition: 'transform 0.2s'
              }}
            >
              <div style={{
                width: isSelected ? '46px' : '36px',
                height: isSelected ? '46px' : '36px',
                borderRadius: '50%',
                backgroundColor: isSelected ? '#ffd700' : '#ff2d55',
                color: isSelected ? '#000000' : '#ffffff',
                border: isSelected ? '3px solid #ffffff' : '2px solid #ffffff',
                boxShadow: isSelected ? '0 0 20px rgba(255, 215, 0, 0.9)' : '0 4px 12px rgba(255, 45, 85, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900',
                fontSize: isSelected ? '18px' : '15px'
              }}>
                %
              </div>
              <span style={{
                fontSize: '10px',
                fontWeight: '800',
                color: isSelected ? '#ffd700' : '#ffffff',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: '2px 6px',
                borderRadius: '8px',
                marginTop: '4px',
                whiteSpace: 'nowrap',
                border: isSelected ? '1px solid #ffd700' : 'none'
              }}>
                {item.discount} OFF
              </span>
            </div>
          );
        })}

        {/* Map Control Buttons (Compass, Relocate) */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 25
        }}>
          <button
            onClick={() => alert('Centering to current GPS position...')}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#1b1b20',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              color: '#ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
            }}
          >
            <Compass size={18} />
          </button>
        </div>
      </div>

      {/* Selected Offer Interactive Pop-up Drawer */}
      <div style={{ padding: '16px 18px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>
            Selected Merchant Deal
          </h3>
          <span style={{ fontSize: '12px', color: '#ffd700' }}>
            {selectedOffer.distance} away
          </span>
        </div>

        {/* Merchant Card */}
        <div style={{
          background: '#16161a',
          borderRadius: '18px',
          border: '1.5px solid #ffd700',
          padding: '14px',
          display: 'flex',
          gap: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.6)'
        }}>
          <img
            src={selectedOffer.bannerImage}
            alt={selectedOffer.title}
            style={{
              width: '85px',
              height: '85px',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff' }}>
                  {selectedOffer.title}
                </h4>
                <span style={{
                  backgroundColor: '#ffd700',
                  color: '#000',
                  fontWeight: '900',
                  fontSize: '11px',
                  padding: '2px 6px',
                  borderRadius: '10px'
                }}>
                  {selectedOffer.discount}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '2px' }}>
                {selectedOffer.description}
              </p>
              <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                📍 {selectedOffer.location}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button
                onClick={() => { window.location.href = `tel:${selectedOffer.phone}`; }}
                style={{
                  flex: 1,
                  background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '6px 0',
                  fontSize: '12px',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                <Phone size={12} fill="#000" />
                Call
              </button>

              <button
                onClick={() => navigate(`/offers/${selectedOffer.id}`)}
                style={{
                  flex: 1,
                  background: 'rgba(255, 215, 0, 0.1)',
                  color: '#ffd700',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '20px',
                  padding: '6px 0',
                  fontSize: '12px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                Details
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
