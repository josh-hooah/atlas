import React from 'react';
import './App.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Atlasic Global. All rights reserved.</p>
      <p>Atlasic Apparel | Atlasic Construction | WhatsApp: +234 816 604 4468</p>
      <div className="footer-location">
        <strong>Location:</strong>
        <span> <a href="https://www.google.com/maps/search/?api=1&query=Upper+Sakponba+Road,+Benin+City,+Nigeria" target="_blank" rel="noopener noreferrer">Benin City, Nigeria — Upper Sakponba Road</a></span>
      </div>
    </footer>
  );
}
