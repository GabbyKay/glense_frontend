import React, { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';

const images = [
  './images/Albumbgimg/img2.jpg',
  './images/Albumbgimg/img7.jpg',
  './images/Albumbgimg/img5.jpg',
  './images/Albumbgimg/img6.jpg',
  './images/Albumbgimg/img1.jpg',
  // Add more image URLs here
];

const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for a more realistic effect
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulated loading time

    return () => clearTimeout(loadingTimeout);
  }, []);

  // Function to handle changing images on a timer
  useEffect(() => {
    if (!isLoading) {
      const slideshowInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 9 seconds

      return () => {
        clearInterval(slideshowInterval);
      };
    }
  }, [isLoading]);

  return (
    <div className="background-slideshow-container">
      <div
        className={`background-slideshow-image ${
          isLoading ? 'loading-skeleton' : ''
        }`}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transition: 'background-image 3s ease-in-out',
        }}
      ></div>
      <div className={`thumbnail-container ${isLoading ? 'loading' : ''}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlideshow;
