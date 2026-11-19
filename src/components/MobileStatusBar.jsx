import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export default function MobileStatusBar() {
  const currentTime = '9:41';

  return (
    <div
      className="app-status-bar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px 4px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#ffffff',
        userSelect: 'none',
        letterSpacing: '0.2px'
      }}
    >
      <span>{currentTime}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <Battery size={16} strokeWidth={2.5} />
      </div>
    </div>
  );
}
