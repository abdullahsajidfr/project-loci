import React from 'react';

export default function Introduction() {
  return (
    <section
      id="abstract"
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
          § 01 &nbsp;&nbsp; Introduction
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
          When the volume of memorisation outpaces the methods used to memorise.
        </h2>

        {/* Prose with drop cap */}
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
            <span
              style={{
                float: 'left',
                fontFamily: 'var(--serif)',
                fontSize: 72,
                lineHeight: 0.78,
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--cream)',
                marginRight: 8,
                marginTop: 4,
              }}
            >
              P
            </span>
            akistan's examination culture rests on an asymmetry. On one side is the sheer volume of
            declarative knowledge a student must retain: thousands of named facts, definitions,
            classifications, constitutional articles, pharmacological dosages, diagnostic criteria.
            On the other side is the method available to retain it: passive re-reading, sometimes
            supplemented by highlighting or note-copying. The gap between these two sides is
            where most failure occurs.
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
            The MDCAT (Medical and Dental College Admission Test) demands recall across biology,
            chemistry, physics, and English, all compressed into a single high-stakes sitting.
            The CSS (Central Superior Services) examination spans twelve papers across general
            knowledge, current affairs, and optional subjects drawn from law, economics, history,
            and political science. In both cases, the density of factual recall required is
            extraordinary, and the preparation methods have not changed in decades.
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
            The evidence is clear that passive re-reading is among the least effective forms of
            study (Roediger & Karpicke, 2006). Active retrieval, spaced repetition, and
            elaborative encoding consistently outperform it. Yet these methods remain almost
            entirely absent from the preparation ecosystem available to the average Pakistani
            student. Norcini and colleagues have documented retake rates that reflect this
            structural gap: the failure is not in the students, it is in the tools.
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
            Project Loci is a browser-based encoding tool. A student pastes source text from
            their syllabus. A large language model extracts the key concepts, generates a
            concrete visual metaphor for each one, and places them at anchor points within a
            familiar spatial environment: a bedroom, a university corridor, the route to school.
            The student then walks the route, exploring objects and building a spatial memory
            trace. After twenty-four hours, a Recall Mode presents the same environment with the
            objects removed, asking the student to navigate to the correct location and name
            what was there.
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
            maxWidth: '28ch',
          }}
        >
          Students in this cohort are not only being asked to memorise more than any previous
          generation, they are doing so with attentional capacity that is, on average, lower.
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--sans)',
              fontStyle: 'normal',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'var(--cream-3)',
              marginTop: 16,
            }}
          >
            After Laid (2024) & Manwell et al. (2022)
          </span>
        </blockquote>
      </div>
    </section>
  );
}
