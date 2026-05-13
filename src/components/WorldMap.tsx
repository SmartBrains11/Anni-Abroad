import React from 'react';

export default function WorldMap({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <img 
        src="/images/dotted-world-map-png.webp" 
        alt="World Map" 
        className="w-full h-full object-contain opacity-40"
        style={{
          filter: 'invert(27%) sepia(82%) saturate(3000%) hue-rotate(346deg) brightness(95%) contrast(100%)'
        }}
      />
    </div>
  );
}



