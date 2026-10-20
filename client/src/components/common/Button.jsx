import Spinner from './Spinner';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
    secondary:
      'bg-white text-text border-2 border-border hover:border-primary hover:text-primary focus:ring-primary',
    ghost:
      'bg-transparent text-text-secondary hover:bg-gray-100 focus:ring-gray-300',
    danger:
      'bg-error text-white hover:bg-red-600 focus:ring-red-500 shadow-lg shadow-red-500/25',
    outline:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3 text-base gap-2.5',
    xl: 'px-10 py-4 text-lg gap-3',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading && <Spinner size="sm" />}
      {children}
    </button>
  );
};

export default Button;
