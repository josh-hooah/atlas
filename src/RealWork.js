import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

export default function RealWork({ images = [], navigate }) {
  return (
    <div className="app-shell">
      <Header title="Atlasic Real Work" navigate={navigate} />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Real Work</p>
          <h2>On-site Projects</h2>
          <p>Progress photos, installations and completed jobs from our team.</p>
        </div>

        <div className="card-grid">
          {images.map((img, idx) => (
            <article key={idx} className="info-card">
              <img className="service-image" src={img} alt={`Work ${idx + 1}`} />
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
