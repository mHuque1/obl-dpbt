interface StarRatingProps {
  rating: number;
  maxRating?: number;
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
  count?: number;
}

export default function StarRating({ 
  rating, 
  maxRating = 5, 
  showNumber = true, 
  size = 'md',
  count 
}: StarRatingProps) {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => {
          const filled = i < Math.floor(rating);
          const partial = i === Math.floor(rating) && rating % 1 !== 0;
          
          return (
            <span
              key={i}
              className={`${sizes[size]} ${
                filled ? 'text-amarillo-estrellas' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          );
        })}
      </div>
      {showNumber && (
        <span className={`font-medium text-gray-700 ${sizes[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span className={`text-gray-500 ${sizes[size]}`}>
          ({count})
        </span>
      )}
    </div>
  );
}