import React, { useState, useEffect } from 'react';
import './App.css';
import AppHub from './AppHub';
import Apparel from './Apparel';
import Construction from './Construction';

import vinevat1 from './images/vinevat/WhatsApp Image 2026-06-17 at 20.33.26.jpeg'
import vinevat2 from './images/vinevat/WhatsApp Image 2026-06-17 at 20.33.27 (1).jpeg'
import vinevat3 from './images/vinevat/WhatsApp Image 2026-06-17 at 20.33.27.jpeg'
import paint1 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43 (1).jpeg'
import paint2 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43 (2).jpeg'
import paint3 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43.jpeg'

const services = [
  {
    title: 'Painting & Finishing',
    description: 'Interior and exterior painting with premium finishes and modern color consultation.',
    image: paint1,
  },
  {
    title: 'Tile Installation',
    description: 'Custom tile layouts for kitchens, bathrooms, floors and feature walls.',
    image: paint2,
  },
  {
    title: 'Master Plumbing Service',
    description: 'Expert plumbing solutions for residential and commercial properties.',
    image: paint3,
  },
];

const products = [
  {
    name: 'Vine-Vat Denim Jacket',
    description: 'Soft, structured denim crafted for everyday comfort.',
    image: vinevat1,
  },
  {
    name: 'Vine-Vat Chill Hoodie',
    description: 'Lightweight hoodie with a clean signature logo for layered style.',
    image: vinevat2,
  },
  {
    name: 'Vine-Vat Linen Shirt',
    description: 'Breezy linen with subtle tailoring for a sleek, polished look.',
    image: vinevat3,
  },
];

export default function App() {
  const [route, setRoute] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (path) => {
    if (path === route) return;
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  if (route === '/apparel') {
    return <Apparel products={products} navigate={navigate} />;
  }

  if (route === '/construction') {
    return <Construction services={services} navigate={navigate} />;
  }

  return <AppHub navigate={navigate} />;
}
