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
      <Introduction />
      <hr style={hrStyle} />
      <Problem />
      <hr style={hrStyle} />
      <Method />
      <hr style={hrStyle} />
      <AppDemo />
      <hr style={hrStyle} />
      <Workflow />
      <hr style={hrStyle} />
      <Session />
      <hr style={hrStyle} />
      <Research />
      <hr style={hrStyle} />
      <Feasibility />
      <hr style={hrStyle} />
      <Reflections />
      <hr style={hrStyle} />
      <Footer />
    </div>
  );
}
