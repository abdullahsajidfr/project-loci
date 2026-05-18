import React from 'react';

const STEPS = [
  {
    num: 'i',
    title: 'Text Input',
    desc: 'The student pastes up to 500 words of source material from any subject. The system is subject-agnostic: constitutional law, pharmacology, organic chemistry, international relations. If the text contains declarative facts, it can be encoded.',
  },
  {
    num: 'ii',
    title: 'LLM Concept Extraction',
    desc: 'A structured prompt is sent to the Claude API. The model returns a JSON array of concepts, each with a label, definition, and a concrete visual metaphor. The metaphor is deliberately vivid, often bizarre, following Bower\'s (1970) finding that distinctive imagery produces stronger recall.',
  },
  {
    num: 'iii',
    title: 'Familiar Space Selection',
    desc: 'The student chooses an environment: home (the default bedroom), university campus, school, or a custom space. The principle is familiarity. The more deeply the student knows the space, the stronger the spatial scaffold for new information.',
  },
  {
    num: 'iv',
    title: 'Object Placement',
    desc: 'Each concept is assigned to a fixed anchor point within the chosen environment. Anchor points follow a left-to-right traversal path, capped at twelve per session. This constraint is deliberate: Sweller\'s cognitive load theory (1988) indicates that exceeding working memory capacity during encoding degrades retention.',
  },
  {
    num: 'v',
    title: 'Exploration',
    desc: 'The student walks the route. In the browser, this means navigating a 3D environment, reading labels, clicking objects to reveal definitions and metaphors, and following a highlighted path overlay. Each interaction deepens the encoding trace across verbal, visual, and spatial channels simultaneously.',
  },
  {
    num: 'vi',
    title: 'Recall, twenty-four hours later',
    desc: 'The same environment loads, but the objects are gone. The student must navigate to the correct anchor point and name the concept that was placed there. Scoring is immediate. Concepts that the student fails to recall are flagged for re-encoding in the next session. This is active retrieval practice (Roediger & Karpicke, 2006).',
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
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
          § 05 &nbsp;&nbsp; Workflow
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
            margin: '0 0 56px 0',
          }}
        >
          Six steps. One session.
        </h2>

        {/* Steps grid */}
        <div
          style={{
            display: 'grid',
            gap: 1,
            background: 'var(--hairline)',
            border: '1px solid var(--hairline)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {STEPS.map((step) => (
            <div
              key={step.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                background: 'var(--ink-2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '24px 0',
                  borderRight: '1px solid var(--hairline)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 24,
                    color: 'var(--cream-3)',
                  }}
                >
                  {step.num}
                </span>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--cream)',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'var(--cream-2)',
                  }}
                >
                  {step.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
