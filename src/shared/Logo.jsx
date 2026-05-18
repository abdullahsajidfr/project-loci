import React from 'react';

const sizes = {
  sm: { icon: 17, text: 17 },
  md: { icon: 22, text: 22 },
  lg: { icon: 30, text: 32 },
};

export default function Logo({ size = 'md', showWordmark = true }) {
  const { icon, text } = sizes[size] || sizes.md;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: icon * 0.35,
        userSelect: 'none',
      }}
    >
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="26"
          height="26"
          rx="4"
          stroke="var(--cream, #f5f0e8)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="15"
          cy="15"
          r="3.5"
          fill="var(--cream, #f5f0e8)"
        />
      </svg>

      {showWordmark && (
        <span
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: text,
            fontWeight: 500,
            color: 'var(--cream, #f5f0e8)',
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}
        >
          Loci.
        </span>
      )}
    </span>
  );
}
