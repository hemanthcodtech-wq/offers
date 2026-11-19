import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Bell, Tag, Sparkles, CheckCircle2, ArrowLeft, Trash2 } from 'lucide-react';

export default function NotificationsPage() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: 'Sri Sai Mobiles 50% Off Flash Sale',
      desc: 'Exclusive 50% discount on 5G Smartphones ending this weekend. Claim in-store pass before slots fill.',
      time: '10 mins ago',
      unread: true,
      tag: 'Flash Deal',
      icon: '🔥'
    },
    {
      id: 2,
      title: '₹9 VIP Plan Activated Successfully',
      desc: 'Your monthly ad-free premium experience is live across all merchants in Hyderabad.',
      time: '2 hours ago',
      unread: false,
      tag: 'Subscription',
      icon: '👑'
    },
    {
      id: 3,
      title: 'New Merchant in Ameerpet Zone',
      desc: 'The Royal Spice Restaurant joined Offers NOW with Buy 1 Get 1 free biryani deal.',
      time: 'Yesterday',
      unread: false,
      tag: 'New Store',
      icon: '📍'
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Notifications" showBack={true} showNotifications={false} />

      <div className="desktop-page-container" style={{ maxWidth: '850px' }}>
        {/* Breadcrumb Back */}
        <button
          onClick={() => navigate(-1)}
          className="spring-btn"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffd700',
            fontSize: '13px',
            fontWeight: '800',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            padding: '4px 0',
            marginBottom: '14px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        {/* Notifications Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #1b170c 0%, #141418 100%)',
          borderRadius: '20px',
          border: '1.5px solid rgba(255, 215, 0, 0.35)',
          padding: '18px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 215, 0, 0.15)',
              border: '1.5px solid #ffd700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffd700'
            }}>
              <Bell size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '950', color: '#fff' }}>
                Activity & Deal Alerts
              </h2>
              <div style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                Real-time updates on savings, newly approved stores & subscriptions
              </div>
            </div>
          </div>

          <span style={{
            fontSize: '11px',
            color: '#22c55e',
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontWeight: '800'
          }}>
            1 Unread Alert
          </span>
        </div>

        {/* Notifications Stream */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((n) => (
            <div
              key={n.id}
              className="spring-card"
              style={{
                background: n.unread ? 'linear-gradient(135deg, #201c0b 0%, #16161b 100%)' : '#141418',
                border: n.unread ? '1.5px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '16px 20px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                boxShadow: n.unread ? '0 6px 20px rgba(255, 215, 0, 0.15)' : 'none'
              }}
            >
              <div style={{
                fontSize: '24px',
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {n.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#ffffff' }}>
                    {n.title}
                  </h4>
                  <span style={{ fontSize: '11px', color: '#888' }}>
                    {n.time}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#b0b0b8', marginTop: '4px', lineHeight: '1.4' }}>
                  {n.desc}
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <span style={{
                    fontSize: '10.5px',
                    color: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.12)',
                    padding: '2px 8px',
                    borderRadius: '8px',
                    fontWeight: '800'
                  }}>
                    {n.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
