import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '140px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(77,124,254,0.08) 0%, rgba(123,161,255,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--col-wide)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Tag pill */}
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: 999,
            border: '1px solid var(--hairline)',
            fontFamily: 'var(--sans)',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: 'var(--cream-3)',
            marginBottom: 40,
          }}
        >
          Spatial Memory · Evidence-Based · For South Asian Students
        </span>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(56px, 9vw, 128px)',
            lineHeight: 0.96,
            fontWeight: 400,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ fontStyle: 'italic', color: 'var(--cream)', display: 'block' }}>
            A memory palace
          </span>
          <span
            style={{
              display: 'block',
              color: 'var(--cream-3)',
              fontSize: '0.7em',
              fontStyle: 'normal',
            }}
          >
            for the students
          </span>
          <span style={{ fontStyle: 'italic', color: 'var(--cream)', display: 'block' }}>
            who need it most.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            lineHeight: 1.5,
            color: 'var(--cream-2)',
            maxWidth: '38ch',
            marginTop: 36,
            marginBottom: 40,
          }}
        >
          Project Loci helps MDCAT and CSS aspirants encode thousands of facts
          using the spaces they already know, a bedroom, a university corridor,
          the route to school, turning passive re-reading into navigable spatial
          memory.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link
            to="/app"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 28px',
              borderRadius: 999,
              background: 'var(--cream)',
              color: 'var(--ink)',
              fontFamily: 'var(--sans)',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            Open the app
          </Link>
          <a
            href="#method"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 28px',
              borderRadius: 999,
              background: 'transparent',
              color: 'var(--cream)',
              fontFamily: 'var(--sans)',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid var(--hairline-strong)',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.75)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            Read the research
          </a>
        </div>

        {/* Bottom meta */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            width: '100%',
            marginTop: 72,
            paddingTop: 32,
            borderTop: '1px solid var(--hairline)',
          }}
        >
          {[
            { label: 'Project', value: 'Loci, v2 · May 2026' },
            { label: 'Built for', value: 'MDCAT & CSS aspirants, ages 17–24' },
            { label: 'Method', value: 'Method of Loci · LLM-assisted encoding' },
          ].map((item) => (
            <div key={item.label}>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-3)',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 15,
                  color: 'var(--cream-2)',
                  lineHeight: 1.4,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
