import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/authService';
import Logo from '../common/Logo';
import Input from '../common/Input';
import Button from '../common/Button';
import { HiOutlineMail, HiOutlineCheckCircle } from 'react-icons/hi';
import toast from 'react-hot-toast';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setError('Email is required'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Enter a valid email'); return; }
    setError('');
    setLoading(true);
    try {
      await authService.forgotPassword({ email });
      setSent(true);
      toast.success('If an account exists, a reset link has been sent.');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg px-4">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HiOutlineCheckCircle className="text-success" size={40} />
          </div>
          <h1 className="text-2xl font-extrabold text-text mb-3">Check Your Email</h1>
          <p className="text-text-secondary mb-8">
            If an account with <strong>{email}</strong> exists, we&apos;ve sent a password reset link. Check your inbox.
          </p>
          <Link to="/login">
            <Button variant="primary" size="lg">Back to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-block mb-8">
          <Logo size="md" />
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-text mb-2">Forgot Password?</h1>
          <p className="text-text-secondary">Enter your email and we&apos;ll send a reset link.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="your@university.edu"
            icon={HiOutlineMail}
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(''); }}
            error={error}
            required
          />
          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            Send Reset Link
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-text-secondary">
          Remember your password?{' '}
          <Link to="/login" className="text-primary font-semibold hover:text-primary-dark">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
