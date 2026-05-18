import React from 'react';

export default function Session() {
  return (
    <section
      id="walkthrough"
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
          § 06 &nbsp;&nbsp; Walkthrough
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
          Hassan, age 23, prepares for CSS.
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
              H
            </span>
            assan lives in Islamabad. He graduated from a public university two years ago and
            is now preparing for his first attempt at the Central Superior Services examination.
            His optional subjects include Pakistan Affairs and Constitutional Law. He studies
            alone, mostly from printed guides and YouTube lectures. He has tried Anki briefly
            but found the interface unintuitive and the card-creation process too slow for the
            volume he needed to cover.
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
            During onboarding, Hassan completes the spatial screening. His scores place him as
            a Verbal-Primary learner: strong linguistic recall, moderate spatial orientation. The
            system notes this and adjusts emphasis toward the verbal label layer while still
            building the full spatial scaffold.
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
            Hassan opens Loci and pastes 400 words from his constitutional history notes,
            covering the period from the 1956 Constitution through the Eighteenth Amendment. The
            system sends this text to the Claude API. Nine concepts come back: Constitution of
            1956, Constitution of 1962, Basic Democracies, 1973 Constitution, Article 58(2)(b),
            Eighth Amendment, Thirteenth Amendment, Seventeenth Amendment, Eighteenth Amendment.
            Each concept has a definition and a metaphor.
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
            Hassan selects "Home" as his familiar space. His bedroom loads. The environment
            shows nine anchor points: bed, bedside table, study desk, desk chair, bookshelf,
            door, window, wall frame, wardrobe. Each concept has been placed at one of these
            points. Hassan walks the route left to right. At the bed, he sees a cracked old
            scroll resting on a marble pillar. He clicks it: Constitution of 1956, Pakistan's
            first constitution, established it as an Islamic Republic. He moves to the bedside
            table: a soldier's helmet placed on a judge's bench. Constitution of 1962,
            presidential system introduced by Ayub Khan.
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
            He spends about ten minutes walking the full route, clicking each object, reading
            definitions, studying metaphors. At the desk chair, a heavy green book chained to
            the floor with a padlock: the 1973 Constitution, parliamentary democracy, drafted
            under Bhutto, still operative. The metaphor sticks. The padlock, the weight, the
            colour green. These are not random images. They are designed to be concrete,
            sensory, and slightly strange, the exact conditions Bower (1970) identified as
            optimal for recall.
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
            The next day, Hassan opens Loci again. The system detects that twenty-four hours
            have passed and loads Recall Mode. His bedroom appears, but the objects are gone.
            The anchor points remain as empty markers. Hassan navigates to each point and types
            the concept name. He scores 7 out of 9. The two he missed (Thirteenth Amendment
            and Seventeenth Amendment) are flagged for re-encoding. Their metaphors were too
            similar: scissors in both cases. The system notes this and will generate
            differentiated metaphors in the next session.
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
            After four sessions over two weeks, Hassan consistently scores 9 out of 9 on this
            passage. He has not re-read the source material once since the initial paste. The
            memory now lives in his bedroom.
          </p>
        </div>
      </div>
    </section>
  );
}
