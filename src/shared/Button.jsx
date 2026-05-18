import React, { useState } from 'react';

const variantStyles = {
  primary: {
    background: 'var(--cream, #f5f0e8)',
    color: 'var(--ink, #1a1a1a)',
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--cream, #f5f0e8)',
    border: '1px solid var(--hairline-strong, rgba(245,240,232,0.25))',
  },
  amber: {
    background: 'var(--amber, #ff7849)',
    color: 'var(--ink, #1a1a1a)',
    border: 'none',
  },
  danger: {
    background: 'var(--danger, #e85a2a)',
    color: 'var(--cream, #f5f0e8)',
    border: 'none',
  },
};

const sizeStyles = {
  sm: { padding: '6px 16px', fontSize: 13 },
  md: { padding: '10px 24px', fontSize: 15 },
  lg: { padding: '14px 32px', fontSize: 17 },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  children,
}) {
  const [hovered, setHovered] = useState(false);

  const base = variantStyles[variant] || variantStyles.primary;
  const dims = sizeStyles[size] || sizeStyles.md;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...base,
        ...dims,
        borderRadius: 999,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : hovered ? 0.85 : 1,
        transition: 'opacity 0.2s ease, transform 0.15s ease',
        transform: hovered && !disabled ? 'translateY(-1px)' : 'none',
        outline: 'none',
        lineHeight: 1.2,
        letterSpacing: '0.01em',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      {children}
    </button>
  );
}
