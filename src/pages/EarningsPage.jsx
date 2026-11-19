import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import { FRANCHISE_DATA } from '../data/mockData';
import { TrendingUp, FileText, ChevronDown, Download, Share2, Layers, DollarSign } from 'lucide-react';

export default function EarningsPage() {
  const { showToast } = useApp();
  const [selectedMonth, setSelectedMonth] = useState('This Month');

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Earnings" showBack={true} showNotifications={false} />

      {/* Total Earnings Showcase Box from Screenshot 9 */}
      <div style={{ padding: '16px 18px 8px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #201a08 0%, #15130b 100%)',
          borderRadius: '22px',
          border: '1.5px solid #d4af37',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(212, 175, 55, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Faint golden gradient radial glow */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: '600' }}>
                Total Earnings
              </span>
              <div style={{
                fontSize: '34px',
                fontWeight: '950',
                color: '#ffd700',
                margin: '4px 0 6px',
                letterSpacing: '0.5px'
              }}>
                {FRANCHISE_DATA.totalEarnings}
              </div>
              <span style={{
                fontSize: '11px',
                color: '#22c55e',
                fontWeight: '700',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                padding: '3px 8px',
                borderRadius: '10px'
              }}>
                ↑ +24.8% vs last month
              </span>
            </div>

            {/* Trending Graphic Chart Icon from Screenshot 9 */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '4px',
              height: '55px',
              padding: '6px'
            }}>
              <div style={{ width: '8px', height: '20px', backgroundColor: '#ffd700', borderRadius: '3px', opacity: 0.5 }} />
              <div style={{ width: '8px', height: '32px', backgroundColor: '#ffd700', borderRadius: '3px', opacity: 0.7 }} />
              <div style={{ width: '8px', height: '44px', backgroundColor: '#ffd700', borderRadius: '3px', opacity: 0.9 }} />
              <div style={{ width: '8px', height: '54px', backgroundColor: '#ffd700', borderRadius: '3px' }} />
              <TrendingUp size={24} color="#ffd700" style={{ marginBottom: '24px', marginLeft: '4px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Month Dropdown Selector from Screenshot 9 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 18px 14px'
      }}>
        <div
          onClick={() => {
            const months = ['This Month', 'October 2026', 'September 2026', 'All Time'];
            const next = (months.indexOf(selectedMonth) + 1) % months.length;
            setSelectedMonth(months[next]);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#ffd700',
            fontWeight: '700',
            fontSize: '14px',
            cursor: 'pointer',
            padding: '6px 14px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 215, 0, 0.08)',
            border: '1px solid rgba(255, 215, 0, 0.25)'
          }}
        >
          <span>{selectedMonth}</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Earnings Breakdown Items from Screenshot 9 */}
      <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Item 1: Business Posts */}
        <div style={{
          background: '#151518',
          border: '1.5px solid rgba(255, 215, 0, 0.25)',
          borderRadius: '16px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#1f1d14',
              border: '1px solid #ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              🏪
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>
                Business Posts
              </div>
              <div style={{ fontSize: '11px', color: '#888' }}>
                Local store monthly listings
              </div>
            </div>
          </div>
          <div style={{
            fontSize: '17px',
            fontWeight: '900',
            color: '#ffd700'
          }}>
            {FRANCHISE_DATA.monthlyBreakdown.businessPosts}
          </div>
        </div>

        {/* Item 2: Google Ads */}
        <div style={{
          background: '#151518',
          border: '1.5px solid rgba(255, 215, 0, 0.25)',
          borderRadius: '16px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#1f1d14',
              border: '1px solid #ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              📢
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>
                Google Ads
              </div>
              <div style={{ fontSize: '11px', color: '#888' }}>
                In-app banner & network revenue
              </div>
            </div>
          </div>
          <div style={{
            fontSize: '17px',
            fontWeight: '900',
            color: '#ffd700'
          }}>
            {FRANCHISE_DATA.monthlyBreakdown.googleAds}
          </div>
        </div>

        {/* Item 3: Direct Ads */}
        <div style={{
          background: '#151518',
          border: '1.5px solid rgba(255, 215, 0, 0.25)',
          borderRadius: '16px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#1f1d14',
              border: '1px solid #ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              🎯
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>
                Direct Ads
              </div>
              <div style={{ fontSize: '11px', color: '#888' }}>
                Featured category sponsorship
              </div>
            </div>
          </div>
          <div style={{
            fontSize: '17px',
            fontWeight: '900',
            color: '#ffd700'
          }}>
            {FRANCHISE_DATA.monthlyBreakdown.directAds}
          </div>
        </div>

        {/* View Reports CTA Button from Screenshot 9 */}
        <button
          onClick={() => showToast('Payout Statement & GST Invoice downloaded to device.')}
          style={{
            marginTop: '8px',
            width: '100%',
            background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
            color: '#000000',
            border: 'none',
            borderRadius: '25px',
            padding: '14px',
            fontSize: '15px',
            fontWeight: '900',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(244, 180, 0, 0.4)'
          }}
        >
          <FileText size={18} />
          View Reports
        </button>
      </div>

      {/* Decorative Golden City Skyline at bottom from Screenshot 9 */}
      <div style={{
        marginTop: '30px',
        padding: '0 20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Stylized vector cityscape silhouette with gold glow */}
        <svg viewBox="0 0 400 60" style={{ width: '100%', height: '50px', opacity: 0.6 }}>
          <path d="M10,60 L10,35 L25,35 L25,20 L35,20 L35,40 L45,40 L45,15 L60,15 L60,45 L70,45 L70,25 L85,25 L85,60 
                   L100,60 L100,10 L120,5 L125,5 L125,60 L140,60 L140,30 L155,30 L155,60 L170,60 L170,18 L190,18 
                   L190,40 L210,40 L210,12 L230,12 L230,60 L250,60 L250,28 L270,28 L270,60 L285,60 L285,8 L310,8 
                   L310,60 L330,60 L330,22 L350,22 L350,60 L380,60 L380,30 L400,30 L400,60 Z"
                fill="#ffd700" />
        </svg>
        <p style={{ fontSize: '11px', color: '#777', marginTop: '6px' }}>
          Offers NOW Area Franchise Automated Payout Engine
        </p>
      </div>
    </div>
  );
}
