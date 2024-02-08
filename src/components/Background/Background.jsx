import React, { useState, useEffect } from 'react'
import './Background.css'
const Background = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const imagesData = [
        { url: './images/image1.jpg', text: 'Unveiling Beauty ' },
        { url: './images/image2.jpg', text: ' Freezes fleeting moments' },
        { url: './images/image3.jpg', text: ' Art in Focus' },
        { url: './images/image4.jpg', text: 'Capturing Emotions' },
        { url: './images/image5.jpg', text: ' Unforgettable Stories' },
        { url: './images/image6.jpg', text: 'We go beyond Beyond the Frame' },
      ];
    
  
    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [imagesData.length]);
    
      const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
      };
    
      const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length);
      };
    
      return (
        <div className="home-background-slider">
          <div className="slider-image" style={{ backgroundImage: `url(${imagesData[activeIndex].url})` }}>
            <div className="slider-text">
              <h3>{imagesData[activeIndex].text}</h3>
            </div>
            <div className="slider-nav">
              <button style={{position:"relative",   transform: 'rotate(90deg)' }} className="slider-nav-button" onClick={prevSlide}>
                &lt;
              </button>
              <button style={{position:"relative", transform: 'rotate(90deg)' }} className="slider-nav-button" onClick={nextSlide}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      );
    };
    
export default Background