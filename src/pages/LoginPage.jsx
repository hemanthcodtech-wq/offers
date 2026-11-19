import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import AppLogo from '../components/AppLogo';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Store,
  Briefcase,
  Crown,
  ArrowRight,
  Sparkles,
  KeyRound,
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginWithCredentials, loginAsRole, showToast } = useApp();

  const [activeTab, setActiveTab] = useState('roles'); // 'roles' | 'credentials'
  const [email, setEmail] = useState('admin@offersnow.in');
  const [password, setPassword] = useState('admin123');
  const [selectedRole, setSelectedRole] = useState('Admin');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in both email and password.');
      return;
    }
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      loginWithCredentials(email, password, selectedRole);
      setIsLoading(false);
      if (selectedRole === 'Admin') {
        navigate('/admin');
      } else if (selectedRole === 'Business') {
        navigate('/business');
      } else if (selectedRole === 'Area Franchise') {
        navigate('/franchise');
      } else {
        navigate('/home');
      }
    }, 600);
  };

  const handleQuickRole = (role, path) => {
    loginAsRole(role);
    navigate(path);
  };

  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 20px 32px',
      background: 'radial-gradient(circle at 50% 16%, #2b2209 0%, #08080a 78%)',
      position: 'relative'
    }}>
      {/* Golden Aura Background */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.24) 0%, rgba(212, 175, 55, 0.04) 60%, transparent 80%)',
          filter: 'blur(32px)',
          pointerEvents: 'none'
        }}
      />

      {/* Brand Identity Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '6px',
        position: 'relative',
        zIndex: 1
      }}>
        <AppLogo size={92} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
          <span style={{ fontSize: '26px' }}>📢</span>
          <h1 style={{
            fontSize: '34px',
            fontWeight: '950',
            fontStyle: 'italic',
            letterSpacing: '0.5px',
            color: '#ffffff'
          }}>
            Offers <span style={{ color: '#ffd700' }}>NOW</span>
          </h1>
        </div>

        <p style={{
          fontSize: '13px',
          fontWeight: '800',
          letterSpacing: '1px',
          color: '#ffd700',
          textTransform: 'uppercase',
          marginTop: '4px',
          marginBottom: '22px'
        }}>
          Connect • Buy • Save
        </p>

        {/* Tab Switcher */}
        <div style={{
          width: '100%',
          maxWidth: '380px',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            backgroundColor: '#111115',
            padding: '5px',
            borderRadius: '24px',
            border: '1.5px solid rgba(255, 215, 0, 0.35)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7), inset 0 2px 6px rgba(0, 0, 0, 0.8)',
            position: 'relative'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('roles')}
              style={{
                flex: 1,
                padding: '11px 14px',
                borderRadius: '20px',
                border: 'none',
                background: activeTab === 'roles'
                  ? 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)'
                  : 'transparent',
                color: activeTab === 'roles' ? '#000000' : '#9999a0',
                fontWeight: activeTab === 'roles' ? '900' : '600',
                fontSize: '13px',
                letterSpacing: '0.2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeTab === 'roles'
                  ? '0 4px 15px rgba(244, 180, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.6)'
                  : 'none'
              }}
            >
              <Sparkles size={15} color={activeTab === 'roles' ? '#000000' : '#ffd700'} />
              <span>Choose Role</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('credentials')}
              style={{
                flex: 1,
                padding: '11px 14px',
                borderRadius: '20px',
                border: 'none',
                background: activeTab === 'credentials'
                  ? 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)'
                  : 'transparent',
                color: activeTab === 'credentials' ? '#000000' : '#9999a0',
                fontWeight: activeTab === 'credentials' ? '900' : '600',
                fontSize: '13px',
                letterSpacing: '0.2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeTab === 'credentials'
                  ? '0 4px 15px rgba(244, 180, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.6)'
                  : 'none'
              }}
            >
              <KeyRound size={15} color={activeTab === 'credentials' ? '#000000' : '#ffd700'} />
              <span>Sign In with Email</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container Area */}
      <div style={{ width: '100%', maxWidth: '380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {activeTab === 'roles' ? (
          /* ========================================================
             QUICK ROLE ACCESS (INCLUDING SUPER ADMIN)
             ======================================================== */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              textAlign: 'center',
              borderBottom: '1px solid rgba(255, 215, 0, 0.25)',
              paddingBottom: '8px',
              marginBottom: '4px'
            }}>
              <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#ffffff' }}>Easy Login</h2>
              <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '2px' }}>Choose Your Role to Continue</p>
            </div>

            {/* Role 1: User */}
            <button
              onClick={() => handleQuickRole('User', '/home')}
              style={{
                background: 'linear-gradient(90deg, #1f1f25 0%, #151518 100%)',
                border: '1.5px solid rgba(255, 215, 0, 0.35)',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={22} color="#000000" strokeWidth={2.5} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff' }}>User</div>
                  <div style={{ fontSize: '11px', color: '#a0a0a0' }}>Find Offers & Deals</div>
                </div>
              </div>
              <ArrowRight size={17} color="#ffd700" />
            </button>

            {/* Role 2: Business */}
            <button
              onClick={() => handleQuickRole('Business', '/business')}
              style={{
                background: 'linear-gradient(90deg, #1f1f25 0%, #151518 100%)',
                border: '1.5px solid rgba(255, 215, 0, 0.35)',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Store size={22} color="#000000" strokeWidth={2.5} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', fontWeight: '900', color: '#ffffff' }}>Business</div>
                  <div style={{ fontSize: '11px', color: '#a0a0a0' }}>Post Your Offer Once a Month</div>
                </div>
              </div>
              <ArrowRight size={17} color="#ffd700" />
            </button>

            {/* Role 3: Area Franchise */}
            <button
              onClick={() => handleQuickRole('Area Franchise', '/franchise')}
              style={{
                background: 'linear-gradient(90deg, #261f0e 0%, #171510 100%)',
                border: '1.5px solid #ffd700',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(255, 215, 0, 0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Briefcase size={22} color="#000000" strokeWidth={2.5} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', fontWeight: '950', color: '#ffd700' }}>Area Franchise</div>
                  <div style={{ fontSize: '11px', color: '#f0f0f0' }}>Manage Zone & Earn ₹1.25L+</div>
                </div>
              </div>
              <ArrowRight size={17} color="#ffd700" />
            </button>

            {/* Role 4: MASTER SUPER ADMIN */}
            <button
              onClick={() => handleQuickRole('Admin', '/admin')}
              style={{
                background: 'linear-gradient(90deg, #240b0b 0%, #1a0e0e 100%)',
                border: '2px solid #ef4444',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(239, 68, 68, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 10px rgba(239, 68, 68, 0.7)'
                }}>
                  <ShieldAlert size={22} color="#ffffff" strokeWidth={2.5} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', fontWeight: '950', color: '#ef4444' }}>Master Super Admin</div>
                  <div style={{ fontSize: '11px', color: '#fca5a5' }}>Control Users, Shops & Franchises</div>
                </div>
              </div>
              <ArrowRight size={17} color="#ef4444" />
            </button>

            {/* Divider OR */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '2px 0',
              color: '#666',
              fontSize: '11px',
              fontWeight: '800'
            }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />
              <span>OR</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.12)' }} />
            </div>

            {/* Subscribe Banner */}
            <button
              onClick={() => navigate('/subscribe')}
              style={{
                background: 'linear-gradient(135deg, #1c170a 0%, #2b220a 100%)',
                border: '1.5px solid #d4af37',
                borderRadius: '16px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Crown size={20} color="#ffd700" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '900', color: '#ffd700' }}>
                    Subscribe
                  </div>
                  <div style={{ fontSize: '10px', color: '#b0b0b0' }}>
                    ₹9 / Month &gt; (Ad-Free)
                  </div>
                </div>
              </div>
              <span style={{
                fontSize: '11px',
                fontWeight: '900',
                backgroundColor: '#ffd700',
                color: '#000',
                padding: '4px 10px',
                borderRadius: '10px'
              }}>
                Explore
              </span>
            </button>
          </div>
        ) : (
          /* CREDENTIALS SIGN IN MODE */
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Role selector pill */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', fontWeight: '800', marginBottom: '8px' }}>
                Login As Role
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {[
                  { name: 'User', icon: User },
                  { name: 'Business', icon: Store },
                  { name: 'Area Franchise', label: 'Franchise', icon: Briefcase },
                  { name: 'Admin', label: 'Admin', icon: ShieldAlert }
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedRole === item.name;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedRole(item.name)}
                      style={{
                        padding: '10px 4px',
                        borderRadius: '14px',
                        border: isSelected ? '1.5px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.1)',
                        background: isSelected
                          ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(212, 175, 55, 0.08) 100%)'
                          : '#141418',
                        color: isSelected ? '#ffd700' : '#888892',
                        fontSize: '11px',
                        fontWeight: isSelected ? '900' : '600',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Icon size={16} color={isSelected ? '#ffd700' : '#777'} />
                      <span>{item.label || item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '6px' }}>
                Email Address or Phone
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Mail size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type="email"
                  className="form-input"
                  placeholder="admin@offersnow.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    backgroundColor: '#131317',
                    border: '1.5px solid rgba(255, 215, 0, 0.3)',
                    borderRadius: '14px',
                    padding: '13px 14px 13px 44px',
                    color: '#ffffff',
                    fontSize: '14px'
                  }}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '12px', color: '#b0b0b8' }}>Password</label>
                <span
                  onClick={() => showToast('Password reset link sent to registered email!', 'info')}
                  style={{ fontSize: '11px', color: '#ffd700', cursor: 'pointer', fontWeight: '700' }}
                >
                  Forgot Password?
                </span>
              </div>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Lock size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    backgroundColor: '#131317',
                    border: '1.5px solid rgba(255, 215, 0, 0.3)',
                    borderRadius: '14px',
                    padding: '13px 42px 13px 44px',
                    color: '#ffffff',
                    fontSize: '14px'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    background: 'none',
                    border: 'none',
                    color: '#888',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ color: '#ef4444', fontSize: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '8px 12px', borderRadius: '8px' }}>
                {error}
              </div>
            )}

            {/* Submit Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                marginTop: '6px',
                background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
                color: '#000000',
                border: 'none',
                borderRadius: '28px',
                padding: '15px',
                fontSize: '15px',
                fontWeight: '950',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 6px 22px rgba(244, 180, 0, 0.5)'
              }}
            >
              <span>{isLoading ? 'Signing In...' : `Sign In as ${selectedRole}`}</span>
              <ArrowRight size={17} strokeWidth={2.5} />
            </button>
          </form>
        )}

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <span style={{ fontSize: '13px', color: '#999' }}>
            Don't have an account?{' '}
          </span>
          <Link
            to="/signup"
            style={{
              color: '#ffd700',
              fontWeight: '800',
              fontSize: '13px',
              textDecoration: 'none'
            }}
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontSize: '11px', color: '#777' }}>
          Powered by <strong style={{ color: '#ffd700' }}>Offers NOW</strong>
        </p>
      </div>
    </div>
  );
}
