import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/Logo';
import ThemeToggle from '../shared/ThemeToggle';

const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Method', href: '#method' },
  { label: 'Research', href: '#research' },
  { label: 'Feasibility', href: '#feasibility' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--hairline)',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Left: Logo */}
      <a href="#top" style={{ textDecoration: 'none', lineHeight: 0 }}>
        <Logo size="sm" />
      </a>

      {/* Center: Nav links (hidden on mobile) */}
      <div
        className="nav-links-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontFamily: 'var(--sans)',
              color: 'var(--cream-3)',
              textDecoration: 'none',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--cream)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--cream-3)')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: ThemeToggle + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle />
        <Link
          to="/app"
          style={{
            fontSize: 13,
            fontWeight: 500,
            fontFamily: 'var(--sans)',
            padding: '8px 18px',
            background: 'var(--cream)',
            color: 'var(--ink)',
            borderRadius: 999,
            textDecoration: 'none',
            lineHeight: 1.2,
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          Open the app
        </Link>
      </div>

      {/* Mobile hide style */}
      <style>{`
        @media (max-width: 720px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
