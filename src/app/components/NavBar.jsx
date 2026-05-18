import React from 'react';
import Logo from '../../shared/Logo';

const STEPS = [
  { key: 'onboarding', label: 'Assess' },
  { key: 'profile', label: 'Profile' },
  { key: 'input', label: 'Encode' },
  { key: 'roomselect', label: 'Room' },
  { key: 'palace', label: 'Explore' },
  { key: 'recall', label: 'Recall' },
  { key: 'dashboard', label: 'Progress' },
];

const SCREEN_ORDER = [
  'landing',
  'onboarding',
  'profile',
  'input',
  'processing',
  'roomselect',
  'palace',
  'recall',
  'dashboard',
];

function screenIndex(s) {
  return SCREEN_ORDER.indexOf(s);
}

function stepStatus(stepKey, currentScreen) {
  const stepIdx = SCREEN_ORDER.indexOf(stepKey);
  const curIdx = screenIndex(currentScreen);
  if (stepIdx < 0 || curIdx < 0) return 'future';
  if (stepKey === currentScreen) return 'active';
  // processing maps to the input step
  if (currentScreen === 'processing' && stepKey === 'input') return 'active';
  if (stepIdx < curIdx) return 'done';
  return 'future';
}

export default function NavBar({ screen, goTo }) {
  const showSteps = screen !== 'landing';
  const showDashboard = screenIndex(screen) >= screenIndex('recall');

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 52,
        background: 'rgba(6,4,15,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #252b42',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 1000,
      }}
    >
      {/* Left: Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          minWidth: 120,
        }}
        onClick={() => goTo('landing')}
      >
        <Logo size="sm" showWordmark={false} />
        <span
          style={{
            fontFamily: 'var(--heading)',
            fontSize: 18,
            fontWeight: 700,
            color: '#e8edf5',
            letterSpacing: '-0.02em',
          }}
        >
          Loci
        </span>
      </div>

      {/* Center: Step indicators */}
      {showSteps && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {STEPS.map((step, i) => {
            const status = stepStatus(step.key, screen);
            const isCyan = status === 'active';
            const isDone = status === 'done';
            const isFuture = status === 'future';
            const dotColor = isCyan
              ? '#4d7cfe'
              : isDone
              ? 'rgba(77,124,254,0.45)'
              : '#3a4260';
            const textColor = isCyan
              ? '#4d7cfe'
              : isDone
              ? '#7889a8'
              : '#3a4260';
            const clickable = isDone;

            return (
              <React.Fragment key={step.key}>
                <div
                  onClick={clickable ? () => goTo(step.key) : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: '4px 10px',
                    borderRadius: 20,
                    background: isCyan
                      ? 'rgba(77,124,254,0.12)'
                      : 'transparent',
                    cursor: clickable ? 'pointer' : 'default',
                    transition: 'background 0.2s',
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: dotColor,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 11,
                      fontWeight: isCyan ? 600 : 500,
                      color: textColor,
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      width: 18,
                      height: 1,
                      background:
                        isDone || isCyan
                          ? 'rgba(77,124,254,0.3)'
                          : '#252b42',
                      flexShrink: 0,
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Right: Dashboard + avatar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minWidth: 120,
          justifyContent: 'flex-end',
        }}
      >
        {showDashboard && (
          <button
            onClick={() => goTo('dashboard')}
            style={{
              background: 'rgba(77,124,254,0.12)',
              border: '1px solid rgba(77,124,254,0.25)',
              borderRadius: 8,
              padding: '5px 12px',
              color: '#4d7cfe',
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            Dashboard
          </button>
        )}
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: '#1f243a',
            border: '1.5px solid #2f3656',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7889a8',
            fontFamily: 'var(--heading)',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          H
        </div>
      </div>
    </nav>
  );
}
