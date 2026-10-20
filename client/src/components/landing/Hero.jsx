import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import {
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineBookOpen,
  HiOutlineGlobe,
} from 'react-icons/hi';

const Hero = () => {
  const navigate = useNavigate();
  const { loginAsGuest } = useAuth();

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate('/home');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-primary-50 via-white to-blue-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #5B82F7 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-semibold text-sm">For University Students</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Connect, Learn &{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Grow Together
              </span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              Join the ultimate university social network. Connect with peers, share resources, 
              discover opportunities, and build your student network — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Join UniConnect — It&apos;s Free
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" size="lg">
                  Log In
                </Button>
              </Link>
              <Button variant="ghost" size="lg" onClick={handleGuestLogin} className="text-text-secondary hover:text-primary">
                <HiOutlineGlobe size={18} />
                Try Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-text">10K+</p>
                <p className="text-sm text-text-secondary">Students</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold text-text">500+</p>
                <p className="text-sm text-text-secondary">Universities</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-bold text-text">50K+</p>
                <p className="text-sm text-text-secondary">Connections</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main card */}
              <div className="w-[420px] bg-white rounded-3xl shadow-2xl shadow-primary/10 p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                    <HiOutlineUserGroup className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-text">Student Network</h3>
                    <p className="text-sm text-text-secondary">Connect with 10,000+ peers</p>
                  </div>
                </div>
                
                {/* Fake feed items */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-bg rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AK
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text">Aarav Kumar</p>
                      <p className="text-xs text-text-secondary">Just joined UniConnect! 🎓</p>
                    </div>
                    <span className="text-xs text-text-muted">2m</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-bg rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      SP
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text">Sarah Patel</p>
                      <p className="text-xs text-text-secondary">Shared notes for Data Structures 📚</p>
                    </div>
                    <span className="text-xs text-text-muted">5m</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-bg rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      RJ
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text">Rahul Joshi</p>
                      <p className="text-xs text-text-secondary">New hackathon opportunity! 🚀</p>
                    </div>
                    <span className="text-xs text-text-muted">12m</span>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float z-20">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <HiOutlineChatAlt2 className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text">Real-time Chat</p>
                  <p className="text-xs text-success">Online</p>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <HiOutlineBookOpen className="text-violet-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text">Resources</p>
                  <p className="text-xs text-text-secondary">1.2K shared</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float z-20" style={{ animationDelay: '3s' }}>
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <HiOutlineGlobe className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text">Communities</p>
                  <p className="text-xs text-text-secondary">200+ active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
