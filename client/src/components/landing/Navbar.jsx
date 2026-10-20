import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import Button from '../common/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/">
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-text-secondary hover:text-primary transition-colors font-medium text-sm">
            Features
          </a>
          <a href="#how-it-works" className="text-text-secondary hover:text-primary transition-colors font-medium text-sm">
            How It Works
          </a>
          <a href="#community" className="text-text-secondary hover:text-primary transition-colors font-medium text-sm">
            Community
          </a>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">Join UniConnect</Button>
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block py-2 text-text-secondary hover:text-primary font-medium">
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block py-2 text-text-secondary hover:text-primary font-medium">
              How It Works
            </a>
            <a href="#community" onClick={() => setMobileOpen(false)} className="block py-2 text-text-secondary hover:text-primary font-medium">
              Community
            </a>
            <div className="pt-3 border-t border-border space-y-2">
              <Link to="/login" className="block">
                <Button variant="secondary" fullWidth size="md">Log In</Button>
              </Link>
              <Link to="/register" className="block">
                <Button variant="primary" fullWidth size="md">Join UniConnect</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
