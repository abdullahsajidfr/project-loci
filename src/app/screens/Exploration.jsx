import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CONCEPTS } from '../../data/concepts';
import { ANCHOR_SETS } from '../../data/rooms';
import Button from '../../shared/Button';

/* ─── Home / Bedroom SVG ─── */
function BedroomSVG({ anchors, concepts, visited, selectedId, onSelect, showPath }) {
  return (
    <svg viewBox="0 0 800 500" width="100%" style={{ display: 'block', borderRadius: 12 }}>
      <defs>
        {/* Floor gradient */}
        <linearGradient id="floor" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1a1420" />
          <stop offset="100%" stopColor="#14111e" />
        </linearGradient>
        {/* Back wall */}
        <linearGradient id="backWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f0e1a" />
          <stop offset="100%" stopColor="#151320" />
        </linearGradient>
        {/* Warm glow */}
        <radialGradient id="warmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,180,100,0.12)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,200,120,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Concept glow filter */}
        <filter id="conceptGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        </filter>
      </defs>

      {/* Back wall */}
      <rect x="0" y="0" width="800" height="230" fill="url(#backWall)" />
      {/* Baseboard */}
      <rect x="0" y="225" width="800" height="8" fill="#1e1a28" />
      {/* Floor */}
      <rect x="0" y="233" width="800" height="267" fill="url(#floor)" />
      {/* Floor wood grain lines */}
      {[270, 310, 350, 390, 430, 460].map((y) => (
        <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
      ))}

      {/* ─── Ceiling lamp ─── */}
      <line x1="400" y1="0" x2="400" y2="35" stroke="#2a2538" strokeWidth="2" />
      <ellipse cx="400" cy="40" rx="18" ry="8" fill="#1e1a28" stroke="#2a2538" strokeWidth="1" />
      <ellipse cx="400" cy="100" rx="120" ry="60" fill="url(#warmGlow)" />

      {/* ─── Door (left wall) ─── */}
      <rect x="60" y="60" width="70" height="165" rx="3" fill="#161224" stroke="#2a2538" strokeWidth="1.5" />
      {/* 4 panels */}
      <rect x="68" y="70" width="24" height="55" rx="2" fill="none" stroke="#222040" strokeWidth="1" />
      <rect x="98" y="70" width="24" height="55" rx="2" fill="none" stroke="#222040" strokeWidth="1" />
      <rect x="68" y="135" width="24" height="70" rx="2" fill="none" stroke="#222040" strokeWidth="1" />
      <rect x="98" y="135" width="24" height="70" rx="2" fill="none" stroke="#222040" strokeWidth="1" />
      {/* Knob */}
      <circle cx="120" cy="155" r="4" fill="#2a2538" stroke="#3a3550" strokeWidth="1" />
      <text x="95" y="240" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Door</text>

      {/* ─── Window (back wall right) ─── */}
      <rect x="520" y="40" width="120" height="90" rx="3" fill="#0c0f1e" stroke="#2a2538" strokeWidth="1.5" />
      {/* 4 panes */}
      <line x1="580" y1="40" x2="580" y2="130" stroke="#2a2538" strokeWidth="1" />
      <line x1="520" y1="85" x2="640" y2="85" stroke="#2a2538" strokeWidth="1" />
      {/* Slight blue tint (night sky) */}
      <rect x="521" y="41" width="58" height="43" fill="rgba(30,40,80,0.3)" />
      <rect x="581" y="41" width="58" height="43" fill="rgba(30,40,80,0.25)" />
      <rect x="521" y="86" width="58" height="43" fill="rgba(30,40,80,0.2)" />
      <rect x="581" y="86" width="58" height="43" fill="rgba(30,40,80,0.22)" />
      {/* Curtain hint */}
      <rect x="505" y="36" width="150" height="8" rx="2" fill="#1a1730" />
      <text x="580" y="148" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Window</text>

      {/* ─── Wall frame (center back) ─── */}
      <rect x="280" y="55" width="80" height="60" rx="2" fill="#12101e" stroke="#2a2538" strokeWidth="1.5" />
      {/* Abstract art inside */}
      <circle cx="305" cy="80" r="10" fill="rgba(77,124,254,0.12)" />
      <circle cx="335" cy="75" r="8" fill="rgba(255,120,73,0.1)" />
      <line x1="290" y1="100" x2="350" y2="95" stroke="rgba(123,161,255,0.15)" strokeWidth="2" />
      <text x="320" y="130" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Wall Frame</text>

      {/* ─── Bed (lower-left) ─── */}
      {/* Headboard */}
      <rect x="30" y="290" width="250" height="20" rx="4" fill="#20182e" stroke="#2a2538" strokeWidth="1" />
      {/* Mattress */}
      <rect x="30" y="310" width="250" height="130" rx="6" fill="#1a1528" stroke="#252040" strokeWidth="1" />
      {/* Pillow left */}
      <rect x="42" y="318" width="60" height="35" rx="8" fill="#221e32" stroke="#2e2844" strokeWidth="1" />
      {/* Pillow right */}
      <rect x="112" y="318" width="60" height="35" rx="8" fill="#221e32" stroke="#2e2844" strokeWidth="1" />
      {/* Blanket */}
      <rect x="35" y="365" width="240" height="70" rx="4" fill="#1e1830" stroke="#282244" strokeWidth="1" />
      {/* Fold lines */}
      <path d="M50 385 Q160 370 265 385" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <path d="M50 405 Q160 395 265 405" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
      <text x="155" y="460" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Bed</text>

      {/* ─── Bedside table + lamp ─── */}
      <rect x="185" y="268" width="50" height="55" rx="3" fill="#1a1528" stroke="#252040" strokeWidth="1" />
      {/* Drawer handles */}
      <line x1="200" y1="288" x2="225" y2="288" stroke="#2a2538" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="308" x2="225" y2="308" stroke="#2a2538" strokeWidth="1.5" strokeLinecap="round" />
      {/* Table lamp */}
      <rect x="203" y="250" width="14" height="18" rx="2" fill="#221e30" stroke="#2e2844" strokeWidth="1" />
      <ellipse cx="210" cy="248" rx="16" ry="6" fill="#1e1a2c" stroke="#2e2844" strokeWidth="1" />
      {/* Lamp warm glow */}
      <ellipse cx="210" cy="265" rx="50" ry="35" fill="url(#lampGlow)" />
      <text x="210" y="340" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Bedside Table</text>

      {/* ─── Study desk ─── */}
      <rect x="340" y="255" width="160" height="8" rx="2" fill="#1e1830" stroke="#282244" strokeWidth="1" />
      {/* Desk legs */}
      <rect x="348" y="263" width="6" height="80" fill="#1a1528" />
      <rect x="486" y="263" width="6" height="80" fill="#1a1528" />
      {/* Monitor */}
      <rect x="380" y="210" width="80" height="45" rx="3" fill="#0c0e1a" stroke="#2a2538" strokeWidth="1.5" />
      <rect x="415" y="255" width="10" height="8" fill="#1a1528" />
      {/* Monitor screen glow */}
      <rect x="383" y="213" width="74" height="39" rx="2" fill="rgba(77,124,254,0.04)" />
      {/* Books on desk */}
      <rect x="474" y="236" width="14" height="19" rx="1" fill="#2a1e3a" stroke="#352a48" strokeWidth="0.5" />
      <rect x="462" y="240" width="12" height="15" rx="1" fill="#1e2a38" stroke="#283848" strokeWidth="0.5" />
      <text x="420" y="358" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Study Desk</text>

      {/* ─── Desk chair ─── */}
      <ellipse cx="435" cy="380" rx="28" ry="8" fill="#1a1528" stroke="#252040" strokeWidth="1" />
      <rect x="425" y="360" width="20" height="20" rx="3" fill="#1e1830" stroke="#282244" strokeWidth="1" />
      <rect x="430" y="340" width="10" height="20" fill="#1a1528" />
      <rect x="420" y="328" width="30" height="14" rx="3" fill="#1e1830" stroke="#282244" strokeWidth="1" />
      <text x="435" y="400" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Desk Chair</text>

      {/* ─── Bookshelf ─── */}
      <rect x="600" y="250" width="120" height="170" rx="3" fill="#181424" stroke="#252040" strokeWidth="1.5" />
      {/* Shelf dividers */}
      {[290, 330, 370, 410].map((y) => (
        <line key={y} x1="604" y1={y} x2="716" y2={y} stroke="#222040" strokeWidth="1" />
      ))}
      {/* Books row 1 */}
      {[608, 620, 630, 642, 656, 668, 680, 694, 705].map((x, i) => (
        <rect
          key={`b1-${i}`}
          x={x}
          y={258}
          width={i % 3 === 0 ? 10 : 8}
          height={28}
          rx="1"
          fill={['#2a1e3a', '#1e2a38', '#2a2418', '#1e3828', '#2a1828', '#1e2838', '#282a1e', '#381e28', '#1e3828'][i]}
        />
      ))}
      {/* Books row 2 */}
      {[608, 618, 632, 644, 658, 672, 684, 698].map((x, i) => (
        <rect
          key={`b2-${i}`}
          x={x}
          y={298}
          width={i % 2 === 0 ? 9 : 11}
          height={28}
          rx="1"
          fill={['#1e2a38', '#2a2418', '#381e28', '#1e3828', '#2a1e3a', '#282a1e', '#1e2838', '#2a1828'][i]}
        />
      ))}
      {/* Books row 3 */}
      {[610, 624, 636, 650, 664, 678, 692].map((x, i) => (
        <rect
          key={`b3-${i}`}
          x={x}
          y={338}
          width={10}
          height={28}
          rx="1"
          fill={['#2a2418', '#1e3828', '#2a1e3a', '#1e2a38', '#381e28', '#282a1e', '#1e2838'][i]}
        />
      ))}
      {/* Books row 4 */}
      {[608, 622, 636, 648, 662, 676, 690, 704].map((x, i) => (
        <rect
          key={`b4-${i}`}
          x={x}
          y={378}
          width={i % 3 === 0 ? 12 : 8}
          height={28}
          rx="1"
          fill={['#1e3828', '#2a1828', '#1e2838', '#2a2418', '#1e2a38', '#2a1e3a', '#381e28', '#282a1e'][i]}
        />
      ))}
      <text x="660" y="438" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Bookshelf</text>

      {/* ─── Wardrobe ─── */}
      <rect x="690" y="160" width="80" height="180" rx="4" fill="#181424" stroke="#252040" strokeWidth="1.5" />
      {/* Double doors divider */}
      <line x1="730" y1="164" x2="730" y2="336" stroke="#222040" strokeWidth="1.5" />
      {/* Handles */}
      <circle cx="724" cy="250" r="3" fill="none" stroke="#3a3550" strokeWidth="1.5" />
      <circle cx="736" cy="250" r="3" fill="none" stroke="#3a3550" strokeWidth="1.5" />
      <text x="730" y="355" textAnchor="middle" fill="#3a4260" fontSize="10" fontFamily="Inter, sans-serif">Wardrobe</text>

      {/* ─── Traversal path (dashed) ─── */}
      {showPath && anchors.length > 0 && (
        <polyline
          points={anchors.map((a) => `${a.x * 800},${a.y * 500}`).join(' ')}
          fill="none"
          stroke="rgba(77,124,254,0.25)"
          strokeWidth="1.5"
          strokeDasharray="8,5"
        />
      )}

      {/* ─── Concept objects at anchors ─── */}
      {anchors.map((anchor, i) => {
        const concept = concepts[i];
        if (!concept) return null;
        const cx = anchor.x * 800;
        const cy = anchor.y * 500;
        const isVisited = visited.includes(concept.id);
        const isSelected = concept.id === selectedId;

        return (
          <g
            key={concept.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(concept.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            {/* Glow */}
            <circle
              cx={cx}
              cy={cy}
              r="22"
              fill={concept.color}
              opacity={isSelected ? 0.2 : 0.08}
              filter="url(#conceptGlow)"
            />
            {/* Main dot */}
            <circle
              cx={cx}
              cy={cy}
              r={isSelected ? 10 : 8}
              fill={concept.color}
              opacity={isVisited ? 1 : 0.7}
              stroke={isSelected ? '#fff' : 'none'}
              strokeWidth={isSelected ? 2 : 0}
            />
            {/* Label tag above */}
            <rect
              x={cx - 52}
              y={cy - 38}
              width={104}
              height={20}
              rx={10}
              fill="rgba(10,13,24,0.85)"
              stroke={concept.color}
              strokeWidth="0.8"
            />
            <text
              x={cx}
              y={cy - 24}
              textAnchor="middle"
              fill={concept.color}
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              {concept.label.length > 16
                ? concept.label.slice(0, 15) + '...'
                : concept.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ─── LUMS Campus SVG ─── */
function CampusSVG({ anchors, concepts, visited, selectedId, onSelect, showPath }) {
  const BUILDINGS = [
    { x: 50, y: 220, w: 80, h: 55, color: '#2a2040', side: '#221838', label: 'Main Gate' },
    { x: 150, y: 170, w: 85, h: 55, color: '#1e2838', side: '#182030', label: 'SDSB' },
    { x: 265, y: 135, w: 85, h: 55, color: '#2a2418', side: '#221c10', label: 'SAHSOL' },
    { x: 375, y: 100, w: 95, h: 60, color: '#1e2a38', side: '#182230', label: 'Library' },
    { x: 495, y: 135, w: 85, h: 55, color: '#281e38', side: '#201630', label: 'MGSHSS' },
    { x: 610, y: 170, w: 80, h: 55, color: '#2a2040', side: '#221838', label: 'PDC' },
    { x: 690, y: 220, w: 70, h: 50, color: '#1e3828', side: '#163020', label: 'Mosque' },
    { x: 400, y: 260, w: 75, h: 45, color: '#2a1828', side: '#221020', label: 'Catalyst' },
    { x: 210, y: 270, w: 80, h: 45, color: '#1e2838', side: '#182030', label: 'Sports' },
  ];

  return (
    <svg viewBox="0 0 800 500" width="100%" style={{ display: 'block', borderRadius: 12 }}>
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#070a14" />
          <stop offset="100%" stopColor="#0e1020" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#101818" />
          <stop offset="100%" stopColor="#0a1210" />
        </linearGradient>
        <filter id="conceptGlowC" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="800" height="340" fill="url(#nightSky)" />
      {/* Ground */}
      <rect x="0" y="340" width="800" height="160" fill="url(#ground)" />

      {/* Stars */}
      {[
        [120, 40], [250, 25], [400, 18], [550, 35], [680, 22],
        [80, 80], [320, 55], [500, 60], [620, 50], [160, 65],
        [440, 42], [700, 70], [350, 80], [530, 28], [220, 48],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.5 : 1} fill="rgba(255,255,255,0.3)" />
      ))}

      {/* Crescent moon */}
      <circle cx="680" cy="50" r="18" fill="rgba(255,240,200,0.15)" />
      <circle cx="690" cy="44" r="15" fill="#070a14" />

      {/* Campus road */}
      <path d="M30 380 Q200 340 400 350 Q600 360 780 370" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="20" strokeLinecap="round" />
      <path d="M30 380 Q200 340 400 350 Q600 360 780 370" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2" strokeDasharray="12,8" />

      {/* Trees */}
      {[
        [30, 350], [170, 330], [340, 320], [540, 330], [730, 340],
        [100, 360], [450, 345], [650, 355],
      ].map(([tx, ty], i) => (
        <g key={`tree-${i}`}>
          <rect x={tx - 2} y={ty} width={4} height={15} fill="#0e1a14" />
          <ellipse cx={tx} cy={ty - 5} rx={10 + (i % 3) * 2} ry={12 + (i % 2) * 3} fill="rgba(20,40,25,0.6)" />
        </g>
      ))}

      {/* Campus title pill */}
      <rect x="310" y="8" width="180" height="26" rx="13" fill="rgba(10,13,24,0.8)" stroke="#252b42" strokeWidth="1" />
      <text x="400" y="25" textAnchor="middle" fill="#7889a8" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="600">LUMS Campus</text>

      {/* Buildings with 3D perspective */}
      {BUILDINGS.map((b, i) => (
        <g key={`bld-${i}`}>
          {/* Side face (3D depth) */}
          <path
            d={`M${b.x + b.w} ${b.y} L${b.x + b.w + 12} ${b.y - 8} L${b.x + b.w + 12} ${b.y + b.h - 8} L${b.x + b.w} ${b.y + b.h} Z`}
            fill={b.side}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
          />
          {/* Roof strip */}
          <path
            d={`M${b.x} ${b.y} L${b.x + 12} ${b.y - 8} L${b.x + b.w + 12} ${b.y - 8} L${b.x + b.w} ${b.y} Z`}
            fill={b.side}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
          />
          {/* Front face */}
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="2" fill={b.color} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          {/* Windows */}
          {Array.from({ length: Math.floor(b.w / 20) - 1 }).map((_, wi) => (
            <React.Fragment key={wi}>
              <rect
                x={b.x + 10 + wi * 20}
                y={b.y + 10}
                width={10}
                height={12}
                rx="1"
                fill="rgba(77,124,254,0.08)"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="0.5"
              />
              <rect
                x={b.x + 10 + wi * 20}
                y={b.y + 28}
                width={10}
                height={12}
                rx="1"
                fill="rgba(77,124,254,0.06)"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="0.5"
              />
            </React.Fragment>
          ))}
          {/* Door */}
          <rect
            x={b.x + b.w / 2 - 6}
            y={b.y + b.h - 16}
            width={12}
            height={16}
            rx="1"
            fill="rgba(0,0,0,0.3)"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />
          {/* Label */}
          <text
            x={b.x + b.w / 2}
            y={b.y + b.h + 16}
            textAnchor="middle"
            fill="#3a4260"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
          >
            {b.label}
          </text>
        </g>
      ))}

      {/* Traversal path */}
      {showPath && anchors.length > 0 && (
        <polyline
          points={anchors.map((a) => `${a.x * 800},${a.y * 500}`).join(' ')}
          fill="none"
          stroke="rgba(77,124,254,0.25)"
          strokeWidth="1.5"
          strokeDasharray="8,5"
        />
      )}

      {/* Concept objects at anchors */}
      {anchors.map((anchor, i) => {
        const concept = concepts[i];
        if (!concept) return null;
        const cx = anchor.x * 800;
        const cy = anchor.y * 500;
        const isVisited = visited.includes(concept.id);
        const isSelected = concept.id === selectedId;

        return (
          <g
            key={concept.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(concept.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx={cx}
              cy={cy}
              r="22"
              fill={concept.color}
              opacity={isSelected ? 0.2 : 0.08}
              filter="url(#conceptGlowC)"
            />
            <circle
              cx={cx}
              cy={cy}
              r={isSelected ? 10 : 8}
              fill={concept.color}
              opacity={isVisited ? 1 : 0.7}
              stroke={isSelected ? '#fff' : 'none'}
              strokeWidth={isSelected ? 2 : 0}
            />
            <rect
              x={cx - 52}
              y={cy - 38}
              width={104}
              height={20}
              rx={10}
              fill="rgba(10,13,24,0.85)"
              stroke={concept.color}
              strokeWidth="0.8"
            />
            <text
              x={cx}
              y={cy - 24}
              textAnchor="middle"
              fill={concept.color}
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              {concept.label.length > 16
                ? concept.label.slice(0, 15) + '...'
                : concept.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Exploration() {
  const {
    goTo,
    selectedRoom,
    campusType,
    visited,
    visitConcept,
  } = useApp();

  const [selectedId, setSelectedId] = useState(null);
  const [showPath, setShowPath] = useState(true);
  const [showPanel, setShowPanel] = useState(true);

  const roomKey = selectedRoom === 'lums' || selectedRoom === 'school' || selectedRoom === 'custom'
    ? selectedRoom
    : 'home';
  const anchors = ANCHOR_SETS[roomKey] || ANCHOR_SETS.home;
  const roomLabel =
    roomKey === 'lums'
      ? (campusType === 'lums' ? 'LUMS Campus' : 'Generic University')
      : roomKey === 'home'
      ? 'Your Bedroom'
      : roomKey === 'school'
      ? 'Your School'
      : 'Custom Palace';

  const selectedConcept = CONCEPTS.find((c) => c.id === selectedId);
  const selectedAnchor = selectedId
    ? anchors[CONCEPTS.findIndex((c) => c.id === selectedId)]
    : null;

  const handleSelect = (id) => {
    setSelectedId(id);
    visitConcept(id);
  };

  const visitedCount = visited.length;
  const progressPct = Math.round((visitedCount / CONCEPTS.length) * 100);

  const useCampusSVG = roomKey === 'lums' || roomKey === 'school';

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
              color: '#ffa478',
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              background: 'rgba(255,164,120,0.1)',
              padding: '3px 10px',
              borderRadius: 10,
            }}
          >
            Exploration Mode
          </span>
          <span
            style={{
              fontFamily: 'var(--heading)',
              fontSize: 14,
              fontWeight: 600,
              color: '#e8edf5',
            }}
          >
            {roomLabel}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Visited counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                color: '#7889a8',
              }}
            >
              {visitedCount}/{CONCEPTS.length}
            </span>
            <div
              style={{
                width: 80,
                height: 4,
                borderRadius: 2,
                background: '#1f243a',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progressPct}%`,
                  background: '#4d7cfe',
                  borderRadius: 2,
                  transition: 'width 0.3s',
                }}
              />
            </div>
          </div>

          {/* Toggle path */}
          <button
            onClick={() => setShowPath(!showPath)}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 500,
              color: showPath ? '#4d7cfe' : '#7889a8',
              background: showPath ? 'rgba(77,124,254,0.1)' : '#181c2d',
              border: '1px solid ' + (showPath ? 'rgba(77,124,254,0.3)' : '#252b42'),
              borderRadius: 8,
              padding: '5px 12px',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {showPath ? 'Hide Path' : 'Show Path'}
          </button>

          {/* Toggle panel */}
          <button
            onClick={() => setShowPanel(!showPanel)}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              fontWeight: 500,
              color: showPanel ? '#4d7cfe' : '#7889a8',
              background: showPanel ? 'rgba(77,124,254,0.1)' : '#181c2d',
              border: '1px solid ' + (showPanel ? 'rgba(77,124,254,0.3)' : '#252b42'),
              borderRadius: 8,
              padding: '5px 12px',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            Concepts
          </button>

          {/* Enter recall */}
          <Button variant="amber" size="sm" onClick={() => goTo('recall')}>
            Enter Recall Mode
          </Button>
        </div>
      </div>

      {/* Main area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          minHeight: 0,
        }}
      >
        {/* SVG Room */}
        <div
          style={{
            flex: 1,
            padding: 16,
            overflow: 'auto',
          }}
        >
          {useCampusSVG ? (
            <CampusSVG
              anchors={anchors}
              concepts={CONCEPTS}
              visited={visited}
              selectedId={selectedId}
              onSelect={handleSelect}
              showPath={showPath}
            />
          ) : (
            <BedroomSVG
              anchors={anchors}
              concepts={CONCEPTS}
              visited={visited}
              selectedId={selectedId}
              onSelect={handleSelect}
              showPath={showPath}
            />
          )}

          {/* Info popup at bottom */}
          {selectedConcept && (
            <div
              style={{
                marginTop: 12,
                padding: '16px 20px',
                background: '#121622',
                border: `1px solid ${selectedConcept.color}33`,
                borderRadius: 12,
                maxWidth: 600,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: selectedConcept.color,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--heading)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#e8edf5',
                  }}
                >
                  {selectedConcept.label}
                </span>
                {selectedAnchor && (
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 11,
                      color: '#7889a8',
                      background: '#1f243a',
                      padding: '2px 8px',
                      borderRadius: 8,
                    }}
                  >
                    {selectedAnchor.zone}
                  </span>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 13,
                  color: '#7889a8',
                  lineHeight: 1.6,
                  margin: '0 0 6px',
                }}
              >
                {selectedConcept.definition}
              </p>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: '#3a4260',
                  fontStyle: 'italic',
                  margin: '0 0 12px',
                }}
              >
                {selectedConcept.metaphor}
              </p>
              <button
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#4d7cfe',
                  background: 'rgba(77,124,254,0.1)',
                  border: '1px solid rgba(77,124,254,0.25)',
                  borderRadius: 8,
                  padding: '6px 14px',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                Play narration
              </button>
            </div>
          )}
        </div>

        {/* Side panel */}
        {showPanel && (
          <div
            style={{
              width: 238,
              borderLeft: '1px solid #252b42',
              padding: '16px 14px',
              overflowY: 'auto',
              background: '#0d1018',
              flexShrink: 0,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 14,
                fontWeight: 600,
                color: '#e8edf5',
                margin: '0 0 4px',
              }}
            >
              Concept List
            </h3>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                color: '#3a4260',
                margin: '0 0 14px',
              }}
            >
              {roomLabel}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {CONCEPTS.map((c, i) => {
                const isVisited = visited.includes(c.id);
                const isSelected = c.id === selectedId;
                const anchor = anchors[i];

                return (
                  <div
                    key={c.id}
                    onClick={() => handleSelect(c.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 10px',
                      borderRadius: 8,
                      background: isSelected
                        ? 'rgba(77,124,254,0.08)'
                        : 'transparent',
                      cursor: 'pointer',
                      transition: 'background 0.15s',
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: isVisited ? c.color : '#3a4260',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: 'var(--sans)',
                          fontSize: 12,
                          fontWeight: 500,
                          color: isVisited ? '#e8edf5' : '#7889a8',
                          margin: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {c.label}
                      </p>
                      {anchor && (
                        <p
                          style={{
                            fontFamily: 'var(--sans)',
                            fontSize: 10,
                            color: '#3a4260',
                            margin: 0,
                          }}
                        >
                          {anchor.zone}
                        </p>
                      )}
                    </div>
                    {isVisited && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 7.5l2.5 2.5L11 5"
                          stroke="#4d7cfe"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
