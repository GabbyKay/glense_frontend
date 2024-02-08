// PortfolioPage.js

import React from "react";
import "./Portfolio.css";

const PortfolioPage = () => {
  // Dummy image data for the portfolio
  const images = [
    { id: 1, src: "./images/portfolioimg/image1.jpg", alt: "Image 1" },
    { id: 2, src: "./images/portfolioimg/image2.jpg", alt: "Image 2" },
    { id: 3, src: "./images/portfolioimg/image3.jpg", alt: "Image 3" },
    { id: 4, src: "./images/portfolioimg/image4.jpg", alt: "Image 4" },
    { id: 5, src: "./images/portfolioimg/image5.jpg", alt: "Image 5" },
    { id: 6, src: "./images/portfolioimg/image6.jpg", alt: "Image 6" },
    { id: 7, src: "./images/portfolioimg/image7.jpg", alt: "Image 7" },
    { id: 8, src: "./images/portfolioimg/image8.jpg", alt: "Image 8" },
    { id: 9, src: "./images/portfolioimg/image9.jpg", alt: "Image 9" },
    // { id: 10, src:"./images/portfolioimg/image10.jpg", alt: "Image 10" },
    // { id: 11, src:"./images/portfolioimg/image11.jpg", alt: "Image 11"},
    // { id: 12, src:"./images/portfolioimg/image12.jpg", alt: "Image 12" },
    // { id: 13, src:"./images/portfolioimg/image13.jpg", alt: "Image 13" },
    // { id: 14, src:"./images/portfolioimg/image14.jpg", alt: "Image 14" },
    // { id: 15, src:"./images/portfolioimg/image15.jpg", alt: "Image 15" },
    // Add more images as needed
  ];

  return (
    <div className="portfolio-heading">
      <h1>OUR PORTFOLIO</h1>
      <p>
        Our portfolio encompasses a diverse range of photography genres,
        including commercial, portrait, weddina. ana event onotograony
      </p>
      <div className="portfolio-grid">
        {images.map((image) => (
          <div key={image.id} className="grid-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
