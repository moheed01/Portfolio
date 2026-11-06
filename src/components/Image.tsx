import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export function Image({ src, alt, className = '', fallbackText }: ImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center font-heading font-bold text-[#8B1E3F] ${className}`}
      >
        {fallbackText ?? alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setErrored(true)}
    />
  );
}