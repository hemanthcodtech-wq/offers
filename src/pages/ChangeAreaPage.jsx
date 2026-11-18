import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import { MapPin, Check } from 'lucide-react';

export default function ChangeAreaPage() {
  const navigate = useNavigate();
  const { selectedCity, setSelectedCity } = useApp();

  const cities = [
    { name: 'Hyderabad', activeOffers: '240+ Deals Live', zones: 'Ameerpet, Kukatpally, Banjara Hills, Gachibowli' },
    { name: 'Bengaluru', activeOffers: '180+ Deals Live', zones: 'Indiranagar, Koramangala, Whitefield, HSR' },
    { name: 'Mumbai', activeOffers: '310+ Deals Live', zones: 'Bandra, Andheri, Powai, Juhu' },
    { name: 'Delhi NCR', activeOffers: '290+ Deals Live', zones: 'Connaught Place, Gurgaon, Noida, Saket' },
    { name: 'Chennai', activeOffers: '150+ Deals Live', zones: 'T. Nagar, Anna Nagar, Velachery, Adyar' }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Change Area" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        <p style={{ fontSize: '12px', color: '#888', marginBottom: '14px' }}>
          Select your city to see relevant nearby deals & verified local store offers:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {cities.map((city) => {
            const isSelected = selectedCity === city.name;
            return (
              <div
                key={city.name}
                onClick={() => {
                  setSelectedCity(city.name);
                  navigate('/home');
                }}
                style={{
                  background: isSelected ? 'linear-gradient(135deg, #201c0b 0%, #151518 100%)' : '#151518',
                  border: isSelected ? '1.5px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? '#ffd700' : '#1f1f23',
                    color: isSelected ? '#000' : '#ffd700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: isSelected ? '#ffd700' : '#fff' }}>
                      {city.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                      {city.zones}
                    </div>
                    <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '700', marginTop: '2px' }}>
                      {city.activeOffers}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#ffd700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
