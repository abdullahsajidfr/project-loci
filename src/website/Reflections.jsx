import React from 'react';

export default function Reflections() {
  return (
    <section
      id="reflections"
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
          § 09 &nbsp;&nbsp; Reflections
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
            margin: '0 0 48px 0',
            maxWidth: '20ch',
          }}
        >
          What we got wrong, and what we learned to ask.
        </h2>

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
            The first version of this project was broader. It attempted to serve any student
            preparing for any exam, anywhere. The familiar space was generic. The concept
            extraction had no subject-specific tuning. The onboarding asked for a name and an
            email, nothing more. Feedback from early reviewers was consistent: the tool felt
            correct in principle but disconnected in practice. It did not feel like it was built
            for anyone in particular.
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
            The narrowing happened in stages. First to South Asian students. Then to Pakistani
            students preparing for high-density examinations. Then specifically to MDCAT and CSS
            aspirants, ages 17 to 24, in the 6 to 12 month preparation window. Each narrowing
            made the design more specific: the choice of familiar spaces (bedroom, campus,
            school), the kinds of content in the demo (constitutional history, not abstract
            examples), the language in the interface (direct, practical, without Western
            pedagogical jargon).
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
            The most significant addition came from feedback about the missing intelligence
            theory. Early versions of the project treated all students as identical spatial
            learners. A reviewer pointed out that Gardner's framework (1983) and the spatial
            ability literature (Hegarty & Waller, 2004) make clear that spatial reasoning
            varies significantly across individuals. Not every student will benefit equally
            from a spatial encoding approach.
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
            This led to the onboarding screening and the three learner profiles. It also led
            to the three-layer encoding model, where the verbal, visual, and spatial layers
            are always present but their relative emphasis shifts based on the student's
            profile. A Verbal-Primary learner still walks the route and sees the spatial
            environment, but the interface gives more weight to labels and definitions. A
            Spatial-Primary learner sees larger metaphor imagery and a more prominent path
            overlay. The system adapts. It does not exclude.
          </p>
        </div>

        {/* Section divider ornament */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            margin: '64px 0',
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }} />
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 20,
              color: 'var(--cream-3)',
              fontStyle: 'italic',
            }}
          >
            §
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }} />
        </div>

        {/* Conclusion */}
        <div style={{ maxWidth: 640 }}>
          <h3
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              margin: '0 0 20px 0',
            }}
          >
            Conclusion
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
            The problem is specific: Pakistani students preparing for MDCAT and CSS examinations
            must memorise vast quantities of declarative knowledge using methods that have not
            changed in decades, while their attentional environments have changed fundamentally.
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
            The tool is specific: a browser-based spatial encoding system where a student
            pastes text, an LLM extracts concepts with visual metaphors, and the concepts are
            placed in a familiar 3D environment that the student walks through and later
            recalls.
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
            The theoretical backing is substantial. Maguire et al. (2003) on spatial memory
            activation. Dresler et al. (2017) on Method of Loci training effects. Paivio
            (1991) on dual coding. Sweller (1988) on cognitive load management. Roediger and
            Karpicke (2006) on retrieval practice. O'Keefe and Nadel (1978) on place cells
            and cognitive maps. Gardner (1983) on spatial intelligence as a distinct capacity.
            Bower (1970) on bizarre imagery. Hegarty and Waller (2004) on spatial orientation
            as a predictor.
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
            What remains is validation. A controlled study comparing Loci-assisted encoding
            against standard re-reading in a cohort of MDCAT or CSS aspirants, measuring
            retention at 24 hours, 7 days, and 30 days, would be the minimum necessary to move
            from theoretical plausibility to empirical claim. Until that study is conducted,
            Project Loci is a well-grounded prototype. Not yet a proven intervention.
          </p>
        </div>
      </div>
    </section>
  );
}
