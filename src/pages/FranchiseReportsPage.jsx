import React from 'react';
import Header from '../components/Header';
import { FRANCHISE_DATA } from '../data/mockData';
import {
  FileText,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  FileCheck2,
  Building,
  CheckCircle2
} from 'lucide-react';

export default function FranchiseReportsPage() {
  const reportsList = [
    {
      id: 'REP-NOV-2026',
      title: 'Monthly Payout Statement - November 2026',
      period: '01 Nov 2026 - 30 Nov 2026',
      amount: '₹1,25,430',
      status: 'Transferred',
      tax: 'TDS (5%): ₹6,271 | Net: ₹1,19,159',
      date: '18 Nov 2026'
    },
    {
      id: 'REP-OCT-2026',
      title: 'Monthly Payout Statement - October 2026',
      period: '01 Oct 2026 - 31 Oct 2026',
      amount: '₹1,00,480',
      status: 'Settled',
      tax: 'TDS (5%): ₹5,024 | Net: ₹95,456',
      date: '02 Nov 2026'
    },
    {
      id: 'REP-SEP-2026',
      title: 'Monthly Payout Statement - September 2026',
      period: '01 Sep 2026 - 30 Sep 2026',
      amount: '₹89,200',
      status: 'Settled',
      tax: 'TDS (5%): ₹4,460 | Net: ₹84,740',
      date: '03 Oct 2026'
    }
  ];

  const handleDownload = (rep) => {
    alert(`Downloading ${rep.title} PDF statement with official Offers NOW GST tax invoice...`);
  };

  return (
    <div style={{ paddingBottom: '90px' }}>
      <Header title="Franchise Reports" showBack={true} showNotifications={false} />

      <div style={{ padding: '16px 18px' }}>
        {/* Territory Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #201c0c 0%, #131317 100%)',
          borderRadius: '16px',
          border: '1.5px solid #ffd700',
          padding: '16px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#ffd700', fontWeight: '800', textTransform: 'uppercase' }}>
                Official Financial Statement
              </div>
              <div style={{ fontSize: '20px', fontWeight: '950', color: '#fff', marginTop: '2px' }}>
                Tax & Payout Ledger
              </div>
              <div style={{ fontSize: '11px', color: '#aaa', marginTop: '4px' }}>
                Bank Account: HDFC Bank •••• 4892 (Verified)
              </div>
            </div>
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              color: '#22c55e',
              border: '1px solid #22c55e',
              borderRadius: '20px',
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: '800'
            }}>
              ● Direct Deposit Active
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#ffd700', marginBottom: '12px' }}>
          Monthly Statements & GST Invoices
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {reportsList.map((rep) => (
            <div
              key={rep.id}
              style={{
                background: '#151518',
                borderRadius: '16px',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#ffd700', fontWeight: '800' }}>
                    {rep.id}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#fff', marginTop: '2px' }}>
                    {rep.title}
                  </h4>
                  <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>
                    {rep.period}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: '950', color: '#ffd700' }}>
                    {rep.amount}
                  </div>
                  <span style={{
                    fontSize: '10px',
                    color: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontWeight: '700'
                  }}>
                    {rep.status}
                  </span>
                </div>
              </div>

              <div style={{
                background: '#0e0e12',
                borderRadius: '10px',
                padding: '8px 12px',
                fontSize: '11px',
                color: '#aaa',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>{rep.tax}</span>
                <span style={{ color: '#666' }}>{rep.date}</span>
              </div>

              <button
                onClick={() => handleDownload(rep)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 215, 0, 0.12)',
                  color: '#ffd700',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '20px',
                  padding: '9px',
                  fontSize: '12px',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <Download size={14} />
                Download PDF Statement & GST Invoice
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
