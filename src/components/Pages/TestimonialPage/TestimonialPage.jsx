import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Testimonial.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { testimonialData } from "../../../Data";


const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {testimonial.avatar && (
        <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
      )}
      <p className="testimonial-message">{testimonial.message}</p>
      <br />
      <p className="testimonial-name">- {testimonial.name}</p>
    </motion.div>
  );
};

const TestimonialPage = () => {
  return (
    <div>
      <Navbar />
      <div className="testimonialimg">
        <img src="./images/testimonialimg/img4.jpg" alt="" />
      </div>
      <br />
      <br />
      <div className="testimonial-container">
        {/* <h1>Testimonials</h1> */}
        <div className="testimonial-grid">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="testimonial2">
        <div className="testimonial2-heading">
          <h3>TESTIMONIALS</h3>
          <h1>They Say About Our Work</h1>
        </div>
        <div className="testimonial2-inner-container">
          {/* rtd  */}
          <div className="testimonial2-inner-container-rtd">
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{
                    width: "90px",
                    height: "15vh",
                    borderRadius: "50%",
                    position: "relative",
                    objectFit:"cover",
                    left: "1rem",
                  }}
                  src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <div
                style={{
                  position: "relative",
                  top: "2rem",
                  paddingLeft:"2rem",
                  fontSize: "1.6rem",
                  fontStyle: "italic",
                }}
              >
                <h1>Jenny Wilson Marketing Coordinator</h1>
              </div>
            </div>
            <p style={{ fontSize: "1.2rem" }}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound
            </p>
          </div>

          {/* ltd  */}
          <div className="testimonial2-inner-container-ltd">
            <div style={{ display: "flex" }}>
              <div>
                <img
                  style={{
                    width: "90px",
                    height: "15vh",
                    borderRadius: "50%",
                    position: "relative",
                    objectFit:"cover",
                    left: "1rem",
                  }}
                  src="https://images.unsplash.com/photo-1584969405346-5230ae2bc4fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
              </div>
              <div
                style={{
                  position: "relative",
                  top: "2rem",
                  paddingLeft:"2rem",
                  fontSize: "1.6rem",
                  fontStyle: "italic",
                }}
              >
                <h1>Jenny Wilson Marketing Coordinator</h1>
              </div>
            </div>
            <p style={{ fontSize: "1.2rem" }}>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound
            </p>
          </div>
        </div>
      </div>
      
      {/* contact us  */}
      <div className="t-contactus">
      <div className="t-contactus-container">
        <div className="t-contact-inner-container">
          <span className="t-contactus-span">Need a Photographer?</span>
          <h4> someone with experience to collaborate with?</h4>
        </div>
        <div className="t-contactus-btn">
        <a href="/ContactPage"><button>Contact Us</button></a>
        </div>
      </div>
    </div>
    {/* footer  */}

    <Footer/>
    </div>
  );
};

export default TestimonialPage;
