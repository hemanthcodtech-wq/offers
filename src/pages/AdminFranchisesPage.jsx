import React, { useState } from 'react';
import Header from '../components/Header';
import { useApp } from '../context/AppContext';
import {
  Briefcase,
  Search,
  ShieldCheck,
  Ban,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Building,
  DollarSign,
  PlusCircle,
  X,
  Sparkles,
  CreditCard,
  FileText,
  Landmark
} from 'lucide-react';

export default function AdminFranchisesPage() {
  const { franchises, toggleFranchiseStatus, addFranchise, showToast } = useApp();
  const [query, setQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedFranchiseForKyc, setSelectedFranchiseForKyc] = useState(null);

  // Add Franchise Form State
  const [zone, setZone] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [operatorName, setOperatorName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [commissionCut, setCommissionCut] = useState('30%');

  // Mandatory KYC & Banking Fields
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [bankName, setBankName] = useState('');

  const filtered = franchises.filter(f =>
    f.zone.toLowerCase().includes(query.toLowerCase()) ||
    f.operatorName.toLowerCase().includes(query.toLowerCase()) ||
    f.city.toLowerCase().includes(query.toLowerCase())
  );

  const handleCreateFranchise = (e) => {
    e.preventDefault();
    if (!zone.trim() || !operatorName.trim() || !phone.trim()) {
      showToast('Please fill zone name, franchise operator name, and phone', 'error');
      return;
    }

    if (!aadharNumber.trim() || !panNumber.trim() || !bankAccount.trim() || !ifscCode.trim()) {
      showToast('Please provide Aadhaar, PAN, and Bank Account details for compliance', 'error');
      return;
    }

    addFranchise({
      zone,
      city,
      operatorName,
      phone,
      email: email || `${operatorName.toLowerCase().replace(/\s+/g, '')}@offersnow.in`,
      commissionCut: commissionCut.includes('%') ? commissionCut : `${commissionCut}%`,
      // KYC Compliance
      aadharNumber,
      panNumber: panNumber.toUpperCase(),
      bankAccount,
      ifscCode: ifscCode.toUpperCase(),
      bankName: bankName || 'HDFC Bank',
      kycStatus: 'Verified'
    });

    showToast(`Franchise Zone "${zone}" allocated to ${operatorName} with KYC verified!`);
    setShowAddModal(false);

    // Reset Form
    setZone('');
    setOperatorName('');
    setPhone('');
    setEmail('');
    setAadharNumber('');
    setPanNumber('');
    setBankAccount('');
    setIfscCode('');
    setBankName('');
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header
        title="Manage Franchises"
        showBack={false}
        showNotifications={false}
        rightAction={
          <button
            onClick={() => setShowAddModal(true)}
            className="spring-btn"
            style={{
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000000',
              border: 'none',
              borderRadius: '20px',
              padding: '6px 12px',
              fontSize: '11px',
              fontWeight: '900',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(244, 180, 0, 0.4)'
            }}
          >
            <PlusCircle size={14} />
            + Add Franchise
          </button>
        }
      />

      <div style={{ padding: '16px 18px' }}>
        {/* Banner with Add Franchise Button */}
        <div
          style={{
            background: 'linear-gradient(135deg, #241c08 0%, #151518 100%)',
            border: '1.5px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '16px',
            padding: '14px 16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ fontSize: '14px', fontWeight: '900', color: '#fff' }}>Territory Franchise Network</div>
            <div style={{ fontSize: '11px', color: '#ffd700' }}>{franchises.length} Exclusive city zones with KYC compliance</div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="spring-btn"
            style={{
              background: '#ffd700',
              color: '#000',
              border: 'none',
              borderRadius: '16px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '900',
              cursor: 'pointer'
            }}
          >
            + Allocate Zone
          </button>
        </div>

        {/* Search */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Search size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search franchises by zone, operator, city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>

        {/* Franchise Zone Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filtered.map((item, idx) => {
            const isActive = item.status === 'Active';
            return (
              <div
                key={item.id}
                className="spring-card cascade-item"
                style={{
                  background: '#151518',
                  borderRadius: '18px',
                  border: isActive ? '1.5px solid rgba(255, 215, 0, 0.3)' : '1.5px solid #ef4444',
                  padding: '16px',
                  animationDelay: `${Math.min(idx * 50, 300)}ms`
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
                      <h4 style={{ fontSize: '15px', fontWeight: '900', color: '#fff' }}>
                        {item.zone}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                        Head: <strong style={{ color: '#fff' }}>{item.operatorName}</strong> • 📍 {item.city}
                      </p>
                      <p style={{ fontSize: '11px', color: '#ffd700', marginTop: '2px', fontWeight: '700' }}>
                        📞 {item.phone} • Cut: {item.commissionCut}
                      </p>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: '800',
                    backgroundColor: isActive ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: isActive ? '#22c55e' : '#ef4444',
                    padding: '3px 8px',
                    borderRadius: '10px',
                    border: `1px solid ${isActive ? '#22c55e' : '#ef4444'}`
                  }}>
                    {item.status}
                  </span>
                </div>

                {/* KYC & Compliance Verification Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: '12px 0 6px',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: 'rgba(255, 215, 0, 0.06)',
                  border: '1px solid rgba(255, 215, 0, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700' }}>
                    <ShieldCheck size={14} color="#22c55e" />
                    <span>Aadhaar, PAN & Bank Details:</span>
                    <strong style={{ color: '#22c55e' }}>{item.kycStatus || 'Verified'}</strong>
                  </div>
                  <button
                    onClick={() => setSelectedFranchiseForKyc(item)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ffd700',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    View KYC
                  </button>
                </div>

                {/* Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  margin: '10px 0',
                  background: '#0d0d10',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div>
                    <div style={{ fontSize: '10px', color: '#888' }}>Stores Onboarded</div>
                    <div style={{ fontSize: '15px', fontWeight: '900', color: '#fff', marginTop: '2px' }}>
                      {item.registeredStores} Stores
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#888' }}>Monthly Earnings</div>
                    <div style={{ fontSize: '15px', fontWeight: '900', color: '#ffd700', marginTop: '2px' }}>
                      {item.monthlyEarnings}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <span style={{ fontSize: '11px', color: '#aaa' }}>
                    Payout: <strong style={{ color: '#22c55e' }}>{item.payoutStatus}</strong>
                  </span>

                  <button
                    onClick={() => toggleFranchiseStatus(item.id)}
                    className="spring-btn"
                    style={{
                      background: isActive ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
                      color: isActive ? '#ef4444' : '#22c55e',
                      border: isActive ? '1px solid #ef4444' : '1px solid #22c55e',
                      borderRadius: '12px',
                      padding: '5px 12px',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer'
                    }}
                  >
                    {isActive ? 'Suspend Franchise' : 'Reactivate Franchise'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View KYC Details Modal */}
      {selectedFranchiseForKyc && (
        <div
          onClick={() => setSelectedFranchiseForKyc(null)}
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
                <h3 style={{ fontSize: '17px', fontWeight: '900', color: '#fff' }}>Verified KYC Profile</h3>
              </div>
              <button
                onClick={() => setSelectedFranchiseForKyc(null)}
                style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '11px', color: '#888' }}>Franchise Operator</div>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#fff', marginTop: '2px' }}>
                  {selectedFranchiseForKyc.operatorName}
                </div>
                <div style={{ fontSize: '12px', color: '#ffd700', marginTop: '1px' }}>
                  {selectedFranchiseForKyc.zone}
                </div>
              </div>

              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  <CreditCard size={14} /> Aadhaar Card
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginTop: '4px', letterSpacing: '1px' }}>
                  {selectedFranchiseForKyc.aadharNumber || 'XXXX-XXXX-8921 (UIDAI Verified)'}
                </div>
              </div>

              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  <FileText size={14} /> PAN Card
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginTop: '4px', letterSpacing: '1px' }}>
                  {selectedFranchiseForKyc.panNumber || 'ABCDE1234F (IT Department Cleared)'}
                </div>
              </div>

              <div style={{ background: '#0d0d10', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ffd700', fontWeight: '700' }}>
                  <Landmark size={14} /> Bank Payout Account
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginTop: '4px' }}>
                  A/C: {selectedFranchiseForKyc.bankAccount || '91827364501928'}
                </div>
                <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>
                  IFSC: <strong style={{ color: '#fff' }}>{selectedFranchiseForKyc.ifscCode || 'HDFC0001824'}</strong> • {selectedFranchiseForKyc.bankName || 'HDFC Bank Ltd.'}
                </div>
              </div>

              <button
                onClick={() => setSelectedFranchiseForKyc(null)}
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
                Close KYC Viewer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Franchise Modal */}
      {showAddModal && (
        <div
          onClick={() => setShowAddModal(false)}
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
              maxWidth: '430px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 0 35px rgba(255, 215, 0, 0.35)',
              animation: 'cascadeIn 0.3s ease-out'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={22} color="#ffd700" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#fff' }}>Allocate Franchise Zone</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateFranchise} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Basic Operator Details */}
              <div>
                <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Zone / Territory Title *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Zone #05: Madhapur & Hitec City"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  style={{ marginTop: '5px' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Operator / Head Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. K. V. Raman"
                  value={operatorName}
                  onChange={(e) => setOperatorName(e.target.value)}
                  style={{ marginTop: '5px' }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>Phone / Mobile *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98480 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ marginTop: '5px' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#ccc', fontWeight: '700' }}>City Allocation</label>
                  <select
                    className="form-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ marginTop: '5px' }}
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
              </div>

              {/* KYC & Identity Section */}
              <div style={{
                marginTop: '4px',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 215, 0, 0.2)'
              }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#ffd700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="#22c55e" />
                  Operator KYC & Identity Verification
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '11px', color: '#ccc', fontWeight: '700' }}>Aadhaar No. (12 Digits) *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="1234 5678 9012"
                      value={aadharNumber}
                      onChange={(e) => setAadharNumber(e.target.value)}
                      style={{ marginTop: '5px', fontSize: '12px' }}
                      maxLength={14}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', color: '#ccc', fontWeight: '700' }}>PAN Card (10 Digits) *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="ABCDE1234F"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                      style={{ marginTop: '5px', fontSize: '12px', textTransform: 'uppercase' }}
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Bank Account Details */}
              <div style={{
                marginTop: '4px',
                paddingTop: '10px',
                borderTop: '1px solid rgba(255, 215, 0, 0.2)'
              }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#ffd700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Landmark size={16} color="#ffd700" />
                  Bank Account (For Automated Direct Payouts)
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#ccc', fontWeight: '700' }}>Bank Account Number *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Account Number (e.g. 50100234567890)"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    style={{ marginTop: '5px', fontSize: '12px' }}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
                  <div>
                    <label style={{ fontSize: '11px', color: '#ccc', fontWeight: '700' }}>IFSC Code *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="HDFC0001234"
                      value={ifscCode}
                      onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                      style={{ marginTop: '5px', fontSize: '12px', textTransform: 'uppercase' }}
                      maxLength={11}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', color: '#ccc', fontWeight: '700' }}>Bank Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. HDFC / SBI / ICICI"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      style={{ marginTop: '5px', fontSize: '12px' }}
                    />
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 215, 0, 0.08)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                borderRadius: '12px',
                padding: '10px 14px',
                fontSize: '11px',
                color: '#ffd700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '6px'
              }}>
                <Sparkles size={16} />
                <span>All payout transfers (30% recurring merchant commissions) are directly deposited to this verified bank account.</span>
              </div>

              <button
                type="submit"
                className="spring-btn"
                style={{
                  marginTop: '10px',
                  width: '100%',
                  background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                  color: '#000',
                  fontWeight: '900',
                  padding: '12px',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Confirm KYC & Allocate Franchise Zone
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
