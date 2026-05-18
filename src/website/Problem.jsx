import React from 'react';

const STATS = [
  {
    number: '6–12',
    text: 'months, the average preparation window for MDCAT or CSS, against a syllabus that spans multiple thick textbooks.',
  },
  {
    number: '6–10',
    text: 'hours of self-directed study per day, almost all spent on re-reading or watching academy lectures.',
  },
  {
    number: '~40%',
    text: 'of MDCAT candidates retake the examination at least once, reflecting structural method failure.',
  },
  {
    number: '3',
    text: 'core pain points: volume of content, weak preparation methods, and declining attentional consolidation.',
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        padding: '120px 32px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 'var(--col-mid)', margin: '0 auto' }}>
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
          § 02 &nbsp;&nbsp; The Problem
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
          Volume up. Method, the same.
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
          Three converging pressures define the experience of preparing for a
          high-density South Asian examination today.
        </p>

        {/* Stat grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 1,
            background: 'var(--hairline)',
            border: '1px solid var(--hairline)',
            borderRadius: 8,
            overflow: 'hidden',
            marginBottom: 64,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '32px 28px',
                background: 'var(--ink-2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: 56,
                  lineHeight: 1,
                  color: 'var(--cream)',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: 'var(--cream-3)',
                }}
              >
                {stat.text}
              </span>
            </div>
          ))}
        </div>

        {/* Prose subsections */}
        <div style={{ maxWidth: 640 }}>
          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              margin: '0 0 16px 0',
            }}
          >
            Why declarative knowledge is the right target
          </h3>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            Not all knowledge is created equal. Procedural knowledge (how to perform a
            dissection, how to draft a legal argument) develops through practice and cannot be
            meaningfully accelerated by mnemonic encoding. But declarative knowledge (the name
            of a constitutional amendment, the classification of a pharmacological agent, the
            date of a treaty) is precisely the kind of information that benefits from structured
            encoding. It is nameble, discrete, and factual. It is also the type of knowledge
            most densely tested in MDCAT and CSS examinations.
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 48px 0',
            }}
          >
            This is why Project Loci focuses exclusively on declarative recall. It does not
            claim to teach analytical reasoning, essay writing, or clinical skills. Its scope
            is deliberate: take the facts that a student already understands conceptually, and
            give them a better method for retaining those facts under pressure.
          </p>

          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              margin: '0 0 16px 0',
            }}
          >
            Why digital attention makes this harder
          </h3>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            The students preparing for these examinations today are the first generation to have
            grown up entirely within a smartphone-mediated attention environment. Manwell et al.
            (2022) document the effects of prolonged screen exposure on working memory and
            sustained attention. Laid (2024) describes the same pattern in the context of exam
            preparation specifically: students report difficulty maintaining focus during
            extended study sessions, leading to more frequent but shallower engagement with
            material.
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: 0,
            }}
          >
            This is not a moral failing. It is a measurable cognitive shift. And it means that
            any tool designed for this cohort must account for shorter sustained attention
            windows while still producing deep encoding. The spatial walkthrough in Loci is
            designed to do exactly this: short, interactive, goal-directed sessions that engage
            spatial processing rather than requiring passive reading endurance.
          </p>
        </div>
      </div>
    </section>
  );
}
