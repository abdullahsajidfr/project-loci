import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONCEPTS } from '../data/concepts';
import { ANCHOR_SETS } from '../data/rooms';

const anchors = ANCHOR_SETS.home;

/* Merge concepts with anchor positions */
const placed = CONCEPTS.map((c, i) => ({
  ...c,
  x: anchors[i].x,
  y: anchors[i].y,
  zone: anchors[i].zone,
}));

const SVG_W = 600;
const SVG_H = 400;

export default function AppDemo() {
  const [selected, setSelected] = useState(4); // concept id 4 pre-selected
  const [visited, setVisited] = useState(new Set([1, 2, 3, 4]));
  const [showPath, setShowPath] = useState(false);

  const handleSelect = (id) => {
    setSelected(id);
    setVisited((prev) => new Set([...prev, id]));
  };

  const selectedConcept = placed.find((c) => c.id === selected);

  return (
    <section
      id="demo"
      style={{
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 'var(--col-wide)', margin: '0 auto' }}>
        {/* Eyebrow */}
        <span
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--cream-3)',
            display: 'block',
            marginBottom: 24,
          }}
        >
          § 04 &nbsp;&nbsp; Demo
        </span>

        {/* Title */}
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.06,
            fontWeight: 400,
            color: 'var(--cream)',
            margin: '0 0 24px 0',
          }}
        >
          From a paragraph of text to a navigable memory of it.
        </h2>

        <div style={{ display: 'flex', gap: 16, marginBottom: 48 }}>
          <Link
            to="/app"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 24px',
              borderRadius: 999,
              background: 'var(--cream)',
              color: 'var(--ink)',
              fontFamily: 'var(--sans)',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            Open the full app
          </Link>
        </div>

        {/* Browser chrome frame */}
        <div
          style={{
            border: '1px solid var(--hairline)',
            borderRadius: 12,
            overflow: 'hidden',
            background: 'var(--ink-2)',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              borderBottom: '1px solid var(--hairline)',
              background: 'var(--ink-3)',
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
            </div>
            {/* URL bar */}
            <div
              style={{
                flex: 1,
                padding: '5px 14px',
                borderRadius: 6,
                background: 'var(--ink)',
                fontFamily: 'var(--sans)',
                fontSize: 12,
                color: 'var(--cream-3)',
              }}
            >
              loci.app &nbsp;/ &nbsp;encoding session
            </div>
          </div>

          {/* Demo content area */}
          <div
            className="demo-content-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 300px',
              minHeight: 420,
            }}
          >
            {/* Left: SVG bedroom */}
            <div style={{ position: 'relative', padding: 16 }}>
              <svg
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              >
                {/* Room background */}
                <rect x="0" y="0" width={SVG_W} height={SVG_H} fill="#0d1024" rx="4" />

                {/* Floor */}
                <polygon
                  points="40,320 560,320 520,240 80,240"
                  fill="#161a30"
                  stroke="#252b42"
                  strokeWidth="1"
                />

                {/* Back wall */}
                <rect x="80" y="60" width="440" height="180" fill="#111428" stroke="#252b42" strokeWidth="1" />

                {/* Left wall */}
                <polygon
                  points="40,320 80,240 80,60 20,80"
                  fill="#0f1226"
                  stroke="#252b42"
                  strokeWidth="1"
                />

                {/* Right wall */}
                <polygon
                  points="560,320 520,240 520,60 580,80"
                  fill="#0f1226"
                  stroke="#252b42"
                  strokeWidth="1"
                />

                {/* Bed (lower-left) */}
                <rect x="90" y="260" width="120" height="55" rx="3" fill="#1a1e36" stroke="#2a2f50" strokeWidth="1" />
                <rect x="90" y="255" width="120" height="12" rx="2" fill="#1e2340" stroke="#2a2f50" strokeWidth="1" />
                {/* Pillow */}
                <rect x="96" y="262" width="30" height="18" rx="4" fill="#252a48" />

                {/* Desk (center) */}
                <rect x="260" y="250" width="100" height="8" rx="2" fill="#1e2340" stroke="#2a2f50" strokeWidth="1" />
                <rect x="270" y="258" width="4" height="40" fill="#1a1e36" />
                <rect x="350" y="258" width="4" height="40" fill="#1a1e36" />
                {/* Monitor on desk */}
                <rect x="285" y="230" width="50" height="20" rx="2" fill="#111428" stroke="#4d7cfe" strokeWidth="0.5" />
                <rect x="307" y="250" width="6" height="5" fill="#1a1e36" />

                {/* Chair */}
                <rect x="330" y="270" width="40" height="6" rx="2" fill="#1e2340" />
                <rect x="348" y="276" width="4" height="24" fill="#1a1e36" />
                <rect x="330" y="255" width="40" height="18" rx="3" fill="#1a1e36" stroke="#2a2f50" strokeWidth="0.5" />

                {/* Bookshelf (right) */}
                <rect x="440" y="130" width="60" height="108" rx="2" fill="#1a1e36" stroke="#2a2f50" strokeWidth="1" />
                <line x1="442" y1="165" x2="498" y2="165" stroke="#252b42" strokeWidth="0.5" />
                <line x1="442" y1="200" x2="498" y2="200" stroke="#252b42" strokeWidth="0.5" />
                {/* Books */}
                <rect x="446" y="138" width="8" height="24" rx="1" fill="#4d7cfe" opacity="0.6" />
                <rect x="457" y="140" width="6" height="22" rx="1" fill="#ff7849" opacity="0.5" />
                <rect x="466" y="136" width="7" height="26" rx="1" fill="#7ba1ff" opacity="0.5" />
                <rect x="446" y="172" width="10" height="24" rx="1" fill="#ffa478" opacity="0.5" />
                <rect x="459" y="170" width="8" height="26" rx="1" fill="#4d7cfe" opacity="0.4" />

                {/* Window (back wall, right of center) */}
                <rect x="380" y="85" width="60" height="70" rx="2" fill="#0a0d18" stroke="#3a4260" strokeWidth="1" />
                <line x1="410" y1="85" x2="410" y2="155" stroke="#3a4260" strokeWidth="0.5" />
                <line x1="380" y1="120" x2="440" y2="120" stroke="#3a4260" strokeWidth="0.5" />
                {/* Starlight through window */}
                <circle cx="395" cy="102" r="1.5" fill="#7ba1ff" opacity="0.4" />
                <circle cx="425" cy="110" r="1" fill="#7ba1ff" opacity="0.3" />

                {/* Door (left wall area) */}
                <rect x="100" y="100" width="50" height="90" rx="2" fill="#111428" stroke="#2a2f50" strokeWidth="1" />
                <circle cx="142" cy="148" r="3" fill="#3a4260" />

                {/* Wardrobe (far right) */}
                <rect x="480" y="250" width="50" height="65" rx="2" fill="#1a1e36" stroke="#2a2f50" strokeWidth="1" />
                <line x1="505" y1="252" x2="505" y2="313" stroke="#252b42" strokeWidth="0.5" />
                <circle cx="498" cy="282" r="2" fill="#3a4260" />
                <circle cx="512" cy="282" r="2" fill="#3a4260" />

                {/* Wall Frame */}
                <rect x="200" y="95" width="44" height="36" rx="2" fill="#111428" stroke="#3a4260" strokeWidth="1" />
                <rect x="206" y="101" width="32" height="24" rx="1" fill="#161a30" />

                {/* Path connecting concepts (dashed lines) */}
                {showPath &&
                  placed.slice(0, -1).map((c, i) => {
                    const next = placed[i + 1];
                    return (
                      <line
                        key={`path-${i}`}
                        x1={c.x * SVG_W}
                        y1={c.y * SVG_H}
                        x2={next.x * SVG_W}
                        y2={next.y * SVG_H}
                        stroke="var(--cyan)"
                        strokeWidth="1"
                        strokeDasharray="6 4"
                        opacity="0.4"
                      />
                    );
                  })}

                {/* Concept dots */}
                {placed.map((c) => {
                  const cx = c.x * SVG_W;
                  const cy = c.y * SVG_H;
                  const isSelected = selected === c.id;
                  const isVisited = visited.has(c.id);

                  return (
                    <g
                      key={c.id}
                      onClick={() => handleSelect(c.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Glow ring for selected */}
                      {isSelected && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={14}
                          fill="none"
                          stroke={c.color}
                          strokeWidth="1"
                          opacity="0.3"
                        />
                      )}
                      {/* Dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 7 : 5}
                        fill={c.color}
                        opacity={isVisited ? 1 : 0.5}
                      />
                      {/* Label tag */}
                      <rect
                        x={cx - 40}
                        y={cy - 26}
                        width={80}
                        height={16}
                        rx={4}
                        fill="rgba(10,13,24,0.85)"
                        stroke={isSelected ? c.color : '#252b42'}
                        strokeWidth="0.5"
                      />
                      <text
                        x={cx}
                        y={cy - 15}
                        textAnchor="middle"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 8,
                          fill: isSelected ? '#efe7d4' : '#a8a298',
                          fontWeight: 500,
                        }}
                      >
                        {c.label.length > 16 ? c.label.slice(0, 15) + '...' : c.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Selected concept popup at bottom of SVG */}
              {selectedConcept && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 16,
                    right: 16,
                    padding: '14px 18px',
                    background: 'rgba(10,13,24,0.92)',
                    border: `1px solid ${selectedConcept.color}`,
                    borderRadius: 8,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: selectedConcept.color,
                        display: 'inline-block',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--cream)',
                      }}
                    >
                      {selectedConcept.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: 11,
                        color: 'var(--cream-3)',
                        marginLeft: 'auto',
                      }}
                    >
                      {selectedConcept.zone}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: 'var(--cream-2)',
                      margin: '0 0 6px 0',
                    }}
                  >
                    {selectedConcept.definition}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontStyle: 'italic',
                      fontSize: 13,
                      lineHeight: 1.4,
                      color: 'var(--cream-3)',
                      margin: 0,
                    }}
                  >
                    Metaphor: {selectedConcept.metaphor}
                  </p>
                </div>
              )}

              {/* Path toggle */}
              <button
                onClick={() => setShowPath(!showPath)}
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  padding: '5px 12px',
                  borderRadius: 6,
                  border: '1px solid var(--hairline)',
                  background: showPath ? 'var(--cyan)' : 'rgba(10,13,24,0.8)',
                  color: showPath ? '#fff' : 'var(--cream-3)',
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Path {showPath ? 'on' : 'off'}
              </button>
            </div>

            {/* Right: Concept sidebar */}
            <div
              style={{
                borderLeft: '1px solid var(--hairline)',
                padding: '20px 16px',
                overflowY: 'auto',
                maxHeight: 460,
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--cream)',
                  margin: '0 0 4px 0',
                }}
              >
                Nine concepts.
              </h4>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: 'var(--cream-3)',
                  margin: '0 0 20px 0',
                }}
              >
                CSS · Constitutional History
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {placed.map((c) => {
                  const isActive = selected === c.id;
                  const isVisited = visited.has(c.id);

                  return (
                    <button
                      key={c.id}
                      onClick={() => handleSelect(c.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '8px 10px',
                        borderRadius: 6,
                        border: 'none',
                        background: isActive ? 'var(--ink-3)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background 0.15s ease',
                        width: '100%',
                      }}
                    >
                      {/* Dot indicator */}
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: isVisited ? c.color : 'var(--hairline)',
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <span
                          style={{
                            fontFamily: 'var(--sans)',
                            fontSize: 13,
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? 'var(--cream)' : 'var(--cream-2)',
                            display: 'block',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {c.label}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--sans)',
                            fontSize: 11,
                            color: 'var(--cream-3)',
                          }}
                        >
                          {c.zone}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Prose below demo */}
        <div style={{ maxWidth: 640, marginTop: 48 }}>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            The demo above shows the core encoding experience. Nine concepts from a CSS
            constitutional history passage have been extracted, tagged with visual metaphors,
            and placed at anchor points in a bedroom environment. Click any dot to see its
            definition and metaphor. Toggle the path overlay to trace the traversal route. In
            the full application, this environment is rendered in 3D, and a Recall Mode strips
            the objects twenty-four hours later to test retention.
          </p>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 720px) {
          .demo-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
