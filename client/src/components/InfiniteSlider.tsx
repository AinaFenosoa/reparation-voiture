import React, {type ReactNode } from 'react';
import './InfiniteSlider.css';

interface InfiniteSliderProps {
  children: ReactNode[];
  width?: string;    // Ex: "200px"
  height?: string;   // Ex: "200px"
  duration?: string; // Ex: "10s" ou "15s"
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  width = '200px',
  height = '200px',
  duration = '10s',
}) => {
  const quantity = React.Children.count(children);

  return (
    <div
      className="slider"
      style={
        {
          '--width': width,
          '--height': height,
          '--quantity': quantity,
          '--duration': duration,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="item"
            style={{ '--position': index + 1 } as React.CSSProperties}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};