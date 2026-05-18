import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Introduction from './Introduction';
import Problem from './Problem';
import Method from './Method';
import AppDemo from './AppDemo';
import Workflow from './Workflow';
import Session from './Session';
import Research from './Research';
import Feasibility from './Feasibility';
import Reflections from './Reflections';
import Footer from './Footer';
import Reveal from '../shared/Reveal';

const hrStyle = {
  height: 1,
  background: 'var(--hairline)',
  border: 'none',
  margin: 0,
};

export default function WebsiteLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--ink)',
        color: 'var(--cream)',
      }}
    >
      <Navbar />
      <Hero />
      <hr style={hrStyle} />
      <Reveal><Introduction /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Problem /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Method /></Reveal>
      <hr style={hrStyle} />
      <Reveal><AppDemo /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Workflow /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Session /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Research /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Feasibility /></Reveal>
      <hr style={hrStyle} />
      <Reveal><Reflections /></Reveal>
      <hr style={hrStyle} />
      <Footer />
    </div>
  );
}
