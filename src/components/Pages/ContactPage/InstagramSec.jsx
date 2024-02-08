// InstagramSec.jsx
import React from "react";
import { motion } from 'framer-motion';
import "./InstagramSec.css";

const InstagramSec = () => {
  const imageUrls = [
    "/images/image1.jpg",
    "/images/glensofficial.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="instagram-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {imageUrls.map((imageUrl, index) => (
        <motion.div
          key={index}
          className="image-box"
          variants={imageVariants}
        >
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InstagramSec;
