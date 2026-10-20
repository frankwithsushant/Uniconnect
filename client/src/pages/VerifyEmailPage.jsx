import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { authService } from '../services/authService';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi';

const VerifyEmailPage = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('loading'); // loading, success, error

  useEffect(() => {
    const verify = async () => {
      try {
        await authService.verifyEmail(token);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    };
    if (token) verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md text-center">
        <Link to="/" className="inline-block mb-8">
          <Logo size="md" />
        </Link>

        {status === 'loading' && (
          <div className="space-y-4">
            <Spinner size="lg" className="mx-auto" />
            <p className="text-text-secondary">Verifying your email...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <HiOutlineCheckCircle className="text-success" size={40} />
            </div>
            <h1 className="text-2xl font-extrabold text-text">Email Verified!</h1>
            <p className="text-text-secondary">Your email has been verified successfully. You can now access all features.</p>
            <Link to="/home">
              <Button variant="primary" size="lg">Go to Home</Button>
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-4">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <HiOutlineXCircle className="text-error" size={40} />
            </div>
            <h1 className="text-2xl font-extrabold text-text">Verification Failed</h1>
            <p className="text-text-secondary">The verification link is invalid or has expired.</p>
            <Link to="/login">
              <Button variant="primary" size="lg">Back to Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
