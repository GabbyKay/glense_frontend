// FAQPage.js

import React, { useState } from "react";
import "./Faq.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const FaqPage = () => {
  const faqData = [
    {
      question: "What is the starting price for a photo session?",
      answer:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware. ",
    },
    {
      question: "How long does one pose typically last for?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "Are there any additional fees for special effects and editing services?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "Do you offer digital downloads of photos in addition to physical prints?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "is it possible to make changes to the studio setup before a photoshoot?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Do you provide hair and makeup services on-site?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "How many props do you have available to use during a session?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Can I reserve a time slot ahead of my photo session date?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "Are there staging areas for the subject to be posed in different settings?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "is there an area set up where I can view my photos as they are taken?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more FAQ data as needed
  ];

  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="faq-container">
      <Navbar />
      <div className="faqimg-container">
        <img className="faqimg" src="./images/faqimg/img1.jpg" alt="" />
      </div>
      <div className="the-faq">
        <div className="faq-heading">
          <h3>WE ARE OFTEN ASKED</h3>
          <h1>We Have An Answer To Your Question</h1>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h2 onClick={() => toggleAnswer(index)}>{item.question}</h2>
              {visibleAnswers[index] && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FaqPage;
