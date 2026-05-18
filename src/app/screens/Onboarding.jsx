import React, { useState, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { QUESTIONS } from '../../data/questions';

export default function Onboarding() {
  const { goTo, setProfile } = useApp();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  const total = QUESTIONS.length;
  const q = QUESTIONS[current];
  const pct = Math.round(((current) / total) * 100);

  const handleSelect = useCallback(
    (optIdx) => {
      if (selected !== null) return; // prevent double-click
      setSelected(optIdx);
      const next = [...answers, { qId: q.id, answer: optIdx }];
      setAnswers(next);

      setTimeout(() => {
        setSelected(null);
        if (current + 1 >= total) {
          setProfile('verbal-primary');
          goTo('profile');
        } else {
          setCurrent((c) => c + 1);
        }
      }, 280);
    },
    [selected, answers, current, total, q, goTo, setProfile],
  );

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
        }}
      >
        Cognitive Profile Assessment
      </span>

      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 14,
          color: '#7889a8',
          margin: '10px 0 28px',
        }}
      >
        {total}-item screening, approx. 2 minutes
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          maxWidth: 520,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              color: '#7889a8',
            }}
          >
            Question {current + 1} of {total}
          </span>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              color: '#4d7cfe',
              fontWeight: 600,
            }}
          >
            {pct}%
          </span>
        </div>
        <div
          style={{
            height: 4,
            borderRadius: 2,
            background: '#1f243a',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              background: '#4d7cfe',
              borderRadius: 2,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      {/* Question card */}
      <div
        style={{
          width: '100%',
          maxWidth: 520,
          background: '#121622',
          border: '1px solid #252b42',
          borderRadius: 14,
          padding: '32px 28px',
        }}
      >
        {/* Type tag */}
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            color: q.type === 'spatial' ? '#7ba1ff' : '#ffa478',
            background:
              q.type === 'spatial'
                ? 'rgba(123,161,255,0.1)'
                : 'rgba(255,164,120,0.1)',
            padding: '3px 10px',
            borderRadius: 12,
          }}
        >
          {q.type === 'spatial' ? 'Spatial' : 'Visual'}
        </span>

        {/* Question text */}
        <h2
          style={{
            fontFamily: 'var(--heading)',
            fontSize: 22,
            fontWeight: 600,
            color: '#e8edf5',
            margin: '16px 0 24px',
            lineHeight: 1.4,
          }}
        >
          {q.q}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.opts.map((opt, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 18px',
                  borderRadius: 10,
                  border: isSelected
                    ? '1px solid #4d7cfe'
                    : '1px solid #252b42',
                  background: isSelected
                    ? 'rgba(77,124,254,0.1)'
                    : '#181c2d',
                  cursor: selected !== null ? 'default' : 'pointer',
                  transition: 'all 0.15s ease',
                  outline: 'none',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: isSelected
                      ? '2px solid #4d7cfe'
                      : '2px solid #2f3656',
                    background: isSelected
                      ? '#4d7cfe'
                      : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontFamily: 'var(--sans)',
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 14,
                    color: isSelected ? '#e8edf5' : '#7889a8',
                    lineHeight: 1.5,
                  }}
                >
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
