import React from 'react';
import Header from '../components/Header';
import { Bell, Tag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: 'Sri Sai Mobiles 50% Off Flash Sale',
      desc: 'Exclusive 50% discount on 5G Smartphones ending this weekend.',
      time: '10 mins ago',
      unread: true,
      icon: '🔥'
    },
    {
      id: 2,
      title: '₹9 Plan Activated Successfully',
      desc: 'Your monthly ad-free premium experience is live across all merchants.',
      time: '2 hours ago',
      unread: false,
      icon: '👑'
    },
    {
      id: 3,
      title: 'New Merchant in Ameerpet Zone',
      desc: 'The Royal Spice Restaurant joined Offers NOW with Buy 1 Get 1 free biryani deal.',
      time: 'Yesterday',
      unread: false,
      icon: '📍'
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Notifications" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              background: n.unread ? 'linear-gradient(135deg, #201c0b 0%, #151518 100%)' : '#151518',
              border: n.unread ? '1.5px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '14px 16px',
              display: 'flex',
              gap: '12px',
              position: 'relative'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: '#1f1f23',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              flexShrink: 0
            }}>
              {n.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#fff' }}>{n.title}</h4>
                {n.unread && (
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#ffd700',
                    boxShadow: '0 0 6px #ffd700'
                  }} />
                )}
              </div>
              <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '3px', lineHeight: '1.4' }}>{n.desc}</p>
              <span style={{ fontSize: '10px', color: '#666', marginTop: '6px', display: 'inline-block' }}>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
