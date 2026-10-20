import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import { HiOutlineHome, HiOutlineLogout, HiOutlineSparkles, HiOutlineUserAdd } from 'react-icons/hi';

const HomePage = () => {
  const { user, logout, isGuest } = useAuth();

  return (
    <div className="min-h-screen bg-bg">
      {/* Guest mode banner */}
      {isGuest && (
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <HiOutlineSparkles size={16} />
              <span>You&apos;re exploring UniConnect in <strong>Demo Mode</strong></span>
            </div>
            <Link to="/register" className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-semibold transition-colors backdrop-blur-sm">
              <HiOutlineUserAdd size={14} />
              Create Account
            </Link>
          </div>
        </div>
      )}

      {/* Top nav placeholder */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm ${isGuest ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-primary to-primary-dark'}`}>
                {user?.fullName?.charAt(0) || 'U'}
              </div>
              <div className="hidden sm:block">
                <span className="text-sm font-medium text-text">{user?.fullName || 'User'}</span>
                {isGuest && <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Guest</span>}
              </div>
            </div>
            <button onClick={logout} className="p-2 text-text-secondary hover:text-error transition-colors cursor-pointer" title={isGuest ? 'Exit Demo' : 'Logout'}>
              <HiOutlineLogout size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HiOutlineHome className="text-primary" size={36} />
          </div>
          <h1 className="text-2xl font-extrabold text-text mb-3">
            {isGuest
              ? 'Welcome to UniConnect! 👋'
              : `Welcome to UniConnect, ${user?.fullName?.split(' ')[0] || 'Student'}! 🎓`}
          </h1>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            {isGuest
              ? 'You\'re exploring as a guest. Sign up to unlock all features — connect with peers, share resources, and join your university community.'
              : 'Phase 1 is complete! Your authentication is working. The home feed with posts, likes, and comments will be built in Phase 2.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {isGuest ? (
              <>
                <Link to="/register">
                  <Button variant="primary" size="md">
                    <HiOutlineUserAdd size={16} />
                    Create Your Account
                  </Button>
                </Link>
                <Button variant="secondary" size="md" onClick={logout}>Exit Demo</Button>
              </>
            ) : (
              <>
                {!user?.isProfileComplete && (
                  <Link to="/profile-setup">
                    <Button variant="primary" size="md">Complete Your Profile</Button>
                  </Link>
                )}
                <Button variant="secondary" size="md" onClick={logout}>Log Out</Button>
              </>
            )}
          </div>
        </div>

        {/* Demo feature cards for guest users */}
        {isGuest && (
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              { icon: '💬', title: 'Real-time Chat', desc: 'Message classmates and study groups instantly' },
              { icon: '📚', title: 'Resource Sharing', desc: 'Share and discover notes, slides, and more' },
              { icon: '🤝', title: 'Campus Network', desc: 'Connect with students across departments' },
              { icon: '🎯', title: 'Opportunities', desc: 'Find internships, events, and hackathons' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-border p-5 text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-2xl mb-2 block">{icon}</span>
                <h3 className="font-bold text-text text-sm mb-1">{title}</h3>
                <p className="text-xs text-text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;

