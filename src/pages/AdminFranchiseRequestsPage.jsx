import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Briefcase,
  CheckCircle2,
  XCircle,
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck,
  Search,
  CreditCard,
  FileText,
  Landmark,
  X
} from 'lucide-react';

export default function AdminFranchiseRequestsPage() {
  const { franchiseRequests, approveFranchiseRequest, rejectFranchiseRequest, showToast } = useApp();
  const [query, setQuery] = useState('');
  const [kycModalItem, setKycModalItem] = useState(null);

  const filtered = franchiseRequests.filter(r =>
    r.applicantName.toLowerCase().includes(query.toLowerCase()) ||
    r.zone.toLowerCase().includes(query.toLowerCase()) ||
    r.city.toLowerCase().includes(query.toLowerCase())
  );

  const handleApprove = (req) => {
    approveFranchiseRequest(req.id);
    showToast(`Franchise partner application for "${req.applicantName}" approved! Zone allocated.`);
  };

  const handleReject = (req) => {
    rejectFranchiseRequest(req.id);
    showToast(`Franchise request for "${req.applicantName}" declined.`, 'error');
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Franchise Applications" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #241c08 0%, #151518 100%)',
          borderRadius: '16px',
          border: '1.5px solid rgba(255, 215, 0, 0.3)',
          padding: '14px 16px',
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>
              Pending Territory Franchise Requests
            </div>
            <div style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px' }}>
              {franchiseRequests.length} partner applications with KYC verification
            </div>
          </div>
          <span style={{
            fontSize: '12px',
            fontWeight: '900',
            backgroundColor: '#ffd700',
            color: '#000',
            padding: '4px 10px',
            borderRadius: '12px'
          }}>
            {franchiseRequests.length} APPLICANTS
          </span>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input form-input-with-icon"
            placeholder="Search franchise applicants by name or zone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Requests List */}
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: '#121215',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <CheckCircle2 size={36} color="#22c55e" style={{ margin: '0 auto 10px' }} />
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>No Pending Applications</h4>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
              All area franchise applications have been verified.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filtered.map((req, idx) => (
              <div
                key={req.id}
                className="spring-card cascade-item"
                style={{
                  background: '#151518',
                  borderRadius: '18px',
                  border: '1.5px solid rgba(255, 215, 0, 0.28)',
                  padding: '16px',
                  animationDelay: `${Math.min(idx * 60, 300)}ms`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffd700'
                    }}>
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#fff' }}>
                        {req.applicantName}
                      </h4>
                      <div style={{ fontSize: '12px', color: '#ffd700', marginTop: '2px', fontWeight: '700' }}>
                        Requested: {req.zone} (📍 {req.city})
                      </div>
                      <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>
                        📞 {req.phone} • ✉️ {req.email}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '800',
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    border: '1px solid #f59e0b'
                  }}>
                    KYC Submitted
                  </span>
                </div>

                {/* KYC Preview Box */}
                <div style={{
                  background: '#0d0d10',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  marginTop: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '11px',
                  color: '#ccc',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div>Aadhaar: <strong style={{ color: '#fff' }}>{req.aadharNumber}</strong></div>
                    <div style={{ marginTop: '2px' }}>PAN: <strong style={{ color: '#ffd700' }}>{req.panNumber}</strong></div>
                  </div>
                  <button
                    onClick={() => setKycModalItem(req)}
                    style={{
                      background: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.35)',
                      borderRadius: '10px',
                      padding: '4px 10px',
                      color: '#ffd700',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    Inspect KYC
                  </button>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <span style={{ fontSize: '11px', color: '#777' }}>
                    Applied {req.requestedAt}
                  </span>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleReject(req)}
                      className="spring-btn"
                      style={{
                        background: 'rgba(239, 68, 68, 0.12)',
                        color: '#ef4444',
                        border: '1px solid #ef4444',
                        borderRadius: '14px',
                        padding: '6px 14px',
                        fontSize: '12px',
                        fontWeight: '800',
                        cursor: 'pointer'
                      }}
                    >
                      Decline
                    </button>

                    <button
                      onClick={() => handleApprove(req)}
                      className="spring-btn"
                      style={{
                        background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '6px 16px',
                        fontSize: '12px',
                        fontWeight: '900',
                        cursor: 'pointer'
                      }}
                    >
                      ✓ Grant Zone
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* KYC Detailed Inspection Modal */}
      {kycModalItem && (
        <div
          onClick={() => setKycModalItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#16161a',
              border: '1.5px solid #ffd700',
              borderRadius: '24px',
              padding: '24px 20px',
              width: '100%',
              maxWidth: '380px',
              boxShadow: '0 0 35px rgba(255, 215, 0, 0.35)',
              animation: 'cascadeIn 0.3s ease-out'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={22} color="#22c55e" />
                <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#fff' }}>Applicant Verification</h3>
              </div>
              <button
                onClick={() => setKycModalItem(null)}
                style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '11px', color: '#888' }}>Applicant</div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginTop: '2px' }}>
                  {kycModalItem.applicantName}
                </div>
                <div style={{ fontSize: '12px', color: '#ffd700', marginTop: '1px' }}>
                  {kycModalItem.zone}
                </div>
              </div>

              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  <CreditCard size={14} /> Aadhaar Identification
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginTop: '4px', letterSpacing: '1px' }}>
                  {kycModalItem.aadharNumber}
                </div>
              </div>

              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  <FileText size={14} /> Permanent Account Number (PAN)
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginTop: '4px', letterSpacing: '1px' }}>
                  {kycModalItem.panNumber}
                </div>
              </div>

              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  <Landmark size={14} /> Bank Payout Account
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>
                  A/C: {kycModalItem.bankAccount}
                </div>
                <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>
                  IFSC: <strong style={{ color: '#fff' }}>{kycModalItem.ifscCode}</strong> • {kycModalItem.bankName}
                </div>
              </div>

              <button
                onClick={() => setKycModalItem(null)}
                style={{
                  marginTop: '8px',
                  width: '100%',
                  background: '#ffd700',
                  color: '#000',
                  fontWeight: '900',
                  padding: '10px',
                  borderRadius: '16px',
                  border: 'none',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
