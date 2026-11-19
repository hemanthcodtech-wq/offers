import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: 'calc(100% - 32px)',
        maxWidth: '400px',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';
        const borderColor = isError ? '#ef4444' : isInfo ? '#3b82f6' : '#ffd700';
        const iconColor = isError ? '#ef4444' : isInfo ? '#60a5fa' : '#ffd700';

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              background: 'rgba(16, 16, 20, 0.96)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1.5px solid ${borderColor}`,
              borderRadius: '16px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              boxShadow: `0 12px 30px rgba(0, 0, 0, 0.8), 0 0 18px ${borderColor}44`,
              animation: 'toastSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              {isError ? (
                <AlertCircle size={20} color={iconColor} style={{ flexShrink: 0 }} />
              ) : isInfo ? (
                <Info size={20} color={iconColor} style={{ flexShrink: 0 }} />
              ) : (
                <CheckCircle2 size={20} color={iconColor} style={{ flexShrink: 0 }} />
              )}
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: '1.4'
                }}
              >
                {toast.message}
              </span>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#888',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}

      <style>{`
        @keyframes toastSlideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
