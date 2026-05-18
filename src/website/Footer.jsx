import React from 'react';
import Logo from '../shared/Logo';

const PROJECT_LINKS = [
  { label: 'Introduction', href: '#abstract' },
  { label: 'The Problem', href: '#problem' },
  { label: 'The Method', href: '#method' },
  { label: 'The App', href: '/app' },
];

const RESEARCH_LINKS = [
  { label: 'Theoretical Backing', href: '#research' },
  { label: 'Feasibility', href: '#feasibility' },
  { label: 'Reflections', href: '#reflections' },
];

const TEAM = [
  'Muhammad Shahbaz Aziz Khan',
  'Amal Aamir',
  'Abdullah Sajid',
  'Abdullah Lodhi',
  'Hamael Aamir',
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink-2)',
        borderTop: '1px solid var(--hairline)',
        padding: '64px 32px 0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--col-wide)',
          margin: '0 auto',
        }}
      >
        {/* 4-column grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: 40,
            paddingBottom: 48,
          }}
        >
          {/* Column 1: Logo + tagline */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Logo size="md" />
            </div>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 15,
                lineHeight: 1.5,
                color: 'var(--cream-3)',
                margin: 0,
                maxWidth: '28ch',
              }}
            >
              A memory palace, for the students who need it most.
            </p>
          </div>

          {/* Column 2: Project */}
          <div>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Project
            </span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {PROJECT_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 14,
                      color: 'var(--cream-3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--cream)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--cream-3)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Research */}
          <div>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Research
            </span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {RESEARCH_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 14,
                      color: 'var(--cream-3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--cream)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--cream-3)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Team */}
          <div>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Team
            </span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {TEAM.map((name) => (
                <li key={name} style={{ marginBottom: 10 }}>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 14,
                      color: 'var(--cream-3)',
                    }}
                  >
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--hairline)',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              color: 'var(--cream-3)',
            }}
          >
            2026 · Project Loci
          </span>
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 13,
              color: 'var(--cream-3)',
            }}
          >
            Quod cum memoria proverbium, locus, geminata est.
          </span>
        </div>
      </div>

      {/* Responsive footer */}
      <style>{`
        @media (max-width: 720px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
