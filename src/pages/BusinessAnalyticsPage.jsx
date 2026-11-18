import React, { useState } from 'react';
import Header from '../components/Header';
import {
  Eye,
  PhoneCall,
  MapPin,
  TrendingUp,
  Users,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Share2
} from 'lucide-react';

export default function BusinessAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('This Month');

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Merchant Leads & Views" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* KPI Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #221c0b 0%, #131317 100%)',
          borderRadius: '18px',
          border: '1.5px solid #ffd700',
          padding: '18px',
          boxShadow: '0 6px 20px rgba(255, 215, 0, 0.25)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#a0a0a0', fontWeight: '800', textTransform: 'uppercase' }}>
                TOTAL CUSTOMER ENGAGEMENTS
              </span>
              <div style={{ fontSize: '32px', fontWeight: '950', color: '#ffd700', margin: '4px 0' }}>
                14,820
              </div>
              <span style={{
                fontSize: '11px',
                color: '#22c55e',
                fontWeight: '800',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                padding: '2px 8px',
                borderRadius: '8px'
              }}>
                ↑ +32.4% vs last cycle
              </span>
            </div>

            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: '#1f1d14',
              border: '1px solid #ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px'
            }}>
              📊
            </div>
          </div>
        </div>

        {/* 4 Performance Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div style={{
            background: '#151518',
            borderRadius: '16px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            padding: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '11px' }}>
              <Eye size={14} color="#ffd700" />
              <span>Offer Impressions</span>
            </div>
            <div style={{ fontSize: '22px', fontWeight: '950', color: '#fff', marginTop: '6px' }}>
              12,410
            </div>
            <div style={{ fontSize: '10px', color: '#22c55e', marginTop: '2px' }}>Local App Views</div>
          </div>

          <div style={{
            background: '#151518',
            borderRadius: '16px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            padding: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '11px' }}>
              <PhoneCall size={14} color="#22c55e" />
              <span>Direct Hotline Calls</span>
            </div>
            <div style={{ fontSize: '22px', fontWeight: '950', color: '#22c55e', marginTop: '6px' }}>
              482
            </div>
            <div style={{ fontSize: '10px', color: '#22c55e', marginTop: '2px' }}>In-bound inquiries</div>
          </div>

          <div style={{
            background: '#151518',
            borderRadius: '16px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            padding: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '11px' }}>
              <MapPin size={14} color="#60a5fa" />
              <span>Directions Navigated</span>
            </div>
            <div style={{ fontSize: '22px', fontWeight: '950', color: '#60a5fa', marginTop: '6px' }}>
              1,240
            </div>
            <div style={{ fontSize: '10px', color: '#888', marginTop: '2px' }}>Store footfalls</div>
          </div>

          <div style={{
            background: '#151518',
            borderRadius: '16px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            padding: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '11px' }}>
              <Share2 size={14} color="#f59e0b" />
              <span>WhatsApp Shares</span>
            </div>
            <div style={{ fontSize: '22px', fontWeight: '950', color: '#ffd700', marginTop: '6px' }}>
              688
            </div>
            <div style={{ fontSize: '10px', color: '#888', marginTop: '2px' }}>Viral peer shares</div>
          </div>
        </div>

        {/* Footfall Trend Graph Representation */}
        <h3 style={{ fontSize: '14px', fontWeight: '900', color: '#ffd700', marginBottom: '10px' }}>
          Weekly Walk-In Traffic
        </h3>
        <div style={{
          background: '#151518',
          borderRadius: '16px',
          border: '1px solid rgba(255, 215, 0, 0.25)',
          padding: '16px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100px', gap: '8px', padding: '10px 4px 0' }}>
            {[
              { day: 'Mon', h: '40%' },
              { day: 'Tue', h: '55%' },
              { day: 'Wed', h: '50%' },
              { day: 'Thu', h: '70%' },
              { day: 'Fri', h: '85%' },
              { day: 'Sat', h: '100%' },
              { day: 'Sun', h: '95%' }
            ].map(col => (
              <div key={col.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                <div style={{
                  width: '100%',
                  height: col.h,
                  background: 'linear-gradient(180deg, #ffd700 0%, #b8860b 100%)',
                  borderRadius: '6px 6px 0 0',
                  boxShadow: '0 0 8px rgba(255, 215, 0, 0.3)'
                }} />
                <span style={{ fontSize: '10px', color: '#888', marginTop: '6px' }}>{col.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Assessment Box */}
        <div style={{
          background: '#0d2818',
          border: '1px solid #22c55e',
          borderRadius: '16px',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: '900', color: '#22c55e' }}>
              Estimated Revenue Generated: ₹1,85,000+
            </div>
            <div style={{ fontSize: '11px', color: '#a7f3d0', marginTop: '2px' }}>
              Based on 482 calls & 1,240 physical directions navigated
            </div>
          </div>
          <span style={{ fontSize: '20px' }}>🚀</span>
        </div>
      </div>
    </div>
  );
}
