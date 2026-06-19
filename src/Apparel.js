import React, { useState } from 'react';
import './App.css';
import { sendToWhatsApp } from './utils/whatsapp';
import Header from './Header';
import Footer from './Footer';

export default function Apparel({ shirts, hoodies = [], navigate }) {
  const [order, setOrder] = useState({ name: '', email: '', shirts: shirts[0].name, size: 'M', quantity: 1, notes: '' });
  const [orderMessage, setOrderMessage] = useState('');

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: name === 'quantity' ? Number(value) : value }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const message = `Atlasic Apparel - New Order\nName: ${order.name}\nEmail: ${order.email}\nshirts: ${order.shirts}\nSize: ${order.size}\nQuantity: ${order.quantity}\nNotes: ${order.notes || '-'} `;
    setOrderMessage(`Order received for ${order.quantity} x ${order.shirts}.`);
    sendToWhatsApp(message);
    setOrder({ name: '', email: '', shirts: shirts[0].name, size: 'M', quantity: 1, notes: '' });
  };

  return (
    <div className="app-shell">
      <Header title="Atlasic Apparel" navigate={navigate} />

      <section id="clothing" className="section clothing-section">
        <div className="section-heading">
          <p className="eyebrow">Vine-Vat Collection</p>
          <h2>Atlasic Apparel</h2>

          <h3>Vine-Vat T-Shirts</h3>
          <p>Premium pieces with minimalist design, built for comfort and confidence.</p>
        </div>
        <div className="shirts-grid">
          {shirts.map((shirts) => (
            <article key={shirts.name} className="shirts-card">
              <img className="shirts-image" src={shirts.image} alt={shirts.name} />
              <div className="shirts-copy">
                <h3>{shirts.name}</h3>
                <p>{shirts.description}</p>
              </div>
            </article>
          ))}
        </div>

        {hoodies.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 36 }}>
              {/* <p className="eyebrow">Hoodies</p> */}
              <h3>Vine‑Vat Hoodies</h3>
              <p>Cozy, logo-accented hoodies available in multiple colors.</p>
            </div>
            <div className="shirts-grid hoodie-grid">
              {hoodies.map((h) => (
                <article key={h.name} className="shirts-card">
                  <img className="shirts-image" src={h.image} alt={h.name} />
                  <div className="shirts-copy">
                    <h3>{h.name}</h3>
                    <p>{h.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        <div className="section-heading" style={{ marginTop: 36 }}>
          <h2>Place an order</h2>
          <p>Submit your order and we'll reach out via WhatsApp to confirm.</p>
        </div>

        <form className="form-grid" onSubmit={handleOrderSubmit}>
          <label>
            Full name
            <input required name="name" value={order.name} onChange={handleOrderChange} placeholder="Alex Morgan" />
          </label>
          <label>
            Email address
            <input required type="email" name="email" value={order.email} onChange={handleOrderChange} placeholder="alex@example.com" />
          </label>
          <label>
            shirts
            <select name="shirts" value={order.shirts} onChange={handleOrderChange}>
              {shirts.map((p) => (<option key={p.name}>{p.name}</option>))}
            </select>
          </label>
          <div className="split-row">
            <label>
              Size
              <select name="size" value={order.size} onChange={handleOrderChange}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
            <label>
              Quantity
              <input required type="number" min="1" name="quantity" value={order.quantity} onChange={handleOrderChange} />
            </label>
          </div>
          <label className="full-width">
            Special instructions
            <textarea name="notes" value={order.notes} onChange={handleOrderChange} placeholder="Add personalization or delivery notes." />
          </label>
          <button type="submit" className="submit-button">Submit Order</button>
          {orderMessage && <div className="form-message success">{orderMessage}</div>}
        </form>
      </section>
      <Footer />
    </div>
  );
}
