import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../../shared/Button';

const PROFILES = [
  {
    key: 'verbal-primary',
    label: 'Verbal-Primary',
    icon: '🗣️',
    tag: 'Your assigned profile',
    desc: 'You recall best through words, narration, and verbal labels. The palace will overlay rich text descriptions and audio narration cues at each anchor point, reinforcing dual-channel encoding.',
    traits: [
      'Text-first recall',
      'Audio narration active',
      'Rich label overlays',
      'Dual-channel encoding',
    ],
  },
  {
    key: 'spatial-primary',
    label: 'Spatial-Primary',
    icon: '🧭',
    tag: 'Strong navigators',
    desc: 'Spatial learners rely on mental maps and room layouts. The palace emphasizes traversal paths and spatial relationships between concepts.',
    traits: [
      'Navigation-first recall',
      'Minimal label overlays',
      'Traversal emphasis',
      'Place-cell activation',
    ],
  },
  {
    key: 'mixed',
    label: 'Mixed',
    icon: '🔀',
    tag: 'Balanced learners',
    desc: 'Mixed learners benefit from both spatial and verbal channels. The palace uses moderate labels with spatial cues.',
    traits: [
      'Balanced encoding',
      'Moderate labels',
      'Spatial + verbal cues',
      'Adaptive layout',
    ],
  },
];

export default function ProfileResult() {
  const { goTo } = useApp();
  const main = PROFILES[0]; // Always Verbal-Primary for demo

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 24px 48px',
        background: '#0a0d18',
      }}
    >
      {/* Checkmark icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'rgba(77,124,254,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 13l4 4L19 7"
            stroke="#4d7cfe"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 30,
          fontWeight: 700,
          color: '#e8edf5',
          margin: '0 0 8px',
        }}
      >
        Assessment Complete
      </h1>
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 14,
          color: '#7889a8',
          margin: '0 0 32px',
        }}
      >
        Based on your responses, we have identified your cognitive profile.
      </p>

      {/* Main profile card */}
      <div
        style={{
          width: '100%',
          maxWidth: 520,
          background: '#121622',
          border: '2px solid #4d7cfe',
          borderRadius: 16,
          padding: '28px 24px',
          marginBottom: 24,
          position: 'relative',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: -1,
            left: -1,
            right: -1,
            bottom: -1,
            borderRadius: 16,
            background: 'rgba(77,124,254,0.04)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 36 }}>{main.icon}</span>
          <div>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                color: '#4d7cfe',
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                background: 'rgba(77,124,254,0.1)',
                padding: '2px 10px',
                borderRadius: 10,
              }}
            >
              {main.tag}
            </span>
            <h2
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 26,
                fontWeight: 700,
                color: '#e8edf5',
                margin: '6px 0 0',
              }}
            >
              {main.label}
            </h2>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 14,
            color: '#7889a8',
            lineHeight: 1.7,
            margin: '0 0 20px',
          }}
        >
          {main.desc}
        </p>

        {/* Trait pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {main.traits.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                fontWeight: 500,
                color: '#4d7cfe',
                padding: '5px 12px',
                borderRadius: 20,
                background: 'rgba(77,124,254,0.08)',
                border: '1px solid rgba(77,124,254,0.2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Three comparison cards */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          width: '100%',
          maxWidth: 520,
          marginBottom: 36,
        }}
      >
        {PROFILES.map((p) => {
          const isActive = p.key === 'verbal-primary';
          return (
            <div
              key={p.key}
              style={{
                flex: 1,
                padding: '16px 14px',
                borderRadius: 12,
                background: isActive ? 'rgba(77,124,254,0.08)' : '#121622',
                border: isActive
                  ? '1px solid rgba(77,124,254,0.3)'
                  : '1px solid #252b42',
                opacity: isActive ? 1 : 0.5,
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: 22 }}>{p.icon}</span>
              <p
                style={{
                  fontFamily: 'var(--heading)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? '#e8edf5' : '#7889a8',
                  margin: '8px 0 4px',
                }}
              >
                {p.label}
              </p>
              {isActive && (
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#4d7cfe',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Selected
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <Button variant="primary" size="lg" onClick={() => goTo('input')}>
        Start Encoding
      </Button>
    </div>
  );
}
