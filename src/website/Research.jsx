import React from 'react';
import { REFERENCES } from '../data/references';

export default function Research() {
  return (
    <section
      id="research"
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
          § 07 &nbsp;&nbsp; Research
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
            maxWidth: '22ch',
          }}
        >
          Every layer of the system traces back to specific work.
        </h2>

        {/* Intro */}
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 22,
            lineHeight: 1.5,
            color: 'var(--cream-2)',
            maxWidth: '36ch',
            margin: '0 0 56px 0',
          }}
        >
          Nothing in Loci is novel as a finding. The novelty is in the assembly, taking
          results that have lived in cognitive psychology journals for decades and putting
          them in front of the students they would help most.
        </p>

        {/* Reference cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {REFERENCES.map((ref, i) => (
            <div
              key={i}
              style={{
                padding: 24,
                background: 'var(--ink-2)',
                border: '1px solid var(--hairline)',
                borderRadius: 8,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: 'var(--cream)',
                  display: 'block',
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}
              >
                {ref.author}
              </span>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-3)',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {ref.year} · {ref.journal}
              </span>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'var(--cream-2)',
                  margin: 0,
                }}
              >
                {ref.finding}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
