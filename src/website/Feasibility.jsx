import React from 'react';

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'LLM Pipeline',
    timeline: 'Weeks 1–3',
    desc: 'Structured prompt engineering for concept extraction and metaphor generation. Claude API integration with fallback handling. JSON schema validation. Rate limiting and cost controls. Input sanitisation and length enforcement.',
  },
  {
    phase: 'Phase 2',
    title: '3D Environment',
    timeline: 'Weeks 4–7',
    desc: 'React Three Fiber scene graph for the bedroom environment. Anchor point system with fixed positions and traversal paths. Object placement rendering. Camera controls optimised for walkthrough interaction. Asset loading pipeline.',
  },
  {
    phase: 'Phase 3',
    title: 'Recall & Screening',
    timeline: 'Weeks 8–10',
    desc: 'Recall Mode: same environment, objects removed, scoring interface. Spatial screening assessment based on Hegarty & Waller perspective-taking tasks. Learner profile classification (Spatial-Primary, Verbal-Primary, Mixed). Session history and progress tracking.',
  },
  {
    phase: 'Phase 4',
    title: 'Integration & Testing',
    timeline: 'Weeks 11–12',
    desc: 'Firebase backend for user sessions and progress data. End-to-end flow testing. Performance optimisation for low-bandwidth connections. Accessibility audit. Documentation and deployment to production.',
  },
];

export default function Feasibility() {
  return (
    <section
      id="feasibility"
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
          § 08 &nbsp;&nbsp; Feasibility
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
            maxWidth: '20ch',
          }}
        >
          What can be built. What cannot yet be claimed.
        </h2>

        {/* Prose */}
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            Every component in the Loci architecture uses production-ready technology. The
            frontend is React with Three.js for 3D rendering. The backend is Node.js with
            Firebase for authentication, session storage, and progress tracking. Concept
            extraction runs through the Claude API with structured prompts and JSON schema
            validation. Hosting costs for a prototype-stage application of this scope are
            negligible.
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            The question is not whether the technology exists. It is whether the assembly
            produces the claimed effect. That is an empirical question, and this project does
            not yet answer it. What follows is the implementation roadmap and, equally
            important, a clear statement of limitations.
          </p>
        </div>

        {/* Phase cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 16,
            marginBottom: 64,
          }}
        >
          {PHASES.map((phase, i) => (
            <div
              key={i}
              style={{
                padding: 28,
                background: 'var(--ink-2)',
                border: '1px solid var(--hairline)',
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                  }}
                >
                  {phase.phase}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 11,
                    color: 'var(--cream-3)',
                  }}
                >
                  {phase.timeline}
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'var(--cream)',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {phase.title}
              </span>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: 'var(--cream-2)',
                  margin: 0,
                }}
              >
                {phase.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Limitations */}
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
            Limitations
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
            No empirical testing has been conducted. The theoretical grounding is strong, but
            the specific implementation (LLM-generated metaphors placed in browser-rendered 3D
            environments for Pakistani exam students) has not been validated with a controlled
            study. Until that happens, efficacy claims are speculative.
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            The 3D asset library is currently small. Only four environments are available (bedroom,
            campus, school, custom). A production version would need significantly more variety
            to maintain novelty across extended use.
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            LLM-generated metaphors carry a Western cultural bias. The Claude API has been
            trained predominantly on English-language data, and its imagery defaults tend toward
            Western cultural references. For Pakistani students, some metaphors may feel foreign
            or unintuitive. A production system would need culturally calibrated prompt
            engineering and, ideally, a feedback mechanism for students to flag unhelpful metaphors.
          </p>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            Spacing compliance is not enforced. The system prompts students to return after
            twenty-four hours for Recall Mode, but there is no mechanism to ensure they do. If a
            student delays recall by several days, the spacing effect degrades. A notification
            system or integration with study scheduling tools would help.
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
            The scope is limited to declarative knowledge. Procedural skills, analytical
            reasoning, and essay composition are outside the system's design. This is a
            deliberate constraint, not a limitation to be solved, but it should be clearly
            communicated to users.
          </p>
        </div>
      </div>
    </section>
  );
}
