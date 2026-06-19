import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

export default function AppHub({ navigate }) {
  return (
    <div className="app-shell">
      <Header title="Atlasic Global" navigate={navigate} />

      <header className="hero">
        <div className="hero-copy">
          <div className="hero-branding">
            <p className="eyebrow">Atlasic Global</p>
            <h1>One brand. Two experiences.</h1>
          </div>
          <p>Welcome to Atlasic Global — choose Atlasic Apparel for clothing or Atlasic Construction for painting & tiling services.</p>
          <div className="hero-actions">
            <button onClick={(e) => { e.preventDefault(); navigate('/apparel'); }} className="hero-button">Atlasic Apparel</button>
            <button onClick={(e) => { e.preventDefault(); navigate('/construction'); }} className="hero-button secondary">Atlasic Building  Group</button>
            <button onClick={(e) => { e.preventDefault(); navigate('/work'); }} className="hero-button">Real Work</button>
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}
