import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../common/Logo';
import Input from '../common/Input';
import Button from '../common/Button';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye } from 'react-icons/hi';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loginAsGuest } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const result = await login(formData);
    setLoading(false);
    if (result.success) {
      navigate(result.user?.isProfileComplete ? '/home' : '/profile-setup');
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Decoration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary via-primary-dark to-indigo-700 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="relative text-center px-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">Welcome Back!</h2>
          <p className="text-lg text-white/70 max-w-md mx-auto">
            Log in to reconnect with your university community, check your messages, and stay updated.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {['💬 Chat', '📚 Learn', '🤝 Connect'].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-4 text-white text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-block mb-8">
            <Logo size="md" />
          </Link>
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-text mb-2">Log In</h1>
            <p className="text-text-secondary">Welcome back to UniConnect</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="your@university.edu"
              icon={HiOutlineMail}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={HiOutlineLockClosed}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-primary font-medium hover:text-primary-dark transition-colors">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
              Log In
            </Button>
          </form>

          {/* Guest / Demo divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-text-muted uppercase tracking-wider">or</span>
            </div>
          </div>

          <Button variant="outline" size="lg" fullWidth onClick={handleGuestLogin}>
            <HiOutlineEye size={18} />
            Continue as Guest
          </Button>
          <p className="mt-1.5 text-center text-xs text-text-muted">No account needed — explore the app instantly</p>

          <p className="mt-5 text-center text-sm text-text-secondary">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-primary font-semibold hover:text-primary-dark transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
