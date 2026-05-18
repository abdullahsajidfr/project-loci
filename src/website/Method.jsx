import React from 'react';

const ENCODING_LAYERS = [
  {
    number: '01',
    title: 'Verbal',
    desc: 'Label and definition. The concept is named and defined in the student\'s own syllabus language. This is Paivio\'s verbal channel: the word-level trace that anchors recognition.',
  },
  {
    number: '02',
    title: 'Visual',
    desc: 'LLM-generated metaphor. A large language model produces a concrete, often bizarre visual image for each concept. Bower (1970) demonstrated that distinctive imagery produces significantly higher recall than mundane imagery, especially in paired-associate tasks.',
  },
  {
    number: '03',
    title: 'Spatial',
    desc: 'Anchor point in a familiar location. Each concept is placed at a specific position within a known environment. O\'Keefe and Nadel (1978) showed that place cells in the hippocampus fire in location-specific patterns, forming a cognitive map that binds episodic memories to spatial contexts.',
  },
];

export default function Method() {
  return (
    <section
      id="method"
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
          § 03 &nbsp;&nbsp; The Method
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
          An old technique, properly housed.
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
          The Method of Loci has been documented since classical rhetoric. The modern
          contribution is not the technique, it is the interface.
        </p>

        {/* Prose */}
        <div style={{ maxWidth: 640 }}>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--cream-2)',
              margin: '0 0 24px 0',
            }}
          >
            Simonides of Ceos is credited with the earliest recorded use of spatial
            mnemonic technique, around 500 BCE. The principle is simple: associate each piece
            of information with a specific location in a well-known environment, then mentally
            walk through that environment to retrieve the information. The technique has been
            validated repeatedly in modern cognitive science. Maguire et al. (2003) used fMRI
            to show that superior memorisers activate spatial brain regions during encoding.
            Dresler et al. (2017) demonstrated that six weeks of Method of Loci training
            restructured functional brain connectivity in naive participants.
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
            The challenge has never been whether the technique works. It has been whether
            non-experts can use it without extensive training. Project Loci addresses this by
            automating the hardest parts: concept extraction, metaphor generation, and spatial
            placement. The student provides the text. The system does the encoding scaffolding.
            The student walks the route.
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
            Gardner's theory of multiple intelligences (1983) identifies spatial intelligence
            as a distinct cognitive capacity, separate from linguistic and logical-mathematical
            abilities. Not every student will benefit equally from spatial encoding. For this
            reason, Loci includes an onboarding assessment that produces one of three profiles:
            Spatial-Primary (strong spatial reasoning, proceed directly to spatial encoding),
            Verbal-Primary (weaker spatial skills, emphasis on verbal labels and definitions
            with spatial as supplementary), and Mixed (balanced approach with equal weight on
            both channels).
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
            Hegarty and Waller (2004) established that spatial orientation ability is a
            reliable predictor of success in navigation tasks. The screening is not gatekeeping.
            It is calibration. Every student gets access to the full tool. The profile adjusts
            which encoding layer receives emphasis.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.25,
            color: 'var(--cream)',
            borderLeft: '1px solid var(--cyan)',
            paddingLeft: 36,
            margin: '56px 0',
            maxWidth: '26ch',
          }}
        >
          The hippocampal architecture that supports spatial memory is universal. The question
          is not whether students can use it, but whether we can lower the barrier to doing so.
        </blockquote>

        {/* Three-layer encoding model */}
        <h3
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--cream)',
            margin: '64px 0 24px 0',
          }}
        >
          Three-layer encoding model
        </h3>

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
          {ENCODING_LAYERS.map((layer) => (
            <div
              key={layer.number}
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
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontStyle: 'italic',
                    fontSize: 32,
                    color: 'var(--cream-3)',
                  }}
                >
                  {layer.number}
                </span>
              </div>
              <div style={{ padding: '24px 24px 24px 0' }}>
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
                  {layer.title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'var(--cream-2)',
                  }}
                >
                  {layer.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
