import React from 'react';
import { useApp } from '../../context/AppContext';
import Logo from '../../shared/Logo';
import Button from '../../shared/Button';

const FEATURES = ['Spatial Memory', 'LLM Extraction', 'Active Recall', 'Progress Tracking'];

const PREVIEW_DOTS = [
  { x: 180, y: 120, label: 'Tachycardia', color: '#4d7cfe' },
  { x: 380, y: 80, label: 'Arrhythmia', color: '#ff7849' },
  { x: 560, y: 140, label: 'Bradycardia', color: '#7ba1ff' },
  { x: 450, y: 200, label: 'Fibrillation', color: '#ffa478' },
];

export default function Landing() {
  const { goTo } = useApp();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px 48px',
        background: '#0a0d18',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow behind center */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,124,254,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo mark */}
      <div style={{ marginBottom: 20 }}>
        <Logo size="lg" showWordmark={false} />
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 68,
          fontWeight: 700,
          color: '#e8edf5',
          margin: 0,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}
      >
        Loci
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 16,
          fontWeight: 600,
          color: '#4d7cfe',
          textTransform: 'uppercase',
          letterSpacing: 4,
          margin: '16px 0 0 0',
        }}
      >
        ENCODE &middot; NAVIGATE &middot; RECALL
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 16,
          color: '#7889a8',
          lineHeight: 1.7,
          maxWidth: 520,
          textAlign: 'center',
          margin: '24px 0 0 0',
        }}
      >
        A spatial memory palace for MDCAT &amp; CSS students. Transform study material
        into navigable environments using the Method of Loci, in spaces you already know.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          marginTop: 36,
        }}
      >
        <Button variant="primary" size="lg" onClick={() => goTo('onboarding')}>
          Begin Onboarding
        </Button>
        <Button variant="ghost" size="lg" onClick={() => goTo('input')}>
          Continue Session
        </Button>
      </div>

      {/* Feature pills */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          marginTop: 32,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {FEATURES.map((f) => (
          <span
            key={f}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 500,
              color: '#7889a8',
              padding: '5px 14px',
              borderRadius: 20,
              border: '1px solid #252b42',
              background: 'rgba(18,22,34,0.6)',
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Mini SVG Preview */}
      <div
        style={{
          marginTop: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <svg
          width={700}
          height={260}
          viewBox="0 0 700 260"
          style={{
            border: '1px solid #252b42',
            borderRadius: 12,
            background: 'rgba(18,22,34,0.5)',
          }}
        >
          {/* Perspective grid lines */}
          <defs>
            <radialGradient id="previewGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(77,124,254,0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="700" height="260" fill="url(#previewGlow)" />

          {/* Perspective lines from vanishing point */}
          {[140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540].map((x) => (
            <line
              key={x}
              x1="350"
              y1="30"
              x2={x}
              y2="250"
              stroke="#252b42"
              strokeWidth="0.5"
            />
          ))}
          {/* Horizontal perspective lines */}
          {[70, 110, 150, 190, 230].map((y) => (
            <line
              key={y}
              x1="80"
              y1={y}
              x2="620"
              y2={y}
              stroke="#252b42"
              strokeWidth="0.3"
            />
          ))}

          {/* Concept dots and labels */}
          {PREVIEW_DOTS.map((dot) => (
            <g key={dot.label}>
              <circle
                cx={dot.x}
                cy={dot.y}
                r="18"
                fill={dot.color}
                opacity="0.12"
              />
              <circle
                cx={dot.x}
                cy={dot.y}
                r="5"
                fill={dot.color}
                opacity="0.9"
              />
              <text
                x={dot.x}
                y={dot.y - 26}
                textAnchor="middle"
                fill={dot.color}
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                {dot.label}
              </text>
            </g>
          ))}

          {/* Dashed connection lines */}
          <polyline
            points={PREVIEW_DOTS.map((d) => `${d.x},${d.y}`).join(' ')}
            fill="none"
            stroke="#4d7cfe"
            strokeWidth="1"
            strokeDasharray="6,4"
            opacity="0.3"
          />
        </svg>
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 12,
            color: '#3a4260',
            fontWeight: 500,
          }}
        >
          Memory Palace Preview
        </span>
      </div>
    </div>
  );
}
