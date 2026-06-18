import React from 'react';
import './App.css';
import logo from './images/logo.jpeg';

export default function Header({ title, navigate }) {
  return (
    <div className="header-bar">
      <div className="brand-header">
        <img src={logo} alt="Atlasic Global Logo" className="brand-logo" />
        <div>
          <strong>{title}</strong>
        </div>
      </div>
      {navigate && (
        <button className="header-home" onClick={() => navigate('/')}>Home</button>
      )}
    </div>
  );
}
