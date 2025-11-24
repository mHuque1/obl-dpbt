interface BadgeProps {
  children: React.ReactNode;
  variant?: 'verified' | 'transparency' | 'certification';
  className?: string;
}

export default function Badge({ children, variant = 'verified', className = '' }: BadgeProps) {
  const variants = {
    verified: 'bg-verde-claro text-verde-principal border-verde-principal',
    transparency: 'bg-verde-claro text-verde-principal border-verde-principal',
    certification: 'bg-verde-claro text-verde-principal border-verde-principal'
  };

  return (
    <span 
      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}