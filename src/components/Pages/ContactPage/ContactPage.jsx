import React from "react";
import { motion } from 'framer-motion';
import Navbar from "../../Navbar/Navbar";
import "./ContactPage.css";
import ContactForm from "./ContactForm";
import InstagramSec from "./InstagramSec";
import Footer from "../../Footer/Footer";

const ContactPage = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const headingVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

  const sectionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="contact-page-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <div className="contact-bg-img">
        <img src="./images/Albumbgimg/img5.jpg" alt="" />
        <motion.h1
          className="contactpage-h1"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          Contact Us
        </motion.h1>
      </div>
      {/* address section  */}
      <motion.div
        className="address-sec"
        variants={sectionVariants}
        initial="initial"
        animate="animate"
      >
      <div className="address-sec">
        <div className="address-sec-inner-container">
          <div style={{ border: "0.4px solid white", padding: "4rem 6rem" }}>
            <h1>Contact</h1>
            <br />
            <p>glense@gmail.com</p>
          </div>
          <div style={{ border: "0.4px solid white", padding: "4rem 6rem" }}>
            <h1>Address</h1>
            <br />
            <p>
              18 Ariel Close, Colchester, <br /> C04 3SJ, UK
            </p>
          </div>
          <div style={{ border: "0.4px solid white", padding: "4rem 6rem" }}>
            <h1>Socials</h1>
            <br />
            <div className="contactpage_social_links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      {/* contact form section  */}
      <motion.div
        className="contact-form-container"
        variants={sectionVariants}
        initial="initial"
        animate="animate"
      >
         <div className="inner-left-contact-form">
          <span>GET IN TOUCH</span>
          <br />
          <br />
          <h1>Contact Us</h1>
          <br />
          <p>We deeply appreciate your interest in entrusting us with the opportunity to capture your cherished moments through photography. It is an absolute honor for us. If you would like to learn more about our services or simply wish to connect with a warm greeting, we kindly invite you to utilize the contact form provided. Rest assured, your message is of utmost importance to us, and we will respond promptly. We are eagerly excited to hear from you and have the privilege of encapsulating your unique and beautiful narrative into timeless photographs. Looking forward to the wonderful journey of creating cherished memories together!.</p>
        </div>
        <div className="inner-right-contact-form">
          <ContactForm/>
        </div>
      </motion.div>
      {/* instagram sec */}
      <motion.div
        className="instagram-sampeles"
        variants={sectionVariants}
        initial="initial"
        animate="animate"
      >
        <InstagramSec/>
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="initial"
        animate="animate"
      >
        <Footer/>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
