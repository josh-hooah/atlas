import React, { useState, useEffect } from 'react';
import './App.css';
import AppHub from './AppHub';
import Apparel from './Apparel';
import Construction from './Construction';
import RealWork from './RealWork';

import vinevat1 from './images/vinevat/WhatsApp Image 2026-06-17 at 20.33.26.jpeg'
import vinevat2 from './images/vinevat/WhatsApp Image 2026-06-17 at 20.33.27 (1).jpeg'
import vinevat3 from './images/vinevat/WhatsApp Image 2026-06-17 at 20.33.27.jpeg'
import paint1 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43 (1).jpeg'
import paint2 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43 (2).jpeg'
import paint3 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43 (3).jpeg'
import paint4 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.43.jpeg'
import paint5 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.44 (1).jpeg'
import paint6 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.44 (2).jpeg'
import paint7 from './images/painting/WhatsApp Image 2026-06-17 at 20.31.44.jpeg'
import plumbing1 from './images/plumbing/WhatsApp Image 2026-06-18 at 20.27.54 (1).jpeg'
import plumbing2 from './images/plumbing/WhatsApp Image 2026-06-18 at 20.27.54 (2).jpeg'
import plumbing3 from './images/plumbing/WhatsApp Image 2026-06-18 at 20.27.54.jpeg'
import plumbing4 from './images/plumbing/WhatsApp Image 2026-06-18 at 20.27.55.jpeg'

import hand1 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.47.jpeg'
import hand2 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.47 (1).jpeg'
import hand3 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.48.jpeg'
import hand4 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.48 (1).jpeg'
import hand5 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.48 (2).jpeg'
import hand6 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.48 (3).jpeg'
import hand7 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.49.jpeg'
import hand8 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.49 (1).jpeg'
import hand9 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.49 (2).jpeg'
import hand10 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.49 (3).jpeg'
import hand11 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.50.jpeg'
import hand12 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.50 (1).jpeg'
import hand13 from './images/handsondeck/WhatsApp Image 2026-06-18 at 20.39.50 (2).jpeg'

import hoodie1 from './images/vinevat_hoodie/WhatsApp Image 2026-06-18 at 20.15.56.jpeg'
import hoodie2 from './images/vinevat_hoodie/WhatsApp Image 2026-06-18 at 20.28.53.jpeg'
import hoodie3 from './images/vinevat_hoodie/WhatsApp Image 2026-06-18 at 20.30.26.jpeg'

import tile1 from './images/tiling/WhatsApp Image 2026-06-18 at 14.06.00.jpeg'
import tile2 from './images/tiling/WhatsApp Image 2026-06-18 at 14.06.00 (1).jpeg'
const paintingImages = [paint1, paint2, paint3, paint4, paint5, paint6, paint7];

const tilingImages = [tile1, tile2];
const plumbingImages = [plumbing1, plumbing2, plumbing3, plumbing4];

const services = [
  {
    title: 'Painting & Finishing',
    description: 'Interior and exterior painting with premium finishes and modern color consultation.',
    image: paintingImages[0],
    images: paintingImages,
  },
  {
    title: 'Tile Installation',
    description: 'Custom tile layouts for kitchens, bathrooms, floors and feature walls.',
    image: tilingImages[0] || paintingImages[1],
    images: tilingImages,
  },
  {
    title: 'Plumbing',
    description: 'General plumbing repairs, installations and maintenance for homes and businesses.',
    image: plumbingImages[0],
    images: plumbingImages,
  },
];

const products = [
  {
    name: 'Vine-Vat T-Shirt',
    description: 'Soft, structured, crafted for everyday comfort.',
    image: vinevat1,
  },

  {
    name: 'Vine-Vat Denim jacket (Black)',
    description: 'Signature jacket in black for a minimal, wearable look.',
    image: hoodie2,
  },
  {
    name: 'Vine-Vat Chill T-Shirt',
    description: 'Lightweight T-shirt with a clean signature logo for layered style.',
    image: vinevat2,
  },
  {
    name: 'Vine-Vat Linen Shirt',
    description: 'Breezy linen with subtle tailoring for a sleek, polished look.',
    image: vinevat3,
  },
  {
    name: 'Vine-Vat Hoodie (Burgundy)',
    description: 'Crisp white hoodie — versatile and comfortable.',
    image: hoodie3,
  }, 
  {
    name: 'Vine-Vat Hoodie (White)',
    description: 'Classic Vine-Vat hoodie — cozy, lightweight and logo-accented.',
    image: hoodie1,
  },
];

const workImages = [hand1, hand2, hand3, hand4, hand5, hand6, hand7, hand8, hand9, hand10, hand11, hand12, hand13];

export default function App() {
  const [route, setRoute] = useState(window.location.pathname || '/');

  const hoodies = products.filter((p) => p.name.toLowerCase().includes('hoodie'));
  const shirts = products.filter((p) => p.name.toLowerCase().includes('shirt', 'jacket'));

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
    return <Apparel shirts={shirts} hoodies={hoodies} navigate={navigate} />;
  }

  if (route === '/construction') {
    return <Construction services={services} navigate={navigate} paintingImages={paintingImages} tilingImages={tilingImages} plumbingImages={plumbingImages} />;
  }

  if (route === '/work') {
    return <RealWork images={workImages} navigate={navigate} />;
  }

  return <AppHub navigate={navigate} />;
}
