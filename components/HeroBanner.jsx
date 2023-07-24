import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const imagePath = 'https://o.remove.bg/downloads/ea446e93-89c1-4bc2-afd8-e01fec20c9d8/image_2023-07-19_210321690-removebg-preview.png';
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>AirPods Max</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;
