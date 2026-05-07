import React from 'react';

interface SafeImageProps extends React.ComponentPropsWithoutRef<'img'> {
  fallbackSrc?: string;
}

export function SafeImage({ src, alt, className, fallbackSrc, ...props }: any) {
  const [error, setError] = React.useState(false);
  const fallback = fallbackSrc || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000";
  
  return (
    <img 
      src={error ? fallback : src} 
      alt={alt} 
      className={className}
      onError={() => !error && setError(true)}
      loading="lazy"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
