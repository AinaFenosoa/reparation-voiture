import React from "react";

interface TireSVGProps {
  className?: string;
}

export const TireSVG = React.forwardRef<SVGSVGElement, TireSVGProps>(
  ({ className }, ref) => (
    <svg ref={ref} viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#111" strokeWidth="5" />
      <circle cx="50" cy="50" r="28" fill="#e0e0e0" />
      <circle cx="50" cy="50" r="23" fill="#1a1a1a" />
      <line x1="50" y1="27" x2="50" y2="73" stroke="#e0e0e0" strokeWidth="6" />
      <line x1="27" y1="50" x2="73" y2="50" stroke="#e0e0e0" strokeWidth="6" />
      <line x1="33" y1="33" x2="67" y2="67" stroke="#e0e0e0" strokeWidth="6" />
      <line x1="33" y1="67" x2="67" y2="33" stroke="#e0e0e0" strokeWidth="6" />
      <circle cx="50" cy="50" r="8" fill="#f6b72a" />
    </svg>
  )
);

TireSVG.displayName = "TireSVG";