import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SAMPLE_TEXT } from '../../data/sampleText';
import Button from '../../shared/Button';

const SUBJECTS = [
  'MDCAT - Biology',
  'MDCAT - Chemistry',
  'CSS - Constitutional History',
  'CSS - Pakistan Affairs',
];

export default function TextInput() {
  const { goTo, setInput, subject: ctxSubject } = useApp();
  const [text, setText] = useState('');
  const [subject, setSubject] = useState(ctxSubject || 'CSS - Constitutional History');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const overLimit = wordCount > 500;
  const estConcepts = Math.min(12, Math.max(0, Math.floor(wordCount / 20)));

  const handleExtract = () => {
    setInput(text, subject);
    goTo('processing');
  };

  const loadSample = () => {
    setText(SAMPLE_TEXT);
    setSubject('CSS - Constitutional History');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '80px 24px 48px',
        background: '#0a0d18',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Tag */}
      <span
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 11,
          fontWeight: 600,
          color: '#4d7cfe',
          textTransform: 'uppercase',
          letterSpacing: 2,
          background: 'rgba(77,124,254,0.1)',
          padding: '4px 14px',
          borderRadius: 20,
        }}
      >
        Step 1 - Text Input
      </span>

      <h1
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 30,
          fontWeight: 700,
          color: '#e8edf5',
          margin: '14px 0 8px',
        }}
      >
        Paste your study material
      </h1>

      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 14,
          color: '#7889a8',
          margin: '0 0 28px',
          maxWidth: 480,
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        Enter or paste the text you want to memorise. We will extract the key
        concepts and build your memory palace around them.
      </p>

      {/* Subject pills */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 24,
        }}
      >
        {SUBJECTS.map((s) => {
          const active = s === subject;
          return (
            <button
              key={s}
              onClick={() => setSubject(s)}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                fontWeight: 600,
                color: active ? '#e8edf5' : '#7889a8',
                background: active
                  ? 'rgba(77,124,254,0.15)'
                  : '#181c2d',
                border: active
                  ? '1px solid rgba(77,124,254,0.4)'
                  : '1px solid #252b42',
                borderRadius: 20,
                padding: '6px 16px',
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {s}
            </button>
          );
        })}
      </div>

      {/* Textarea */}
      <div
        style={{
          width: '100%',
          maxWidth: 600,
          position: 'relative',
          marginBottom: 12,
        }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your study notes, textbook passage, or topic summary here..."
          style={{
            width: '100%',
            minHeight: 200,
            padding: '16px 18px',
            borderRadius: 12,
            border: overLimit ? '1px solid #e85a2a' : '1px solid #252b42',
            background: '#121622',
            color: '#e8edf5',
            fontFamily: 'var(--sans)',
            fontSize: 14,
            lineHeight: 1.7,
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {/* Word count */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                color: overLimit ? '#e85a2a' : '#7889a8',
                fontWeight: 500,
              }}
            >
              {wordCount}/500 words
            </span>
            {text.length > 0 && (
              <button
                onClick={() => setText('')}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: '#7889a8',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                }}
              >
                Clear
              </button>
            )}
          </div>
          <button
            onClick={loadSample}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 12,
              color: '#4d7cfe',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline',
            }}
          >
            Load sample: Pakistan Constitutional History
          </button>
        </div>
      </div>

      {/* Info cards */}
      <div
        style={{
          display: 'flex',
          gap: 14,
          width: '100%',
          maxWidth: 600,
          marginTop: 20,
          marginBottom: 28,
        }}
      >
        {[
          { label: 'Subject', value: subject, color: '#4d7cfe' },
          {
            label: 'Interface',
            value: 'Verbal-Primary',
            color: '#7ba1ff',
          },
          {
            label: 'Est. Concepts',
            value: estConcepts > 0 ? String(estConcepts) : '--',
            color: '#ffa478',
          },
        ].map((card) => (
          <div
            key={card.label}
            style={{
              flex: 1,
              padding: '14px 16px',
              borderRadius: 10,
              background: '#121622',
              border: '1px solid #252b42',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 11,
                fontWeight: 600,
                color: '#7889a8',
                textTransform: 'uppercase',
                letterSpacing: 1,
                margin: '0 0 6px',
              }}
            >
              {card.label}
            </p>
            <p
              style={{
                fontFamily: 'var(--heading)',
                fontSize: 15,
                fontWeight: 600,
                color: card.color,
                margin: 0,
              }}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Extract button */}
      <Button
        variant="primary"
        size="lg"
        onClick={handleExtract}
        disabled={wordCount < 5}
      >
        Extract Concepts
      </Button>
    </div>
  );
}
