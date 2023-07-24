import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  const imagePath = 'https://o.remove.bg/downloads/ea446e93-89c1-4bc2-afd8-e01fec20c9d8/image_2023-07-19_210321690-removebg-preview.png';

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>AIRPODS </h3>
          <h3>MAX</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner