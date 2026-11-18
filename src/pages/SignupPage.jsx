import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import AppLogo from '../components/AppLogo';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Store,
  Briefcase,
  ArrowRight,
  Building
} from 'lucide-react';

export default function SignupPage() {
  const navigate = useNavigate();
  const { signupUser } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('User'); // 'User' | 'Business' | 'Area Franchise'
  const [city, setCity] = useState('Hyderabad');
  const [businessName, setBusinessName] = useState('');
  const [franchiseZone, setFranchiseZone] = useState('Kukatpally & Ameerpet Zone');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill all mandatory fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreed) {
      setError('Please agree to terms & conditions.');
      return;
    }

    setError('');
    setIsLoading(true);

    setTimeout(() => {
      signupUser({
        name: role === 'Business' && businessName ? `${fullName} (${businessName})` : fullName,
        email,
        phone,
        role,
        city
      });
      setIsLoading(false);

      if (role === 'Business') {
        navigate('/business');
      } else if (role === 'Area Franchise') {
        navigate('/franchise');
      } else {
        navigate('/home');
      }
    }, 700);
  };

  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 18px 30px',
      background: 'radial-gradient(circle at 50% 12%, #221c0b 0%, #0c0c0e 85%)',
      position: 'relative'
    }}>
      <div className="gold-burst" />

      {/* Header with real logo.png */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '6px',
        position: 'relative',
        zIndex: 1
      }}>
        <AppLogo size={74} showLiveBadge={true} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
          <span style={{ fontSize: '22px' }}>📢</span>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '950',
            fontStyle: 'italic',
            letterSpacing: '0.5px',
            color: '#ffffff'
          }}>
            Offers <span style={{ color: '#ffd700' }}>NOW</span>
          </h1>
        </div>

        <p style={{
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.8px',
          color: '#ffd700',
          textTransform: 'uppercase',
          marginBottom: '14px'
        }}>
          Create Your Account
        </p>
      </div>

      {/* Form Container */}
      <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Role Picker */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', fontWeight: '800', marginBottom: '6px' }}>
              Choose Account Type
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              {[
                { name: 'User', icon: User, desc: 'Find Deals' },
                { name: 'Business', icon: Store, desc: 'Post Offers' },
                { name: 'Area Franchise', icon: Briefcase, desc: 'Manage Zone' }
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = role === item.name;
                return (
                  <div
                    key={item.name}
                    onClick={() => setRole(item.name)}
                    style={{
                      padding: '10px 6px',
                      borderRadius: '12px',
                      border: isSelected ? '1.5px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: isSelected ? 'rgba(255, 215, 0, 0.15)' : '#141417',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    <Icon size={18} color={isSelected ? '#ffd700' : '#888'} style={{ margin: '0 auto 4px' }} />
                    <div style={{ fontSize: '11px', fontWeight: '800', color: isSelected ? '#ffd700' : '#ddd' }}>
                      {item.name === 'Area Franchise' ? 'Franchise' : item.name}
                    </div>
                    <div style={{ fontSize: '9px', color: '#777' }}>
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '4px' }}>
              Full Name
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <User size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
              <input
                type="text"
                className="form-input"
                placeholder="Ramesh Kumar"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Conditional Business Name */}
          {role === 'Business' && (
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', marginBottom: '4px' }}>
                Store / Business Name
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Store size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Sri Sai Mobiles & Electronics"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Conditional Franchise Area Zone */}
          {role === 'Area Franchise' && (
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#ffd700', marginBottom: '4px' }}>
                Requested Area / Zone
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Building size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Kukatpally & Ameerpet Zone"
                  value={franchiseZone}
                  onChange={(e) => setFranchiseZone(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Email & Phone grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '4px' }}>
                Email
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Mail size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                <input
                  type="email"
                  className="form-input"
                  placeholder="user@example.com"
                  style={{ paddingLeft: '34px', fontSize: '12px' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '4px' }}>
                Phone No.
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Phone size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+91 98765 00000"
                  style={{ paddingLeft: '34px', fontSize: '12px' }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* City Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '4px' }}>
              City / Territory
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <MapPin size={16} color="#ffd700" style={{ position: 'absolute', left: '14px' }} />
              <select
                className="form-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ appearance: 'none' }}
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </div>

          {/* Passwords */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '4px' }}>
                Password
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Lock size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  style={{ paddingLeft: '34px', fontSize: '12px' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: '#b0b0b8', marginBottom: '4px' }}>
                Confirm
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Lock size={15} color="#ffd700" style={{ position: 'absolute', left: '12px' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  style={{ paddingLeft: '34px', fontSize: '12px' }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ accentColor: '#ffd700', width: '16px', height: '16px' }}
            />
            <label htmlFor="terms" style={{ fontSize: '11px', color: '#aaa', cursor: 'pointer' }}>
              I agree to Offers NOW Privacy Policy and User Terms.
            </label>
          </div>

          {error && (
            <div style={{ color: '#ef4444', fontSize: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '8px 12px', borderRadius: '8px' }}>
              {error}
            </div>
          )}

          {/* Submit Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              marginTop: '4px',
              background: 'linear-gradient(180deg, #ffde59 0%, #f4b400 100%)',
              color: '#000000',
              border: 'none',
              borderRadius: '26px',
              padding: '13px',
              fontSize: '15px',
              fontWeight: '900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(244, 180, 0, 0.45)'
            }}
          >
            <span>{isLoading ? 'Creating Account...' : `Register as ${role}`}</span>
            <ArrowRight size={16} />
          </button>

          {/* Already have an account */}
          <div style={{ textAlign: 'center', marginTop: '6px' }}>
            <span style={{ fontSize: '13px', color: '#999' }}>
              Already registered?{' '}
            </span>
            <Link
              to="/login"
              style={{
                color: '#ffd700',
                fontWeight: '800',
                fontSize: '13px',
                textDecoration: 'none'
              }}
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <p style={{ fontSize: '11px', color: '#777' }}>
          Offers NOW Platform • Connect • Buy • Save
        </p>
      </div>
    </div>
  );
}
