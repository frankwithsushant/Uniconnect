import { HiAcademicCap } from 'react-icons/hi';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 20, text: 'text-lg' },
    md: { icon: 26, text: 'text-xl' },
    lg: { icon: 34, text: 'text-2xl' },
    xl: { icon: 42, text: 'text-3xl' },
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-2 shadow-lg shadow-primary/25">
          <HiAcademicCap size={sizes[size].icon} className="text-white" />
        </div>
      </div>
      {showText && (
        <span className={`font-extrabold tracking-tight ${sizes[size].text}`}>
          <span className="text-primary">Uni</span>
          <span className="text-text">Connect</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
