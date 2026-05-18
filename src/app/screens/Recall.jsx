import React, { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { CONCEPTS } from '../../data/concepts';
import { ANCHOR_SETS } from '../../data/rooms';
import Button from '../../shared/Button';

export default function Recall() {
  const {
    goTo,
    selectedRoom,
    targetIdx,
    recallPhase,
    recallResults,
    recordRecall,
    advanceRecall,
    finishRecall,
  } = useApp();

  const roomKey = selectedRoom === 'lums' || selectedRoom === 'school' || selectedRoom === 'custom'
    ? selectedRoom
    : 'home';
  const anchors = ANCHOR_SETS[roomKey] || ANCHOR_SETS.home;

  const [flashId, setFlashId] = useState(null); // anchor id that was clicked
  const [flashColor, setFlashColor] = useState(null); // 'green' or 'red'
  const [localTarget, setLocalTarget] = useState(targetIdx);

  // Sync local target with context (in case of re-renders)
  useEffect(() => {
    setLocalTarget(targetIdx);
  }, [targetIdx]);

  const currentConcept = CONCEPTS[localTarget];
  const isPlaying = recallPhase === 'playing' && localTarget < CONCEPTS.length;
  const isResult = recallPhase === 'result' || localTarget >= CONCEPTS.length;

  const handleAnchorClick = useCallback(
    (anchorIdx) => {
      if (!isPlaying || flashId !== null) return;
      const anchor = anchors[anchorIdx];
      const concept = CONCEPTS[localTarget];
      const isCorrect = anchorIdx === localTarget;

      recordRecall(concept.id, isCorrect);
      setFlashId(anchor.id);
      setFlashColor(isCorrect ? 'green' : 'red');

      setTimeout(() => {
        setFlashId(null);
        setFlashColor(null);

        if (localTarget + 1 >= CONCEPTS.length) {
          finishRecall();
        } else {
          advanceRecall();
        }
      }, 600);
    },
    [isPlaying, flashId, anchors, localTarget, recordRecall, advanceRecall, finishRecall],
  );

  // Result calculations
  const correctCount = recallResults.filter((r) => r.correct).length;
  const totalCount = recallResults.length;
  const scorePct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const flagged = recallResults.filter((r) => !r.correct).map((r) => {
    const c = CONCEPTS.find((cc) => cc.id === r.id);
    return c ? c.label : '';
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '52px 0 0 0',
        background: '#0a0d18',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #252b42',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 11,
              fontWeight: 600,
              color: '#e85a2a',
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              background: 'rgba(232,90,42,0.1)',
              padding: '3px 10px',
              borderRadius: 10,
            }}
          >
            Recall Mode - Active
          </span>
          {isPlaying && currentConcept && (
            <span
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 14,
                fontWeight: 600,
                color: '#e8edf5',
              }}
            >
              Navigate to:{' '}
              <span style={{ color: currentConcept.color }}>
                {currentConcept.label}
              </span>
            </span>
          )}
        </div>
        {isPlaying && (
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              color: '#7889a8',
            }}
          >
            {localTarget + 1} / {CONCEPTS.length}
          </span>
        )}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: 16 }}>
        {!isResult ? (
          /* ─── SVG Ghosted Room ─── */
          <svg
            viewBox="0 0 800 500"
            width="100%"
            style={{
              display: 'block',
              borderRadius: 12,
              maxHeight: 'calc(100vh - 180px)',
            }}
          >
            <defs>
              <filter id="recallGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              </filter>
            </defs>

            {/* Background */}
            <rect x="0" y="0" width="800" height="500" fill="#0a0d18" />

            {/* Ghosted furniture outlines */}
            {/* Back wall hint */}
            <rect x="0" y="0" width="800" height="230" fill="rgba(15,14,26,0.3)" stroke="rgba(37,43,66,0.3)" strokeWidth="1" />
            {/* Floor hint */}
            <line x1="0" y1="233" x2="800" y2="233" stroke="rgba(37,43,66,0.2)" strokeWidth="1" />

            {/* Ghosted bed outline */}
            <rect x="30" y="290" width="250" height="150" rx="6" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted desk outline */}
            <rect x="340" y="230" width="160" height="110" rx="4" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted bookshelf outline */}
            <rect x="600" y="250" width="120" height="170" rx="3" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted wardrobe outline */}
            <rect x="690" y="160" width="80" height="180" rx="4" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted door outline */}
            <rect x="60" y="60" width="70" height="165" rx="3" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted window outline */}
            <rect x="520" y="40" width="120" height="90" rx="3" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted frame outline */}
            <rect x="280" y="55" width="80" height="60" rx="2" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted bedside table outline */}
            <rect x="185" y="258" width="50" height="65" rx="3" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />
            {/* Ghosted chair outline */}
            <ellipse cx="435" cy="380" rx="28" ry="12" fill="none" stroke="rgba(37,43,66,0.25)" strokeWidth="1" strokeDasharray="4,4" />

            {/* Anchor points */}
            {anchors.map((anchor, idx) => {
              const cx = anchor.x * 800;
              const cy = anchor.y * 500;
              const isFlashing = flashId === anchor.id;
              const isCorrectFlash = isFlashing && flashColor === 'green';
              const isWrongFlash = isFlashing && flashColor === 'red';

              let circleColor = '#3a4260';
              let circleOpacity = 0.5;
              let glowOpacity = 0;

              if (isCorrectFlash) {
                circleColor = '#22c55e';
                circleOpacity = 1;
                glowOpacity = 0.3;
              } else if (isWrongFlash) {
                circleColor = '#e85a2a';
                circleOpacity = 1;
                glowOpacity = 0.3;
              }

              // Show already answered dots
              const alreadyAnswered = recallResults.find((r) => {
                const conceptAtIdx = CONCEPTS[idx];
                return conceptAtIdx && r.id === conceptAtIdx.id;
              });
              if (alreadyAnswered && !isFlashing) {
                circleColor = alreadyAnswered.correct ? 'rgba(34,197,94,0.4)' : 'rgba(232,90,42,0.3)';
                circleOpacity = 0.6;
              }

              return (
                <g
                  key={anchor.id}
                  onClick={() => handleAnchorClick(idx)}
                  style={{ cursor: isPlaying && !flashId ? 'pointer' : 'default' }}
                >
                  {/* Glow on flash */}
                  {glowOpacity > 0 && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r="30"
                      fill={circleColor}
                      opacity={glowOpacity}
                      filter="url(#recallGlow)"
                    />
                  )}
                  {/* Outer ring */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="16"
                    fill="none"
                    stroke={circleColor}
                    strokeWidth="1"
                    opacity={circleOpacity * 0.4}
                    strokeDasharray="3,3"
                  />
                  {/* Inner dot */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="7"
                    fill={circleColor}
                    opacity={circleOpacity}
                  />
                  {/* Zone label */}
                  <text
                    x={cx}
                    y={cy + 28}
                    textAnchor="middle"
                    fill="#3a4260"
                    fontSize="9"
                    fontFamily="Inter, sans-serif"
                  >
                    {anchor.zone}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          /* ─── Result Screen ─── */
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px 20px',
            }}
          >
            {/* Score circle */}
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: `4px solid ${scorePct >= 80 ? '#22c55e' : scorePct >= 50 ? '#ff7849' : '#e85a2a'}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--heading)',
                  fontSize: 36,
                  fontWeight: 700,
                  color: '#e8edf5',
                  lineHeight: 1,
                }}
              >
                {scorePct}%
              </span>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: '#7889a8',
                }}
              >
                Score
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 26,
                fontWeight: 700,
                color: '#e8edf5',
                margin: '0 0 8px',
              }}
            >
              Recall Complete
            </h2>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 14,
                color: '#7889a8',
                margin: '0 0 28px',
              }}
            >
              {correctCount} correct out of {totalCount} concepts
            </p>

            {/* Flagged card */}
            {flagged.length > 0 && (
              <div
                style={{
                  width: '100%',
                  maxWidth: 440,
                  padding: '16px 20px',
                  borderRadius: 12,
                  background: 'rgba(232,90,42,0.06)',
                  border: '1px solid rgba(232,90,42,0.2)',
                  marginBottom: 28,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--heading)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#e85a2a',
                    margin: '0 0 10px',
                  }}
                >
                  Flagged for Re-encoding ({flagged.length})
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  {flagged.map((label) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M4 4l6 6M10 4l-6 6"
                          stroke="#e85a2a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: 13,
                          color: '#7889a8',
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Correct list */}
            {correctCount > 0 && (
              <div
                style={{
                  width: '100%',
                  maxWidth: 440,
                  padding: '16px 20px',
                  borderRadius: 12,
                  background: 'rgba(34,197,94,0.04)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  marginBottom: 28,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--heading)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#22c55e',
                    margin: '0 0 10px',
                  }}
                >
                  Correctly Recalled ({correctCount})
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  {recallResults
                    .filter((r) => r.correct)
                    .map((r) => {
                      const c = CONCEPTS.find((cc) => cc.id === r.id);
                      return c ? (
                        <div
                          key={r.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M3 7.5l2.5 2.5L11 5"
                              stroke="#22c55e"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            style={{
                              fontFamily: 'var(--sans)',
                              fontSize: 13,
                              color: '#7889a8',
                            }}
                          >
                            {c.label}
                          </span>
                        </div>
                      ) : null;
                    })}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 14 }}>
              <Button variant="ghost" size="lg" onClick={() => goTo('input')}>
                New Session
              </Button>
              <Button variant="primary" size="lg" onClick={() => goTo('dashboard')}>
                View Progress
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
