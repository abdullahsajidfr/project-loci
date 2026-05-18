import React from 'react';
import { useApp } from '../../context/AppContext';
import Button from '../../shared/Button';

const STAT_CARDS = [
  { label: 'Sessions', value: '5', color: '#4d7cfe' },
  { label: 'Avg Score', value: '83%', color: '#ffa478' },
  { label: 'Concepts', value: '17', color: '#ff7849' },
  { label: 'Flagged', value: '2', color: '#e85a2a' },
];

const SESSIONS = [
  { date: 'Apr 12', pct: 78, bar: 78 },
  { date: 'Apr 13', pct: 89, bar: 89 },
  { date: 'Apr 15', pct: 63, bar: 63 },
  { date: 'Apr 16', pct: 100, bar: 100 },
  { date: 'Apr 18', pct: 88, bar: 88 },
];

const RECENT = [
  { date: 'Apr 18', subject: 'CSS - Constitutional History', score: '88%', concepts: 9 },
  { date: 'Apr 16', subject: 'CSS - Constitutional History', score: '100%', concepts: 9 },
  { date: 'Apr 15', subject: 'MDCAT - Biology', score: '63%', concepts: 8 },
];

const CONCEPT_PERF = [
  { label: 'Constitution of 1956', pct: 100, color: '#4d7cfe' },
  { label: '1973 Constitution', pct: 92, color: '#ffa478' },
  { label: 'Basic Democracies', pct: 85, color: '#7ba1ff' },
  { label: 'Eighteenth Amendment', pct: 78, color: '#ffa478' },
  { label: 'Article 58(2)(b)', pct: 44, color: '#e85a2a' },
  { label: 'Eighth Amendment', pct: 33, color: '#ff7849' },
];

export default function Dashboard() {
  const { goTo } = useApp();

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '80px 24px 48px',
        background: '#0a0d18',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 28,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 28,
                fontWeight: 700,
                color: '#e8edf5',
                margin: '0 0 6px',
              }}
            >
              Progress Dashboard
            </h1>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 13,
                color: '#7889a8',
                margin: 0,
              }}
            >
              Hassan, Verbal-Primary, 5 sessions completed
            </p>
          </div>
          <Button variant="primary" size="md" onClick={() => goTo('input')}>
            New Session
          </Button>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 14,
            marginBottom: 24,
          }}
        >
          {STAT_CARDS.map((s) => (
            <div
              key={s.label}
              style={{
                padding: '18px 16px',
                borderRadius: 12,
                background: '#121622',
                border: '1px solid #252b42',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#7889a8',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  margin: '0 0 8px',
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--heading)',
                  fontSize: 28,
                  fontWeight: 700,
                  color: s.color,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
          }}
        >
          {/* ─── Session History ─── */}
          <div
            style={{
              padding: '20px',
              borderRadius: 14,
              background: '#121622',
              border: '1px solid #252b42',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 16,
                fontWeight: 600,
                color: '#e8edf5',
                margin: '0 0 20px',
              }}
            >
              Session History
            </h2>

            {/* Bar chart */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 14,
                height: 160,
                marginBottom: 20,
                padding: '0 8px',
              }}
            >
              {SESSIONS.map((s) => {
                const barHeight = (s.bar / 100) * 130;
                const barColor =
                  s.pct >= 90
                    ? '#4d7cfe'
                    : s.pct >= 70
                    ? '#7ba1ff'
                    : '#ff7849';
                return (
                  <div
                    key={s.date}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {/* Percentage label */}
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 11,
                        fontWeight: 600,
                        color: barColor,
                      }}
                    >
                      {s.pct}%
                    </span>
                    {/* Bar */}
                    <div
                      style={{
                        width: '100%',
                        maxWidth: 36,
                        height: barHeight,
                        borderRadius: '6px 6px 2px 2px',
                        background: barColor,
                        opacity: 0.8,
                        transition: 'height 0.3s ease',
                      }}
                    />
                    {/* Date label */}
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 10,
                        color: '#3a4260',
                      }}
                    >
                      {s.date}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Recent session rows */}
            <div
              style={{
                borderTop: '1px solid #252b42',
                paddingTop: 14,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#7889a8',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  margin: '0 0 4px',
                }}
              >
                Recent Sessions
              </h3>
              {RECENT.map((r) => (
                <div
                  key={r.date + r.subject}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: '#181c2d',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#e8edf5',
                        margin: 0,
                      }}
                    >
                      {r.subject}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 10,
                        color: '#3a4260',
                        margin: 0,
                      }}
                    >
                      {r.date} &middot; {r.concepts} concepts
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--heading)',
                      fontSize: 14,
                      fontWeight: 600,
                      color:
                        parseInt(r.score) >= 90
                          ? '#4d7cfe'
                          : parseInt(r.score) >= 70
                          ? '#7ba1ff'
                          : '#ff7849',
                    }}
                  >
                    {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Concept Performance ─── */}
          <div
            style={{
              padding: '20px',
              borderRadius: 14,
              background: '#121622',
              border: '1px solid #252b42',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 16,
                fontWeight: 600,
                color: '#e8edf5',
                margin: '0 0 20px',
              }}
            >
              Concept Performance
            </h2>

            {/* Progress bars */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                flex: 1,
              }}
            >
              {CONCEPT_PERF.map((c) => (
                <div key={c.label}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#e8edf5',
                      }}
                    >
                      {c.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 12,
                        fontWeight: 600,
                        color: c.color,
                      }}
                    >
                      {c.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: '#1f243a',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${c.pct}%`,
                        borderRadius: 3,
                        background: c.color,
                        opacity: 0.8,
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Flagged callout */}
            <div
              style={{
                marginTop: 18,
                padding: '14px 16px',
                borderRadius: 10,
                background: 'rgba(255,120,73,0.06)',
                border: '1px solid rgba(255,120,73,0.2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3v6M8 12v.5"
                    stroke="#ff7849"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#ff7849"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--heading)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#ff7849',
                  }}
                >
                  2 concepts flagged for re-encoding
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: '#7889a8',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Article 58(2)(b) and Eighth Amendment have been recalled
                incorrectly in recent sessions. Consider re-encoding them with
                stronger visual metaphors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
