import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { CONCEPTS } from '../../data/concepts';
import Button from '../../shared/Button';

const PIPELINE = [
  { label: 'Text Input', icon: 'doc' },
  { label: 'Claude API', icon: 'api' },
  { label: 'Concept JSON', icon: 'json' },
  { label: 'Metaphors', icon: 'bulb' },
  { label: '3D Objects', icon: 'cube' },
];

function PipelineIcon({ type, active }) {
  const color = active ? '#4d7cfe' : '#3a4260';
  switch (type) {
    case 'doc':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="4" y="2" width="12" height="16" rx="2" stroke={color} strokeWidth="1.5" />
          <line x1="7" y1="7" x2="13" y2="7" stroke={color} strokeWidth="1" />
          <line x1="7" y1="10" x2="13" y2="10" stroke={color} strokeWidth="1" />
          <line x1="7" y1="13" x2="11" y2="13" stroke={color} strokeWidth="1" />
        </svg>
      );
    case 'api':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.5" />
          <path d="M7 10h6M10 7v6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'json':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 4C5 4 4 5 4 6v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 1 1 2 2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 4c1 0 2 1 2 2v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 1-1 2-2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'bulb':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3a5 5 0 00-2 9.58V15h4v-2.42A5 5 0 0010 3z" stroke={color} strokeWidth="1.5" />
          <line x1="8" y1="17" x2="12" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'cube':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2l7 4v8l-7 4-7-4V6l7-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 10l7-4M10 10v8M10 10L3 6" stroke={color} strokeWidth="1" opacity="0.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Processing() {
  const { goTo } = useApp();
  const [phase, setPhase] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const [allRevealed, setAllRevealed] = useState(false);
  const timerRef = useRef(null);

  // Phase progression
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Concept reveal after phase 2
  useEffect(() => {
    if (phase < 2) return;
    let idx = 0;
    timerRef.current = setInterval(() => {
      idx++;
      setRevealedCount(idx);
      if (idx >= CONCEPTS.length) {
        clearInterval(timerRef.current);
        setAllRevealed(true);
      }
    }, 180);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  const phaseText =
    phase === 0
      ? 'Sending to Claude API...'
      : phase === 1
      ? 'Extracting concepts...'
      : `${CONCEPTS.length} concepts identified`;

  // Pipeline stage active count
  const activeStages =
    phase === 0 ? 1 : phase === 1 ? 3 : 5;

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '80px 24px 48px',
        background: '#0a0d18',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Tag */}
      <span
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 11,
          fontWeight: 600,
          color: '#4d7cfe',
          textTransform: 'uppercase',
          letterSpacing: 2,
          background: 'rgba(77,124,254,0.1)',
          padding: '4px 14px',
          borderRadius: 20,
          marginBottom: 24,
        }}
      >
        Step 2 - LLM Extraction
      </span>

      {/* Phase text */}
      <h2
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 24,
          fontWeight: 700,
          color: phase === 2 ? '#ffa478' : '#e8edf5',
          margin: '0 0 8px',
          transition: 'color 0.3s',
        }}
      >
        {phaseText}
      </h2>

      {/* Spinner or checkmark */}
      {phase < 2 && (
        <div
          style={{
            width: 32,
            height: 32,
            border: '3px solid #252b42',
            borderTopColor: '#4d7cfe',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '8px 0 24px',
          }}
        />
      )}

      {/* Inline keyframes */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes conceptFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Pipeline visualization */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          marginBottom: 36,
          marginTop: phase >= 2 ? 16 : 0,
        }}
      >
        {PIPELINE.map((stage, i) => {
          const active = i < activeStages;
          return (
            <React.Fragment key={stage.label}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: active
                      ? 'rgba(77,124,254,0.12)'
                      : '#181c2d',
                    border: active
                      ? '1px solid rgba(77,124,254,0.3)'
                      : '1px solid #252b42',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <PipelineIcon type={stage.icon} active={active} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 10,
                    fontWeight: 500,
                    color: active ? '#7889a8' : '#3a4260',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.4s',
                  }}
                >
                  {stage.label}
                </span>
              </div>
              {i < PIPELINE.length - 1 && (
                <div
                  style={{
                    width: 32,
                    height: 2,
                    background: i < activeStages - 1 ? '#4d7cfe' : '#252b42',
                    marginBottom: 18,
                    transition: 'background 0.4s',
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Concepts list */}
      {phase >= 2 && (
        <div
          style={{
            width: '100%',
            maxWidth: 580,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {CONCEPTS.slice(0, revealedCount).map((c, i) => (
            <div
              key={c.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                padding: '14px 18px',
                background: '#121622',
                border: '1px solid #252b42',
                borderRadius: 10,
                animation: 'conceptFadeIn 0.3s ease forwards',
              }}
            >
              {/* Colored dot */}
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: c.color,
                  flexShrink: 0,
                  marginTop: 5,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--heading)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#e8edf5',
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 10,
                      fontWeight: 600,
                      color: '#7889a8',
                      background: '#1f243a',
                      padding: '1px 8px',
                      borderRadius: 8,
                    }}
                  >
                    #{i + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 13,
                    color: '#7889a8',
                    margin: '0 0 4px',
                    lineHeight: 1.5,
                  }}
                >
                  {c.definition}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 12,
                    color: '#3a4260',
                    fontStyle: 'italic',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {c.metaphor}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Continue button */}
      {allRevealed && (
        <div style={{ marginTop: 28 }}>
          <Button variant="primary" size="lg" onClick={() => goTo('roomselect')}>
            Choose Your Space
          </Button>
        </div>
      )}
    </div>
  );
}
