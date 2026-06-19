import React, { useState } from 'react';
import './App.css';
import { sendToWhatsApp } from './utils/whatsapp';
import Header from './Header';
import Footer from './Footer';

export default function Construction({ services, navigate, paintingImages = [], tilingImages = [], plumbingImages = [] }) {
  const [booking, setBooking] = useState({ name: '', email: '', service: services[0].title, date: '', notes: '' });
  const [bookingMessage, setBookingMessage] = useState('');

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `Atlasic Construction - Booking Request\nName: ${booking.name}\nEmail: ${booking.email}\nService: ${booking.service}\nDate: ${booking.date}\nNotes: ${booking.notes || '-'} `;
    setBookingMessage(`Thank you, ${booking.name}! Your request has been sent.`);
    sendToWhatsApp(message);
    setBooking({ name: '', email: '', service: services[0].title, date: '', notes: '' });
  };

  return (
    <div className="app-shell">
      <Header title="Atlasic Construction" navigate={navigate} />

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Painting and tiling made easy</h2>
          <p>From concept to completion, our team brings precision and style to every room.</p>
        </div>
        <div className="section-heading" style={{ marginTop: 36 }}>
          <h3>Painting</h3>
          <p>Our painting portfolio and recent projects.</p>
        </div>
        <div className="card-grid">
          {(paintingImages && paintingImages.length ? paintingImages : services.find(s => s.title.toLowerCase().includes('paint'))?.images || []).map((img, idx) => (
            <article key={`paint-${idx}`} className="info-card">
              <img className="service-image" src={img} alt={`Painting ${idx + 1}`} />
            </article>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: 36 }}>
          <h3>Tiling</h3>
          <p>Examples of tile installation, layouts and finishes.</p>
        </div>
        <div className="card-grid">
          {(tilingImages && tilingImages.length ? tilingImages : services.find(s => s.title.toLowerCase().includes('tile'))?.images || []).map((img, idx) => (
            <article key={`tile-${idx}`} className="info-card">
              <img className="service-image" src={img} alt={`Tiling ${idx + 1}`} />
            </article>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: 36 }}>
          <h3>Plumbing</h3>
          <p>Plumbing installations, repairs and fittings.</p>
        </div>
        <div className="card-grid">
          {(plumbingImages && plumbingImages.length ? plumbingImages : services.find(s => s.title.toLowerCase().includes('plumb'))?.images || []).map((img, idx) => (
            <article key={`plumb-${idx}`} className="info-card">
              <img className="service-image" src={img} alt={`Plumbing ${idx + 1}`} />
            </article>
          ))}
        </div>
        {/* <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <img className="service-image" src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div> */}

        <div className="section-heading" style={{ marginTop: 36 }}>
          <h2>Book a Service</h2>
          <p>Schedule your painting or tiling consultation and we'll reach out via WhatsApp.</p>
        </div>

        <form className="form-grid" onSubmit={handleBookingSubmit}>
          <label>
            Full name
            <input required name="name" value={booking.name} onChange={handleBookingChange} placeholder="Jane Doe" />
          </label>
          <label>
            Email address
            <input required type="email" name="email" value={booking.email} onChange={handleBookingChange} placeholder="jane@example.com" />
          </label>
          <label>
            Service type
            <select name="service" value={booking.service} onChange={handleBookingChange}>
              {services.map((s) => (<option key={s.title}>{s.title}</option>))}
            </select>
          </label>
          <label>
            Preferred date
            <input required type="date" name="date" value={booking.date} onChange={handleBookingChange} />
          </label>
          <label className="full-width">
            Project details
            <textarea name="notes" value={booking.notes} onChange={handleBookingChange} placeholder="Tell us about your space, materials, or schedule." />
          </label>
          <button type="submit" className="submit-button">Send Booking Request</button>
          {bookingMessage && <div className="form-message success">{bookingMessage}</div>}
        </form>
      </section>
      <Footer />
    </div>
  );
}
