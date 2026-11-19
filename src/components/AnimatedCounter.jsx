import React, { useEffect, useState } from 'react';

/**
 * Animated counter that rolls up smoothly from 0 to the target number.
 */
export default function AnimatedCounter({ 
  value = 0, 
  duration = 1200, 
  prefix = '', 
  suffix = '', 
  formatter = (v) => v.toLocaleString('en-IN') 
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const startVal = 0;
    const targetVal = typeof value === 'number' ? value : parseFloat(value) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo function for smooth luxury deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(startVal + (targetVal - startVal) * easeProgress);
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(targetVal);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {formatter ? formatter(displayValue) : displayValue}
      {suffix}
    </span>
  );
}
