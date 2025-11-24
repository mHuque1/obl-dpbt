interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '',
  fullWidth = false,
  type = 'button'
}: ButtonProps) {
  const variants = {
    primary: 'bg-verde-principal hover:bg-verde-hover text-white',
    secondary: 'bg-naranja-cta hover:bg-naranja-claro text-white',
    outline: 'bg-white border-2 border-verde-principal text-verde-principal hover:bg-verde-claro'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold text-base
        transition-all duration-200
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}