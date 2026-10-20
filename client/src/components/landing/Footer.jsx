import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The ultimate social networking platform for university students to connect, learn, and grow together.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <HiOutlineMail size={16} />
              <span className="text-sm">hello@uniconnect.com</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {['Home Feed', 'Communities', 'Events', 'Opportunities', 'Marketplace'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Study Materials', 'Notes', 'Previous Papers', 'Tutorials', 'Help Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Privacy Policy', 'Terms of Service', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UniConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/register" className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
              Get Started
            </Link>
            <span className="text-gray-600">·</span>
            <Link to="/login" className="text-gray-400 hover:text-white text-sm transition-colors">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
