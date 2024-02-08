import React from "react";
import "./GalleryPage.css"; // Import your CSS file for styling
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const GalleryPage = () => {
  // Sample image URLs
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];

  return (
    <div>
      <Navbar />
      <div className="gallery-container">
        <h1>Inspiration</h1>
        <div className="image-grid">
          {images.map((imageUrl, index) => (
            <div key={index} className="image-card">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GalleryPage;
