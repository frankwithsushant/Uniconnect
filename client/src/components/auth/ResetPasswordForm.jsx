import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import Logo from '../common/Logo';
import Input from '../common/Input';
import Button from '../common/Button';
import { HiOutlineLockClosed } from 'react-icons/hi';
import toast from 'react-hot-toast';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Must be at least 6 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
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
    try {
      const res = await authService.resetPassword(token, formData);
      toast.success(res.data.message);
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Reset failed. Link may be expired.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-block mb-8">
          <Logo size="md" />
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-text mb-2">Reset Password</h1>
          <p className="text-text-secondary">Enter your new password below.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="password"
            label="New Password"
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
            label="Confirm New Password"
            type="password"
            placeholder="Re-enter password"
            icon={HiOutlineLockClosed}
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required
          />
          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            Reset Password
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-text-secondary">
          <Link to="/login" className="text-primary font-semibold hover:text-primary-dark">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
