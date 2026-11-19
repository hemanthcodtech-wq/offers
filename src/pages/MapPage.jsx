import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Navigation,
  Compass,
  Phone,
  ArrowRight,
  Filter,
  Layers,
  LocateFixed,
  Route,
  Store,
  Sparkles,
  Search,
  ExternalLink,
  Flame,
  CheckCircle2,
  Share2,
  Clock,
  SlidersHorizontal,
  MapPin
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';

// City centroid map dictionary
const CITY_CENTERS = {
  Hyderabad: [17.4375, 78.4482],
  Bengaluru: [12.9716, 77.5946],
  Mumbai: [19.0760, 72.8777],
  'Delhi NCR': [28.6139, 77.2090],
  Chennai: [13.0827, 80.2707]
};

// Map Recenter Helper Component
function RecenterOnCoords({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords && coords.length === 2) {
      map.flyTo(coords, 14, { duration: 1.2 });
    }
  }, [coords, map]);
  return null;
}

export default function MapPage() {
  const navigate = useNavigate();
  const { offers, selectedCity, showToast } = useApp();

  // User location state (defaults to city center if GPS not granted)
  const defaultCenter = CITY_CENTERS[selectedCity] || [17.4375, 78.4482];
  const [userCoords, setUserCoords] = useState(defaultCenter);
  const [isLocating, setIsLocating] = useState(false);
  const [selectedRadius, setSelectedRadius] = useState(3000); // 3km default
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedOffer, setSelectedOffer] = useState(offers[0] || null);
  const [searchFilter, setSearchFilter] = useState('');

  // Sync center when user changes city from header
  useEffect(() => {
    if (CITY_CENTERS[selectedCity]) {
      setUserCoords(CITY_CENTERS[selectedCity]);
    }
  }, [selectedCity]);

  // Handle GPS location click
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      showToast('Geolocation is not supported by your browser', 'error');
      return;
    }
    setIsLocating(true);
    showToast('Locating your current GPS coordinates...', 'info');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserCoords([latitude, longitude]);
        setIsLocating(false);
        showToast('Map centered to your GPS location! 📍');
      },
      (err) => {
        setIsLocating(false);
        showToast('Using city center (Enable GPS in browser settings for live radar)', 'info');
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  // Filter offers based on category & search
  const filteredOffers = offers.filter((o) => {
    const matchesCategory =
      activeCategory === 'All' || o.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      o.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      o.location.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Custom User Location Pin Icon (pulsing blue radar)
  const userPinIcon = L.divIcon({
    className: 'custom-user-marker',
    html: `
      <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; inset: -10px; border-radius: 50%; background: rgba(59, 130, 246, 0.45); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
        <div style="width: 24px; height: 24px; border-radius: 50%; background: #2563eb; border: 3px solid #ffffff; box-shadow: 0 0 16px rgba(37,99,235,0.95); display: flex; align-items: center; justify-content: center;">
          <div style="width: 7px; height: 7px; border-radius: 50%; background: #ffffff;"></div>
        </div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });

  // Generator for Luxury Store Marker Icons
  const createStoreIcon = (offer, isSelected) => {
    return L.divIcon({
      className: `store-marker-${offer.id}`,
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: transform 0.2s;">
          <div style="
            width: ${isSelected ? '46px' : '36px'};
            height: ${isSelected ? '46px' : '36px'};
            border-radius: 50%;
            background: ${isSelected ? 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)' : '#ff2d55'};
            color: ${isSelected ? '#000000' : '#ffffff'};
            border: ${isSelected ? '3px solid #ffffff' : '2px solid #ffffff'};
            box-shadow: ${isSelected ? '0 0 22px rgba(255, 215, 0, 0.95)' : '0 4px 12px rgba(255, 45, 85, 0.75)'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: ${isSelected ? '16px' : '13px'};
          ">
            %
          </div>
          <div style="
            background: rgba(10, 10, 14, 0.92);
            color: ${isSelected ? '#ffd700' : '#ffffff'};
            border: ${isSelected ? '1.5px solid #ffd700' : '1px solid rgba(255,255,255,0.25)'};
            padding: 2px 7px;
            border-radius: 8px;
            font-size: 10px;
            font-weight: 800;
            margin-top: 3px;
            white-space: nowrap;
            box-shadow: 0 4px 10px rgba(0,0,0,0.7);
          ">
            ${offer.discount}
          </div>
        </div>
      `,
      iconSize: [46, 60],
      iconAnchor: [23, 52]
    });
  };

  return (
    <div style={{ position: 'relative', height: '100%', minHeight: 'calc(100vh - 70px)', paddingBottom: '90px' }}>
      {/* Mobile Header */}
      <Header title={`Live Radar (${selectedCity})`} showBack={false} showNotifications={true} />

      {/* Top Interactive Radar Control Bar */}
      <div style={{
        background: '#121217',
        borderBottom: '1.5px solid rgba(255, 215, 0, 0.28)',
        padding: '12px 20px',
        position: 'sticky',
        top: '60px',
        zIndex: 400
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {/* Radius selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="live-beacon" />
              <span style={{ fontSize: '11.5px', color: '#ffd700', fontWeight: '900', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                RADAR RADIUS:
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[
                { label: '500m', value: 500 },
                { label: '1 km', value: 1000 },
                { label: '3 km', value: 3000 },
                { label: '5 km', value: 5000 }
              ].map((rad) => (
                <button
                  key={rad.value}
                  onClick={() => setSelectedRadius(rad.value)}
                  style={{
                    background: selectedRadius === rad.value ? 'linear-gradient(135deg, #ffd700 0%, #f5a623 100%)' : '#1c1c22',
                    color: selectedRadius === rad.value ? '#000000' : '#ffffff',
                    border: selectedRadius === rad.value ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  {rad.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Chips Bar */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
            {['All', 'Mobiles', 'Fashion', 'Grocery', 'Dining'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#ffd700' : '#18181e',
                  color: activeCategory === cat ? '#000000' : '#a0a0ab',
                  border: activeCategory === cat ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '4px 12px',
                  fontSize: '11px',
                  fontWeight: '800',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dual-View Radar Showcase (Split on Desktop, Seamless View on Mobile) */}
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="mobile-map-layout desktop-map-grid">
          {/* ================= MAP RADAR CANVAS ================= */}
          <div
            className="mobile-map-canvas-container desktop-map-canvas-container"
            style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 12px 35px rgba(0,0,0,0.85)'
            }}
          >
            <MapContainer
              center={userCoords}
              zoom={14}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%' }}
            >
              {/* Smooth recenter helper */}
              <RecenterOnCoords coords={userCoords} />

              {/* CartoDB Voyager Tiles */}
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />

              {/* Radius Scanning Radar Wave Circle */}
              <Circle
                center={userCoords}
                radius={selectedRadius}
                pathOptions={{
                  color: '#ffd700',
                  fillColor: '#ffd700',
                  fillOpacity: 0.12,
                  weight: 1.5,
                  dashArray: '4, 4'
                }}
              />

              {/* User Location Marker */}
              <Marker position={userCoords} icon={userPinIcon}>
                <Popup>
                  <div style={{ color: '#000', fontWeight: '800', fontSize: '12px' }}>
                    📍 Your Live GPS Location Radar
                  </div>
                </Popup>
              </Marker>

              {/* Offer Store Pins */}
              {filteredOffers.map((offer) => {
                const isSelected = selectedOffer?.id === offer.id;
                const pos = [offer.lat || (userCoords[0] + 0.005), offer.lng || (userCoords[1] + 0.005)];

                return (
                  <Marker
                    key={offer.id}
                    position={pos}
                    icon={createStoreIcon(offer, isSelected)}
                    eventHandlers={{
                      click: () => {
                        setSelectedOffer(offer);
                      }
                    }}
                  >
                    <Popup>
                      <div style={{ color: '#000', minWidth: '130px' }}>
                        <div style={{ fontWeight: '900', fontSize: '13px' }}>{offer.title}</div>
                        <div style={{ color: '#d97706', fontWeight: '800', fontSize: '11px' }}>{offer.discount} IN-STORE PASS</div>
                        <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>📍 {offer.location}</div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>

            {/* GPS Relocate Floating Action Button */}
            <button
              onClick={handleGetLocation}
              title="Locate Me (GPS)"
              className="spring-btn"
              style={{
                position: 'absolute',
                bottom: '18px',
                right: '18px',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#1b1b22',
                border: '2px solid #ffd700',
                color: '#ffd700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(0,0,0,0.9), 0 0 12px rgba(255, 215, 0, 0.45)',
                zIndex: 500
              }}
            >
              <LocateFixed size={22} className={isLocating ? 'bell-sway' : ''} />
            </button>
          </div>

          {/* ================= STORE SELECTION & RADAR LISTING ================= */}
          <div className="mobile-radar-drawer" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Selected Store Target Showcase */}
            {selectedOffer && (
              <div
                className="spring-card metallic-card"
                style={{
                  background: 'linear-gradient(135deg, #1b160a 0%, #16161b 100%)',
                  borderRadius: '22px',
                  border: '2px solid #ffd700',
                  padding: '18px',
                  boxShadow: '0 10px 30px rgba(255, 215, 0, 0.25)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="live-beacon" />
                    <span style={{ fontSize: '11px', color: '#ffd700', fontWeight: '900', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                      SELECTED STORE ON RADAR
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#ffd700', fontWeight: '800' }}>
                    ⚡ {selectedOffer.distance} from center
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <img
                    src={selectedOffer.bannerImage}
                    alt={selectedOffer.title}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h3 style={{ fontSize: '17px', fontWeight: '950', color: '#fff' }}>
                          {selectedOffer.title}
                        </h3>
                        <span style={{
                          backgroundColor: '#ffd700',
                          color: '#000',
                          fontWeight: '950',
                          fontSize: '11.5px',
                          padding: '3px 9px',
                          borderRadius: '12px'
                        }}>
                          {selectedOffer.discount}
                        </span>
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#b0b0b8', marginTop: '4px', lineHeight: '1.35' }}>
                        {selectedOffer.description}
                      </p>
                      <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                        📍 {selectedOffer.location}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedOffer.location)}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: 'none',
                          background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                          color: '#000',
                          borderRadius: '20px',
                          padding: '8px 0',
                          fontSize: '12px',
                          fontWeight: '900',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        <Route size={14} fill="#000" />
                        Navigate
                      </a>

                      <button
                        onClick={() => navigate(`/offers/${selectedOffer.id}`)}
                        style={{
                          background: 'rgba(255, 215, 0, 0.12)',
                          color: '#ffd700',
                          border: '1px solid rgba(255, 215, 0, 0.4)',
                          borderRadius: '20px',
                          padding: '8px 0',
                          fontSize: '12px',
                          fontWeight: '800',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        View Pass
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* List of Stores within Radius Range */}
            <div style={{
              background: '#141418',
              borderRadius: '20px',
              border: '1.5px solid rgba(255, 215, 0, 0.22)',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '900', color: '#ffffff' }}>
                  Nearby Stores ({filteredOffers.length})
                </h4>
                <span style={{ fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  Tap to pinpoint on map
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '270px', overflowY: 'auto' }}>
                {filteredOffers.map((item) => {
                  const isSelected = selectedOffer?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedOffer(item)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '14px',
                        background: isSelected ? 'rgba(255, 215, 0, 0.12)' : '#19191f',
                        border: isSelected ? '1.5px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.18s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isSelected ? '#ffd700' : '#222',
                          color: isSelected ? '#000' : '#ffd700',
                          fontWeight: '900',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '13px'
                        }}>
                          %
                        </div>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: '11px', color: '#888' }}>
                            📍 {item.location.split(',')[0]} • {item.distance}
                          </div>
                        </div>
                      </div>

                      <span style={{
                        color: '#ffd700',
                        fontWeight: '900',
                        fontSize: '11px',
                        backgroundColor: 'rgba(255,215,0,0.1)',
                        padding: '3px 8px',
                        borderRadius: '8px'
                      }}>
                        {item.discount}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
