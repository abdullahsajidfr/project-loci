import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ROOMS } from '../../data/rooms';
import Button from '../../shared/Button';

/* Simplified SVG floor plans for each room */
function RoomPreview({ roomId, color }) {
  const strokeColor = color;
  const dimColor = 'rgba(255,255,255,0.08)';
  const dotColor = color;

  if (roomId === 'home') {
    return (
      <svg viewBox="0 0 180 120" width="100%" style={{ display: 'block' }}>
        {/* Room outline */}
        <rect x="10" y="10" width="160" height="100" rx="3" fill="none" stroke={dimColor} strokeWidth="1.5" />
        {/* Bed */}
        <rect x="16" y="62" width="42" height="38" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
        <text x="37" y="85" textAnchor="middle" fill={strokeColor} fontSize="6" opacity="0.4">Bed</text>
        {/* Desk */}
        <rect x="90" y="18" width="36" height="22" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
        <text x="108" y="33" textAnchor="middle" fill={strokeColor} fontSize="6" opacity="0.4">Desk</text>
        {/* Bookshelf */}
        <rect x="140" y="40" width="22" height="34" rx="1" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
        <text x="151" y="60" textAnchor="middle" fill={strokeColor} fontSize="5" opacity="0.4">Shelf</text>
        {/* Door */}
        <rect x="16" y="16" width="18" height="30" rx="1" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
        <text x="25" y="34" textAnchor="middle" fill={strokeColor} fontSize="5" opacity="0.4">Door</text>
        {/* Window */}
        <rect x="120" y="12" width="28" height="14" rx="1" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
        {/* Anchor dots */}
        {[
          [37, 75], [56, 60], [108, 28], [128, 48], [151, 55],
          [25, 28], [134, 18], [78, 18], [156, 78],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill={dotColor} opacity="0.6" />
        ))}
      </svg>
    );
  }

  if (roomId === 'lums') {
    return (
      <svg viewBox="0 0 180 120" width="100%" style={{ display: 'block' }}>
        <rect x="10" y="10" width="160" height="100" rx="3" fill="none" stroke={dimColor} strokeWidth="1.5" />
        {/* Road */}
        <path d="M20 90 Q90 50 160 85" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" strokeDasharray="4,3" />
        {/* Buildings */}
        {[
          { x: 18, y: 55, w: 22, h: 18, label: 'Gate' },
          { x: 42, y: 38, w: 22, h: 18, label: 'SDSB' },
          { x: 68, y: 28, w: 22, h: 18, label: 'SAHSOL' },
          { x: 90, y: 20, w: 24, h: 18, label: 'Library' },
          { x: 118, y: 30, w: 22, h: 18, label: 'MGSHSS' },
          { x: 140, y: 42, w: 22, h: 18, label: 'PDC' },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
            <text x={b.x + b.w / 2} y={b.y + b.h + 9} textAnchor="middle" fill={strokeColor} fontSize="5" opacity="0.4">{b.label}</text>
          </g>
        ))}
        {/* Dots */}
        {[
          [29, 64], [53, 47], [79, 37], [102, 29], [129, 39], [151, 51], [158, 68], [97, 72], [54, 76],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill={dotColor} opacity="0.6" />
        ))}
      </svg>
    );
  }

  if (roomId === 'school') {
    return (
      <svg viewBox="0 0 180 120" width="100%" style={{ display: 'block' }}>
        <rect x="10" y="10" width="160" height="100" rx="3" fill="none" stroke={dimColor} strokeWidth="1.5" />
        {/* Corridor */}
        <line x1="20" y1="65" x2="160" y2="65" stroke={strokeColor} strokeWidth="0.8" opacity="0.3" />
        {/* Rooms */}
        {[
          { x: 16, y: 52, w: 20, h: 16, label: 'Gate' },
          { x: 42, y: 36, w: 24, h: 20, label: 'Office' },
          { x: 72, y: 28, w: 24, h: 20, label: 'Class A' },
          { x: 100, y: 22, w: 24, h: 20, label: 'Class B' },
          { x: 128, y: 32, w: 22, h: 20, label: 'Lab' },
        ].map((r, i) => (
          <g key={i}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} rx="2" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
            <text x={r.x + r.w / 2} y={r.y + r.h + 9} textAnchor="middle" fill={strokeColor} fontSize="5" opacity="0.4">{r.label}</text>
          </g>
        ))}
        {/* Dots */}
        {[
          [26, 60], [54, 45], [84, 37], [112, 31], [139, 41], [151, 56], [97, 75], [52, 78], [130, 78],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill={dotColor} opacity="0.6" />
        ))}
      </svg>
    );
  }

  // custom
  return (
    <svg viewBox="0 0 180 120" width="100%" style={{ display: 'block' }}>
      <rect x="10" y="10" width="160" height="100" rx="3" fill="none" stroke={dimColor} strokeWidth="1.5" />
      {/* Generic rooms */}
      <rect x="20" y="30" width="40" height="30" rx="3" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      <rect x="70" y="20" width="40" height="30" rx="3" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      <rect x="120" y="35" width="35" height="30" rx="3" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      <rect x="50" y="65" width="60" height="28" rx="3" fill="none" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      {/* Dots */}
      {[
        [30, 72], [52, 55], [78, 44], [100, 35], [127, 48], [148, 60], [38, 38], [90, 78], [132, 78],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={dotColor} opacity="0.6" />
      ))}
    </svg>
  );
}

export default function RoomSelection() {
  const { goTo, selectRoom, selectedRoom: ctxRoom, campusType: ctxCampus } = useApp();
  const [selected, setSelected] = useState(ctxRoom || null);
  const [campus, setCampus] = useState(ctxCampus || 'lums');
  const [customDesc, setCustomDesc] = useState('');

  const selectedData = ROOMS.find((r) => r.id === selected);

  const handleEnter = () => {
    if (!selected) return;
    selectRoom(selected, campus);
    goTo('palace');
  };

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
        }}
      >
        Step 3 - Choose Your Space
      </span>

      <h1
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 30,
          fontWeight: 700,
          color: '#e8edf5',
          margin: '14px 0 8px',
        }}
      >
        Where is your memory palace?
      </h1>

      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 14,
          color: '#7889a8',
          margin: '0 0 20px',
          maxWidth: 480,
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        The Method of Loci works best when you use a space you already know well.
        Pick a familiar environment and we will place your concepts at anchor
        points throughout it.
      </p>

      {/* Tip callout */}
      <div
        style={{
          width: '100%',
          maxWidth: 600,
          padding: '14px 18px',
          borderRadius: 10,
          background: 'rgba(255,120,73,0.06)',
          border: '1px solid rgba(255,120,73,0.2)',
          marginBottom: 28,
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 14,
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          💡
        </span>
        <div>
          <p
            style={{
              fontFamily: 'var(--heading)',
              fontSize: 13,
              fontWeight: 600,
              color: '#ff7849',
              margin: '0 0 4px',
            }}
          >
            Why familiar spaces work better
          </p>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              color: '#7889a8',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Shahbaz used his childhood bedroom to memorise MDCAT biology. Because
            he already had a strong mental map, his hippocampus only had to encode
            the new concepts, not the space itself. Familiar spaces reduce
            cognitive load significantly.
          </p>
        </div>
      </div>

      {/* 2x2 Room Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 14,
          width: '100%',
          maxWidth: 600,
          marginBottom: 20,
        }}
      >
        {ROOMS.map((room) => {
          const isSelected = selected === room.id;
          return (
            <div
              key={room.id}
              onClick={() => setSelected(room.id)}
              style={{
                padding: '18px 16px 14px',
                borderRadius: 14,
                background: '#121622',
                border: isSelected
                  ? `2px solid ${room.color}`
                  : '1px solid #252b42',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
            >
              {/* Checkmark badge */}
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: room.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Icon + Label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <span style={{ fontSize: 22 }}>{room.icon}</span>
                <span
                  style={{
                    fontFamily: 'var(--heading)',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#e8edf5',
                  }}
                >
                  {room.label}
                </span>
              </div>

              {/* SVG Preview */}
              <div
                style={{
                  borderRadius: 8,
                  background: '#0a0d18',
                  padding: '8px 4px',
                  marginBottom: 10,
                }}
              >
                <RoomPreview roomId={room.id} color={room.color} />
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: '#7889a8',
                  lineHeight: 1.5,
                  margin: '0 0 6px',
                }}
              >
                {room.desc}
              </p>

              {/* Hint */}
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  color: '#3a4260',
                  fontStyle: 'italic',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {room.hint}
              </p>
            </div>
          );
        })}
      </div>

      {/* Campus sub-selector */}
      {selected === 'lums' && (
        <div
          style={{
            display: 'flex',
            gap: 10,
            marginBottom: 20,
            width: '100%',
            maxWidth: 600,
          }}
        >
          {['lums', 'generic'].map((type) => {
            const active = campus === type;
            const label =
              type === 'lums' ? 'LUMS Campus' : 'Generic University';
            return (
              <button
                key={type}
                onClick={() => setCampus(type)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: 10,
                  background: active
                    ? 'rgba(255,120,73,0.1)'
                    : '#181c2d',
                  border: active
                    ? '1px solid rgba(255,120,73,0.4)'
                    : '1px solid #252b42',
                  color: active ? '#ff7849' : '#7889a8',
                  fontFamily: 'var(--sans)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Custom palace textarea */}
      {selected === 'custom' && (
        <div
          style={{
            width: '100%',
            maxWidth: 600,
            marginBottom: 20,
          }}
        >
          <textarea
            value={customDesc}
            onChange={(e) => setCustomDesc(e.target.value)}
            placeholder="Describe your custom space... (e.g., My grandmother's house in Lahore, with the courtyard, kitchen, drawing room...)"
            style={{
              width: '100%',
              minHeight: 90,
              padding: '14px 16px',
              borderRadius: 10,
              border: '1px solid #252b42',
              background: '#121622',
              color: '#e8edf5',
              fontFamily: 'var(--sans)',
              fontSize: 13,
              lineHeight: 1.6,
              resize: 'vertical',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
      )}

      {/* Bottom summary + CTA */}
      {selected && (
        <div
          style={{
            width: '100%',
            maxWidth: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderRadius: 12,
            background: '#121622',
            border: '1px solid #252b42',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                color: '#7889a8',
                margin: '0 0 2px',
              }}
            >
              Selected Space
            </p>
            <p
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 16,
                fontWeight: 600,
                color: '#e8edf5',
                margin: 0,
              }}
            >
              {selectedData?.icon} {selectedData?.label}
              {selected === 'lums' &&
                ` (${campus === 'lums' ? 'LUMS' : 'Generic'})`}
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleEnter}>
            Enter Palace
          </Button>
        </div>
      )}
    </div>
  );
}
