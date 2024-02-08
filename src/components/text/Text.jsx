import React, { useState, useEffect } from 'react';
import './Text.css'

const Text = () => {
    const texts = [
        "The studio specializes in custom-made family and lifestyle portraiture with a goal of capturing beautiful, authentic moments with high-quality, professional prints.",
        "At the heart of our studio's focus is the art of crafting personalized family and lifestyle portraits. Our mission is to immortalize remarkable, genuine moments, producing impeccable professional prints that stand as cherished memories for a lifetime.",
      "Dedicated to the craft of creating tailor-made family and lifestyle portraits, our studio excels in capturing genuine, enchanting moments. Our commitment to excellence shines through in the exceptional quality of our professional prints, preserving your special memories with unparalleled beauty and authenticity.",


      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
    
      const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
      };
    
      return (
        <div className="slide-show-wrapper">
          <div className="slide-container">
            {texts.map((text, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <h2 className="slide-text">{text}</h2>
              </div>
            ))}
          </div>
          <div className="indicator-bar">
            {texts.map((text, index) => (
              <span
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
  )
}

export default Text