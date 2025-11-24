interface ChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  icon?: string;
  className?: string;
}

export default function Chip({ 
  children, 
  selected = false, 
  onClick,
  icon,
  className = '' 
}: ChipProps) {
  return (
    <button
      onClick={onClick}
      style={selected ? { backgroundColor: '#52C41A' } : {}}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200
        ${selected 
          ? 'text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }
        ${className}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}