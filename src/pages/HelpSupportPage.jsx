import React, { useState } from 'react';
import Header from '../components/Header';
import { HelpCircle, MessageSquare, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

export default function HelpSupportPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How do I redeem an offer in-store?',
      a: 'Simply show the Offers NOW digital coupon or store deal on your phone to the merchant counter before bill settlement.'
    },
    {
      q: 'What is the ₹9 / Month Ad-Free Plan?',
      a: 'The ₹9 plan removes all banner and popup advertisements across the app and provides fast-track priority redemptions.'
    },
    {
      q: 'How can a local store post deals?',
      a: 'Stores can navigate to the Business Panel and activate the Merchant Pass for ₹499/Month to publish live offers.'
    },
    {
      q: 'How do I become an Area Franchise?',
      a: 'Area Franchise partners acquire exclusive territorial rights to register local shops and earn commission on every active listing and direct ad.'
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Help & Support" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Contact Us Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div
            onClick={() => window.location.href = 'tel:+919876543210'}
            style={{
              background: '#151518',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '16px',
              padding: '16px 14px',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <Phone size={24} color="#ffd700" style={{ margin: '0 auto 6px' }} />
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>Toll Free Call</div>
            <div style={{ fontSize: '11px', color: '#888' }}>1800-OFFERS-NOW</div>
          </div>

          <div
            onClick={() => window.location.href = 'mailto:support@offersnow.in'}
            style={{
              background: '#151518',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '16px',
              padding: '16px 14px',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <Mail size={24} color="#ffd700" style={{ margin: '0 auto 6px' }} />
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>Email Us</div>
            <div style={{ fontSize: '11px', color: '#888' }}>support@offersnow.in</div>
          </div>
        </div>

        <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#ffd700', marginBottom: '12px' }}>
          Frequently Asked Questions
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                onClick={() => setOpenFaq(isOpen ? -1 : i)}
                style={{
                  background: '#151518',
                  border: isOpen ? '1px solid #ffd700' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: isOpen ? '#ffd700' : '#fff' }}>
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp size={16} color="#ffd700" /> : <ChevronDown size={16} color="#888" />}
                </div>
                {isOpen && (
                  <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '8px', lineHeight: '1.5' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
