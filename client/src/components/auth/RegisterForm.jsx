import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../common/Logo';
import Input from '../common/Input';
import Button from '../common/Button';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineAcademicCap,
} from 'react-icons/hi';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const result = await register(formData);
    setLoading(false);

    if (result.success) {
      navigate('/profile-setup');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-block mb-8">
            <Logo size="md" />
          </Link>
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-text mb-2">Create Your Account</h1>
            <p className="text-text-secondary">Join the university student network</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              icon={HiOutlineUser}
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />
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
              placeholder="At least 6 characters"
              icon={HiOutlineLockClosed}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Re-enter your password"
              icon={HiOutlineLockClosed}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
            <Input
              id="university"
              label="University (Optional)"
              placeholder="Your university name"
              icon={HiOutlineAcademicCap}
              value={formData.university}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              className="mt-6"
            >
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-text-secondary">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:text-primary-dark transition-colors">
              Log In
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Decoration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary via-primary-dark to-indigo-700 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="relative text-center px-12">
          <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <HiOutlineAcademicCap size={48} className="text-white" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Welcome to UniConnect
          </h2>
          <p className="text-lg text-white/70 max-w-md mx-auto">
            Your journey to connecting with fellow university students starts here.
            Join, share, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
